'use client';

import React, { useEffect, useState, useRef } from 'react';
import { AuroraBackground } from './AuroraBackground';
import { Navbar } from './Navbar';
import { TOTAL_NATIONAL_METRICS, SAUDI_REGIONS } from '@/data/mapRegionsData';
import { 
  Building2, 
  Users, 
  Zap, 
  MapPin, 
  Search, 
  UserPlus, 
  Compass, 
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Award
} from 'lucide-react';

// Count-up hook
function useCountUp(target: number, duration = 2200, start = false) {
  const [value, setValue] = useState(0);
  const ref = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const elapsed = now - t0;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // easeOutQuart
      setValue(Math.round(target * eased));
      if (progress < 1) ref.current = requestAnimationFrame(tick);
    };
    ref.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(ref.current);
  }, [target, duration, start]);

  return value;
}

interface HeroSectionProps {
  onOpenRegister?: () => void;
}

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function HeroSection({ onOpenRegister }: HeroSectionProps) {
  const mounted = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [activeRegion, setActiveRegion] = useState<string | null>('riyadh');

  const statAssociations = useCountUp(TOTAL_NATIONAL_METRICS.totalAssociations || 135, 2000, mounted);
  const statBeneficiaries = useCountUp(TOTAL_NATIONAL_METRICS.totalBeneficiaries || 450000, 2400, mounted);
  const statInitiatives = useCountUp(TOTAL_NATIONAL_METRICS.totalInitiatives || 1280, 2200, mounted);
  const statRegions = useCountUp(13, 1800, mounted);

  const stats = [
    {
      label: 'جمعية شبابية',
      value: statAssociations,
      suffix: '+',
      icon: Building2,
      color: 'text-[#1C81AC]',
    },
    {
      label: 'مستفيد ومشارك',
      value: (statBeneficiaries / 1000).toFixed(0),
      suffix: 'K+',
      icon: Users,
      color: 'text-[#3EB985]',
    },
    {
      label: 'مبادرة تمكين رقمية',
      value: statInitiatives,
      suffix: '+',
      icon: Zap,
      color: 'text-amber-400',
    },
    {
      label: 'منطقة إدارية',
      value: statRegions,
      suffix: '',
      icon: MapPin,
      color: 'text-[#7ec8e3]',
    },
  ];

  const highlightedBeacons = [
    { id: 'riyadh', name: 'الرياض', x: 420, y: 310, count: '42 جمعية' },
    { id: 'makkah', name: 'مكة المكرمة', x: 230, y: 340, count: '28 جمعية' },
    { id: 'eastern', name: 'المنطقة الشرقية', x: 530, y: 260, count: '22 جمعية' },
    { id: 'madinah', name: 'المدينة المنورة', x: 220, y: 250, count: '16 جمعية' },
    { id: 'asir', name: 'عسير', x: 260, y: 460, count: '14 جمعية' },
  ];

  return (
    <AuroraBackground className="min-h-screen flex flex-col justify-between" showParticles={true}>
      {/* Top Navbar */}
      <Navbar onOpenRegister={onOpenRegister} />

      {/* Main Hero Container */}
      <section className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24 w-full flex-1 flex flex-col justify-center" dir="rtl">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Right Column: Hero Content */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 text-right">
              
              {/* Institutional Animated Badge */}
              <div 
                className="transition-all duration-1000 ease-out"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/15 shadow-[0_4px_20px_rgba(28,129,172,0.15)]">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3EB985] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#3EB985]"></span>
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">
                    المجلس التخصصي للجمعيات الشبابية (SCY)
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#3EB985]/20 text-[#3EB985] font-bold border border-[#3EB985]/30">
                    الهوية الوطنية الرسمية
                  </span>
                </div>
              </div>

              {/* Main Headline with Aurora Text Glow */}
              <div
                className="transition-all duration-1000 delay-150 ease-out"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.18] text-white tracking-tight">
                  منظومة تخصصية{' '}
                  <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3EB985] via-[#7ec8e3] to-[#1C81AC] filter drop-shadow-[0_0_25px_rgba(28,129,172,0.4)]">
                    لتمكين العمل الشبابي
                  </span>{' '}
                  في المملكة
                </h1>
              </div>

              {/* Subheadline Paragraph */}
              <p
                className="text-base sm:text-xl text-white/80 leading-relaxed font-normal max-w-2xl transition-all duration-1000 delay-300 ease-out"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                المنصة الوطنية الموحدة لربط وتنسيق الجمعيات الشبابية عبر المناطق، 
                وتوفير البيانات التفاعلية ومحركات التمكين الاستراتيجي لتحقيق أثر شبابي مستدام.
              </p>

              {/* Action Buttons Group */}
              <div
                className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto transition-all duration-1000 delay-450 ease-out"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                {/* Primary Button */}
                <a
                  href="#associations"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1C81AC] via-[#233A77] to-[#3EB985] bg-[length:200%_auto] hover:bg-right text-white font-bold text-base shadow-[0_8px_30px_rgba(28,129,172,0.4)] hover:shadow-[0_12px_40px_rgba(62,185,133,0.5)] transition-all duration-500 hover:-translate-y-1 group"
                >
                  <Search className="w-5 h-5 text-white/90 group-hover:scale-110 transition-transform" />
                  <span>تصفح الجمعيات الشبابية</span>
                  <ArrowLeft className="w-5 h-5 text-white/80 group-hover:-translate-x-1 transition-transform" />
                </a>

                {/* Secondary Button */}
                <button
                  onClick={onOpenRegister}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <UserPlus className="w-5 h-5 text-[#3EB985]" />
                  <span>تسجيل جمعية جديدة</span>
                </button>

                {/* Interactive Map Link */}
                <a
                  href="#map"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 text-white/90 hover:text-white font-medium text-base hover:underline transition-all"
                >
                  <Compass className="w-5 h-5 text-[#7ec8e3] animate-spin-slow" />
                  <span>استكشف الخريطة التفاعلية</span>
                </a>
              </div>

              {/* Council Key Trust Highlights */}
              <div 
                className="flex flex-wrap items-center gap-6 pt-4 text-white/70 text-xs sm:text-sm font-medium border-t border-white/10 w-full transition-all duration-1000 delay-600 ease-out"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3EB985]" />
                  <span>إشراف وتنسيق تخصصي</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1C81AC]" />
                  <span>بيانات ومؤشرات موثقة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>معايير الحوكمة والتميز</span>
                </div>
              </div>

            </div>

            {/* Left Column: Interactive 3D Brand Saudi Visual */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              
              {/* Outer Aurora Ambient Glow Behind Saudi Map Visual */}
              <div className="absolute w-[350px] sm:w-[480px] h-[350px] sm:h-[480px] bg-gradient-to-tr from-[#1C81AC]/30 via-[#3EB985]/30 to-transparent rounded-full blur-[90px] pointer-events-none mix-blend-screen animate-pulse-glow" />

              {/* Main Saudi Interactive Visual Card */}
              <div 
                className="relative w-full max-w-[540px] bg-white/[0.04] backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-1000 delay-300 ease-out hover:border-white/30"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'scale(1)' : 'scale(0.92)',
                }}
              >
                {/* Decorative Frame Lines */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#3EB985]/20 to-transparent rounded-tr-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#1C81AC]/20 to-transparent rounded-bl-3xl pointer-events-none" />

                {/* Card Top Title Bar */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#1C81AC] to-[#233A77] text-white shadow-md">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base">الخارطة الوطنية التفاعلية</h3>
                      <p className="text-white/60 text-xs">التوزيع الجغرافي للجمعيات الشبابية</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#3EB985]/20 text-[#3EB985] text-xs font-bold border border-[#3EB985]/30 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    تغطية 100%
                  </span>
                </div>

                {/* SVG Saudi Map Vector Overlay with Beacons */}
                <div className="relative w-full h-[260px] sm:h-[300px] flex items-center justify-center">
                  <svg viewBox="0 0 700 620" className="w-full h-full drop-shadow-[0_0_20px_rgba(28,129,172,0.3)]">
                    {SAUDI_REGIONS.map((region) => {
                      const isActive = activeRegion === region.id;
                      return (
                        <path
                          key={region.id}
                          d={region.svgPath}
                          fill={isActive ? 'rgba(62, 185, 133, 0.4)' : 'rgba(28, 129, 172, 0.15)'}
                          stroke={isActive ? '#3EB985' : 'rgba(126, 200, 227, 0.6)'}
                          strokeWidth={isActive ? 2.5 : 1.2}
                          className="transition-all duration-300 cursor-pointer hover:fill-[rgba(28,129,172,0.45)] hover:stroke-white"
                          onClick={() => setActiveRegion(region.id)}
                        />
                      );
                    })}

                    {/* Interactive Animated Beacon Pins */}
                    {highlightedBeacons.map((beacon) => (
                      <g
                        key={beacon.id}
                        transform={`translate(${beacon.x}, ${beacon.y})`}
                        className="cursor-pointer group"
                        onClick={() => setActiveRegion(beacon.id)}
                      >
                        <circle r="14" fill="none" stroke="#3EB985" strokeWidth="1.5" className="animate-ping opacity-60" />
                        <circle r="6" fill={activeRegion === beacon.id ? '#3EB985' : '#7ec8e3'} className="transition-colors group-hover:scale-125" />
                        <circle r="2" fill="#ffffff" />
                      </g>
                    ))}
                  </svg>

                  {/* Active Region Hover Tooltip Box */}
                  {activeRegion && (
                    <div className="absolute bottom-2 right-2 bg-[#0a0f24]/90 backdrop-blur-xl border border-white/20 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-fadeIn">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#3EB985] animate-pulse" />
                      <div>
                        <p className="text-white text-xs font-bold">
                          {SAUDI_REGIONS.find(r => r.id === activeRegion)?.name || 'منطقة الرياض'}
                        </p>
                        <p className="text-[#7ec8e3] text-[11px]">
                          {highlightedBeacons.find(b => b.id === activeRegion)?.count || 'تغطية شاملة'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Floating Info Pill */}
                <div className="mt-4 p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>مبادرات منظومة التمكين الشبابي 2026</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#3EB985] bg-[#3EB985]/10 px-2.5 py-1 rounded-lg border border-[#3EB985]/20">
                    نشط الآن
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Live Metrics Stats Bar */}
          <div 
            className="mt-16 sm:mt-20 w-full transition-all duration-1000 delay-750 ease-out"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center sm:items-start p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-transparent hover:border-white/15 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2.5 rounded-xl bg-white/10 ${stat.color} group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white tracking-tight" dir="ltr">
                        {stat.value}{stat.suffix}
                      </span>
                    </div>
                    <span className="text-white/70 text-xs sm:text-sm font-medium">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </AuroraBackground>
  );
}
