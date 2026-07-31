'use client';

import React from 'react';
import LogoMaskImage from '../LogoMaskImage';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';

interface LogoMaskHeroVisualProps {
  imageSrc?: string;
}

export function LogoMaskHeroVisual({
  imageSrc = '/scy_youth_innovation.png',
}: LogoMaskHeroVisualProps) {
  return (
    <div className="relative w-full flex items-center justify-center py-4">
      {/* Background Soft Glows */}
      <div className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] bg-gradient-to-tr from-[#1C81AC]/30 via-[#3EB985]/35 to-transparent rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse-glow" />
      <div className="absolute w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] bg-[#233A77]/40 rounded-full blur-[70px] pointer-events-none mix-blend-screen" />

      {/* Outer Decorative Ring */}
      <div className="absolute inset-x-0 mx-auto w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] rounded-full border border-white/10 pointer-events-none animate-spin-slow" />
      <div className="absolute inset-x-0 mx-auto w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full border border-dashed border-[#3EB985]/20 pointer-events-none" />

      {/* Main Glass Visual Frame Container */}
      <div className="relative z-10 w-full max-w-[460px] sm:max-w-[500px] p-6 sm:p-8 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/15 shadow-[0_30px_70px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-white/30 group">
        
        {/* Top Brand Highlight Tag */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-[#3EB985]/20 text-[#3EB985] border border-[#3EB985]/30">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
              الهوية التمكينية للشباب
            </span>
          </div>
          <span className="text-white/60 text-xs font-medium">SCY Identity 2026</span>
        </div>

        {/* The LogoMaskImage Component */}
        <div className="relative w-full overflow-hidden rounded-2xl drop-shadow-[0_15px_35px_rgba(28,129,172,0.35)] transition-transform duration-700 group-hover:scale-[1.02]">
          <LogoMaskImage
            src={imageSrc}
            alt="المجلس التخصصي للجمعيات الشبابية"
            className="w-full h-auto"
          />
        </div>

        {/* Bottom Floating Glass Card Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-white text-xs font-medium backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-[#3EB985]" />
            <span>منظومة معتمدة</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-white text-xs font-medium backdrop-blur-md">
            <Zap className="w-4 h-4 text-[#1C81AC]" />
            <span>ابتكار وتمكين</span>
          </div>
        </div>

      </div>
    </div>
  );
}
