# Portfolio Document Audit — InfraMind AI

**Generated:** June 10, 2026  
**Scope:** `public/downloads/` (15 files)  
**Purpose:** Comprehensive review of all downloadable portfolio documents for restructuring toward executive-quality, client-facing assets.

---

## Executive Summary

The current download library contains 15 files: 14 PDFs and 1 PPTX. The content demonstrates deep domain expertise but suffers from several systemic issues:

1. **Internal artifacts exposed** — QA scores, version histories, "CONCEPT READY" labels, change logs, and production checklists visible in supposedly client-facing documents.
2. **No consistent brand or style** — Each document uses different formatting, spacing, headers, and document classification schemes.
3. **Staging URLs** — All documents reference `inframind-ai-website.vercel.app` instead of the production domain.
4. **"AI-first principles" tagline** — Appears in every document as a footer; risks undermining the practitioner-built positioning.
5. **Confidential classification** — Every page marked "Confidential — For Prospective Client Evaluation Only" creates unnecessary friction for sharing.
6. **Spec documents undersell** — Concept specs labeled "CONCEPT READY" and "v1.0" signal unfinished work to potential clients.
7. **Demo script is downloadable** — An internal sales script (`fidic-notice-monitor-demo-script.pdf`) should not be a public portfolio asset.

---

## Document-by-Document Audit

### 1. capability-statement.pdf (7 pages)

**Current Purpose:** Flagship company overview — the primary portfolio document for prospective clients and partners. Covers executive summary, product portfolio, architecture, MAHSR T-3 deployment, services, credentials, vision, and contact.

**Strengths:**
- Comprehensive coverage of company positioning
- Real project credentials (MAHSR T-3, ICC Fact Witness)
- Clear metric-driven product descriptions
- Well-structured sections with tables

**Weaknesses:**
- Repetitive page headers and classification banners waste space
- Text overlap/corruption in page 1 (header text bleeds into body)
- "Ready to explore" CTA appears twice (pages 2 and 6)
- Confidential marking on every page inhibits sharing
- Vercel staging URL instead of production domain
- "AI-first principles" footer creates mixed brand message
- No visual assets rendered (images missing in text extraction)
- Section numbering inconsistent
- Contact page uses emoji icons that may not render properly in all PDF viewers

**Recommended Restructuring:**
- Remove "Confidential — For Prospective Client Evaluation Only" headers from every page
- Remove "AI-first principles" footer
- Replace all staging URLs with production domain
- Condense page headers to single small header
- Add proper visual assets (architecture diagram, product screenshots)
- Standardize section numbering or remove numbering entirely
- Consider expanding from 7 to 10-12 pages following the `CAPABILITY_STATEMENT_MASTER_LAYOUT.md` blueprint

---

### 2. capability-statement.pptx (1 slide deck)

**Current Purpose:** Presentation version of the capability statement for in-person or virtual meetings.

**Strengths:**
- Provides a presentation-ready format for live demos
- Can be customized per audience

**Weaknesses:**
- Untested — content quality unknown from text extraction alone
- May diverge from PDF version in content and style
- No indication of slide count or visual quality

**Recommended Restructuring:**
- Align content structure with the capability statement PDF
- Ensure consistent branding (colors, fonts, logo usage)
- Add slide numbers and version tracking
- Consider creating audience-specific variants (EPC contractors, PMCs, owners)

---

### 3. advisory-suite-overview.pdf (13 pages)

**Current Purpose:** Master brochure for the three-part advisory suite — Planning & Scheduling, Delay Analysis & EOT, Contracts & Claims.

**Strengths:**
- Full lifecycle coverage (planning through arbitration)
- Clear service definitions with FIDIC clause references
- Service comparison matrix adds clarity
- Bundle pricing and cross-selling matrix
- Competitive positioning table differentiates clearly
- Metric-driven outcomes with quantified impacts

**Weaknesses:**
- At 13 pages, it's too long for an overview — competes with individual brochures
- Text corruption in extracted content (line 66 "Confidential — For Prospective Client Evaluation Only" bleeding into content)
- Substantial overlap with `contracts-claims-brochure.pdf`, `planning-scheduling-brochure.pdf`, and `delay-analysis-eot-brochure.pdf`
- QA score and version metrics feel like internal tracking, not client-facing content
- "Built in-house with AI-first principles" footer again
- Staging URLs throughout
- Page count includes internal production artifacts

