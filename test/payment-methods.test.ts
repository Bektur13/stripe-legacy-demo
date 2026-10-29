import type Stripe from 'stripe';
import { describe, expect, it, vi } from 'vitest';
import { setNaverPayFunding } from '../src/payment-methods.js';

describe('setNaverPayFunding', () => {
  it('updates the naver_pay funding source on the PaymentMethod', async () => {
    const update = vi.fn().mockResolvedValue({ id: 'pm_123', naver_pay: { funding: 'points' } });
    const stripe = { paymentMethods: { update } } as unknown as Stripe;

    const pm = await setNaverPayFunding(stripe, 'pm_123', 'points');

    expect(update).toHaveBeenCalledWith('pm_123', { naver_pay: { funding: 'points' } });
    expect(pm.id).toBe('pm_123');
  });
});
