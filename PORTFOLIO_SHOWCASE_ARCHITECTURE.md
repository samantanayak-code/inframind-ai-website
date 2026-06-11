# Portfolio Showcase Architecture

**Date:** June 10, 2026  
**Phase:** B2 — Portfolio Integration & Showcase Architecture  
**Scope:** No document modifications. Architecture and discovery only.

---

## 1. Homepage Asset Strategy

### Hero Asset

**capability-statement.pdf**
- **Why:** The flagship document. Every visitor starts here. It establishes the practitioner, the megaproject credential (MAHSR T-3, INR 3,142 Crore), the ICC Fact Witness differentiator, and the full service scope.
- **Placement:** Primary CTA button on hero section — "Download Executive Capability Statement"
- **Treatment:** Badge: "Recommended — Start Here"

### Primary Featured Download

**unifier-sync-case-study.pdf**
- **Why:** Highest-scoring document (9/10). Most credible single asset. "3.5 hours → 15 minutes" is an instantly compelling headline that converts technical buyers and executives alike.
- **Placement:** Below hero, alongside capability statement as "Featured Case Study"
- **Treatment:** Callout: "See AI in action on India's largest high-speed rail project"

### Secondary Featured Downloads

| Document | Rationale | Placement |
|----------|-----------|-----------|
| **advisory-suite-overview.pdf** | Strategic map of all services. Entry point for visitors who skip the capability statement. | Services section or "Explore Our Offerings" area |
| **delay-analysis-eot-brochure.pdf** | Recently rebuilt. Addresses the highest-value pain point for EPC contractors. | "Recently Updated" badge, services section |

### Supporting Documents

These appear in their respective category sections but are not featured on the homepage:

| Document | Role |
|----------|------|
| planning-scheduling-brochure.pdf | Deep-dive for planning professionals |
| contracts-claims-brochure.pdf | Deep-dive for contracts and claims professionals |
| fidic-claims-intelligence-suite-overview.pdf | Product/technology overview |
| unifier-sync-one-pager.pdf | Quick-scan version of case study |
| fidic-notice-monitor-one-pager.pdf | Quick-scan product summary |

### Archive / Reference Documents

| Document | Status | Action |
|----------|--------|--------|
| contracts-claims-flyer.pdf | Needs rebuild. Currently 9 pages of design specs. | Do not list until rebuilt as true 1-page. |
| claim-narrative-drafter-spec.pdf | Concept-stage spec. "In Development." | List under "Product Roadmap" with status label. |
| eot-event-log-compiler-spec.pdf | Concept-stage spec. "In Development." | List under "Product Roadmap" with status label. |
| letter-drafter-epc-spec.pdf | Concept-stage spec. "In Development." | List under "Product Roadmap" with status label. |
| capability-statement.pptx | Presentation version of PDF. Low download value. | Secondary placement next to capability-statement.pdf. |

---

## 2. Download Center Structure

### Category: Executive Overview

| Document | Display Title | Priority |
|----------|---------------|:--------:|
| capability-statement.pdf | Executive Capability Statement | ★ Featured |
| capability-statement.pptx | Capability Statement (Presentation) | Standard |
| advisory-suite-overview.pdf | Advisory Suite — Strategic Overview | ★ Featured |

### Category: AI & Automation

| Document | Display Title | Priority |
|----------|---------------|:--------:|
| unifier-sync-case-study.pdf | Case Study: AI Automation on MAHSR T-3 | ★ Featured |
| unifier-sync-one-pager.pdf | Unifier Sync — One-Pager Overview | Standard |
| fidic-notice-monitor-one-pager.pdf | FIDIC Notice Monitor — One-Pager | Standard |
| fidic-claims-intelligence-suite-overview.pdf | FIDIC Claims Intelligence Suite — Overview | Standard |

### Category: EPC & Contracts

| Document | Display Title | Priority |
|----------|---------------|:--------:|
| delay-analysis-eot-brochure.pdf | Delay Analysis & EOT Advisory | ★ Featured |
| planning-scheduling-brochure.pdf | Planning & Scheduling Advisory | Standard |
| contracts-claims-brochure.pdf | Contracts & Claims Advisory | Standard |