**Recommended Restructuring:**
- Reduce to 6-8 pages — position as a strategic overview that directs readers to individual brochures
- Remove the "5. Service Comparison Matrix" and "6. Cross-Selling Matrix" — these belong in internal sales materials
- Remove or relocate "7. Bundle Offerings" to a separate pricing sheet
- Make competitive positioning the final section (strong closer)
- Add a visual architecture diagram showing how the three offerings connect
- Consider renaming to "Advisory Suite — Strategic Overview" to distinguish from individual brochures

---

### 4. contracts-claims-brochure.pdf (14 pages)

**Current Purpose:** Deep-dive brochure for the Contracts & Claims advisory service line.

**Strengths:**
- Detailed service descriptions with scope and duration
- Claims Evidence Hierarchy (8-tier priority system) is a strong differentiator
- ROI metrics with source verification
- Stakeholder-specific value propositions (EPC Contractors, Owners, PMCs, Government)
- Workflow diagrams add visual explanation
- Clear differentiation from generic consultants and legal firms

**Weaknesses:**
- 14 pages is excessive for a single service line brochure
- Version label "Post-Remediation v2.0" implies there were problems before — undermines confidence
- Text corruption in workflow diagrams (lines 295-307 are garbled)
- Repetitive: "Contract Administration" definition overlaps with flyer content
- Pricing section (INR ranges) dates the document and may deter smaller clients
- "Limited Spots Available" creates artificial scarcity but feels unprofessional in writing
- "Verified deployments" cited without naming specific projects for most metrics
- "AI-first principles" footer inconsistent with practitioner positioning

**Recommended Restructuring:**
- Reduce to 8-10 pages
- Remove "Post-Remediation" from version label — use simple version number internally only
- Move pricing to a standalone rate card or make it contact-only
- Merge "Commercial Benefits" (Section 7) with ROI section
- Add real case study callouts (not generic testimonials)
- Replace "Verified deployments" with specific project names where possible
- Remove the "Limited Spots" language — position as selective, not scarce

---

### 5. contracts-claims-flyer.pdf (9 pages — should be 1 page)

**Current Purpose:** Single-page flyer summarizing the Contracts & Claims advisory offering.

**Strengths:**
- Good condensed content selection (problem, services, FIDIC compliance, outcomes, pricing)
- Clean layout specification
- Print and digital format specifications defined

**Weaknesses:**
- **Critical:** The document contains 9 pages but is supposed to be a 1-page flyer. Sections 4-8 (design specifications, color palette, typography, icons, print specs, file naming, distribution) are internal production documentation that should never be client-facing.
- The "flyer specification" (section 1) documents the design brief — not content
- No actual visual layout images rendered
- "Production Ready" and QA status labels are internal artifacts
- Staging URL

**Recommended Restructuring:**
- Extract a clean 1-page client-facing PDF with only the content (problem, services, outcomes, contact)
- Move all design specs (sections 4-8) to an internal production checklist
- The extracted text from this "flyer" is actually a better spec than client output — rebuild from scratch as a true 1-pager
- Ensure 1-page fits on A4 with proper margins

---

### 6. planning-scheduling-brochure.pdf (19 pages)

**Current Purpose:** Deep-dive brochure for the Planning & Scheduling advisory service line.

**Strengths:**
- Most comprehensive brochure (19 pages — too long, but thorough)
- Excellent "Why Schedule Quality Matters" section with FIDIC clause mapping
- Service descriptions are detailed and specific (tools, deliverables, methods)
- "Programme as a Contractual Asset" is a strong positioning concept
- Engagement model flowchart is helpful
- Proof points table creates credibility
- Stakeholder value matrix is well-structured

**Weaknesses:**
- 19 pages is too long — needs editorial trimming
- Version label "v2.0 (Production Release)" with QA Score of 8.4/10 — these are internal metrics
- Section 2 ("Why Schedule Quality Matters") overlaps conceptually with Section 3 ("Typical Project Challenges")
- Substantial text overlap with `advisory-suite-overview.pdf` (same services described differently)
- Services section repeats "What We Deliver" sub-lists that could be condensed
- "What Clients Say" testimonials are generic (no real names or company identifiers)
- "AI-first principles" footer
- Engagement Models are described in Section 6 AND Investment Framework is Section 7 — could merge

