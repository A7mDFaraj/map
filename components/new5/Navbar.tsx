'use client';

import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header aria-label="Main Navigation Shell" className="fixed top-0 right-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e4e6f0]/60 h-16">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 flex items-center justify-between">
        {/* Clean Navbar Structural Slot */}
      </div>
    </header>
  );
};
