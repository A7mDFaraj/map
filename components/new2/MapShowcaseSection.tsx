'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import BrandBackground from '@/components/BrandBackground';
import LogoMaskImage from '@/components/LogoMaskImage';
import { SAUDI_REGIONS, TOTAL_NATIONAL_METRICS } from '@/data/mapRegionsData';

// ponytail: simple IntersectionObserver hook — no dep
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ponytail: count-up via rAF — same pattern as HeroSection
function useCountUp(target: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  const raf = useRef(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration, start]);
  return value;
}

function formatNum(n: number) {
  return n.toLocaleString('en-US');
}

// Riyadh region for the default highlight
const RIYADH = SAUDI_REGIONS.find(r => r.id === 'riyadh')!;

const STATS = [
  { label: 'جمعية شبابية', value: TOTAL_NATIONAL_METRICS.totalAssociations },
  { label: 'مبادرة و فعالية', value: TOTAL_NATIONAL_METRICS.totalInitiatives },
  { label: 'عدد المستفيدين سنوياً', value: TOTAL_NATIONAL_METRICS.totalBeneficiaries },
];

export default function MapShowcaseSection() {
  const section = useInView(0.1);
  const s0 = useCountUp(STATS[0].value, 2000, section.visible);
  const s1 = useCountUp(STATS[1].value, 2200, section.visible);
  const s2 = useCountUp(STATS[2].value, 2400, section.visible);
  const counts = [s0, s1, s2];

  return (
    <BrandBackground
      as="section"
      variant="dark"
      patternOpacity={0.05}
      className="py-20 sm:py-28 lg:py-32"
      id="map-showcase"
    >
      <div ref={section.ref} className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16" dir="rtl">

        {/* ── Section Tag ── */}
        <div
          className="flex items-center gap-3 mb-4 transition-all duration-[1000ms] ease-out"
          style={{ opacity: section.visible ? 1 : 0, transform: section.visible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <svg className="w-5 h-5 text-[#3EB985]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
          </svg>
          <span className="text-[#3EB985] text-xs sm:text-sm font-semibold tracking-wide">
            الخريطة التفاعلية
          </span>
        </div>

        {/* ── Heading ── */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-14 md:mb-20 transition-all duration-[1200ms] ease-out"
          style={{ opacity: section.visible ? 1 : 0, transform: section.visible ? 'translateY(0)' : 'translateY(30px)', transitionDelay: '100ms' }}
        >
          استكشف الخريطة التفاعلية
        </h2>

        {/* ── Main Layout: Arches | Map | Stats ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_auto] gap-8 lg:gap-10 items-center">

          {/* ── Left: Logo Masked City Image ── */}
          <div
            className="flex items-center justify-center transition-all duration-[1400ms] ease-out"
            style={{ opacity: section.visible ? 1 : 0, transform: section.visible ? 'translateX(0)' : 'translateX(60px)', transitionDelay: '300ms' }}
          >
            <LogoMaskImage src="/riyadh-skyline.png" alt="أفق الرياض" className="w-full max-w-[320px] mx-auto drop-shadow-[0_12px_40px_rgba(0,0,0,0.4)]" />
          </div>

          {/* ── Center: Saudi Map ── */}
          <div
            className="relative flex items-center justify-center transition-all duration-[1400ms] ease-out"
            style={{ opacity: section.visible ? 1 : 0, transform: section.visible ? 'scale(1)' : 'scale(0.9)', transitionDelay: '400ms' }}
          >
            <svg
              viewBox="0 0 700 620"
              className="w-full max-w-[500px] h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Map regions */}
              {SAUDI_REGIONS.map((region) => {
                const isRiyadh = region.id === 'riyadh';
                return (
                  <path
                    key={region.id}
                    d={region.svgPath}
                    fill={isRiyadh ? 'rgba(28, 129, 172, 0.35)' : 'rgba(255, 255, 255, 0.08)'}
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth={0.8}
                    className="transition-colors duration-300 hover:fill-[rgba(28,129,172,0.25)] cursor-pointer"
                  />
                );
              })}

              {/* Riyadh pin */}
              <g transform={`translate(${RIYADH.cx + 155}, ${RIYADH.cy + 25})`}>
                {/* Pulse ring */}
                <circle r="16" fill="none" stroke="#3EB985" strokeWidth="1.5" opacity="0.4">
                  <animate attributeName="r" from="12" to="24" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle r="8" fill="#3EB985" opacity="0.85" />
                <circle r="3.5" fill="white" />
              </g>

              {/* Riyadh label */}
              <g transform={`translate(${RIYADH.cx + 155}, ${RIYADH.cy + 55})`}>
                <text
                  textAnchor="middle"
                  fill="white"
                  fontSize="14"
                  fontWeight="bold"
                  fontFamily="Tajawal, sans-serif"
                >
                  الرياض
                </text>
              </g>

              {/* Tooltip callout */}
              <g transform={`translate(${RIYADH.cx + 80}, ${RIYADH.cy - 10})`}>
                <rect x="-70" y="-32" width="140" height="64" rx="12" fill="rgba(35, 58, 119, 0.9)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <text textAnchor="middle" y="-10" fill="white" fontSize="11" fontWeight="600" fontFamily="Tajawal, sans-serif">
                  استكشف الجمعيات هنا
                </text>
                {/* CTA button inside tooltip */}
                <rect x="-48" y="2" width="96" height="26" rx="6" fill="#1C81AC" />
                <text textAnchor="middle" y="20" fill="white" fontSize="10" fontWeight="600" fontFamily="Tajawal, sans-serif">
                  ← تصفح الآن
                </text>
              </g>
            </svg>
          </div>

          {/* ── Right: Region Stats ── */}
          <div
            className="flex flex-col gap-6 transition-all duration-[1400ms] ease-out"
            style={{ opacity: section.visible ? 1 : 0, transform: section.visible ? 'translateX(0)' : 'translateX(-40px)', transitionDelay: '500ms' }}
          >
            {/* Region name */}
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#3EB985] shadow-[0_0_12px_rgba(62,185,133,0.5)]" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white">الرياض</span>
            </div>

            {/* Stats */}
            <div className="flex flex-col gap-5">
              {STATS.map((stat, i) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums" dir="ltr">
                    {formatNum(counts[i])}+
                  </span>
                  <span className="text-white/50 text-sm font-medium">{stat.label}</span>
                  {i < STATS.length - 1 && (
                    <div className="w-12 h-px bg-white/10 mt-3" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </BrandBackground>
  );
}
