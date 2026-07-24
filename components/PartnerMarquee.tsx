'use client';

import React from 'react';
import { Handshake } from 'lucide-react';
import { STRATEGIC_PARTNERS } from '../data/brandAssets';

export const PartnerMarquee: React.FC = () => {
  // Duplicate array to enable seamless infinite CSS scrolling
  const marqueeItems = [...STRATEGIC_PARTNERS, ...STRATEGIC_PARTNERS, ...STRATEGIC_PARTNERS];

  return (
    <section className="py-16 bg-white border-y border-[#e4e6f0] overflow-hidden relative">
      
      {/* Side Fade Overlays */}
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#263370]/10 text-[#263370] font-bold text-xs">
          <Handshake className="w-4 h-4 text-[#0c7fae]" />
          <span>شركاؤنا الاستراتيجيون</span>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 py-2">
          {marqueeItems.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#f6f7fb] border border-[#e4e6f0] hover:border-[#0c7fae] transition-all duration-300 shadow-sm shrink-0 group cursor-default"
            >
              <div className="w-9 h-9 rounded-xl bg-[#263370] text-white font-extrabold text-xs flex items-center justify-center group-hover:bg-[#0c7fae] transition-colors">
                {partner.logoText.slice(0, 2)}
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-sm text-[#263370] group-hover:text-[#0c7fae] transition-colors whitespace-nowrap">
                  {partner.name}
                </span>
                <span className="text-[11px] text-[#5b6178] font-semibold">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