### Category: Case Studies

| Document | Display Title | Priority |
|----------|---------------|:--------:|
| unifier-sync-case-study.pdf | Unifier Sync: AI Automation on MAHSR T-3 | ★ Featured |
| (future) | Additional case studies as they are developed | — |

### Category: Professional Profile

| Document | Display Title | Priority |
|----------|---------------|:--------:|
| capability-statement.pdf | Professional Profile & Capability Statement | ★ Featured |
| (future) | Executive Resume / CV (2-page professional summary) | Recommended addition |
| (future) | Project Reference Sheet (1-page project list) | Recommended addition |

### Category: Technical Resources

| Document | Display Title | Priority |
|----------|---------------|:--------:|
| fidic-claims-intelligence-suite-overview.pdf | FIDIC Claims Intelligence Suite — Product Overview | Standard |
| claim-narrative-drafter-spec.pdf | Claim Narrative Drafter — Concept Overview | Roadmap |
| eot-event-log-compiler-spec.pdf | EOT Event Log Compiler — Concept Overview | Roadmap |
| letter-drafter-epc-spec.pdf | Letter Drafter EPC — Concept Overview | Roadmap |

### Documents Without Category (Not Listed on Main Page)

| Document | Reason |
|----------|--------|
| contracts-claims-flyer.pdf | Currently not fit for client consumption. Rebuild before listing. |
| capability-statement.pptx | Listed alongside PDF in Executive Overview, not as separate category entry. |

---

## 3. User Journey Mapping

### Journey 1: EPC Client (Evaluating Delay Analysis Support)

```
Entry:  Search engine or referral → Services page
        │
        ▼
First:  delay-analysis-eot-brochure.pdf
        "Does this practitioner understand my contract type?"
        │
        ▼
Second: advisory-suite-overview.pdf
        "Is this a single-point solution or full lifecycle support?"
        │
        ▼
Third:  capability-statement.pdf
        "What is their broader credibility? ICC? MAHSR?"
        │
        ▼
Action: Contact page → Exploratory discussion request
```

**Cross-links needed:**
- Delay analysis brochure → advisory suite overview ("See how this fits within our integrated advisory suite")
- Capability statement → contact page

### Journey 2: Employer / Infrastructure Owner (Evaluating Claim Defence)

```
Entry:  Direct visit → Homepage
        │
        ▼
First:  capability-statement.pdf
        "Who is this? What projects have they worked on?"
        │
        ▼
Second: contracts-claims-brochure.pdf
        "Can they help defend against contractor claims?"
        │
        ▼
Third:  advisory-suite-overview.pdf
        "Do they offer independent verification of delay claims?"
        │
        ▼
Action: Contact page → Proposal request
```

**Cross-links needed:**
- Capability statement → contracts-claims-brochure ("See our contracts & claims advisory")
- Contracts brochure → advisory suite ("Explore full lifecycle support")

### Journey 3: Recruiter (Evaluating Candidate)

```
Entry:  LinkedIn → Website → Capability Statement page
        │
        ▼
First:  capability-statement.pdf
        "What is this person's career scope?"
        │
        ▼
Second: capability-statement.pptx
        "Quick scan of capabilities."
        │
        ▼
Third:  (No third document — recruiter needs CV/resume)
        │
        ▼
Action: Contact page → Direct outreach
```

**Gap:** No dedicated CV or professional profile document. Recruiter journey ends without a concise career summary.
**Recommendation:** Add a 2-page Executive Resume / CV as a new portfolio asset.

### Journey 4: AI Consulting Prospect (Evaluating Technology)

```
Entry:  Blog post or social media → Case Study page
        │
        ▼
First:  unifier-sync-case-study.pdf
        "Show me real AI deployed on a megaproject."
        │
        ▼
Second: fidic-claims-intelligence-suite-overview.pdf
        "What else have they built?"
        │
        ▼
Third:  capability-statement.pdf
        "Who built this? Do they understand my domain?"
        │
        ▼
Action: Contact page → Demo request
```

**Cross-links needed:**
- Case study → claims suite overview ("Explore our full product suite")
- Claims suite → capability statement ("Meet the practitioner behind the products")

