import { describe, expect, it } from 'vitest';
import { handleIssuingAuthorization } from '../src/issuing-webhook.js';

describe('handleIssuingAuthorization', () => {
  it('approves an authorization request with a plain-text body', () => {
    const res = handleIssuingAuthorization(JSON.stringify({ type: 'issuing_authorization.request' }));

    expect(res).toEqual({ status: 200, headers: { 'Content-Type': 'text/plain' }, body: 'approved' });
  });

  it('rejects other event types', () => {
    const res = handleIssuingAuthorization(JSON.stringify({ type: 'charge.succeeded' }));

    expect(res.status).toBe(400);
  });
});
