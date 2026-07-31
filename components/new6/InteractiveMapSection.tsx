'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Users, Building2, TrendingUp, Sparkles, Filter, CheckCircle2, ChevronLeft, RotateCcw } from 'lucide-react';
import { SAUDI_REGIONS, RegionData, TOTAL_NATIONAL_METRICS } from '@/data/mapRegionsData';
import { YOUTH_ASSOCIATIONS, CATEGORIES, YouthAssociation } from '@/data/associationsData';
import { SectionTitle } from '@/components/SectionTitle';

export const InteractiveMapSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<RegionData | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('الكل');

  // Filtered associations based on region and category
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
    <section id="interactive-map" style={{ fontFamily: 'Thamaynyah, sans-serif' }} className="py-24 bg-[#12172e] relative overflow-hidden">
      
      {/* Decorative Brand Art Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#1C81AC]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3EB985]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-[#1C81AC] pb-2 leading-relaxed mb-4">
            استكشف توزيع الجمعيات حسب المناطق
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            انقر على أي منطقة في الخريطة لاستعراض الإحصائيات المباشرة، ونسبة النمو، والجمعيات المعتمدة فيها.
          </p>
        </div>

        {/* Category Filters Row */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <div className="flex items-center gap-1 text-xs font-bold text-white/60 ml-2">
            <Filter className="w-4 h-4 text-[#1C81AC]" />
            <span>التصنيف:</span>
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#233A77] text-white shadow-md shadow-[#263370]/20'
                  : 'bg-[#0a0d1d] text-white/60 hover:bg-[#1C81AC]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Two-Column Grid: SVG Map + Region Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#0a0d1d] rounded-3xl p-6 border border-[#1C81AC]/20 card-shadow relative overflow-hidden flex flex-col items-center h-full">
            
            {/* Map Action Banner */}
            <div className="w-full flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#1C81AC]" />
                خريطة المناطق التفاعلية
              </span>
              {selectedRegion && (
                <button
                  onClick={() => setSelectedRegion(null)}
                  className="text-xs font-bold text-[#1C81AC] hover:text-[#1C81AC] flex items-center gap-1 bg-[#12172e] px-3 py-1.5 rounded-lg border border-[#1C81AC]/20 shadow-sm transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  إعادة ضبط الخريطة
                </button>
              )}
            </div>

            {/* Interactive Saudi Arabia Vector Map */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center p-4">
              <svg
                viewBox="0 0 730 600"
                className="w-full h-full drop-shadow-xl"
              >
                <defs>
                  <linearGradient id="regionGradientDefault" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#233A77" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#12172e" stopOpacity="0.95" />
                  </linearGradient>
                  <linearGradient id="regionGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1C81AC" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#233A77" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="regionGradientActive" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3EB985" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#3EB985" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* Draw Region Polygons */}
                {SAUDI_REGIONS.map((region, index) => {
                  const isSelected = selectedRegion?.id === region.id;
                  const isHovered = hoveredRegion?.id === region.id;
                  
                  const randomX = Math.sin(index * 13) * 300;
                  const randomY = Math.cos(index * 17) * 300;
                  const randomRotate = Math.sin(index * 19) * 45;

                  return (
                    <g key={region.id} className="cursor-pointer group">
                      <motion.path
                        d={region.svgPath}
                        fill={
                          isSelected
                            ? 'url(#regionGradientActive)'
                            : isHovered
                            ? 'url(#regionGradientHover)'
                            : 'url(#regionGradientDefault)'
                        }
                        stroke="#12172e"
                        strokeWidth={isSelected ? '2.5' : '1.5'}
                        strokeLinejoin="round"
                        initial={{ 
                          scale: 0.8, 
                          x: randomX, 
                          y: randomY, 
                          rotate: randomRotate, 
                          opacity: 0
                        }}
                        animate={{ 
                          scale: 1, 
                          x: 0, 
                          y: 0, 
                          rotate: 0, 
                          opacity: 1
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 40, 
                          damping: 12, 
                          mass: 1.5,
                          delay: index * 0.08
                        }}
                        whileHover={{ 
                          scale: 1.04, 
                          y: -6, 
                          zIndex: 50
                        }}
                        onMouseEnter={() => setHoveredRegion(region)}
                        onMouseLeave={() => setHoveredRegion(null)}
                        onClick={() => setSelectedRegion(selectedRegion?.id === region.id ? null : region)}
                        className="transition-colors duration-300 origin-center hover:drop-shadow-[0_10px_15px_rgba(28,129,172,0.4)]"
                        suppressHydrationWarning
                      />

                      {/* Region Capital Marker Pin */}
                      <motion.g
                        transform={`translate(${region.cx}, ${region.cy})`}
                        onClick={() => setSelectedRegion(selectedRegion?.id === region.id ? null : region)}
                        className="pointer-events-none"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2 + index * 0.1, duration: 0.8 }}
                      >
                        <circle
                          r={isSelected ? '9' : isHovered ? '7' : '5'}
                          className={`transition-all duration-300 ${
                            isSelected
                              ? 'fill-emerald-400 stroke-[#12172e] stroke-2 animate-ping'
                              : isHovered
                              ? 'fill-cyan-300 stroke-[#12172e] stroke-2'
                              : 'fill-cyan-400 stroke-[#12172e]'
                          }`}
                        />
                        <circle
                          r={isSelected ? '5' : isHovered ? '4' : '3'}
                          className={isSelected ? 'fill-white' : 'fill-[#0a0d1d]'}
                        />
                      </motion.g>
                    </g>
                  );
                })}
              </svg>

              {/* Hover Tooltip Overlay */}
              <AnimatePresence>
                {hoveredRegion && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute top-4 left-4 bg-[#233A77] text-white px-4 py-2.5 rounded-xl shadow-xl border border-white/20 pointer-events-none z-20"
                  >
                    <div className="font-bold text-sm flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-cyan-300" />
                      {hoveredRegion.name}
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      {hoveredRegion.associationsCount} جمعية • {hoveredRegion.beneficiariesCount.toLocaleString('ar-SA')} مستفيد
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Region Select Chips (Mobile & Desktop accessibility) */}
            <div className="w-full mt-4 pt-4 border-t border-[#1C81AC]/20 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <span className="text-xs font-bold text-white/60 shrink-0">اختيار سريع:</span>
              {SAUDI_REGIONS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRegion(selectedRegion?.id === r.id ? null : r)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all ${
                    selectedRegion?.id === r.id
                      ? 'bg-[#3EB985] text-white'
                      : 'bg-[#12172e] text-white border border-[#1C81AC]/20 hover:bg-[#1C81AC]/10'
                  }`}
                >
                  {r.name.replace('منطقة ', '')}
                </button>
              ))}
            </div>

          </div>

          {/* Region Dashboard Details Panel (5 cols) */}
          <div className="lg:col-span-5 bg-[#12172e] rounded-3xl p-6 border border-[#1C81AC]/20 card-shadow h-full flex flex-col">
            
            {/* Panel Title */}
            <div className="flex items-center justify-between pb-4 border-b border-[#1C81AC]/20 mb-6">
              <div>
                <span className="text-xs font-bold text-[#1C81AC]">إحصائيات المنطقة</span>
                <h3 className="text-2xl font-black text-white flex items-center gap-2">
                  {activeRegionData.name}
                  {selectedRegion && (
                    <span className="text-xs bg-[#3EB985]/15 text-[#3EB985] px-2.5 py-0.5 rounded-full font-bold">
                      محددة
                    </span>
                  )}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#0a0d1d] border border-[#1C81AC]/20 flex items-center justify-center text-white">
                <Building2 className="w-5 h-5" />
              </div>
            </div>

            {/* Region Key Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              
              <div className="bg-[#0a0d1d] p-4 rounded-2xl border border-[#1C81AC]/20">
                <span className="text-xs text-white/60 font-bold block mb-1">عدد الجمعيات</span>
                <span className="text-2xl font-black text-white">
                  {activeRegionData.associationsCount}
                </span>
              </div>

              <div className="bg-[#0a0d1d] p-4 rounded-2xl border border-[#1C81AC]/20">
                <span className="text-xs text-white/60 font-bold block mb-1">المستفيدون سنوياً</span>
                <span className="text-2xl font-black text-[#1C81AC]">
                  {activeRegionData.beneficiariesCount.toLocaleString('ar-SA')}
                </span>
              </div>

              <div className="bg-[#0a0d1d] p-4 rounded-2xl border border-[#1C81AC]/20">
                <span className="text-xs text-white/60 font-bold block mb-1">عدد المبادرات</span>
                <span className="text-2xl font-black text-white">
                  {activeRegionData.initiativesCount}
                </span>
              </div>

              <div className="bg-[#3EB985]/10 p-4 rounded-2xl border border-[#3EB985]/30">
                <span className="text-xs text-[#3EB985] font-bold block mb-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  نسبة النمو
                </span>
                <span className="text-2xl font-black text-[#3EB985]">
                  +{activeRegionData.growthRate}%
                </span>
              </div>

            </div>

            {/* Associations List in this Region */}
            <div>
              <h4 className="text-xs font-bold text-white/60 mb-3 flex items-center justify-between">
                <span>الجمعيات في هذه المنطقة ({currentAssociations.length})</span>
                <a href="#featured-associations" className="text-[#1C81AC] hover:underline flex items-center gap-1">
                  عرض الكل <ChevronLeft className="w-3.5 h-3.5" />
                </a>
              </h4>

              <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                {currentAssociations.length > 0 ? (
                  currentAssociations.slice(0, 4).map((assoc) => (
                    <div
                      key={assoc.id}
                      className="p-3.5 rounded-xl bg-[#0a0d1d] hover:bg-[#1C81AC]/10 border border-[#1C81AC]/20 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        
                        {/* Deterministic Initial Avatar */}
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${assoc.initialBg} text-white font-black text-lg flex items-center justify-center shadow-sm shrink-0`}>
                          {assoc.initial}
                        </div>

                        <div>
                          <h5 className="font-bold text-sm text-white line-clamp-1">{assoc.name}</h5>
                          <span className="text-xs text-white/60 font-medium">{assoc.city} • {assoc.category}</span>
                        </div>

                      </div>

                      {assoc.verified && (
                        <span title="موثقة رسمياً">
                          <CheckCircle2 className="w-5 h-5 text-[#3EB985] shrink-0" />
                        </span>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-white/60 text-sm bg-[#0a0d1d] rounded-xl border border-dashed border-[#1C81AC]/20">
                    لا توجد جمعيات تطابق الفلتر المحدد في هذه المنطقة.
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