### Journey 5: Project Director (Evaluating Full Lifecycle Support)

```
Entry:  Referral → Homepage
        │
        ▼
First:  capability-statement.pdf
        "Do they have the credentials for a INR 1,000Cr+ project?"
        │
        ▼
Second: advisory-suite-overview.pdf
        "Do they cover everything I need?"
        │
        ▼
Third:  delay-analysis-eot-brochure.pdf
        "Let me look at the highest-risk area first."
        │
        ▼
Action: Contact page → Exploratory discussion
```

**Cross-links needed:**
- Capability statement → advisory suite overview
- Advisory suite → individual brochures ("See detailed service descriptions")
- Each brochure → contact page

---

## 4. Asset Relationship Map

### Horizontal Cross-References (Current State)

```
capability-statement.pdf
  ├──→ advisory-suite-overview.pdf  ("Our integrated advisory offerings")
  ├──→ capability-statement.pptx    ("Presentation version")
  └──→ contact

advisory-suite-overview.pdf
  ├──→ planning-scheduling-brochure.pdf  ("See detailed brochure")
  ├──→ delay-analysis-eot-brochure.pdf   ("See detailed brochure")
  ├──→ contracts-claims-brochure.pdf     ("See detailed brochure")
  └──→ contact

unifier-sync-case-study.pdf
  └──→ contact

fidic-claims-intelligence-suite-overview.pdf
  ├──→ claim-narrative-drafter-spec.pdf
  ├──→ eot-event-log-compiler-spec.pdf
  ├──→ letter-drafter-epc-spec.pdf
  └──→ fidic-notice-monitor-one-pager.pdf
```

### Recommended Cross-References (Target State)

```
capability-statement.pdf
  ├──→ advisory-suite-overview.pdf       "Explore our three-pillar advisory suite"
  ├──→ unifier-sync-case-study.pdf       "See our AI in action on MAHSR T-3"
  ├──→ delay-analysis-eot-brochure.pdf   "Learn about our delay analysis approach"
  ├──→ capability-statement.pptx         "Presentation version"
  └──→ /contact                          "Schedule an exploratory discussion"

advisory-suite-overview.pdf
  ├──→ planning-scheduling-brochure.pdf  "Detailed brochure available"
  ├──→ delay-analysis-eot-brochure.pdf   "Detailed brochure available"
  ├──→ contracts-claims-brochure.pdf     "Detailed brochure available"
  ├──→ capability-statement.pdf          "Read the full capability statement"
  └──→ /contact                          "Discuss your project requirements"

delay-analysis-eot-brochure.pdf
  ├──→ advisory-suite-overview.pdf       "See how this fits within our integrated suite"
  ├──→ unifier-sync-case-study.pdf       "See how AI supports delay analysis"
  ├──→ capability-statement.pdf          "Read the full capability statement"
  └──→ /contact                          "Schedule an exploratory discussion"

unifier-sync-case-study.pdf
  ├──→ fidic-claims-intelligence-suite-overview.pdf  "Explore our full product suite"
  ├──→ capability-statement.pdf                      "Meet the practitioner"
  ├──→ unifier-sync-one-pager.pdf                    "Quick-scan overview"
  └──→ /contact                                      "Request a demo"

contracts-claims-brochure.pdf
  ├──→ advisory-suite-overview.pdf       "See the full lifecycle picture"
  ├──→ capability-statement.pdf          "Read the full capability statement"
  ├──→ unifier-sync-case-study.pdf       "See how AI supports contract administration"
  └──→ /contact                          "Discuss your claims requirements"

planning-scheduling-brochure.pdf
  ├──→ advisory-suite-overview.pdf       "See the full lifecycle picture"
  ├──→ capability-statement.pdf          "Read the full capability statement"
  └──→ /contact                          "Discuss your planning requirements"
```

### Backward References (Every Document Should Point To)

| Document Type | Must Link To |
|---------------|-------------|
| **All brochures** | advisory-suite-overview.pdf, capability-statement.pdf, /contact |
| **All case studies** | capability-statement.pdf, /contact |
| **All product specs** | fidic-claims-intelligence-suite-overview.pdf, /contact |
| **All one-pagers** | Corresponding full document, /contact |