**Recommended Restructuring:**
- Reduce to 12-14 pages by consolidating:
  - Merge Sections 2 and 3 (challenges + why it matters)
  - Condense service descriptions into standardized cards
  - Merge Sections 6 and 7 (engagement models + investment)
- Remove QA score from version label
- Make at least one testimonial attributable
- Add a case study callout box for the MAHSR T-3 schedule achievements
- Move detailed "What We Deliver" lists to appendices or make them collapsible

---

### 7. delay-analysis-eot-brochure.pdf (9 pages)

**Current Purpose:** Brochure for the Delay Analysis & EOT advisory service.

**Strengths:**
- Clean structure with verified claims documentation
- FIDIC 2017 workflow diagram planned
- Distribution strategy clearly thought out

**Weaknesses:**
- **Critical:** This document is primarily an **internal production/QA document**, not a client-facing brochure. Sections include:
  - "Release Summary" with QA scores (7.5/10 before, 8.6/10 after)
  - "Changes from V1.0" — 12-item change log showing remedial work
  - "Verified Claims" table with cross-referencing methodology
  - "Qualified Claims" table
  - "Production Assets" inventory
  - "Quality Assurance" section with before/after scores
  - "Go/No-Go Verdict" checklist
  - "Next Steps" task list with owners and durations
- Only 2 pages (out of 9) contain actual client-facing content (sections 9 and 10 are the actual brochure content)
- "Distribution Strategy" and "QA Scores" should never be visible to clients
- No actual service descriptions, value propositions, or client benefits in the main content
- Text extraction shows this is mostly a markdown production spec exported as PDF

**Recommended Restructuring:**
- **Complete rebuild required.** This document needs to be rewritten from scratch as a proper client-facing brochure.
- Move all QA, version, changes, and production content to an internal folder
- The actual brochure content should follow the structure of `contracts-claims-brochure.pdf` or `planning-scheduling-brochure.pdf`:
  - Executive summary with problem/solution
  - Service descriptions (delay analysis, EOT claims, concurrent delay, programme forensic review, arbitration support, counter-claim defence)
  - Methodologies (Impacted As-Planned, Time Impact Analysis, Window Analysis, etc.)
  - FIDIC clause mapping
  - ROI metrics with case study references
  - Representative experience
  - Why InfraMind AI
  - Contact and CTA
- Target: 8-10 pages

---

### 8. unifier-sync-case-study.pdf (8 pages)

**Current Purpose:** Detailed case study of the Unifier Sync automation tool deployed on MAHSR T-3.

**Strengths:**
- Excellent structure: Challenge → Existing Process → Automation Approach → Outcome → Lessons Learned
- Specific, measurable metrics (3-4 hours → 15 minutes, 85-90% reduction)
- Technical depth demonstrates real engineering capability
- Honest "What Didn't Work" section builds credibility through transparency
- Version evolution shows iterative development
- Verified claims table with source references

**Weaknesses:**
- "Lessons Learned" section includes "What Didn't Work" — while honest, this can be framed better for client confidence
- Recommendations section lists missing features (no CLI, no tests, no docs) — implies the product is incomplete
- "3-day development" claim in verified claims undermines perceived value (sounds too quick)
- Staging URL
- No visual screenshots of the tool or its output
- "Practitioner-built solves real pain" lesson is valuable but the "3-4 hour download cycle" framing could be more professional
- No CTA other than generic "Contact" section
- "Confidential — For Prospective Client Evaluation Only" on every page

