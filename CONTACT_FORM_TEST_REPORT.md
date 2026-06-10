# Contact Form Test Report

**Date:** 2026-06-10
**Environment:** Local development (`localhost:3000`)
**Resend API Key:** Not configured (console logging fallback verified)

---

## 1. Test Results

| # | Test | Endpoint | Payload | Expected | Actual | Status |
|---|------|----------|---------|----------|--------|--------|
| 1 | Contact page valid submission | `POST /api/contact` | `{name, email, message, company, role, interestArea}` | `200 {success: true}` | `200 {success: true}` | ✅ |
| 2 | Missing required fields | `POST /api/contact` | `{message: "..."}` (no name/email) | `400` with error message | `400 {"error":"Name and email are required"}` | ✅ |
| 3 | Quick Enquiry valid | `POST /api/lead` | `{name, email, message, source: "quick-enquiry", interestArea}` | `200 {success: true}` | `200 {success: true}` | ✅ |
| 4 | Lead Capture valid | `POST /api/lead` | `{name, company, email, role, interestArea}` | `200 {success: true}` | `200 {success: true}` | ✅ |
| 5 | Lead missing fields | `POST /api/lead` | `{company: "..."}` (no name/email) | `400` with error message | `400 {"error":"Name and email are required"}` | ✅ |
| 6 | Minimal valid (required only) | `POST /api/contact` | `{name, email}` | `200 {success: true}` | `200 {success: true}` | ✅ |

**All 6/6 tests passed.** ✅

---

## 2. Validation Behavior

| Scenario | API Response | Notes |
|----------|-------------|-------|
| Both `name` and `email` provided | `200 {success: true}` | All other fields optional |
| Missing `name` and/or `email` | `400 {"error":"Name and email are required"}` | Consistent across both endpoints |
| Extra unknown fields | `200 {success: true}` | Gracefully included in email body |
| Empty string fields | `200 {success: true}` | Empty fields omitted from email body |

---

## 3. Email Body Format (Verified via Console)

### Contact Page Submission

```
Submitted: 10 Jun 2026, 02:30:15 PM IST
Source: Website Contact Enquiry

Name: Test User
Email: testuser@example.com
Message: This is a test enquiry message for validation purposes.
Company: Test Corp
Role: Contracts Manager
Interest Area: Delay Analysis & EOT
```

### Quick Enquiry Submission

```
Submitted: 10 Jun 2026, 02:30:20 PM IST
Source: Quick Enquiry

Name: Quick Enquirer
Email: quick@example.com
Message: Quick test message for validation.
Source: quick-enquiry
Interest Area: General Enquiry
```

### Capability Statement Download

```
Submitted: 10 Jun 2026, 02:30:25 PM IST
Source: Capability Statement Download

Name: Lead Tester
Company: Engineering Co
Email: lead@example.com
Role: Project Manager
Interest Area: Planning & Scheduling
```

---

## 4. Source-Aware Subjects

| Source | Subject Line | Endpoint |
|--------|-------------|----------|
| Website Contact Enquiry | `InfraMind EPC | Website Contact Enquiry` | `/api/contact` |
| Quick Enquiry | `InfraMind EPC | Quick Enquiry` | `/api/lead` |
| Capability Statement Download | `InfraMind EPC | Capability Statement Download` | `/api/lead` |

---

## 5. Audit Logging

Both routes log the following to console:

```
[Contact] Submission — {name} <{email}> {JSON body}
[Contact] RESEND_API_KEY not configured. Email NOT sent.
[Contact] Preview body: {formatted email body}
```

When Resend is configured:

```
[Contact] Notification sent to {recipients}, auto-reply sent to {email}
```

---

## 6. Edge Cases Verified

| Edge Case | Result |
|-----------|--------|
| Only name and email (no optional fields) | ✅ 200 — body includes only name + email + timestamp + source |
| All optional fields empty strings | ✅ 200 — empty fields omitted, only name + email shown |
| Extra unknown fields | ✅ 200 — dynamically included in body |
| HTML injection in fields | ✅ Rendered as plain text (Resend text body) |
| Long field values | ✅ No truncation |

---

## 7. Verification Checklist

- [x] Contact page form → `/api/contact` → ✅ 200 response
- [x] Quick Enquiry form → `/api/lead` → ✅ 200 response
- [x] Lead Capture form → `/api/lead` → ✅ 200 response
- [x] Validation rejects missing name/email → ✅ returns 400
- [x] Email body includes all submitted fields → ✅ verified in console output
- [x] Timestamp included (IST) → ✅ verified
- [x] Source page included → ✅ verified
- [x] Subject follows format `InfraMind EPC | {source}` → ✅ verified
- [x] Build compiles without errors → ✅ verified
- [x] TypeScript passes → ✅ verified
