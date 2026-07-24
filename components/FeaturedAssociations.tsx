'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, MapPin, CheckCircle2, ArrowLeft, Users, Calendar, Mail, Phone, ExternalLink, X, Search } from 'lucide-react';
import { YOUTH_ASSOCIATIONS, CATEGORIES, YouthAssociation } from '../data/associationsData';
import { SectionTitle } from './SectionTitle';

export const FeaturedAssociations: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [selectedAssoc, setSelectedAssoc] = useState<YouthAssociation | null>(null);
  const [searchFilter, setSearchFilter] = useState<string>('');

  const filtered = YOUTH_ASSOCIATIONS.filter((item) => {
    const matchesCat = selectedCategory === 'الكل' || item.category === selectedCategory;
    const matchesSearch = item.name.includes(searchFilter) || item.city.includes(searchFilter) || item.tags.some(t => t.includes(searchFilter));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="featured-associations" className="py-24 bg-[#f6f7fb] relative overflow-hidden">
      
      {/* Background Subtle Art Grid */}
      <div className="absolute inset-0 brand-pattern-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-6">
          <div className="w-full md:w-auto">
            <SectionTitle 
              title="جمعيات مميزة"
              align="right"
              className="mb-0"
            />
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="ابحث بالاسم أو المدينة..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full px-4 py-3 pr-10 rounded-2xl bg-white border border-[#e4e6f0] focus:outline-none focus:border-[#0c7fae] font-medium text-sm shadow-sm"
            />
            <Search className="w-4 h-4 text-[#5b6178] absolute right-3.5 top-4" />
          </div>
        </div>

        {/* Filter Chips Bar */}
        <div className="flex items-center gap-2 flex-wrap mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#263370] text-white shadow-lg shadow-[#263370]/20 scale-105'
                  : 'bg-white text-[#5b6178] hover:bg-[#e7e9f2] border border-[#e4e6f0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((assoc, idx) => (
            <motion.div
              key={assoc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 border border-[#e4e6f0] card-shadow card-shadow-hover transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                
                {/* Header Row: Deterministic Initial Badge + Category Pill */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  
                  {/* Avatar Fallback Badge */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${assoc.initialBg} text-white font-black text-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                    {assoc.initial}
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-[#0c7fae]/10 text-[#0c7fae] font-bold text-xs">
                      {assoc.category}
                    </span>
                    {assoc.verified && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-[#42b07a] bg-[#42b07a]/10 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        موثقة رسمياً
                      </span>
                    )}
                  </div>

                </div>

                {/* Title & Location */}
                <h3 className="text-xl font-bold text-[#263370] mb-2 group-hover:text-[#0c7fae] transition-colors leading-snug">
                  {assoc.name}
                </h3>

                <div className="flex items-center gap-1 text-[#0c7fae] text-xs font-bold mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{assoc.city} • {assoc.regionName}</span>
                </div>

                {/* Description */}
                <p className="text-[#5b6178] text-sm leading-relaxed line-clamp-2 mb-6 font-medium">
                  {assoc.description}
                </p>

              </div>

              {/* Card Footer: Metrics & Details Link */}
              <div className="pt-4 border-t border-[#e4e6f0] flex items-center justify-between">
                
                <div className="flex items-center gap-3 text-xs font-bold text-[#5b6178]">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#42b07a]" />
                    {assoc.beneficiaries.toLocaleString('ar-SA')}
                  </span>
                  <span>•</span>
                  <span>{assoc.initiatives} مبادرة</span>
                </div>

                <button
                  onClick={() => setSelectedAssoc(assoc)}
                  className="text-xs font-bold text-[#263370] group-hover:text-[#0c7fae] flex items-center gap-1 transition-colors"
                >
                  <span>التفاصيل</span>
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                </button>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedAssoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedAssoc(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full border border-[#e4e6f0] shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedAssoc(null)}
                className="absolute top-6 left-6 p-2 rounded-xl bg-[#f6f7fb] text-[#5b6178] hover:bg-[#e7e9f2]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${selectedAssoc.initialBg} text-white font-black text-3xl flex items-center justify-center shadow-lg`}>
                  {selectedAssoc.initial}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-3 py-0.5 rounded-full bg-[#0c7fae]/10 text-[#0c7fae] font-bold text-xs">
                      {selectedAssoc.category}
                    </span>
                    {selectedAssoc.verified && (
                      <span className="flex items-center gap-1 text-xs font-bold text-[#42b07a] bg-[#42b07a]/10 px-2.5 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        موثقة رسمياً
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-black text-[#263370]">{selectedAssoc.name}</h3>
                  <span className="text-xs font-bold text-[#0c7fae] flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {selectedAssoc.city} — {selectedAssoc.regionName}
                  </span>
                </div>
              </div>

              <div className="bg-[#f6f7fb] p-4 rounded-2xl border border-[#e4e6f0] mb-6">
                <p className="text-[#12172e] text-sm leading-relaxed font-medium">
                  {selectedAssoc.description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-3.5 rounded-xl bg-white border border-[#e4e6f0] text-center">
                  <span className="text-xs text-[#5b6178] block font-bold">تأسست عام</span>
                  <span className="text-lg font-black text-[#263370]">{selectedAssoc.establishedYear}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#e4e6f0] text-center">
                  <span className="text-xs text-[#5b6178] block font-bold">المستفيدون</span>
                  <span className="text-lg font-black text-[#0c7fae]">{selectedAssoc.beneficiaries.toLocaleString('ar-SA')}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#e4e6f0] text-center">
                  <span className="text-xs text-[#5b6178] block font-bold">المبادرات</span>
                  <span className="text-lg font-black text-[#42b07a]">{selectedAssoc.initiatives}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-[#5b6178] font-bold">
                  <Mail className="w-4 h-4 text-[#0c7fae]" />
                  <span>البريد: {selectedAssoc.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#5b6178] font-bold">
                  <Phone className="w-4 h-4 text-[#42b07a]" />
                  <span>الهاتف: {selectedAssoc.phone}</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#e4e6f0]">
                <button
                  onClick={() => setSelectedAssoc(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#263370] text-white font-bold text-sm hover:bg-[#1c2757]"
                >
                  إغلاق
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
