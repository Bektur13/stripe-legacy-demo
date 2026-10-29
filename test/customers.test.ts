import type Stripe from 'stripe';
import { describe, expect, it, vi } from 'vitest';
import { countCustomers } from '../src/customers.js';

describe('countCustomers', () => {
  it('requests the total_count expansion and returns it', async () => {
    const list = vi.fn().mockResolvedValue({ object: 'list', data: [], has_more: true, total_count: 250 });
    const stripe = { customers: { list } } as unknown as Stripe;

    const count = await countCustomers(stripe);

    expect(list).toHaveBeenCalledWith({ limit: 100, include: ['total_count'] });
    expect(count).toBe(250);
  });
});
