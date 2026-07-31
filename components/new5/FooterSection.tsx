'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Heart, ExternalLink, Compass, MapPin } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#233A77] text-white pt-16 pb-12 relative overflow-hidden border-t border-white/10">
      
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5 bg-repeat bg-contain"
        style={{ 
          backgroundImage: "url('/brand/logo/pattern.svg')",
          filter: 'brightness(0) invert(1)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          
          {/* Council Info Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1C81AC] flex items-center justify-center font-extrabold text-white text-base">
                SCY
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white">المجلس التخصصي للجمعيات الشبابية</h3>
                <p className="text-xs text-white/70">Specialized Council for Youth NGOs</p>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed font-light max-w-md">
              المظلة التخصصية الأولى لتنسيق وتمكين الجمعيات الشبابية في المملكة العربية السعودية، وسند القطاع الثالث لتحقيق رؤية المملكة 2030.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-emerald-300 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#3EB985]" />
              <span>دليل الهوية البصرية المعتمد (إصدار 2025)</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-sm text-white mb-3 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#3EB985]" />
              <span>روابط المنصة</span>
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-medium">
              <li>
                <a href="#hero" className="hover:text-emerald-300 transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="#identity-toc" className="hover:text-emerald-300 transition-colors">دليل الهوية البصرية</a>
              </li>
              <li>
                <a href="#interactive-map" className="hover:text-emerald-300 transition-colors">الخريطة التفاعلية للمناطق</a>
              </li>
              <li>
                <a href="#featured" className="hover:text-emerald-300 transition-colors">دليل الجمعيات المعتمدة</a>
              </li>
            </ul>
          </div>

          {/* Identity Palette Specs (4 cols) */}
          <div className="md:col-span-4 space-y-3 bg-white/5 p-5 rounded-2xl border border-white/10">
            <h4 className="font-bold text-sm text-white flex items-center justify-between">
              <span>نسب ألوان الهوية الرسمية</span>
              <span className="text-[10px] text-emerald-300 font-mono">2025 Edition</span>
            </h4>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#233A77] border border-white/40" />
                  الأزرق الداكن (الأساسي)
                </span>
                <span className="font-mono text-white/70">#233A77 • 60%</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#1C81AC]" />
                  السماوي (الثانوي)
                </span>
                <span className="font-mono text-white/70">#1C81AC • 15%</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#3EB985]" />
                  الأخضر (التمويج والتأكيد)
                </span>
                <span className="font-mono text-white/70">#3EB985 • 25%</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70 font-medium">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لـ المجلس التخصصي للجمعيات الشبابية.</p>
          <p className="flex items-center gap-1">
            صُمم وطُبق وفق كتاب دليل الهوية البصرية الرسمية
          </p>
        </div>

      </div>
    </footer>
  );
};
