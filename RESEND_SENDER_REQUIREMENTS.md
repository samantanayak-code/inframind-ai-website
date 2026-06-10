# Resend Sender Requirements

**Date:** 2026-06-10
**Purpose:** Document sender email configuration, Resend verification requirements, and immediate sending capabilities.

---

## 1. Current Sender Configuration

| Aspect | Value |
|--------|-------|
| `from` address (hardcoded) | `InfraMind AI <noreply@inframind.ai>` |
| Location | `src/app/api/contact/route.ts` (lines 59, 66) |
| Location | `src/app/api/lead/route.ts` (lines 70, 78, 98) |
| Recipient env var | `CONTACT_RECIPIENTS` (fallback: `CONTACT_EMAIL`, hard fallback: `samanta.nayak@gmail.com`) |

All notification emails and auto-replies use `noreply@inframind.ai` as the sender.

---

## 2. Resend Sender Address Options

### Option A: `onboarding@resend.dev` (Default Sandbox)

| Property | Value |
|----------|-------|
| Domain verification required | **No** |
| Works immediately after API key creation | ✅ Yes |
| Can send to any recipient | **No** — only your own email (the address registered with Resend) |
| Deliverability | Low — likely flagged as spam |
| Professional appearance | Poor — shows as "resend.dev" |
| Use case | Initial testing only |

### Option B: `noreply@inframind.ai` (Custom Domain)

| Property | Value |
|----------|-------|
| Domain verification required | **Yes** — `inframind.ai` (or subdomain) must be verified |
| Works immediately after API key creation | **No** — must complete DNS verification first |
| Can send to any recipient | ✅ Yes — once domain is verified |
| Deliverability | High — proper SPF, DKIM, DMARC |
| Professional appearance | ✅ Professional — shows as "inframind.ai" |
| Use case | Production |

---

## 3. Will Resend Allow Sending Immediately After API Key Creation?

**Short answer: No, not with the currently configured sender address.**

### What works immediately:
- Creating a Resend account and generating an API key
- Sending emails using `onboarding@resend.dev` as the `from` address
- Emails can only be sent to **your own email** (the address used to sign up)

### What requires domain verification:
- Using any custom domain (including `noreply@inframind.ai`)
- Sending to recipients other than your own email
- **The current code uses `noreply@inframind.ai` — this will fail with a 403 error until the domain is verified.**

### Resend's documented behavior:

> "You can only send testing emails to your own email address (`youremail@domain.com`). To send emails to other recipients, please verify a domain."
> — Resend Error Reference (403: `validation_error`)

> "The `domain.com` domain is not verified. Please, add and verify your domain."
> — Resend Error Reference (403: `validation_error`)

---

## 4. Domain Verification Process

To use `noreply@inframind.ai` in production:

1. **Add domain to Resend:**
   - Go to [resend.com/domains](https://resend.com/domains)
   - Add `inframind.ai` (or a subdomain like `mail.inframind.ai`)

2. **Configure DNS records** (provided by Resend):
   - **MX record** — for receiving bounce/feedback
   - **TXT (SPF) record** — authorizes Resend to send on behalf of the domain
   - **CNAME (DKIM) records** (3 records) — cryptographic signing for authentication

3. **Wait for DNS propagation** — typically 5–15 minutes, up to 48 hours

4. **Verify in Resend** — click "Verify" to check DNS records

5. **Status changes to `verified`** — domain is ready for sending

---

## 5. Testing Without Domain Verification

To test the contact form email flow before domain verification is complete:

**Option 1: Use Resend sandbox (temporary)**
Change the `from` address in both API routes:

```typescript
from: "InfraMind AI <onboarding@resend.dev>",
```

This only delivers to the email you registered with Resend.

**Option 2: Use a test email service (recommended for CI)**
Replace the Resend API endpoint with a sandbox like [FetchSandbox](https://fetchsandbox.com/resend) during development.

---

## 6. Recommended Action

1. **Test now (optional):** Temporarily change `from` to `onboarding@resend.dev` — sending will work, but only to your own inbox.
2. **Before production launch:** Verify `inframind.ai` domain in Resend (add DNS records).
3. **After verification:** Change `from` back to `noreply@inframind.ai` (or keep it — it's already set).
4. **Verify delivery:** Submit a test form and confirm both the notification and auto-reply arrive.
