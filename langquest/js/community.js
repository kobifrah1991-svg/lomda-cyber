/* TedraLingo — community: who learns with you, how many points they have and where they are in their language
 *
 * Each learner who joins publishes one small public card, tedralingo_community/{uid}:
 *   { name, avatar, lang, stage, done, xp, week, weekXp, streak, langs, updatedAt }
 * — a chosen nickname and an animal, never the e-mail or the Google name unless typed in. Joining is opt-in;
 * leaving deletes the card. Only signed-in learners can read the boards (firebase/firestore.rules).
 *
 * Cheap by design: the boards are read when the screen opens (top 50, kept for two minutes), the learner's own
 * rank is one count query, and the card is written at most once a minute and only when it changed.
 * Boards: this week (weekXp of the current week, so newcomers can top it) and all time (xp); either for every
 * language or only the one being learned. Indexes: firebase/firestore.indexes.json.
 */
import { getApp } from './vendor/firebase/firebase-app.js';
import { getFirestore, collection, query, where, orderBy, limit, getDocs, getCountFromServer, doc, getDoc, setDoc, deleteDoc, serverTimestamp } from './vendor/firebase/firebase-firestore.js';

const COL = 'tedralingo_community';
const KEY = 'tedralingo_community_v1';
const TOP = 50;
const CACHE_MS = 2 * 60 * 1000;
const PUBLISH_GAP_MS = 60 * 1000;
const AVATARS = ['🦊', '🐼', '🐨', '🦁', '🐯', '🐸', '🐙', '🦉', '🐬', '🦄', '🐝', '🐢', '🐧', '🦋', '🐳', '🦜'];
const { t, f } = LQI18n;
const { esc, $, $$ } = LQUI;

let db = null;
try { db = getFirestore(getApp()); } catch { db = null; }

/* ---------- local state ---------- */
function local() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } }
function saveLocal(v) { try { localStorage.setItem(KEY, JSON.stringify({ ...local(), ...v })); } catch { /* private mode */ } }
const uid = () => (window.LQCloud && LQCloud.user ? LQCloud.user.uid : null);

/** A nickname from the Google name: the first word only, nothing that looks like an address. */
function cleanName(s) {
  return String(s || '').replace(/[<>@/\\]|https?:/gi, '').replace(/\s+/g, ' ').trim().slice(0, 24);
}
function suggestedName() {
  const u = window.LQCloud && LQCloud.user;
  return cleanName(((u && u.name) || '').split(' ')[0]) || t('com.learner');
}

/* ---------- the learner's card ---------- */
function stageOf(lang) {
  const stops = LQData.STATIONS.filter(x => LQStore.stationProgress(lang, x.id).lesson).length;
  if (stops < LQData.STATIONS.length) return { stage: 1, done: stops };
  const units = (window.LQGrammar || {})[lang] || [];
  return { stage: 2, done: Math.min(10, units.filter(u => LQStore.grammarProgress(lang, u.id).done).length) };
}

function card() {
  const me = local();
  const lang = LQStore.getSettings().lang;
  const { stage, done } = stageOf(lang);
  const xp = Math.max(0, Math.floor(LQStore.getXp()));
  const langs = Object.keys(LQData.LANGS).filter(l => LQData.STATIONS.some(x => LQStore.stationProgress(l, x.id).lesson)).length;
  return {
    name: me.name || suggestedName(),
    avatar: AVATARS.includes(me.avatar) ? me.avatar : AVATARS[0],
    lang, stage, done, xp,
    week: LQEngage.weekKey(),
    weekXp: Math.min(xp, Math.max(0, Math.floor(LQEngage.league().xp))),
    streak: Math.max(0, LQStore.getStreak().count | 0),
    langs: Math.max(1, Math.min(12, langs))
  };
}

let lastSent = '', lastAt = 0, pending = 0;
async function publish(force) {
  const id = uid();
  if (!db || !id || !local().joined) return;
  const c = card();
  const sig = JSON.stringify(c);
  if (!force && sig === lastSent) return;
  const wait = PUBLISH_GAP_MS - (Date.now() - lastAt);
  if (!force && wait > 0) { clearTimeout(pending); pending = setTimeout(() => publish(), wait + 50); return; }
  lastAt = Date.now();
  try {
    await setDoc(doc(db, COL, id), { ...c, updatedAt: serverTimestamp() });
    lastSent = sig;
    cache.clear();
  } catch { lastAt = 0; /* offline / too soon — try again on the next change */ }
}

async function join({ name, avatar }) {
  saveLocal({ joined: true, name: cleanName(name) || suggestedName(), avatar: AVATARS.includes(avatar) ? avatar : AVATARS[0] });
  await publish(true);
}

async function leave() {
  const id = uid();
  saveLocal({ joined: false });
  lastSent = '';
  cache.clear();
  if (db && id) { try { await deleteDoc(doc(db, COL, id)); } catch { /* offline: removed next time */ } }
}

