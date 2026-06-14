# UI/UX Refinement Sprint — Design Document

## Overview

Enterprise-grade UI/UX refinement for InfraMind EPC website. Focus on navigation simplification, CTA hierarchy, and microinteractions while preserving existing branding, animations, colors, and functionality.

## Phase 1 — Header Navigation

### Current State
8 primary nav items: Home, About, Products, Automation, Case Studies, Services, Capability, Contact + Resources link + Contact button (duplicate).

### Target State
| Label | Type | Path / Children |
|-------|------|-----------------|
| Logo | Home link | `/` |
| AI Solutions | Dropdown | Services (`/services`), Automation (`/automations`) |
| Products | Dropdown | Overview (`/products`), MAHSR Digital Twin (`/products/mahsr-digital-twin`), NCR Tracker (`/products/ncr-tracker`) |
| Portfolio | Dropdown | Capability Statement (`/capability-statement`), Case Studies (`/case-studies`) |
| Resources | Dropdown | Resource Library (`/resources`), Advisory Suite (`/advisory-suite`) |
| Contact | Primary CTA button | `/contact` |

### Changes
- Remove "Home" nav item; logo serves as home link
- Remove "About" from header; move to footer
- Remove "Capability" standalone item; nest under Portfolio
- Remove "Case Studies" standalone item; nest under Portfolio
- Remove "Services" standalone item; nest under AI Solutions
- Remove "Automation" standalone item; nest under AI Solutions
- Resources becomes a dropdown with sub-items
- Single Contact button remains as primary CTA

### Accessibility
- `aria-haspopup="menu"` and `aria-expanded` on dropdown triggers
- `role="menu"` and `role="menuitem"` on dropdown content
- Keyboard: Enter/Space to toggle, Escape to close, Tab to move through items
- Click outside to close
- Hover with 300ms open delay, instant close on mouseleave
- Focus-visible ring on all interactive elements

### Mobile
- Hamburger menu preserved
- Dropdowns become accordion-style expandable sections
- Touch-friendly tap targets (44px minimum)

## Phase 2 — Download Centre CTA

### Current State
- DownloadCard: plain `bg-infrastructure-600` button, no hover glow, no press animation
- ResourceCard: `variant="ghost"` Button, subtle, not immediately identifiable as clickable

### Target State
Use the existing `Button` component with `variant="primary"` (gradient, glow, active scale) for all download actions.

- Same gradient as Contact CTA: `from-[var(--color-primary)] to-[var(--color-accent)]`
- Hover glow: `hover:shadow-[var(--shadow-glow-strong)]`
- Press scale: `active:scale-[0.97]`
- Focus ring: `focus-visible:ring-2 focus-visible:ring-primary/50`
- Min height 44px (matching `h-11` classes)
- Download icon with `group-hover` animation on icon

## Phase 3 — Header CTA

Keep single Contact button, primary gradient variant, visually dominant. No duplicate Contact nav item.

## Phase 4 — Information Architecture

- All existing routes preserved (SEO safe)
- No content removed; navigation paths reorganized
- About page accessible from footer
- Redundant nav entries eliminated

## Phase 5 — Microinteractions

### Dropdown animation
- Fade + translateY(–4px → 0) on open, 200ms ease-out
- Reverse on close, 150ms ease-in
- Opacity 0→1, pointer-events toggle

### Active nav indicator
- Underline or bottom-border approach for active dropdown items
- Active parent items highlighted

### Focus rings
- Consistent `focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]` across all interactive elements

### Transition timing
- All interactive transitions: `duration-300` (300ms) for consistency
- Dropdown: 200ms open / 150ms close

## Files Modified

| File | Change |
|------|--------|
| `src/components/layout/Header.tsx` | Full rewrite: dropdown navigation, mobile accordion, sticky scroll effect |
| `src/components/layout/Footer.tsx` | Add About link |
| `src/components/composites/DownloadCard.tsx` | Replace plain button with primary variant Button component |
| `src/components/composites/ResourceCard.tsx` | Change ghost variant to primary variant for download CTA |

## Build & Deploy

- `npm run build` — 0 TS errors, 0 lint errors
- Commit + push to GitHub
- Deploy to Vercel production
- Verify production downloads and routes
