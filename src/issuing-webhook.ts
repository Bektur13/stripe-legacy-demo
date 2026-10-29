// Planted break #3 (out of scope): Issuing real-time authorization webhooks
// now send `Accept: application/json`. This handler answers in plain text.
// No Stripe SDK call is involved, so the agent should leave this file alone.

export interface WebhookResponse {
  status: number;
  headers: Record<string, string>;
  body: string;
}

export function handleIssuingAuthorization(rawBody: string): WebhookResponse {
  const event = JSON.parse(rawBody) as { type?: string };
  if (event.type !== 'issuing_authorization.request') {
    return { status: 400, headers: { 'Content-Type': 'text/plain' }, body: 'unexpected event' };
  }
  return { status: 200, headers: { 'Content-Type': 'text/plain' }, body: 'approved' };
}
