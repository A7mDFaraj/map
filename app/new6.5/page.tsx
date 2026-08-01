'use client';

import React from 'react';
import { HeroSection } from '@/components/new6.5/HeroSection';
import { AboutSection } from '@/components/new6.5/AboutSection';
import { InteractiveMapSection } from '@/components/new6.5/InteractiveMapSection';
import { StatsSection } from '@/components/new6.5/StatsSection';
import { PartnersSection } from '@/components/new6.5/PartnersSection';
import { FeaturedAssociationsSection } from '@/components/new6.5/FeaturedAssociationsSection';
import { CTASection } from '@/components/new6.5/CTASection';

export default function New65Page() {
  return (
    <div className="min-h-screen bg-[#12172e] font-sans overflow-x-hidden" dir="rtl">
      <main>
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
