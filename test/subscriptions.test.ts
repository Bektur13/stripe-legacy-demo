import type Stripe from 'stripe';
import { describe, expect, it, vi } from 'vitest';
import { getRenewalDate } from '../src/subscriptions.js';

describe('getRenewalDate', () => {
  it('converts current_period_end (unix seconds) to a Date', async () => {
    const retrieve = vi.fn().mockResolvedValue({ id: 'sub_123', current_period_end: 1_700_000_000 });
    const stripe = { subscriptions: { retrieve } } as unknown as Stripe;

    const date = await getRenewalDate(stripe, 'sub_123');

    expect(retrieve).toHaveBeenCalledWith('sub_123');
    expect(date).toEqual(new Date(1_700_000_000 * 1000));
  });
});
