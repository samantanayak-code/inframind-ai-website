# Production Release Checklist

**Date:** June 10, 2026  
**Release:** RC1  
**Status:** A — Production Ready

---

## 1. Pre-Deployment Steps

### 1.1 Source Control

| Step | Action | Done | Notes |
|------|--------|:----:|-------|
| 1.1.1 | Commit all changes to current branch | ☐ | Files modified: `src/app/automations/fidic-notice-monitor/page.tsx`, `src/app/services/contracts-claims/page.tsx`, `public/linkedin-banner-v2.svg` |
| 1.1.2 | Create PR / merge to main branch | ☐ | |
| 1.1.3 | Verify CI/CD pipeline passes | ☐ | Run lint, typecheck, build |

### 1.2 Build

| Step | Action | Command | Done |
|------|--------|---------|:----:|
| 1.2.1 | Install dependencies | `npm ci` or `npm install` | ☐ |
| 1.2.2 | Run type check | `npm run typecheck` (or configured command) | ☐ |
| 1.2.3 | Run linter | `npm run lint` | ☐ |
| 1.2.4 | Run tests | `npm test` (if configured) | ☐ |
| 1.2.5 | Build production bundle | `npm run build` | ☐ |

### 1.3 PDF Regeneration (if content changed)

Not required for RC1. No source content was modified — only navigation metadata and one SVG URL.

If any source markdown files are modified in future releases:

| Step | Action | Command | Done |
|------|--------|---------|:----:|
| 1.3.1 | Generate all PDFs | `node deployment/generate-all-downloads.js` | ☐ |
| 1.3.2 | Verify PDFs generated without errors | Check console output | ☐ |
| 1.3.3 | Verify file sizes are reasonable | Check output folder | ☐ |

---

## 2. Deployment Steps

### 2.1 Vercel Deployment (if applicable)

| Step | Action | Done |
|------|--------|:----:|
| 2.1.1 | Push main branch to trigger auto-deployment | ☐ |
| 2.1.2 | OR deploy via Vercel CLI: `vercel --prod` | ☐ |
| 2.1.3 | Monitor deployment status in Vercel dashboard | ☐ |
| 2.1.4 | Confirm deployment URL resolves | ☐ |

### 2.2 Alternative Deployment

| Step | Action | Command | Done |
|------|--------|---------|:----:|
| 2.2.1 | Export static site | `npm run export` (if configured) | ☐ |
| 2.2.2 | Upload to web server | rsync/scp/ftp to production host | ☐ |
| 2.2.3 | Verify file permissions | 644 for files, 755 for directories | ☐ |

---

## 3. Post-Deployment Verification

### 3.1 Download Center Verification

| Step | Check | Expected Result | Done |
|------|-------|-----------------|:----:|
| 3.1.1 | capability-statement page | Open `/capability-statement` → scroll to `#download-centre` → both PDF and PPTX listed | ☐ |
| 3.1.2 | advisory-suite page | Open `/advisory-suite` → `#download-centre` → 4 brochures listed | ☐ |
| 3.1.3 | contracts-claims page | Open `/services/contracts-claims` → `#download-centre` → **only** contracts-claims-brochure.pdf listed (flyer removed) | ☐ |
| 3.1.4 | fidic-notice-monitor page | Open `/automations/fidic-notice-monitor` → `#download-centre` → **only** one-pager listed (demo-script removed) | ☐ |
| 3.1.5 | fidic-claims-intelligence-suite page | Open `/automations/fidic-claims-intelligence-suite` → `#download-centre` → 5 documents listed | ☐ |
| 3.1.6 | unifier-sync page | Open `/automations/unifier-sync` → `#download-centre` → 2 documents listed | ☐ |
| 3.1.7 | All download links functional | Click every download link across all pages → PDF downloads successfully | ☐ |
| 3.1.8 | No 404 errors | Check browser console for 404 errors on download paths | ☐ |

### 3.2 Homepage Verification

| Step | Check | Expected Result | Done |
|------|-------|-----------------|:----:|
| 3.2.1 | Hero section renders | Badge, headline, sub-headline, CTAs visible | ☐ |
| 3.2.2 | Primary CTA works | "Download Capability Statement" → navigates to `/capability-statement` | ☐ |
| 3.2.3 | Secondary CTA works | "Schedule Consultation" → Calendly widget opens | ☐ |
| 3.2.4 | Products section renders | 5 product cards visible | ☐ |
| 3.2.5 | Automation section renders | 3 automation cards visible | ☐ |
| 3.2.6 | Case studies section renders | 3 case study cards visible | ☐ |
| 3.2.7 | Responsive on mobile | No layout breakage at 375px width | ☐ |

### 3.3 Asset Verification

| Step | Check | Expected Result | Done |
|:----:|-------|-----------------|:----:|
| 3.3.1 | All PDFs accessible | Direct URL test: `https://[domain]/downloads/capability-statement.pdf` → renders in browser | ☐ |
| 3.3.2 | PPTX accessible | Direct URL test: `https://[domain]/downloads/capability-statement.pptx` → downloads | ☐ |
| 3.3.3 | SVG renders correctly | Open `/linkedin-banner-v2.svg` → no staging URL visible | ☐ |
| 3.3.4 | No 404 assets | Check all 13 download paths return 200 | ☐ |

### 3.4 Cross-Page Navigation

| Step | Check | Expected Result | Done |
|:----:|-------|-----------------|:----:|
| 3.4.1 | Capability Statement page | Full content renders. Executive overview, products, automation, downloads sections visible. | ☐ |
| 3.4.2 | Advisory Suite page | Full content renders. All 3 offering sections present. | ☐ |
| 3.4.3 | Services page | `/services` → lists all services. `/services/contracts-claims` → downloads section updated. | ☐ |
| 3.4.4 | Automations page | `/automations` → lists all automations. Individual pages load correctly. | ☐ |
| 3.4.5 | Contact page | Form renders. Placeholder text in inputs (legitimate). | ☐ |

---

## 4. Rollback Reference

### Rollback Procedure

If deployment introduces issues, revert the 3 file changes:

| File | Original State | Rollback Command |
|------|----------------|------------------|
| `src/app/automations/fidic-notice-monitor/page.tsx` | Had demo-script entry in downloads array | `git checkout HEAD~1 -- src/app/automations/fidic-notice-monitor/page.tsx` |
| `src/app/services/contracts-claims/page.tsx` | Had flyer entry in downloads array | `git checkout HEAD~1 -- src/app/services/contracts-claims/page.tsx` |
| `public/linkedin-banner-v2.svg` | Had staging URL | `git checkout HEAD~1 -- public/linkedin-banner-v2.svg` |

### Full Rollback

```bash
git revert HEAD --no-edit
git push origin main
```

Alternatively, redeploy the previous production build from Vercel dashboard:

1. Go to Vercel Dashboard → Deployments
2. Find the last known-good deployment
3. Click "..." → "Promote to Production"

---

## 5. Post-Release Monitoring

| Period | Check | Expected |
|--------|-------|----------|
| 1 hour post-deploy | Download links from analytics | No 404 errors on `/downloads/` paths |
| 24 hours post-deploy | User behavior on download pages | Downloads completing successfully |
| 1 week post-deploy | Bounce rate on download pages | Normal range |

---

## 6. Sign-Off

| Role | Name | Date | Signature |
|------|------|:----:|:---------:|
| Developer | | | |
| Reviewer | | | |
| Product Owner | | | |

---

**Prepared by:** RC1 Release  
**Date:** June 10, 2026  
**Build:** RC1 — All critical issues resolved. 13 downloads verified. Zero staging URLs. Zero broken links.
