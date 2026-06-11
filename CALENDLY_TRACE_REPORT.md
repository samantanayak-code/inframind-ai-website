# Calendly Trace Report

**Date:** 2026-06-10
**Purpose:** Full-repository search for old Calendly URLs and component tree trace of the "Schedule Consultation" button.

---

## 1. Full-Repository Search for `calendly.com/inframind-ai/discovery`

### Source Code (active)

| File | Line | Content | Status |
|------|------|---------|--------|
| `src/components/composites/CalendlyCTA.tsx` | 15 | `const defaultCalendlyUrl = "https://calendly.com/samanta-nayak/30min";` | ✅ **Fixed in commit 1acebd3** |

**0 remaining matches in `src/`.** The old URL has been fully replaced in source code.

### Audit/Report Files (historical — not deployed)

| File | Line | Content | Notes |
|------|------|---------|-------|
| `BROKEN_LINKS_REPORT.md` | 10 | `https://calendly.com/inframind-ai/discovery` | Pre-remediation report |
| `BROKEN_LINKS_REPORT.md` | 33 | `const defaultCalendlyUrl = "https://calendly.com/inframind-ai/discovery";` | Pre-remediation code snippet |
| `CTA_AUDIT_REPORT.md` | 57,61,71,100-102,125,146,155,157,165,174 | `https://calendly.com/inframind-ai/discovery` | Audit report referencing old URL |
| `CALENDLY_VALIDATION_REPORT.md` | 13 | Old URL reference | Post-remediation report |
| `CTA_REMEDIATION_REPORT.md` | 14 | Old URL in before/after table | Post-remediation report |
| `baseline-audit/report.json` | 3589 | `<a href="https://calendly.com/inframind-ai/discovery"...` | Baseline Lighthouse audit artifact |
| `baseline-audit/report.html` | — | Embedded audit data | Generated artifact |

### Production (deployed — not yet updated)

| Domain | Calendly URL Found | File Checked |
|--------|-------------------|--------------|
| `https://www.inframindepc.com/` | `calendly.com/inframind-ai/discovery` | Homepage HTML (production) |
| `https://inframind-ai-website.vercel.app/` | `calendly.com/inframind-ai/discovery` | Homepage HTML (production) |
| `https://inframind.ai/` | N/A | GoDaddy landing page — NOT our app |

✅ **Source code is clean.** Production still serves the old URL (commit not deployed).

---

## 2. Full-Repository Search for `inframind-ai`

### All non-source-code matches (excluding `src/` and audit reports)

| File | Line | Content | Notes |
|------|------|---------|-------|
| `deployment/generate-deliverables.js` | 479,633,634,647 | `inframind-ai-website.vercel.app` | Deployed artifact URLs in generated docs |
| `deployment/generate-all-downloads.js` | 584,585 | `inframind-ai-website.vercel.app` | Same — generated doc URLs |
| `deployment/final-deliverables/capability-statement.html` | 259,388,389,396 | `inframind-ai-website.vercel.app` | Embedded URLs in HTML deliverables |
| `deployment/LINKEDIN_PROFILE_FINAL_READINESS_REPORT.md` | 101,131-135 | `inframind-ai-website.vercel.app` | Deployed artifact |
| `deployment/LINKEDIN_PROFILE_OPTIMIZATION_PACKAGE.md` | 30,87,98-102 | `inframind-ai-website.vercel.app` | Deployed artifact |
| `deployment/linkedin-assets/banner/linkedin-banner-v2.svg` | 97 | `inframind-ai-website.vercel.app` | SVG graphic asset |
| `public/linkedin-banner-v2.svg` | 97 | `inframind-ai-website.vercel.app` | SVG graphic asset |
| `deployment/CAPABILITY_STATEMENT_FINAL.md` | 33,162,163,170 | `inframind-ai-website.vercel.app` | Deployed artifact |
| `deployment/CAPABILITY_STATEMENT_REMEDIATION_REPORT.md` | 49 | `inframind-ai-website.vercel.app` | Deployed artifact |
| `deployment/VERCEL_PRODUCTION_ACCEPTANCE_REPORT.md` | 6,183-187 | `inframind-ai-website.vercel.app` | Deployed artifact |

**Note:** These are deployment/generated artifacts referencing the legacy Vercel project URL. They are not source code.

---

## 3. Component Tree: Homepage "Schedule Consultation" Button

### Entry Point

```
src/app/page.tsx (Homepage)
```

### Rendering Path

```
page.tsx
  └── <CalendlyCTA variant="button" />                  ← no calendlyUrl override
        └── CalendlyCTA.tsx
              ├── defaultCalendlyUrl = "https://calendly.com/samanta-nayak/30min"
              ├── Button ("Schedule Consultation")
              │     └── onClick → setShowModal(true)
              └── {showModal && <CalendlyModal url={calendlyUrl} />}
                    └── <iframe src={calendlyUrl} />     ← renders the new URL
```

### Key Facts

| Property | Value |
|----------|-------|
| Component | `CalendlyCTA.tsx` (`src/components/composites/`) |
| Default URL constant | `defaultCalendlyUrl` (line 15) |
| Prop used | `calendlyUrl` (defaults to `defaultCalendlyUrl`) |
| Prop overrides | **None** — no page passes a custom `calendlyUrl` |
| Call sites | Homepage hero, homepage section, ×10 other pages |
| Rendering mode | Modal (iframe) with fallback direct link (inline variant) |
| URL in source (commit 1acebd3) | `https://calendly.com/samanta-nayak/30min` ✅ |
| URL in production | `https://calendly.com/inframind-ai/discovery` ❌ |

### All Pages Using CalendlyCTA

| Page | Variant | Label |
|------|---------|-------|
| `/` (hero) | `button` | "Schedule Consultation" |
| `/` (section) | `inline` | "Schedule Discovery Call" |
| `/about` | `button` | "Schedule Consultation" |
| `/capability-statement` | `button` | "Schedule Discovery Call" |
| `/capability-statement` | `button` | "Schedule Advisory Consultation" |
| `/capability-statement` | `button` | "Schedule Automation Assessment" |
| `/products/[slug]` | — | "Schedule Consultation" |
| `/services/[slug]` | — | "Schedule Consultation" |
| `/automations/[slug]` | — (×2) | "Schedule Consultation" / "Schedule Discovery Call" |
| `/case-studies/[slug]` | — | "Schedule Consultation" |
| `/advisory-suite` | — | "Schedule Consultation" |

**Total: 12 Calendly CTAs, all driven by the single `defaultCalendlyUrl` constant.**

---

## 4. Verification Summary

| Check | Result |
|-------|--------|
| Old URL in `src/` | ✅ 0 matches (fully remediated) |
| Old URL in production HTML | ❌ Still serves `calendly.com/inframind-ai/discovery` |
| New URL in source | ✅ `calendly.com/samanta-nayak/30min` |
| All 12 CTAs covered | ✅ Single source of truth |
| Build passes | ✅ 0 errors |
