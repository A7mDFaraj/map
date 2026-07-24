# SCYN Map Redesign Brief — map.scy.org.sa

> **Purpose of this document:** a self-contained design + build spec for an AI coding agent (or a human dev team) to redesign `map.scy.org.sa` ("خارطة الجمعيات الشبابية" — Youth Associations Map) so it matches the visual quality of the already-approved sister site `nadi.scy.org.sa` ("روزنامة الأندية الشبابية") and correctly reflects the official SCY brand identity.

---

## 1. Context

There are three related properties under the same parent organization, **المجلس التخصصي للجمعيات الشبابية (SCY — Specialized Council for Youth Associations)**:

| Site | Role | Status |
|---|---|---|
| `scy.org.sa/ar` | Parent/corporate site | Live, out of scope — do not touch |
| `nadi.scy.org.sa` | Youth clubs calendar ("روزنامة الأندية الشبابية") | ✅ **Approved by stakeholders — use as the visual reference/benchmark** |
| `map.scy.org.sa` | Youth associations map/directory ("خريطة الجمعيات الشبابية") | ❌ **Rejected — this is the site to redesign** |

The stakeholder feedback was essentially: *"this doesn't look finished / doesn't look like our brand — the nadi site does."* Your job is to rebuild `map.scy.org.sa`'s UI to reach parity with `nadi`'s polish while keeping the map site's own information architecture (association directory + interactive map + registration flow).

---

## 2. Diagnosis — what's actually wrong with the current map site

From auditing the live markup, these are concrete, fixable problems (not vague "make it prettier" feedback):

1. **Placeholder icons shipped to production.** Every "featured association" card uses the exact same icon file `assets/icons/binance-coin-(bnb).svg` — a **cryptocurrency (Binance coin) icon** — as the org's avatar/logo. This must never happen again; every entity needs a real logo/initial-based avatar with a graceful fallback.
2. **Unpopulated stat counters.** The "استكشف الخريطة التفاعلية" section shows literal `0` for every metric (عدد الجمعيات، نسبة النمو، عدد المستفيدين...). Counters must either load real data or the section should not ship in a "0" state — use a skeleton/loading state instead of a bare zero.
3. **Thin partner section.** Only one partner logo renders vs. nadi's dense 18+ logo marquee. Needs a real logo-wall/marquee component even if only a few logos exist today (build it to scale).
4. **No imagery-driven sections.** Unlike nadi (photo gallery "عدسة الأندية", resource/guide cards with product photography), the map site is all text blocks and icon cards — reads flat and empty.
5. **No decorative brand layer.** nadi uses corner SVG "art" accents (`art-01-tr.svg`, `art-02-bl.svg`) and a repeating subtle pattern (`patterns/1.png`) behind section headers to add texture. The map site has none of this — it looks like an unstyled template.
6. **Weak visual hierarchy on section headers.** nadi repeats the section title twice in the DOM (visually: small eyebrow label + large heading), map site has a flatter single-line heading pattern in places.

Fix these six things and you close most of the perceived quality gap.

---

## 3. Brand Identity (source of truth: `scy.org.sa/ar/topic/brand-identitiy`)

### 3.1 Color palette

```css
:root {
  /* Primary — Dark Blue (main brand color, use for headers, primary buttons, dark sections) */
  --scy-primary: #263370;
  --scy-primary-600: #1c2757; /* darker hover state */
  --scy-primary-100: #e7e9f2; /* tint for light backgrounds */

  /* Secondary — Cyan/Sky Blue (links, secondary actions, icons) */
  --scy-secondary: #0c7fae;
  --scy-secondary-600: #0a6a91;
  --scy-secondary-100: #e1f0f6;

  /* Accent — Green (success states, growth stats, highlights, "impact" numbers) */
  --scy-accent: #42b07a;
  --scy-accent-600: #359465;
  --scy-accent-100: #e4f5ec;

  /* Neutrals */
  --scy-ink: #12172e;        /* body text on light bg */
  --scy-ink-muted: #5b6178;  /* secondary text */
  --scy-bg: #ffffff;
  --scy-bg-alt: #f6f7fb;     /* section alternation background */
  --scy-border: #e4e6f0;
}
```

