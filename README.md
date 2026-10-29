# stripe-legacy-demo

A small TypeScript app pinned to `stripe@^17` (API `2025-02-24.acacia`). It is a test target for the
API Update Agent: each file in `src/` holds one break that ships with stripe-node v18 (`2025-03-31.basil`).

| # | File | Break | Caught by tsc on v18? |
|---|------|-------|-----------------------|
| 1 | `src/subscriptions.ts` | `current_period_end` moved to subscription items | yes |
| 2 | `src/invoices.ts` | `retrieveUpcoming` → `createPreview` | yes |
| 3 | `src/issuing-webhook.ts` | Issuing webhooks send `Accept: application/json` (out of scope) | no |
| 4 | `src/payment-methods.ts` | `naver_pay` removed from PaymentMethod update params | yes |
| 5 | `src/customers.ts` | `total_count` expansion removed (runtime 400) | no |

## Commands

```sh
npm install
npm run typecheck
npm test
```

Tests mock the Stripe client, so no API key is needed. Don't commit a real key; see `.env.example`.