### What Is Missing

| Missing Link | Impact |
|--------------|--------|
| No brochure links to advisory-suite-overview.pdf | Visitors cannot navigate back to the strategic overview |
| No brochure links to capability-statement.pdf | Visitors cannot find the practitioner's full credentials |
| No brochure links to unifier-sync-case-study.pdf | Visitors miss the strongest proof point |
| No document links to /contact in body text | CTAs are generic (last section only) |
| One-pagers do not link to full brochures | Quick-scan readers have no path to deeper content |

---

## 5. Featured Asset Evaluation

### Scoring Key (1–10)

| Score | Meaning |
|:-----:|---------|
| 1–3 | Needs significant work before public listing |
| 4–5 | Functional but weak. Low conversion value. |
| 6–7 | Solid. Suitable for standard placement. |
| 8–9 | Strong. Suitable for featured placement. |
| 10 | Premium. Ready for hero placement. |

### Evaluation Table

| Document | Credibility | Executive Appeal | Technical Depth | Commercial Value | Website Suitability | **Overall** | Verdict |
|----------|:-----------:|:----------------:|:---------------:|:----------------:|:-------------------:|:-----------:|---------|
| capability-statement.pdf | 8 | 7 | 7 | 8 | 7 | **7.4** | Core asset. Needs structural polish. |
| advisory-suite-overview.pdf | 8 | 8 | 6 | 8 | 8 | **7.6** | Strong strategic overview. Ready. |
| delay-analysis-eot-brochure.pdf | 8 | 8 | 8 | 9 | 8 | **8.2** | Flagship. Recently rebuilt. |
| planning-scheduling-brochure.pdf | 7 | 5 | 8 | 7 | 5 | **6.4** | Too long. Needs condensing. |
| contracts-claims-brochure.pdf | 7 | 6 | 8 | 8 | 6 | **7.0** | Good depth. Needs condensing. |
| contracts-claims-flyer.pdf | 3 | 2 | 3 | 4 | 2 | **2.8** | Not usable. Needs full rebuild. |
| unifier-sync-case-study.pdf | 10 | 9 | 7 | 9 | 9 | **8.8** | Strongest asset. Feature prominently. |
| unifier-sync-one-pager.pdf | 7 | 6 | 5 | 6 | 6 | **6.0** | Functional. Needs condensing to 1 page. |
| fidic-notice-monitor-one-pager.pdf | 7 | 6 | 6 | 6 | 6 | **6.2** | Functional. Needs condensing to 1 page. |
| fidic-claims-intelligence-suite-overview.pdf | 7 | 6 | 8 | 7 | 6 | **6.8** | Good. Needs Available/Roadmap separation. |
| claim-narrative-drafter-spec.pdf | 4 | 3 | 7 | 4 | 4 | **4.4** | Concept stage. Relabel before listing. |
| eot-event-log-compiler-spec.pdf | 4 | 3 | 7 | 4 | 4 | **4.4** | Concept stage. Relabel before listing. |
| letter-drafter-epc-spec.pdf | 4 | 3 | 7 | 4 | 4 | **4.4** | Concept stage. Relabel before listing. |

### Ranked by Overall Score

| Rank | Document | Score |
|:----:|----------|:-----:|
| 1 | unifier-sync-case-study.pdf | **8.8** |
| 2 | delay-analysis-eot-brochure.pdf | **8.2** |
| 3 | advisory-suite-overview.pdf | **7.6** |
| 4 | capability-statement.pdf | **7.4** |
| 5 | contracts-claims-brochure.pdf | **7.0** |
| 6 | fidic-claims-intelligence-suite-overview.pdf | **6.8** |
| 7 | planning-scheduling-brochure.pdf | **6.4** |
| 8 | fidic-notice-monitor-one-pager.pdf | **6.2** |
| 9 | unifier-sync-one-pager.pdf | **6.0** |
| 10 | claim-narrative-drafter-spec.pdf | **4.4** |
| 11 | eot-event-log-compiler-spec.pdf | **4.4** |
| 12 | letter-drafter-epc-spec.pdf | **4.4** |
| 13 | contracts-claims-flyer.pdf | **2.8** |

