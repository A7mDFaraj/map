'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#12172e] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 brand-pattern-bg opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#263370] text-white border border-white/20 font-black text-lg flex items-center justify-center">
                SCY
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white">خارطة الجمعيات الشبابية</span>
                <span className="text-xs text-slate-400 font-bold">المجلس التخصصي للجمعيات الشبابية</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md font-medium mb-6">
              المنصة الرقمية التفاعلية الموحدة لرصد وتطوير وتمكين الجمعيات الشبابية في المملكة العربية السعودية وتحقيق التنسيق المستدام.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400 font-bold">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#42b07a]" />
                منصة معتمدة رسمياً
              </span>
              <span>•</span>
              <span>رؤية المملكة 2030</span>
            </div>
          </div>

          {/* Col 3: Links Group 1 */}
          <div>
            <h4 className="font-extrabold text-sm text-cyan-300 mb-4">القائمة الرئيسية</h4>
            <ul className="space-y-2.5 text-xs font-bold text-slate-300">
              <li><a href="#hero" className="hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#interactive-map" className="hover:text-cyan-300 transition-colors">الخريطة التفاعلية</a></li>
              <li><a href="#featured-associations" className="hover:text-white transition-colors">دليل الجمعيات</a></li>
              <li><a href="#guides" className="hover:text-white transition-colors">الأدلة والنماذج</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">عدسة الجمعيات</a></li>
            </ul>
          </div>

          {/* Col 4: Links Group 2 */}
          <div>
            <h4 className="font-extrabold text-sm text-cyan-300 mb-4">روابط المنظومة</h4>
            <ul className="space-y-2.5 text-xs font-bold text-slate-300">
              <li><a href="https://scy.org.sa" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">الموقع الرئيسي للمجلس</a></li>
              <li><a href="https://nadi.scy.org.sa" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">روزنامة الأندية الشبابية</a></li>
              <li><a href="https://ncd.gov.sa" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">المركز الوطني للقطاع غير الربحي</a></li>
              <li><a href="https://mos.gov.sa" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">وزارة الرياضة</a></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div>
            <h4 className="font-extrabold text-sm text-cyan-300 mb-4">التواصل والدعم</h4>
            <ul className="space-y-3 text-xs font-bold text-slate-300">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0c7fae]" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#42b07a]" />
                <span>info@scy.org.sa</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#0c7fae]" />
                <span>map.scy.org.sa</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-400">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} للمجلس التخصصي للجمعيات الشبابية (SCY)
          </div>

          <div className="flex items-center gap-1">
            <span>تم التطوير وفق أعلى المعايير الرسمية</span>
            <Heart className="w-3.5 h-3.5 text-[#42b07a] fill-current" />
          </div>
        </div>

      </div>
    </footer>
  );
};
