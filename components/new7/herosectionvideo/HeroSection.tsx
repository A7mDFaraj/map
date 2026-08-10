'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#060B17] overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/خريطة 002 copy.mp4" type="video/mp4" />
        </video>
        {/* Optional overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 w-full z-10 py-20 lg:py-0 relative">
        
        <div className="flex flex-col lg:flex-row-reverse items-center gap-0 lg:gap-8" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
          
          {/* Left Spacer for Map in Video */}
          <div className="hidden lg:block w-full lg:w-1/2 relative min-h-[320px] lg:min-h-[600px] pointer-events-none">
            {/* The video contains the map visually in this area */}
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
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold mb-6 leading-[1.3] whitespace-pre-line text-white drop-shadow-xl"
              style={{ fontFamily: 'Thamaynyah, sans-serif' }}
            >
              اكتشف الجمعيات
              <br />
              الشبابية في المملكة
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-lg sm:text-xl lg:text-[22px] text-white/90 mb-10 leading-[1.6] max-w-lg mx-auto drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontFamily: 'Thamaynyah, sans-serif' }}
            >
              سجل جمعيتك مجاناً واحصل على ملف تعريفي
              <br />
              شامل وإمكانية التواصل المباشر مع المهتمين والداعمين
            </motion.p>

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

      {/* Partner Logo at Bottom Left */}
      <div className="absolute bottom-8 left-8 z-30 hidden md:block group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C81AC]/0 via-[#1C81AC]/20 to-[#3EB985]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl pointer-events-none" />
        <div className="text-white/60 text-sm mb-2 font-sans relative z-10 transition-colors duration-300 group-hover:text-white/90" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
          شريك استراتيجي
        </div>
        <img 
          src="/partner/al-rajhi-humanitarian.svg" 
          alt="Al Rajhi Humanitarian Foundation" 
          className="h-14 w-auto object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 relative z-10"
        />
      </div>

      {/* Mobile version of Partner Logo */}
      <div className="absolute bottom-4 left-4 z-30 block md:hidden group cursor-pointer">
        <img 
          src="/partner/al-rajhi-humanitarian.svg" 
          alt="Al Rajhi Humanitarian Foundation" 
          className="h-10 w-auto object-contain filter brightness-0 invert opacity-80"
        />
      </div>
    </section>
  );
};