---

## 6. Download Page Recommendations

### Layout Structure (Top to Bottom)

#### 6.1 Featured Downloads Section

```
┌─────────────────────────────────────────────────────────────────────┐
│  ★ FEATURED DOWNLOADS                                                │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │
│  │ Capability   │  │ Case Study:  │  │ Delay        │               │
│  │ Statement    │  │ Unifier Sync │  │ Analysis &   │               │
│  │ [PDF]        │  │ [PDF]        │  │ EOT Brochure │               │
│  │ "Start Here" │  │ "See AI in   │  │ [PDF]        │               │
│  │ badge        │  │ action" badge│  │ "Recently    │               │
│  │              │  │              │  │ Updated"     │               │
│  │ 508 KB       │  │ 358 KB       │  │ badge        │               │
│  │              │  │              │  │              │               │
│  │              │  │              │  │ 457 KB       │               │
│  └──────────────┘  └──────────────┘  └──────────────┘               │
└─────────────────────────────────────────────────────────────────────┘
```

Each card shows: icon, title, format badge, file size, 1-line description, action button.

#### 6.2 Recently Updated Section

Updated whenever a document undergoes significant revision. Current candidates:
- delay-analysis-eot-brochure.pdf (rebuilt June 10)
- advisory-suite-overview.pdf (restructured June 10)
- unifier-sync-case-study.pdf (polished June 10)

#### 6.3 Category Sections

Displayed as collapsible or tabbed groups:

| Category | Contains | Display Treatment |
|----------|----------|-------------------|
| Executive Overview | capability-statement (PDF + PPTX), advisory-suite-overview | Expanded by default |
| Service Brochures | planning-scheduling, delay-analysis-eot, contracts-claims | Collapsible section |
| AI & Automation | unifier-sync case study + one-pager, fidic-notice-monitor one-pager, claims suite overview | Collapsible section |
| Case Studies | unifier-sync-case-study | Collapsible section |
| Technical Resources | 3 concept specs under "Product Roadmap" subheading | Collapsible, collapsed by default |

#### 6.4 Technical Resources Section

Lowest priority. Visually differentiated (smaller cards, muted styling):

```
┌─────────────────────────────────────────────────────────────────────┐
│  PRODUCT ROADMAP  —  In Development                                  │
│                                                                     │
│  ○ Claim Narrative Drafter — Concept Overview  [PDF, 271 KB]       │
│  ○ EOT Event Log Compiler — Concept Overview  [PDF, 275 KB]        │
│  ○ Letter Drafter EPC — Concept Overview  [PDF, 281 KB]            │
└─────────────────────────────────────────────────────────────────────┘
```

#### 6.5 UX Improvements

| Improvement | Rationale |
|-------------|-----------|
| Show file size on every download card | Helps users with bandwidth concerns or download limits |
| Show page count | Sets expectations for reading time |
| Show last-updated date | Signals freshness. "Recently Updated" badge for ≤7 days. |
| Show "Recommended for" tags | E.g., "Recommended for: EPC Contractors, Project Directors" |
| One-click download | No interstitial pages. Click → download. |
| Preview option | Open PDF in new tab before downloading |
| Sort controls | By name, date, size, category |

---

## 7. Remaining Phase B Priorities

### Documents That Materially Improve Portfolio Quality

#### Must Rebuild

| Document | Priority | Reason | Effort |
|----------|:--------:|--------|:------:|
| contracts-claims-flyer.pdf | **High** | Currently 9 pages of design specifications. Blocks clients from accessing quick-scan format. | Medium |

#### Must Edit

| Document | Priority | Reason | Effort |
|----------|:--------:|--------|:------:|
| planning-scheduling-brochure.pdf | **High** | 19 pages. Section overlap. Reader fatigue. Needs condensing to 12-14 pages. | Medium |
| contracts-claims-brochure.pdf | **High** | 14 pages. Needs condensing to 8-10 pages. | Medium |
| capability-statement.pdf | Medium | 7 pages. Strong content but needs visual structure and alignment with new document standards. | Medium |

#### Minor Edits Recommended

