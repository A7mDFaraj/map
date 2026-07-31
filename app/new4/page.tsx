'use client';

import React, { useState } from 'react';
import { HeroSection } from '@/components/new4/HeroSection';
import { RegistrationModal } from '@/components/RegistrationModal';

export default function New4Page() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const handleOpenRegister = () => {
    setRegisterModalOpen(true);
  };

  const handleCloseRegister = () => {
    setRegisterModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0f24] text-white font-sans selection:bg-[#1C81AC] selection:text-white" dir="rtl">
      {/* Minimalist Aurora Hero Section with LogoMaskImage */}
      <HeroSection onOpenRegister={handleOpenRegister} />

      {/* Registration Modal Wizard */}
      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={handleCloseRegister}
      />
    </div>
  );
}
