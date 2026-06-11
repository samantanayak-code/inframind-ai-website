# Portfolio Restructuring Master Plan — InfraMind AI

**Generated:** June 10, 2026  
**Based on:** PORTFOLIO_DOCUMENT_AUDIT.md  
**Phase:** Planning (pre-implementation)  
**Status:** Approved for execution upon sign-off

---

## 1. Recommended Information Architecture

The portfolio shall be organized into a logical hierarchy that guides visitors from broad overview to specific detail, matching the typical buyer journey:

```
PORTFOLIO INFORMATION ARCHITECTURE
═══════════════════════════════════════════════════════════════════

LAYER 1: THE COMPANY (Who We Are)
  └─ Capability Statement (flagship — 10-12 pages)
  └─ Capability Statement Presentation (PPTX)

LAYER 2: THE OFFERINGS (What We Do)
  ├─ Advisory Suite Overview (strategic umbrella)
  ├─ Planning & Scheduling Brochure
  ├─ Delay Analysis & EOT Brochure
  └─ Contracts & Claims Brochure

LAYER 3: THE PRODUCTS (Our Technology)
  ├─ FIDIC Claims Intelligence Suite Overview
  ├─ Unifier Sync Case Study
  ├─ FIDIC Notice Monitor One-Pager
  ├─ Claim Narrative Drafter Spec
  ├─ EOT Event Log Compiler Spec
  └─ Letter Drafter EPC Spec

LAYER 4: THE EVIDENCE (Proof Points)
  ├─ Unifier Sync Case Study (also in Layer 3)
  └─ Capability Statement (proof by reference)
```

### Navigation Principle

Visitors arrive via one of three paths:

| Visitor Type | Entry Point | Recommended Path |
|---|---|---|
| **Decision-maker** (CTO, Project Director) | Capability Statement → Advisory Suite Overview → Individual Brochure |
| **Technical buyer** (Contracts Manager, Planner) | Product one-pager → Case Study → Detailed Spec |
| **Investor / Partner** | Capability Statement → Advisory Suite Overview |

No document should contain information that is better placed in another document without referencing it.

---

## 2. Proposed Document Hierarchy by Category

### 2.1 Executive / Leadership Documents

| Document | Current Name | Recommended Name | Decision |
|---|---|---|---|
| Flagship company overview | `capability-statement.pdf` | `capability-statement.pdf` | **Keep — Refine** |
| Presentation deck | `capability-statement.pptx` | `capability-statement.pptx` | **Keep — Refine** |

### 2.2 AI & Automation Documents

| Document | Current Name | Recommended Name | Decision |
|---|---|---|---|
| Tool case study | `unifier-sync-case-study.pdf` | `unifier-sync-case-study.pdf` | **Keep — Refine** |
| Tool one-pager | `unifier-sync-one-pager.pdf` | `unifier-sync-one-pager.pdf` | **Keep — Condense** |
| Product one-pager | `fidic-notice-monitor-one-pager.pdf` | `fidic-notice-monitor-one-pager.pdf` | **Keep — Condense** |
| Concept spec | `claim-narrative-drafter-spec.pdf` | `claim-narrative-drafter-spec.pdf` | **Keep — Relabel** |
| Concept spec | `eot-event-log-compiler-spec.pdf` | `eot-event-log-compiler-spec.pdf` | **Keep — Relabel** |
| Concept spec | `letter-drafter-epc-spec.pdf` | `letter-drafter-epc-spec.pdf` | **Keep — Relabel** |
| Suite overview | `fidic-claims-intelligence-suite-overview.pdf` | `fidic-claims-intelligence-suite-overview.pdf` | **Keep — Restructure** |
| Demo script | `fidic-notice-monitor-demo-script.pdf` | — | **Archive** (remove from public) |

### 2.3 EPC / Contracts Management Documents

