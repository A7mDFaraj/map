'use client';

import BrandBackground from '@/components/BrandBackground';
import SaudiMap2 from '../../public/SaudiMap2';

export default function HeroSection() {
  return (
    <BrandBackground
      as="section"
      variant="dark"
      patternOpacity={0.05}
      className="min-h-screen py-24 sm:py-32 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 w-full" dir="rtl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Text Placeholder */}
          <div className="relative z-10">
             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-sm">
                عنوان رئيسي{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#1C81AC] to-[#3EB985]">
                  المنصة
                </span>
             </h1>
             <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-xl font-medium mb-8">
                نص افتراضي كعنصر نائب في مساحة البطل، يمكنك تغييره ليناسب محتوى المنصة ورؤيتها وأهدافها بأسلوب مميز وجذاب.
             </p>
             <div className="flex gap-4">
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1C81AC] to-[#3EB985] text-white font-bold hover:shadow-lg hover:shadow-[#1C81AC]/20 hover:-translate-y-1 transition-all duration-300">
                  ابدأ الآن
                </button>
             </div>
          </div>

          {/* Right Map */}
          <div className="relative flex items-center justify-center">
            {/* Ambient glow behind the map */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1C81AC]/10 to-[#3EB985]/10 blur-3xl rounded-full scale-75 transform -translate-y-4" />
            
            <SaudiMap2 />
          </div>
          
        </div>
      </div>
    </BrandBackground>
  );
}
