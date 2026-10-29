import type Stripe from 'stripe';

// Planted break #4: naver_pay can no longer be updated on a PaymentMethod in v18.
export async function setNaverPayFunding(
  stripe: Stripe,
  paymentMethodId: string,
  funding: 'card' | 'points',
): Promise<Stripe.PaymentMethod> {
  return stripe.paymentMethods.update(paymentMethodId, {
    naver_pay: { funding },
  });
}
