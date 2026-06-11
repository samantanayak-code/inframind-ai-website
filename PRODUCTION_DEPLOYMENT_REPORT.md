# Production Deployment Report

**Date:** 2026-06-10
**Purpose:** Document the deployment of commit `1acebd3` to Vercel Production.

---

## 1. Deployment Summary

| Property | Value |
|----------|-------|
| **Deployed commit** | `1acebd3` |
| **Commit message** | `CTA Remediation Phase 1: fix Calendly URL, add mailto/tel links` |
| **Deployment ID** | `dpl_Emq9VkfvqaN8yXykBENNMmAXNkqi` |
| **Vercel deployment URL** | `https://inframind-ai-website-39asjbzum-samanta-nayaks-projects.vercel.app` |
| **Production URL** | `https://www.inframindepc.com` |
| **Deployment timestamp** | `2026-06-10 13:04:16 IST` |
| **Status** | ✅ `READY` |
| **Duration** | 51s |
| **Build** | ✅ Compiled successfully, 0 TypeScript errors |
| **Git push** | ✅ `origin main` updated (`daa2d2a..1acebd3`) |

---

## 2. CTA Validation — Production Site (`https://www.inframindepc.com/`)

### Calendly URL

| Check | Result | Evidence |
|-------|--------|----------|
| New URL `calendly.com/samanta-nayak/30min` | ✅ **Present** | Found at character index 77383 in production HTML |
| Old URL `calendly.com/inframind-ai/discovery` | ✅ **Absent** | 0 matches in production HTML |

### Contact Links

| Link | Occurrences | Verified |
|------|-------------|----------|
| `mailto:samanta@inframindepc.com` | 2 | ✅ Footer + Contact page |
| `tel:+917682858603` | 2 | ✅ Footer + Contact page |

---

## 3. Files Deployed

### Source changes (commit `1acebd3`)

| File | Change |
|------|--------|
| `src/components/composites/CalendlyCTA.tsx` | `inframind-ai/discovery` → `samanta-nayak/30min` |
| `src/components/layout/Footer.tsx` | Added `mailto:` + `tel:` links |
| `src/app/contact/page.tsx` | Added `mailto:` + `tel:` links + `Phone` icon |

### Reports included in commit

| File | Purpose |
|------|---------|
| `CTA_REMEDIATION_REPORT.md` | Summary of all changes |
| `CALENDLY_VALIDATION_REPORT.md` | Calendly URL trace |
| `CONTACT_LINK_VALIDATION_REPORT.md` | mailto/tel verification |
| `POST_REMEDIATION_CTA_TEST_REPORT.md` | End-to-end journey tests |

---

## 4. Build Output

- **Next.js version:** 16.2.7 (Turbopack)
- **Routes generated:** 32 (13 static, 15 SSG, 4 dynamic)
- **TypeScript:** Clean (0 errors)
- **Build time:** 30s
- **Cache:** Restored from previous deployment (build time saved)

---

## 5. Verification Steps

| Step | Action | Result |
|------|--------|--------|
| 1 | Verify git branch (`main`) and latest commit | ✅ `1acebd3` |
| 2 | Push to GitHub (`git push origin main`) | ✅ Success |
| 3 | Run `vercel deploy --prod` | ✅ Success (51s) |
| 4 | Alias production URL | ✅ `https://www.inframindepc.com` |
| 5 | Fetch production HTML | ✅ Received |
| 6 | Search for `calendly.com/samanta-nayak/30min` | ✅ Found |
| 7 | Search for `calendly.com/inframind-ai/discovery` | ✅ Not found |
| 8 | Search for `mailto:` links | ✅ Found (2 occurrences) |
| 9 | Search for `tel:` links | ✅ Found (2 occurrences) |

---

## 6. Conclusion

**Deployment successful.** Commit `1acebd3` is now live at `https://www.inframindepc.com/`.

All 12 "Schedule Consultation" CTAs now point to `https://calendly.com/samanta-nayak/30min`. The broken `inframind-ai/discovery` URL has been eliminated from production. Clickable `mailto:` and `tel:` links are now available in the footer and contact page.
