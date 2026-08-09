'use client';

import React from 'react';
import { HeroSection } from '@/components/new7/HeroSection';
import { AboutSection } from '@/components/new7/AboutSection';
import { InteractiveMapSection } from '@/components/new7/InteractiveMapSection';
import { StatsSection } from '@/components/new7/StatsSection';
import { PartnersSection } from '@/components/new7/PartnersSection';
import { FeaturedAssociationsSection } from '@/components/new7/FeaturedAssociationsSection';
import { CTASection } from '@/components/new7/CTASection';

export default function New7Page() {
  return (
    <div className="min-h-screen bg-[#12172e] font-sans overflow-x-hidden" dir="rtl">
      <main style={{ scrollSnapType: 'y proximity' }}>
        <HeroSection />
        <AboutSection />
        <InteractiveMapSection />
        <StatsSection />
        <PartnersSection />
        <FeaturedAssociationsSection />
        <CTASection />
      </main>
    </div>
  );
}
