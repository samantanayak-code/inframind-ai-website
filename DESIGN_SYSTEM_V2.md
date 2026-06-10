# Design System V2 — InfraMind AI

**Status:** Implementation Ready
**Target Feeling:** Premium, Intelligent, Technical, Trustworthy, Executive, Engineering-grade.

---

## 1. Typography (Modular Scale)
We use a "Golden Ratio" inspired scale to ensure dramatic contrast between headers and body text.

| Level | Size (Desktop) | Size (Mobile) | Weight | Usage |
|-------|----------------|---------------|--------|-------|
| Display | 72px / 1.1 | 48px / 1.1 | 800 | Hero Headlines |
| H1 | 56px / 1.2 | 36px / 1.2 | 700 | Main Section Headers |
| H2 | 40px / 1.3 | 28px / 1.3 | 700 | Subsection Headers |
| H3 | 24px / 1.4 | 20px / 1.4 | 600 | Card Titles |
| Body | 18px / 1.6 | 16px / 1.6 | 400 | Standard Text |
| Caption | 14px / 1.6 | 13px / 1.6 | 500 | Metadata / Labels |

---

## 2. Color Palette (Deep Infrastructure)

### Core
*   **Background:** `#0A0D10` (Deep Graphite)
*   **Surface:** `#14181D` (Subtle Elevation)
*   **Elevated:** `#1C2229` (Feature Cards)
*   **Border:** `#252D38` (Low Contrast)

### Accents
*   **Primary (AI):** `#00D1FF` (Cyan Glow)
*   **Secondary (Infrastructure):** `#3A7AB8` (Deep Blue)
*   **Accent:** `#4F8CC9` (Light Blue)
*   **Success:** `#10B981` (Verification Green)

---

## 3. Spacing & Grid (8px System)
*   **Section Padding (Y):** `120px` (Desktop) / `80px` (Mobile)
*   **Container Width:** `1280px` (max-width)
*   **Gutter:** `32px`

---

## 4. Visual Effects (Premium Polish)

### Glassmorphism
*   **Standard Glass:** `bg-white/5 backdrop-blur-md border border-white/10`
*   **Dark Glass:** `bg-black/20 backdrop-blur-lg border border-white/5`

### Glow Effects
*   **Primary Glow:** `box-shadow: 0 0 20px rgba(0, 209, 255, 0.15)`
*   **Subtle Inner Glow:** `inset 0 1px 1px rgba(255, 255, 255, 0.05)`

### Borders
*   **Radius:** `12px` (Standard) / `8px` (Small)
*   **Style:** `1px solid var(--color-border)`

---

## 5. Animation Standards (Framer Motion)
*   **Duration:** `0.5s` (Standard) / `0.3s` (Fast)
*   **Easing:** `[0.23, 1, 0.32, 1]` (Quintic Out - Professional feel)
*   **Scroll Reveal:** `initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }`

---

## 6. Components Evolution

### Buttons
*   **Primary:** Solid Cyan to Deep Blue gradient, white text, subtle outer glow.
*   **Secondary:** Glass background, cyan border, cyan text.
*   **Ghost:** Transparent, white text, subtle hover background.

### Cards
*   **Bento Style:** Varied aspect ratios, deep surface color, 1px border, subtle spotlight on hover.
*   **Metric Cards:** Large font-mono numbers, accent icons.

### Tags / Badges
*   **Status:** Pill shape, semi-transparent background of status color, 1px border.
