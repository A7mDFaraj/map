'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { YOUTH_ASSOCIATIONS } from '@/data/associationsData';
import { MapPin, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export const FeaturedAssociationsSection = () => {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isMounted, setIsMounted] = useState(false);
  
  // Handle responsive items per page dynamically
  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(YOUTH_ASSOCIATIONS.length / itemsPerPage);

  const paginate = (newDirection: number) => {
    setPage((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = totalPages - 1;
      if (next >= totalPages) next = 0;
      return next;
    });
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) paginate(1);
    else if (info.offset.x > swipeThreshold) paginate(-1);
  };

  return (
    <section className="w-full py-24 bg-transparent relative" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
      
      {/* Premium Background ambient light */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#1C81AC]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#3EB985]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header (Centered) */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-l from-white to-[#1C81AC] pb-2 whitespace-nowrap"
          >
            جمعيات شبابية مميزة
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#1C81AC] to-transparent mt-6 rounded-full opacity-80"
          />
        </div>
      </div>

      {/* Cards Track Container */}
      {/* We use viewport padding (px-[15vw]) on the wrapper to forcefully center the active cards.
          Because the cards overflow the inner track, the dimmed inactive cards perfectly peek into this padded space! */}
      <div className="w-full relative z-10 cursor-grab active:cursor-grabbing pb-12 mt-4 overflow-hidden">
        <div className="w-full px-[15vw] md:px-[10vw] lg:px-[12vw] relative">
          <motion.div 
            // In RTL, positive X moves the container to the right, revealing elements on the left.
            animate={{ x: isMounted ? `${page * 100}%` : '0%' }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="flex w-full relative"
            style={{ direction: 'rtl' }}
          >
            {YOUTH_ASSOCIATIONS.map((assoc, i) => {
              // Determine if this specific card is in the active page's view
              const isActive = i >= page * itemsPerPage && i < (page + 1) * itemsPerPage;
              
              // Dynamic width class based on items per page ensures 100% mathematical translation precision
              const cardWidthClass = itemsPerPage === 1 
                ? 'w-full' 
                : itemsPerPage === 2 
                  ? 'w-[50%]' 
                  : 'w-[33.3333%]';
              
              return (
                <div 
                  key={assoc.id}
                  className={`shrink-0 ${cardWidthClass} px-3 transition-all duration-700 ease-out flex flex-col ${
                    isActive ? 'opacity-100 scale-100 z-10' : 'opacity-30 scale-90 blur-[2px] pointer-events-none z-0'
                  }`}
                >
                  <div className="relative bg-[#12172e]/60 backdrop-blur-lg border border-white/5 hover:border-[#1C81AC]/40 rounded-3xl p-6 flex flex-col justify-between flex-grow min-h-[240px] transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_rgba(28,129,172,0.15)] group/card">
                    {/* Inner subtle glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1C81AC]/0 via-transparent to-[#3EB985]/0 group-hover/card:from-[#1C81AC]/10 group-hover/card:to-[#3EB985]/5 transition-colors duration-500 rounded-3xl pointer-events-none" />
                    
                    <div className="relative z-10 flex-grow pointer-events-none">
                      {/* Top Row: Logo & Verified Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${assoc.initialBg} flex items-center justify-center text-2xl font-black text-white shadow-md`}>
                          {assoc.initial}
                        </div>
                        {assoc.verified && (
                          <div className="bg-[#3EB985]/10 border border-[#3EB985]/20 text-[#3EB985] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            موثقة
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-black text-white mb-3 leading-tight line-clamp-1 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-l group-hover/card:from-white group-hover/card:to-[#7dd3fc] transition-all">
                        {assoc.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold bg-[#1C81AC]/10 text-[#7dd3fc] px-2.5 py-1 rounded-md border border-[#1C81AC]/20">
                          {assoc.category}
                        </span>
                        <span className="text-xs font-bold text-white/50 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {assoc.city}
                        </span>
                      </div>
                    </div>

                    {/* Minimalist Bottom Button */}
                    <div className="relative z-10 mt-5 pt-4 border-t border-white/5 group-hover/card:border-[#1C81AC]/20 transition-colors pointer-events-auto">
                      <button className="w-full flex items-center justify-center gap-2 bg-[#0a0d1d]/80 hover:bg-[#1C81AC] border border-white/5 hover:border-transparent text-white/80 hover:text-white font-bold text-sm py-3 rounded-xl transition-all duration-300 group/btn">
                        عرض التفاصيل
                        <ChevronLeft className="w-4 h-4 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Down Visual Thing (Pagination Controls) */}
      <div className="flex items-center justify-center gap-6 relative z-20">
        <button 
          onClick={() => paginate(-1)}
          className="w-12 h-12 rounded-full bg-[#12172e] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#1C81AC] hover:border-[#1C81AC] transition-all shadow-lg hover:shadow-[0_0_15px_rgba(28,129,172,0.5)] group shrink-0"
          aria-label="Previous page"
        >
          {/* In RTL, Previous is on the right side and should point Right */}
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Dots or Counter */}
        <div className="flex items-center justify-center">
          {totalPages <= 5 ? (
            <div className="flex items-center gap-3">
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setPage(i)}
                  className={`transition-all duration-300 rounded-full ${page === i ? 'w-10 h-2.5 bg-gradient-to-r from-[#1C81AC] to-[#3EB985]' : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          ) : (
            <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm tracking-widest flex items-center justify-center min-w-[90px] shadow-inner font-sans">
              <span className="text-[#3EB985] text-lg leading-none">{page + 1}</span>
              <span className="mx-2 text-white/30 text-xs">/</span>
              <span className="text-white/60 text-sm leading-none">{totalPages}</span>
            </div>
          )}
        </div>

        <button 
          onClick={() => paginate(1)}
          className="w-12 h-12 rounded-full bg-[#12172e] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#1C81AC] hover:border-[#1C81AC] transition-all shadow-lg hover:shadow-[0_0_15px_rgba(28,129,172,0.5)] group shrink-0"
          aria-label="Next page"
        >
          {/* In RTL, Next is on the left side and should point Left */}
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>

    </section>
  );
};
