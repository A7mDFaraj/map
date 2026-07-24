'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Bookmark, Sparkles } from 'lucide-react';
import { RESOURCE_GUIDES } from '../data/brandAssets';
import { SectionTitle } from './SectionTitle';

export const GuidesSection: React.FC = () => {
  return (
    <section id="guides" className="py-24 bg-[#f6f7fb] relative overflow-hidden">
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 brand-pattern-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center">
          <SectionTitle 
            title="الأدلة الإرشادية والنماذج التمكينية"
            subtitle="حزَم معرفية ونماذج تنظيمية معتمدة لمساعدة القائمين على الجمعيات الشبابية في الإدارة والتأسيس وقياس الأثر."
            align="center"
          />
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCE_GUIDES.map((guide, idx) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 border border-[#e4e6f0] card-shadow card-shadow-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                
                {/* Header Icon & Format */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#263370] text-white flex items-center justify-center group-hover:bg-[#0c7fae] transition-colors shadow-md">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#f6f7fb] border border-[#e4e6f0] text-xs font-bold text-[#263370]">
                    {guide.format} • {guide.fileSize}
                  </span>
                </div>

                <span className="text-xs font-bold text-[#0c7fae] block mb-1">
                  {guide.category}
                </span>

                <h3 className="text-lg font-bold text-[#263370] mb-3 group-hover:text-[#0c7fae] transition-colors leading-snug">
                  {guide.title}
                </h3>

                <p className="text-[#5b6178] text-xs leading-relaxed font-medium mb-6">
                  {guide.description}
                </p>

              </div>

              <button
                onClick={() => alert(`جاري تحميل: ${guide.title}`)}
                className="w-full py-3 rounded-2xl bg-[#f6f7fb] hover:bg-[#263370] text-[#263370] hover:text-white border border-[#e4e6f0] font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
              >
                <Download className="w-4 h-4 text-[#0c7fae] group-hover:text-white" />
                <span>تحميل الملف ({guide.downloadCount})</span>
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