| Document | Action | Effort |
|----------|--------|:------:|
| fidic-claims-intelligence-suite-overview.pdf | Separate "Available Now" modules from "Roadmap" modules. Remove "Building" and "Concept Spec" labels. | Low |
| fidic-notice-monitor-one-pager.pdf | Condense to 1 physical page. Update header/footer spacing. | Low |
| unifier-sync-one-pager.pdf | Condense to 1 physical page (currently ~2 pages rendered). | Low |

#### Relabel (Low Effort)

| Document | Current Label | Recommended Label | Effort |
|----------|---------------|-------------------|:------:|
| claim-narrative-drafter-spec.pdf | "CONCEPT READY" | "Product Concept — In Development" | Low |
| eot-event-log-compiler-spec.pdf | "CONCEPT READY" | "Product Concept — In Development" | Low |
| letter-drafter-epc-spec.pdf | "CONCEPT READY" | "Product Concept — In Development" | Low |

#### Leave Unchanged

| Document | Rationale |
|----------|-----------|
| capability-statement.pptx | Functional. Low priority. Update after capability-statement.pdf is restructured. |
| fidic-notice-monitor-demo-script.pdf | Already removed from downloads folder. Page reference needs fixing. |

#### Archive / Do Not List Publicly

| Document | Action |
|----------|--------|
| fidic-notice-monitor-demo-script.pdf | Already archived. Remove page reference from `src/app/automations/fidic-notice-monitor/page.tsx:255`. |

### Recommended Phase B Execution Order

```
Phase B — Updated Priority Order
══════════════════════════════════════════════════════════════════════

  DONE   B-Pilot  Rebuild delay-analysis-eot-brochure                ✓
  DONE   B1       Rebuild advisory-suite-overview                    ✓
  DONE   B1       Polish unifier-sync-case-study                     ✓

  NEXT   B3       Condense planning-scheduling-brochure (19→12p)
  NEXT   B3       Condense contracts-claims-brochure (14→8-10p)
  NEXT   B4       Rebuild contracts-claims-flyer (→1 page)
  NEXT   B5       Polish capability-statement (structural)
  NEXT   B6       Restructure fidic-claims-intelligence-suite
  NEXT   B7       Relabel 3 concept specs
  NEXT   B7       Condense 2 one-pagers (unifier + fidic-notice)
  NEXT   B8       Fix stale demo-script reference in page.tsx
  NEXT   B8       Add cross-links between documents (Phase C)

PHASE C (Visual enhancements — after all Phase B structural work)
  ───    C1       Add screenshots (unifier-sync-case-study)
  ───    C2       Add architecture diagram (advisory-suite)
  ───    C3       Add career timeline (capability-statement)
  ───    C4       Add download page UX improvements
```

---

## 8. Publication Readiness Assessment

### Portfolio Readiness Score: **6.5/10**

| Dimension | Score | Detail |
|-----------|:-----:|--------|
| Content quality | 7/10 | 3 flagship documents rebuilt. Core narrative is strong. |
| Consistency | 6/10 | Documents at different stages of maturity. Some rebuilt, some original. |
| Completeness | 5/10 | 1 document unusable (flyer). 3 concept-stage. No CV/resume. |
| Polish | 7/10 | No visual assets. Text-only throughout. |
| Accuracy | 8/10 | URLs, footers, classifications are correct. |

### Download Center Readiness Score: **5/10**

| Dimension | Score | Detail |
|-----------|:-----:|--------|
| Structure | 4/10 | No logical grouping on live site. Documents are scattered across service pages. |
| Usability | 5/10 | No file sizes, page counts, or descriptions visible at listing level. |
| Featured content | 6/10 | Capability statement and case study are prominent enough. |
| Navigation | 4/10 | No centralized download center. Users must navigate to each service page. |
| Freshness signals | 3/10 | No "Recently Updated" badges or date-based sorting. |

### Client-Facing Readiness Score: **7/10**

