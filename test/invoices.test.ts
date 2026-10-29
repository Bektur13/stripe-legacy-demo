import type Stripe from 'stripe';
import { describe, expect, it, vi } from 'vitest';
import { getUpcomingInvoiceTotal } from '../src/invoices.js';

describe('getUpcomingInvoiceTotal', () => {
  it('returns the total of the upcoming invoice for a customer', async () => {
    const retrieveUpcoming = vi.fn().mockResolvedValue({ total: 4200 });
    const stripe = { invoices: { retrieveUpcoming } } as unknown as Stripe;

    const total = await getUpcomingInvoiceTotal(stripe, 'cus_123');

    expect(retrieveUpcoming).toHaveBeenCalledWith({ customer: 'cus_123' });
    expect(total).toBe(4200);
  });
});
