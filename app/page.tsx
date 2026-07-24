'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { InteractiveSaudiMap } from '../components/InteractiveSaudiMap';
import { FeaturedAssociations } from '../components/FeaturedAssociations';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { GuidesSection } from '../components/GuidesSection';
import { GallerySection } from '../components/GallerySection';
import { RegisterCTA } from '../components/RegisterCTA';
import { Footer } from '../components/Footer';
import { RegistrationModal } from '../components/RegistrationModal';

export default function Home() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const handleOpenRegister = () => {
    setRegisterModalOpen(true);
  };

  const handleCloseRegister = () => {
    setRegisterModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#12172e] font-sans selection:bg-[#0c7fae] selection:text-white">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenRegister={handleOpenRegister} />
        <AboutSection />
        <InteractiveSaudiMap />
        <FeaturedAssociations />
        <PartnerMarquee />
        <GuidesSection />
        <GallerySection />
        <RegisterCTA onOpenRegister={handleOpenRegister} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Registration Modal Wizard */}
      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={handleCloseRegister}
      />
    </div>
  );
}
