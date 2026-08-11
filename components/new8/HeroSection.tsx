'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SAUDI_REGIONS } from '@/data/mapRegionsData';

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#060B17] overflow-hidden">
            <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 w-full z-10 py-20 lg:py-0 relative">
        
        <div className="flex flex-col lg:flex-row-reverse items-center gap-0 lg:gap-8" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
          
          {/* Left Column: Video */}
          <div className="w-full lg:w-1/2 flex justify-center 2xl:justify-start items-center relative min-h-[320px] lg:min-h-[600px]">
            <div className="w-full relative z-10 p-4 lg:p-8">
              <video 
                src="/خريطة 002 copy.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-auto object-cover rounded-md shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col items-center text-center z-20 -translate-y-24 lg:translate-y-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Logo added above the text */}
            <motion.div 
              className="-mb-16 md:-mb-10 lg:-mb-4 relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/brand/newlogo/Hollow logo.svg" 
                alt="Logo" 
                className="h-48 md:h-56 lg:h-72 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              />
            </motion.div>

            <motion.h1 
              className="flex flex-col items-center justify-center gap-1 sm:gap-2 mb-6 text-white drop-shadow-xl"
              style={{ fontFamily: 'Thamaynyah, sans-serif' }}
            >
              <span className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white/95 tracking-wide">
                اكتشف 210
              </span>
              <span className="text-5xl sm:text-[56px] lg:text-[60px] font-bold leading-tight">
                جمعية شبابية
              </span>
              <span className="text-2xl sm:text-3xl lg:text-[36px] font-medium text-white/80">
                حول المملكة
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 leading-[1.6] max-w-lg mx-auto drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontFamily: 'Thamaynyah, sans-serif' }}
            >
              عبر خارطة وطنية تفاعلية، تُسهّل الوصول
              <br />
              إلى بياناتها وبرامجها ومبادراتها
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ fontFamily: 'Thamaynyah, sans-serif' }}
            >
              <button 
                onClick={() => {
                  document.getElementById('interactive-map')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-10 py-4 bg-[#1C81AC]/20 backdrop-blur-xl border border-white/20 text-white rounded-full font-bold text-xl lg:text-2xl transition-all duration-300 shadow-[0_8px_32px_rgba(28,129,172,0.3)] hover:bg-[#1C81AC]/40 hover:border-white/40 hover:shadow-[0_8px_32px_rgba(28,129,172,0.5)] transform hover:-translate-y-1 w-full sm:w-auto relative overflow-hidden group"
              >
                <span className="relative z-10">تصفح الخارطة</span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-0" />
              </button>
              <button className="px-10 py-4 bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-full font-bold text-xl lg:text-2xl transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-white/15 hover:border-white/30 hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] transform hover:-translate-y-1 w-full sm:w-auto relative overflow-hidden">
                التسجيل
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Partner Logo at Bottom Left */}
      <div className="absolute bottom-12 left-16 2xl:left-24 z-30 hidden lg:flex flex-col items-center group cursor-pointer">
        <div className="text-white/60 text-xs lg:text-sm mb-2 font-sans relative z-10 transition-colors duration-300 group-hover:text-white/90 font-medium tracking-wide" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
          شريك استراتيجي
        </div>
        <img 
          src="/partner/al-rajhi-humanitarian.svg" 
          alt="Al Rajhi Humanitarian Foundation" 
          className="h-10 xl:h-12 w-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 relative z-10 drop-shadow-md"
        />
      </div>

      {/* Mobile version of Partner Logo */}
      <div className="absolute bottom-8 left-8 z-30 flex lg:hidden flex-col items-center group cursor-pointer">
        <div className="text-white/60 text-[10px] sm:text-xs mb-1 font-sans relative z-10 transition-colors duration-300 group-hover:text-white/90 font-medium" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
          شريك استراتيجي
        </div>
        <img 
          src="/partner/al-rajhi-humanitarian.svg" 
          alt="Al Rajhi Humanitarian Foundation" 
          className="h-8 sm:h-9 w-auto object-contain filter brightness-0 invert opacity-80 drop-shadow-sm"
        />
      </div>
    </section>
  );
};
