'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowLeft, Layers, Palette, Type, Shield, MapPin, Grid, CheckCircle2, X } from 'lucide-react';

interface TocItem {
  id: string;
  titleAr: string;
  titleEn: string;
  desc: string;
  badgeColor?: string;
  icon: React.ElementType;
}

const TOC_ITEMS: TocItem[] = [
  {
    id: 'A',
    titleAr: 'شعار المجلس',
    titleEn: 'Brand logo',
    desc: 'الشعار ينطلق من خارطة المملكة العربية السعودية مدمجاً مع مجسمات الشباب بنسب متوزنة ورمزيات واضحة.',
    icon: Shield,
  },
  {
    id: 'B',
    titleAr: 'أماكن الشعار',
    titleEn: 'Logo locations',
    desc: 'قواعد وحسابات مساحات الأمان وحظر التحريف أو الإمالة لضمان بقاء الهوية موحدة في كافة المطبوعات والمنصات.',
    icon: MapPin,
  },
  {
    id: 'C',
    titleAr: 'ألوان الهوية',
    titleEn: 'identity colors',
    desc: 'النسب الرسمية للألوان: 60% للأزرق الداكن القيادي، 25% للأخضر الحيوي، و15% للسماوي الرابط.',
    icon: Palette,
  },
  {
    id: 'D',
    titleAr: 'خطوط الهوية',
    titleEn: 'identity font',
    desc: 'خط "نور" و"تجوال" للعربية، وخط Galano للغة الإنجليزية لتوفير اتساق طباعي متكامل.',
    icon: Type,
  },
  {
    id: 'E',
    titleAr: 'عناصر الهوية',
    titleEn: 'Identity elements',
    desc: 'الأنماط البصرية الجانبية (Patterns) والأيقونات الخطية ذات الزوايا الدائرية الحديثة.',
    badgeColor: '#3EB985',
    icon: Layers,
  },
  {
    id: 'F',
    titleAr: 'مشاريع المجلس',
    titleEn: 'Council projects',
    desc: 'الهويات الفرعية والمبادرات والمنصات الوطنية التابعة للمجلس التخصصي للجمعيات الشبابية.',
    badgeColor: '#3EB985',
    icon: Grid,
  },
];

export const IdentityTocSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<TocItem | null>(null);

  return (
    <section id="identity-toc" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C81AC]/10 border border-[#1C81AC]/20 text-[#1C81AC] font-bold text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#3EB985]" />
            <span>تطبيق الهوية البصرية الرسمية 2025</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#233A77] tracking-tight">
            عناصر دليل الهوية البصرية <span className="text-[#1C81AC]">الأساسية</span>
          </h2>
          <p className="mt-3 text-sm text-[#233A77]/70 max-w-2xl font-medium">
            تطبيق مباشر لأسلوب العرض المعتمد في دليل الهوية، بالسطح السماوي الغني والأشرطة الجانبية المزخرفة.
          </p>
        </div>

        {/* Replicated Slide 2 Container (Solid Teal #1C81AC with Right Side Pattern Overlay) */}
        <div className="relative rounded-3xl bg-[#1C81AC] text-white p-8 sm:p-12 md:pr-24 shadow-2xl overflow-hidden border border-white/10">
          
          {/* Right-Edge Vertical Pattern Strip Frame */}
          <div 
            className="absolute top-0 right-0 bottom-0 w-28 sm:w-36 pointer-events-none opacity-20 bg-repeat-y bg-contain border-l border-white/15"
            style={{ 
              backgroundImage: "url('/brand/logo/pattern.svg')",
              filter: 'brightness(0) invert(1)',
            }}
          />

          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#3EB985]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

          {/* Grid Layout Replicating Slide 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 relative z-10">
            {TOC_ITEMS.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedItem(item)}
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 transition-all cursor-pointer backdrop-blur-sm"
                >
                  {/* Letter Index Badge (A, B, C...) */}
                  <span 
                    className="text-4xl sm:text-5xl font-black tracking-tighter shrink-0 transition-transform group-hover:scale-110"
                    style={{ color: item.badgeColor || '#FFFFFF' }}
                  >
                    {item.id}
                  </span>

                  {/* Vertical Divider Bar (|) */}
                  <div className="w-[2px] h-12 bg-white/40 group-hover:bg-[#3EB985] transition-colors shrink-0 mt-1" />

                  {/* Text Label & English Subtitle */}
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-200 transition-colors flex items-center gap-2">
                      {item.titleAr}
                    </h3>
                    <span className="text-xs text-white/70 font-normal tracking-wide mt-0.5">
                      {item.titleEn}
                    </span>
                    <span className="text-[11px] text-white/60 line-clamp-2 mt-2 font-light leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Card Footer Banner */}
          <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 text-xs text-white/80">
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#3EB985]" />
              <span>دليل رسمي معتمد من المجلس التخصصي للجمعيات الشبابية (إصدار 2025)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/10 font-mono text-[11px]">Ratios: 60% Navy • 25% Green • 15% Teal</span>
            </div>
          </div>

        </div>

      </div>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-[#e4e6f0] text-[#233A77] relative overflow-hidden"
            >
              {/* Pattern Header Overlay */}
              <div className="h-2 bg-gradient-to-r from-[#1C81AC] via-[#3EB985] to-[#233A77] absolute top-0 inset-x-0" />

              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-[#1C81AC] bg-[#1C81AC]/10 w-12 h-12 rounded-2xl flex items-center justify-center">
                    {selectedItem.id}
                  </span>
                  <div>
                    <h3 className="font-extrabold text-xl text-[#233A77]">{selectedItem.titleAr}</h3>
                    <p className="text-xs text-[#1C81AC] font-semibold">{selectedItem.titleEn}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 rounded-xl text-gray-400 hover:text-gray-600 bg-[#f6f7fb]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-[#233A77]/80 leading-relaxed font-medium mb-6">
                {selectedItem.desc}
              </p>

              <div className="p-4 rounded-2xl bg-[#f6f7fb] border border-[#e4e6f0] flex items-center justify-between text-xs font-bold text-[#233A77]">
                <span>حالة الاعتماد في النظام:</span>
                <span className="bg-[#3EB985]/15 text-[#3EB985] px-3 py-1 rounded-full border border-[#3EB985]/30">
                  مطبّق في الهوية
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
