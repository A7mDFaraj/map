'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ShieldCheck, MapPin, Sparkles, Building2, FileText, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-header shadow-lg shadow-[#263370]/5 py-3 border-b border-[#e4e6f0]'
            : 'bg-gradient-to-b from-[#12172e]/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo & Platform Name */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#263370] via-[#0c7fae] to-[#42b07a] p-[2px] shadow-md transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-[#263370] rounded-[10px] flex items-center justify-center">
                  <span className="text-white font-extrabold text-lg tracking-wider">SCY</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className={`font-black text-xl tracking-tight transition-colors ${scrolled ? 'text-[#263370]' : 'text-white'}`}>
                    خارطة الجمعيات
                  </span>
                  <span className="bg-[#42b07a]/20 text-[#42b07a] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#42b07a]/30">
                    الرسمية
                  </span>
                </div>
                <span className={`text-xs transition-colors ${scrolled ? 'text-[#5b6178]' : 'text-white/70'}`}>
                  المجلس التخصصي للجمعيات الشبابية
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-inner">
              <a
                href="#hero"
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  scrolled
                    ? 'text-[#263370] hover:bg-[#263370]/10'
                    : 'text-white hover:bg-white/15'
                }`}
              >
                الرئيسية
              </a>
              <a
                href="#interactive-map"
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 ${
                  scrolled
                    ? 'text-[#0c7fae] bg-[#0c7fae]/10'
                    : 'text-cyan-300 bg-white/10'
                }`}
              >
                <MapPin className="w-4 h-4" />
                الخريطة التفاعلية
              </a>
              <a
                href="#featured-associations"
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  scrolled
                    ? 'text-[#263370] hover:bg-[#263370]/10'
                    : 'text-white hover:bg-white/15'
                }`}
              >
                دليل الجمعيات
              </a>
              <a
                href="#guides"
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  scrolled
                    ? 'text-[#263370] hover:bg-[#263370]/10'
                    : 'text-white hover:bg-white/15'
                }`}
              >
                الأدلة والنماذج
              </a>
              <a
                href="#gallery"
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  scrolled
                    ? 'text-[#263370] hover:bg-[#263370]/10'
                    : 'text-white hover:bg-white/15'
                }`}
              >
                العدسة
              </a>
            </nav>

            {/* Actions (Search + Register Button) */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className={`p-2.5 rounded-xl transition-all ${
                  scrolled
                    ? 'bg-[#f6f7fb] text-[#263370] hover:bg-[#e7e9f2]'
                    : 'bg-white/15 text-white hover:bg-white/25'
                }`}
                title="بحث عن جمعية"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenRegister}
                className="relative group overflow-hidden rounded-xl p-[2px] font-bold text-sm"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#0c7fae] via-[#42b07a] to-[#263370] transition-transform duration-300 group-hover:scale-105" />
                <span className="relative flex items-center gap-2 px-5 py-2.5 bg-[#263370] text-white rounded-[10px] transition-colors group-hover:bg-[#1c2757]">
                  <Sparkles className="w-4 h-4 text-[#42b07a]" />
                  سجل جمعيتك الآن
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className={`p-2 rounded-xl ${scrolled ? 'text-[#263370]' : 'text-white'}`}
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl ${scrolled ? 'text-[#263370]' : 'text-white'}`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-[#263370] text-white border-b border-white/10 p-6 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold py-2 border-b border-white/10 flex items-center justify-between"
              >
                الرئيسية
              </a>
              <a
                href="#interactive-map"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold py-2 border-b border-white/10 text-cyan-300 flex items-center justify-between"
              >
                <span>الخريطة التفاعلية</span>
                <MapPin className="w-5 h-5 text-cyan-400" />
              </a>
              <a
                href="#featured-associations"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold py-2 border-b border-white/10 flex items-center justify-between"
              >
                دليل الجمعيات الشبابية
              </a>
              <a
                href="#guides"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold py-2 border-b border-white/10 flex items-center justify-between"
              >
                الأدلة والنماذج
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold py-2 border-b border-white/10 flex items-center justify-between"
              >
                عدسة الجمعيات
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full mt-4 py-3.5 bg-[#0c7fae] hover:bg-[#0a6a91] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <Sparkles className="w-5 h-5 text-[#42b07a]" />
                سجل جمعيتك الآن
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-start justify-center pt-24 px-4"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 w-full max-w-xl shadow-2xl border border-[#e4e6f0]"
            >
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h3 className="font-bold text-lg text-[#263370]">البحث السريع عن جمعية شبابية</h3>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 relative">
                <input
                  type="text"
                  placeholder="اكتب اسم الجمعية، المدينة، أو التخصص..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3.5 pl-10 rounded-xl bg-[#f6f7fb] border border-[#e4e6f0] focus:outline-none focus:border-[#0c7fae] font-medium text-sm"
                  autoFocus
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
              </div>

              <div className="mt-4 text-xs text-gray-500 flex items-center justify-between">
                <span>مثال: جمعية رؤية بالرياض، ابتکار، تطوع</span>
                <a
                  href="#interactive-map"
                  onClick={() => setSearchOpen(false)}
                  className="text-[#0c7fae] font-bold hover:underline flex items-center gap-1"
                >
                  انتقل للخريطة التفاعلية الكاملة <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
