'use client';

import React, { useEffect, useState, useRef } from "react";
import { Navbar } from "./Navbar";
import { TOTAL_NATIONAL_METRICS, SAUDI_REGIONS } from "@/data/mapRegionsData";
import { MapPin } from "lucide-react";

// ponytail: simple count-up hook, no deps — rAF + easeOut
function useCountUp(target: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  const ref = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const elapsed = now - t0;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.round(target * eased));
      if (progress < 1) ref.current = requestAnimationFrame(tick);
    };
    ref.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(ref.current);
  }, [target, duration, start]);

  return value;
}

const STATS = [
  {
    label: "جمعية شبابية",
    value: TOTAL_NATIONAL_METRICS.totalAssociations,
    suffix: "+",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    label: "مستفيد",
    value: TOTAL_NATIONAL_METRICS.totalBeneficiaries,
    suffix: "+",
    format: true, // format with K
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    label: "مبادرة نشطة",
    value: TOTAL_NATIONAL_METRICS.totalInitiatives,
    suffix: "+",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    label: "منطقة مغطاة",
    value: 13,
    suffix: "",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
];

function formatNumber(n: number, useK?: boolean) {
  if (useK && n >= 1000) return `${Math.round(n / 1000)}K`;
  return n.toLocaleString('en-US');
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Count-up values — start after mount
  const stat0 = useCountUp(STATS[0].value, 2200, mounted);
  const stat1 = useCountUp(STATS[1].value, 2400, mounted);
  const stat2 = useCountUp(STATS[2].value, 2200, mounted);
  const stat3 = useCountUp(STATS[3].value, 1800, mounted);
  const countValues = [stat0, stat1, stat2, stat3];

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden pt-24 lg:pt-0" dir="rtl">
      {/* ── Video backgrounds ── */}
      <video
        autoPlay loop muted playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      >
        <source src="/horizental.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay loop muted playsInline
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
      >
        <source src="/mobile.mp4" type="video/mp4" />
      </video>

      {/* ── Cinematic overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f24]/90 via-[#0a0f24]/40 to-transparent" />
      <div className="absolute inset-0 bg-[#0a0f24]/20" />

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center py-10 lg:py-0 w-full">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16">
          
          {/* ── Right Column: Text, Stats, Tagline ── */}
          <div className="flex flex-col gap-10 w-full lg:max-w-[650px] shrink-0">
            <div
              className="transition-all duration-[1200ms] ease-out"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(32px)',
              }}
            >
              {/* Institutional badge */}
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <span className="inline-block w-10 h-[2px] bg-[#0c7fae] rounded-full" />
                <span className="text-[#7ec8e3] text-xs sm:text-sm font-medium tracking-wide">
                  المجلس التخصصي للجمعيات الشبابية
                </span>
              </div>

              {/* Title */}
              <h1 className="text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.75rem] font-extrabold leading-[1.15] text-white mb-5 md:mb-7">
                اكتشف الجمعيات{' '}
                <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#7ec8e3] via-[#0c7fae] to-[#42b07a]">
                  الشبابية في المملكة
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-white/75 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8 md:mb-10">
                منصة تفاعلية لتعزيز التنسيق والتكامل بين الجمعيات الشبابية
                والجهات ذات العلاقة، وتمكين الوصول السريع للبيانات
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-l from-[#0c7fae] to-[#0a6a91] text-white font-semibold text-sm sm:text-base shadow-[0_4px_24px_rgba(12,127,174,0.35)] hover:shadow-[0_6px_32px_rgba(12,127,174,0.5)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-l from-[#42b07a] to-[#0c7fae] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <svg className="relative w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                  <span className="relative">تصفح الجمعيات الشبابية</span>
                </button>
                <button className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/[0.07] backdrop-blur-md text-white font-semibold text-sm sm:text-base border border-white/[0.15] hover:bg-white/[0.14] hover:border-white/[0.3] transition-all duration-300 hover:-translate-y-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  <span>سجل جمعيتك الآن</span>
                </button>
              </div>
            </div>

            {/* ── Stats counter bar ── */}
            <div
              className="transition-all duration-[1400ms] delay-500 ease-out"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(24px)',
              }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/[0.06] backdrop-blur-md border border-white/[0.08]">
                {STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center py-5 sm:py-6 px-3 bg-white/[0.03] hover:bg-white/[0.07] transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-[#7ec8e3]/70">{stat.icon}</div>
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tabular-nums" dir="ltr">
                        {formatNumber(countValues[i], stat.format)}{stat.suffix}
                      </span>
                    </div>
                    <span className="text-white/50 text-xs sm:text-sm font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Bottom tagline ── */}
            <div
              className="transition-all duration-[1200ms] delay-700 ease-out"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0c7fae]/20 backdrop-blur-sm border border-[#0c7fae]/20">
                  <svg className="w-4 h-4 text-[#7ec8e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-white/50 text-xs sm:text-sm tracking-wide">
                  رؤية شبابية، بيانات دقيقة، تمكين مستدام
                </p>
              </div>
            </div>
          </div>

          {/* ── Left Column: Animated Map ── */}
          <div 
            className="flex justify-center lg:justify-end items-center relative w-full lg:w-[45%] xl:w-[800px] shrink-0 transition-all duration-[1500ms] ease-out mt-8 lg:mt-0 py-10"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'scale(1) translateX(0)' : 'scale(0.9) translateX(-40px)',
              transitionDelay: '400ms'
            }}
          >
            {/* Glowing Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#0c7fae]/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[250px] h-[200px] md:h-[250px] bg-[#42b07a]/20 rounded-full blur-[60px] pointer-events-none mix-blend-screen" />

            <div className="relative w-full drop-shadow-[0_0_35px_rgba(12,127,174,0.3)]">
              <svg viewBox="0 0 700 620" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                {SAUDI_REGIONS.map((region, i) => (
                  <path
                    key={region.id}
                    d={region.svgPath}
                    fill="rgba(12, 127, 174, 0.15)"
                    stroke="rgba(126, 200, 227, 0.8)"
                    strokeWidth={1.5}
                    style={{
                      strokeDasharray: 2000,
                      strokeDashoffset: mounted ? 0 : 2000,
                      transition: `stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1) ${i * 100 + 500}ms, fill 1.5s ease ${i * 100 + 1500}ms`,
                      fillOpacity: mounted ? 1 : 0
                    }}
                    className="hover:fill-[rgba(12,127,174,0.4)] hover:stroke-white transition-colors duration-300 cursor-pointer"
                  />
                ))}

                {/* Animated Pins */}
                {mounted && (
                  <>
                    <g transform={`translate(${SAUDI_REGIONS.find(r => r.id === 'riyadh')?.cx! + 155}, ${SAUDI_REGIONS.find(r => r.id === 'riyadh')?.cy! + 25})`} className="animate-bounce" style={{ animationDelay: '2000ms' }}>
                      <circle r="18" fill="none" stroke="#42b07a" strokeWidth="1.5" className="animate-ping" opacity="0.6" style={{ animationDuration: '2s' }} />
                      <circle r="6" fill="#42b07a" />
                    </g>
                    <g transform={`translate(${SAUDI_REGIONS.find(r => r.id === 'makkah')?.cx! + 155}, ${SAUDI_REGIONS.find(r => r.id === 'makkah')?.cy! + 25})`} className="animate-bounce" style={{ animationDelay: '2200ms' }}>
                      <circle r="5" fill="#7ec8e3" />
                    </g>
                    <g transform={`translate(${SAUDI_REGIONS.find(r => r.id === 'eastern')?.cx! + 155}, ${SAUDI_REGIONS.find(r => r.id === 'eastern')?.cy! + 25})`} className="animate-bounce" style={{ animationDelay: '2400ms' }}>
                      <circle r="5" fill="#7ec8e3" />
                    </g>
                  </>
                )}
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-[1200ms] delay-700 ease-out"
        style={{ opacity: mounted ? 1 : 0 }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

