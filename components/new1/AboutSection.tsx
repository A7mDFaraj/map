'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import BrandBackground from '@/components/BrandBackground';

const FEATURES = [
  {
    title: 'خدمات المنصة',
    description:
      'تتيح الخارطة استعراض الجمعيات الشبابية حسب المنطقة والمدينة والتخصص، مع عرض بيانات التواصل والمواقع الجغرافية والملفات التعريفية، إضافة إلى أدوات تحديث البيانات ولوحة تحكم تسهم في رفع جودة المعلومات',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: 'أهمية المنصة',
    description:
      'تسهم المنصة في حصر بيانات الجمعيات الشبابية، وتوفير مصدر وطني موثوق يساعد الشباب والمهتمين والداعمين وصناع القرار على بناء معرفة أوضح بالقطاع الشبابي، وتعزيز فرص التواصل والتعاون',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'رؤية المنصة',
    description:
      'أن تكون المنصة المرجع الرقمي الأول لقطاع الجمعيات الشبابية في المملكة العربية السعودية، وأداة فاعلة في دعم صناع القرار وتمكين الشباب',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

// ponytail: simple IntersectionObserver hook — no dep
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function AboutSection() {
  const header = useInView(0.2);
  const cards = useInView(0.1);

  return (
    <BrandBackground
      as="section"
      variant="light"
      patternOpacity={0.03}
      className="py-24 sm:py-32"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16" dir="rtl">

        {/* ── Header ── */}
        <div
          ref={header.ref}
          className="flex flex-col md:flex-row items-center md:items-start gap-7 md:gap-10 mb-20 transition-all duration-[1200ms] ease-out"
          style={{
            opacity: header.visible ? 1 : 0,
            transform: header.visible ? 'translateY(0)' : 'translateY(36px)',
          }}
        >
          {/* Logo emblem */}
          <div className="shrink-0 w-24 h-24 rounded-2xl bg-white border border-[#e4e6f0] flex items-center justify-center p-4 shadow-[0_8px_32px_rgba(35,58,119,0.06)]">
            <div className="relative w-full h-full">
              <Image src="/brand/logo/logo-minimal.svg" alt="شعار المجلس" fill className="object-contain" />
            </div>
          </div>

          <div className="text-center md:text-right flex-1">
            {/* Institutional tag */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="inline-block w-8 h-[2px] bg-[#3EB985] rounded-full" />
              <span className="text-[#3EB985] text-xs sm:text-sm font-bold tracking-wide">
                المجلس التخصصي للجمعيات الشبابية
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#233A77] mb-5 leading-tight">
              نبذة عن{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#1C81AC] to-[#3EB985]">
                المنصة
              </span>
            </h2>

            <p className="text-[#5b6178] text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl font-medium">
              منصة رقمية موحدة تعزز التنسيق والتكامل بين الجمعيات الشبابية والجهات ذات العلاقة،
              وتسهل وصول المهتمين والمستفيدين إلى بيانات القطاع الشبابي عبر تجربة تفاعلية منظمة
            </p>
          </div>
        </div>

        {/* ── Feature Cards ── */}
        <div
          ref={cards.ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {FEATURES.map((item, i) => (
            <div
              key={item.title}
              className="group relative rounded-2xl bg-white border border-[#e4e6f0] p-8 sm:p-10 hover:border-[#1C81AC]/20 hover:shadow-[0_20px_40px_rgba(35,58,119,0.06)] transition-all duration-500 overflow-hidden"
              style={{
                opacity: cards.visible ? 1 : 0,
                transform: cards.visible ? 'translateY(0)' : 'translateY(40px)',
                transitionDuration: '900ms',
                transitionDelay: `${i * 150 + 200}ms`,
                transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
                transitionProperty: 'opacity, transform',
              }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#1C81AC] to-[#3EB985] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1C81AC]/10 text-[#1C81AC] mb-6 group-hover:bg-[#1C81AC]/15 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#233A77] mb-4 group-hover:text-[#1C81AC] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-[#5b6178] text-sm sm:text-base leading-relaxed group-hover:text-[#4a5065] transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </BrandBackground>
  );
}
