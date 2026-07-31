'use client';

import React from 'react';
import { HeroSection } from '@/components/new6/HeroSection';
import { AboutSection } from '@/components/new6/AboutSection';
import { InteractiveMapSection } from '@/components/new6/InteractiveMapSection';
import { StatsSection } from '@/components/new6/StatsSection';
import { PartnersSection } from '@/components/new6/PartnersSection';
import { FeaturedAssociationsSection } from '@/components/new6/FeaturedAssociationsSection';
import { CTASection } from '@/components/new6/CTASection';

export default function New6Page() {
  return (
    <div className="min-h-screen bg-[#12172e] font-sans" dir="rtl">
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