| Dimension | Score | Detail |
|-----------|:-----:|--------|
| First impression | 8/10 | Capability statement + MAHSR T-3 + ICC create immediate credibility. |
| Trustworthiness | 8/10 | No internal artifacts, QA scores, or staging URLs remain. |
| Professional tone | 7/10 | Text-only documents feel less polished than designed alternatives. |
| Depth vs breadth | 6/10 | Delay analysis is strong. Planning and contracts brochures are still too long. |
| Conversion path | 6/10 | CTAs exist but are generic. No document-specific conversion triggers. |

### Final Recommendation: **B — Minor improvements recommended**

| Option | Score Range | Verdict |
|--------|:-----------:|---------|
| A — Ready for public release | 9–10 | Not yet. Visual assets and flyer rebuild are blockers. |
| **B — Minor improvements recommended** | **6–8** | **✅ Current state.** Publishable now. Improve as Phase B continues. |
| C — Significant work still required | 1–5 | Progressing well. Only flyer and concept specs drag the score down. |

### Go/No-Go Decision

**Recommendation: GO for public release with caveats.**

| Condition | Status | Notes |
|-----------|:------:|-------|
| Phase A (trust-eroding content) | ✅ Complete | No internal QA, staging URLs, or confidential markings remain |
| 3 flagship documents rebuilt | ✅ Complete | delay-analysis, advisory-suite, unifier-sync case study |
| PDF generation pipeline works | ✅ Verified | All 13 PDFs + 1 PPTX generate without errors |
| Production URLs correct | ✅ Verified | Zero vercel.app references remain |
| Footer standard applied | ✅ Verified | "InfraMind EPC" / "inframindepc.com" / "All rights reserved" |

| Caveat | Severity | Mitigation |
|--------|:--------:|------------|
| contracts-claims-flyer.pdf not usable | High | Remove from download listings until rebuilt. Do not surface. |
| planning-scheduling-brochure.pdf too long | Medium | Acceptable for technical readers. Condense in Phase B3. |
| contracts-claims-brochure.pdf too long | Medium | Acceptable for technical readers. Condense in Phase B3. |
| No visual assets | Low | Documents are text-only but content is strong. Phase C addresses this. |
| No central download center | Medium | Documents are accessible via service pages. Add download center in Phase C. |
| Demo script reference in page code | Low | One stale URL in `fidic-notice-monitor/page.tsx:255`. Fix before launch. |

---

## Appendix A: Current Website Document References

| Page | Documents Referenced | Issues |
|------|---------------------|--------|
| `/services/contracts-claims` | contracts-claims-brochure.pdf, contracts-claims-flyer.pdf | Flyer is not client-ready |
| `/advisory-suite` | advisory-suite-overview.pdf, planning-scheduling-brochure.pdf, delay-analysis-eot-brochure.pdf, contracts-claims-brochure.pdf | ✅ All valid references |
| `/capability-statement` | capability-statement.pdf, capability-statement.pptx | ✅ Clean |
| `/automations/fidic-notice-monitor` | fidic-notice-monitor-one-pager.pdf, **fidic-notice-monitor-demo-script.pdf** | ❌ Demo script was archived in Phase A. Page still references it. |
| `/automations/fidic-claims-intelligence-suite` | fidic-claims-intelligence-suite-overview.pdf, fidic-notice-monitor-one-pager.pdf, eot-event-log-compiler-spec.pdf, claim-narrative-drafter-spec.pdf, letter-drafter-epc-spec.pdf | ✅ Concept specs are listed but need "In Development" labels |
| `/automations/unifier-sync` | unifier-sync-one-pager.pdf, unifier-sync-case-study.pdf | ✅ Clean |

---

## Appendix B: Recommended New Assets

| Asset | Priority | Purpose | Target Length |
|-------|:--------:|---------|:-------------:|
| Executive Resume / CV | Medium | Recruiter journey. Professional profile for career opportunities. | 2 pages |
| Project Reference Sheet | Low | One-page project list with roles, values, and contract forms. | 1 page |
| Service Rate Card | Low | Pricing reference for serious prospects. Password-protected. | 1–2 pages |
| Advisory Suite Architecture Diagram | Medium | Visual showing three-pillar integration. For website use + advisory-suite-overview. | 1 diagram |

---

**Prepared by:** Portfolio Showcase Architecture Assessment  
**Date:** June 10, 2026  
**Status:** Complete. No files modified.
