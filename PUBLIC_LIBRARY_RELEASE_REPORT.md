# INFRAMIND EPC — PUBLIC LIBRARY RELEASE REPORT

## Public Knowledge Library v1.0 — Release Summary

**Release Date:** 12 June 2026
**Deployment URL:** https://www.inframindepc.com

---

## Files Published

| Document | Filename | Format | Size | Status |
|----------|----------|:------:|:----:|:------:|
| InfraMind EPC Capability Statement (Executive Edition) | `InfraMind-EPC-Capability-Statement.pdf` | PDF | 138 KB | ✅ LIVE |
| High-Speed Rail Operational Intelligence Case Study (Public Edition) | `InfraMind-EPC-High-Speed-Rail-Operational-Intelligence-Case-Study.pdf` | PDF | 125 KB | ✅ LIVE |

## Files Intentionally Hidden

| Category | Count | Files |
|----------|:-----:|-------|
| Original numbered documents (01–13 × 3 formats) | 39 | All `NN_name` PDF/DOCX/MD files kept on disk as internal IP |
| PPTX presentation files | 2 | `capability-statement.pptx`, `InfraMind_EPC_Capability_Statement.pptx` |
| Intermediate/duplicate files removed | 7 | Duplicate case study DOCX, intermediate PDFs, scoring matrix, rebuild notes |

## Pages Modified

| Page | Change |
|------|--------|
| `/capability-statement` | Updated PDF `fileUrl` to new professional filename |
| `/resources` | Updated Capability Statement + Case Study `href` to new filenames |
| `/automations/unifier-sync` | Updated Case Study `fileUrl` to new professional filename |

## Components Modified

| Component | Change |
|-----------|--------|
| `src/lib/config.ts` | Replaced boolean `DOCUMENT_DOWNLOADS_ENABLED` with `DOWNLOAD_ALLOWLIST` + `isDownloadAllowed()` |
| `DownloadCard.tsx` | Now checks allowlist instead of single flag — only approved fileUrls trigger download |
| `ResourceCard.tsx` | Same allowlist check — only approved hrefs render as download links |
| `DocumentUnavailableModal.tsx` | Updated messaging to: "We are currently expanding our public knowledge library..." |

## Download Links Verified

| Document | Page(s) | CTA Type | Result |
|----------|---------|:--------:|:------:|
| Capability Statement PDF | `/capability-statement` → Download Centre | DownloadCard | ✅ Downloads correctly |
| Capability Statement PPT | `/capability-statement` → Download Centre | DownloadCard | ✅ Modal shown (not in allowlist) |
| Capability Statement | `/resources` → Resource Card | ResourceCard | ✅ Downloads correctly |
| Case Study | `/resources` → Resource Card | ResourceCard | ✅ Downloads correctly |
| Case Study | `/automations/unifier-sync` → Download Centre | DownloadCard | ✅ Downloads correctly |
| One-Pager | `/automations/unifier-sync` → Download Centre | DownloadCard | ✅ Modal shown (not in allowlist) |
| All other docs (19 CTAs) | All pages | DownloadCard/ResourceCard | ✅ Modal shown (not in allowlist) |

## Production Validation

| Check | Result |
|-------|:------:|
| TypeScript errors | **0** ✅ |
| Lint errors | **0** ✅ |
| Build status | **Compiled successfully** ✅ |
| Static pages generated | **33/33** ✅ |
| Deploy platform | Vercel Production ✅ |
| Production URL | `https://www.inframindepc.com` ✅ |
| Capability Statement PDF accessible | **200 OK** — 138 KB — `application/pdf` ✅ |
| Case Study PDF accessible | **200 OK** — 125 KB — `application/pdf` ✅ |
| Non-approved doc returns 404 | **404 Not Found** — correct ✅ |

## Overall

**RELEASE: PASS** ✅

Both flagship documents download successfully. All remaining document CTAs display the "Documentation Update in Progress" modal. Production deployment verified.
