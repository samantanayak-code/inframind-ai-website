# Download Center Audit

**Date:** June 10, 2026  
**Scope:** Categorization, ordering, featured assets, download labels, file naming consistency

---

## 1. Current State: No Centralized Download Center

There is **no dedicated download center page** in the website. Downloads are embedded within individual service/product/capability pages via `#download-centre` anchor sections using the `DownloadCard` component.

| Page | Downloads Offered | Access Path |
|------|-------------------|-------------|
| `/capability-statement` | capability-statement.pdf + capability-statement.pptx | Hero CTA → `#download-centre` |
| `/advisory-suite` | advisory-suite-overview.pdf, planning-scheduling-brochure.pdf, delay-analysis-eot-brochure.pdf, contracts-claims-brochure.pdf | Page CTA → `#download-centre` |
| `/services/contracts-claims` | contracts-claims-brochure.pdf, contracts-claims-flyer.pdf | Page CTA → `#download-centre` |
| `/automations/fidic-claims-intelligence-suite` | fidic-claims-intelligence-suite-overview.pdf, fidic-notice-monitor-one-pager.pdf, eot-event-log-compiler-spec.pdf, claim-narrative-drafter-spec.pdf, letter-drafter-epc-spec.pdf | Page CTA → `#download-centre` |
| `/automations/fidic-notice-monitor` | fidic-notice-monitor-one-pager.pdf, **fidic-notice-monitor-demo-script.pdf (BROKEN)** | Page CTA → `#download-centre` |
| `/automations/unifier-sync` | unifier-sync-one-pager.pdf, unifier-sync-case-study.pdf | Page CTA → `#download-centre` |

### What Is Missing

Assets NOT linked from any page:
- None — all 14 files are linked from at least one page

Assets linked but not client-ready:
- `contracts-claims-flyer.pdf` — listed on `/services/contracts-claims` but is not a real flyer

Assets linked but broken:
- `fidic-notice-monitor-demo-script.pdf` — listed on `/automations/fidic-notice-monitor` but file is missing

---

## 2. Categorization (Current)

No formal categorization exists in the UI. Each page lists only the downloads relevant to that page. Users cannot browse downloads across categories.

### Recommended Categorization (from PORTFOLIO_SHOWCASE_ARCHITECTURE.md)

| Category | Documents | Current Placement |
|----------|-----------|-------------------|
| **Executive Overview** | capability-statement.pdf, capability-statement.pptx, advisory-suite-overview.pdf | capability-statement page + advisory-suite page |
| **AI & Automation** | unifier-sync-case-study.pdf, unifier-sync-one-pager.pdf, fidic-notice-monitor-one-pager.pdf, fidic-claims-intelligence-suite-overview.pdf | Automation pages |
| **EPC & Contracts** | delay-analysis-eot-brochure.pdf, planning-scheduling-brochure.pdf, contracts-claims-brochure.pdf | Advisory-suite page + services/contracts-claims page |
| **Case Studies** | unifier-sync-case-study.pdf | automations/unifier-sync page |
| **Technical Resources** | claim-narrative-drafter-spec.pdf, eot-event-log-compiler-spec.pdf, letter-drafter-epc-spec.pdf | automations/fidic-claims-intelligence-suite page |

**Gap:** No page collects all downloads in one place. Users must navigate to 4+ different pages to discover all available assets.

---

## 3. Ordering (Current)

Downloads are ordered as declared in each page's `downloads` array. Ordering is functional but not strategic:

| Page | Order 1 | Order 2 | Order 3 | Order 4 | Order 5 |
|------|---------|---------|---------|---------|---------|
| capability-statement | PDF | PPTX | — | — | — |
| advisory-suite | overview | planning | delay-analysis | contracts | — |
| contracts-claims | brochure | flyer | — | — | — |
| fidic-claims-suite | suite overview | notice-monitor one-pager | eot spec | claim-narrative spec | letter-drafter spec |
| fidic-notice-monitor | one-pager | demo-script (broken) | — | — | — |
| unifier-sync | one-pager | case study | — | — | — |

**Issues:**
- The most valuable asset (case study) is listed second on unifier-sync page, after the one-pager
- The demo script (now broken) was listed second on fidic-notice-monitor page
- No featured/priority ordering within any page

---

## 4. Featured Assets

**Current state:** No document is visually marked as "Featured" or "Recommended" in any download section. All cards appear identical regardless of importance.

**Recommended featured assets:**

| Asset | Badge | Rationale |
|-------|-------|-----------|
| capability-statement.pdf | ★ Recommended — Start Here | Flagship document. Every visitor's first download. |
| unifier-sync-case-study.pdf | ★ Featured Case Study | Highest-scoring asset (8.8/10). Best proof point. |
| delay-analysis-eot-brochure.pdf | Recently Updated | Rebuilt June 10. Highest-value service offering. |

---

## 5. Download Labels

### Current Labels in Code

