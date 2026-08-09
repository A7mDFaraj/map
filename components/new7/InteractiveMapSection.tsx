'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building2, TrendingUp, CheckCircle2, RotateCcw } from 'lucide-react';
import { SAUDI_REGIONS, RegionData, TOTAL_NATIONAL_METRICS } from '@/data/mapRegionsData';
import { YOUTH_ASSOCIATIONS, CATEGORIES } from '@/data/associationsData';

export const InteractiveMapSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<RegionData | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('الكل');

  const currentAssociations = YOUTH_ASSOCIATIONS.filter((assoc) => {
    const matchesRegion = selectedRegion ? assoc.regionId === selectedRegion.id : true;
    const matchesCategory = activeCategory === 'الكل' ? true : assoc.category === activeCategory;
    return matchesRegion && matchesCategory;
  });

  const activeRegionData = selectedRegion || {
    id: 'national',
    name: 'كافة مناطق المملكة',
    enName: 'All Kingdom Regions',
    associationsCount: TOTAL_NATIONAL_METRICS.totalAssociations,
    beneficiariesCount: TOTAL_NATIONAL_METRICS.totalBeneficiaries,
    initiativesCount: TOTAL_NATIONAL_METRICS.totalInitiatives,
    growthRate: TOTAL_NATIONAL_METRICS.growthPercentage,
    capital: 'الرياض (المقر الرئيسي)',
    activeCategories: ['تكنولوجيا', 'تطوع', 'ثقافة', 'ريادة'],
    svgPath: '',
    cx: 0,
    cy: 0,
  };

  return (
    <section 
      id="interactive-map" 
      style={{ fontFamily: 'Thamaynyah, sans-serif' }} 
      className="relative w-full min-h-[110dvh] pt-10 lg:pt-12 pb-32 lg:pb-44 flex justify-center bg-[#060B17] overflow-hidden"
    >
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#1C81AC]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#3EB985]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] w-full h-[720px] mx-auto px-4 lg:px-8 relative z-10 flex flex-col">

        {/* Dashboard Grid - Floating in centered container */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 min-h-0">
          
          {/* Map Column (Left) */}
          <div className="lg:col-span-7 xl:col-span-8 bg-[#1A2A5E]/40 backdrop-blur-2xl border border-[#1C81AC]/20 rounded-3xl p-5 flex flex-col h-full relative group shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            
            <div className="flex justify-between items-center mb-2 shrink-0">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" /> 
                خريطة المناطق التفاعلية
              </span>
              {selectedRegion && (
                <button
                  onClick={() => setSelectedRegion(null)}
                  className="text-[10px] font-bold text-cyan-400 hover:text-white flex items-center gap-1 bg-[#1C81AC]/10 hover:bg-[#1C81AC]/30 px-3 py-1.5 rounded-lg border border-cyan-400/20 transition-all"
                >
                  <RotateCcw className="w-3 h-3" />
                  إعادة ضبط
                </button>
              )}
            </div>

            <div className="flex-1 w-full min-h-0 relative flex items-center justify-center p-3">
              <svg viewBox="-10 -15 750 670" overflow="visible" className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]">
                <defs>
                  <linearGradient id="mapGradientDefault" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1A2A5E" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#1A2A5E" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="mapGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1C81AC" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#233A77" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="mapGradientActive" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3EB985" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#267A53" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {SAUDI_REGIONS.map((region, index) => {
                  const isSelected = selectedRegion?.id === region.id;
                  const isHovered = hoveredRegion?.id === region.id;
                  
                  return (
                    <g key={region.id} className="cursor-pointer">
                      <motion.path
                        d={region.svgPath}
                        fill={
                          isSelected ? 'url(#mapGradientActive)'
                          : isHovered ? 'url(#mapGradientHover)'
                          : 'url(#mapGradientDefault)'
                        }
                        stroke={isSelected ? '#fff' : '#1C81AC'}
                        strokeWidth={isSelected ? '2' : '1'}
                        strokeLinejoin="round"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.5 }}
                        whileHover={{ scale: 1.02, zIndex: 50 }}
                        onMouseEnter={() => setHoveredRegion(region)}
                        onMouseLeave={() => setHoveredRegion(null)}
                        onClick={() => setSelectedRegion(selectedRegion?.id === region.id ? null : region)}
                        className="origin-center transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(28,129,172,0.6)]"
                      />

                    </g>
                  );
                })}
              </svg>

              {/* Hover Tooltip */}
              <AnimatePresence>
                {hoveredRegion && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute top-4 left-4 bg-[#060B17]/90 backdrop-blur-md text-white px-4 py-3 rounded-2xl shadow-2xl border border-white/10 pointer-events-none z-20"
                  >
                    <div className="font-bold text-sm flex items-center gap-1.5 mb-1">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      {hoveredRegion.name}
                    </div>
                    <div className="flex gap-4 text-xs">
                      <span className="text-white/70"><strong className="text-white">{hoveredRegion.associationsCount}</strong> جمعية</span>
                      <span className="text-white/70"><strong className="text-cyan-400">{hoveredRegion.beneficiariesCount.toLocaleString('en-US')}</strong> مستفيد</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


          </div>

          {/* Stats Column (Right) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-5 h-full min-h-0">
            
            {/* Top Stats Card */}
            <div className="bg-[#233A77]/40 backdrop-blur-2xl border border-[#1C81AC]/30 rounded-3xl p-5 shrink-0 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] font-bold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">المؤشرات الحيوية</span>
                  <h3 className="text-xl font-black text-white flex items-center gap-2 mt-2">
                    {activeRegionData.name}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1C81AC] to-[#1A2A5E] text-white flex items-center justify-center shadow-lg">
                  <Building2 className="w-6 h-6" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/20 rounded-2xl p-3.5 border border-white/5 relative overflow-hidden group hover:border-[#1C81AC]/50 transition-colors">
                  <span className="text-[10px] text-white/50 font-bold block mb-1">الجمعيات المعتمدة</span>
                  <span className="text-2xl font-black text-white">{activeRegionData.associationsCount}</span>
                  <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                </div>
                
                <div className="bg-black/20 rounded-2xl p-3.5 border border-white/5 relative overflow-hidden group hover:border-[#1C81AC]/50 transition-colors">
                  <span className="text-[10px] text-white/50 font-bold block mb-1">المستفيدون (سنوياً)</span>
                  <span className="text-2xl font-black text-cyan-400" dir="ltr">{activeRegionData.beneficiariesCount.toLocaleString('en-US')}</span>
                </div>

                <div className="bg-black/20 rounded-2xl p-3.5 border border-white/5">
                  <span className="text-[10px] text-white/50 font-bold block mb-1">المبادرات النشطة</span>
                  <span className="text-xl font-bold text-white">{activeRegionData.initiativesCount}</span>
                </div>

                <div className="bg-[#3EB985]/10 rounded-2xl p-3.5 border border-[#3EB985]/20">
                  <span className="text-[10px] text-[#3EB985] font-bold flex items-center gap-1 mb-1">
                    <TrendingUp className="w-3 h-3" /> نسبة النمو
                  </span>
                  <span className="text-xl font-bold text-[#3EB985]" dir="ltr">+{activeRegionData.growthRate}%</span>
                </div>
              </div>
            </div>

            {/* Bottom Associations Card (Compact List) */}
            <div className="bg-[#1A2A5E]/30 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 flex-1 min-h-0 flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <div className="flex justify-between items-center mb-4 shrink-0">
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  قائمة الجمعيات
                  <span className="bg-white/10 text-white/80 text-[10px] px-2 py-0.5 rounded-full">{currentAssociations.length}</span>
                </span>
              </div>
              
              <div className="flex-1 min-h-0 flex flex-col gap-2.5 overflow-hidden">
                {currentAssociations.length > 0 ? (
                  currentAssociations.slice(0, 4).map(assoc => (
                    <motion.div 
                      key={assoc.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-3 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between shrink-0 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${assoc.initialBg} flex items-center justify-center text-white font-bold shadow-sm`}>
                          {assoc.initial}
                        </div>
                        <div>
                          <h5 className="font-bold text-xs text-white line-clamp-1">{assoc.name}</h5>
                          <span className="text-[10px] text-white/50">{assoc.city} • {assoc.category}</span>
                        </div>
                      </div>
                      {assoc.verified && (
                        <CheckCircle2 className="w-4 h-4 text-[#3EB985] shrink-0" />
                      )}
                    </motion.div>
                  ))
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-white/40 bg-black/10 rounded-2xl border border-dashed border-white/10">
                    <span className="text-xs">لا توجد جمعيات تطابق البحث</span>
                  </div>
                )}
                

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Global Style for hiding scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};
