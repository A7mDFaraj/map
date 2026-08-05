'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import BrandBackground from '@/components/BrandBackground';

export const CTASection = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 relative bg-transparent" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Minimalist Modern CTA Card */}
        <div className="w-full bg-gradient-to-br from-[#1A2A5E] to-[#233A77] border border-[#3EB985]/30 hover:border-[#3EB985]/60 rounded-[2.5rem] p-8 md:p-14 lg:p-16 relative overflow-hidden shadow-2xl shadow-[#3EB985]/5 group transition-[border-color] duration-700">
          
          {/* Brand Background Pattern from BrandBackground component */}
          <BrandBackground 
            variant="dark"
            patternOpacity={0.015}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{ 
              position: 'absolute', 
              backgroundColor: 'transparent',
              maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)'
            }}
          />

          {/* Ambient Lighting Accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial from-[#3EB985]/15 via-[#1C81AC]/5 to-transparent pointer-events-none z-0" />
          <motion.div
            animate={{ scale: [1, 1.15, 1], x: [0, 12, 0], y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 -right-24 w-80 h-80 bg-[#3EB985]/20 rounded-full blur-[90px] pointer-events-none z-0"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, -10, 0], y: [0, 14, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#1C81AC]/20 rounded-full blur-[90px] pointer-events-none z-0"
          />

          {/* Card Content (Centered, Minimalist, Perfect RTL Thamaynyah Typography) */}
          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-[#1C81AC] pb-2 mb-6 leading-[1.3]"
            >
              هل أنت ممثل لجمعية شبابية؟
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl font-normal"
            >
              سجل جمعيتك مجاناً واحصل على ملف تعريفي شامل وإمكانية التواصل المباشر مع المهتمين
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
            >
              <motion.button 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#3EB985] to-[#1C81AC] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[#3EB985]/20 hover:shadow-[#3EB985]/40 transition-all flex items-center justify-center gap-3 group/btn"
              >
                <span>سجل جمعيتك الآن</span>
                <ArrowLeft className="w-5 h-5 rtl:rotate-0 group-hover/btn:-translate-x-1.5 transition-transform" />
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-9 py-4 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#1C81AC]/40 text-white font-bold text-lg rounded-2xl transition-all"
              >
                تعرف على المزايا
              </motion.button>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
