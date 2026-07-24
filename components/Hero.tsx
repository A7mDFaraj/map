'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, MapPin, Building2, Users, Activity, ShieldCheck } from 'lucide-react';
import { TOTAL_NATIONAL_METRICS, SAUDI_REGIONS } from '../data/mapRegionsData';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  return (
    <section id="hero" className="relative min-h-[95vh] pt-32 pb-20 flex items-center justify-center overflow-hidden hero-gradient">
      
      {/* Accurate 3D Geometric Background instead of random blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#0c7fae]/10 to-transparent skew-x-12 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#42b07a]/10 to-transparent -skew-x-12 -z-10" />

      {/* Decorative Grid Pattern Overlay */}
      <div className="absolute inset-0 brand-pattern-bg opacity-10 pointer-events-none mix-blend-overlay" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full h-full flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Right Text Column (RTL Order) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-right">
            
            {/* Tagline Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs sm:text-sm font-bold shadow-lg mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#42b07a]" />
              <span>رؤية شبابية • بيانات دقيقة • تمكين مستدام</span>
            </motion.div>

            {/* Main Title H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6"
            >
              اكتشف الجمعيات{' '}
              <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-emerald-300 to-white bg-clip-text text-transparent">
                الشبابية في المملكة
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl mb-10"
            >
              منصة تفاعلية لتعزيز التنسيق والتكامل بين الجمعيات الشبابية والجهات ذات العلاقة، وتمكين الوصول السريع للبيانات
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#interactive-map"
                className="w-full sm:w-auto px-8 py-4 bg-[#0c7fae] hover:bg-[#0a6a91] text-white rounded-2xl font-extrabold text-base shadow-xl shadow-[#0c7fae]/30 flex items-center justify-center gap-3 transition-all hover:scale-105"
              >
                <MapPin className="w-5 h-5 text-emerald-300" />
                <span>تصفح الجمعيات الشبابية</span>
              </a>

              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-2xl font-extrabold text-base flex items-center justify-center gap-3 transition-all hover:scale-105"
              >
                <Building2 className="w-5 h-5 text-cyan-300" />
                <span>سجل جمعيتك الآن</span>
              </button>
            </motion.div>
          </div>

          {/* Left Visual Column: The Animated Frame + Map + Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center w-full max-w-lg mx-auto"
          >
            {/* The Brand Frame wrapper */}
            <div className="relative w-full aspect-square flex items-center justify-center">
              
              {/* Outer Glow behind the frame */}
              <div className="absolute inset-0 bg-[#0c7fae]/30 rounded-full blur-[80px] animate-pulse-glow" />

              {/* The frame.svg */}
              <div className="absolute inset-0 z-10 opacity-90 drop-shadow-2xl mix-blend-screen scale-110">
                <Image 
                  src="/brand/logo/frame.svg" 
                  alt="Decorative Frame" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>

              {/* The minimal logo floating inside */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-30 right-4 top-4 w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-3 shadow-2xl"
              >
                <Image src="/brand/logo/logo-minimal.svg" alt="SCY Logo" fill className="object-contain p-2" />
              </motion.div>

              {/* The Scattered Puzzle Vector Map of Saudi Arabia */}
              <div className="relative z-20 w-[95%] h-[95%] flex items-center justify-center">
                <svg viewBox="0 0 730 600" className="w-full h-full drop-shadow-[0_20px_30px_rgba(12,127,174,0.3)] overflow-visible">
                  <g className="regions">
                    {SAUDI_REGIONS.map((region, index) => {
                      const randomX = Math.sin(index * 13) * 300;
                      const randomY = Math.cos(index * 17) * 300;
                      const randomRotate = Math.sin(index * 19) * 45;

                      return (
                        <motion.path
                          key={`top-${region.id}`}
                          id={`hero-${region.id}`}
                          d={region.svgPath}
                          fill="#1C81AC"
                          stroke="#ffffff"
                          strokeWidth="1.5"
                          initial={{ 
                            scale: 0.8, 
                            x: randomX, 
                            y: randomY, 
                            rotate: randomRotate, 
                            opacity: 0,
                            fillOpacity: 0.15
                          }}
                          animate={{ 
                            scale: 1, 
                            x: 0, 
                            y: 0, 
                            rotate: 0, 
                            opacity: 1,
                            fillOpacity: [0.15, 0.4, 0.15]
                          }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 40, 
                            damping: 12, 
                            mass: 1.5,
                            delay: index * 0.08,
                            fillOpacity: {
                              repeat: Infinity,
                              duration: 4,
                              ease: "easeInOut",
                              delay: 2 + (index * 0.1)
                            }
                          }}
                          whileHover={{ 
                            scale: 1.04, 
                            y: -6, 
                            fillOpacity: 0.8,
                            zIndex: 50
                          }}
                          className="cursor-pointer origin-center drop-shadow-md hover:drop-shadow-[0_10px_15px_rgba(28,129,172,0.5)] transition-all duration-300"
                        />
                      );
                    })}
                  </g>
                  
                  {/* Glowing Pins */}
                  {SAUDI_REGIONS.map((region, idx) => (
                    <motion.g 
                      key={`pin-${region.id}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2 + idx * 0.1, duration: 0.8 }}
                    >
                      <motion.circle
                        cx={region.cx}
                        cy={region.cy}
                        r={6}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth={2}
                        initial={{ r: 6, opacity: 0.8 }}
                        animate={{ r: 18, opacity: 0 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: idx * 0.15 }}
                      />
                      <circle
                        cx={region.cx}
                        cy={region.cy}
                        r={4}
                        fill="#ffffff"
                        className="drop-shadow-[0_0_8px_#ffffff]"
                      />
                    </motion.g>
                  ))}
                </svg>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Real-time National Metrics Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border-t border-l border-white/40 border-b-black/20 border-r-black/20 shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative z-20"
        >
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-white/10 to-transparent shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_rgba(0,0,0,0.2),5px_10px_15px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-6 h-6 text-cyan-400 drop-shadow-md" />
              <span className="text-4xl font-black text-white drop-shadow-lg">{TOTAL_NATIONAL_METRICS.growthPercentage}%</span>
            </div>
            <span className="text-sm text-slate-200 font-bold tracking-wide">نسبة نمو محققة</span>
          </div>

          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-white/10 to-transparent shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_rgba(0,0,0,0.2),5px_10px_15px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-6 h-6 text-emerald-400 drop-shadow-md" />
              <span className="text-4xl font-black text-white drop-shadow-lg">+{(TOTAL_NATIONAL_METRICS.totalBeneficiaries / 1000).toFixed(0)} ألف</span>
            </div>
            <span className="text-sm text-slate-200 font-bold tracking-wide">مستفيد بشكل سنوي</span>
          </div>

          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-white/10 to-transparent shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_rgba(0,0,0,0.2),5px_10px_15px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-6 h-6 text-cyan-300 drop-shadow-md" />
              <span className="text-4xl font-black text-white drop-shadow-lg">+{SAUDI_REGIONS.length}</span>
            </div>
            <span className="text-sm text-slate-200 font-bold tracking-wide">منطقة مغطاة</span>
          </div>

          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-white/10 to-transparent shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_rgba(0,0,0,0.2),5px_10px_15px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-6 h-6 text-[#42b07a] drop-shadow-md" />
              <span className="text-4xl font-black text-emerald-400 drop-shadow-lg">+{TOTAL_NATIONAL_METRICS.totalAssociations}</span>
            </div>
            <span className="text-sm text-slate-200 font-bold tracking-wide">جمعية موثقة رسمياً</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
