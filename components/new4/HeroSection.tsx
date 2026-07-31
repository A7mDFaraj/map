'use client';

import React from 'react';
import { AuroraBackground } from './AuroraBackground';
import { Navbar } from './Navbar';
import { LogoMaskHeroVisual } from './LogoMaskHeroVisual';
import { 
  Search, 
  UserPlus, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Award 
} from 'lucide-react';

interface HeroSectionProps {
  onOpenRegister?: () => void;
}

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function HeroSection({ onOpenRegister }: HeroSectionProps) {
  const mounted = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <AuroraBackground className="min-h-screen flex flex-col justify-between" showParticles={true}>
      {/* Navbar */}
      <Navbar onOpenRegister={onOpenRegister} />

      {/* Main Minimalist Hero */}
      <section className="relative z-10 pt-32 pb-20 lg:pt-44 lg:pb-32 w-full flex-1 flex flex-col justify-center" dir="rtl">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Right Column: High-Impact Minimalist Text */}
            <div className="lg:col-span-7 flex flex-col items-start gap-8 text-right">
              
              {/* Minimalist Institutional Badge */}
              <div 
                className="transition-all duration-1000 ease-out"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/15 shadow-[0_4px_20px_rgba(28,129,172,0.12)]">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3EB985] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3EB985]"></span>
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">
                    المجلس التخصصي للجمعيات الشبابية
                  </span>
                </div>
              </div>

              {/* Bold Minimalist Title */}
              <div
                className="transition-all duration-1000 delay-150 ease-out"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.12] text-white tracking-tight">
                  تمكين الشباب،{' '}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3EB985] via-[#7ec8e3] to-[#1C81AC] filter drop-shadow-[0_0_30px_rgba(28,129,172,0.4)]">
                    بنهج يعيد تعريف المستقبل
                  </span>
                </h1>
              </div>

              {/* Refined Paragraph */}
              <p
                className="text-lg sm:text-2xl text-white/80 leading-relaxed font-normal max-w-2xl transition-all duration-1000 delay-300 ease-out"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                المنصة التخصصية الرائدة للتكامل الوطني، حوكمة المبادرات، وتوسيع الأثر التنموي للجمعيات الشبابية عبر كافة مناطق المملكة.
              </p>

              {/* Streamlined Action Buttons */}
              <div
                className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto transition-all duration-1000 delay-450 ease-out"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                {/* Primary Button */}
                <a
                  href="#associations"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4.5 rounded-2xl bg-gradient-to-r from-[#1C81AC] via-[#233A77] to-[#3EB985] bg-[length:200%_auto] hover:bg-right text-white font-bold text-base shadow-[0_10px_35px_rgba(28,129,172,0.4)] hover:shadow-[0_14px_45px_rgba(62,185,133,0.5)] transition-all duration-500 hover:-translate-y-1 group"
                >
                  <Search className="w-5 h-5 text-white/90 group-hover:scale-110 transition-transform" />
                  <span>تصفح الجمعيات الشبابية</span>
                  <ArrowLeft className="w-5 h-5 text-white/80 group-hover:-translate-x-1.5 transition-transform" />
                </a>

                {/* Secondary Button */}
                <button
                  onClick={onOpenRegister}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <UserPlus className="w-5 h-5 text-[#3EB985]" />
                  <span>سجّل جمعيتك الآن</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div 
                className="flex flex-wrap items-center gap-8 pt-6 text-white/70 text-xs sm:text-sm font-medium border-t border-white/10 w-full transition-all duration-1000 delay-600 ease-out"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#3EB985]" />
                  <span>منصة رسمية معتمدة</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#1C81AC]" />
                  <span>حوكمة وبيانات دقيقة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4.5 h-4.5 text-amber-400" />
                  <span>استدامة وتميز مؤسسي</span>
                </div>
              </div>

            </div>

            {/* Left Column: LogoMaskHeroVisual Component */}
            <div 
              className="lg:col-span-5 flex justify-center items-center transition-all duration-1000 delay-300 ease-out"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'scale(1)' : 'scale(0.94)',
              }}
            >
              <LogoMaskHeroVisual imageSrc="/scy_youth_innovation.png" />
            </div>

          </div>

        </div>
      </section>
    </AuroraBackground>
  );
}