**Recommended Restructuring:**
- Keep the case study structure — it's strong
- Reframe "What Didn't Work" as "Version 1.0 Limitations & Subsequent Enhancements" to show progression
- Remove or soften the "No documentation, No tests" recommendations — these are internal notes
- Add a "Download the Tool" or "Request a Demo" CTA
- Add visual screenshots or a workflow diagram
- Move the "Verified Claims" table to an appendix or remove it (the main narrative should be convincing without a verification table)
- Add a business impact summary at the end (not just metrics — narrative ROI)
- Target: 6 pages (trim technical implementation details that aren't relevant to buyers)

---

### 9. unifier-sync-one-pager.pdf (4 pages)

**Current Purpose:** Condensed single-page overview of the Unifier Sync tool.

**Strengths:**
- Clean problem/solution/outcome structure
- Before/after metrics table is impactful
- User roles with key benefits is a nice touch
- "Why InfraMind AI" differentiators are well-summarized

**Weaknesses:**
- Despite being called a "one-pager", the content is spread across 4 PDF pages
- Extracted text shows only 2 pages of actual content + 2 pages of headers/footers
- No visual diagram or screenshot
- Staging URL
- Confidential marking unnecessary for a product one-pager
- "Built in-house with AI-first principles" creates inconsistency with "practitioner-built" positioning

**Recommended Restructuring:**
- It mostly works — the content selection is good
- Ensure it actually fits on 1 page in the final PDF output
- Add a visual (screenshot of the tool output or architecture)
- Remove confidential classification
- Remove "AI-first principles" footer
- Replace staging URL with production domain

---

### 10. fidic-notice-monitor-one-pager.pdf (4 pages)

**Current Purpose:** Product one-pager for the FIDIC Notice Monitor tool.

**Strengths:**
- Clear problem statement with specific FIDIC clause deadlines
- Well-structured solution capabilities
- Business outcomes with quantified impacts
- User roles with targeted benefits

**Weaknesses:**
- Same multi-page issue despite being called a "one-pager"
- "Never Miss a Notice Deadline Again" headline is strong but could be more professional
- Metric table (Notice Compliance 100%, Entitlement Preservation 100%) uses absolute claims that need qualification
- "AI-Powered" differentiator (#5) is the weakest — too generic
- No visual mockup or screenshot
- "Built in-house with AI-first principles" footer again
- Staging URL

**Recommended Restructuring:**
- Condense to 1 actual page
- Strengthen the problem section with a specific scenario (e.g., the MAHSR T-3 delay event)
- Differentiator #5 should be specific to this product (e.g., "Programme-Aware" or "FIDIC Clause-Integrated")
- Add a small workflow diagram showing event detection → deadline tracking → escalation
- Remove "AI-first principles"
- Replace staging URL

---

### 11. fidic-notice-monitor-demo-script.pdf (12 pages)

**Current Purpose:** Internal demo script for sales presentations of the FIDIC Notice Monitor.

**Strengths:**
- Well-structured demo flow with timing
- Objection handling section is useful for sales
- Escalation logic demonstrates product depth

**Weaknesses:**
- **Critical:** This is an **internal sales enablement document** and should **never be a publicly downloadable portfolio asset**. It contains:
  - Full sales scripts verbatim
  - Objection handling responses
  - Pre-demo preparation checklist
  - Demo environment configuration details
  - Internal status labels ("Pending" checklist items)
- Exposing internal scripts undermines authenticity in sales conversations
- Removes the improvisational credibility of live demos
- Staging URL throughout
- 12 pages with minimal client-facing value

**Recommended Restructuring:**
- **Remove from public downloads immediately.** This is an internal sales tool.
- If a demo preview is needed, create a 2-page "Product Demo Overview" that summarizes the product flow without the verbatim script
- Store the full demo script in a private/internal folder

---

### 12. fidic-claims-intelligence-suite-overview.pdf (7 pages)

**Current Purpose:** Executive overview of the four-module FIDIC Claims Intelligence Suite (Notice Monitor, EOT Event Log Compiler, Claim Narrative Drafter, Letter Drafter).

**Strengths:**
- Clear four-module architecture description
- Good section structure with supported FIDIC processes
- Representative use cases are specific and quantified (INR 45 Crore preserved, INR 12 Crore variation claim)
- FAQ section addresses common questions proactively
- User roles and benefit matrix is comprehensive

**Weaknesses:**
- "Status: Building" on FIDIC Notice Monitor and "Status: Concept Spec" on the other three modules signals that most of the suite is not built yet — this undermines the entire document
- Use case claims (INR 45 Crore preserved) cannot be verified without supporting case studies
- FAQ section, while useful, reads like a product spec rather than a client-facing overview
- "AI-first principles" footer
- Staging URL
- No visual architecture showing how the four modules connect
- The document is caught between being a product spec and a client brochure

**Recommended Restructuring:**
- Clearly separate "Available Now" vs "In Development" modules to manage expectations
- For concept-stage modules, use language like "On the Roadmap" or "Coming 2026 Q3" rather than "Concept Spec"
- Move FAQ section to an appendix or remove it entirely (the content belongs in demos, not in a portfolio document)
- Add a visual architecture diagram showing the four-module flow
- Add a "Get Early Access" CTA for the in-development modules
- Remove "AI-first principles" footer
- Target: 5-6 pages

---

### 13. claim-narrative-drafter-spec.pdf (4 pages)

**Current Purpose:** Concept specification for the Claim Narrative Drafter AI module.

**Strengths:**
- Clear problem/solution framing
- Good detail on the narrative structure (7 sections)
- Use case illustration is helpful and specific
- Pipeline diagram shows technical approach

**Weaknesses:**
- **Status: "CONCEPT READY"** — This is a spec, not a product. Showing it as a downloadable asset implies the product is further along than it is
- "v1.0 (Concept Release)" is an oxymoron — better to label as "Product Specification" or "Design Concept"
- No timeline or availability date
- Overly technical for a client-facing document (ingestion pipeline, compliance engine architecture)
- "AI-first principles" footer
- Staging URL
- Only 4 pages of spec content — feels thin as a standalone document

**Recommended Restructuring:**
- Relabel as "Product Concept Overview" with clear "In Development" status
- Add expected availability timeline
- Reduce technical architecture detail (move to appendix)
- Add a comparison: what this product does that manual processes cannot
- Consider merging with similar spec documents into a single "Claims Intelligence Suite — Product Roadmap" document
- Remove "AI-first principles"

---

### 14. eot-event-log-compiler-spec.pdf (4 pages)

**Current Purpose:** Concept specification for the EOT Event Log Compiler module.

**Strengths:**
- Clear problem statement (fragmented delay records, retrospective reconstruction)
- Good technical architecture overview
- Data schema definition shows concrete thinking
- Integration flow with other modules is well-described
- Use case illustration (unforeseeable soil conditions) is specific

**Weaknesses:**
- **Status: "CONCEPT READY"** — same issue as Claim Narrative Drafter
- Duplicates content from `fidic-claims-intelligence-suite-overview.pdf` (the architecture description, use cases)
- "AI-first principles" footer
- Staging URL
- No timeline or pricing indication
- "Forensic-grade" language used without definition

**Recommended Restructuring:**
- Same recommendations as Claim Narrative Drafter (relabel, add timeline, reduce technical detail)
- Consider merging with the Claim Narrative Drafter and Letter Drapper specs into a single "Claims Intelligence Suite — Detailed Module Specifications" document
- Remove "AI-first principles"
- Add a comparison table showing how automated event logging beats manual methods

---

### 15. letter-drafter-epc-spec.pdf (4 pages)

**Current Purpose:** Concept specification for the Letter Drafter EPC module.

**Strengths:**
- 20+ mapped FIDIC letter templates listed
- Clause Integrity Engine is a strong technical differentiator
- "Contractual Tone Controller" is an innovative feature
- Example notice structure is concrete and useful
- Use case illustration (delayed access to site) is specific

**Weaknesses:**
- Same "CONCEPT READY" status issue
- Substantial overlap with `claim-narrative-drafter-spec.pdf` in structure and approach
- "AI-first principles" footer
- Staging URL
- No comparison with existing letter drafting tools or manual processes
- "Pre-approved, contractually verified templates" language implies broader adoption than exists

**Recommended Restructuring:**
- Same as other spec documents — relabel, add timeline, merge into suite document
- Add a specific claim: "Reduce letter drafting from 2 hours to 10 minutes" with verification method
- Show a visual "before (manual email) vs after (Letter Drafter output)" comparison
- Remove "AI-first principles"
- Add an interactive demo link or request form

---

## Cross-Cutting Issues

### Issue 1: Unnecessary Full-Page Confidential Markings

Every single page of every PDF includes "Confidential — For Prospective Client Evaluation Only" and "InfraMind AI Operational Intelligence" headers/footers. This wastes ~15% of each page's usable space and signals that the document should not be shared freely.

**Recommendation:** Remove confidential classification from all portfolio documents. If legal requires disclaimers, use a small footer on the last page only.

### Issue 2: Staging URLs

All documents reference `inframind-ai-website.vercel.app` instead of the production domain.

**Recommendation:** Replace all instances with the production domain immediately.

### Issue 3: "AI-first principles" Branding

Every document ends with "© 2026 InfraMind AI — Built in-house with AI-first principles." This conflicts with the core "practitioner-built" positioning. The company's differentiator is that a domain expert (not an AI) built the solutions.

**Recommendation:** Remove "AI-first principles" from all documents. Use the closing tagline: "InfraMind AI — Digitise. Analyse. Decide." or simply the company name.

### Issue 4: Version Labels & Internal Metadata

Multiple documents expose version labels that include internal status indicators:
- "v2.0 (Post-Remediation)"
- "v2.0 (Production Release) QA Score: 8.4/10"
- "v1.0 (Concept Release)"
- "STATUS: CONCEPT READY"

**Recommendation:** Client-facing documents should show only a clean version number (e.g., "v2.0"). All internal QA scores, remediation status, and production readiness labels should be removed.

### Issue 5: Document Category Confusion

The collection mixes three distinctly different document types without clear delineation:

| Type | Files | Recommended Handling |
|------|-------|---------------------|
| **Client-facing brochures** | capability-statement, advisory-suite-overview, contracts-claims-brochure, planning-scheduling-brochure, unifier-sync-case-study | Keep and improve |
| **Product one-pagers** | unifier-sync-one-pager, fidic-notice-monitor-one-pager, contracts-claims-flyer | Rebuild as true 1-page PDFs |
| **Internal/production docs** | delay-analysis-eot-brochure (as-is), fidic-notice-monitor-demo-script | Remove from public access |
| **Concept specs** | claim-narrative-drafter-spec, eot-event-log-compiler-spec, letter-drafter-epc-spec | Relabel with timeline and status; merge or improve |
| **Executive overview** | fidic-claims-intelligence-suite-overview | Restructure to distinguish live vs. roadmap modules |

### Issue 6: Content Overlap and Redundancy

The following content appears across multiple documents with only minor variations:
- MAHSR T-3 project description (in 8+ documents)
- "Six Differentiators" table (in 5 documents with slight variations)
- FIDIC clause reference tables (in 6+ documents)
- Service descriptions (in advisory-suite-overview + each individual brochure)
- Engagement models and pricing (in 4+ documents)

**Recommendation:** Create a single source of truth for:
- MAHSR T-3 project profile → reference it consistently
- Six Differentiators → one canonical version
- FIDIC clause tables → one authoritative reference
- Pricing → standalone rate card (not embedded in brochures)

### Issue 7: Missing Production Domain

**Recommendation:** Update to the production domain as the first priority change across all documents.

### Issue 8: Visual Asset Gap

None of the extracted documents contain actual visual content — diagrams, screenshots, or infographics — despite several being referenced.

**Recommendation:** Add at minimum:
- Architecture diagram (capability statement, advisory suite overview, claims suite overview)
- Product screenshots (Unifier Sync, FIDIC Notice Monitor)
- Workflow diagrams (already planned for delay analysis brochure)
- Before/after comparison visuals
- Infographics for ROI metrics

---

## Recommended File Restructuring

### Proposed New Folder Structure

```
public/downloads/
├── README.md                          # Download page instructions
├── brochures/
│   ├── capability-statement-v2.pdf    # Flagship document (10-12 pages)
│   ├── advisory-suite-overview-v2.pdf # Strategic overview (6-8 pages)
│   ├── contracts-claims-brochure-v2.pdf (8-10 pages)
│   ├── planning-scheduling-brochure-v2.pdf (12-14 pages)
│   └── delay-analysis-eot-brochure-v2.pdf (NEW - 8-10 pages)
├── one-pagers/
│   ├── contracts-claims-flyer-v2.pdf
│   ├── unifier-sync-v2.pdf
│   ├── fidic-notice-monitor-v2.pdf
│   └── capability-statement-summary-v2.pdf
├── case-studies/
│   └── unifier-sync-mahsr-t3-v2.pdf
├── product-specs/
│   ├── fidic-claims-intelligence-suite-v2.pdf
│   ├── claim-narrative-drafter-v2.pdf
│   ├── eot-event-log-compiler-v2.pdf
│   └── letter-drafter-epc-v2.pdf
├── presentations/
│   └── capability-statement-v2.pptx
└── (REMOVED)
    └── fidic-notice-monitor-demo-script.pdf → Move to internal/sales/
```

### Files to Remove from Public Access

1. **`fidic-notice-monitor-demo-script.pdf`** — Internal sales script, not portfolio content

### Files to Rebuild Completely

1. **`delay-analysis-eot-brochure.pdf`** — Currently an internal QA document, not a brochure
2. **`contracts-claims-flyer.pdf`** — The actual flyer content is good but buried in design spec documentation

### Files to Merge or Consolidate

1. `claim-narrative-drafter-spec.pdf` + `eot-event-log-compiler-spec.pdf` + `letter-drafter-epc-spec.pdf` → Consider merging into a single "FIDIC Claims Suite — Detailed Module Specifications" document

---

## Priority Action Matrix

| Priority | Action | Impact | Effort |
|----------|--------|--------|--------|
| P0 | Replace all staging URLs with production domain | High | Low |
| P0 | Remove `fidic-notice-monitor-demo-script.pdf` from public downloads | High | Low |
| P0 | Rebuild `delay-analysis-eot-brochure.pdf` from scratch | High | Medium |
| P0 | Remove confidential classification from all pages | High | Low |
| P1 | Remove "AI-first principles" from all documents | Medium | Low |
| P1 | Rebuild `contracts-claims-flyer.pdf` as true 1-pager | Medium | Low |
| P1 | Remove QA scores/remediation labels from all brochures | Medium | Low |
| P1 | Relabel all concept specs with clear status/timeline | Medium | Low |
| P2 | Reduce page counts of oversized brochures | Medium | High |
| P2 | Add visual assets (screenshots, diagrams) | High | High |
| P2 | Standardize "Six Differentiators" across all documents | Medium | Low |
| P2 | Add visual architecture diagrams | High | Medium |
| P3 | Create standalone rate card for pricing | Low | Low |
| P3 | Consolidate overlapping FIDIC clause reference sections | Low | Medium |
| P3 | Establish consistent document template/style guide | Medium | High |

---

## Style Guide Recommendations

To ensure consistency across all future document versions:

### Document Classification
- Remove "Confidential" from all portfolio documents
- Footer format: `© 2026 InfraMind AI | inframindepc.com | Digitise. Analyse. Decide.`

### Header/Footer
- Minimum header: Document title + page number only
- No full-width classification banners
- Footer: Company name + URL + tagline (single line)

### Typography (Digital)
- Headings: Inter Bold, 18-24pt
- Subheadings: Inter SemiBold, 14-16pt
- Body: Inter Regular, 10-11pt
- Captions: Inter Regular, 8-9pt
- Metrics: JetBrains Mono, 12-14pt

### Color Palette
- Primary: #2A6094 (headings, accents)
- Background: #111827 (page backgrounds)
- Surface: #14171C (card backgrounds)
- Text: #D0D3D8 (body), #8A8D95 (captions)
- Accents: #06B6D4 (links), #10B981 (positive metrics)

### Tables
- Consistent column alignment (left for text, center for status, right for numbers)
- Alternating row shading (or minimal borders)
- Header row: bold, primary color accent

### CTA Standardization
- Every document should end with one of:
  - "Schedule a consultation → [URL]"
  - "Request a demonstration → [URL]"
  - "Download the capability statement → [URL]"
- Never more than one CTA per document

---

## Closing Summary

The portfolio documents demonstrate exceptional domain expertise and real-world EPC project experience. The core content is strong — the issues are primarily presentation, consistency, and the accidental inclusion of internal production artifacts in client-facing materials.

The highest-impact changes are:
1. **URL replacement** (inframind-ai-website.vercel.app → production domain)
2. **Remove internal artifacts** (QA scores, change logs, concept labels, demo scripts)
3. **Rebuild the delay analysis brochure** (doesn't exist as a client document yet)
4. **Remove confidential markings** (enables frictionless sharing)
5. **Add visuals** (diagrams, screenshots, architecture graphics)

After these changes, the document portfolio will present as polished, consistent, and professionally authored — matching the executive-quality positioning of the website.
