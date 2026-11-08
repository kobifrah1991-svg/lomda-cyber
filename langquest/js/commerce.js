/* TedraLingo — sales model (freemium) and entitlements
 *
 *  Free:    the first FREE_STATIONS stations of every language (lesson + Boss), phrasebook, reminders
 *  Premium: every station and Boss in every language (monthly / yearly / lifetime)
 *
 *  Purchase flow (web & APK distributed outside Google Play):
 *    1. "Buy" opens a Stripe Payment Link (CONFIG.checkout[plan]).
 *    2. The Payment Link's success URL returns to the app with ?session_id={CHECKOUT_SESSION_ID}.
 *    3. The app asks the license server (server/license-worker.js) to verify the session; the server
 *       answers with a signed license key, stored locally and re-validated periodically.
 *    4. "Restore" accepts that license key on another device.
 *    5. Signed in with Google (js/cloud.js), the license is put on the learner's account (POST /link): the server
 *       writes tedralingo_entitlements/{uid} in Firestore and every device signed in to that account is Premium.
 * *
 *  Google Play (the Android app, once CONFIG.revenuecat.androidKey is set):
 *    Play Billing through RevenueCat (@revenuecat/purchases-capacitor). The learner signs in first; the purchase is
 *    made under their Firebase uid (Purchases.logIn), RevenueCat's webhook calls the server (POST /revenuecat) which
 *    writes tedralingo_entitlements/{uid} with source 'play', and every device on that account is Premium.
 *    Store prices (local currency) replace the list prices on the paywall. No Stripe link is ever shown in that build.
 *  Until CONFIG is filled in, purchases run in demo mode on localhost only (clearly labelled).
 */