Usage rules:
- **Dark blue (#263370)** — primary navbar background OR primary CTA buttons, hero overlays, footer background.
- **Cyan (#0c7fae)** — secondary buttons, active nav link underline, links inside body copy, map pins/markers.
- **Green (#42b07a)** — impact/growth metrics only (e.g. "نسبة نمو محققة", "+"counters), success badges, "موثقة رسمياً" tags. Don't overuse — it should read as the "impact" signal color.
- Never place brand green and cyan directly adjacent at full saturation in large fills — pair each with a neutral or the primary blue to avoid a "traffic light" look.

### 3.2 Typography

- **Font family:** **Tajawal** (official brand font) — self-hosted, already used across SCY properties.
  - Weight 900 (ExtraBold) → H1/hero headlines
  - Weight 700 (Bold) → H2–H4, nav, buttons, stat numbers
  - Weight 400 (Regular) → body copy, descriptions
- Load via `@font-face` from the same source SCY uses, or `Tajawal` from Google Fonts as a fallback (identical typeface family):

```css
@font-face {
  font-family: 'Tajawal';
  src: url('/fonts/Tajawal-Regular.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family: 'Tajawal';
  src: url('/fonts/Tajawal-Bold.ttf') format('truetype');
  font-weight: 700;
}
@font-face {
  font-family: 'Tajawal';
  src: url('/fonts/Tajawal-ExtraBold.ttf') format('truetype');
  font-weight: 900;
}
body { font-family: 'Tajawal', sans-serif; }
```

### 3.3 Logo

- Use the official SCYN/map logo (`logo-white.svg` for dark headers, need a dark/colored variant for light backgrounds — request from brand asset pack: SVG / AI / PDF exports available at the brand identity page's download links).
- Maintain clear-space around the logo equal to the height of the logo mark itself; never place it directly on a busy photo without a scrim/overlay.

### 3.4 Decorative language (borrow from nadi, apply consistently)

- Two recurring corner-art SVGs (abstract organic blob/pattern shapes) placed top-right and bottom-left of major sections, at low opacity, never overlapping text.
- A subtle repeating dot/geometric pattern (`pattern-*.svg`) as a background texture behind stat/CTA sections — very low contrast, brand-blue tinted.
- Rounded corners throughout (cards, buttons, images) — radius scale: `8px` small controls, `16px` cards, `24px` large media/hero panels.
- Soft elevation shadows on cards (`0 8px 24px rgba(38,51,112,0.08)`), not harsh drop shadows.

---

## 4. Global UI System

### 4.1 Layout

- **RTL-first.** `dir="rtl"`, `lang="ar"`. All logical CSS properties (`margin-inline-start`, `padding-inline-end`, etc.) instead of left/right — this also gives you LTR/English support for free later if needed.
- Max content width: `1280px`, centered, `24px` side padding on mobile, `64px` on desktop.
- 12-column responsive grid. Breakpoints: `mobile <640px`, `tablet 640–1024px`, `desktop >1024px`.

### 4.2 Navigation (header)

Reuse the existing IA (it's fine) but restyle:
- Sticky header, transparent over hero → solid `--scy-primary` (or white with shadow) on scroll.
- Logo (right side in RTL reading order = visually first), nav links center/start, "عن المجلس" + language/CTA button at the end.
- Active link: `--scy-secondary` underline, weight 700.
- Mobile: slide-in drawer from the side, grouped exactly like the current footer groups (القائمة / روابط هامة / الجمعيات) for consistency.

### 4.3 Buttons

```css
.btn-primary   { background: var(--scy-primary); color: #fff; border-radius: 12px; padding: 14px 28px; font-weight: 700; }
.btn-primary:hover { background: var(--scy-primary-600); }
.btn-secondary { background: transparent; color: var(--scy-primary); border: 1.5px solid var(--scy-primary); border-radius: 12px; }
.btn-accent    { background: var(--scy-accent); color: #fff; } /* for "register your org" type CTAs */
```

### 4.4 Cards (association / club cards)

- Image or logo-avatar top (aspect ratio 4:3 for photos, 1:1 circular for org logo avatars)
- **Fallback avatar rule (fixes the Binance-icon bug):** if no logo is uploaded, render a colored circle with the association's Arabic initial letter, using a deterministic color from the brand palette (rotate through primary/secondary/accent tints) — never a generic stock icon.
- Category tag pills (small, rounded-full, tinted background matching category)
- City/location with a small pin icon in `--scy-secondary`
- CTA link "عرض التفاصيل" as text-link with arrow, not a boxed button, to reduce visual noise when many cards are on screen.

---

## 5. Page-by-Page Spec

### 5.1 Homepage (`/`)

**A. Hero**
- Full-bleed section, `--scy-primary` gradient or dark photo overlay background, decorative corner art at low opacity.
- H1 (900 weight): "اكتشف الجمعيات الشبابية في المملكة"
- Supporting line (400 weight, muted white/70%): "منصة تفاعلية لتعزيز التنسيق والتكامل بين الجمعيات الشبابية والجهات ذات العلاقة، وتمكين الوصول السريع للبيانات"
- Two CTAs: primary "تصفح الجمعيات الشبابية" (solid white/accent button) + secondary "سجل جمعيتك الآن" (outline button)
- A tagline strip beneath: "رؤية شبابية، بيانات دقيقة، تمكين مستدام" as a thin eyebrow.
- **New addition vs. current site:** embed a live/static preview of the interactive map (blurred or simplified) *behind* the hero text as a visual anchor — this is a map product, the hero should *look* like a map product, not a generic text hero.

**B. About strip ("نبذة عن المنصة")**
- Eyebrow label "عن المنصة" + two-line heading (repeat pattern from nadi: small label, then large duplicated-for-emphasis heading treatment is optional — keep it simple: one clear H2).
- 2–3 column feature grid (not paragraphs stacked): "خدمات المنصة" / "أهمية المنصة" / (add a third if content allows, e.g. "من يستخدم المنصة؟") each with a small line icon in `--scy-secondary`, a heading, one sentence — icon-card style like nadi's "ماذا تقدم الروزنامة".

**C. Interactive map showcase ("استكشف الخريطة التفاعلية")** — the flagship section
- Two-column layout on desktop: **left = live embedded map component** (region pins, clickable), **right = a region-detail panel** that updates when a pin/region is selected, showing that region's stats.
- Stat cards for the selected region (e.g. الرياض): عدد الجمعيات، عدد المبادرات، عدد المستفيدين سنوياً — animated count-up numbers **only when real data exists**; otherwise show a skeleton shimmer, never a bare "0".
- Below/beside: national-level totals as a highlighted stat bar with the green accent color for growth % (نسبة نمو محققة) — this is the one place `--scy-accent` should dominate.
- On mobile: stack — map on top (fixed height ~360px, pinch/scroll to explore), stat cards below as a horizontal scroll strip.

**D. Partner/sponsor marquee ("شركاؤنا الاستراتيجيون")**
- Build this as an infinite horizontal auto-scrolling logo strip (like nadi), grayscale logos that go full-color on hover, generous spacing, works with 1 logo or 30.
- Do not ship an empty-feeling single-logo static block — pad the strip with the parent council's own confirmed partners if the map-specific list is still short, and design the component to auto-loop regardless of count.

**E. Featured associations ("جمعيات مميزة")**
- Card grid (3-up desktop / 2-up tablet / 1-up mobile) using the card spec in §4.4.
- Fix the icon bug here specifically — this section is where the Binance icon currently appears.
- Add a filter/category quick-chips row above the grid (تقنية / تطوع / فنون / ريادة أعمال...) even if just visual/static for v1 — signals this is a browsable directory, not a static list.

**F. Registration CTA ("سجل جمعيتك الآن")**
- Full-width `--scy-primary` band, decorative pattern background, white heading + supporting line + one primary CTA (accent-colored button for contrast) + one secondary text link "تعرف على المزايا".

**G. Resource/guides strip (new — borrowed from nadi's "الأدلة والنماذج")**
- If the map platform has any guides/FAQ/onboarding PDFs for associations registering, mirror nadi's guide-card grid here (image + "دليل" eyebrow + title + one-line description). This directly copies the pattern stakeholders already approved.

**H. Photo gallery (new — borrowed from nadi's "عدسة الأندية")**
- 4–5 image tiles of real association activities/events, mixed aspect ratios (masonry or a 2-row asymmetric grid), each with a one-line caption overlay on hover. This is the single highest-impact addition for closing the "feels empty" gap — nadi's gallery is one of its strongest sections and the map site has nothing equivalent.

**I. Footer**
- Keep current IA (القائمة / روابط هامة / الجمعيات / legal), restyle to match nadi: dark `--scy-primary` background, logo mark, grouped columns, social icons row, bottom bar with copyright + "طور بواسطة" credit.

### 5.2 Directory / listing page (`/browse/youth-orgs`)
- Left sidebar filters (region, city, category, "موثقة رسمياً" toggle) — sticky on desktop, collapsible sheet on mobile.
- Right: card grid using §4.4 cards, with a persistent toggle to switch the grid view into a full-map view (split-screen: list + map, like nadi's "خارطة الأندية" page).
- Empty/no-results state: illustration + "لا توجد نتائج مطابقة" + a "مسح الفلاتر" reset action — never a blank white area.

### 5.3 Association detail page
- Header banner with cover photo + logo avatar overlapping (like a profile page), name, category tags, city, verified badge (green, if applicable).
- Body: about, contact info block, embedded mini-map pin for its location, gallery if available, related/similar associations at the bottom.

### 5.4 Register page (`/register`)
- Simple multi-step form (stepper using brand colors: current step in `--scy-primary`, completed in `--scy-accent`), not a long single scroll form — matches modern SaaS-style registration and reduces drop-off.

---

## 6. Component Inventory to Build

1. `Navbar` (sticky, transparent→solid, RTL, mobile drawer)
2. `Hero` (with embedded/blurred map visual)
3. `StatCounter` (animated count-up, skeleton fallback state — **must never render a bare 0**)
4. `IconFeatureCard` (for the "about/services" grid)
5. `InteractiveMapPanel` (pins, region selection, detail panel sync)
6. `PartnerMarquee` (infinite scroll, grayscale→color hover, scales from 1–N logos)
7. `OrgCard` (avatar-with-fallback-initial, category pills, location, text-link CTA)
8. `CategoryChips` (filter row)
9. `GuideCard` (image + eyebrow + title + description) — new, mirrored from nadi
10. `GalleryGrid` (asymmetric photo grid with hover captions) — new, mirrored from nadi
11. `CTASection` (full-width band with decorative pattern bg)
12. `Footer` (grouped links, socials, legal bar)
13. `DecorativeArt` (the two corner SVG accents + repeating pattern background, as a reusable wrapper component so every section can opt in)

---

## 7. Accessibility & Quality Bar

- Color contrast: body text on white must be `--scy-ink` (#12172e) not raw brand blue-on-blue; verify WCAG AA (4.5:1) on all text/background pairs, especially white text over the primary-blue band.
- All interactive map pins/markers must be keyboard-navigable and have accessible labels (association name + city).
- Real `alt` text on every image (current site's fetched markup shows several `alt=""`/empty placeholders — do not repeat this).
- No stat, count, or list should ever render a literal `0` or empty state without an explicit loading/empty design — this was the single most visible flaw in the current build.
- Respect `prefers-reduced-motion` for the count-up animations and the partner marquee auto-scroll.

---

## 8. Tech Notes for the Build Agent

- Match the existing stack pattern used by the sister sites (Next.js — evidenced by `_next/image` URLs on `nadi.scy.org.sa`) unless instructed otherwise; this eases eventual code-sharing between `nadi` and `map`.
- Use CSS custom properties (§3.1) as the single source of truth for color — do not hardcode hex values in components.
- Keep all Arabic copy exactly as currently published on the live site (see the fetched content in this brief) unless product/content owners provide updated copy — this brief only covers **visual/UI redesign**, not content rewriting.
- Build the `PartnerMarquee` and `StatCounter` components to be driven by a simple data array/CMS field so they never again ship with placeholder icons or unpopulated zeros.

---

## 9. Reference Benchmarks

- **Visual/quality target:** `nadi.scy.org.sa` (approved)
- **Brand source of truth:** `scy.org.sa/ar/topic/brand-identitiy`
- **IA/content source (do not change copy without sign-off):** current `map.scy.org.sa`
