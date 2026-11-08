import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handleRevenueCat, entitlementFor, uidOf, planOf } from '../revenuecat.js';

const env = { RC_WEBHOOK_AUTH: 'rc-secret-123', RC_ENTITLEMENT: 'premium' };
const later = Date.now() + 30 * 86400000;
const req = (body, auth = 'Bearer rc-secret-123') => new Request('https://x/revenuecat', {
  method: 'POST', headers: { Authorization: auth, 'Content-Type': 'application/json' }, body: typeof body === 'string' ? body : JSON.stringify(body)
});
const run = async (body, auth) => {
  const writes = [];
  const res = await handleRevenueCat(req(body, auth), env, {}, { writeEntitlement: async (e, uid, ent) => writes.push({ uid, ...ent }) });
  return { status: res.status, body: await res.json(), writes };
};
const ev = o => ({ event: { type: 'INITIAL_PURCHASE', app_user_id: 'uid_abc', product_id: 'tedralingo_yearly:annual', expiration_at_ms: later, entitlement_ids: ['premium'], original_transaction_id: 'GPA.1', ...o } });

test('a purchase puts Premium on the account with the plan and expiry (source play)', async () => {
  const r = await run(ev());
  assert.equal(r.status, 200);
  assert.deepEqual(r.writes, [{ uid: 'uid_abc', premium: true, plan: 'yearly', source: 'play', expiresAt: Math.floor(later / 1000), ref: 'GPA.1' }]);
});

test('renewals and cancellations keep Premium until expiry; expiration removes it', async () => {
  for (const type of ['RENEWAL', 'UNCANCELLATION', 'CANCELLATION', 'PRODUCT_CHANGE', 'SUBSCRIPTION_EXTENDED']) {
    const r = await run(ev({ type, product_id: 'tedralingo_monthly' }));
    assert.equal(r.writes[0].premium, true, type);
    assert.equal(r.writes[0].plan, 'monthly', type);
  }
  const x = await run(ev({ type: 'EXPIRATION', expiration_at_ms: Date.now() - 1000 }));
  assert.equal(x.writes[0].premium, false);
});

test('a lifetime (non-renewing) purchase never expires', async () => {
  const r = await run(ev({ type: 'NON_RENEWING_PURCHASE', product_id: 'tedralingo_lifetime', expiration_at_ms: null }));
  assert.equal(r.writes[0].plan, 'lifetime');
  assert.equal(r.writes[0].expiresAt, null);
});

test('rejects a wrong or missing secret, and does nothing when unconfigured', async () => {
  assert.equal((await run(ev(), 'Bearer nope')).status, 401);
  assert.equal((await run(ev(), '')).status, 401);
  const res = await handleRevenueCat(req(ev()), {}, {}, { writeEntitlement: async () => assert.fail('no write') });
  assert.equal(res.status, 503);
});

test('bad input and events with nothing to do are acknowledged without writing', async () => {
  assert.equal((await run('{nope')).status, 400);
  assert.equal((await run({})).status, 400);
  for (const o of [{ type: 'BILLING_ISSUE' }, { type: 'TEST' }, { type: 'TRANSFER' }, { app_user_id: '$RCAnonymousID:abc', original_app_user_id: '$RCAnonymousID:abc' },
    { entitlement_ids: ['other'] }, { type: 'RENEWAL', expiration_at_ms: Date.now() - 60000 }, { app_user_id: '../../etc' }]) {
    const r = await run(ev(o));
    assert.equal(r.status, 200, JSON.stringify(o));
    assert.equal(r.writes.length, 0, JSON.stringify(o));
  }
});

test('an anonymous buyer is matched to the uid through the aliases', async () => {
  assert.equal(uidOf({ app_user_id: '$RCAnonymousID:1', aliases: ['$RCAnonymousID:1', 'uid_real'] }), 'uid_real');
  const r = await run(ev({ app_user_id: '$RCAnonymousID:1', aliases: ['$RCAnonymousID:1', 'uid_real'] }));
  assert.equal(r.writes[0].uid, 'uid_real');
});

test('plan names from product ids', () => {
  assert.equal(planOf('tedralingo_monthly:monthly'), 'monthly');
  assert.equal(planOf('premium_annual'), 'yearly');
  assert.equal(planOf('tl_lifetime'), 'lifetime');
  assert.equal(entitlementFor({ type: 'SUBSCRIBER_ALIAS' }), null);
});

test('the worker routes POST /revenuecat', async () => {
  const { default: worker } = await import('../license-worker.js');
  const res = await worker.fetch(req(ev(), 'Bearer wrong'), { ...env, ALLOWED_ORIGINS: '' });
  assert.equal(res.status, 401);
});