| Document | Current Name | Recommended Name | Decision |
|---|---|---|---|
| Advisory master | `advisory-suite-overview.pdf` | `advisory-suite-overview.pdf` | **Keep — Reduce** |
| Contracts brochure | `contracts-claims-brochure.pdf` | `contracts-claims-brochure.pdf` | **Keep — Reduce** |
| Contracts flyer | `contracts-claims-flyer.pdf` | `contracts-claims-flyer.pdf` | **Rebuild** (strip to 1 page) |
| Planning brochure | `planning-scheduling-brochure.pdf` | `planning-scheduling-brochure.pdf` | **Keep — Reduce** |
| Delay brochure | `delay-analysis-eot-brochure.pdf` | `delay-analysis-eot-brochure.pdf` | **Rebuild** (overhaul from QA doc to brochure) |

### 2.4 Case Studies

| Document | Current Name | Recommended Name | Decision |
|---|---|---|---|
| Unifier Sync | `unifier-sync-case-study.pdf` | `unifier-sync-case-study.pdf` | **Keep — Polish** |

### 2.5 Technical Resources

| Document | Current Name | Recommended Name | Decision |
|---|---|---|---|
| Claims Suite Overview | `fidic-claims-intelligence-suite-overview.pdf` | `fidic-claims-intelligence-suite-overview.pdf` | **Keep — Restructure** |
| Claim Narrative Spec | `claim-narrative-drafter-spec.pdf` | (merge potential) | **Keep — Relabel** |
| EOT Log Spec | `eot-event-log-compiler-spec.pdf` | (merge potential) | **Keep — Relabel** |
| Letter Drafter Spec | `letter-drafter-epc-spec.pdf` | (merge potential) | **Keep — Relabel** |

### 2.6 Career & Professional Profile Documents

None currently exist. Recommended for future addition:
- Executive Resume / CV (2-page professional summary)
- Project Reference Sheet (1-page project list with roles and values)

---

## 3. Document-by-Document Action Plan

### Doc 1: capability-statement.pdf

| Attribute | Detail |
|---|---|
| **Current name** | `capability-statement.pdf` |
| **Recommended name** | `capability-statement.pdf` (keep) |
| **Decision** | Keep — Refine |
| **Purpose** | Flagship company overview — the primary portfolio document for all visitors |
| **Intended audience** | Project Directors, CTOs, PMCs, Infrastructure Owners, Legal Counsel, Investors |
| **Priority** | **HIGH** |
| **Effort** | Medium (7 pages → 10-12; layout fixes, URL replacement, visual additions) |

### Doc 2: capability-statement.pptx

| Attribute | Detail |
|---|---|
| **Current name** | `capability-statement.pptx` |
| **Recommended name** | `capability-statement.pptx` (keep) |
| **Decision** | Keep — Refine |
| **Purpose** | Presentation deck for live meetings, conferences, and sales pitches |
| **Intended audience** | Same as PDF, but for presentation contexts |
| **Priority** | MEDIUM |
| **Effort** | Medium (needs full review, alignment with PDF) |

### Doc 3: advisory-suite-overview.pdf

| Attribute | Detail |
|---|---|
| **Current name** | `advisory-suite-overview.pdf` |
| **Recommended name** | `advisory-suite-overview.pdf` (keep) or `advisory-suite-strategic-overview.pdf` |
| **Decision** | Keep — Reduce |
| **Purpose** | Strategic overview connecting all three advisory pillars (P&S, D&A, C&C); directs readers to individual brochures for detail |
| **Intended audience** | EPC Contractors, Infrastructure Owners, PMCs evaluating full lifecycle support |
| **Priority** | MEDIUM |
| **Effort** | Medium (13 → 6-8 pages, remove cross-selling matrices, add architecture visual) |

### Doc 4: contracts-claims-brochure.pdf

| Attribute | Detail |
|---|---|
| **Current name** | `contracts-claims-brochure.pdf` |
| **Recommended name** | `contracts-claims-brochure.pdf` (keep) |
| **Decision** | Keep — Reduce |
| **Purpose** | Deep-dive brochure for Contracts & Claims advisory service line |
| **Intended audience** | Contracts Managers, Claims Consultants, Legal Counsel, EPC Contractors |
| **Priority** | MEDIUM |
| **Effort** | Medium (14 → 8-10 pages, remove pricing, merge commercial benefits with ROI, remove "Post-Remediation" label) |