/** On a new device: am I already in the community (my card exists)? */
async function restore() {
  const id = uid();
  if (!db || !id) return;
  try {
    const s = await getDoc(doc(db, COL, id));
    if (s.exists()) { const d = s.data(); saveLocal({ joined: true, name: d.name, avatar: d.avatar }); }
  } catch { /* offline */ }
}

/* ---------- boards ---------- */
const cache = new Map();

async function board(mode, langOnly) {
  const lang = LQStore.getSettings().lang;
  const k = `${mode}|${langOnly ? lang : '*'}|${LQEngage.weekKey()}`;
  const hit = cache.get(k);
  if (hit && Date.now() - hit.at < CACHE_MS) return hit.data;
  const field = mode === 'week' ? 'weekXp' : 'xp';
  const filters = [];
  if (langOnly) filters.push(where('lang', '==', lang));
  if (mode === 'week') filters.push(where('week', '==', LQEngage.weekKey()));
  const col = collection(db, COL);
  const snap = await getDocs(query(col, ...filters, orderBy(field, 'desc'), limit(TOP)));
  const rows = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  const id = uid();
  let me = null;
  if (id && local().joined) {
    const mine = card();
    const inTop = rows.findIndex(r => r.id === id);
    const value = mine[field];
    const counts = !(langOnly && mine.lang !== lang);
    let rank = inTop >= 0 ? inTop + 1 : null;
    if (rank == null && counts) {
      const c = await getCountFromServer(query(col, ...filters, where(field, '>', value)));
      rank = c.data().count + 1;
    }
    if (counts) me = { id, ...mine, rank, inTop: inTop >= 0 };
  }
  const data = { rows, me, field };
  cache.set(k, { at: Date.now(), data });
  return data;
}

/* ---------- UI ---------- */
const S = { mode: 'week', langOnly: false };

function stageLine(r) {
  const L = LQData.LANGS[r.lang];
  const what = r.stage === 2 ? t('com.units', { d: r.done }) : t('com.stops', { d: r.done });
  return `${L ? L.flag : '🌐'} ${esc(L ? f(L, 'name') : r.lang)} · ${t('com.stage', { n: r.stage })} · ${what}`;
}

