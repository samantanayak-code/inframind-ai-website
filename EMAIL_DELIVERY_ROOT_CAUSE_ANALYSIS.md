# Email Delivery Root Cause Analysis

**Date:** 2026-06-10
**Status:** Root cause identified — `inframind.ai` not verified in Resend

---

## 1. Exact Runtime Error

When `resend.emails.send()` is called with `from: "InfraMind AI <noreply@inframind.ai>"`, Resend's API returns:

```
HTTP 403 validation_error
Body: The `inframind.ai` domain is not verified.
       Please, add and verify your domain.
```

Resend requires every sending domain to be verified via DNS records (SPF, DKIM, MX) before it can be used as a `from` address.

### Where the error goes

| File | Line | Behavior |
|------|------|----------|
| `src/app/api/contact/route.ts` | 92–94 | Caught → logs `[Contact] Error: ...` → returns 500 |
| `src/app/api/lead/route.ts` | 127–129 | Caught → logs `[Lead] Error: ...` → returns 500 |
| `src/app/contact/page.tsx` | 57–58 | 500 response → `res.ok` is `false` → **form silently stalls** (no error shown) |

The error is visible only in Vercel Runtime Logs. Users see the form stay in place with no feedback.

---

## 2. Sender Address — Hardcoded (All 5 Calls)

| File | Line | `from` value | Call purpose |
|------|------|-------------|--------------|
| `src/app/api/contact/route.ts` | 59 | `InfraMind AI <noreply@inframind.ai>` | Notification to recipient |
| `src/app/api/contact/route.ts` | 66 | `InfraMind AI <noreply@inframind.ai>` | Auto-reply to submitter |
| `src/app/api/lead/route.ts` | 70 | `InfraMind AI <noreply@inframind.ai>` | Notification to recipient |
| `src/app/api/lead/route.ts` | 78 | `InfraMind AI <noreply@inframind.ai>` | Auto-reply (Quick Enquiry) |
| `src/app/api/lead/route.ts` | 98 | `InfraMind AI <noreply@inframind.ai>` | Auto-reply (Capability Statement) |

The sender is **not configurable via environment variable** — it is a hardcoded string in both route files.

---

## 3. Domain Verification Required — Yes

Resend's documentation states:

> *"Resend sends emails using a domain you own. You must add and verify at least one domain to send and receive emails with Resend."*

| Domain | Status | Can send from? |
|--------|--------|----------------|
| `inframind.ai` | ❌ Not verified | **No** — 403 error |
| `resend.dev` (sandbox) | ✅ Pre-verified | Yes, but **only to Resend account owner's email** |

### DNS records needed to verify `inframind.ai`

| Type | Host | Purpose |
|------|------|---------|
| MX | `send.inframind.ai` | Bounce handling |
| TXT (SPF) | `send.inframind.ai` | Authorize sending |
| CNAME (DKIM ×3) | `send.inframind.ai` | Email signing keys |

---

## 4. Complete Failure Chain

```
Form submit → POST /api/contact
  → name + email validated ✅
  → RESEND_API_KEY found ✅
  → resend.emails.send({
       from: "noreply@inframind.ai",   ← ❌ NOT VERIFIED
       to: "samanta.nayak@gmail.com"
     })
  → Resend checks domain: inframind.ai not verified
  → Resend returns 403 validation_error
  → catch block logs error, returns 500
  → fetch response: res.ok === false
  → form does NOT transition to "Thank You"
  → user sees no change (silent failure)
```

---

## 5. Recommendation

### Option A: Use `onboarding@resend.dev` temporarily

| Factor | Verdict |
|--------|---------|
| Domain verification | ❌ Not needed |
| Deliver to `samanta.nayak@gmail.com` | ❌ Sandbox only sends to Resend account owner |
| Send auto-replies to submitters | ❌ Same restriction |
| Professional appearance | ❌ Shows as `resend.dev` |
| **Verdict** | Testing only — cannot reach real recipients |

### Option B: Verify `inframind.ai` and keep `noreply@inframind.ai`

| Factor | Verdict |
|--------|---------|
| Domain verification | ✅ Required (add DNS records) |
| Deliver to `samanta.nayak@gmail.com` | ✅ Any recipient |
| Send auto-replies | ✅ Any recipient |
| Professional appearance | ✅ `inframind.ai` |
| Code changes needed | **None** — already configured |
| **Verdict** | **Recommended — only viable path to production** |

### Recommended: **Option B** — Verify `inframind.ai` in Resend

Option A is a dead end: `onboarding@resend.dev` cannot deliver to `samanta.nayak@gmail.com` or send auto-replies to form submitters. The sandbox domain is restricted to the Resend account owner's email address only.

### Recommended: **Option B** — Verify `inframind.ai` in Resend

Option A is a dead end: `onboarding@resend.dev` cannot deliver to `samanta.nayak@gmail.com` or send auto-replies. It only sends to the Resend account owner's own email.

---

## 6. Action Steps Summary

1. Go to [resend.com/domains](https://resend.com/domains)
2. Click **Add Domain** → enter `inframind.ai`
3. Copy the 5 DNS records (1 MX, 1 TXT SPF, 3 CNAME DKIM)
4. Add them to your DNS provider at the `send.inframind.ai` subdomain
5. Click **Verify** in Resend (propagation typically 5–15 min)
6. Once status shows `verified` — submit a test form
7. No code changes required — `noreply@inframind.ai` is already set
