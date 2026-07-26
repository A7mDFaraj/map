# Components

## `components/BrandBackground.tsx`

Reusable branded pattern background wrapper used across the landing sections.

```tsx
'use client';

import { type ReactNode, type ElementType, type ComponentPropsWithoutRef } from 'react';

type Variant = 'dark' | 'light';

type BrandBackgroundProps<T extends ElementType = 'div'> = {
  as?: T;
  variant?: Variant;
  patternOpacity?: number;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>;

const variantStyles: Record<Variant, { bg: string; patternFilter: string; defaultOpacity: number }> = {
  dark: {
    bg: 'var(--scy-primary, #233A77)',
    patternFilter: 'brightness(0) invert(1)',
    defaultOpacity: 0.07,
  },
  light: {
    bg: 'var(--scy-bg-alt, #f6f7fb)',
    patternFilter: 'none',
    defaultOpacity: 0.05,
  },
};

export default function BrandBackground<T extends ElementType = 'div'>({
  as,
  variant = 'dark',
  patternOpacity,
  children,
  className = '',
  style,
  ...rest
}: BrandBackgroundProps<T>) {
  const Tag = (as ?? 'div') as ElementType;
  const v = variantStyles[variant];
  const opacity = patternOpacity ?? v.defaultOpacity;

  return (
    <Tag
      className={`brand-bg ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: v.bg,
        color: variant === 'dark' ? '#fff' : undefined,
        ...style,
      }}
      {...rest}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/brand/logo/frame.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '420px auto',
          filter: v.patternFilter,
          opacity,
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </Tag>
  );
}
```

## `components/LogoMaskImage.tsx`

Logo-shaped image mask used as a branded visual motif.

```tsx
import React from 'react';

interface LogoMaskImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function LogoMaskImage({ src, className = '' }: LogoMaskImageProps) {
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: '35/34' }}>
      <svg viewBox="0 0 35 34" className="w-full h-full" style={{ position: 'absolute', inset: 0 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="scy-logo-mask" clipPathUnits="userSpaceOnUse">
            <path d="M20.5 9.39995C19.3 9.39995 18.3 10.4 18.3 11.6V31.0999C18.3 32.2999 19.3 33.2999 20.5 33.2999C21.7 33.2999 22.7 32.2999 22.7 31.0999V11.6C22.7 10.4 21.7 9.39995 20.5 9.39995Z" />
            <path d="M14.4 6.99995C13.2 6.99995 12.2 7.99995 12.2 9.19995V31.0999C12.2 32.2999 13.2 33.2999 14.4 33.2999C15.6 33.2999 16.6 32.2999 16.6 31.0999V9.29995C16.6 7.99995 15.6 6.99995 14.4 6.99995Z" />
            <path d="M2.2 8.3C1 8.3 0 9.3 0 10.5V19.1C0 20.3 1 21.3 2.2 21.3C3.4 21.3 4.4 20.3 4.4 19.1V10.5C4.5 9.3 3.5 8.3 2.2 8.3Z" />
          </clipPath>
          <linearGradient id="scy-overlay-grad" x1="0" y1="34" x2="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#233A77" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#233A77" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <image href={src} width="35" height="34" preserveAspectRatio="xMidYMid slice" clipPath="url(#scy-logo-mask)" />
        <rect width="35" height="34" clipPath="url(#scy-logo-mask)" fill="url(#scy-overlay-grad)" />
      </svg>
    </div>
  );
}
```
