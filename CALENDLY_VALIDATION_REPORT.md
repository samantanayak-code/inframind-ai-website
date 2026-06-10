# Calendly Validation Report

**Date:** 2026-06-10
**Purpose:** Verify every "Schedule Consultation" CTA opens the correct Calendly booking page.

---

## 1. URL Validation

| Property | Value |
|----------|-------|
| Configured URL | `https://calendly.com/samanta-nayak/30min` |
| Old URL | `https://calendly.com/inframind-ai/discovery` |
| Change source | `src/components/composites/CalendlyCTA.tsx:15` |

---

## 2. Coverage — Every CTA Instance

| # | Page | Component | Variant | Before | After |
|---|------|-----------|---------|--------|-------|
| 1 | Homepage (hero) | `CalendlyCTA` | button | ❌ 404 | ✅ `samanta-nayak/30min` |
| 2 | Homepage (section) | `CalendlyCTA` | inline | ❌ 404 | ✅ `samanta-nayak/30min` |
| 3 | About | `CalendlyCTA` | button | ❌ 404 | ✅ `samanta-nayak/30min` |
| 4 | Capability Statement | `CalendlyCTA` | button | ❌ 404 | ✅ `samanta-nayak/30min` |
| 5 | Capability Statement | `CalendlyCTA` | button | ❌ 404 | ✅ `samanta-nayak/30min` |
| 6 | Capability Statement | `CalendlyCTA` | button | ❌ 404 | ✅ `samanta-nayak/30min` |
| 7 | Products/[slug] | `CalendlyCTA` | — | ❌ 404 | ✅ `samanta-nayak/30min` |
| 8 | Services/[slug] | `CalendlyCTA` | — | ❌ 404 | ✅ `samanta-nayak/30min` |
| 9 | Automations/[slug] | `CalendlyCTA` | — | ❌ 404 | ✅ `samanta-nayak/30min` |
| 10 | Automations/[slug] | `CalendlyCTA` | — | ❌ 404 | ✅ `samanta-nayak/30min` |
| 11 | Case Studies/[slug] | `CalendlyCTA` | — | ❌ 404 | ✅ `samanta-nayak/30min` |
| 12 | Advisory Suite | `CalendlyCTA` | — | ❌ 404 | ✅ `samanta-nayak/30min` |

**Total: 12 instances, all updated.**

---

## 3. Mechanism

The `CalendlyCTA` component (`src/components/composites/CalendlyCTA.tsx`) defines a `defaultCalendlyUrl` constant used as the default value for the `calendlyUrl` prop. No page in the codebase overrides this prop, so the single-line change propagates to every CTA.

The component renders in two modes:
- **Modal:** Opens an iframe popup with the Calendly URL
- **Inline:** Shows an `Open` link that navigates directly to the URL in a new tab

Both modes now use the correct URL.

---

## 4. Verification

- `grep -r "calendly.com/inframind-ai"`: 0 matches in `src/` (only in report .md files and baseline audit artifacts)
- `grep -r "calendly.com/samanta-nayak"`: 1 match in `src/` — the single source in `CalendlyCTA.tsx`
- Build: ✅ Passed with 0 errors

---

## 5. Conclusion

**All consultation-booking CTAs are now remediated.** Every "Schedule Consultation" button across all 12 locations will open `https://calendly.com/samanta-nayak/30min`.
