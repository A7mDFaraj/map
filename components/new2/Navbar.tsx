import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full h-[52px] sm:h-[64px] lg:h-[72px] bg-white/90 backdrop-blur-md z-[100] border-b border-black/5 shadow-sm" dir="rtl">
      <div className="relative mx-auto flex items-center justify-between h-full px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Logo / Brand Name */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-7 sm:h-8 lg:h-10 w-24 bg-gray-200 rounded animate-pulse flex items-center justify-center text-xs text-gray-500">
            Logo
          </div>
        </Link>
        
        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            الرئيسية
          </Link>
          <Link href="/discover" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            اكتشف
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            عن المنصة
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
            تواصل معنا
          </Link>
        </nav>
        
        {/* Buttons / Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              تسجيل الدخول
            </Link>
            <button className="h-10 px-6 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
              حساب جديد
            </button>
          </div>
          
          {/* Mobile Menu Toggle Button */}
          <button className="lg:hidden inline-flex items-center justify-center size-10 sm:size-11 rounded-2xl bg-gray-50 ring-1 ring-gray-200 text-gray-700 hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
              <path d="M4 5h16M4 12h16M4 19h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
