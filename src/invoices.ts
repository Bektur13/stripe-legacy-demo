import type Stripe from 'stripe';

// Planted break #2: retrieveUpcoming is replaced by createPreview in v18.
export async function getUpcomingInvoiceTotal(stripe: Stripe, customerId: string): Promise<number> {
  const upcoming = await stripe.invoices.retrieveUpcoming({ customer: customerId });
  return upcoming.total;
}
