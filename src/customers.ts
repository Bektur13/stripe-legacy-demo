import type Stripe from 'stripe';

// Planted break #5: the total_count expansion returns 400 in v18.
// `include` is not in the typed params, so the cast hides this from tsc.
export async function countCustomers(stripe: Stripe): Promise<number> {
  const list = await stripe.customers.list({
    limit: 100,
    include: ['total_count'],
  } as Stripe.CustomerListParams);
  // `any` on purpose: total_count is not in the typed response, which is what
  // legacy code like this does in the wild. The agent must spot it by pattern.
  return (list as any).total_count as number;
}
