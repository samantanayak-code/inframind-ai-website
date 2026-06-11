# Cross-Link Implementation Plan

**Date:** June 10, 2026  
**Based on:** PORTFOLIO_SHOWCASE_ARCHITECTURE.md — Asset Relationship Map  
**Scope:** Cross-reference links to add between portfolio documents

---

## Current State

Most documents exist in isolation. There are no cross-references within document body text that guide readers from one asset to another. Readers who finish one document have no navigable path to related content. The only navigation is the website's page-level links.

---

## Target State: Document Cross-Reference Map

### 1. Advisory Suite Overview → Linked Assets

#### Source: `ADVISORY_SUITE_MASTER_BROCHURE.md`

| Location | Cross-Link To | Anchor Text | Type |
|----------|---------------|-------------|------|
| End of Section 2 (Planning & Scheduling) | planning-scheduling-brochure.pdf | "See our Planning & Scheduling Advisory Brochure for full service descriptions" | Text link |
| End of Section 3 (Delay Analysis & EOT) | delay-analysis-eot-brochure.pdf | "See our Delay Analysis & EOT Advisory Brochure for methodology details, FIDIC clause framework, and representative case studies" | Text link |
| End of Section 4 (Contracts & Claims) | contracts-claims-brochure.pdf | "See our Contracts & Claims Advisory Brochure for full service descriptions, evidence hierarchy, and case examples" | Text link |
| Section 6 (Why InfraMind EPC) — Proof Points | capability-statement.pdf | "Read the full capability statement for complete credentials and project history" | Text link |
| Section 1 (Integrated Advantage) | unifier-sync-case-study.pdf | "See our deployed AI case study on MAHSR T-3" | Text link |
| Section 7 (Next Steps, step 3) | /contact | "Contact us for a tailored proposal" | URL link |

**Implementation:** Edit `ADVISORY_SUITE_MASTER_BROCHURE.md` — add cross-reference sentences at section endings.

---

### 2. Delay Analysis & EOT Brochure → Linked Assets

#### Source: `DELAY_ANALYSIS_EOT_FINAL_RELEASE.md`

| Location | Cross-Link To | Anchor Text | Type |
|----------|---------------|-------------|------|
| Executive Summary — Credential | capability-statement.pdf | "Read the full capability statement for complete credentials" | Text link |
| Section 3 (Advisory Services) | advisory-suite-overview.pdf | "See how our delay analysis fits within the integrated advisory suite" | Text link |
| Section 5 (Representative Experience) | unifier-sync-case-study.pdf | "See how AI supports delay analysis on MAHSR T-3" | Text link |
| Section 7 (Next Steps, step 2) | /contact | "Contact us for a tailored assessment" | URL link |
| Section 2 (Our Approach) | advisory-suite-overview.pdf → Planning section | "For programme-level support, see our Planning & Scheduling Advisory" | Text link |

**Implementation:** Edit `DELAY_ANALYSIS_EOT_FINAL_RELEASE.md` — add cross-reference sentences.

---

### 3. Unifier Sync Case Study → Linked Assets

#### Source: `UNIFIER_SYNC_CASE_STUDY.md`

| Location | Cross-Link To | Anchor Text | Type |
|----------|---------------|-------------|------|
| Section 1 (The Challenge) | advisory-suite-overview.pdf → Contracts & Claims | "Comprehensive contract administration support is covered in our Contracts & Claims Advisory" | Text link |
| Section 5 (Why This Matters) — what this proves | capability-statement.pdf | "Read the full capability statement to understand the practitioner behind the automation" | Text link |
| Section 5 (Why This Matters) | fidic-claims-intelligence-suite-overview.pdf | "Explore our full product suite: FIDIC Claims Intelligence Suite" | Text link |
| Section 6 (See It in Action) | unifier-sync-one-pager.pdf | "Quick overview available in our Unifier Sync one-pager" | Text link |
| Section 1 (The Challenge) | delay-analysis-eot-brochure.pdf | "Delays and EOT claims are covered in our Delay Analysis & EOT Advisory" | Text link |

**Implementation:** Edit `UNIFIER_SYNC_CASE_STUDY.md` — add cross-reference sentences.

---

### 4. Capability Statement → Linked Assets

#### Source: `CAPABILITY_STATEMENT_FINAL.md`

