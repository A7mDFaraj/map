'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SAUDI_REGIONS } from '@/data/mapRegionsData';

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#060B17] overflow-hidden">
      
      {/* Subtle Atmospheric Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          className="absolute top-[0%] left-[10%] w-[40%] h-[40%] bg-[#1C81AC] rounded-full filter blur-[180px] opacity-10"
          animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] bg-[#233A77] rounded-full filter blur-[180px] opacity-20"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 w-full z-10 py-20 lg:py-0 relative">
        
        <div className="flex flex-col lg:flex-row-reverse items-center gap-0 lg:gap-8" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
          
          {/* Left Column: Visual (Map) */}
          <div className="w-full lg:w-1/2 flex justify-center 2xl:justify-start items-center relative min-h-[320px] lg:min-h-[600px]">
            <div className="absolute inset-0 bg-[#1C81AC] opacity-20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="w-full aspect-square max-w-[450px] 2xl:max-w-[750px] relative z-10 transition-all duration-500">
              <svg 
                viewBox="0 0 730 600" 
                className="w-full h-full drop-shadow-[0_0_15px_rgba(28,129,172,0.5)]"
                style={{ filter: "drop-shadow(0px 0px 8px rgba(28,129,172,0.8))" }}
              >
                {SAUDI_REGIONS.map((region) => (
                  <motion.path
                    key={region.id}
                    d={region.svgPath}
                    fill="transparent"
                    stroke="#1C81AC"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    animate={{ 
                      pathLength: [0, 1, 1, 0],
                      opacity: [0.2, 1, 1, 0.2]
                    }}
                    transition={{
                      duration: 8,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Right Column: Content */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col items-center text-center z-20 -translate-y-32 lg:translate-y-0 lg:translate-x-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Logo added above the text */}
            <motion.div 
              className="-mb-20 md:-mb-12 lg:-mb-6 relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/brand/newlogo/Hollow logo.svg" 
                alt="Logo" 
                className="h-72 md:h-80 lg:h-96 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              />
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-[72px] font-bold mb-12 leading-[1.3] whitespace-pre-line text-white drop-shadow-xl"
              style={{ fontFamily: 'Thamaynyah, sans-serif' }}
            >
              اكتشف الجمعيات
              <br />
              الشبابية في المملكة
            </motion.h1>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
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
                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-0" />
              </button>
              <button className="px-10 py-4 bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-full font-bold text-xl lg:text-2xl transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-white/15 hover:border-white/30 hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] transform hover:-translate-y-1 w-full sm:w-auto relative overflow-hidden">
                التسجيل
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
