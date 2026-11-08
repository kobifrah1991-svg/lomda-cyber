/* TedraLingo — listen mode, the learner's dictionary and the one-minute level check
 *
 *   LQExtras.listen(view, lang, onExit)       hands-free: every phrase at natural speed, then slowly, with a pause to repeat
 *   LQExtras.dictionary(view, lang, onExit)   every word of the finished stops, searchable, tap to hear
 *   LQExtras.placement(lang, onResult)        six quick questions → a suggested level (0 / 1 / 2), in a modal
 */
(function () {
  const { esc, $, $$, shuffle } = LQUI;
  const { t, f, tr } = LQI18n;
  const ico = (n, s) => LQIcons.svg(n, s);
  const wait = ms => new Promise(r => setTimeout(r, ms));

  /** Stops the learner finished; before the first one, the first stop so the screen is never empty. */
  function learnedStations(lang) {
    const done = LQData.STATIONS.filter(x => LQStore.stationProgress(lang, x.id).lesson);
    return { list: done.length ? done : [LQData.STATIONS[0]], preview: !done.length };
  }

  /* ---------- listen mode ---------- */
  let L = null;

  function listen(view, lang, onExit) {
    stopListen();
    const { list } = learnedStations(lang);
    const items = list.flatMap(st => LQData.LANGS[lang].stations[st.id].phrases.map(p => ({ p, st })));
    L = { view, lang, onExit, items, i: 0, playing: false, run: 0, accent: LQUI.currentAccent() };
    draw();
  }

  function draw() {
    const { p, st } = L.items[L.i];
    L.view.innerHTML = `
      <section class="lesson listen">
        <div class="lesson-top">
          <button class="icon-btn" data-act="exit" aria-label="${t('common.exit')}">${ico('close', 18)}</button>
          <div class="lprog"><i style="width:${Math.round(100 * (L.i + 1) / L.items.length)}%"></i></div>
          <span class="lv-tag">${t('listen.count', { i: L.i + 1, n: L.items.length })}</span>
        </div>
        <div class="lesson-sub"><span>${ico('headphones', 16)} ${t('listen.title')}</span><span class="step-chip">${esc(f(st, 'name'))}</span></div>
        <div class="card listen-card">
          <div class="phrase-emoji">${p.emoji}</div>
          <div class="kara-slot"></div>
          ${LQI18n.showTranslit() ? `<div class="translit">${LQUI.translitLine(p)}</div>` : ''}
          <div class="translation">${esc(tr(p))}</div>
          <div class="listen-state" aria-live="polite"></div>
        </div>
        <p class="muted center small">${t('listen.sub')}</p>
        <div class="listen-ctl">
          <button class="icon-btn big flip" data-act="prev" aria-label="${t('listen.prev')}">${ico('prev', 24)}</button>
          <button class="btn primary listen-play" data-act="play">${L.playing ? t('listen.pause') : `${ico('play', 18)} ${t('listen.play')}`}</button>
          <button class="icon-btn big flip" data-act="next" aria-label="${t('common.next')}">${ico('next', 24)}</button>
        </div>
      </section>`;
    L.kara = LQUI.karaoke($('.kara-slot', L.view), { text: p.text, words: p.words, accent: L.accent, big: true });
    $('[data-act=exit]', L.view).onclick = () => { const cb = L.onExit; stopListen(); cb(); };
    $('[data-act=play]', L.view).onclick = () => (L.playing ? pause() : play());
    $('[data-act=next]', L.view).onclick = () => jump(1);
    $('[data-act=prev]', L.view).onclick = () => jump(-1);
  }

  const state = key => { const el = $('.listen-state', L.view); if (el) el.textContent = key ? t(key) : ''; };

  async function play() {
    L.playing = true;
    const run = ++L.run;
    draw();
    const alive = () => L && L.playing && L.run === run;
    while (alive()) {
      state('listen.natural');
      await L.kara.play(1);
      if (!alive()) return;
      await wait(700);
      if (!alive()) return;
      state('listen.slow');
      await L.kara.play(LQStore.getSettings().slowRate);
      if (!alive()) return;
      state('listen.repeat');
      await wait(2600);
      if (!alive()) return;
      if (L.i >= L.items.length - 1) { L.playing = false; draw(); state('listen.done'); return; }
      L.i++;
      draw();
      LQEngage.track('word');
    }
  }

  function pause() { L.playing = false; L.run++; LQAudio.stop(); draw(); }
  function jump(d) {
    const was = L.playing;
    L.playing = false; L.run++; LQAudio.stop();
    L.i = Math.max(0, Math.min(L.items.length - 1, L.i + d));
    draw();
    if (was) play();
  }
  function stopListen() { if (L) { L.playing = false; L.run++; LQAudio.stop(); } L = null; }

  /* ---------- dictionary ---------- */
  function dictionary(view, lang, onExit) {
    const { list, preview } = learnedStations(lang);
    const seen = new Set();
    const words = [];
    list.forEach(st => LQData.LANGS[lang].stations[st.id].phrases.forEach(p => p.words.forEach(w => {
      const k = w.clean.toLowerCase();
      if (!seen.has(k)) { seen.add(k); words.push({ w, st }); }
    })));
    const accent = LQUI.currentAccent();
    const dir = LQUI.tdir(lang);
    const fold = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-֑ͯ-ׇً-ٟ]/g, '');
    view.innerHTML = `
      <section class="card dict">
        <div class="map-head"><h2>${ico('search', 22)} ${t('dict.title')}</h2><button class="btn ghost sm" data-act="back">${t('common.backToMap')}</button></div>
        ${preview ? `<p class="note">${t('dict.preview')}</p>` : ''}
        <input class="dict-search" type="search" placeholder="${t('dict.search')}" aria-label="${t('dict.search')}">
        <p class="muted small dict-count"></p>
        <ul class="dict-list"></ul>
      </section>`;
    const listEl = $('.dict-list', view);
    const render = q => {
      const qq = fold(q.trim());
      const hits = words.filter(({ w }) => !qq || fold(w.clean).includes(qq) || fold(LQI18n.f(w, 'meaning')).includes(qq));
      $('.dict-count', view).textContent = t('dict.count', { n: hits.length });
      listEl.innerHTML = hits.length ? hits.map(({ w, st }, i) => `
        <li><button class="dict-row" data-i="${words.indexOf(hits[i])}">
          <span class="dw" dir="${dir}">${LQUI.sylHtml(w)}</span>
          ${LQI18n.showTranslit() ? `<span class="dt">${LQUI.heHtml(w)}</span>` : ''}
          <span class="dm">${esc(LQI18n.f(w, 'meaning'))}</span>
          <span class="ds">${LQIcons.station(st.id, 16)}</span>
        </button></li>`).join('') : `<li class="muted">${t('dict.empty')}</li>`;
      $$('.dict-row', listEl).forEach(b => b.onclick = () => {
        const { w } = words[+b.dataset.i];
        LQAudio.speak(w.clean, { accent, rate: LQStore.getSettings().slowRate, weights: [w.syl.length] });
        LQEngage.track('word');
      });
    };
    $('.dict-search', view).oninput = e => render(e.target.value);
    $('[data-act=back]', view).onclick = onExit;
    render('');
  }

  /* ---------- one-minute level check ---------- */
  const TR_COL = { he: 1, en: 2, ar: 3, ru: 4 };

  function questions(lang) {
    const ui = LQI18n.ui();
    const stations = LQData.LANGS[lang].stations;
    const pool = Object.values(stations).flatMap(st => st.phrases.map(p => ({ text: p.text, mean: tr(p) })));
    // easy stops first, then longer grammar examples (A2) where the language has them
    const picks = ['airport', 'hotel', 'restaurant', 'directions'].map((id, k) => stations[id].phrases[k % 3]).map(p => ({ text: p.text, mean: tr(p) }));
    const gr = ((window.LQGrammar || {})[lang] || []).slice(-4).map(u => u.ex[1]).filter(Boolean)
      .map(ex => ({ text: ex[0], mean: ex[TR_COL[ui]] || ex[1] })).filter(q => q.mean && q.mean !== q.text);
    const qs = picks.concat(gr.length >= 2 ? gr.slice(0, 2) : [stations.emergency.phrases[2], stations.shopping.phrases[0]].map(p => ({ text: p.text, mean: tr(p) })));
    const means = [...new Set(pool.map(x => x.mean).concat(gr.map(x => x.mean)))];
    return qs.map(q => ({ ...q, options: shuffle([q.mean, ...shuffle(means.filter(m => m !== q.mean)).slice(0, 2)]) }));
  }

  function placement(lang, onResult) {
    const qs = questions(lang);
    const accent = LQStore.getSettings().accent[lang] || LQData.LANGS[lang].accents[0].code;
    let i = 0, right = 0;
    LQApp.openModal('<div class="placement"></div>', body => {
      const box = $('.placement', body);
      const ask = () => {
        if (i >= qs.length) return result();
        const q = qs[i];
        box.innerHTML = `
          <div class="lprog"><i style="width:${Math.round(100 * i / qs.length)}%"></i></div>
          <p class="muted small center">${t('place.n', { i: i + 1, n: qs.length })}</p>
          <h3 class="center">${t('place.q')}</h3>
          <button class="pl-say" dir="${LQUI.tdir(lang)}">${ico('volume', 20)} ${esc(q.text)}</button>
          <div class="opt-grid one">${q.options.map(o => `<button class="opt" data-o="${esc(o)}">${esc(o)}</button>`).join('')}</div>`;
        const say = () => LQAudio.speak(q.text, { accent });
        $('.pl-say', box).onclick = say;
        say();
        $$('.opt', box).forEach(b => b.onclick = () => {
          const ok = b.dataset.o === q.mean;
          if (ok) right++;
          b.classList.add(ok ? 'ok' : 'bad');
          $$('.opt', box).forEach(x => { x.disabled = true; if (x.dataset.o === q.mean) x.classList.add('ok'); });
          setTimeout(() => { i++; ask(); }, 650);
        });
      };
      const result = () => {
        const level = right <= 2 ? 0 : right <= 4 ? 1 : 2;
        const lv = LQData.LEVELS[level];
        box.innerHTML = `
          <div class="pl-result">
            <span class="lc-ico big">${lv.icon}</span>
            <h3>${esc(t('place.result', { level: f(lv, 'name') }))} <small dir="ltr">${lv.cefr}</small></h3>
            <p class="muted">${t('place.score', { n: right, of: qs.length })}</p>
            <button class="btn primary big-cta" data-act="use">${t('place.use')}</button>
          </div>`;
        $('[data-act=use]', box).onclick = () => { LQApp.closeModal(); onResult(level); };
      };
      ask();
    });
  }

  window.LQExtras = { listen, stopListen, dictionary, placement };
})();
