# Homepage Audit

**Date:** June 10, 2026  
**File Reviewed:** `src/app/page.tsx` (485 lines)  
**Scope:** Hero section alignment, featured download positioning, CTA consistency, navigation flow

---

## 1. Hero Section Alignment

### Current Hero Content

| Element | Content | Verdict |
|---------|---------|---------|
| Badge | "Deployed on MAHSR T-3" | ✅ Strong credibility signal |
| Headline | "Operational Intelligence for Infrastructure" | ✅ Clear, professional |
| Sub-headline | "Practitioner-built AI systems for EPC megaprojects — deployed on India's major infrastructure contracts, engineered by 20+ years of lived FIDIC contract administration experience." | ✅ Strong positioning |
| Visual | `InfrastructureIllustration` component (abstract illustration) | ✅ Professional |
| Trust signal | "Verified deployment on MAHSR T-3 Track Package — INR 3,142 Crore FIDIC Yellow Book contract. JICA → NHSRCL → JICC → L&T Limited" | ✅ Excellent. Specific and verifiable. |

### Hero CTAs

| Button | Text | Target | Verdict |
|--------|------|--------|---------|
| Primary | "Download Capability Statement" (with Download icon) | `/capability-statement` | ✅ Correct — leads to page with download + lead capture |
| Secondary | "Schedule Consultation" | Calendly inline widget | ✅ Good secondary action |

### Findings

| Issue | Severity | Detail |
|-------|:--------:|--------|
| Hero does not directly link to downloads | LOW | Hero button navigates to `/capability-statement` page, not directly to a PDF. This is intentional (lead capture before download). Acceptable for a B2B site. |
| No direct "View All Downloads" CTA | LOW | Users who want to browse all portfolio assets cannot do so from the hero. No centralized download page exists. |
| No featured case study highlight | MEDIUM | The unifier-sync case study (strongest asset at 8.8/10) has no presence in the hero or above-fold section. A visitor's first impression does not include the most compelling proof point. |

### Recommendation

Consider adding a secondary hero area or "Featured" section above the fold that showcases the unifier-sync case study metric ("3.5 hours → 15 minutes") as a proof-point callout.

---

## 2. Featured Download Positioning

### Current State

Downloads are not featured on the homepage. The hero CTA leads to `/capability-statement` where downloads are presented. The homepage itself has no download section.

### Sections Below the Fold

| Section | Content | Download Links? |
|---------|---------|:--------------:|
| Executive Highlights | 7 experience cards (experience, rail, EPC, FIDIC, claims, AI, ecosystem) | ❌ None |
| Metrics Bar | 4 metric cards (MIS reduction, contract forensics, NCR closure, deadline monitoring) | ❌ None |
| Products | 3 product cards leading to `/products/[slug]` | ❌ None |
| Automation Suite | 3 automation cards leading to `/automations/[slug]` | ❌ None |
| Case Study Highlights | 3 case study cards leading to `/case-studies/[slug]` | ❌ None |
| Consultation CTA | Dual CTA section | ❌ Links to `/capability-statement` |

### Findings

| Issue | Severity | Detail |
|-------|:--------:|--------|
| No "Featured Downloads" section on homepage | MEDIUM | Users must know to navigate to specific pages to find downloads. No homepage section promotes downloadable assets. |
| No "Recently Updated" indicator | LOW | Users cannot tell that delay-analysis-eot-brochure, advisory-suite-overview, and unifier-sync-case-study were recently rebuilt. |

### Recommendation

Add a "Featured Resources" or "Download" section to the homepage that showcases:
1. capability-statement.pdf — "Start Here" badge
2. unifier-sync-case-study.pdf — "Featured Case Study" badge
3. delay-analysis-eot-brochure.pdf — "Recently Updated" badge

This section could replace or supplement the existing "Products" section, which is more product-focused than portfolio-focused.

---

## 3. CTA Consistency

### All CTAs on Homepage

