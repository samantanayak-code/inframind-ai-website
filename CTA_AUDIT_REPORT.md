# CTA Audit Report

**Date:** 2026-06-10
**Scope:** Complete CTA inventory across all pages, components, forms, and links.

---

## 1. Navigation Menu (Global — Header)

| # | Label | Href | Page | Type | Status | Impact |
|---|-------|------|------|------|--------|--------|
| 1 | Logo/Home | `/` | All | Internal Link | ✅ Working | Low |
| 2 | Home | `/` | All | Internal Link | ✅ Working | Low |
| 3 | About | `/about` | All | Internal Link | ✅ Working | Low |
| 4 | Products | `/products` | All | Internal Link | ✅ Working | Low |
| 5 | Automation | `/automations` | All | Internal Link | ✅ Working | Low |
| 6 | Case Studies | `/case-studies` | All | Internal Link | ✅ Working | Low |
| 7 | Services | `/services` | All | Internal Link | ✅ Working | Low |
| 8 | Capability | `/capability-statement` | All | Internal Link | ✅ Working | Low |
| 9 | Contact | `/contact` | All | Internal Link | ✅ Working | Low |
| 10 | Request Consultation | `/contact` | All | Button → Internal | ✅ Working | **Critical** |

**Location:** `src/components/layout/Header.tsx:10-19`, `Header.tsx:55-57`

---

## 2. Footer Links

| # | Label | Href | Type | Status | Impact |
|---|-------|------|------|--------|--------|
| 11 | Logo/Home | `/` | Internal Link | ✅ Working | Low |
| 12 | MAHSR Digital Twin | `/products/mahsr-digital-twin` | Internal Link | ✅ Working | Medium |
| 13 | NCR Tracker | `/products/ncr-tracker` | Internal Link | ✅ Working | Medium |
| 14 | Unifier Sync | `/automations/unifier-sync` | Internal Link | ✅ Working | Medium |
| 15 | View All Automations | `/automations` | Internal Link | ✅ Working | Low |
| 16 | AI Strategy Consulting | `/services/ai-strategy` | Internal Link | ✅ Working | Medium |
| 17 | Digital Twin Architecture | `/services/digital-twin-architecture` | Internal Link | ✅ Working | Medium |
| 18 | Contract Intelligence Design | `/services/contract-intelligence` | Internal Link | ✅ Working | Medium |
| 19 | Expert Advisory | `/services/expert-advisory` | Internal Link | ✅ Working | Medium |
| 20 | Planning, Scheduling & Programme Controls | `/services/planning-scheduling` | Internal Link | ✅ Working | Medium |
| 21 | Delay Analysis, EOT & Claims Support | `/services/delay-analysis-eot` | Internal Link | ✅ Working | Medium |
| 22 | About | `/about` | Internal Link | ✅ Working | Low |
| 23 | Case Studies | `/case-studies` | Internal Link | ✅ Working | Low |
| 24 | Contact | `/contact` | Internal Link | ✅ Working | Low |
| 25 | LinkedIn | `https://linkedin.com` | External Link | ⚠️ **Generic URL** | Medium |
| 26 | Contact | `/contact` | Internal Link | ✅ Working | Low |

**Location:** `src/components/layout/Footer.tsx:4-26`, `Footer.tsx:100-104`

---

## 3. Homepage CTAs (page.tsx)

| # | CTA Text | Component | Destination | Type | Status | Impact |
|---|----------|-----------|-------------|------|--------|--------|
| 27 | Download Capability Statement | `Button` | `/capability-statement` | Internal Link | ✅ Working | High |
| 28 | Schedule Consultation | `CalendlyCTA (button)` | `https://calendly.com/inframind-ai/discovery` | Calendly Modal | ❌ **Broken (404)** | **Critical** |
| 29 | View All (Products) | `Button` | `/products` | Internal Link | ✅ Working | Low |
| 30 | View All (Automations) | `Button` | `/automations` | Internal Link | ✅ Working | Low |
| 31 | View All (Case Studies) | `Button` | `/case-studies` | Internal Link | ✅ Working | Low |
| 32 | Schedule Discovery Call | `CalendlyCTA (inline)` | `https://calendly.com/inframind-ai/discovery` | Calendly Modal | ❌ **Broken (404)** | **Critical** |
| 33 | Schedule Consultation | `CTASection > Button` | `#schedule-consultation` | Anchor Link | ✅ Working | Low |
| 34 | Download Capability Statement | `CTASection > Button` | `/capability-statement` | Internal Link | ✅ Working | Low |

---

## 4. About Page CTAs