(function () {
  const CONFIG = {
    // Stripe Payment Links (https://dashboard.stripe.com/payment-links) — one per plan
    checkout: { monthly: '', yearly: '', lifetime: '' },
    // Deployed server/license-worker.js, e.g. 'https://tedralingo-license.<you>.workers.dev'
    licenseApi: '',
    // AI tutor endpoint; defaults to licenseApi + '/tutor'
    tutorApi: '',
    // Public download URL of the signed APK (GitHub Release asset or your site)
    apkUrl: '',
    revalidateDays: 3,
    // free trial on subscriptions — set the same number of days on the Stripe prices / Payment Links
    trialDays: 3,
    // Google Play Billing via RevenueCat: the public Android SDK key (goog_…) and the entitlement's identifier.
    // Offering packages: $rc_monthly, $rc_annual, $rc_lifetime (RevenueCat's default package types).
    revenuecat: { androidKey: '', entitlement: 'premium' }
  };

  const FREE_STATIONS = 3;

  const PLANS = [
    { id: 'monthly', price: { ILS: 24.9, USD: 6.99 }, period: 'month' },
    { id: 'yearly', price: { ILS: 149, USD: 39.99 }, period: 'year', best: true },
    { id: 'lifetime', price: { ILS: 299, USD: 79 }, period: 'once' }
  ];

  const KEY = 'langquest_license_v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch { return null; }
  }

  function save(lic) {
    try {
      if (lic) localStorage.setItem(KEY, JSON.stringify(lic));
      else localStorage.removeItem(KEY);
    } catch { /* private mode */ }
  }

  // the Android app is served from https://localhost too — it is never a development machine
  const isNative = () => !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  const isLocal = () => !isNative() && (['localhost', '127.0.0.1', ''].includes(location.hostname) || location.protocol === 'file:');
  const configured = () => !!CONFIG.licenseApi && PLANS.every(p => !!CONFIG.checkout[p.id]);
  const demoMode = () => !configured() && isLocal();

  /* ---------- Google Play Billing (RevenueCat) ---------- */
  const RC_TYPES = { monthly: 'MONTHLY', yearly: 'ANNUAL', lifetime: 'LIFETIME' };
  const rcPlugin = () => (isNative() && window.Capacitor.Plugins ? window.Capacitor.Plugins.Purchases || null : null);
  /** The Play build sells through Play Billing only. */
  const playBilling = () => !!CONFIG.revenuecat.androidKey && !!rcPlugin();
  let rc = { ready: null, user: null, packages: null };
  const storePrices = {};

  async function rcReady(uid) {
    const P = rcPlugin();
    if (!rc.ready) rc.ready = P.configure({ apiKey: CONFIG.revenuecat.androidKey, appUserID: uid || null });
    await rc.ready;
    if (uid && rc.user !== uid) { await P.logIn({ appUserID: uid }); rc.user = uid; }
    return P;
  }

  async function rcPackages(uid) {
    const P = await rcReady(uid);
    if (rc.packages) return rc.packages;
    const off = await P.getOfferings();
    const pk = (off && off.current && off.current.availablePackages) || [];
    rc.packages = {};
    Object.entries(RC_TYPES).forEach(([plan, type]) => {
      const p = pk.find(x => x.packageType === type);
      if (p) { rc.packages[plan] = p; storePrices[plan] = p.product && p.product.priceString; }
    });
    return rc.packages;
  }

  /** The store's own prices (in the learner's currency) for the paywall; resolves when loaded, never throws. */
  async function loadStorePrices() {
    if (!playBilling()) return false;
    try { await rcPackages(window.LQCloud && LQCloud.user ? LQCloud.user.uid : null); return true; } catch { return false; }
  }

  /** What RevenueCat says right now, as an account entitlement (the webhook writes the same to Firestore). */
  function fromCustomerInfo(info, uid) {
    const e = info && info.entitlements && info.entitlements.active && info.entitlements.active[CONFIG.revenuecat.entitlement];
    if (!e) return null;
    const id = String(e.productIdentifier || '');
    const plan = /life/i.test(id) ? 'lifetime' : /year|annual/i.test(id) ? 'yearly' : 'monthly';
    const exp = e.expirationDateMillis ? Math.floor(e.expirationDateMillis / 1000) : e.expirationDate ? Math.floor(Date.parse(e.expirationDate) / 1000) : null;
    setAccountEntitlement(uid, { premium: true, plan, source: 'play', expiresAt: exp });
    playGrace = { uid, until: Date.now() + 15 * 60 * 1000 };
    return { plan, exp };
  }

  async function buyOnPlay(planId) {
    const uid = window.LQCloud && LQCloud.user ? LQCloud.user.uid : null;
    if (!uid) return 'signin';
    const pk = (await rcPackages(uid))[planId];
    if (!pk) return 'unavailable';
    try {
      const r = await rcPlugin().purchasePackage({ aPackage: pk });
      return fromCustomerInfo(r && r.customerInfo, uid) ? 'play' : 'pending';
    } catch (e) {
      return e && (e.userCancelled || /cancel/i.test(e.code || e.message || '')) ? 'cancelled' : 'error';
    }
  }

  async function restorePlay() {
    const uid = window.LQCloud && LQCloud.user ? LQCloud.user.uid : null;
    if (!uid) return 'signin';
    const P = await rcReady(uid);
    const r = await P.restorePurchases();
    return fromCustomerInfo(r && r.customerInfo, uid) ? 'play' : 'none';
  }

  function license() {
    const lic = load();
    if (!lic) return null;
    if (lic.plan !== 'lifetime' && lic.exp && lic.exp * 1000 < Date.now()) return null;
    return lic;
  }

  /* ---------- Premium on the account (read from Firestore by js/cloud.js, cached for offline use) ---------- */
  const ACC_KEY = 'tedralingo_entitlement_v1';
  let account = (() => { try { return JSON.parse(localStorage.getItem(ACC_KEY)) || null; } catch { return null; } })();

  /** Called by cloud.js with the signed-in uid and the entitlement document ({ premium, plan, source, expiresAt sec|null }), or nulls on sign-out. */
  // right after a Play purchase the webhook may not have reached Firestore yet: don't let an empty snapshot undo it
  let playGrace = { uid: null, until: 0 };
  function setAccountEntitlement(uid, e) {
    if (!(e && e.premium) && uid && uid === playGrace.uid && Date.now() < playGrace.until) return;
    const next = uid && e && e.premium ? { uid, plan: e.plan || '', source: e.source || '', expiresAt: e.expiresAt || null } : null;
    if (JSON.stringify(next) === JSON.stringify(account)) return;
    account = next;
    try { next ? localStorage.setItem(ACC_KEY, JSON.stringify(next)) : localStorage.removeItem(ACC_KEY); } catch { /* private mode */ }
    document.dispatchEvent(new Event('lq:premium'));
  }

  function accountEntitlement() {
    if (!account) return null;
    if (account.expiresAt && account.expiresAt * 1000 < Date.now()) return null;
    return account;
  }

  function isPremium() { return !!license() || !!accountEntitlement(); }

  function stationIsFree(index) { return index < FREE_STATIONS; }

  function canOpen(index) { return stationIsFree(index) || isPremium(); }

  function currency() {
    const ui = window.LQI18n ? LQI18n.ui() : 'he';
    return ui === 'he' ? 'ILS' : 'USD';
  }

  function formatPrice(value) {
    const ui = window.LQI18n ? LQI18n.ui() : 'he';
    const locale = { he: 'he-IL', en: 'en-US', ar: 'ar', ru: 'ru-RU' }[ui] || 'en-US';
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency(), maximumFractionDigits: 2 }).format(value);
  }
  function priceLabel(plan) { return (playBilling() && storePrices[plan.id]) || formatPrice(plan.price[currency()]); }
  /** A yearly plan's price per month, and how much it saves against paying monthly (percent). */
  function yearlyDeal() {
    const cur = currency();
    const y = PLANS.find(p => p.period === 'year'), m = PLANS.find(p => p.period === 'month');
    return { perMonth: formatPrice(Math.floor(100 * y.price[cur] / 12) / 100), save: Math.round(100 * (1 - y.price[cur] / (12 * m.price[cur]))) };
  }

  /* ---------- server calls ---------- */
  async function callApi(params) {
    const url = CONFIG.licenseApi.replace(/\/$/, '') + '/verify?' + new URLSearchParams(params);
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    const body = await res.json().catch(() => ({}));
    if (!res.ok || !body.ok) throw new Error(body.error || 'verify_failed');
    return body;   // { ok, plan, exp, token }
  }

  function store(body) {
    const lic = { plan: body.plan, exp: body.exp || null, token: body.token, checkedAt: Date.now() };
    save(lic);
    document.dispatchEvent(new Event('lq:license'));   // signed in → cloud.js puts it on the account
    return lic;
  }

  /** Put this device's license on the signed-in learner's account. `idToken` is their Firebase ID token. */
  async function linkToAccount(idToken) {
    const lic = license();
    if (!lic || !CONFIG.licenseApi || lic.token.startsWith('DEMO-')) return null;
    const res = await fetch(CONFIG.licenseApi.replace(/\/$/, '') + '/link', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ idToken, token: lic.token })
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok || !body.ok) throw new Error(body.error || 'link_failed');
    return body;
  }

  /** Returns from Stripe Checkout with ?session_id=… → verify and store the license. */
  async function handleReturn() {
    const params = new URLSearchParams(location.search);
    const sid = params.get('session_id');
    if (!sid || !CONFIG.licenseApi) return null;
    params.delete('session_id');
    history.replaceState(null, '', location.pathname + (params.toString() ? '?' + params : '') + location.hash);
    return store(await callApi({ session_id: sid }));
  }

  /** Activate on another device with the license key shown in settings. */
  async function restore(token) {
    if (demoMode() && token.startsWith('DEMO-')) return store({ plan: token.split('-')[1] || 'lifetime', exp: null, token });
    if (!CONFIG.licenseApi) throw new Error('not_configured');
    return store(await callApi({ token: token.trim() }));
  }

  /** Re-check subscriptions every few days so cancelled ones stop working. */
  async function revalidate() {
    const lic = load();
    if (!lic || !CONFIG.licenseApi || lic.token.startsWith('DEMO-')) return;
    if (Date.now() - (lic.checkedAt || 0) < CONFIG.revalidateDays * 86400000) return;
    try { store(await callApi({ token: lic.token })); }
    catch (e) { if (e.message === 'inactive' || e.message === 'invalid_token') save(null); }   // offline → keep
  }

  /** Start a purchase. Returns 'redirect' | 'demo' | 'unavailable', or on Google Play a promise of
   *  'play' | 'pending' | 'signin' | 'cancelled' | 'error' | 'unavailable'. */
  function buy(planId) {
    if (playBilling()) return buyOnPlay(planId).catch(() => 'error');
    if (demoMode()) {
      const plan = PLANS.find(p => p.id === planId);
      const exp = plan.period === 'once' ? null : Math.floor(Date.now() / 1000) + (plan.period === 'year' ? 365 : 31) * 86400;
      store({ plan: planId, exp, token: `DEMO-${planId}-${Date.now().toString(36)}` });
      return 'demo';
    }
    const link = CONFIG.checkout[planId];
    if (!link) return 'unavailable';
    const url = new URL(link);
    if (window.LQI18n) url.searchParams.set('locale', LQI18n.ui());
    if (window.LQNative && LQNative.isNative) LQNative.openExternal(url.toString());
    else location.href = url.toString();
    return 'redirect';
  }

  function signOut() { save(null); }

  window.LQCommerce = {
    CONFIG, PLANS, FREE_STATIONS,
    license, isPremium, stationIsFree, canOpen, priceLabel, formatPrice, yearlyDeal, demoMode, configured,
    handleReturn, restore, revalidate, buy, signOut, playBilling, loadStorePrices, restorePlay,
    setAccountEntitlement, accountEntitlement, linkToAccount
  };
})();
