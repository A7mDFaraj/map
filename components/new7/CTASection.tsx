'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export const CTASection = () => {
  return (
    <section 
      className="w-full relative py-20 md:py-28 bg-transparent overflow-hidden" 
      style={{ fontFamily: 'Thamaynyah, sans-serif' }}
    >
      {/* Full-width Section Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-l from-white via-white to-[#1C81AC] pb-2 mb-6 leading-[1.25]"
        >
          هل أنت ممثل لجمعية شبابية؟
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl font-normal"
        >
          سجل جمعيتك مجاناً واحصل على ملف تعريفي شامل وإمكانية التواصل المباشر مع المهتمين والداعمين
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full"
        >
          <motion.button 
            className="w-full sm:w-auto px-10 py-4 bg-[#1C81AC]/20 backdrop-blur-xl border border-white/20 text-white rounded-full font-bold text-xl transition-all duration-300 shadow-[0_8px_32px_rgba(28,129,172,0.3)] hover:bg-[#1C81AC]/40 hover:border-white/40 hover:shadow-[0_8px_32px_rgba(28,129,172,0.5)] transform hover:-translate-y-1 flex items-center justify-center gap-3 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-3">
              سجل جمعيتك الآن
              <ArrowLeft className="w-5 h-5 rtl:rotate-0 group-hover:-translate-x-1.5 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-0" />
          </motion.button>

          <motion.button 
            className="w-full sm:w-auto px-10 py-4 bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-full font-bold text-xl transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-white/15 hover:border-white/30 hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] transform hover:-translate-y-1 flex items-center justify-center relative overflow-hidden"
          >
            تعرف على المزايا
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
