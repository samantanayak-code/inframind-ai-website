# INFRAMIND EPC — DOWNLOAD MAPPING REPORT

## Website CTA Mapping — Public Knowledge Library v1.0

**Date:** 12 June 2026

---

## All Download CTAs Across the Website

| # | Page | Component | Document | fileUrl/href | Allowlisted? | Behavior |
|:--|------|-----------|----------|-------------|:------------:|----------|
| 1 | `/capability-statement` | DownloadCard | Capability Statement PDF | `/downloads/InfraMind-EPC-Capability-Statement.pdf` | ✅ YES | **DOWNLOAD** |
| 2 | `/capability-statement` | DownloadCard | Capability Statement PPT | `/downloads/capability-statement.pptx` | ❌ NO | Modal |
| 3 | `/resources` | ResourceCard | InfraMind Capability Statement | `/downloads/InfraMind-EPC-Capability-Statement.pdf` | ✅ YES | **DOWNLOAD** |
| 4 | `/resources` | ResourceCard | FIDIC Notice Monitor Spec | `/downloads/fidic-notice-monitor-one-pager.pdf` | ❌ NO | Modal |
| 5 | `/resources` | ResourceCard | Advisory Suite Overview | `/downloads/advisory-suite-overview.pdf` | ❌ NO | Modal |
| 6 | `/resources` | ResourceCard | Unifier Sync Case Study | `/downloads/InfraMind-EPC-High-Speed-Rail-Operational-Intelligence-Case-Study.pdf` | ✅ YES | **DOWNLOAD** |
| 7 | `/resources` | ResourceCard | Claim Narrative Drafter Spec | `/downloads/claim-narrative-drafter-spec.pdf` | ❌ NO | Modal |
| 8 | `/resources` | ResourceCard | Delay Analysis & EOT Brochure | `/downloads/delay-analysis-eot-brochure.pdf` | ❌ NO | Modal |
| 9 | `/advisory-suite` | DownloadCard | Advisory Suite Overview | `/downloads/advisory-suite-overview.pdf` | ❌ NO | Modal |
| 10 | `/advisory-suite` | DownloadCard | Planning & Scheduling Brochure | `/downloads/planning-scheduling-brochure.pdf` | ❌ NO | Modal |
| 11 | `/advisory-suite` | DownloadCard | Delay Analysis & EOT Brochure | `/downloads/delay-analysis-eot-brochure.pdf` | ❌ NO | Modal |
| 12 | `/advisory-suite` | DownloadCard | Contracts & Claims Brochure | `/downloads/contracts-claims-brochure.pdf` | ❌ NO | Modal |
| 13 | `/services/contracts-claims` | DownloadCard | Contracts & Claims Brochure | `/downloads/contracts-claims-brochure.pdf` | ❌ NO | Modal |
| 14 | `/automations/fidic-claims-intelligence-suite` | DownloadCard | FIDIC Claims Intelligence Suite Overview | `/downloads/fidic-claims-intelligence-suite-overview.pdf` | ❌ NO | Modal |
| 15 | `/automations/fidic-claims-intelligence-suite` | DownloadCard | FIDIC Notice Monitor One-Pager | `/downloads/fidic-notice-monitor-one-pager.pdf` | ❌ NO | Modal |
| 16 | `/automations/fidic-claims-intelligence-suite` | DownloadCard | EOT Event Log Compiler Spec | `/downloads/eot-event-log-compiler-spec.pdf` | ❌ NO | Modal |
| 17 | `/automations/fidic-claims-intelligence-suite` | DownloadCard | Claim Narrative Drafter Spec | `/downloads/claim-narrative-drafter-spec.pdf` | ❌ NO | Modal |
| 18 | `/automations/fidic-claims-intelligence-suite` | DownloadCard | Letter Drafter EPC Spec | `/downloads/letter-drafter-epc-spec.pdf` | ❌ NO | Modal |
| 19 | `/automations/fidic-notice-monitor` | DownloadCard | FIDIC Notice Monitor One-Pager | `/downloads/fidic-notice-monitor-one-pager.pdf` | ❌ NO | Modal |
| 20 | `/automations/unifier-sync` | DownloadCard | Unifier Sync One-Pager | `/downloads/unifier-sync-one-pager.pdf` | ❌ NO | Modal |
| 21 | `/automations/unifier-sync` | DownloadCard | Unifier Sync Case Study | `/downloads/InfraMind-EPC-High-Speed-Rail-Operational-Intelligence-Case-Study.pdf` | ✅ YES | **DOWNLOAD** |
| 22 | `/` (homepage) | CTASection link | "Download Capability Statement" | `/capability-statement` (page link) | — | Navigates to page, then #1 above |

## Summary

| Category | Count |
|----------|:-----:|
| Total download CTAs on website | 22 |
| Allowlisted (downloadable) | 3 (2 unique docs × multiple pages) |
| Non-allowlisted (modal displayed) | 19 |
| **PASS / FAIL** | **PASS** ✅ |

## Allowlist Configuration

```typescript
export const DOWNLOAD_ALLOWLIST: readonly string[] = [
  '/downloads/InfraMind-EPC-Capability-Statement.pdf',
  '/downloads/InfraMind-EPC-High-Speed-Rail-Operational-Intelligence-Case-Study.pdf',
];
```

## Approved Documents — File Details

| Document | Path on Disk | Size | MIME Type |
|----------|-------------|:----:|:---------:|
| Capability Statement | `public/downloads/InfraMind-EPC-Capability-Statement.pdf` | 138 KB | application/pdf |
| Case Study | `public/downloads/InfraMind-EPC-High-Speed-Rail-Operational-Intelligence-Case-Study.pdf` | 125 KB | application/pdf |

## Non-Approved Documents — Behavior

All 19 non-allowlisted CTAs trigger the `DocumentUnavailableModal` with message:
> "We are currently expanding our public knowledge library. Additional brochures, technical papers and product guides will be published soon."

This applies to all brochures, product sheets, fact sheets, whitepapers, proposal samples, and internal documents.
