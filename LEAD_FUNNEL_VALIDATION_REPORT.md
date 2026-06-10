# Lead Funnel Validation Report

**Date:** 2026-06-10
**Scope:** End-to-end user journey simulation from landing to conversion.

---

## 1. Funnel Overview

```
Homepage → CTA → Landing/Form → Form Submit → API → Email Delivery → Recipient Inbox
```

Each path below was traced through the source code and API-level testing.

---

## 2. Journey 1: Homepage CTA → Capability Statement Download

| Step | Component | Action | Expected | Actual | Status |
|------|-----------|--------|----------|--------|--------|
| 1 | Hero CTA Button | Click "Download Capability Statement" | Navigate to `/capability-statement` | Route exists | ✅ |
| 2 | Download Card | Click "Download" | Download `capability-statement.pdf` | File exists at `/downloads/capability-statement.pdf` | ✅ |
| 3 | LeadCaptureForm | Fill + Submit | `POST /api/lead` → 200 + email sent | API returns 200 ✅, **email not delivered** ❌ | ⚠️ |

**Verdict:** Prospect reaches download. File downloads correctly. Lead captured in API but **email never delivered** (Resend unverified domain).

---

## 3. Journey 2: Schedule Consultation (Calendly)

| Step | Component | Action | Expected | Actual | Status |
|------|-----------|--------|----------|--------|--------|
| 1 | CalendlyCTA (any page) | Click "Schedule Consultation" | Open Calendly modal | Modal opens with iframe | ✅ |
| 2 | Calendly iframe | Load Calendly booking page | Show available time slots | **404 Not Found** | ❌ |

**Verdict:** ❌ **BROKEN** — Every Calendly CTA across the entire site (12 instances) loads a 404. No consultation can be booked. **This is the highest-priority fix.**

---

## 4. Journey 3: Contact Form

| Step | Component | Action | Expected | Actual | Status |
|------|-----------|--------|----------|--------|--------|
| 1 | Contact Page Form | Fill name + email + message | Validation passes | Validation passes | ✅ |
| 2 | Submit button | Click "Send Enquiry" | `POST /api/contact` | API returns 200 | ✅ |
| 3 | API receives data | Validate + build email | Done | Done | ✅ |
| 4 | Resend send | `resend.emails.send()` | Email sent to recipient | Resend returns 403 (domain not verified) | ❌ |
| 5 | Auto-reply | `resend.emails.send()` | Auto-reply to submitter | Same 403 error | ❌ |

**Verdict:** ⚠️ **BROKEN at step 4** — Form appears to work (200 response) but no email is delivered. Prospect sees "Thank You" message but the enquiry never reaches the recipient. Auto-reply never sends.

---

## 5. Journey 4: Diagnostic Sprint / Product Enquiry

| Step | Component | Action | Expected | Actual | Status |
|------|-----------|--------|----------|--------|--------|
| 1 | Product detail page | Scroll to CalendlyCTA | Show "Schedule Consultation" | Calendly 404 | ❌ |
| 2 | CTASection | Click "Schedule Consultation" | Navigate to `/contact` | Route exists | ✅ |
| 3 | Contact form | Fill + Submit | Same as Journey 3 | Email not delivered | ❌ |

**Verdict:** ❌ **BROKEN** — Calendly 404 at step 1. Alternative path (CTASection → /contact) works for navigation but the form email is not delivered.

---

## 6. Journey 5: Email Delivery

| Step | Component | Action | Expected | Actual | Status |
|------|-----------|--------|----------|--------|--------|
| 1 | Any form | Submit | `POST /api/contact` or `/api/lead` | ✅ 200 response | ✅ |
| 2 | API validation | Check name + email | Pass through | ✅ Passes | ✅ |
| 3 | Resend API | `resend.emails.send()` | Send notification + auto-reply | **403 — domain not verified** | ❌ |
| 4 | Recipient inbox | Check email | Enquiry notification | **Not delivered** | ❌ |

**Root cause:** `InfraMind AI <noreply@inframindepc.com>` is used as the `from` address but `inframindepc.com` is not verified in Resend.

---

## 7. Journey 6: Quick Enquiry (Capability Statement Page)

| Step | Component | Action | Expected | Actual | Status |
|------|-----------|--------|----------|--------|--------|
| 1 | QuickEnquiryForm | Fill name + email + message | Validation passes | ✅ | ✅ |
| 2 | Submit | Click "Send Enquiry" | `POST /api/lead` | ✅ 200 | ✅ |
| 3 | Resend send | `resend.emails.send()` | Email sent | ❌ 403 | ❌ |

**Verdict:** Same email delivery failure as all other forms.

---

## 8. Funnel Summary

| Journey | Path | Status | Blocked At |
|---------|------|--------|------------|
| 1 | Homepage → Capability Download | ⚠️ Partial | Email delivery (Resend) |
| 2 | Schedule Consultation (Calendly) | ❌ **Broken** | Calendly URL 404 |
| 3 | Contact Form Submission | ⚠️ Partial | Email delivery (Resend) |
| 4 | Product Enquiry → Contact | ❌ **Broken** | Calendly 404 / Email delivery |
| 5 | Email Delivery (all forms) | ❌ **Broken** | Resend domain verification |
| 6 | Quick Enquiry | ⚠️ Partial | Email delivery (Resend) |

### Conversion-Ready Paths

The following paths **do work** end-to-end (excluding email):
- Homepage → Capability Statement page (navigation + file download)
- Internal page navigation (all routes)
- Form submission API (validation + 200 response)

### Blocked Paths

The following paths are **fully blocked**:
- Any "Schedule Consultation" CTA (all 12 instances) — Calendly 404
- Any form submission that requires email delivery (all 3 forms)

---

## 9. Critical Findings

| # | Finding | Impact on Funnel | Priority |
|---|---------|-----------------|----------|
| 1 | Calendly URL returns 404 | **Every consultation booking path is dead** | **Fix immediately** |
| 2 | Sender domain not verified in Resend | **No email notification reaches recipient** | **Fix before marketing launch** |
| 3 | Email displayed as plain text (no mailto:) | Reduces alternative contact methods | Medium |
| 4 | LinkedIn link is generic | Missed networking opportunity | Low |
| 5 | No clickable phone link | No phone enquiry path exists | Low |

**The lead funnel has two hard blocks: Calendly (consultation booking) and Resend (email delivery).** Until both are resolved, the website cannot convert any prospect into a booked consultation or a delivered enquiry.
