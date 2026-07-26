'use client';

/**
 * Reusable brand pattern background.
 *
 * Uses frame.svg (the full-screen pattern) tiled across the container
 * with a subtle tone-on-tone effect over the primary dark blue.
 *
 * Usage:
 *   <BrandBackground>…children…</BrandBackground>
 *   <BrandBackground as="section" className="py-20">…</BrandBackground>
 *   <BrandBackground variant="light">…</BrandBackground>
 */

import { type ReactNode, type ElementType, type ComponentPropsWithoutRef } from 'react';

type Variant = 'dark' | 'light';

type BrandBackgroundProps<T extends ElementType = 'div'> = {
  as?: T;
  variant?: Variant;
  /** Extra opacity for the pattern (0–1). Default: 0.07 for dark, 0.05 for light */
  patternOpacity?: number;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>;

const variantStyles: Record<Variant, { bg: string; patternFilter: string; defaultOpacity: number }> = {
  dark: {
    bg: 'var(--scy-primary, #263370)',
    // lighten the pattern on dark bg → white-ish tint
    patternFilter: 'brightness(0) invert(1)',
    defaultOpacity: 0.07,
  },
  light: {
    bg: 'var(--scy-bg-alt, #f6f7fb)',
    // keep original colors but desaturate slightly
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
      {/* Tiled pattern layer */}
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
      {/* Content sits above */}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </Tag>
  );
}
