import type Stripe from 'stripe';

// Planted break #1: current_period_end moved to subscription items in v18.
export async function getRenewalDate(stripe: Stripe, subscriptionId: string): Promise<Date> {
  const sub = await stripe.subscriptions.retrieve(subscriptionId);
  return new Date(sub.current_period_end * 1000);
}
