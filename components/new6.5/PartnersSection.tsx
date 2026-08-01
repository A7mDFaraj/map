'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const PartnersSection = () => {
  const partners = [
    { id: 1, name: 'مؤسسة الراجحي الإنسانية', src: '/partner/al-rajhi-humanitarian.svg' }
  ];

  return (
    <section className="w-full py-24 bg-transparent relative" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1C81AC]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-[#1C81AC] tracking-wide drop-shadow-sm pb-2 leading-relaxed"
          >
            شركاؤنا الاستراتيجيون
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#1C81AC] to-transparent mx-auto mt-6 rounded-full"
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.7 }}
              className="w-64 h-32 flex items-center justify-center relative group cursor-pointer"
              title={partner.name}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C81AC]/0 via-[#1C81AC]/20 to-[#3EB985]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-2xl" />
              
              <Image 
                src={partner.src} 
                alt={partner.name}
                fill
                className="object-contain filter brightness-0 invert opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 z-10" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
