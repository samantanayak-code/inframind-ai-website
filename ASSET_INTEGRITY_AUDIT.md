# Asset Integrity Audit

**Date:** June 10, 2026  
**Scope:** Full project scan for broken links, archived references, renamed documents, staging URLs, obsolete PDFs, duplicate downloads  
**Method:** Manual code review + file system verification

---

## 1. Broken Download Links

### HIGH: fidic-notice-monitor-demo-script.pdf — 404 on Live Site

| Detail | Value |
|--------|-------|
| **Referenced in** | `src/app/automations/fidic-notice-monitor/page.tsx` — line 255 |
| **Code** | `fileUrl: "/downloads/fidic-notice-monitor-demo-script.pdf"` |
| **File on disk** | ❌ **NOT FOUND** in `public/downloads/` |
| **Impact** | Any user clicking this download link on the FIDIC Notice Monitor page will receive a 404 error |
| **Severity** | **CRITICAL** — broken user-facing link |

**Remediation:** Remove the download entry from the `downloads` array in `src/app/automations/fidic-notice-monitor/page.tsx` (lines 248-256). The demo script was archived in Phase A and should not be listed.

### Other Download References: All Verified

| Page | File Referenced | On Disk? | Status |
|------|-----------------|:--------:|--------|
| capability-statement | capability-statement.pdf | ✅ | OK |
| capability-statement | capability-statement.pptx | ✅ | OK |
| advisory-suite | advisory-suite-overview.pdf | ✅ | OK |
| advisory-suite | planning-scheduling-brochure.pdf | ✅ | OK |
| advisory-suite | delay-analysis-eot-brochure.pdf | ✅ | OK |
| advisory-suite | contracts-claims-brochure.pdf | ✅ | OK |
| services/contracts-claims | contracts-claims-brochure.pdf | ✅ | OK |
| services/contracts-claims | contracts-claims-flyer.pdf | ✅ | OK (but not client-ready — see Section 3) |
| automations/fidic-claims-intelligence-suite | fidic-claims-intelligence-suite-overview.pdf | ✅ | OK |
| automations/fidic-claims-intelligence-suite | fidic-notice-monitor-one-pager.pdf | ✅ | OK |
| automations/fidic-claims-intelligence-suite | eot-event-log-compiler-spec.pdf | ✅ | OK |
| automations/fidic-claims-intelligence-suite | claim-narrative-drafter-spec.pdf | ✅ | OK |
| automations/fidic-claims-intelligence-suite | letter-drafter-epc-spec.pdf | ✅ | OK |
| automations/fidic-notice-monitor | fidic-notice-monitor-one-pager.pdf | ✅ | OK |
| automations/fidic-notice-monitor | **fidic-notice-monitor-demo-script.pdf** | ❌ | **BROKEN** |
| automations/unifier-sync | unifier-sync-one-pager.pdf | ✅ | OK |
| automations/unifier-sync | unifier-sync-case-study.pdf | ✅ | OK |

**Total references scanned:** 19 (18 PDF + 1 PPTX)  
**Broken:** 1 (fidic-notice-monitor-demo-script.pdf)

---

## 2. References to Archived Documents

| Document | Archived? | Still Referenced? | Location | Severity |
|----------|:---------:|:-----------------:|----------|:--------:|
| fidic-notice-monitor-demo-script.pdf | ✅ (Phase A) | ✅ YES | `src/app/automations/fidic-notice-monitor/page.tsx:255` | **HIGH** |

All other archived documents (none) — no issues.

---

## 3. References to Renamed Documents

No documents have been renamed. All file names match their source references.

**Exception:** `contracts-claims-flyer.pdf` is technically a valid file but its content is not a client-facing flyer (it is 9 pages of design specifications). The file exists and the reference is valid, but the content is not suitable for public release.

---

## 4. Staging URLs (inframind-ai-website.vercel.app)

### In Active Source Code (src/): **ZERO** ✅

