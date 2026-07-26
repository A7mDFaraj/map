# SCY Visual Identity Design Guide (دليل الهوية البصرية)
> Extracted from: **الهوية الجديد للمجلس التخصصي الرسمية.pdf** (2025 Edition)
> Organization: **المجلس التخصصي للجمعيات الشبابية** — Specialized Council for Youth NGOs

---

## A. Logo (شعار المجلس)

### Concept
The logo is designed in a modern, contemporary style characterized by simplicity and clarity. It combines the **Saudi Arabia map silhouette** merged with a **group of youth figures** in varying heights.

### Logo Variants
| Variant | Description | Use Case |
|---------|-------------|----------|
| **Full Logo (Colored)** | Full logo with Arabic + English text, on light background | Primary usage |
| **Full Logo (White)** | White version for dark backgrounds | Dark-bg headers, hero sections |
| **Identity Symbol** | Icon-only (no text), approved for standalone use | Favicons, app icons, small spaces |
| **Compact Logo** | Narrow-space version | Limited-width layouts |

### Logo Assets Available
- `/brand/logo/logo-colored.svg` — Full colored logo
- `/brand/logo/logo-white.svg` — White version
- `/brand/logo/logo-minimal.svg` — Minimal/icon-only
- `/brand/logo/frame.svg` — Decorative frame element
- `/brand/logo/pattern.svg` — Brand pattern

### Logo Safety Zone
- Minimum clear space: **2× the unit measure (X)** from all sides
- No elements may intrude into the safety zone

### Logo Misuse Rules
- ❌ Do not tilt/rotate the logo
- ❌ Do not stretch or distort proportions (always hold Shift when scaling)
- ❌ Do not change official colors
- ❌ Do not produce at low resolution
- ❌ Do not create sub-logos
- ❌ Do not alter the logo design
- ❌ Do not add or remove parts of the logo
- ❌ Do not add drop shadows

---

## B. Logo Placement (أماكن الشعار)

- **Default position**: Upper-right corner (RTL context) for both print and digital
- **Partner logos**: Arranged in balanced, clear layout alongside the council's logo
- **Identity merging**: When combining with other organizations' identities, maintain balance, alignment, and proportional sizing. Council logo colors and fonts must not be modified.

---

## C. Official Colors (الألوان الرسمية)

### Primary Colors

| Color | Name (AR) | HEX | RGB | CMYK | Usage Ratio |
|-------|-----------|-----|-----|------|-------------|
| 🟦 Dark Blue | الأزرق الداكن (اللون الأساسي) | `#233A77` | 35, 58, 119 | 100, 90, 23, 10 | **60%** |
| 🟦 Teal / Sky Blue | السماوي (اللون الثانوي) | `#1C81AC` | 28, 129, 172 | 83, 38, 16, 3 | **15%** |
| 🟩 Green | الأخضر (لون التميز) | `#3EB985` | 62, 185, 133 | 71, 0, 65, 0 | **25%** |

### Color Usage Ratios
- **60%** — Dark Blue `#233A77` (dominant, institutional weight)
- **25%** — Green `#3EB985` (accent, energy, youth)
- **15%** — Teal `#1C81AC` (secondary, connecting element)

> [!IMPORTANT]
> The current codebase uses slightly different hex values (`#263370`, `#0c7fae`, `#42b07a`) from the website version. The **official PDF brand guide** specifies `#233A77`, `#1C81AC`, `#3EB985`. Consider aligning to the official PDF values.

### Color Comparison: PDF vs Current CSS

| Role | PDF Official | Current CSS (`globals.css`) | Website Screenshot |
|------|-------------|---------------------------|-------------------|
| Primary (Dark Blue) | `#233A77` | `#263370` | `#263370` |
| Secondary (Teal) | `#1C81AC` | `#0c7fae` | `#0c7fae` |
| Accent (Green) | `#3EB985` | `#42b07a` | `#42b07a` |

---

## D. Typography (خطوط الهوية)

### Arabic Fonts

| Font | Role | Weights | Notes |
|------|------|---------|-------|
| **خط نور (Noor)** | Primary Arabic font | Light, Regular, Bold | Official Arabic typeface |
| **خط تجوال (Tajawal)** | Secondary Arabic font | Light, Regular, Bold | ✅ Already used in codebase via Google Fonts |
| **خط إيفرا (Effra)** | Creative Arabic font | Regular, Bold, Heavy | For creative/editorial use |

### English Font

| Font | Role | Weights |
|------|------|---------|
| **Galano** | Official English font | Regular, Medium, Bold, Heavy |

> [!NOTE]
> The codebase currently uses **Tajawal** (the secondary Arabic font) which is correct for web use as it's available on Google Fonts. Noor (primary) is a custom font that would need to be self-hosted.

---

## E. Identity Elements (عناصر الهوية)

### Brand Pattern (باترن)
- Derived from the logo composition and colors
- Uses abstract, rounded geometric shapes inspired by the youth-group motif in the logo
- Available in both light (outlined) and filled versions
- Colors: Dark Blue (`#233A77`) outlines and Green (`#3EB985`) outlines on white backgrounds; white outlines on dark backgrounds
- File: `/brand/logo/pattern.svg`

### Usage Guidelines
- Use to reinforce visual identity in various applications
- Maintain balance — do not overuse
- **Light backgrounds**: Use dark-colored logo/icons from the identity palette
- **Dark backgrounds**: Use white or one of the primary identity colors
- Ensure sufficient contrast and detail clarity

### Icon Style
- Simple line-style icons with **rounded corners**
- Express modern, youthful character
- Used as balanced visual elements supporting content
- No excessive decoration

---

## F. Council Projects (مشاريع المجلس)

The council maintains sub-brand identities for its projects and sponsor identities, all accessible through the main identity system.

---

## Quick Reference: Design Tokens for Web

```css
:root {
  /* Official PDF Colors */
  --scy-primary: #233A77;       /* Dark Blue — 60% usage */
  --scy-secondary: #1C81AC;     /* Teal — 15% usage */
  --scy-accent: #3EB985;        /* Green — 25% usage */
  
  /* Typography */
  --font-primary-ar: 'Noor', sans-serif;       /* If self-hosted */
  --font-secondary-ar: 'Tajawal', sans-serif;  /* Google Fonts ✅ */
  --font-primary-en: 'Galano', sans-serif;     /* If self-hosted */
}
```

### Logo Files
```
/brand/logo/logo-colored.svg   — Full colored (light bg)
/brand/logo/logo-white.svg     — Full white (dark bg)
/brand/logo/logo-minimal.svg   — Icon only
/brand/logo/frame.svg          — Decorative frame
/brand/logo/pattern.svg        — Brand pattern
```
