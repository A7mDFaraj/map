'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowLeft, Sparkles, Building2, Layers, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenRegister?: () => void;
}

export function Navbar({ onOpenRegister }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'الرئيسية', href: '/new4', icon: Sparkles },
    { label: 'عن المجلس', href: '#about', icon: Layers },
    { label: 'الجمعيات الشبابية', href: '#associations', icon: Building2 },
    { label: 'تواصل معنا', href: '#contact', icon: PhoneCall },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0f24]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] py-3.5'
          : 'bg-transparent py-6'
      }`}
      dir="rtl"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/new4" className="flex items-center gap-3 group">
            <div className="relative h-11 w-44 sm:h-13 sm:w-52 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/brand/logo/logo-white.svg"
                alt="المجلس التخصصي للجمعيات الشبابية"
                fill
                className="object-contain object-right"
                priority
              />
            </div>
          </Link>

          {/* Minimalist Nav Links */}
          <nav className="hidden lg:flex items-center gap-2 bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-full px-5 py-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 text-sm font-medium text-white/80 hover:text-white rounded-full transition-all duration-300 hover:bg-white/10 relative group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#1C81AC] to-[#3EB985] rounded-full transition-all duration-300 group-hover:w-1/2" />
              </Link>
            ))}
          </nav>

          {/* Action button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenRegister}
              className="relative group overflow-hidden rounded-xl p-px font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(62,185,133,0.4)] hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#1C81AC] via-[#3EB985] to-[#1C81AC] animate-pulse-glow" />
              <span className="relative flex items-center gap-2 bg-[#0a0f24] px-5 py-2.5 rounded-[11px] text-white group-hover:bg-opacity-90 transition-colors">
                <Sparkles className="w-4 h-4 text-[#3EB985]" />
                <span>انضم للمنظومة</span>
                <ArrowLeft className="w-4 h-4 text-white/70 group-hover:-translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#0a0f24]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all font-medium text-base border border-transparent hover:border-white/10"
                >
                  <Icon className="w-5 h-5 text-[#3EB985]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <hr className="border-white/10 my-2" />
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenRegister) onOpenRegister();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#1C81AC] to-[#3EB985] text-white font-bold text-base shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              <span>انضم للمنظومة الآن</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
