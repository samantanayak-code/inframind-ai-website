# Publication Readiness Checklist

**Date:** June 10, 2026  
**Scope:** All PDFs accessible, no archived files exposed, no broken references, no placeholder content, no staging links, no orphaned assets  
**Status Key:** ✅ Pass · ⚠️ Warning · ❌ Fail · ➖ Not Applicable

---

## 1. PDF Accessibility

| Check | Status | Detail |
|-------|:------:|--------|
| All 13 PDFs exist in `public/downloads/` | ✅ PASS | 13 PDFs verified on disk |
| PPTX exists in `public/downloads/` | ✅ PASS | 1 PPTX verified on disk |
| All PDFs open without error | ✅ PASS | Validated via pdfinfo (all have correct page counts) |
| PDFs render with correct content | ✅ PASS | Verified via text extraction (key sections present) |
| No password-protected PDFs | ✅ PASS | None |
| No corrupted PDFs | ✅ PASS | All generated successfully via pipeline |

---

## 2. Archived Files Exposure

| Check | Status | Detail |
|-------|:------:|--------|
| fidic-notice-monitor-demo-script.pdf removed from downloads folder | ✅ PASS | File was moved to BACKUP_BEFORE_RESTRUCTURE/ in Phase A |
| No other archived files in public downloads | ✅ PASS | Only 14 current assets present |
| **No archived files referenced from website** | ❌ **FAIL** | **fidic-notice-monitor-demo-script.pdf still referenced in `src/app/automations/fidic-notice-monitor/page.tsx:255`** |

---

## 3. Broken References

