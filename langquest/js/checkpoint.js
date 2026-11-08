/* TedraLingo — checkpoints: a mixed review after every five stops, built from the stops' own content
 *
 *   LQCheckpoint.PARTS                    [{ id: 'cp1', from: 0, to: 4 }, { id: 'cp2', from: 5, to: 9 }]
 *   LQCheckpoint.state(lang, part)        'locked' | 'open' | 'done'
 *   LQCheckpoint.start(view, lang, id, onExit)
 *
 * Ten questions: hear a phrase → pick its meaning, read a meaning → pick the phrase, fill the missing word,
 * and put the words in order. 7 / 10 passes; the result is kept like a stop's progress (progress[lang].cp1).
 */
(function () {
  const { esc, $, $$, shuffle } = LQUI;
  const { t, f, tr } = LQI18n;
  const ico = (n, s) => LQIcons.svg(n, s);
  const PARTS = [{ id: 'cp1', from: 0, to: 4 }, { id: 'cp2', from: 5, to: 9 }];
  const PASS = 7;
  let S = null;
  const VID = new WeakMap();   // phrase → its phrasebook id, so a missed one is saved for review

  const part = id => PARTS.find(p => p.id === id);
  const stationsOf = p => LQData.STATIONS.slice(p.from, p.to + 1);

  function state(lang, id) {
    const p = part(id);
    if (LQStore.stationProgress(lang, p.id).lesson) return 'done';
    return stationsOf(p).every(x => LQStore.stationProgress(lang, x.id).lesson) ? 'open' : 'locked';
  }

  /** Ten questions from the five stops' phrases; every phrase is used at most once. */
  function build(lang, p) {
    const L = LQData.LANGS[lang];
    const all = stationsOf(p).flatMap(x => L.stations[x.id].phrases);
    stationsOf(p).forEach(x => L.stations[x.id].phrases.forEach((ph, idx) => VID.set(ph, LQStore.vaultId(lang, x.id, idx))));
    const pool = shuffle(all.slice());
    const means = [...new Set(all.map(tr))];
    const texts = all.map(x => x.text);
    const other = (list, not, n) => shuffle(list.filter(x => x !== not)).slice(0, n);
    const qs = [];
    const take = (type, test = () => true) => {
      const i = pool.findIndex(test);
      if (i < 0) return;
      const ph = pool.splice(i, 1)[0];
      if (type === 'mean') qs.push({ type, ph, answer: tr(ph), options: shuffle([tr(ph), ...other(means, tr(ph), 2)]) });
      if (type === 'pick') qs.push({ type, ph, answer: ph.text, options: shuffle([ph.text, ...other(texts, ph.text, 2)]) });
      if (type === 'gap') {
        // blank the longest word: it carries the meaning
        const k = ph.words.reduce((b, w, j) => (w.clean.length > ph.words[b].clean.length ? j : b), 0);
        const word = ph.words[k].clean;
        const others = [...new Set(all.flatMap(x => x.words.map(w => w.clean)))].filter(w => w.toLowerCase() !== word.toLowerCase());
        qs.push({ type, ph, k, answer: word, options: shuffle([word, ...other(others, word, 2)]) });
      }
      if (type === 'build') qs.push({ type, ph, answer: ph.words.map(w => w.token).join(' ') });
    };
    ['mean', 'pick', 'mean', 'gap', 'pick', 'build', 'mean', 'gap', 'pick'].forEach(ty => take(ty, ty === 'build' ? x => x.words.length >= 3 && x.words.length <= 6 : undefined));
    take('build', x => x.words.length >= 3 && x.words.length <= 7);
    while (qs.length < 10 && pool.length) take('mean');
    return qs;
  }

  function start(view, lang, id, onExit) {
    const p = part(id);
    S = { view, lang, p, onExit, qs: build(lang, p), i: 0, right: 0, accent: LQUI.currentAccent() };
    ask();
  }

  function header() {
    const { p } = S;
    return `
      <div class="lesson-top">
        <button class="icon-btn" data-act="exit" aria-label="${t('common.exit')}">${ico('close', 18)}</button>
        <div class="lprog"><i style="width:${Math.round(100 * S.i / S.qs.length)}%"></i></div>
        <span class="lv-tag">${S.i + 1}/${S.qs.length}</span>
      </div>
      <div class="lesson-sub"><span>${ico('trophy', 16)} ${esc(t('cp.title', { a: p.from + 1, b: p.to + 1 }))}</span><span class="step-chip">${t('cp.right', { n: S.right })}</span></div>`;
  }

  function ask() {
    if (S.i >= S.qs.length) return finish();
    const q = S.qs[S.i];
    const dir = LQUI.tdir(S.lang);
    const say = () => LQAudio.speak(q.ph.text, { accent: S.accent });
    let body = '';
    if (q.type === 'mean') body = `
      <h3 class="center">${t('cp.qMean')}</h3>
      <button class="pl-say" dir="${dir}">${ico('volume', 20)} ${esc(q.ph.text)}</button>
      <div class="opt-grid one">${q.options.map(o => `<button class="opt" data-o="${esc(o)}">${esc(o)}</button>`).join('')}</div>`;
    if (q.type === 'pick') body = `
      <h3 class="center">${t('cp.qPick')}</h3>
      <div class="translation big center">${q.ph.emoji} ${esc(tr(q.ph))}</div>
      <div class="opt-grid one" dir="${dir}">${q.options.map(o => `<button class="opt" data-o="${esc(o)}">${esc(o)}</button>`).join('')}</div>`;
    if (q.type === 'gap') body = `
      <h3 class="center">${t('cp.qGap')}</h3>
      <div class="cp-gap" dir="${dir}">${q.ph.words.map((w, j) => (j === q.k ? '<span class="cp-blank">＿＿＿</span>' : esc(w.token))).join(' ')}</div>
      <div class="translation center">${esc(tr(q.ph))}</div>
      <div class="opt-grid" dir="${dir}">${q.options.map(o => `<button class="opt" data-o="${esc(o)}">${esc(o)}</button>`).join('')}</div>`;
    if (q.type === 'build') body = `
      <h3 class="center">${t('cp.qBuild')}</h3>
      <div class="translation big center">${q.ph.emoji} ${esc(tr(q.ph))}</div>
      <div class="build-answer" dir="${dir}"><span class="ph">${t('cp.tap')}</span></div>
      <div class="build-pool" dir="${dir}">${shuffle(q.ph.words.map((w, j) => ({ w, j }))).map(({ w, j }) => `<button class="tok" data-j="${j}">${esc(w.token)}</button>`).join('')}</div>`;
    S.view.innerHTML = `<section class="lesson checkpoint">${header()}<div class="card cp-card">${body}</div></section>`;
    $('[data-act=exit]', S.view).onclick = () => { const cb = S.onExit; stop(); cb(); };
    const sayBtn = $('.pl-say', S.view);
    if (sayBtn) { sayBtn.onclick = say; say(); }
    const done = ok => {
      if (ok) S.right++;
      LQUI.feedback(ok, ok ? t('cp.good') : t('cp.answer', { a: q.type === 'mean' ? q.answer : q.ph.text }));
      if (!ok && VID.has(q.ph)) LQStore.vaultAdd(VID.get(q.ph));
      if (q.type !== 'mean') say();
      const me = S;
      setTimeout(() => { if (S === me) { S.i++; ask(); } }, ok ? 900 : 1900);
    };
    $$('.opt', S.view).forEach(b => b.onclick = () => {
      const ok = b.dataset.o === q.answer;
      b.classList.add(ok ? 'ok' : 'bad');
      $$('.opt', S.view).forEach(x => { x.disabled = true; if (x.dataset.o === q.answer) x.classList.add('ok'); });
      done(ok);
    });
    if (q.type === 'build') {
      const ans = $('.build-answer', S.view);
      const picked = [];
      $$('.build-pool .tok', S.view).forEach(b => b.onclick = () => {
        const ph = $('.ph', ans);
        if (ph) ph.remove();
        picked.push(+b.dataset.j);
        ans.appendChild(b);
        b.onclick = null;
        if (picked.length === q.ph.words.length) {
          const ok = picked.map(j => q.ph.words[j].token).join(' ') === q.answer;
          ans.classList.add(ok ? 'ok' : 'bad');
          done(ok);
        }
      });
    }
  }

  function finish() {
    const { lang, p, right, qs, onExit } = S;
    const pass = right >= PASS;
    const prev = LQStore.stationProgress(lang, p.id);
    const xp = pass ? 20 + right * 3 : right * 2;
    if (pass) LQStore.updateStation(lang, p.id, { lesson: true, bestVoice: right * 10 });
    LQStore.addXp(xp);
    LQApp.refreshHeader();
    if (pass) { LQUI.fanfare(); LQUI.burst(['🏆', '⭐', '✨']); setTimeout(() => LQEngage.track('lesson'), 900); }
    stop();
    LQApp.view.innerHTML = `
      <section class="card finish checkpoint-done">
        <div class="finish-ico">${ico(pass ? 'trophy' : 'redo', 46)}</div>
        <h2>${esc(pass ? t('cp.passed') : t('cp.notYet'))}</h2>
        <div class="stats">
          <div><b>${right}/${qs.length}</b><span>${t('cp.score')}</span></div>
          <div><b>+${xp}</b><span>${t('xp.unit')}</span></div>
        </div>
        <p class="muted">${pass ? (prev.lesson ? t('cp.again') : t('cp.passSub')) : t('cp.failSub', { n: PASS })}</p>
        <div class="row center">
          ${pass ? '' : `<button class="btn primary" data-act="retry">${ico('redo', 18)} ${t('cp.retry')}</button>`}
          <button class="btn ${pass ? 'primary' : 'ghost'}" data-act="map">${t('common.toMap')}</button>
        </div>
      </section>`;
    const r = $('[data-act=retry]', LQApp.view);
    if (r) r.onclick = () => LQApp.go('checkpoint', { lang, part: p.id });
    $('[data-act=map]', LQApp.view).onclick = onExit;
  }

  function stop() { S = null; LQAudio.stop(); }

  window.LQCheckpoint = { PARTS, state, start, stop };
})();
