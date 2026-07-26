# Theme

## Compact Token Summary

- Framework: Next.js `16.2.11`, React `19.2.4`.
- Styling: Tailwind CSS v4 through `@import "tailwindcss"` in `app/globals.css`.
- Font: Tajawal loaded in `app/layout.tsx` with CSS variable `--font-tajawal`.
- Colors:
  - `--scy-primary`: `#233A77`
  - `--scy-primary-600`: `#1a2c5a`
  - `--scy-primary-100`: `#e7ebf2`
  - `--scy-secondary`: `#1C81AC`
  - `--scy-secondary-600`: `#156283`
  - `--scy-secondary-100`: `#e1eff5`
  - `--scy-accent`: `#3EB985`
  - `--scy-accent-600`: `#2e8b64`
  - `--scy-accent-100`: `#e4f6ec`
  - `--scy-ink`: `#12172e`
  - `--scy-ink-muted`: `#5b6178`
  - `--scy-bg`: `#ffffff`
  - `--scy-bg-alt`: `#f6f7fb`
  - `--scy-border`: `#e4e6f0`
- Common visual utilities: `glass-header`, `glass-card`, `glass-navy`, `hero-gradient`, `card-shadow`, `card-shadow-hover`, `brand-pattern-bg`.

## Raw Sources

### `app/globals.css`

```css
@import "tailwindcss";

:root {
  --scy-primary: #233A77;
  --scy-primary-600: #1a2c5a;
  --scy-primary-100: #e7ebf2;
  --scy-secondary: #1C81AC;
  --scy-secondary-600: #156283;
  --scy-secondary-100: #e1eff5;
  --scy-accent: #3EB985;
  --scy-accent-600: #2e8b64;
  --scy-accent-100: #e4f6ec;
  --scy-ink: #12172e;
  --scy-ink-muted: #5b6178;
  --scy-bg: #ffffff;
  --scy-bg-alt: #f6f7fb;
  --scy-border: #e4e6f0;
  --background: #ffffff;
  --foreground: #12172e;
}

@theme {
  --color-scy-primary: var(--scy-primary);
  --color-scy-primary-600: var(--scy-primary-600);
  --color-scy-primary-100: var(--scy-primary-100);
  --color-scy-secondary: var(--scy-secondary);
  --color-scy-secondary-600: var(--scy-secondary-600);
  --color-scy-secondary-100: var(--scy-secondary-100);
  --color-scy-accent: var(--scy-accent);
  --color-scy-accent-600: var(--scy-accent-600);
  --color-scy-accent-100: var(--scy-accent-100);
  --color-scy-ink: var(--scy-ink);
  --color-scy-ink-muted: var(--scy-ink-muted);
  --color-scy-bg-alt: var(--scy-bg-alt);
  --color-scy-border: var(--scy-border);
  --font-tajawal: var(--font-tajawal), 'Tajawal', sans-serif;
}
```

### `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col antialiased bg-white text-[#12172e] selection:bg-[#0c7fae] selection:text-white">
        {children}
      </body>
    </html>
  );
}
```
