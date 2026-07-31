'use client';

import React from 'react';
import { Navbar } from '@/components/new5/Navbar';
import { HeroSection } from '@/components/new5/HeroSection';
import { LivingSaudiMap } from '@/components/new5/LivingSaudiMap';

export default function New5Page() {
  return (
    <div className="min-h-screen bg-white text-[#233A77] font-sans" dir="rtl">
      {/* Sleek Compact Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section with Right Vertical Identity Strip (Solid Gradient on far right + Frame Pattern Strip to its left) */}
        <HeroSection />

        {/* 2. Living 3D Animated Saudi Map with Electric Neon Brand Circuits & Dynamic Pulse Animations */}
        <LivingSaudiMap />
      </main>
    </div>
  );
}