| # | CTA Text | Location | Target | Type |
|---|----------|----------|--------|------|
| 1 | "Download Capability Statement" | Hero | `/capability-statement` | Page navigation |
| 2 | "Schedule Consultation" | Hero | Calendly inline | Modal/widget |
| 3 | "View All" (Products) | Products section | `/products` | Page navigation |
| 4 | "View All" (Automation) | Automation section | `/automations` | Page navigation |
| 5 | "View All" (Case Studies) | Case Studies section | `/case-studies` | Page navigation |
| 6 | "Schedule Discovery Call" | Consultation CTA | Calendly inline | Modal/widget |
| 7 | "Download Capability Statement" | Final CTA section | `/capability-statement` | Page navigation |
| 8 | "Schedule Consultation" | Final CTA section | `#schedule-consultation` | Anchor link |

### CTA Consistency Check

| Check | Result |
|-------|--------|
| Primary CTA consistent across pages? | ✅ "Download Capability Statement" is used in hero and final CTA |
| Secondary CTA (consultation) consistent? | ✅ "Schedule Consultation" / "Schedule Discovery Call" — minor variation |
| All CTAs functional? | ✅ All targets exist |
| CTA language professional? | ✅ No "free consultation" or scarcity language |

### Findings

| Issue | Severity | Detail |
|-------|:--------:|--------|
| "Schedule Discovery Call" vs "Schedule Consultation" | LOW | Two different phrasings for the same action. Standardize to one. |
| No CTA leads directly to a PDF download | LOW | Intentional — all downloads pass through a page with lead capture form. This is standard B2B practice. |

---

## 4. Navigation Flow

### Current Flow

```
Homepage
├── /capability-statement → Downloads + Lead Capture + Consultation
├── /advisory-suite → 4 Brochure Downloads + Consultation
├── /services
│   └── /services/contracts-claims → 2 Downloads + Consultation
├── /products → Product Cards → Individual Product Pages
├── /automations
│   ├── /automations/fidic-claims-intelligence-suite → 5 Downloads
│   ├── /automations/fidic-notice-monitor → 2 Downloads (1 broken)
│   └── /automations/unifier-sync → 2 Downloads
├── /case-studies → Case Study Cards → Individual Case Study Pages
├── /about
└── /contact
```

### Navigation Gaps

| Gap | Impact | Recommendation |
|-----|--------|----------------|
| No "/resources" or "/downloads" page | Users cannot browse all assets from one page | Add a centralized resources/downloads page |
| No link from advisory-suite to individual service pages | 🟢 Already exists — advisory-suite page lists all 4 brochures | OK |
| No link from homepage directly to delay-analysis-eot-brochure | Visitors interested in delay analysis must navigate: Homepage → Advisory Suite → Delay Analysis Brochure | Add direct CTA on homepage for high-interest assets |
| No breadcrumb navigation | Users cannot track their location within the site | Consider adding breadcrumbs for deeper pages |

### Navigation Flow by Visitor Type (Actual vs Ideal)

| Visitor | Actual Path | Ideal Path | Gap |
|---------|-------------|------------|-----|
| EPC Client | Home → Advisory Suite → Delay Brochure | Home → Delay Brochure (direct) | No direct path |
| Recruiter | Home → Capability Statement → PDF | Home → Capability Statement → PDF | ✅ Adequate |
| AI Prospect | Home → Automations → Unifier Sync → Case Study | Home → Case Study (direct) | No direct path |
| Project Director | Home → Capability Statement | Home → Capability Statement | ✅ Adequate |

---

## 5. Mobile Responsiveness (Code Review)

The homepage uses Tailwind responsive classes:
- `grid-cols-1 lg:grid-cols-2` (hero)
- `flex flex-col sm:flex-row` (CTA buttons)
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (cards)

**Verdict:** ✅ Appears responsive. No issues visible in code.

---

## 6. Summary of Findings

| # | Issue | Severity | Type |
|---|-------|:--------:|------|
| 1 | No featured case study (unifier-sync) above the fold | MEDIUM | Content gap |
| 2 | No "Featured Downloads" or "Downloads" section on homepage | MEDIUM | Structural gap |
| 3 | No direct path to delay-analysis or unifier-sync from homepage | LOW | Navigation gap |
| 4 | "Schedule Discovery Call" vs "Schedule Consultation" inconsistency | LOW | Consistency |
| 5 | No "/resources" or "/downloads" centralized page | MEDIUM | Structural gap |
| 6 | No "Recently Updated" indicator for rebuilt assets | LOW | Content gap |
| 7 | No breadcrumb navigation on deeper pages | LOW | UX gap |
