import Stripe from 'stripe';
import { describe, expect, it } from 'vitest';
import { createStripeClient } from '../src/stripe-client.js';

describe('createStripeClient', () => {
  it('throws when no key is provided', () => {
    expect(() => createStripeClient('')).toThrow('STRIPE_SECRET_KEY is not set');
  });

  it('builds a client from a fake test key without calling the network', () => {
    expect(createStripeClient('sk_test_fake')).toBeInstanceOf(Stripe);
  });
});
