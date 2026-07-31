'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, BookOpen } from 'lucide-react';
import { SAUDI_REGIONS } from '@/data/mapRegionsData';
import { AuroraText } from '@/components/magicui/AuroraText';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative bg-[#f6f7fb] overflow-hidden min-h-screen h-screen flex items-center justify-center pt-12 pb-8">
      
      {/* 
        Subtle & Thin Right Vertical Identity Strip (الشريط الجانبي الأنيق للهوية)
        - Subtle, narrow vertical strip that stays elegant without overwhelming content
      */}
      <div 
        aria-hidden
        className="absolute top-0 right-0 bottom-0 pointer-events-none flex z-10 opacity-80" 
        dir="ltr"
      >
        {/* 1. Thin Subtle White Pattern Strip */}
        <div 
          className="w-8 sm:w-12 md:w-16 lg:w-20 h-full bg-white/90 bg-repeat-y bg-contain bg-right border-r border-[#e4e6f0]/50"
          style={{ 
            backgroundImage: "url('/brand/logo/frame.svg')",
            backgroundSize: '90px auto',
          }}
        />

        {/* 2. Thin Solid Vertical Gradient Bar (FAR RIGHT EDGE) */}
        <div 
          className="w-1.5 sm:w-2 md:w-2.5 h-full shrink-0"
          style={{
            background: 'linear-gradient(180deg, #3EB985 0%, #1C81AC 100%)',
          }}
        />
      </div>

      {/* Main Content & 3D Map Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pr-12 sm:pr-16 md:pr-24 lg:pr-28">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Content Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-right">
            
            {/* Compact Main Headline with AuroraText Gradient */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#233A77] tracking-tight leading-[1.18]">
              <AuroraText colors={['#233A77', '#1C81AC', '#3EB985', '#233A77']}>
                اكتشف الجمعيات
              </AuroraText>
              <span className="block text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#233A77]/85 mt-1.5">
                الشبابية في المملكة
              </span>
            </h1>

            {/* Smaller, Breathable Subtitle Text */}
            <p className="mt-3 text-xs sm:text-sm text-[#233A77]/75 font-medium leading-relaxed max-w-lg">
              منصة تفاعلية لتعزيز التنسيق والتكامل بين الجمعيات الشبابية والجهات ذات العلاقة، وتمكين الوصول السريع للبيانات
            </p>

            {/* Clear, Aligned CTA Buttons Row with Equal Rhythm */}
            <div className="mt-6 flex items-center gap-3 w-full sm:w-auto">
              
              {/* Primary Action Pill Button */}
              <a
                href="#featured"
                className="px-6 py-3 bg-[#233A77] hover:bg-[#1a2c5a] text-white rounded-full font-bold text-xs shadow-md shadow-[#233A77]/15 flex items-center justify-center gap-2 group transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#3EB985]" />
                <span>تصفح الجمعيات الشبابية</span>
              </a>

              {/* True Secondary Pill Button */}
              <button
                onClick={() => {
                  const modalBtn = document.querySelector('[data-register-btn]') as HTMLButtonElement;
                  if (modalBtn) modalBtn.click();
                }}
                className="px-6 py-3 bg-white hover:bg-[#f6f7fb] text-[#233A77] border border-[#e4e6f0] hover:border-[#1C81AC]/40 rounded-full font-bold text-xs shadow-2xs flex items-center justify-center gap-2 transition-all"
              >
                <Building2 className="w-4 h-4 text-[#1C81AC]" />
                <span>سجل جمعيتك الآن</span>
              </button>

            </div>

            {/* Bottom Tagline & Saudi Palm Emblem Section */}
            <div className="mt-10 pt-4 border-t border-[#e4e6f0] flex items-center gap-3.5 text-xs font-bold text-[#233A77]/70">
              {/* Saudi Palm & Swords Emblem Icon */}
              <div className="w-7 h-7 rounded-lg bg-[#233A77]/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 fill-[#233A77]" viewBox="0 0 24 24">
                  <path d="M12 2L10 6H14L12 2ZM12 7C9.5 7 7.5 9 7.5 11.5C7.5 13.5 9 15.2 11 15.8V22H13V15.8C15 15.2 16.5 13.5 16.5 11.5C16.5 9 14.5 7 12 7ZM5 16L3 20H8L6.5 17L5 16ZM19 16L17.5 17L16 20H21L19 16Z" />
                </svg>
              </div>

              <div className="h-5 w-px bg-[#e4e6f0]" />

              <span>رؤية شبابية، بيانات دقيقة، تمكين مستدام</span>
            </div>

          </div>

          {/* ULTRA-PREMIUM 3D WHITE SLAB SAUDI MAP VISUAL (6 cols) */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-2">
            
            {/* Soft Ambient Radial Spotlight */}
            <div className="absolute w-[480px] h-[480px] bg-[#1C81AC]/10 rounded-full blur-3xl pointer-events-none" />

            {/* 
              Full Saudi Arabia 3D White Slab Visual (Complete 13 Regions)
              - Iterates over all regional paths individually to render 100% complete map
              - High-contrast 3D lighting, crisp bevel highlights, and sharp multi-depth extrusion
            */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1.05, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-[620px] aspect-[4/3] flex items-center justify-center"
              style={{
                perspective: '1300px',
              }}
            >
              <div 
                className="w-full h-full relative flex items-center justify-center transition-all duration-700 ease-out hover:scale-[1.04]"
                style={{
                  transform: 'rotateX(32deg) rotateZ(-18deg) rotateY(4deg)',
                  transformStyle: 'preserve-3d',
                  filter: 'drop-shadow(0px 24px 40px rgba(35, 58, 119, 0.22)) drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.10))',
                }}
              >
                <svg
                  viewBox="0 0 730 600"
                  className="w-full h-full overflow-visible"
                >
                  <defs>
                    {/* Seamless Pattern Tile: Exact Dimensions matching frame.svg viewBox (214 x 169) */}
                    <pattern
                      id="saudiSeamlessCircuitPattern"
                      width="214"
                      height="169"
                      patternUnits="userSpaceOnUse"
                    >
                      <image 
                        href="/brand/logo/frame.svg" 
                        width="214" 
                        height="169" 
                        preserveAspectRatio="none" 
                      />
                    </pattern>

                    {/* High Contrast Bevel Edge Gradient */}
                    <linearGradient id="sharpBevelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1C81AC" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#3EB985" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#1C81AC" stopOpacity="0.7" />
                    </linearGradient>

                    {/* Glossy Top Ceramic Surface */}
                    <linearGradient id="sharpGlossSurface" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0.95" />
                    </linearGradient>
                  </defs>

                  {/* 
                    STACKED SHARP 3D EXTRUSION LAYERS FOR ALL 13 REGIONS
                    Rendered individually so relative path SVG coordinates 'm' compile 100% cleanly
                  */}
                  {[16, 14, 12, 10, 8, 6, 4, 2].map((offset, i) => (
                    <g key={offset} transform={`translate(0, ${offset})`}>
                      {SAUDI_REGIONS.map((region) => (
                        <path
                          key={`slab-ext-${region.id}-${offset}`}
                          d={region.svgPath}
                          fill={i > 4 ? '#b0bec5' : '#cfd8dc'}
                          stroke="#90a4ae"
                          strokeWidth="0.8"
                        />
                      ))}
                    </g>
                  ))}

                  {/* TOP GLOSSY WHITE CERAMIC SLAB SURFACE FOR ALL 13 REGIONS */}
                  {SAUDI_REGIONS.map((region) => (
                    <g key={`slab-surface-${region.id}`}>
                      {/* Base White Surface */}
                      <path
                        d={region.svgPath}
                        fill="url(#sharpGlossSurface)"
                        stroke="#ffffff"
                        strokeWidth="2.5"
                      />

                      {/* Seamless Etched Design Pattern */}
                      <path
                        d={region.svgPath}
                        fill="url(#saudiSeamlessCircuitPattern)"
                        stroke="none"
                      />

                      {/* #EEF3F8 Circuit Line Overlay */}
                      <path
                        d={region.svgPath}
                        fill="none"
                        stroke="#EEF3F8"
                        strokeWidth="2.2"
                        strokeOpacity="0.9"
                      />

                      {/* Regional Border Lines inside the slab */}
                      <path
                        d={region.svgPath}
                        fill="none"
                        stroke="url(#sharpBevelGradient)"
                        strokeWidth="1.6"
                        strokeOpacity="0.8"
                      />
                    </g>
                  ))}

                </svg>
              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};
