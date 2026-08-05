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
        
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-8" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
          
          {/* Left Column: Visual (Map) */}
          <div className="w-full lg:w-1/2 flex justify-center 2xl:justify-start items-center relative min-h-[400px] lg:min-h-[600px]">
            <div className="absolute inset-0 bg-[#1C81AC] opacity-20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="w-full aspect-square max-w-[550px] 2xl:max-w-[750px] relative z-10 transition-all duration-500">
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
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-start z-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-[72px] font-bold mb-6 pb-4 leading-[1.3] whitespace-pre-line text-white drop-shadow-xl"
              style={{ fontFamily: 'Thamaynyah, sans-serif' }}
            >
              اكتشف الجمعيات
              <br />
              الشبابية في المملكة
            </motion.h1>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