### Doc 5: contracts-claims-flyer.pdf

| Attribute | Detail |
|---|---|
| **Current name** | `contracts-claims-flyer.pdf` |
| **Recommended name** | `contracts-claims-flyer.pdf` (keep) |
| **Decision** | Rebuild |
| **Purpose** | True one-page summary of Contracts & Claims for quick scanning; leave-behind at meetings |
| **Intended audience** | Busy decision-makers, conference attendees, email attachment recipients |
| **Priority** | MEDIUM |
| **Effort** | Medium (rebuild from scratch as 1 page PDF; current file is 9 pages of spec + design docs) |

### Doc 6: planning-scheduling-brochure.pdf

| Attribute | Detail |
|---|---|
| **Current name** | `planning-scheduling-brochure.pdf` |
| **Recommended name** | `planning-scheduling-brochure.pdf` (keep) |
| **Decision** | Keep — Reduce |
| **Purpose** | Deep-dive brochure for Planning & Scheduling advisory service line |
| **Intended audience** | Planning Managers, Project Controls Teams, Programme Directors |
| **Priority** | MEDIUM |
| **Effort** | Medium (19 → 12-14 pages, merge sections 2+3 and 6+7, remove QA score) |

### Doc 7: delay-analysis-eot-brochure.pdf

| Attribute | Detail |
|---|---|
| **Current name** | `delay-analysis-eot-brochure.pdf` |
| **Recommended name** | `delay-analysis-eot-brochure.pdf` (keep) |
| **Decision** | **Rebuild** (complete overhaul) |
| **Purpose** | Professional brochure for Delay Analysis & EOT advisory; currently an internal QA document |
| **Intended audience** | Delay Analysts, Claims Managers, Project Directors, Legal Counsel |
| **Priority** | **HIGH** |
| **Effort** | **High** (full rewrite from scratch targeting 8-10 pages; currently only 2 pages of client-facing content) |

### Doc 8: unifier-sync-case-study.pdf

| Attribute | Detail |
|---|---|
| **Current name** | `unifier-sync-case-study.pdf` |
| **Recommended name** | `unifier-sync-case-study.pdf` (keep) |
| **Decision** | Keep — Polish |
| **Purpose** | Detailed case study demonstrating real-world AI automation on MAHSR T-3 |
| **Intended audience** | Technical buyers (IT Managers, Innovation Leads), Contracts Managers, Claims Consultants |
| **Priority** | **HIGH** |
| **Effort** | Medium (8 → 6 pages, reframe "What Didn't Work", add screenshots, add CTA) |

### Doc 9: unifier-sync-one-pager.pdf

| Attribute | Detail |
|---|---|
| **Current name** | `unifier-sync-one-pager.pdf` |
| **Recommended name** | `unifier-sync-one-pager.pdf` (keep) |
| **Decision** | Keep — Condense |
| **Purpose** | One-page product overview for Unifier Sync; quick-read format |
| **Intended audience** | Decision-makers, conference attendees, email recipients |
| **Priority** | MEDIUM |
| **Effort** | Low (condense 4 page output → true 1 page, add screenshot, URL fix) |

### Doc 10: fidic-notice-monitor-one-pager.pdf

| Attribute | Detail |
|---|---|
| **Current name** | `fidic-notice-monitor-one-pager.pdf` |
| **Recommended name** | `fidic-notice-monitor-one-pager.pdf` (keep) |
| **Decision** | Keep — Condense |
| **Purpose** | One-page product overview for FIDIC Notice Monitor |
| **Intended audience** | Contracts Managers, Claims Engineers, Project Directors |
| **Priority** | MEDIUM |
| **Effort** | Low (condense to 1 page, improve "AI-Powered" differentiator, URL fix) |

### Doc 11: fidic-notice-monitor-demo-script.pdf

