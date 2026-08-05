'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BrandBackground from '@/components/BrandBackground';
import { NetworkVisual } from './NetworkVisual';

export const AboutSection = () => {
  return (
    <section className="w-full bg-[#233A77] font-sans" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
      
      {/* Row 1 */}
      <div className="flex flex-col lg:flex-row w-full min-h-[500px]">
        {/* Content Side (Right in RTL) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-transparent relative overflow-hidden">
          {/* Subtle Brand Pattern in Corner */}
          <BrandBackground 
            variant="dark"
            className="top-0 right-0 w-80 h-80 [mask-image:radial-gradient(circle_at_top_right,black,transparent)] pointer-events-none z-0 opacity-40"
            style={{ position: 'absolute', backgroundColor: 'transparent' }}
          />
          <motion.div 
            className="max-w-lg relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold text-white drop-shadow-sm pb-2 mb-6"
            >
              نبذة عن المنصة
            </motion.h2>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-lg text-white opacity-90 leading-relaxed mb-8"
            >
              منصة رقمية موحدة تعزز التنسيق والتكامل بين الجمعيات الشبابية والجهات ذات العلاقة، وتسهل وصول المهتمين والمستفيدين إلى بيانات القطاع الشبابي عبر تجربة تفاعلية منظمة.
            </motion.p>
            
            <motion.h3 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold text-white drop-shadow-sm pb-2 mb-6"
            >
              خدمات المنصة
            </motion.h3>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-lg text-white opacity-90 leading-relaxed mb-8"
            >
              تتيح الخارطة استعراض الجمعيات الشبابية حسب المنطقة والمدينة والتخصص، مع عرض بيانات التواصل والم مواقع الجغرافية والملفات التعريفية.
            </motion.p>
          </motion.div>
        </div>

        {/* Interactive Particle Network (Left in RTL) */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full flex items-center justify-center overflow-hidden">
          <NetworkVisual />
        </div>
      </div>

    </section>
  );
};
