# Brand Migration Phase 1 Report: InfraMind AI → InfraMind EPC

## Overview
This report outlines the proposed changes for Phase 1 of the brand migration from **InfraMind AI** to **InfraMind EPC**. The scope is limited to public-facing pages, download assets, and branding components as per the instruction.

## 1. Global Metadata & Identity
| File Path | Original Text | Proposed Text |
|-----------|---------------|---------------|
| `src/app/layout.tsx` | `InfraMind AI — Operational Intelligence...` | `InfraMind EPC — Operational Intelligence...` |
| `src/app/layout.tsx` | `template: "%s — InfraMind AI"` | `template: "%s — InfraMind EPC"` |
| `src/app/layout.tsx` | `siteName: "InfraMind AI"` | `siteName: "InfraMind EPC"` |
| `public/site.webmanifest` | `"name": "InfraMind AI"` | `"name": "InfraMind EPC"` |

## 2. Branding Components (Logo)
| File Path | Change Description |
|-----------|--------------------|
| `src/components/branding/InfraMindLogo.tsx` | Change hardcoded "AI" text to "EPC" in `stacked` and `horizontal` variants. |
| `public/logo-primary.svg` | Change `<text>` element containing "AI" to "EPC". |
| `public/logo-stacked.svg` | Change `<text>` element containing "AI" to "EPC". |
| `public/og-image.svg` | Change `<text>` element containing "AI" to "EPC" in the wordmark section. |

## 3. Core Pages
| Page | File Path | Specific Changes |
|------|-----------|------------------|
| **Homepage** | `src/app/page.tsx` | Update "Why InfraMind AI" section title to "Why InfraMind EPC". |
| **About** | `src/app/about/page.tsx` | Update founder mission and "Founded InfraMind AI" timeline entry to "InfraMind EPC". |
| **Capability Statement** | `src/app/capability-statement/page.tsx` | Update titles, "InfraMind AI" cards, and download labels. |
| **Advisory Suite** | `src/app/advisory-suite/page.tsx` | Update page title metadata and "Why InfraMind AI" section. |

## 4. Services & Commercial Brochures
| File Path | Original Text | Proposed Text |
|-----------|---------------|---------------|
| `src/app/services/contracts-claims/page.tsx` | `title: "Contracts & Claims Advisory — InfraMind AI"` | `title: "Contracts & Claims Advisory — InfraMind EPC"` |
| `src/app/automations/fidic-claims-intelligence-suite/page.tsx` | `title: "... Suite — InfraMind AI"` | `title: "... Suite — InfraMind EPC"` |
| `src/app/automations/fidic-notice-monitor/page.tsx` | `title: "FIDIC Notice Monitor — InfraMind AI"` | `title: "FIDIC Notice Monitor — InfraMind EPC"` |
| `src/app/automations/unifier-sync/page.tsx` | `title: "Unifier Sync — InfraMind AI"` | `title: "Unifier Sync — InfraMind EPC"` |

## 5. Download Assets & Generation Scripts
| File Path | Change Description |
|-----------|--------------------|
| `deployment/generate-all-downloads.js` | Update titles in `filesToGenerate` array (e.g., "InfraMind AI — Capability Statement" → "InfraMind EPC — Capability Statement"). |
| `deployment/generate-deliverables.js` | Update `pptx.author`, `pptx.company`, and hardcoded console logs. |
| `deployment/CAPABILITY_STATEMENT_FINAL.md` | Update all "InfraMind AI" occurrences in the document body. |
| `deployment/assets/*.svg` | Update "AI" text to "EPC" in career timeline, ecosystem, and architecture diagrams. |

## 6. Communication & Forms
| File Path | Change Description |
|-----------|--------------------|
| `src/app/api/contact/route.ts` | Update `from` name and email body sign-off. |
| `src/app/api/lead/route.ts` | Update `from` name and email body text. |
| `src/components/layout/Footer.tsx` | Update copyright text: `© 2026 InfraMind EPC`. |
| `src/components/composites/LeadCaptureForm.tsx` | Update consent text to mention "InfraMind EPC". |

## 7. Exclusions (Preserved Items)
- **Historical Reports:** `deployment/*_REPORT.md` and `baseline-audit/*` remain unchanged.
- **URLs:** All `https://inframind.ai` links and routes remain unchanged.
- **Identifiers:** Internal code variables and file paths remain unchanged.

---
**Status:** Ready for implementation. Stop and wait for approval.
