# Layouts

## `app/layout.tsx`

Root layout with Arabic RTL direction and Tajawal font.

```tsx
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "خارطة الجمعيات الشبابية | المجلس التخصصي للجمعيات الشبابية",
  description: "المنصة التفاعلية الرسمية للخارطة الرقمية للجمعيات الشبابية بالمملكة العربية السعودية. تمكين الوصول للبيانات، تعزيز التكامل، واستكشاف المبادرات الشبابية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col antialiased bg-white text-[#12172e] selection:bg-[#0c7fae] selection:text-white">
        {children}
      </body>
    </html>
  );
}
```

## `components/Footer.tsx`

Shared footer used by the original home route.

```tsx
'use client';

import React from 'react';
import { MapPin, Mail, Globe, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#12172e] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 brand-pattern-bg opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#263370] text-white border border-white/20 font-black text-lg flex items-center justify-center">SCY</div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white">خارطة الجمعيات الشبابية</span>
                <span className="text-xs text-slate-400 font-bold">المجلس التخصصي للجمعيات الشبابية</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md font-medium mb-6">
              المنصة الرقمية التفاعلية الموحدة لرصد وتطوير وتمكين الجمعيات الشبابية في المملكة العربية السعودية وتحقيق التنسيق المستدام.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400 font-bold">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-[#42b07a]" />منصة معتمدة رسمياً</span>
              <span>•</span>
              <span>رؤية المملكة 2030</span>
            </div>
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-cyan-300 mb-4">القائمة الرئيسية</h4>
            <ul className="space-y-2.5 text-xs font-bold text-slate-300">
              <li><a href="#hero">الرئيسية</a></li>
              <li><a href="#interactive-map">الخريطة التفاعلية</a></li>
              <li><a href="#featured-associations">دليل الجمعيات</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-cyan-300 mb-4">روابط المنظومة</h4>
            <ul className="space-y-2.5 text-xs font-bold text-slate-300">
              <li><a href="https://scy.org.sa">الموقع الرئيسي للمجلس</a></li>
              <li><a href="https://ncd.gov.sa">المركز الوطني للقطاع غير الربحي</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-cyan-300 mb-4">التواصل والدعم</h4>
            <ul className="space-y-3 text-xs font-bold text-slate-300">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#0c7fae]" />الرياض، المملكة العربية السعودية</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#42b07a]" />info@scy.org.sa</li>
              <li className="flex items-center gap-2"><Globe className="w-4 h-4 text-[#0c7fae]" />map.scy.org.sa</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-400">
          <div>جميع الحقوق محفوظة للمجلس التخصصي للجمعيات الشبابية (SCY)</div>
          <div className="flex items-center gap-1">تم التطوير وفق أعلى المعايير الرسمية <Heart className="w-3.5 h-3.5 text-[#42b07a] fill-current" /></div>
        </div>
      </div>
    </footer>
  );
};
```