| Attribute | Detail |
|---|---|
| **Current name** | `fidic-notice-monitor-demo-script.pdf` |
| **Recommended name** | — |
| **Decision** | **Archive** (remove from public downloads) |
| **Purpose** | Internal sales demo script — not a portfolio asset |
| **Intended audience** | InfraMind AI sales team (internal only) |
| **Priority** | **HIGH** (removal) |
| **Effort** | Low (simple file move to internal folder) |

### Doc 12: fidic-claims-intelligence-suite-overview.pdf

| Attribute | Detail |
|---|---|
| **Current name** | `fidic-claims-intelligence-suite-overview.pdf` |
| **Recommended name** | `fidic-claims-intelligence-suite-overview.pdf` (keep) |
| **Decision** | Keep — Restructure |
| **Purpose** | Executive overview of the four-module FIDIC Claims Intelligence Suite |
| **Intended audience** | Claims Managers, Legal Counsel, CTOs, Project Directors |
| **Priority** | MEDIUM |
| **Effort** | Medium (7 → 5-6 pages, clearly separate "Available" vs "Roadmap" modules, add architecture diagram, remove "Building"/"Concept Spec" labels) |

### Doc 13: claim-narrative-drafter-spec.pdf

| Attribute | Detail |
|---|---|
| **Current name** | `claim-narrative-drafter-spec.pdf` |
| **Recommended name** | `claim-narrative-drafter-concept-overview.pdf` |
| **Decision** | Keep — Relabel |
| **Purpose** | Product concept overview for the Claim Narrative Drafter module |
| **Intended audience** | Technical evaluators, Claims Managers, Legal Counsel |
| **Priority** | LOW |
| **Effort** | Low (relabel, add timeline, remove overly technical architecture detail) |

### Doc 14: eot-event-log-compiler-spec.pdf

| Attribute | Detail |
|---|---|
| **Current name** | `eot-event-log-compiler-spec.pdf` |
| **Recommended name** | `eot-event-log-compiler-concept-overview.pdf` |
| **Decision** | Keep — Relabel |
| **Purpose** | Product concept overview for the EOT Event Log Compiler module |
| **Intended audience** | Planning Managers, Delay Analysts, Claims Managers |
| **Priority** | LOW |
| **Effort** | Low (relabel, add timeline, reduce overlap with suite overview) |

### Doc 15: letter-drafter-epc-spec.pdf

| Attribute | Detail |
|---|---|
| **Current name** | `letter-drafter-epc-spec.pdf` |
| **Recommended name** | `letter-drafter-epc-concept-overview.pdf` |
| **Decision** | Keep — Relabel |
| **Purpose** | Product concept overview for the Letter Drafter EPC module |
| **Intended audience** | Contract Administrators, Claims Managers, Project Directors, Legal Advisors |
| **Priority** | LOW |
| **Effort** | Low (relabel, add timeline, add before/after comparison) |

---

## 4. Content Analysis

### 4.1 Duplicate Content

| Content Block | Appears In | Count |
|---|---|---|
| MAHSR T-3 project profile (value, scope, parties) | capability-statement, advisory-suite-overview, contracts-claims-brochure, planning-scheduling-brochure, unifier-sync-case-study, fidic-notice-monitor-one-pager, fidic-claims-intelligence-suite-overview | 7 docs |
| Six Differentiators table | capability-statement, advisory-suite-overview, contracts-claims-brochure, planning-scheduling-brochure, unifier-sync-one-pager | 5 docs |
| FIDIC clause reference (Sub-Clause 20.1, 8.4, etc.) | advisory-suite-overview, contracts-claims-brochure, contracts-claims-flyer, planning-scheduling-brochure, fidic-notice-monitor-one-pager, fidic-claims-intelligence-suite-overview | 6 docs |
| Service descriptions (same services in overview + individual brochure) | advisory-suite-overview + contracts-claims-brochure + planning-scheduling-brochure | 3 docs |
| Engagement models and pricing bands | advisory-suite-overview, contracts-claims-brochure, contracts-claims-flyer, planning-scheduling-brochure | 4 docs |
| ROI metrics table (100% notice compliance, 80%+ claim success, etc.) | capability-statement, advisory-suite-overview, contracts-claims-brochure, contracts-claims-flyer, planning-scheduling-brochure | 5 docs |
| "Digitise. Analyse. Decide." + "Built in-house with AI-first principles" | Every single document | 15 docs |