| # | CTA Text | Component | Destination | Type | Status | Impact |
|---|----------|-----------|-------------|------|--------|--------|
| 35 | Schedule Consultation | `CalendlyCTA (button)` | `https://calendly.com/inframind-ai/discovery` | Calendly Modal | ❌ **Broken (404)** | **Critical** |
| 36 | View Case Studies | `Button` | `/case-studies` | Internal Link | ✅ Working | Medium |
| 37 | Ready to Work With a Practitioner? — Schedule Consultation | `CTASection > Button` | `/contact` (default) | Internal Link | ✅ Working | High |

**Location:** `src/app/about/page.tsx:176-179`, `about/page.tsx:184-187`

---

## 5. Contact Page CTAs

| # | CTA Text | Component | Destination | Type | Status | Impact |
|---|----------|-----------|-------------|------|--------|--------|
| 38 | Send Enquiry | Form Submit Button | `POST /api/contact` | API (via fetch) | ⚠️ **Email not delivered (unverified domain)** | **Critical** |
| 39 | Submit Another Enquiry | `Button` | onClick toggle | State change | ✅ Working | Low |
| 40 | Email displayed as text | Plain text | `samanta.nayak@gmail.com` | **No mailto:** | ⚠️ **Not clickable** | Medium |

**Location:** `src/app/contact/page.tsx:46-59` (form submission), `170` (email display)

---

## 6. Capability Statement Page CTAs

| # | CTA Text | Component | Destination | Type | Status | Impact |
|---|----------|-----------|-------------|------|--------|--------|
| 41 | Download Capability Statement | `Button` | `#download-centre` | Anchor Link | ✅ Working | Low |
| 42 | Schedule Consultation | `Button` | `#consultation` | Anchor Link | ✅ Working | Low |
| 43 | Download (Card 1) | `DownloadCard` | `/downloads/capability-statement.pdf` | File Download | ✅ Working (file exists) | High |
| 44 | Download (Card 2) | `DownloadCard` | `/downloads/capability-statement.pptx` | File Download | ✅ Working (file exists) | High |
| 45 | Submit (LeadCaptureForm) | Form Submit Button | `POST /api/lead` | API (via fetch) | ⚠️ **Email not delivered** | **Critical** |
| 46 | Schedule Discovery Call | `CalendlyCTA (button)` | `https://calendly.com/inframind-ai/discovery` | Calendly Modal | ❌ **Broken (404)** | **Critical** |
| 47 | Schedule Advisory Consultation | `CalendlyCTA (button)` | `https://calendly.com/inframind-ai/discovery` | Calendly Modal | ❌ **Broken (404)** | **Critical** |
| 48 | Schedule Automation Assessment | `CalendlyCTA (button)` | `https://calendly.com/inframind-ai/discovery` | Calendly Modal | ❌ **Broken (404)** | **Critical** |
| 49 | Send Enquiry (QuickEnquiryForm) | Form Submit Button | `POST /api/lead` | API (via fetch) | ⚠️ **Email not delivered** | **Critical** |
| 50 | Download Capability Statement | `CTASection > Button` | `#download-centre` | Anchor Link | ✅ Working | Low |
| 51 | Schedule Consultation | `CTASection > Button` | `#consultation` | Anchor Link | ✅ Working | Low |

---

## 7. Products Page CTAs

| # | CTA Text | Component | Destination | Type | Status | Impact |
|---|----------|-----------|-------------|------|--------|--------|
| 52 | View All (Automations) | `Button` | `/automations` | Internal Link | ✅ Working | Low |
| 53 | Ready to See These Products — Schedule Consultation | `CTASection > Button` | `/contact` (default) | Internal Link | ✅ Working | High |
| 54 | View Case Studies | `CTASection > Button` | `/case-studies` | Internal Link | ✅ Working | Medium |

**Location:** `src/app/products/page.tsx:167-169`, `188-192`

---

## 8. Product Detail Pages (products/[slug])

| # | CTA Text | Component | Destination | Type | Status | Impact |
|---|----------|-----------|-------------|------|--------|--------|
| 55 | Schedule Consultation | `CalendlyCTA` | `https://calendly.com/inframind-ai/discovery` | Calendly Modal | ❌ **Broken (404)** | **Critical** |
| 56 | Request a Consultation | `CTASection > Button` | `/contact` (default) | Internal Link | ✅ Working | High |

**Location:** `src/app/products/[slug]/page.tsx:52-53`, `142-144`

---

## 9. Services Page CTAs

| # | CTA Text | Component | Destination | Type | Status | Impact |
|---|----------|-----------|-------------|------|--------|--------|
| 57 | Schedule Consultation | `CTASection > Button` | `/contact` (default) | Internal Link | ✅ Working | High |

