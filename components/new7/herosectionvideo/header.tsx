"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

/**
 * ============================================================================
 * MAP PROJECT - STANDALONE HEADER / NAVBAR COMPONENT
 * ============================================================================
 * 
 * Instructions for your friend:
 * 1. Drop this file into your Next.js project (e.g., `components/HeaderNavbar.tsx`).
 * 2. Ensure Tailwind CSS is configured in your project.
 * 3. Import & use: `<HeaderNavbar isLoggedIn={false} />`
 * 
 * Features included:
 * - 100% Standalone (Zero extra UI dependencies required).
 * - RTL Arabic Layout support.
 * - Glassmorphism & smooth scroll background effects.
 * - Interactive slide-out Mobile Menu.
 * - Dynamic active link state indicators.
 * - Responsive breakpoints (Mobile, Tablet, Desktop).
 */

export interface HeaderNavbarProps {
  /** Enables transparent hero header mode (for top of landing page) */
  isHeroPage?: boolean;
  /** Simulates logged-in user state to display 'Dashboard' instead of 'Login' */
  isLoggedIn?: boolean;
  /** Custom href destination for the Dashboard button */
  dashboardHref?: string;
  /** Custom current active path (defaults to auto-detection in client) */
  activePath?: string;
  /** Custom logo title text override */
  title?: string;
}

export function HeaderNavbar({
  isHeroPage = false,
  isLoggedIn = false,
  dashboardHref = "/dashboard",
  activePath,
  title = "خارطة الجمعيات الشبابية",
}: HeaderNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(activePath || "/");

  // Track scroll position and direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past threshold
      if (currentScrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide header when scrolling down rapidly, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update path on client side if not provided
  useEffect(() => {
    if (!activePath && typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, [activePath]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isHeroTop = isHeroPage && !isScrolled;

  const navLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "تصفح الجمعيات الشبابية", href: "/browse/youth-orgs" },
    { label: "تصفح الأندية الشبابية", href: "/browse/youth-clubs" },
    { label: "عن المنصة", href: "/about" },
  ];

  return (
    <>
      <header
        dir="rtl"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isHeroTop
            ? "bg-transparent text-white"
            : isScrolled
            ? "bg-white/95 backdrop-blur-md text-slate-900 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border-b border-slate-100"
            : "bg-white text-slate-900 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
          
          {/* LOGO & BRAND SECTION */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              {/* Logo Emblem SVG */}
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                  isHeroTop
                    ? "bg-white/15 backdrop-blur-md border border-white/30 text-white"
                    : "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              {/* Brand Title */}
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg leading-tight tracking-tight">
                  {title}
                </span>
                <span
                  className={`text-[11px] font-medium ${
                    isHeroTop ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  المجلس التخصصي للجمعيات الشبابية
                </span>
              </div>
            </Link>
          </div>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isHeroTop
                      ? isActive
                        ? "text-white bg-white/15"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                      : isActive
                      ? "text-emerald-700 bg-emerald-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 inset-x-3 h-0.5 rounded-full ${
                        isHeroTop ? "bg-white shadow-[0_0_8px_white]" : "bg-emerald-600"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & USER ACTIONS */}
          <div className="hidden lg:flex items-center gap-3">
            {/* External Council Link */}
            <a
              href="https://scy.org.sa/ar/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs font-semibold px-3 py-2 transition-colors ${
                isHeroTop
                  ? "text-white/80 hover:text-white"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              عن المجلس ↗
            </a>

            {/* Auth Button State */}
            {isLoggedIn ? (
              <Link
                href={dashboardHref}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-full shadow-md shadow-emerald-600/20 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                لوحة التحكم
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className={`px-5 py-2 text-sm font-semibold rounded-full border transition-all duration-200 ${
                    isHeroTop
                      ? "border-white/50 bg-white/10 text-white hover:bg-white/20"
                      : "border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                  }`}
                >
                  تسجيل الدخول
                </Link>
              </div>
            )}
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isHeroTop
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? (
              // Close Icon
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Menu Icon
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU DRAWER OVERLAY */}
      {mobileMenuOpen && (
        <div dir="rtl" className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-out Panel */}
          <aside className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
            {/* Header inside Panel */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                  خ
                </div>
                <span className="font-bold text-slate-800 text-sm">القائمة الرئيسية</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = currentPath === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 text-base font-semibold rounded-xl transition-colors ${
                      isActive
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    )}
                  </Link>
                );
              })}

              <a
                href="https://scy.org.sa/ar/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-500 hover:bg-slate-50 rounded-xl"
              >
                <span>عن المجلس</span>
                <span className="text-xs text-slate-400">↗</span>
              </a>
            </nav>

            {/* Footer / CTA inside Drawer */}
            <div className="p-4 border-t border-slate-100 space-y-2">
              {isLoggedIn ? (
                <Link
                  href={dashboardHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm"
                >
                  لوحة التحكم
                </Link>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
                >
                  تسجيل الدخول
                </Link>
              )}
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default HeaderNavbar;
