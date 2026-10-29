import Stripe from 'stripe';

// Reads the key from the environment so no secret ever lives in the repo.
export function createStripeClient(apiKey = process.env.STRIPE_SECRET_KEY): Stripe {
  if (!apiKey) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  return new Stripe(apiKey);
}
