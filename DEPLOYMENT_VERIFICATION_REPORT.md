# Deployment Verification Report

**Date:** 2026-06-10
**Purpose:** Verify whether commit `1acebd3` (CTA Remediation Phase 1) is deployed to Vercel Production.

---

## 1. Latest Git Commit

```
1acebd3  2026-06-10 12:41:05 +0530   CTA Remediation Phase 1: fix Calendly URL, add mailto/tel links
```

### All Recent Commits

| Hash | Timestamp | Message |
|------|-----------|---------|
| `1acebd3` | 2026-06-10 12:41:05 | CTA Remediation Phase 1 |
| `daa2d2a` | 2026-06-10 12:38:29 | Pre CTA remediation backup |
| `cd4f76b` | 2026-06-10 10:39:04 | Switch email sender to inframindepc.com |
| `053f7a1` | 2026-06-09 19:33:41 | Partial InfraMind EPC brand migration |
| `4f646ac` | 2026-06-08 15:40:39 | Release Candidate RC1 - UI Elevation Complete |

**Git remote:** `origin → https://github.com/samantanayak-code/inframind-ai-website.git`

---

## 2. Vercel Project Details

| Property | Value |
|----------|-------|
| Project name | `inframind-ai-website` |
| Vercel scope | `samanta-nayaks-projects` |
| Production URL | `https://www.inframindepc.com` |
| Vercel URL | `https://inframind-ai-website.vercel.app` |
| Framework | Next.js |
| Node version | 24.x |
| Region | `sin1` (Singapore) |
| Git integration | Not connected via CLI (CI/CD may be manual) |

### Aliases (Custom Domains)

| Domain | Status |
|--------|--------|
| `www.inframindepc.com` | ✅ Active — serves Next.js app |
| `inframindepc.com` | ✅ Active — redirects to `www.inframindepc.com` |
| `inframind-ai-website.vercel.app` | ✅ Active — serves same app |
| `inframind.ai` | ❌ **Not pointing to Vercel** — serves GoDaddy Website Builder page |

---

## 3. Latest Production Deployment

| Property | Value |
|----------|-------|
| Deployment ID | `dpl_2EndZtYAiiTpmxaWb6pu6huxVrGd` |
| Status | `READY` |
| Created | `2026-06-10 12:38:36 +0530` |
| Age | ~16 minutes (at time of check) |
| Triggered by | `samantanayak-5199` |
| Duration | 31s |
| Commits included | `daa2d2a` and earlier |

### All Recent Production Deployments

| Age | Created (IST) | Status | Likely Commit |
|-----|--------------|--------|---------------|
| 16m | 12:38:36 | ✅ Ready | `daa2d2a` (Pre-CTA backup) |
| 2h | ~10:30 | ✅ Ready | `cd4f76b` (Sender swap) |
| 3h | ~09:30 | ✅ Ready | Likely earlier build |
| 17h | ~19:30 | ✅ Ready | Before RC1 |
| 2d+ | Earlier | ✅ Ready | Earlier builds |

---

## 4. Verdict: Is `1acebd3` Deployed?

**NO — Commit `1acebd3` is NOT deployed to Vercel Production.**

### Evidence

| Check | Result |
|-------|--------|
| Deployment timestamp (12:38:36) vs commit timestamp (12:41:05) | ❌ Deployment was **2 minutes 29 seconds BEFORE** the commit |
| Production HTML contains `calendly.com/inframind-ai/discovery` | ❌ Old URL still served |
| Production HTML contains `calendly.com/samanta-nayak/30min` | ❌ New URL not found |
| Production HTML contains `mailto:` link | ❌ Not found |
| Production HTML contains `tel:` link | ❌ Not found |
| No newer deployments since `1acebd3` | ❌ No build triggered after commit |

### Timeline

```
12:38:29  daa2d2a  Pre-CTA remediation backup (committed)
12:38:36          Production deployment triggered (includes daa2d2a)
12:41:05  1acebd3  CTA Remediation Phase 1 (committed)
                   → NO deployment triggered after this commit
```

---

## 5. Deployment Failures

| Deployment | Error | Notes |
|------------|-------|-------|
| Latest (12:38) | None | ✅ Successful build (31s) |

No deployment failures were detected. The issue is not a failure — it's that **no deployment was triggered** after commit `1acebd3`. The Vercel project may not be linked to GitHub for automatic deployments, or the trigger mechanism requires manual action.

### Potential Causes

1. **No Git integration** — Vercel project may be in "manual deploy" mode (no GitHub connection)
2. **No CI/CD workflow** — No `.github/workflows/` files found in the repository
3. **No `vercel deploy` command run** — After committing, no deploy command was executed
4. **GitHub branch not `main`** — If Vercel is configured for auto-deploy from `main`, verify the branch is `main`

---

## 6. Additional Findings

### Custom Domain `inframind.ai`

`https://inframind.ai/` resolves to a **GoDaddy Website Builder landing page**, NOT the Next.js app. The sitemap referenced in `robots.txt` (`https://inframind.ai/sitemap.xml`) cannot be our app's sitemap. This domain is hosted separately.

### Custom Domain `inframindepc.com`

Both `inframindepc.com` and `www.inframindepc.com` correctly serve our Next.js application.

---

## 7. Summary

| Item | Value |
|------|-------|
| Latest deployable commit | `1acebd3` |
| Latest production commit | `daa2d2a` |
| Lag | 1 commit (1acebd3) |
| Production URL | `https://www.inframindepc.com` |
| App status | ✅ Healthy |
| CTA remediation deployed? | ❌ No |
| Deployment failures | None |
| Action required | Deploy commit `1acebd3` to Vercel (manual or CI trigger) |