| Page | Label Issues |
|------|-------------|
| capability-statement | "Capability Statement — InfraMind EPC" — clear |
| advisory-suite | "Advisory Suite Overview" — clear |
| advisory-suite | "Planning & Scheduling Brochure" — clear |
| advisory-suite | "Delay Analysis & EOT Brochure" — clear |
| advisory-suite | "Contracts & Claims Brochure" — clear |
| contracts-claims | "Contracts & Claims Advisory Brochure" — clear |
| contracts-claims | "Contracts & Claims One-Page Flyer" — accurate label but content is not a flyer |
| fidic-claims-suite | Various spec labels — unclear to non-technical users ("EOT Event Log Compiler Spec") |
| fidic-notice-monitor | "FIDIC Notice Monitor One-Pager" — clear |
| fidic-notice-monitor | "FIDIC Notice Monitor Demo Script" — was clear but file is missing |
| unifier-sync | "Unifier Sync One-Pager" — clear |
| unifier-sync | "Unifier Sync Case Study" — clear |

### Recommended Label Updates

| Current Label | Recommended Label | Rationale |
|---------------|-------------------|-----------|
| claim-narrative-drafter-spec.pdf → "Claim Narrative Drafter Spec" | "Claim Narrative Drafter — Product Concept" | Removes "Spec" jargon. Adds "Product Concept" for clarity. |
| eot-event-log-compiler-spec.pdf → "EOT Event Log Compiler Spec" | "EOT Event Log Compiler — Product Concept" | Same as above. |
| letter-drafter-epc-spec.pdf → "Letter Drafter EPC Spec" | "Letter Drafter EPC — Product Concept" | Same as above. |

---

## 6. File Naming Consistency

| File Name | Convention | Consistent? |
|-----------|------------|:-----------:|
| capability-statement.pdf | lowercase-kebab | ✅ |
| capability-statement.pptx | lowercase-kebab | ✅ |
| advisory-suite-overview.pdf | lowercase-kebab | ✅ |
| planning-scheduling-brochure.pdf | lowercase-kebab | ✅ |
| delay-analysis-eot-brochure.pdf | lowercase-kebab | ✅ |
| contracts-claims-brochure.pdf | lowercase-kebab | ✅ |
| contracts-claims-flyer.pdf | lowercase-kebab | ✅ |
| unifier-sync-case-study.pdf | lowercase-kebab | ✅ |
| unifier-sync-one-pager.pdf | lowercase-kebab | ✅ |
| fidic-notice-monitor-one-pager.pdf | lowercase-kebab | ✅ |
| fidic-claims-intelligence-suite-overview.pdf | lowercase-kebab | ✅ |
| eot-event-log-compiler-spec.pdf | lowercase-kebab | ✅ |
| claim-narrative-drafter-spec.pdf | lowercase-kebab | ✅ |
| letter-drafter-epc-spec.pdf | lowercase-kebab | ✅ |

All filenames follow `lowercase-kebab-case.pdf` convention. ✅ **Consistent.**

**Note:** The concept specs use `-spec.pdf` suffix. If relabeled to "Product Concept" in display, consider whether filenames should also change (not recommended — would break existing references).

---

## 7. Version Metadata Discrepancies

| Page | File | Declared Version | Source File Version |
|------|------|:----------------:|:-------------------:|
| advisory-suite | advisory-suite-overview.pdf | v1.0 | v2.0 (after Phase B1 rebuild) |
| advisory-suite | planning-scheduling-brochure.pdf | v2.0 | v2.0 |
| advisory-suite | delay-analysis-eot-brochure.pdf | v2.0 | v2.0 |
| advisory-suite | contracts-claims-brochure.pdf | v2.0 | v2.0 |
| capability-statement | capability-statement.pdf | v1.0 | (not checked) |
| capability-statement | capability-statement.pptx | v1.0 | (not checked) |
| contracts-claims | contracts-claims-brochure.pdf | v2.0 | v2.0 |
| contracts-claims | contracts-claims-flyer.pdf | v1.0 | v1.0 |

**Discrepancy Found:** advisory-suite-overview.pdf declares `v1.0` in the page.tsx but the rebuilt source file declares `Version: 2.0`. **Minor.** Users are unlikely to notice, but inconsistent.

---

## 8. Summary of Findings

| # | Issue | Severity | Fix |
|---|-------|:--------:|-----|
| 1 | No centralized download center | LOW | Create a `/resources` or `/downloads` page aggregating all assets |
| 2 | contracts-claims-flyer.pdf listed but not client-ready | HIGH | Rebuild flyer or remove from listing |
| 3 | No featured/recommended badges on any asset | MEDIUM | Add ★ badges in DownloadCard component |
| 4 | Version mismatch: advisory-suite-overview (code says v1.0, file says v2.0) | LOW | Update version in page.tsx |
| 5 | File sizes inaccurate across all pages | MEDIUM | Update to actual file sizes |
| 6 | Concept specs labelled "Spec" not "Product Concept" | LOW | Update display labels |
| 7 | Download ordering not strategic (one-pager before case study) | LOW | Reorder to prioritize higher-value assets |
