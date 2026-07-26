'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Building2, Network, ShieldCheck, type LucideIcon } from 'lucide-react';
import BrandBackground from '@/components/BrandBackground';

const ORGANIZATION = 'المجلس التخصصي للجمعيات الشبابية';
const INTRO =
  'منصة رقمية موحدة تعزز التنسيق والتكامل بين الجمعيات الشبابية والجهات ذات العلاقة، وتسهل وصول المهتمين والمستفيدين إلى بيانات القطاع الشبابي عبر تجربة تفاعلية منظمة';

const FEATURES: Array<{
  title: string;
  description: string;
  Icon: LucideIcon;
  tone: 'secondary' | 'accent';
}> = [
  {
    title: 'خدمات المنصة',
    description:
      'تتيح الخارطة استعراض الجمعيات الشبابية حسب المنطقة والمدينة والتخصص، مع عرض بيانات التواصل والمواقع الجغرافية والملفات التعريفية، إضافة إلى أدوات تحديث البيانات ولوحة تحكم تسهم في رفع جودة المعلومات',
    Icon: Building2,
    tone: 'secondary',
  },
  {
    title: 'أهمية المنصة',
    description:
      'تسهم المنصة في حصر بيانات الجمعيات الشبابية، وتوفير مصدر وطني موثوق يساعد الشباب والمهتمين والداعمين وصناع القرار على بناء معرفة أوضح بالقطاع الشبابي، وتعزيز فرص التواصل والتعاون',
    Icon: Network,
    tone: 'accent',
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

export default function AboutSection() {
  const [introRef, introVisible] = useInView(0.2);
  const [detailsRef, detailsVisible] = useInView(0.12);

  return (
    <BrandBackground
      as="section"
      variant="light"
      patternOpacity={0.035}
      className="relative py-24 sm:py-32 lg:py-36"
      id="about"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16" dir="rtl">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
          <div
            ref={introRef}
            className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#233A77] p-7 text-white shadow-[0_30px_90px_rgba(35,58,119,0.20)] transition-all duration-[1200ms] ease-out sm:p-10 lg:p-12"
            style={{
              opacity: introVisible ? 1 : 0,
              transform: introVisible ? 'translateY(0)' : 'translateY(36px)',
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: 'url(/brand/logo/frame.svg)',
                backgroundRepeat: 'repeat',
                backgroundSize: '520px auto',
              }}
            />
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 w-1/2"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 38%, rgba(255,255,255,0) 100%)',
              }}
            />
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-[#3EB985] via-[#1C81AC] to-white/0"
            />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 rounded-2xl border border-white/15 bg-white p-4 shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
                    <Image src="/brand/logo/logo-minimal.svg" alt="شعار المجلس" fill className="object-contain p-4" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-white/70">SCY</div>
                    <div className="max-w-[17rem] text-base font-extrabold leading-relaxed text-white">
                      {ORGANIZATION}
                    </div>
                  </div>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/80 backdrop-blur-sm">
                  <ShieldCheck className="h-4 w-4 text-[#3EB985]" strokeWidth={1.8} />
                  <span>{ORGANIZATION}</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-3xl">
                  <h2 className="mb-6 text-4xl font-black leading-[1.2] text-white sm:text-5xl lg:text-6xl">
                    نبذة عن{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#3EB985] to-[#8adfb9]">
                      المنصة
                    </span>
                  </h2>
                  <p className="max-w-2xl text-lg font-medium leading-relaxed text-white/80 sm:text-xl">
                    {INTRO}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div ref={detailsRef} className="flex flex-col gap-5">
            {FEATURES.map((item, index) => {
              const Icon = item.Icon;
              const isAccent = item.tone === 'accent';

              return (
                <article
                  key={item.title}
                  className="group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-[#e4e6f0] bg-white/95 p-7 shadow-[0_18px_55px_rgba(35,58,119,0.08)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#1C81AC]/25 hover:shadow-[0_28px_70px_rgba(35,58,119,0.12)] sm:p-8 lg:p-10"
                  style={{
                    opacity: detailsVisible ? 1 : 0,
                    transform: detailsVisible ? 'translateY(0)' : 'translateY(34px)',
                    transitionDelay: `${index * 140 + 120}ms`,
                    transitionProperty: 'opacity, transform, box-shadow, border-color',
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 origin-right scale-x-0 bg-gradient-to-l from-[#3EB985] to-[#1C81AC] transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-y-6 right-0 w-px bg-gradient-to-b from-transparent via-[#1C81AC]/20 to-transparent"
                  />

                  <div className="relative z-10 mb-6 flex items-start justify-start">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        isAccent ? 'bg-[#3EB985]/10 text-[#2e8b64]' : 'bg-[#1C81AC]/10 text-[#1C81AC]'
                      } transition-transform duration-500 group-hover:scale-105`}
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.65} />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="mb-4 text-2xl font-black leading-tight text-[#233A77] transition-colors duration-300 group-hover:text-[#1C81AC] sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-[#5b6178] sm:text-lg">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </BrandBackground>
  );
}
