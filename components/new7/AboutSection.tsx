'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section className="w-full bg-[#233A77] font-sans" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
      
      {/* Row 1 */}
      <div className="flex flex-col lg:flex-row w-full min-h-[500px]">
        {/* Content Side (Right in RTL) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-transparent relative overflow-hidden">
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

        {/* Image Side (Left in RTL) */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full flex items-center justify-center overflow-hidden">
          
          {/* Desktop Mask: Fades the right edge */}
          <div 
            className="hidden lg:block w-full h-full absolute inset-0"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 25%)', 
              maskImage: 'linear-gradient(to left, transparent 0%, black 25%)' 
            }}
          >
            <img 
              src="/brand/aboutsectionImage.jpeg" 
              alt="About" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mobile Mask: Fades the top edge only (prevents horizontal pushing) */}
          <div 
            className="block lg:hidden w-full h-full absolute inset-0"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%)', 
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%)' 
            }}
          >
            <img 
              src="/brand/aboutsectionImage.jpeg" 
              alt="About" 
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>

    </section>
  );
};