| Location | Cross-Link To | Anchor Text | Type |
|----------|---------------|-------------|------|
| Advisory Suite section | advisory-suite-overview.pdf | "Explore our integrated advisory suite — strategic overview" | Text link |
| Advisory Suite section → Individual services | planning-scheduling-brochure.pdf | "Detailed Planning & Scheduling Advisory brochure" | Text link |
| Advisory Suite section → Individual services | delay-analysis-eot-brochure.pdf | "Detailed Delay Analysis & EOT Advisory brochure" | Text link |
| Advisory Suite section → Individual services | contracts-claims-brochure.pdf | "Detailed Contracts & Claims Advisory brochure" | Text link |
| AI/Automation section | unifier-sync-case-study.pdf | "Case study: AI automation deployed on MAHSR T-3" | Text link |
| AI/Automation section | fidic-claims-intelligence-suite-overview.pdf | "FIDIC Claims Intelligence Suite — product overview" | Text link |
| Contact section | /contact | "Schedule an exploratory discussion" | URL link |

**Note:** Capability statement has NOT been modified in Phase B. These cross-links should be added when it is restructured (Phase B5).

---

### 5. Contracts & Claims Brochure → Linked Assets

#### Source: `CONTRACTS_CLAIMS_FINAL_RELEASE.md`

| Location | Cross-Link To | Anchor Text | Type |
|----------|---------------|-------------|------|
| Executive Summary | advisory-suite-overview.pdf | "See how contracts & claims fits within our integrated advisory suite" | Text link |
| Claims section | unifier-sync-case-study.pdf | "See how AI automation supports claims evidence compilation on MAHSR T-3" | Text link |
| About section | capability-statement.pdf | "Read the full capability statement" | Text link |
| Contact section | /contact | URL link | |

---

### 6. Planning & Scheduling Brochure → Linked Assets

#### Source: `PLANNING_SCHEDULING_FINAL_RELEASE.md`

| Location | Cross-Link To | Anchor Text | Type |
|----------|---------------|-------------|------|
| Executive Summary | advisory-suite-overview.pdf | "See how planning & scheduling fits within our integrated advisory suite" | Text link |
| Delay identification section | delay-analysis-eot-brochure.pdf | "For detailed delay analysis and EOT claims support" | Text link |
| About section | capability-statement.pdf | "Read the full capability statement" | Text link |

---

### 7. Concept Specs → Linked Assets

| Source | Cross-Link To | Anchor Text |
|--------|---------------|-------------|
| All 3 concept specs | fidic-claims-intelligence-suite-overview.pdf | "Part of the FIDIC Claims Intelligence Suite" |
| All 3 concept specs | /contact | "Interested in this product? Contact us for development timeline." |

---

## Cross-Link Count Summary

| Source Document | New Cross-Links Needed |
|----------------|:----------------------:|
| capability-statement | 6 (when restructured) |
| advisory-suite-overview | 4 |
| delay-analysis-eot-brochure | 3 |
| unifier-sync-case-study | 4 |
| contracts-claims-brochure | 3 |
| planning-scheduling-brochure | 3 |
| 3 concept specs | 2 each |
| **Total** | **~27** |

---

## Implementation Order

1. **Phase B3** — Add cross-links when condensing planning-scheduling-brochure and contracts-claims-brochure
2. **Phase B5** — Add cross-links when restructuring capability-statement
3. **Standalone** — Add cross-links to advisory-suite-overview (already rebuilt), delay-analysis-eot-brochure (already rebuilt), unifier-sync-case-study (already rebuilt) — these require no structural changes, only text additions

---

## Cross-Link Format Standard

All cross-links within documents should follow this format:

```
[Document Title](link-to-document) — [brief context]
```

Examples:
- `See our Delay Analysis & EOT Advisory Brochure for methodology details, FIDIC clause framework, and representative case studies.`
- `Explore our integrated advisory suite: Advisory Suite Strategic Overview.`
- `See how AI automation supports contract administration on MAHSR T-3: Unifier Sync Case Study.`

For website page references:
- `Schedule an exploratory discussion to discuss your project's requirements.`

---

## Verification

After implementation, verify that:
1. Every document links to at least capability-statement.pdf and the contact page
2. Every brochure links to advisory-suite-overview.pdf
3. Every document links to at least one related document
4. No broken cross-links (all referenced files exist)
5. Links are in body text, not just footnotes or appendices
