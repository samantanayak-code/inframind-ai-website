# CTA Remediation Report (Phase 1)

**Date:** 2026-06-10
**Scope:** Calendly URL replacement, mailto/tel link addition, LinkedIn audit.

---

## 1. Calendly Remediation

### Change

| Before | After |
|--------|-------|
| `https://calendly.com/inframind-ai/discovery` | `https://calendly.com/samanta-nayak/30min` |

### Location

| File | Line | Type |
|------|------|------|
| `src/components/composites/CalendlyCTA.tsx` | 15 | Default URL — affects all 12 Calendly CTAs site-wide |

### Impact

All 12 "Schedule Consultation" CTAs across every page now point to the verified Calendly booking page. The `CalendlyCTA` component accepts an optional `calendlyUrl` prop — any page that passes a custom URL would override the default, but no page in the codebase does so. Thus, **every CTA now uses the new URL**.

### Pages affected
- Homepage (hero + section)
- About page
- Capability Statement (×3 buttons)
- Products/[slug]
- Services/[slug]
- Automations/[slug] (×2)
- Case Studies/[slug]
- Advisory Suite

---

## 2. Contact Convenience Improvements

### Email Link

| Location | Before | After |
|----------|--------|-------|
| `Footer.tsx:99-101` | *(missing)* | `<a href="mailto:samanta@inframindepc.com">` |
| `contact/page.tsx:170-172` | Plain text `samanta.nayak@gmail.com` | Clickable `<a href="mailto:samanta@inframindepc.com">` |

### Phone Link

| Location | Before | After |
|----------|--------|-------|
| `Footer.tsx:102-104` | *(missing)* | `<a href="tel:+917682858603">` |
| `contact/page.tsx:174-178` | *(missing)* | `<a href="tel:+917682858603">` |

### Icon added

- `Phone` icon from `lucide-react` added to import in `contact/page.tsx`.

---

## 3. LinkedIn Validation

### All LinkedIn URL references

| File | Line | URL | Status |
|------|------|-----|--------|
| `src/components/layout/Footer.tsx` | 106 | `https://linkedin.com` | ⚠️ **Placeholder — no company/page URL available** |
| `deployment/generate-deliverables.js` | 635 | `https://linkedin.com` | Generated artifact |
| `deployment/final-deliverables/capability-statement.html` | 390 | `https://linkedin.com` | Generated artifact |
| `deployment/CAPABILITY_STATEMENT_FINAL.md` | 164 | `https://linkedin.com` | Generated artifact |

**Action:** Not changed. No valid LinkedIn company URL available. Report locations above for manual update when a company page is created.

---

## 4. Files Modified

| File | Change |
|------|--------|
| `src/components/composites/CalendlyCTA.tsx` | Updated default URL |
| `src/components/layout/Footer.tsx` | Added mailto + tel links |
| `src/app/contact/page.tsx` | Added mailto + tel links + Phone icon import |

## 5. Build Validation

- `npm run build`: ✅ Passed — 0 TypeScript errors, 0 lint failures.
