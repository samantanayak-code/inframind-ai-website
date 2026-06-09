# Brand Migration Backup Report: InfraMind AI → InfraMind EPC

## Phase 1 Modification List

| File Path | Original Brand | Targeted Change | Category |
|-----------|----------------|-----------------|----------|
| `src/app/layout.tsx` | InfraMind AI | InfraMind EPC | Identity/Metadata |
| `public/site.webmanifest` | InfraMind AI | InfraMind EPC | Identity/Webmanifest |
| `src/components/branding/InfraMindLogo.tsx` | InfraMind AI | InfraMind EPC | Branding/Logo Component |
| `public/logo-primary.svg` | AI (text) | EPC (text) | Branding/SVG Logo |
| `public/logo-stacked.svg` | AI (text) | EPC (text) | Branding/SVG Logo |
| `public/og-image.svg` | AI (text) | EPC (text) | Branding/OG Image |
| `src/app/page.tsx` | InfraMind AI | InfraMind EPC | Page/Homepage |
| `src/app/about/page.tsx` | InfraMind AI | InfraMind EPC | Page/About |
| `src/app/capability-statement/page.tsx` | InfraMind AI | InfraMind EPC | Page/Capability Statement |
| `src/app/advisory-suite/page.tsx` | InfraMind AI | InfraMind EPC | Page/Advisory Suite |
| `src/app/services/contracts-claims/page.tsx` | InfraMind AI | InfraMind EPC | Page/Service |
| `src/app/automations/fidic-claims-intelligence-suite/page.tsx` | InfraMind AI | InfraMind EPC | Page/Automation |
| `src/app/automations/fidic-notice-monitor/page.tsx` | InfraMind AI | InfraMind EPC | Page/Automation |
| `src/app/automations/unifier-sync/page.tsx` | InfraMind AI | InfraMind EPC | Page/Automation |
| `src/components/layout/Footer.tsx` | InfraMind AI | InfraMind EPC | Footer Branding |
| `src/components/composites/LeadCaptureForm.tsx` | InfraMind AI | InfraMind EPC | Form Consent |
| `deployment/generate-all-downloads.js` | InfraMind AI | InfraMind EPC | Asset Generation |
| `deployment/generate-deliverables.js` | InfraMind AI | InfraMind EPC | Asset Generation |
| `deployment/CAPABILITY_STATEMENT_FINAL.md` | InfraMind AI | InfraMind EPC | Asset Source (MD) |
| `deployment/assets/career-timeline.svg` | InfraMind AI | InfraMind EPC | Branding/SVG Diagram |
| `deployment/assets/four-layer-architecture.svg` | InfraMind AI | InfraMind EPC | Branding/SVG Diagram |
| `deployment/assets/inframind-ecosystem.svg` | InfraMind AI | InfraMind EPC | Branding/SVG Diagram |
| `deployment/assets/ncr-workflow.svg` | InfraMind AI | InfraMind EPC | Branding/SVG Diagram |
| `deployment/assets/product-ecosystem-flow.svg` | InfraMind AI | InfraMind EPC | Branding/SVG Diagram |
| `deployment/assets/six-module-ncr-architecture.svg` | InfraMind AI | InfraMind EPC | Branding/SVG Diagram |

## Rollback List

To revert these changes, perform a global search and replace of "InfraMind EPC" with "InfraMind AI" in the files listed above ONLY.

**Warning:** Do NOT perform a global replacement in the entire project, as it would corrupt history and URLs.
