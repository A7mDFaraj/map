'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building2, Users, TrendingUp, Sparkles, Filter, RotateCcw, Activity } from 'lucide-react';
import { SAUDI_REGIONS, RegionData, TOTAL_NATIONAL_METRICS } from '@/data/mapRegionsData';
import { YOUTH_ASSOCIATIONS, CATEGORIES } from '@/data/associationsData';

export const LivingSaudiMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<RegionData | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('الكل');

  const activeRegionData = selectedRegion || hoveredRegion || {
    id: 'national',
    name: 'كافة مناطق المملكة العربية السعودية',
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

  const currentAssociations = YOUTH_ASSOCIATIONS.filter((assoc) => {
    const matchesRegion = selectedRegion ? assoc.regionId === selectedRegion.id : true;
    const matchesCategory = activeCategory === 'الكل' ? true : assoc.category === activeCategory;
    return matchesRegion && matchesCategory;
  });

  return (
    <section id="living-map" className="py-24 bg-[#0a0f1d] text-white relative overflow-hidden">
      
      {/* Dynamic Background Ambient Glowing Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#1C81AC]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#3EB985]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Fine Lines Backdrop */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(28, 129, 172, 0.4) 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C81AC]/20 border border-[#1C81AC]/40 text-[#3EB985] font-extrabold text-xs mb-4 shadow-lg shadow-[#1C81AC]/10">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#3EB985]" />
            <span>خارطة بصرية حية ذات أنماط متحركة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            خارطة المملكة <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3EB985] via-emerald-300 to-[#1C81AC]">التفاعلية الحية</span>
          </h2>
          
          <p className="mt-3 text-sm text-slate-300 max-w-2xl font-medium leading-relaxed">
            استكشف توزيع الجمعيات والمستفيدين عبر الخريطة الثلاثية الأبعاد المضيئة بأنماط الهوية البصرية الحية والمتحركة.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <div className="flex items-center gap-1 text-xs font-bold text-slate-400 ml-2">
            <Filter className="w-4 h-4 text-[#3EB985]" />
            <span>التصنيف:</span>
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#1C81AC] to-[#3EB985] text-white shadow-lg shadow-[#3EB985]/20 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main 2-Column Grid: Animated 3D Map Visual + Interactive Dashboard Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Visual Container (7 cols) */}
          <div className="lg:col-span-7 bg-[#12182b]/80 backdrop-blur-xl rounded-3xl p-6 border border-white/15 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            
            {/* Top Toolbar Bar */}
            <div className="flex items-center justify-between z-20 mb-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <Activity className="w-4 h-4 text-[#3EB985] animate-pulse" />
                <span>الأنماط البصرية المتحركة (Living Brand Circuits)</span>
              </div>
              {selectedRegion && (
                <button
                  onClick={() => setSelectedRegion(null)}
                  className="text-xs font-bold text-[#1C81AC] hover:text-white flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  إعادة الضبط
                </button>
              )}
            </div>

            {/* 3D Isometric Animated SVG Container */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center p-2 group">
              
              <svg
                viewBox="0 0 730 600"
                className="w-full h-full filter drop-shadow-[0_20px_35px_rgba(28,129,172,0.35)]"
                style={{
                  transform: 'perspective(1000px) rotateX(15deg) rotateY(-5deg) scale(0.98)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <defs>
                  {/* Pattern Fill: Frame Pattern SVG */}
                  <pattern
                    id="livingCircuitPattern"
                    width="220"
                    height="180"
                    patternUnits="userSpaceOnUse"
                  >
                    <image href="/brand/logo/frame.svg" width="220" height="180" opacity="0.6" />
                  </pattern>

                  {/* Neon Edge Gradients */}
                  <linearGradient id="neonCyanGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3EB985" />
                    <stop offset="50%" stopColor="#1C81AC" />
                    <stop offset="100%" stopColor="#233A77" />
                  </linearGradient>

                  <linearGradient id="neonActive" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ffb7" />
                    <stop offset="100%" stopColor="#00bfff" />
                  </linearGradient>

                  {/* Glow Filters */}
                  <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Draw Region Polygons */}
                {SAUDI_REGIONS.map((region, index) => {
                  const isSelected = selectedRegion?.id === region.id;
                  const isHovered = hoveredRegion?.id === region.id;

                  return (
                    <g key={region.id} className="cursor-pointer">
                      
                      {/* Base Glass Slab Fill with Embedded Living Circuit Pattern */}
                      <motion.path
                        d={region.svgPath}
                        fill="url(#livingCircuitPattern)"
                        stroke={isSelected ? '#00ffb7' : isHovered ? '#3EB985' : '#1C81AC'}
                        strokeWidth={isSelected ? '3.5' : isHovered ? '2.5' : '1.5'}
                        strokeOpacity={isSelected || isHovered ? '1' : '0.7'}
                        filter="url(#neonGlow)"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.5 }}
                        whileHover={{ scale: 1.03, y: -4 }}
                        onMouseEnter={() => setHoveredRegion(region)}
                        onMouseLeave={() => setHoveredRegion(null)}
                        onClick={() => setSelectedRegion(region)}
                        className="transition-all duration-300 origin-center"
                      />

                      {/* Moving Animated Light Pulse Circuit Paths */}
                      <path
                        d={region.svgPath}
                        fill="none"
                        stroke={isSelected ? '#ffffff' : '#3EB985'}
                        strokeWidth={isSelected ? '3' : '2'}
                        strokeDasharray="40 160"
                        className="animate-circuit-flow"
                        style={{
                          animation: `circuitFlow ${4 + (index % 3)}s linear infinite`,
                          opacity: isSelected ? 1 : isHovered ? 0.9 : 0.6,
                        }}
                      />

                      {/* Glowing Node Pulse Center */}
                      <motion.g
                        transform={`translate(${region.cx}, ${region.cy})`}
                        onClick={() => setSelectedRegion(region)}
                        className="pointer-events-none"
                      >
                        <circle
                          r={isSelected ? '8' : isHovered ? '6' : '4'}
                          className={`transition-all ${
                            isSelected
                              ? 'fill-[#00ffb7] stroke-white stroke-2 animate-ping'
                              : isHovered
                              ? 'fill-[#3EB985] stroke-white'
                              : 'fill-[#1C81AC] stroke-slate-900'
                          }`}
                        />
                      </motion.g>

                    </g>
                  );
                })}

              </svg>

              {/* Animated Light Flow CSS Keyframe Injection */}
              <style jsx>{`
                @keyframes circuitFlow {
                  0% {
                    stroke-dashoffset: 0;
                  }
                  100% {
                    stroke-dashoffset: -400;
                  }
                }
                .animate-circuit-flow {
                  will-change: stroke-dashoffset;
                }
              `}</style>

              {/* Hover Tooltip Overlay */}
              <AnimatePresence>
                {hoveredRegion && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute top-4 left-4 bg-[#1a233d]/90 text-white px-4 py-2.5 rounded-2xl shadow-2xl border border-[#3EB985]/40 backdrop-blur-md pointer-events-none z-30"
                  >
                    <div className="font-bold text-sm flex items-center gap-2 text-emerald-300">
                      <MapPin className="w-4 h-4 text-[#3EB985]" />
                      {hoveredRegion.name}
                    </div>
                    <div className="text-xs text-slate-300 mt-1">
                      {hoveredRegion.associationsCount} جمعية • {hoveredRegion.beneficiariesCount.toLocaleString('ar-SA')} مستفيد
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Quick Region Selector Chips */}
            <div className="w-full mt-4 pt-4 border-t border-white/10 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none z-20">
              <span className="text-xs font-bold text-slate-400 shrink-0">مناطق المملكه:</span>
              {SAUDI_REGIONS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRegion(r)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all ${
                    selectedRegion?.id === r.id
                      ? 'bg-gradient-to-r from-[#1C81AC] to-[#3EB985] text-white shadow-md'
                      : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/15'
                  }`}
                >
                  {r.name.replace('منطقة ', '')}
                </button>
              ))}
            </div>

          </div>

          {/* Region Live Metrics Dashboard Panel (5 cols) */}
          <div className="lg:col-span-5 bg-[#12182b]/80 backdrop-blur-xl rounded-3xl p-6 border border-white/15 shadow-2xl flex flex-col justify-between">
            
            <div>
              {/* Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-bold text-[#3EB985]">إحصائيات حية وفورية</span>
                  <h3 className="text-2xl font-black text-white flex items-center gap-2 mt-0.5">
                    {activeRegionData.name}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1C81AC] to-[#3EB985] flex items-center justify-center text-white shadow-md">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              {/* Metrics 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-xs text-slate-400 font-bold block mb-1">الجمعيات المعتمدة</span>
                  <span className="text-2xl font-black text-white">
                    {activeRegionData.associationsCount}
                  </span>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-xs text-slate-400 font-bold block mb-1">المستفيدون سنوياً</span>
                  <span className="text-2xl font-black text-[#3EB985]">
                    {activeRegionData.beneficiariesCount.toLocaleString('ar-SA')}
                  </span>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-xs text-slate-400 font-bold block mb-1">المبادرات التنموية</span>
                  <span className="text-2xl font-black text-white">
                    {activeRegionData.initiativesCount}
                  </span>
                </div>

                <div className="bg-[#3EB985]/15 p-4 rounded-2xl border border-[#3EB985]/30">
                  <span className="text-xs text-emerald-300 font-bold block mb-1 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    معدل النمو
                  </span>
                  <span className="text-2xl font-black text-emerald-300">
                    +{activeRegionData.growthRate}%
                  </span>
                </div>

              </div>
            </div>

            {/* List of Associations in Selected Region */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 mb-3 flex items-center justify-between">
                <span>جمعيات {activeRegionData.name} ({currentAssociations.length})</span>
              </h4>

              <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
                {currentAssociations.length > 0 ? (
                  currentAssociations.slice(0, 4).map((assoc) => (
                    <div
                      key={assoc.id}
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-tr ${assoc.initialBg} text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm`}>
                          {assoc.initial}
                        </div>
                        <div>
                          <h5 className="font-bold text-xs text-white line-clamp-1">{assoc.name}</h5>
                          <span className="text-[11px] text-slate-400">{assoc.city} • {assoc.category}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-slate-400 text-xs bg-white/5 rounded-xl border border-dashed border-white/10">
                    لا توجد جمعيات تطابق الفلتر في هذه المنطقة.
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