### 4.2 Overlapping Content (Problematic)

| Overlap Pair | Issue |
|---|---|
| `advisory-suite-overview.pdf` ↔ individual brochures (3, 4, 6) | Services described at both levels with different detail — readers don't know which to read |
| `claim-narrative-drafter-spec.pdf` ↔ `fidic-claims-intelligence-suite-overview.pdf` | Same architecture description repeated; suite overview should reference specs, not duplicate them |
| `eot-event-log-compiler-spec.pdf` ↔ `fidic-claims-intelligence-suite-overview.pdf` | Same issue as above |
| `letter-drafter-epc-spec.pdf` ↔ `fidic-claims-intelligence-suite-overview.pdf` | Same issue as above |
| `contracts-claims-flyer.pdf` ↔ `contracts-claims-brochure.pdf` | Flyer is a condensed version but the content is lifted verbatim rather than rewritten for space |

### 4.3 Documents That Weaken First Impression

| Document | Problem | Severity |
|---|---|---|
| `delay-analysis-eot-brochure.pdf` | Exposes QA scores (7.5/10), change logs, go/no-go verdicts, and next-step task lists. An internal production document disguised as a brochure. | **Critical** |
| `fidic-notice-monitor-demo-script.pdf` | Full sales script with objection handling and "Pending" checklist items. Publicly accessible. | **Critical** |
| `contracts-claims-flyer.pdf` | 9 pages of design specifications and color palettes for what should be a 1-page flyer. Design brief, not client content. | **High** |
| `claim-narrative-drafter-spec.pdf` | "CONCEPT READY" and "v1.0 (Concept Release)" labels signal unfinished work. | **Medium** |
| `eot-event-log-compiler-spec.pdf` | Same "CONCEPT READY" issue. | **Medium** |
| `letter-drafter-epc-spec.pdf` | Same "CONCEPT READY" issue. | **Medium** |

### 4.4 Documents That Should Become Flagship Portfolio Assets

| Document | Current State | Target State |
|---|---|---|
| `capability-statement.pdf` | 7 pages, layout issues, staging URLs | **10-12 page polished executive document** — the single most important download |
| `unifier-sync-case-study.pdf` | Solid structure, weak ending | **The definitive AI proof-point** — best technical case study with before/after, screenshots, CTA |
| `contracts-claims-brochure.pdf` | Overlong, pricing exposed | **The definitive advisory brochure** — showcase evidence hierarchy, workflows, outcomes |

---

## 5. Recommendations

### 5.1 Top 5 Documents to Showcase Prominently on Website

| Rank | Document | Why |
|---|---|---|
| 1 | `capability-statement.pdf` | The flagship. Every visitor's first download. Represents the entire company. |
| 2 | `advisory-suite-overview.pdf` | Strategic overview that directs visitors to specific brochures. Best for top-of-funnel. |
| 3 | `unifier-sync-case-study.pdf` | The only real case study. Concrete proof of deployed AI on a megaproject. |
| 4 | `contracts-claims-brochure.pdf` | Highest-value service line. Deep content demonstrates authority. |
| 5 | `fidic-claims-intelligence-suite-overview.pdf` | Shows the product vision and technology roadmap. |

### 5.2 Top 3 Documents for "Featured Downloads"

| Rank | Document | Reason |
|---|---|---|
| 1 | `capability-statement.pdf` | Universal relevance — every visitor needs this. |
| 2 | `unifier-sync-case-study.pdf` | Best proof-point. Converts technical buyers. |
| 3 | `contracts-claims-flyer.pdf` | Quick scan format. Low commitment download for new visitors. |

### 5.3 Top 3 Documents to Convert into Visual Case Studies

