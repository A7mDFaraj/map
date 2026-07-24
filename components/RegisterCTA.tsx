'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, ArrowLeft, Building2, Layers, CheckCircle2 } from 'lucide-react';

interface RegisterCTAProps {
  onOpenRegister: () => void;
}

export const RegisterCTA: React.FC<RegisterCTAProps> = ({ onOpenRegister }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#263370] text-white">
      
      {/* Decorative Pattern & Ambient Glows */}
      <div className="absolute inset-0 brand-pattern-bg opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0c7fae]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#42b07a]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Content Column */}
          <div className="max-w-2xl text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#42b07a]/20 text-[#42b07a] font-bold text-xs mb-4 border border-[#42b07a]/30">
              <Sparkles className="w-4 h-4" />
              <span>انضم إلى الخريطة التفاعلية</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black leading-tight mb-4">
              هل أنت ممثل لجمعية شبابية؟
            </h2>

            <p className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed mb-6">
              سجل جمعيتك مجاناً واحصل على ملف تعريفي شامل وإمكانية التواصل المباشر مع المهتمين
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold text-slate-200">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#42b07a]" />
                <span>توثيق رسمي معتمد</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0c7fae]" />
                <span>ربط بالجهات المانحة</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#42b07a]" />
                <span>لوحة إحصائيات متقدمة</span>
              </div>
            </div>
          </div>

          {/* CTA Action */}
          <div className="shrink-0 flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-black text-base border border-white/20 flex items-center justify-center transition-all">
              <span>تعرف على المزايا</span>
            </button>
            <button
              onClick={onOpenRegister}
              className="px-8 py-4 bg-[#0c7fae] hover:bg-[#0a6a91] text-white rounded-2xl font-black text-base shadow-xl shadow-[#0c7fae]/30 flex items-center justify-center gap-3 transition-all hover:scale-105"
            >
              <span>سجل جمعيتك الآن</span>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};
