'use client';

import React from 'react';
import { HeroSection } from '@/components/new8/HeroSection';
import { AboutSection } from '@/components/new8/AboutSection';
import { InteractiveMapSection } from '@/components/new8/InteractiveMapSection';
import { StatsSection } from '@/components/new8/StatsSection';
import { PartnersSection } from '@/components/new8/PartnersSection';
import { FeaturedAssociationsSection } from '@/components/new8/FeaturedAssociationsSection';
import { CTASection } from '@/components/new8/CTASection';

export default function New8Page() {
  return (
    <div className="min-h-screen bg-[#12172e] font-sans overflow-x-hidden" dir="rtl">
      <main style={{ scrollSnapType: 'y proximity' }}>
        <HeroSection />
        <AboutSection />
        <InteractiveMapSection />
        <StatsSection />
        {/* <PartnersSection /> */}
        <FeaturedAssociationsSection />
        <CTASection />
      </main>
    </div>
  );
}
