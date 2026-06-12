<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:session-summary -->
## Session: Public Knowledge Library Release v1.0

### Completed
- **Phase 1** — PUBLIC_DOWNLOAD_LIBRARY.md: Scanned all 48 files in public/downloads/; classified as PUBLIC (2), PRIVATE (39), INTERNAL (7)
- **Phase 2** — Created 2 approved public PDFs: Capability Statement (Executive Edition) + High-Speed Rail Operational Intelligence Case Study (Public Edition); fully anonymised, third-person, no absolute claims
- **Phase 3** — Updated download CTA mapping: replaced boolean flag with DOWNLOAD_ALLOWLIST in config; DownloadCard and ResourceCard now check allowlist; only 2 approved fileUrls trigger downloads
- **Phase 4** — Professional filenames: `InfraMind-EPC-Capability-Statement.pdf`, `InfraMind-EPC-High-Speed-Rail-Operational-Intelligence-Case-Study.pdf`
- **Phase 5** — Build verified: 0 TS errors, 0 lint errors, 33/33 pages generated
- **Phase 6** — Modal messaging updated; all 19 non-approved CTAs show "expanding our public knowledge library" modal
- **Phase 7** — Quality check: both PDFs verified (200 OK, correct MIME, correct size)
- **Phase 8** — Deployed to Vercel Production: `www.inframindepc.com`; all download links tested
- **Phase 9** — Reports generated: PUBLIC_LIBRARY_RELEASE_REPORT.md, DOWNLOAD_MAPPING_REPORT.md, PRODUCTION_DOWNLOAD_VALIDATION.md
- **Phase 10** — Git committed and pushed

### Key Technical Changes
- `src/lib/config.ts`: Replaced `DOCUMENT_DOWNLOADS_ENABLED: false` with `DOWNLOAD_ALLOWLIST` + `isDownloadAllowed()`
- `DownloadCard.tsx`: Allowlist check instead of single flag
- `ResourceCard.tsx`: Allowlist check instead of single flag
- `DocumentUnavailableModal.tsx`: Updated messaging
- 3 page files updated with new download fileUrl paths
- 7 intermediate/duplicate files cleaned up from public/downloads/

### Verification
- Capability Statement PDF: `www.inframindepc.com/downloads/InfraMind-EPC-Capability-Statement.pdf` → **200 OK, 138 KB, application/pdf**
- Case Study PDF: `www.inframindepc.com/downloads/InfraMind-EPC-High-Speed-Rail-Operational-Intelligence-Case-Study.pdf` → **200 OK, 125 KB, application/pdf**
- Non-approved doc → **404** (correctly blocked)
- All 19 non-allowlisted CTAs → modal displayed
<!-- END:session-summary -->