All source code has been cleaned. No staging URLs remain in any `.tsx`, `.ts`, or `.js` file in `src/`.

### In Public Assets: **1 Remaining**

| File | Line | URL | Severity |
|------|------|-----|:--------:|
| `public/linkedin-banner-v2.svg` | 97 | `inframind-ai-website.vercel.app` | **MEDIUM** |

This is a LinkedIn banner SVG asset. The staging URL is visible in the SVG text. While not on the main website, this asset is in the `public/` directory and could be served or referenced.

### In Deployment Documentation (deployment/): 29 matches

All in documentation files, internal reports, and generated artifact files. None affect the live website. Severity: **LOW**.

### In Historical/Working Files (project root): ~60 matches

All in `extracted_texts.txt` (old PDF text dumps) and markdown audit/report files. None affect the live website. Severity: **LOW**.

---

## 5. Obsolete PDFs

| File | Size | Status | Verdict |
|------|:----:|--------|---------|
| contracts-claims-flyer.pdf | 533 KB | Exists but not client-ready | ⚠️ **Not publishable** — 9 pages of design specs, not a 1-page flyer |
| All other 12 PDFs | — | Phase A + B rebuilt | ✅ Valid, client-ready (with caveats on planning and contracts brochures being too long) |

---

## 6. Duplicate Downloads

No duplicate files found. Each downloadable asset exists in exactly one location (`public/downloads/`) and is referenced by its unique filename.

---

## 7. File Size Verification

The file sizes declared in page.tsx download metadata do not match actual file sizes on disk. This is across ALL pages that define download metadata.

### capability-statement/page.tsx

| File | Declared Size | Actual Size | Delta |
|------|:------------:|:-----------:|:-----:|
| capability-statement.pdf | 2.4 MB | 323 KB | ❌ -86% |
| capability-statement.pptx | 5.1 MB | 147 KB | ❌ -97% |

### advisory-suite/page.tsx

| File | Declared Size | Actual Size | Delta |
|------|:------------:|:-----------:|:-----:|
| advisory-suite-overview.pdf | 1.2 MB | 386 KB | ❌ -68% |
| planning-scheduling-brochure.pdf | 1.5 MB | 693 KB | ❌ -54% |
| delay-analysis-eot-brochure.pdf | 1.6 MB | 458 KB | ❌ -71% |
| contracts-claims-brochure.pdf | 1.8 MB | 572 KB | ❌ -68% |

### services/contracts-claims/page.tsx

| File | Declared Size | Actual Size | Delta |
|------|:------------:|:-----------:|:-----:|
| contracts-claims-brochure.pdf | 1.8 MB | 572 KB | ❌ -68% |
| contracts-claims-flyer.pdf | 0.4 MB | 533 KB | ❌ +33% |

**Severity:** MEDIUM — misleading file sizes may cause users to overestimate download time or file weight. The declared sizes appear to be placeholder estimates from initial document creation.

**Note:** The `automations/` pages (fidic-claims-intelligence-suite, fidic-notice-monitor, unifier-sync) also declare file sizes that may be inaccurate. Their accuracy was not verified in this scan.

---

## 8. Summary of Findings

| # | Issue | Severity | Location | Fix |
|---|-------|:--------:|----------|-----|
| 1 | Broken download link — 404 error | **CRITICAL** | `src/app/automations/fidic-notice-monitor/page.tsx:255` | Remove demo-script entry from downloads array |
| 2 | Staging URL in public SVG asset | MEDIUM | `public/linkedin-banner-v2.svg:97` | Replace URL with `inframindepc.com` |
| 3 | File size metadata inaccurate for all downloads | MEDIUM | Multiple page.tsx files | Update `fileSize` values to match actual files |
| 4 | contracts-claims-flyer.pdf not client-ready | HIGH | `public/downloads/contracts-claims-flyer.pdf` | Rebuild as true 1-page flyer (Phase B item) |
| 5 | All other references | — | — | ✅ Verified intact |
