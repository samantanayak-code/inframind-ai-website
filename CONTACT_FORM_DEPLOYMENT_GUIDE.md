# Contact Form Deployment Guide

## Overview

InfraMind EPC uses [Resend](https://resend.com) for transactional email delivery. Two API routes handle form submissions:

| Endpoint | Source Forms | Subject |
|----------|-------------|---------|
| `POST /api/contact` | Contact page | `InfraMind EPC | Website Contact Enquiry` |
| `POST /api/lead` | LeadCaptureForm, QuickEnquiryForm | `InfraMind EPC | {Quick Enquiry / Capability Statement Download}` |

---

## 1. Resend Account Setup

1. Go to [resend.com](https://resend.com) and sign up (free tier: 100 emails/day).
2. Navigate to **API Keys** in the dashboard.
3. Click **Create API Key**.
4. Name it `InfraMind EPC Production`.
5. Copy the generated key (starts with `re_`).

---

## 2. Domain Verification

Resend requires domain verification to send from `noreply@inframind.ai`.

1. In Resend dashboard, go to **Domains**.
2. Click **Add Domain**.
3. Enter `inframind.ai`.
4. Resend provides DNS records to add to your DNS provider:
   - **TXT record** for domain verification
   - **MX record** (optional, for inbound)
   - **DKIM records** (3 CNAME records)
5. Add these records to your DNS provider (e.g., Namecheap, Cloudflare, GoDaddy).
6. In Resend, click **Verify** after DNS propagates (up to 48 hours, typically 5-10 min).

> **Note:** Emails will not send until the domain is verified. Use a sandbox domain (`@resend.dev`) for testing.

### Testing with Resend Sandbox

Before domain verification, you can test with the default Resend sandbox:

```typescript
// In API routes, temporarily change the from address:
from: "Acme <onboarding@resend.dev>",
// This only sends to your verified email address in Resend account.
```

---

## 3. Environment Variables

Set these in your deployment environment:

| Variable | Required | Value | Example |
|----------|----------|-------|---------|
| `RESEND_API_KEY` | ✅ Yes | Resend API key | `re_abc123...` |
| `CONTACT_RECIPIENTS` | ✅ Yes | Recipient email(s) | `samanta.nayak@gmail.com` |
| `CONTACT_EMAIL` | ⬜ Fallback | Used if CONTACT_RECIPIENTS not set | `samanta.nayak@gmail.com` |

### Local Development

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual Resend API key.

---

## 4. Vercel Deployment Steps

1. Go to your project on [vercel.com](https://vercel.com).
2. Navigate to **Settings > Environment Variables**.
3. Add the following:

   | Name | Value |
   |------|-------|
   | `RESEND_API_KEY` | `re_...` |
   | `CONTACT_RECIPIENTS` | `samanta.nayak@gmail.com` |

4. Redeploy or the next deployment will pick up the variables.
5. Verify by going to **Deployments**, selecting the latest, and checking **Runtime Logs** for submission logs.

---

## 5. Testing Procedure

### Prerequisites

- Resend API key set in environment
- Domain verified (or use sandbox)

### Test Flow

1. **Contact Page**
   - Go to `/contact`
   - Fill in name, email, message
   - Submit
   - Expected: "Thank You" message shown

2. **Quick Enquiry**
   - Navigate to a page with QuickEnquiryForm
   - Fill in name, email, message
   - Submit
   - Expected: "Enquiry Sent" message shown

3. **Capability Statement Download**
   - Go to `/capability-statement`
   - Fill in LeadCaptureForm
   - Submit
   - Expected: "Your download is ready" message shown

4. **Validation Failure**
   - Submit without name or email
   - Expected: validation error displayed

### Verification

Check the Vercel Runtime Logs for:

```
[Contact] Notification sent to samanta.nayak@gmail.com, auto-reply sent to user@example.com
[Lead] Notification sent to samanta.nayak@gmail.com, auto-reply sent to user@example.com
```

Also check the recipient inbox for the notification email and the submitter's inbox for the auto-reply.

---

## 6. Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| Form submits but no email received | `RESEND_API_KEY` not set | Add to Vercel env variables |
| Emails going to spam | Domain not verified / no DKIM | Verify domain, add DKIM records |
| `from` address rejected | Domain not verified in Resend | Complete domain verification |
| Rate limit errors | Exceeded Resend free tier (100/day) | Upgrade Resend plan |
| 400 on form submit | Missing name or email | Both fields are required |

---

## 7. Architecture

```
User Form
  ↓ POST /api/contact or /api/lead
Next.js API Route
  ↓ validates name + email
  ↓ builds enquiry body with all fields + timestamp + source
  ↓
  ├─ [if RESEND_API_KEY set] → Resend API
  │   ├─ Notification → CONTACT_RECIPIENTS
  │   └─ Auto-reply  → submitter's email
  │
  └─ [if no key] → console.log (server log only)
```