function rowHtml(r, rank, isMe, field) {
  const medal = ['🥇', '🥈', '🥉'][rank - 1];
  return `
    <li class="crow ${isMe ? 'me' : ''} ${rank <= 3 ? 'podium' : ''}">
      <span class="crank">${medal || `#${rank}`}</span>
      <span class="cava" aria-hidden="true">${esc(r.avatar || '🙂')}</span>
      <span class="cbody">
        <b><bdi>${esc(r.name)}</bdi>${isMe ? ` <small class="cme">${t('com.you')}</small>` : ''}</b>
        <small>${stageLine(r)}${r.streak ? `<span class="cstreak">${LQIcons.svg('flame', 13)} ${r.streak}</span>` : ''}</small>
      </span>
      <span class="cpts"><b>${(r[field] || 0).toLocaleString()}</b><small>${t('xp.unit')}</small></span>
    </li>`;
}

async function render(view, onExit) {
  const signedIn = !!uid();
  const me = local();
  const L = LQData.LANGS[LQStore.getSettings().lang];
  view.innerHTML = `
    <section class="card community">
      <div class="map-head"><h2>${LQIcons.svg('users', 24)} ${t('com.title')}</h2><button class="btn ghost sm" data-act="back">${t('common.backToMap')}</button></div>
      <p class="muted">${t('com.sub')}</p>
      ${!db ? `<p class="note warn">${t('cloud.off')}</p>` : !signedIn ? `
        <div class="com-gate">
          <p><b>${t('com.signInTitle')}</b></p>
          <p class="muted small">${t('com.signInSub')}</p>
          <div class="cloud-box"></div>
        </div>` : `
        ${me.joined ? '' : joinHtml()}
        <div class="seg" role="tablist">
          <button role="tab" class="${S.mode === 'week' ? 'on' : ''}" data-mode="week">${t('com.week')}</button>
          <button role="tab" class="${S.mode === 'all' ? 'on' : ''}" data-mode="all">${t('com.all')}</button>
        </div>
        <div class="chips">
          <button class="chip ${S.langOnly ? '' : 'on'}" data-lang-only="0">${LQIcons.svg('globe', 14)} ${t('com.allLangs')}</button>
          <button class="chip ${S.langOnly ? 'on' : ''}" data-lang-only="1">${L.flag} ${esc(f(L, 'name'))}</button>
          <button class="chip ghost" data-act="refresh" aria-label="${t('com.refresh')}">${LQIcons.svg('redo', 14)}</button>
        </div>
        <ol class="cboard" aria-live="polite"><li class="muted">${t('com.loading')}</li></ol>
        <div class="cmine"></div>
        ${me.joined ? `<div class="com-foot"><button class="linkish" data-act="edit">${t('com.edit')}</button> · <button class="linkish" data-act="leave">${t('com.leave')}</button></div>` : ''}`}
    </section>`;
  $('[data-act=back]', view).onclick = onExit;
  if (window.LQCloud) $$('.cloud-box', view).forEach(h => LQCloud.render(h));
  if (!db || !signedIn) return;
  bindJoin(view, () => render(view, onExit));
  $$('[data-mode]', view).forEach(b => b.onclick = () => { S.mode = b.dataset.mode; render(view, onExit); });
  $$('[data-lang-only]', view).forEach(b => b.onclick = () => { S.langOnly = b.dataset.langOnly === '1'; render(view, onExit); });
  $('[data-act=refresh]', view).onclick = () => { cache.clear(); render(view, onExit); };
  const edit = $('[data-act=edit]', view);
  if (edit) edit.onclick = () => openEdit(() => render(view, onExit));
  const lv = $('[data-act=leave]', view);
  if (lv) lv.onclick = async () => { if (confirm(t('com.leaveConfirm'))) { await leave(); render(view, onExit); } };
  try {
    const { rows, me: mine, field } = await board(S.mode, S.langOnly);
    const list = $('.cboard', view);
    if (!list) return;
    list.innerHTML = rows.length ? rows.map((r, i) => rowHtml(r, i + 1, r.id === uid(), field)).join('') : `<li class="muted">${t('com.empty')}</li>`;
    const pin = $('.cmine', view);
    if (mine && !mine.inTop) pin.innerHTML = `<ol class="cboard pinned">${rowHtml(mine, mine.rank, true, field)}</ol>`;
  } catch (e) {
    const list = $('.cboard', view);
    if (list) list.innerHTML = `<li class="note warn">${t(navigator.onLine ? 'com.error' : 'com.offline')}</li>`;
  }
}

function joinHtml() {
  const me = local();
  const pick = me.avatar || AVATARS[0];
  return `
    <div class="com-join">
      <h3>${t('com.joinTitle')}</h3>
      <p class="muted small">${t('com.joinSub')}</p>
      <label class="field"><span>${t('com.nick')}</span><input class="com-name" maxlength="24" value="${esc(me.name || suggestedName())}"></label>
      <div class="ava-grid">${AVATARS.map(a => `<button class="ava-pick ${a === pick ? 'on' : ''}" data-ava="${a}" aria-pressed="${a === pick}">${a}</button>`).join('')}</div>
      <button class="btn primary big-cta" data-act="join">${LQIcons.svg('users', 18)} ${t('com.join')}</button>
    </div>`;
}

function bindJoin(root, done) {
  const box = $('.com-join', root);
  if (!box) return;
  let ava = local().avatar || AVATARS[0];
  $$('[data-ava]', box).forEach(b => b.onclick = () => { ava = b.dataset.ava; $$('[data-ava]', box).forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); }); });
  $('[data-act=join]', box).onclick = async () => {
    const btn = $('[data-act=join]', box); btn.disabled = true;
    await join({ name: $('.com-name', box).value, avatar: ava });
    LQUI.toast(t('com.joined'), 2600);
    LQUI.burst(['🎉', ava, '⭐']);
    done();
  };
}

function openEdit(done) {
  LQApp.openModal(`<div class="com-edit">${joinHtml().replace(t('com.joinTitle'), t('com.edit')).replace(t('com.join'), t('com.save'))}</div>`, body => {
    bindJoin(body, () => { LQApp.closeModal(); done(); });
  });
}

/** A small card for the home screen, from what was already loaded (no reads of its own). */
function teaser() {
  const signedIn = !!uid();
  const hit = [...cache.values()].sort((a, b) => b.at - a.at)[0];
  const rows = hit ? hit.data.rows.slice(0, 3) : [];
  return `
    <section class="card com-teaser">
      <div class="map-head"><h3>${LQIcons.svg('users', 20)} ${t('com.title')}</h3>${hit && hit.data.me ? `<span class="cme-rank">#${hit.data.me.rank}</span>` : ''}</div>
      ${rows.length ? `<ol class="cboard mini">${rows.map((r, i) => rowHtml(r, i + 1, r.id === uid(), hit.data.field)).join('')}</ol>`
        : `<p class="muted small">${signedIn ? (local().joined ? t('com.teaserOpen') : t('com.teaserJoin')) : t('com.signInSub')}</p>`}
      <button class="btn primary sm" data-act="community">${t('com.open')}</button>
    </section>`;
}

/* keep the card fresh: after every successful cloud save (already debounced), on sign-in, and when the app returns */
document.addEventListener('lq:cloud', e => {
  const st = e.detail && e.detail.state;
  if (st === 'saved') publish();
});
let restoredFor = null;
document.addEventListener('lq:cloud', () => {
  const id = uid();
  if (id && restoredFor !== id) { restoredFor = id; restore().then(() => publish()); }
  if (!id) { restoredFor = null; cache.clear(); }
});

window.LQCommunity = { render, teaser, publish, join, leave, board, card, get joined() { return !!local().joined; }, AVATARS };
document.dispatchEvent(new Event('lq:community'));
