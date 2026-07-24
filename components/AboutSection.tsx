'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const AboutSection: React.FC = () => {
  const FEATURES = [
    {
      title: 'خدمات المنصة',
      description: 'تتيح الخارطة استعراض الجمعيات الشبابية حسب المنطقة والمدينة والتخصص، مع عرض بيانات التواصل والمواقع الجغرافية والملفات التعريفية، إضافة إلى أدوات تحديث البيانات ولوحة تحكم تسهم في رفع جودة المعلومات',
    },
    {
      title: 'أهمية المنصة',
      description: 'تسهم المنصة في حصر بيانات الجمعيات الشبابية، وتوفير مصدر وطني موثوق يساعد الشباب والمهتمين والداعمين وصناع القرار على بناء معرفة أوضح بالقطاع الشبابي، وتعزيز فرص التواصل والتعاون',
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Structural Watermark Pattern - Very subtle */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1, rotate: 10 }}
        whileInView={{ opacity: 0.04, scale: 1, rotate: 0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] pointer-events-none"
      >
        <Image src="/brand/logo/pattern.svg" alt="Pattern" fill className="object-cover" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Premium Governmental Header with Logo */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-8 mb-20 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: 40, rotateY: 90 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-28 h-28 shrink-0 bg-white shadow-[0_15px_40px_rgba(12,127,174,0.15)] rounded-3xl p-5 flex items-center justify-center border border-[#e4e6f0] relative"
            style={{ transformPerspective: 1000 }}
          >
            <div className="relative w-full h-full">
              <Image src="/brand/logo/logo-minimal.svg" alt="Logo" fill className="object-contain" />
            </div>
            {/* Subtle inset highlight */}
            <div className="absolute inset-0 rounded-3xl border border-white/50 mix-blend-overlay" />
          </motion.div>

          <div className="text-center md:text-right flex-1 pt-2">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-black text-[#263370] mb-5 tracking-tight drop-shadow-sm"
            >
              نبذة عن المنصة
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="text-[#5b6178] text-lg md:text-xl font-medium leading-relaxed max-w-3xl"
            >
              منصة رقمية موحدة تعزز التنسيق والتكامل بين الجمعيات الشبابية والجهات ذات العلاقة، وتسهل وصول المهتمين والمستفيدين إلى بيانات القطاع الشبابي عبر تجربة تفاعلية منظمة
            </motion.p>
          </div>
        </div>

        {/* Feature Cards Grid (No Icons, Premium UI) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {FEATURES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 + 0.4, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group bg-white rounded-[2.5rem] p-10 md:p-12 border border-[#e4e6f0]/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(12,127,174,0.1)] transition-all duration-500 overflow-hidden"
            >
              {/* Animated Sheen Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#0c7fae]/[0.03] z-0" />
              
              {/* Premium Sweeping Highlight */}
              <motion.div 
                className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 -translate-x-full group-hover:animate-sweep pointer-events-none"
              />
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform origin-left scale-x-0 group-hover:scale-x-100" />

              <div className="relative z-10">
                <h3 className="text-3xl font-black text-[#263370] mb-6 flex flex-col items-start gap-4 transition-colors group-hover:text-[#0c7fae]">
                  {item.title}
                  <div className="h-1.5 w-16 bg-[#42b07a] rounded-full shadow-[0_2px_10px_rgba(66,176,122,0.4)]" />
                </h3>

                <p className="text-[#5b6178] text-lg leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
