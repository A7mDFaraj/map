'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Users, Filter, ExternalLink, Sparkles, Building2, ChevronLeft } from 'lucide-react';
import { YOUTH_ASSOCIATIONS, CATEGORIES, YouthAssociation } from '@/data/associationsData';
import { SAUDI_REGIONS } from '@/data/mapRegionsData';

export const FeaturedAssociationsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [selectedRegion, setSelectedRegion] = useState<string>('الكل');

  const filteredAssociations = YOUTH_ASSOCIATIONS.filter((assoc) => {
    const matchesCategory = selectedCategory === 'الكل' || assoc.category === selectedCategory;
    const matchesRegion = selectedRegion === 'الكل' || assoc.regionId === selectedRegion;
    return matchesCategory && matchesRegion;
  });

  return (
    <section id="featured" className="py-24 bg-[#f6f7fb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#233A77]/10 border border-[#233A77]/20 text-[#233A77] font-bold text-xs mb-4">
            <Building2 className="w-3.5 h-3.5 text-[#1C81AC]" />
            <span>الدليل الوطني الرسمي</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#233A77] tracking-tight">
            دليل <span className="text-[#3EB985]">الجمعيات الشبابية</span> المعتمدة
          </h2>
          <p className="mt-3 text-sm text-[#233A77]/70 max-w-2xl font-medium">
            استعرض المنظمات الشبابية المسجلة لدى المجلس التخصصي موزعة حسب المجالات والمناطق.
          </p>
        </div>

        {/* Filters Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white p-4 rounded-2xl border border-[#e4e6f0] shadow-sm">
          
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <span className="text-xs font-bold text-[#233A77] shrink-0 ml-1">التصنيف:</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1C81AC] text-white shadow-md shadow-[#1C81AC]/20'
                    : 'bg-[#f6f7fb] text-[#233A77] hover:bg-[#e4e6f0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Region Dropdown Select */}
          <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
            <MapPin className="w-4 h-4 text-[#3EB985]" />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#f6f7fb] border border-[#e4e6f0] text-[#233A77] focus:outline-none focus:border-[#1C81AC] cursor-pointer"
            >
              <option value="الكل">كافة مناطق المملكة</option>
              {SAUDI_REGIONS.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Association Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssociations.map((assoc, index) => (
            <motion.div
              key={assoc.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 border border-[#e4e6f0] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Card Right Accent Border */}
              <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-[#1C81AC] group-hover:bg-[#3EB985] transition-colors" />

              <div>
                {/* Header Avatar & Verification Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${assoc.initialBg} text-white font-black text-xl flex items-center justify-center shadow-md`}>
                    {assoc.initial}
                  </div>
                  {assoc.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#3EB985] bg-[#3EB985]/10 px-3 py-1 rounded-full border border-[#3EB985]/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      موثقة
                    </span>
                  )}
                </div>

                {/* Association Info */}
                <h3 className="font-extrabold text-lg text-[#233A77] group-hover:text-[#1C81AC] transition-colors line-clamp-1">
                  {assoc.name}
                </h3>
                <p className="text-xs text-[#233A77]/70 mt-2 line-clamp-2 leading-relaxed font-medium">
                  {assoc.description}
                </p>
              </div>

              {/* Card Footer Details */}
              <div className="mt-6 pt-4 border-t border-[#e4e6f0] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[#233A77]/80 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#1C81AC]" />
                  <span>{assoc.city}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#233A77]/80 font-bold">
                  <Users className="w-3.5 h-3.5 text-[#3EB985]" />
                  <span>{assoc.beneficiaries.toLocaleString('ar-SA')} مستفيد</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
