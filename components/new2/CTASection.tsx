'use client';

import { useEffect, useRef, useState } from 'react';
import BrandBackground from '@/components/BrandBackground';
import { SAUDI_REGIONS } from '@/data/mapRegionsData';
import { Megaphone, Users, Heart, MapPin } from 'lucide-react';

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function CTASection() {
  const section = useInView(0.1);

  return (
    <section className="py-20 sm:py-32 px-6 sm:px-10 lg:px-16" dir="rtl">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float 7s ease-in-out infinite 1s; }
        .animate-float-reverse { animation: float 8s ease-in-out infinite reverse; }
      `}} />
      <div className="max-w-7xl mx-auto">
        <div 
          ref={section.ref}
          className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(28,129,172,0.1)] transition-all duration-[1200ms] ease-out"
          style={{ 
            opacity: section.visible ? 1 : 0, 
            transform: section.visible ? 'translateY(0)' : 'translateY(40px)',
            background: 'linear-gradient(135deg, #e6f3fb 0%, #cce5f7 100%)' 
          }}
        >
          {/* Subtle Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: 'url(/brand/logo/pattern.svg)', backgroundSize: '400px' }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-10 sm:p-16 lg:p-20 gap-16 lg:gap-8">
            
            {/* ── Right: Content ── */}
            <div className="flex-1 max-w-2xl text-center lg:text-right">
              {/* Badge */}
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 text-[#5b6178] mb-6 shadow-sm">
                <span className="text-xs sm:text-sm font-bold tracking-wide">انضم إلى الخريطة التفاعلية</span>
              </div>
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#233A77] mb-6 leading-[1.3]">
                هل أنت ممثل لجمعية شبابية؟
              </h2>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-[#5b6178] font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                سجل جمعيتك مجاناً واحصل على ملف تعريفي شامل وإمكانية التواصل المباشر مع المهتمين
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#233A77] text-white font-bold hover:bg-[#1c2e5e] hover:shadow-[0_8px_24px_rgba(35,58,119,0.25)] hover:-translate-y-1 transition-all duration-300">
                  سجل جمعيتك الآن
                </button>
                <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 text-[#233A77] font-bold hover:bg-white/60 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300">
                  تعرف على المزايا
                </button>
              </div>
            </div>

            {/* ── Left: Interactive Map Graphic ── */}
            <div className="flex-1 w-full flex items-center justify-center lg:justify-end relative min-h-[350px]">
              {/* Radar Rings behind map */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-white/40 border-dashed animate-[spin_40s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border border-white/60 border-dashed animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] bg-white/30 rounded-full blur-2xl" />

              {/* Mini Saudi Map */}
              <div className="relative w-full max-w-[320px] drop-shadow-[0_12px_24px_rgba(28,129,172,0.15)] z-10">
                <svg viewBox="0 0 700 620" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                  {SAUDI_REGIONS.map((region) => (
                    <path
                      key={region.id}
                      d={region.svgPath}
                      fill="url(#cta-map-grad)"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth={1.5}
                    />
                  ))}
                  <defs>
                    <linearGradient id="cta-map-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#78bce0" />
                      <stop offset="100%" stopColor="#579cc4" />
                    </linearGradient>
                  </defs>
                  
                  {/* Dashed lines connecting pins */}
                  <path d="M 270 250 Q 320 180 370 220 T 450 300" fill="none" stroke="white" strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />
                </svg>

                {/* Map Pins overlayed using absolute positioning to sync with specific spots */}
                <div className="absolute top-[35%] left-[45%] text-white animate-bounce" style={{ animationDelay: '0ms' }}>
                  <MapPin className="w-6 h-6 fill-[#233A77] drop-shadow-md" />
                </div>
                <div className="absolute top-[25%] left-[55%] text-white animate-bounce" style={{ animationDelay: '200ms' }}>
                  <MapPin className="w-5 h-5 fill-[#233A77] drop-shadow-md" />
                </div>
                <div className="absolute top-[48%] left-[62%] text-white animate-bounce" style={{ animationDelay: '400ms' }}>
                  <MapPin className="w-7 h-7 fill-[#233A77] drop-shadow-md" />
                </div>
              </div>

              {/* Floating Glassmorphism Cards */}
              
              {/* Card 1: Users */}
              <div className="absolute top-[10%] left-[5%] md:left-[15%] lg:-left-[10%] w-32 bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-[0_8px_32px_rgba(28,129,172,0.12)] border border-white animate-float z-20">
                <div className="w-8 h-8 rounded-full bg-[#1C81AC]/10 flex items-center justify-center text-[#1C81AC] mb-2">
                  <Users className="w-4 h-4" />
                </div>
                <div className="w-20 h-1.5 rounded-full bg-[#e4e6f0] mb-1.5" />
                <div className="w-14 h-1.5 rounded-full bg-[#e4e6f0]" />
              </div>

              {/* Card 2: Megaphone */}
              <div className="absolute bottom-[20%] left-0 md:left-[10%] lg:-left-[5%] w-36 bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-[0_8px_32px_rgba(28,129,172,0.12)] border border-white animate-float-reverse z-20">
                <div className="w-8 h-8 rounded-full bg-[#233A77]/10 flex items-center justify-center text-[#233A77] mb-2">
                  <Megaphone className="w-4 h-4" />
                </div>
                <div className="w-24 h-1.5 rounded-full bg-[#e4e6f0] mb-1.5" />
                <div className="w-16 h-1.5 rounded-full bg-[#e4e6f0]" />
              </div>

              {/* Card 3: Heart */}
              <div className="absolute top-[25%] right-[5%] md:right-[15%] lg:-right-[5%] w-32 bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-[0_8px_32px_rgba(28,129,172,0.12)] border border-white animate-float-delay z-20">
                <div className="w-8 h-8 rounded-full bg-[#3EB985]/10 flex items-center justify-center text-[#3EB985] mb-2">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="w-16 h-1.5 rounded-full bg-[#e4e6f0] mb-1.5" />
                <div className="w-10 h-1.5 rounded-full bg-[#e4e6f0]" />
              </div>

              {/* Mini Icon Card */}
              <div className="absolute bottom-[15%] right-[10%] md:right-[20%] lg:right-[5%] w-12 h-12 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-[0_8px_32px_rgba(28,129,172,0.12)] border border-white animate-float z-20">
                <Users className="w-5 h-5 text-[#233A77]" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
