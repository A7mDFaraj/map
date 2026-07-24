'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'right';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  className = ''
}) => {
  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-right'} mb-14 relative w-full ${className}`}>
      
      {/* Container for Title + Geometric Art */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative inline-flex flex-col"
      >
        <div className="relative inline-block pr-8 lg:pr-10">
          
          {/* Decorative Pattern & Minimal Logo (Top Right Position) */}
          <div className="absolute -top-7 -right-2 lg:-right-4 w-12 h-12 lg:w-14 lg:h-14 z-0 pointer-events-none opacity-90 transition-transform duration-500 hover:scale-105">
            {/* The Pattern Background */}
            <div className="absolute inset-0 z-0 scale-[1.2] opacity-80 mix-blend-multiply">
              <Image 
                src="/brand/logo/pattern.svg" 
                alt="" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            
            {/* The Minimal Logo Overlay */}
            <div className="absolute inset-0 z-10 scale-[0.8] drop-shadow-sm">
              <Image 
                src="/brand/logo/logo-minimal.svg" 
                alt="" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {/* The Main Title Text */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#263370] tracking-tight relative z-20">
            {title}
          </h2>

        </div>
        
        {/* Optional Subtitle */}
        {subtitle && (
          <p className={`text-[#5b6178] text-base sm:text-lg font-medium mt-4 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
      
    </div>
  );
};
