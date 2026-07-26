'use client';

import { useEffect, useRef, useState } from 'react';
import BrandBackground from '@/components/BrandBackground';
import { YOUTH_ASSOCIATIONS } from '@/data/associationsData';
import { CheckCircle2, ShieldCheck, ArrowUpLeft } from 'lucide-react';

// ponytail: simple IntersectionObserver hook
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

export default function FeaturedAssociationsSection() {
  const section = useInView(0.1);
  const cards = useInView(0.1);

  // Take the first 4 associations
  const featured = YOUTH_ASSOCIATIONS.slice(0, 4);

  // Elegant colors for logo placeholders
  const logoGradients = [
    'from-[#235851] to-[#1a403b]', // Dark greenish
    'from-[#20295A] to-[#141a3d]', // Dark navy
    'from-[#293652] to-[#1b253b]', // Dark grayish blue
    'from-[#5C3D2E] to-[#3b261c]', // Dark brown
  ];

  return (
    <BrandBackground
      as="section"
      variant="light"
      patternOpacity={0.03}
      className="py-24 sm:py-32 relative z-10"
      id="featured-associations"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16" dir="rtl">
        
        {/* ── Top: Strategic Partners ── */}
        <div 
          ref={section.ref}
          className="flex flex-col items-center justify-center mb-28 transition-all duration-[1000ms] ease-out"
          style={{ opacity: section.visible ? 1 : 0, transform: section.visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-[2px] bg-gradient-to-r from-transparent to-[#1C81AC]" />
            <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-[#233A77] to-[#1C81AC]">
              شركاؤنا الاستراتيجيون
            </h3>
            <div className="w-10 h-[2px] bg-gradient-to-l from-transparent to-[#1C81AC]" />
          </div>
          
          {/* Glassmorphism Placeholders for Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {[1, 2, 3].map((_, idx) => (
              <div 
                key={idx} 
                className="w-40 sm:w-48 h-16 sm:h-20 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_4px_24px_rgba(35,58,119,0.03)] flex items-center justify-center relative overflow-hidden group hover:bg-white/60 hover:shadow-[0_8px_32px_rgba(28,129,172,0.08)] transition-all duration-500"
              >
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <div className="w-1/2 h-1/3 rounded-full bg-[#233A77]/10" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Middle: Section Heading ── */}
        <div className="flex flex-col items-center justify-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#1C81AC]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div 
            className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#1C81AC]/15 text-[#1C81AC] mb-6 transition-all duration-[1000ms] ease-out delay-200 shadow-[0_4px_16px_rgba(28,129,172,0.06)]"
            style={{ opacity: section.visible ? 1 : 0, transform: section.visible ? 'translateY(0)' : 'translateY(15px)' }}
          >
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm font-bold tracking-wide">الجمعيات المميزة</span>
          </div>
          
          <h2 
            className="relative text-4xl sm:text-5xl lg:text-6xl font-black text-[#233A77] transition-all duration-[1000ms] ease-out delay-300"
            style={{ opacity: section.visible ? 1 : 0, transform: section.visible ? 'translateY(0)' : 'translateY(20px)' }}
          >
            جمعيات مبادرة
          </h2>
        </div>

        {/* ── Bottom: Premium Cards Grid ── */}
        <div 
          ref={cards.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
        >
          {featured.map((assoc, i) => (
            <div
              key={assoc.id}
              className="relative bg-gradient-to-b from-white to-[#f6f7fb]/30 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#e4e6f0] hover:border-[#1C81AC]/20 hover:shadow-[0_20px_40px_rgba(28,129,172,0.08)] transition-all duration-500 hover:-translate-y-1.5 group overflow-hidden"
              style={{
                opacity: cards.visible ? 1 : 0,
                transform: cards.visible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${i * 150}ms`,
              }}
            >
              {/* Bottom Animated Accent Line */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#1C81AC] to-[#3EB985] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
              
              {/* Top Right Hover Arrow */}
              <div className="absolute top-6 left-6 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
                <div className="w-8 h-8 rounded-full bg-[#f6f7fb] flex items-center justify-center text-[#1C81AC]">
                  <ArrowUpLeft className="w-4 h-4" />
                </div>
              </div>

              {/* Card Header: Tags & Logo */}
              <div className="w-full flex justify-between items-start mb-8 z-10 relative">
                {/* Tags */}
                <div className="flex flex-col gap-2 items-end">
                  <span className="px-3 py-1 rounded-full bg-[#233A77]/5 text-[#233A77] text-[10px] sm:text-xs font-bold transition-colors group-hover:bg-[#1C81AC]/10 group-hover:text-[#1C81AC]">
                    {assoc.category}
                  </span>
                  {assoc.tags.slice(0, 1).map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#233A77]/5 text-[#233A77] text-[10px] sm:text-xs font-bold transition-colors group-hover:bg-[#1C81AC]/10 group-hover:text-[#1C81AC]">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Logo with Checkmark */}
                <div className="relative group-hover:scale-105 transition-transform duration-500">
                  <div className={`w-16 h-16 rounded-[1.25rem] bg-gradient-to-br ${logoGradients[i % logoGradients.length]} flex items-center justify-center shadow-inner relative overflow-hidden`}>
                    {/* Inner subtle glow */}
                    <div className="absolute inset-0 bg-white/10 rounded-[1.25rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Abstract knot/pattern icon inside logo */}
                    <svg className="w-8 h-8 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="4" strokeDasharray="4 4" />
                      <path d="M8 8h8v8H8z" strokeDasharray="2 2" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                    </svg>
                  </div>
                  {/* Verified Badge */}
                  {assoc.verified && (
                    <div className="absolute -bottom-2 -left-2 bg-white rounded-full p-1 shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                      <CheckCircle2 className="w-5 h-5 text-[#3EB985]" fill="white" />
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <h4 className="text-xl sm:text-2xl font-extrabold text-[#233A77] mb-4 leading-tight w-full text-right group-hover:text-[#1C81AC] transition-colors relative z-10">
                {assoc.name}
              </h4>
              <p className="text-[#5b6178] text-sm leading-relaxed text-right w-full font-medium relative z-10">
                {assoc.description.length > 90 ? assoc.description.slice(0, 90) + '...' : assoc.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </BrandBackground>
  );
}