**Location:** `src/app/services/page.tsx:72`

---

## 10. Service Detail Pages (services/[slug])

| # | CTA Text | Component | Destination | Type | Status | Impact |
|---|----------|-----------|-------------|------|--------|--------|
| 58 | Schedule Consultation | `CalendlyCTA` | `https://calendly.com/inframind-ai/discovery` | Calendly Modal | ❌ **Broken (404)** | **Critical** |
| 59 | Request a Consultation | `CTASection > Button` | `/contact` (default) | Internal Link | ✅ Working | High |

---

## 11. Automation Pages

| # | CTA Text | Component | Destination | Type | Status | Impact |
|---|----------|-----------|-------------|------|--------|--------|
| 60 | Schedule Consultation | `CalendlyCTA` | `https://calendly.com/inframind-ai/discovery` | Calendly Modal | ❌ **Broken (404)** | **Critical** |
| 61 | Request a Consultation | `CTASection > Button` | `/contact` (default) | Internal Link | ✅ Working | High |
| 62 | Schedule Discovery Call | `CalendlyCTA` | `https://calendly.com/inframind-ai/discovery` | Calendly Modal | ❌ **Broken (404)** | **Critical** |

---

## 12. Case Study Pages

| # | CTA Text | Component | Destination | Type | Status | Impact |
|---|----------|-----------|-------------|------|--------|--------|
| 63 | Schedule Consultation | `CalendlyCTA` | `https://calendly.com/inframind-ai/discovery` | Calendly Modal | ❌ **Broken (404)** | **Critical** |
| 64 | Ready to See These Results — Schedule Consultation | `CTASection > Button` | `/contact` (default) | Internal Link | ✅ Working | High |

---

## 13. Advisory Suite Page CTAs

| # | CTA Text | Component | Destination | Type | Status | Impact |
|---|----------|-----------|-------------|------|--------|--------|
| 65 | Schedule Consultation | `CalendlyCTA` | `https://calendly.com/inframind-ai/discovery` | Calendly Modal | ❌ **Broken (404)** | **Critical** |
| 66 | Request a Consultation | `CTASection > Button` | `/contact` (default) | Internal Link | ✅ Working | High |

---

## 14. Form Submission Endpoints

| # | Form Component | Source Page | API Endpoint | Status |
|---|---------------|-------------|--------------|--------|
| 67 | Contact Form | `/contact` | `POST /api/contact` | ⚠️ **Validation OK but email not delivered** |
| 68 | LeadCaptureForm | `/capability-statement` | `POST /api/lead` | ⚠️ **Validation OK but email not delivered** |
| 69 | QuickEnquiryForm | `/capability-statement` | `POST /api/lead` | ⚠️ **Validation OK but email not delivered** |

---

## 15. Email & Phone Links

| # | Value | Type | Location | Status | Impact |
|---|-------|------|----------|--------|--------|
| 70 | `samanta.nayak@gmail.com` | Text (no `mailto:`) | Contact page sidebar | ⚠️ **Not clickable** | Medium |
| 71 | `7682858603` | Phone number | **Not referenced anywhere** in codebase | ❌ **No tel: link exists** | Low |

---

## 16. Social Media Links

| # | Platform | URL | Location | Status | Impact |
|---|----------|-----|----------|--------|--------|
| 72 | LinkedIn | `https://linkedin.com` | Footer | ⚠️ **Generic URL — not pointing to a profile** | Medium |

---

## 17. Summary

| Category | Total CTAs | Working | Issues |
|----------|-----------|---------|--------|
| Navigation links | 10 | 10 | — |
| Footer links | 16 | 16 | 1 generic LinkedIn |
| Homepage CTAs | 9 | 5 | 2 Calendly broken |
| About page | 3 | 2 | 1 Calendly broken |
| Contact page | 3 | 2 | 1 email not clickable |
| Capability Statement | 11 | 6 | 3 Calendly broken, 3 email delivery |
| Products page | 3 | 3 | — |
| Product detail pages | 2 | 1 | 1 Calendly broken |
| Services page | 1 | 1 | — |
| Service detail pages | 2 | 1 | 1 Calendly broken |
| Automation pages | 3 | 2 | 1 Calendly broken |
| Case study pages | 2 | 1 | 1 Calendly broken |
| Advisory Suite | 2 | 1 | 1 Calendly broken |
| Form endpoints | 3 | 0 | All email delivery broken |
| Email/phone/social | 3 | 0 | 1 missing mailto, 1 generic LinkedIn |

**Total CTAs audited: 72**
**Working: 51**
**Issues found: 21**
