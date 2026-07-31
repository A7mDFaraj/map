'use client';

import React from 'react';
import Image from 'next/image';
import BrandBackground from '@/components/BrandBackground';

export const AboutSection = () => {
  return (
    <section className="w-full bg-[#12172e] font-sans" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
      
      {/* Row 1 */}
      <div className="flex flex-col lg:flex-row w-full min-h-[500px]">
        {/* Content Side (Right in RTL) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-[#12172e] relative overflow-hidden">
          {/* Subtle Brand Pattern in Corner */}
          <BrandBackground 
            variant="dark"
            className="top-0 right-0 w-80 h-80 [mask-image:radial-gradient(circle_at_top_right,black,transparent)] pointer-events-none z-0 opacity-40"
            style={{ position: 'absolute', backgroundColor: 'transparent' }}
          />
          <div className="max-w-lg relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C81AC] mb-6">
              نبذة عن المنصة
            </h2>
            <p className="text-lg text-white opacity-90 leading-relaxed mb-8">
              منصة رقمية موحدة تعزز التنسيق والتكامل بين الجمعيات الشبابية والجهات ذات العلاقة، وتسهل وصول المهتمين والمستفيدين إلى بيانات القطاع الشبابي عبر تجربة تفاعلية منظمة.
            </p>
            
            <h3 className="text-2xl font-bold text-[#1C81AC] mb-4">خدمات المنصة</h3>
            <p className="text-white opacity-80 leading-relaxed mb-8">
              تتيح الخارطة استعراض الجمعيات الشبابية حسب المنطقة والمدينة والتخصص، مع عرض بيانات التواصل والمواقع الجغرافية والملفات التعريفية.
            </p>

            <button className="px-8 py-3 bg-[#1C81AC] text-white font-semibold rounded-full shadow-[0_0_15px_rgba(28,129,172,0.4)] hover:shadow-[0_0_25px_rgba(28,129,172,0.7)] hover:-translate-y-1 transition-all duration-300">
              اكتشف المزيد
            </button>
          </div>
        </div>

        {/* Image Side (Left in RTL) */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full bg-[#0a0d1d] flex items-center justify-center overflow-hidden">
          {/* Subtle gradient overlay to match dark brand */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#12172e]/80 to-transparent mix-blend-overlay z-10" />
          <Image 
            src="/low-poly-map.png" 
            alt="Low Poly Saudi Map" 
            fill 
            className="object-cover opacity-90"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col lg:flex-row-reverse w-full min-h-[500px]">
        {/* Content Side (Left in RTL due to row-reverse) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-[#12172e] relative overflow-hidden">
          {/* Subtle Brand Pattern in Corner */}
          <BrandBackground 
            variant="dark"
            className="bottom-0 left-0 w-80 h-80 [mask-image:radial-gradient(circle_at_bottom_left,black,transparent)] pointer-events-none z-0 opacity-40"
            style={{ position: 'absolute', backgroundColor: 'transparent' }}
          />
          <div className="max-w-lg relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C81AC] mb-6">
              أهمية المنصة
            </h2>
            <p className="text-lg text-white opacity-90 leading-relaxed mb-8">
              تسهم المنصة في حصر بيانات الجمعيات الشبابية، وتوفير مصدر وطني موثوق يساعد الشباب والمهتمين والداعمين وصناع القرار على بناء معرفة أوضح بالقطاع الشبابي، وتعزيز فرص التواصل والتعاون.
            </p>
            
            <button className="px-8 py-3 bg-transparent border-2 border-[#1C81AC] text-white font-semibold rounded-full hover:bg-[#1C81AC] hover:shadow-[0_0_15px_rgba(28,129,172,0.5)] transition-all duration-300">
              اكتشف المزيد
            </button>
          </div>
        </div>

        {/* Image Side (Right in RTL due to row-reverse) */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full bg-[#0a0d1d] flex items-center justify-center overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-bl from-[#12172e]/80 to-transparent mix-blend-overlay z-10" />
          <Image 
            src="/low-poly-network.png" 
            alt="Low Poly Tech Network" 
            fill 
            className="object-cover opacity-90"
          />
        </div>
      </div>

    </section>
  );
};