| Rank | Document | Visual Treatment |
|---|---|---|
| 1 | `unifier-sync-case-study.pdf` | Animated before/after workflow (3-4 hours → 15 minutes visual timeline); screenshot of organized output folder; architecture diagram for the Selenium-based automation |
| 2 | `fidic-notice-monitor-one-pager.pdf` | Interactive timeline showing 28-day notice period with escalation levels; compliance dashboard mockup; alert notification mockups (7/3/1 day alerts) |
| 3 | `contracts-claims-brochure.pdf` | Claims Evidence Hierarchy as an infographic; workflow diagrams as visual process flows; ROI metric dashboard-style visualization |

---

## 6. Consistent Formatting Standard

All downloadable documents shall conform to the following standard:

### 6.1 Cover Page Structure

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│                   [Logo — 120x120]                   │
│                                                     │
│                 DOCUMENT TITLE                       │
│           (Inter Bold, 36pt, #D0D3D8)               │
│                                                     │
│          Subtitle / Tagline                          │
│      (Inter Regular, 16pt, #8A8D95)                 │
│                                                     │
│                                                     │
│          Prepared by Samanta Nayak                   │
│          Contracts & Claims Management               │
│          Infrastructure AI Architect                 │
│                                                     │
│          June 2026                                   │
│                                                     │
│   ───────────────────────────────────────────────   │
│   inframindepc.com  |  Digitise. Analyse. Decide.   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### 6.2 Executive Summary Format

Every document covering services or products must begin with an executive summary structured as:

1. **The Problem** (2-3 sentences) — What pain point does this address?
2. **The Solution** (2-3 sentences) — How does the offering solve it?
3. **The Value** (table, 3-5 rows) — Key metrics or outcomes
4. **The Credentials** (1 sentence) — Why this practitioner is qualified

No document should start with metadata (version, date, classification) before the executive summary. Metadata belongs in the cover page or footer.

### 6.3 Heading Hierarchy

| Level | Style | Size | Weight | Color |
|---|---|---|---|---|
| H1 | Document Title | 36pt | Bold | #D0D3D8 |
| H2 | Section Header (1., 2., etc.) | 24pt | Bold | #D0D3D8 |
| H3 | Subsection Header (1.1, 2.1, etc.) | 18pt | SemiBold | #D0D3D8 |
| H4 | Service/Feature Name | 14pt | SemiBold | #2A6094 |
| Body | Paragraph text | 11pt | Regular | #D0D3D8 |
| Caption | Notes, footnotes | 9pt | Regular | #8A8D95 |

### 6.4 Typography

| Element | Font | Specification |
|---|---|---|
| Headings | Inter | Bold (700) / SemiBold (600) |
| Body | Inter | Regular (400) |
| Metrics / Code | JetBrains Mono | Regular (400) |
| Quotes | Inter | Italic (300) |

### 6.5 Tables

```
┌─────────────────────────────────────────────────────────────────────┐
│  Header 1 (Bold, #2A6094)  │  Header 2 (Bold, #2A6094)  │  Header 3 │
├─────────────────────────────┼─────────────────────────────┼───────────┤
│  Left-aligned text          │  Left-aligned text          │  Center   │
│  Left-aligned text          │  Left-aligned text          │  ✓        │
└─────────────────────────────┴─────────────────────────────┴───────────┘
```

- Minimal borders (top header border, bottom border, column separator if needed)
- Header row: Bold, Primary color accent (#2A6094) or light background tint
- Body rows: Regular weight, #D0D3D8 color
- Alignment: Text → left, Status/Metrics → center, Numbers → right

### 6.6 Callout Boxes

Two types:

**Metric Callout** (for ROI data):
```
┌────────────────────────────────────────┐
│  75%    │  MIS Compilation Reduction   │
│         │  16 hours → under 4 hours    │
└────────────────────────────────────────┘
Background: #1E2128  |  Accent border: #2A6094  |  Metric: JetBrains Mono, 24pt, #2A6094
```

**Highlight Callout** (for key differentiators):
```
┌──────────────────────────────────────────────┐
│  ⚑  Practitioner-Built                       │
│  Every analysis understands FIDIC            │
│  obligations because the builder has         │
│  administered them.                          │
│  Accent: #06B6D4                             │
└──────────────────────────────────────────────┘
```

### 6.7 Footer Structure

Every page (except cover and back cover) shall have a minimal footer:

```
┌─────────────────────────────────────────────────────────────────────┐
│  Document Title                              inframindepc.com  |  Pg 3 │
└─────────────────────────────────────────────────────────────────────┘
```

**Final page (back cover or last content page) footer:**
```
© 2026 InfraMind AI  |  inframindepc.com  |  Digitise. Analyse. Decide.
```

Removed entirely: "Confidential — For Prospective Client Evaluation Only" and "Built in-house with AI-first principles".

### 6.8 Version Control Section

For internal use only. Every document may include a version history table in an appendix (not visible on first page):

```
## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 2.0     | Jun 2026 | Samanta Nayak | Full restructuring for public release |
| 1.0     | May 2026 | Samanta Nayak | Initial creation |
```

**Rules:**
- Version number only (no "Post-Remediation", no "Production Release", no QA scores)
- Version table on last page or in appendix, never on cover or early pages
- Not included in one-pagers or flyers

---

## 7. Phased Implementation Roadmap

### Phase A — Quick Wins (Do First)

**Goal:** Remove trust-eroding content; fix URLs and classifications.  
**Timeline:** Immediate.  
**Effort:** Low.  
**Risk if not done:** Documents actively damage credibility.

| # | Action | Documents Affected | Est. Time |
|---|---|---|---|
| A1 | **Remove `fidic-notice-monitor-demo-script.pdf`** from public downloads. Move to `internal/sales/`. | 1 doc | 5 min |
| A2 | **Replace all staging URLs** (`inframind-ai-website.vercel.app` → production domain) across every PDF | 14 docs | 2 hours |
| A3 | **Remove "Confidential — For Prospective Client Evaluation Only"** classification banners from every page | 14 docs | 3 hours |
| A4 | **Remove "Built in-house with AI-first principles"** footer from every document | 14 docs | 1 hour |
| A5 | **Remove QA scores and remediation labels** ("Post-Remediation v2.0", "QA Score: 8.4/10", "v2.0 (Production Release)") | 3-4 docs | 1 hour |
| A6 | **Remove "LIMITED TO 5 ADVISORY ENGAGEMENTS PER QUARTER"** scarcity messaging | 1 doc | 10 min |
| A7 | **Remove "Limited Spots Available"** language | 1 doc | 10 min |

### Phase B — Structural Improvements (Do Second)

**Goal:** Rebuild broken documents, reduce page counts, fix overlapping content.  
**Timeline:** 1-2 weeks.  
**Effort:** Medium to High.  
**Risk if not done:** Portfolio is overstuffed and inconsistent.

| # | Action | Documents Affected | Est. Time |
|---|---|---|---|
| B1 | **Rebuild `delay-analysis-eot-brochure.pdf`** from scratch as a proper 8-10 page client-facing brochure following the standard templates | 1 doc | 8-12 hours |
| B2 | **Rebuild `contracts-claims-flyer.pdf`** as a true 1-page PDF (strip all 8 pages of design specs) | 1 doc | 2-3 hours |
| B3 | **Condense `advisory-suite-overview.pdf`** from 13 to 6-8 pages; remove cross-selling matrices and duplicate content | 1 doc | 4-6 hours |
| B4 | **Condense `planning-scheduling-brochure.pdf`** from 19 to 12-14 pages; merge overlapping sections | 1 doc | 4-6 hours |
| B5 | **Condense `contracts-claims-brochure.pdf`** from 14 to 8-10 pages; move pricing to rate card | 1 doc | 4-6 hours |
| B6 | **Condense `unifier-sync-one-pager.pdf`** and `fidic-notice-monitor-one-pager.pdf` to true 1-page format | 2 docs | 2-3 hours |
| B7 | **Polish `unifier-sync-case-study.pdf`** — reframe "What Didn't Work", add CTA, trim technical detail | 1 doc | 3-4 hours |
| B8 | **Standardize Six Differentiators** across all documents to a single canonical version | 5 docs | 2 hours |
| B9 | **Relabel concept specs** ("CONCEPT READY" → "Product Concept Overview" with timeline) | 3 docs | 1 hour |
| B10 | **Restructure `fidic-claims-intelligence-suite-overview.pdf`** — separate "Available" vs "Roadmap" modules | 1 doc | 3-4 hours |

### Phase C — Premium Portfolio Enhancements (Do Third)

**Goal:** Differentiate through visual quality, interactivity, and premium presentation.  
**Timeline:** 2-4 weeks.  
**Effort:** High.  
**Risk if not done:** Portfolio remains text-heavy and visually indistinguishable from competitors.

| # | Action | Documents Affected | Est. Time |
|---|---|---|---|
| C1 | **Add architecture diagram** to capability statement (Four-Layer Architecture) | 1 doc | 4-6 hours |
| C2 | **Add product screenshots** to unifier-sync-case-study (output folder, execution log) | 1 doc | 2-3 hours |
| C3 | **Add workflow diagram** to fidic-notice-monitor one-pager (event detection → deadline tracking → escalation) | 1 doc | 3-4 hours |
| C4 | **Design Claims Evidence Hierarchy infographic** for contracts-claims-brochure | 1 doc | 3-4 hours |
| C5 | **Create advisory suite architecture visual** showing three-pillar interconnection | 1 doc | 3-4 hours |
| C6 | **Add career timeline visual** to capability statement | 1 doc | 3-4 hours |
| C7 | **Create before/after comparison visuals** for all ROI metrics across brochures | 4 docs | 4-6 hours |
| C8 | **Design one-pager templates** that match website visual identity | 3 docs | 3-4 hours |
| C9 | **Add PowerPoint slide designs** that match document styling | 1 doc | 4-6 hours |
| C10 | **Create interactive web versions** of key documents (HTML-based one-pagers) | 3 docs | 8-12 hours |
| C11 | **Add PDF bookmarks and navigable table of contents** to all multi-page documents | 8 docs | 4 hours |
| C12 | **Add QR codes** linking back to website on all print documents | 6 docs | 1 hour |

---

## 8. Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Documents lose specificity in condensing | Medium | Medium | Pre-define what stays vs goes per document before editing |
| Inconsistency across documents after parallel edits | Medium | High | Apply Phase B documents sequentially; use canonical reference tables |
| Production domain not finalized | High | High | Confirm domain before starting Phase A2 |
| Rebuilding delay-analysis-eot-brochure with wrong content assumptions | Medium | Medium | Write content outline and get approval before drafting |
| Visual assets creation is delayed (Phase C) | Medium | Low | Phase C is enhancement, not dependency; documents are publishable without visuals |

---

## 9. Success Criteria

The restructuring is complete when:

1. Every PDF URL in `public/downloads/` points to production domain
2. No document contains "Confidential", "AI-first principles", QA scores, or internal metadata in client-visible areas
3. `fidic-notice-monitor-demo-script.pdf` is removed from public downloads
4. All brochures fit within their target page counts (+/- 10%)
5. The three concept specs are relabeled with timelines and clear "In Development" status
6. All one-pagers fit on 1 physical page each
7. `delay-analysis-eot-brochure.pdf` is a complete client-facing brochure (not a QA document)
8. Every document follows the formatting standard defined in Section 6
9. Top 5 documents (Section 5.1) include at least one visual asset each
10. All documents carry the same footer: `© 2026 InfraMind AI  |  inframindepc.com  |  Digitise. Analyse. Decide.`

---

## 10. Next Steps (Awaiting Approval)

This master plan is ready for review. Once approved, the execution order is:

1. Phase A — Quick Wins (all items in parallel where possible)
2. Phase B — Structural Improvements (sequential: B1 first, then B2-B10 in parallel batches)
3. Phase C — Premium Enhancements (parallel, highest-effort items first)

Total estimated effort: **60-100 hours** across all three phases.

**Prepared by:** Portfolio Audit Process  
**Date:** June 10, 2026  
**Status:** Pending approval to begin implementation.
