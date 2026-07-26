# Extractable Components

## BrandBackground

- Source: `components/BrandBackground.tsx`
- Category: layout
- Description: Branded dark/light section wrapper with tiled SCY frame pattern.
- Extractable props: `variant` (`"dark"` or `"light"`), `patternOpacity` (number), `className` (string)
- Hardcoded: brand frame asset, SCY background tokens, positioning behavior.

## LogoMaskImage

- Source: `components/LogoMaskImage.tsx`
- Category: basic
- Description: Image clipped into the SCY mark shape with a navy overlay.
- Extractable props: `src` (string), `className` (string)
- Hardcoded: SVG clip path and gradient overlay.

## Footer

- Source: `components/Footer.tsx`
- Category: layout
- Description: Dark institutional footer with brand intro, navigation links, ecosystem links, and contact info.
- Extractable props: none for page-specific use.
- Hardcoded: footer content, link labels, contact labels, icon choices.

## New2 Landing Sections

- Source: `components/new2/*.tsx`
- Category: layout
- Description: Page-specific landing sections for the alternate `/new2` flow.
- Extractable props: none currently; these are static landing sections.
- Hardcoded: Arabic copy, brand colors, section order.
