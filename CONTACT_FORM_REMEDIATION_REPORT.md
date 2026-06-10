# Contact Form Remediation Report

**Date:** 2026-06-10
**Status:** Implemented — awaiting deployment

---

## 1. Summary

| Metric | Value |
|--------|-------|
| Files modified | 3 |
| API routes updated | 2 |
| Environment variables | 3 (1 new, 2 existing) |
| New documentation files | 2 |
| Bugs fixed | 2 |

---

## 2. Root Causes Identified

### Bug 1: Contact Page → API Route Field Mismatch

The `/contact` page form submits fields `{name, email, message, company?, role?, interestArea?}`, but the API expected `{name, organization, email, phone, projectName, contractType, contractValue, primaryChallenge, projectDescription, consultationType, preferredDate, preferredTime, howDidYouHear, additionalNotes}` with all fields required.

**Result:** Every contact form submission returned a 400 validation error. Users saw an unhelpful generic error or the success handler ran with `res.ok === false`.

### Bug 2: QuickEnquiryForm → Lead API Field Mismatch

QuickEnquiryForm sends `{name, email, message, source: "quick-enquiry", interestArea: "General Enquiry"}` but the lead API required `{name, company, email, role, interestArea}`.

**Result:** Every quick enquiry submission returned a 400 validation error.

### Bug 3: Missing API Key

`RESEND_API_KEY` was a placeholder in `.env.example` and never configured. Even submissions that passed validation silently logged to console.

---

## 3. Files Modified

| File | Action | Details |
|------|--------|---------|
| `src/app/api/contact/route.ts` | **Rewritten** | Flexible payload validation (name + email only required); dynamic email body builder; source-aware subject `InfraMind EPC | Website Contact Enquiry`; timestamp + all fields included; `CONTACT_RECIPIENTS` env var support |
| `src/app/api/lead/route.ts` | **Rewritten** | Same pattern — flexible validation; source detection (Quick Enquiry vs Capability Statement Download); source-aware subjects; `CONTACT_RECIPIENTS` support |
| `.env.example` | **Updated** | Added `CONTACT_RECIPIENTS` env var with documentation |

### New files

| File | Purpose |
|------|---------|
| `CONTACT_FORM_DEPLOYMENT_GUIDE.md` | Deployment instructions for Resend setup, domain verification, env vars, Vercel configuration, and testing |
| `CONTACT_FORM_REMEDIATION_REPORT.md` | This report |

---

## 4. API Routes Updated

### `POST /api/contact`

| Aspect | Before | After |
|--------|--------|-------|
| Validation | 11 required fields | `name` + `email` only |
| Subject | `Consultation Request — {projectName} ({consultationType})` | `InfraMind EPC | Website Contact Enquiry` |
| Email body | Static template with predefined fields | Dynamic — includes all submitted fields + timestamp + source |
| Recipient | `CONTACT_EMAIL` env var | `CONTACT_RECIPIENTS` → `CONTACT_EMAIL` → hardcoded fallback |
| Audit log | Minimal | Enhanced with source + full body preview |

### `POST /api/lead`

| Aspect | Before | After |
|--------|--------|-------|
| Validation | 5 required fields | `name` + `email` only |
| Subject | `Capability Statement Download — {name} ({interestArea})` | `InfraMind EPC | {Quick Enquiry / Capability Statement Download}` |
| Source detection | Hardcoded to "Capability Statement Hub" | Automatic — detects `quick-enquiry` source |
| Email body | Static template | Dynamic — includes all submitted fields + timestamp + source |
| Recipient | `CONTACT_EMAIL` env var | `CONTACT_RECIPIENTS` → `CONTACT_EMAIL` → hardcoded fallback |

---

## 5. Environment Variables

| Variable | Required | Status |
|----------|----------|--------|
| `RESEND_API_KEY` | ✅ Yes | ⚠️ Placeholder — must be set before deployment |
| `CONTACT_RECIPIENTS` | ✅ Yes | ✅ Added to `.env.example` |
| `CONTACT_EMAIL` | ⬜ Fallback | ✅ Existing (kept for backward compatibility) |

---

## 6. Email Flow

```
Form Submission
  ↓
API Route (validate name + email)
  ↓
Build email body with all fields + timestamp + source
  ↓
[if RESEND_API_KEY set]
  ├── Send notification → CONTACT_RECIPIENTS (subject: "InfraMind EPC | {source}")
  └── Send auto-reply  → submitter's email
[else]
  └── Log to console (audit trail)
```

---

## 7. Build Validation

Build output: ✅ Compiled successfully (pending final verification)

---

## 8. Deployment Checklist

- [ ] Set `RESEND_API_KEY` in Vercel environment variables
- [ ] Set `CONTACT_RECIPIENTS` in Vercel environment variables
- [ ] Verify `inframind.ai` domain in Resend
- [ ] Test end-to-end after deployment
- [ ] Monitor Vercel Runtime Logs for `[Contact]` and `[Lead]` entries
