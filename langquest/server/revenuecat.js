/* TedraLingo — Google Play purchases through RevenueCat → Premium on the learner's account
 *
 * RevenueCat calls POST /revenuecat for every purchase event (Project settings → Integrations → Webhooks), with the
 * Authorization header set to the value of the RC_WEBHOOK_AUTH secret. The app buys under the learner's Firebase uid
 * (Purchases.logIn), so event.app_user_id is the uid and the entitlement goes to tedralingo_entitlements/{uid}
 * with source 'play' — the same document Stripe purchases use, read by every device signed in to that account.
 *
 *   active events (purchase, renewal, un-cancel, plan change, extension, non-renewing / lifetime, cancellation —
 *   a cancelled plan stays Premium until it expires) → { premium: true, plan, expiresAt }
 *   EXPIRATION → { premium: false }
 *   anything else (billing issue = grace period, transfer, test) → acknowledged, nothing written
 *
 * Secrets: RC_WEBHOOK_AUTH (wrangler secret put RC_WEBHOOK_AUTH) — plus the Firestore ones in accounts.js.
 */
import { writeEntitlement } from './accounts.js';

const ACTIVE = new Set(['INITIAL_PURCHASE', 'RENEWAL', 'UNCANCELLATION', 'PRODUCT_CHANGE', 'SUBSCRIPTION_EXTENDED',
  'NON_RENEWING_PURCHASE', 'TEMPORARY_ENTITLEMENT_GRANT', 'CANCELLATION']);
const UID = /^[A-Za-z0-9_-]{1,128}$/;

const json = (body, status, h) => new Response(JSON.stringify(body), { status, headers: { ...h, 'Content-Type': 'application/json' } });

/** Constant-time string comparison (the webhook secret). */
function same(a, b) {
  a = String(a || ''); b = String(b || '');
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return diff === 0 && a.length > 0;
}

export function planOf(productId) {
  const id = String(productId || '').toLowerCase();
  return /life/.test(id) ? 'lifetime' : /year|annual/.test(id) ? 'yearly' : 'monthly';
}

/** What an event means for the account: an entitlement to write, or null for "nothing to do". */
export function entitlementFor(ev) {
  if (!ev || !ACTIVE.has(ev.type) && ev.type !== 'EXPIRATION') return null;
  const ref = String(ev.original_transaction_id || ev.transaction_id || ev.id || '').slice(0, 200);
  if (ev.type === 'EXPIRATION') return { premium: false, plan: planOf(ev.product_id), source: 'play', expiresAt: null, ref };
  const plan = ev.type === 'NON_RENEWING_PURCHASE' && !ev.expiration_at_ms ? 'lifetime' : planOf(ev.new_product_id || ev.product_id);
  const exp = ev.expiration_at_ms ? Math.floor(Number(ev.expiration_at_ms) / 1000) : null;
  if (plan !== 'lifetime' && exp && exp * 1000 < Date.now()) return null;   // a late, already-expired event
  return { premium: true, plan, source: 'play', expiresAt: plan === 'lifetime' ? null : exp, ref };
}

/** The uid the purchase belongs to: app_user_id, or one of its aliases when RevenueCat used an anonymous id. */
export function uidOf(ev) {
  const ids = [ev.app_user_id, ev.original_app_user_id, ...(Array.isArray(ev.aliases) ? ev.aliases : [])];
  return ids.find(x => typeof x === 'string' && UID.test(x) && !x.startsWith('$RCAnonymousID')) || null;
}

export async function handleRevenueCat(req, env, h, deps = {}) {
  const write = deps.writeEntitlement || writeEntitlement;
  if (!env.RC_WEBHOOK_AUTH) return json({ ok: false, error: 'not_configured' }, 503, h);
  const auth = (req.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
  if (!same(auth, String(env.RC_WEBHOOK_AUTH).replace(/^Bearer\s+/i, ''))) return json({ ok: false, error: 'unauthorized' }, 401, h);
  let body;
  try { body = await req.json(); } catch { return json({ ok: false, error: 'bad_json' }, 400, h); }
  const ev = body && body.event;
  if (!ev || typeof ev.type !== 'string') return json({ ok: false, error: 'bad_event' }, 400, h);
  if (env.RC_ENTITLEMENT && Array.isArray(ev.entitlement_ids) && ev.entitlement_ids.length && !ev.entitlement_ids.includes(env.RC_ENTITLEMENT)) {
    return json({ ok: true, skipped: 'other_entitlement' }, 200, h);
  }
  const e = entitlementFor(ev);
  if (!e) return json({ ok: true, skipped: ev.type }, 200, h);
  const uid = uidOf(ev);
  if (!uid) return json({ ok: true, skipped: 'anonymous' }, 200, h);
  await write(env, uid, e);
  return json({ ok: true, uid, premium: e.premium, plan: e.plan }, 200, h);
}