| Check | Status | Detail |
|-------|:------:|--------|
| No 404 download links | ❌ **FAIL** | `fidic-notice-monitor-demo-script.pdf` will 404 |
| All internal page links resolve | ✅ PASS | All `href` targets verified |
| All anchor links resolve (#download-centre) | ✅ PASS | All pages with `#download-centre` have a matching ID'd section |
| All Calendly links functional | ⚠️ WARNING | Cannot verify without runtime. Code structure is correct. |

---

## 4. Placeholder Content

| Check | Status | Detail |
|-------|:------:|--------|
| No "TODO" markers in src/ | ✅ PASS | Zero matches |
| No "Coming Soon" in production content | ✅ PASS | Only in `/automations` listing page (intended — shows roadmap) |
| No "Lorem ipsum" in src/ | ✅ PASS | Zero matches |
| No placeholder images | ⚠️ WARNING | Some product screenshots may be development images (`/screenshots/` paths). Verify manually. |
| No "TBD" or "TBC" in src/ | ✅ PASS | Zero matches |

---

## 5. Staging URLs

| Check | Status | Detail |
|-------|:------:|--------|
| No `vercel.app` URLs in src/ | ✅ PASS | Zero matches in TypeScript/TSX source |
| No `vercel.app` URLs in public/ assets | ⚠️ **WARNING** | **1 match: `public/linkedin-banner-v2.svg:97`** |
| No `vercel.app` URLs in PDF download content | ✅ PASS | Verified via PDF text extraction |
| No `vercel.app` URLs in page meta tags | ✅ PASS | All meta tags use production domain |

---

## 6. Orphaned Assets

| Check | Status | Detail |
|-------|:------:|--------|
| All PDFs are referenced from at least one page | ✅ PASS | Every PDF appears in at least one page.tsx |
| No PDFs in downloads folder with no page reference | ✅ PASS | 14 files, 14 references |
| No duplicate files | ✅ PASS | No duplicate filenames |
| No source markdown files without a generation entry | ✅ PASS | All FINAL_RELEASE files have a matching entry in generate-all-downloads.js |

---

## 7. Generation Pipeline

| Check | Status | Detail |
|-------|:------:|--------|
| `generate-all-downloads.js` runs without errors | ✅ PASS | Verified — all 13 PDFs + 1 PPTX generated |
| All source files exist | ✅ PASS | All 12 source files verified in PORTFOLIO/deployment/ + 1 in website/deployment/ |
| No files generate with 0 bytes | ✅ PASS | All files have non-zero size |
| PPTX generates without errors | ✅ PASS | Verified |

---

## 8. Legal & Compliance

| Check | Status | Detail |
|-------|:------:|--------|
| All documents have © notice | ✅ PASS | Every PDF footer reads "© 2026 InfraMind EPC — All rights reserved" |
| No "Confidential" markings on documents | ✅ PASS | Phase A removed all confidential banners |
| No "For Internal Use Only" labels | ✅ PASS | None remain |
| No exposed pricing in client-facing docs | ⚠️ WARNING | **planning-scheduling-brochure.pdf and contracts-claims-brochure.pdf** may still contain pricing tables (not verified — Phase B not yet applied to these) |

---

## 9. Document Quality

| Check | Status | Detail |
|-------|:------:|--------|
| capability-statement.pdf client-ready | ✅ PASS | Phase A cleaned. Content strong. |
| advisory-suite-overview.pdf client-ready | ✅ PASS | Phase B1 rebuilt. |
| delay-analysis-eot-brochure.pdf client-ready | ✅ PASS | Phase B Pilot rebuilt. |
| unifier-sync-case-study.pdf client-ready | ✅ PASS | Phase B1 polished. |
| planning-scheduling-brochure.pdf client-ready? | ⚠️ WARNING | 19 pages — too long but functional |
| contracts-claims-brochure.pdf client-ready? | ⚠️ WARNING | 14 pages — too long but functional |
| contracts-claims-flyer.pdf client-ready? | ❌ **FAIL** | 9 pages of design specs. Not a real flyer. |
| 3 concept specs client-ready? | ⚠️ WARNING | "CONCEPT READY" labels may concern clients. Functional but needs relabel. |
| 2 one-pagers client-ready? | ⚠️ WARNING | Render as ~2 pages each due to header/footer spacing. Functional. |

---

## 10. Summary

| Category | ✅ Pass | ⚠️ Warning | ❌ Fail | Score |
|----------|:------:|:----------:|:------:|:-----:|
| PDF Accessibility | 6 | 0 | 0 | 100% |
| Archived Files | 1 | 0 | **1** | **50%** |
| Broken References | 3 | 1 | **1** | **60%** |
| Placeholder Content | 4 | 1 | 0 | 80% |
| Staging URLs | 3 | 1 | 0 | 75% |
| Orphaned Assets | 4 | 0 | 0 | 100% |
| Generation Pipeline | 4 | 0 | 0 | 100% |
| Legal & Compliance | 3 | 1 | 0 | 75% |
| Document Quality | 4 | 4 | **1** | **44%** |
| **Overall** | **32** | **8** | **3** | **74%** |

### Must Fix Before Public Release

| # | Issue | Category | Fix |
|---|-------|----------|-----|
| 1 | Broken reference to fidic-notice-monitor-demo-script.pdf | Archived Files / Broken References | Remove entry from page.tsx downloads array |
| 2 | contracts-claims-flyer.pdf not client-ready | Document Quality | Rebuild as true 1-page flyer, or remove from listing |
| 3 | Staging URL in `public/linkedin-banner-v2.svg` | Staging URLs | Replace with `inframindepc.com` |

### Should Fix Before Public Release

| # | Issue | Category | Fix |
|---|-------|----------|-----|
| 4 | File size metadata inaccurate in all page.tsx files | Accuracy | Update to actual file sizes |
| 5 | advisory-suite-overview version mismatch (code v1.0, file v2.0) | Accuracy | Update version in page.tsx |
| 6 | planning-scheduling-brochure is 19 pages (too long) | Quality | Condense (Phase B3) |
| 7 | contracts-claims-brochure is 14 pages (too long) | Quality | Condense (Phase B3) |
| 8 | 3 concept specs labeled "CONCEPT READY" | Quality | Relabel (Phase B7) |
