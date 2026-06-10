# Broken Links Report

**Date:** 2026-06-10
**Scope:** All internal routes, external URLs, Calendly integrations, API endpoints, downloads, and anchor links.

---

## 1. CRITICAL — Calendly URL Returns 404

**URL:** `https://calendly.com/inframind-ai/discovery`
**HTTP Response:** **404 Not Found**
**Impact:** **CRITICAL** — Every "Schedule Consultation" button across the entire site fails.

### All occurrences

| # | Page | Component | Variant | Action When Clicked |
|---|------|-----------|---------|---------------------|
| 1 | Homepage (hero) | `CalendlyCTA` | button | Opens modal → iframe loads 404 |
| 2 | Homepage (section) | `CalendlyCTA` | inline | Opens modal → iframe loads 404 |
| 3 | About page | `CalendlyCTA` | button | Opens modal → iframe loads 404 |
| 4 | Capability Statement | `CalendlyCTA` × 3 | button | Opens modal → iframe loads 404 |
| 5 | Products/[slug] | `CalendlyCTA` | — | Opens modal → iframe loads 404 |
| 6 | Services/[slug] | `CalendlyCTA` | — | Opens modal → iframe loads 404 |
| 7 | Automations/[slug] | `CalendlyCTA` × 2 | — | Opens modal → iframe loads 404 |
| 8 | Case Studies/[slug] | `CalendlyCTA` | — | Opens modal → iframe loads 404 |
| 9 | Advisory Suite | `CalendlyCTA` | — | Opens modal → iframe loads 404 |

**Total broken Calendly CTAs: 12**

**Definition location:** `src/components/composites/CalendlyCTA.tsx:15`
**Default URL:**
```typescript
const defaultCalendlyUrl = "https://calendly.com/inframind-ai/discovery";
```

**Root cause:** The Calendly account `inframind-ai` either does not exist, the event type `discovery` has been deleted, or the URL was changed. No override is passed from any page — every CTA uses this default.

**User impact:** Every prospect clicking "Schedule Consultation" sees a blank/missing Calendly page. No consultations can be booked.

---

## 2. HIGH — LinkedIn URL is Generic

**URL:** `https://linkedin.com`
**Location:** `src/components/layout/Footer.tsx:100`
**Issue:** Points to LinkedIn's root page, not to a specific company or profile page.

The correct URL should be something like:
- `https://www.linkedin.com/company/inframind-epc/`
- `https://www.linkedin.com/in/samantanayak/`

**Impact:** Users clicking the LinkedIn link land on LinkedIn's generic homepage instead of InfraMind EPC's company page or founder's profile.

---

## 3. HIGH — Email Address Not Clickable

**Value:** `samanta.nayak@gmail.com`
**Location:** `src/app/contact/page.tsx:170`
**Issue:** Displayed as plain text. No `mailto:` hyperlink. Users must copy the email manually.

**Impact:** Reduces conversion from prospects who want to email directly.

---

## 4. HIGH — No Phone Link Anywhere

**Value:** `7682858603` (phone)
**Issue:** This phone number is not referenced anywhere in the codebase. No `tel:` link exists on any page.

**Impact:** Prospects who prefer phone contact have no way to call directly.

---

## 5. MEDIUM — Contact Form Email Not Delivered

**API Endpoint:** `POST /api/contact`
**API Endpoint:** `POST /api/lead`
**Issue:** Both routes use `from: "InfraMind AI <noreply@inframindepc.com>"` but `inframindepc.com` is **not verified in Resend**. Resend returns a 403 error on every send attempt.

**Impact:** All form submissions validate correctly (return 200 to the UI) but no notification or auto-reply email ever reaches the recipient. The user sees a "Thank You" message but nothing happens behind the scenes.

---

## 6. MEDIUM — TCB Simulation Case Study Missing Screenshot

**File:** `src/lib/case-studies.ts:124`
```typescript
screenshot: "",
screenshots: [],
```
**Issue:** The `tcb-simulation` case study has an empty screenshot path. If rendered on a card, this will produce a broken image.

**Impact:** If navigated to, the case study detail page will show a broken image placeholder.

---

## 7. LOW — Products Page Links to Discontinued Routes

**Products list on** `src/app/page.tsx` and `src/app/products/page.tsx`:
- `/case-studies/ocr-intelligence` — exists
- `/case-studies/contract-forensics` — exists

All other internal route links were verified against the build output routes and are valid.

---

## 8. Summary

| Severity | Count | Issues |
|----------|-------|--------|
| **CRITICAL** | 1 | Calendly URL 404 (12 CTAs affected) |
| **HIGH** | 3 | Generic LinkedIn, missing mailto, missing tel: |
| **MEDIUM** | 2 | Email delivery broken, TCB screenshot missing |
| **LOW** | 0 | — |

**Total broken/issue links: 6 distinct issues affecting 18+ CTAs**
