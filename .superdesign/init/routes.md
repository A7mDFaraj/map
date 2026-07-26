# Routes

## App Router

- `/` -> `app/page.tsx`
  - Renders the main original home sections from `components/`.
- `/new1` -> `app/new1/page.tsx`
  - Renders the first alternate landing flow from `components/new1/`.
- `/new2` -> `app/new2/page.tsx`
  - Renders `HeroSection`, `AboutSection`, `MapShowcaseSection`, `FeaturedAssociationsSection`, and `CTASection`.
- `/discover` -> `app/discover/page.tsx`
  - Discovery/listing page for associations.
- `/discover2` -> `app/discover2/page.tsx`
  - Alternate discovery/listing page.

## Root Layout

- `app/layout.tsx` supplies Arabic RTL document direction, Tajawal font loading, metadata, and global CSS.
