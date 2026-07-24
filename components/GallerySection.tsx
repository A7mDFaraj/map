'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin, Building2, X, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/brandAssets';
import { SectionTitle } from './SectionTitle';

export const GallerySection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center">
          <SectionTitle 
            title="عدسة الجمعيات الشبابية"
            subtitle="تغطية مصورة لأبرز المبادرات والمعسكرات والملتقيات الشبابية المنفذة في مختلف مناطق المملكة."
            align="center"
          />
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setActivePhoto(item)}
              className={`relative rounded-3xl overflow-hidden min-h-[260px] cursor-pointer group card-shadow ${item.aspectRatio}`}
            >
              {/* Dynamic Styled Canvas / Gradient Visual */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-105`} />
              
              {/* Pattern Texture */}
              <div className="absolute inset-0 brand-pattern-bg opacity-20 pointer-events-none" />

              {/* Decorative Watermark Mark */}
              <div className="absolute top-6 left-6 text-white/20 font-black text-4xl select-none pointer-events-none">
                SCY
              </div>

              {/* Hover Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-xs border border-white/30">
                    {item.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-xs text-cyan-300 font-bold flex items-center gap-1 mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    {item.association} • {item.city}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#263370] rounded-3xl p-8 max-w-xl w-full text-white border border-white/20 shadow-2xl relative"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-6 left-6 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full h-64 rounded-2xl bg-gradient-to-tr from-[#0c7fae] via-[#42b07a] to-[#263370] flex items-center justify-center mb-6 relative overflow-hidden">
                <Camera className="w-16 h-16 text-white/40" />
                <span className="absolute bottom-4 right-4 text-xs font-bold bg-black/40 px-3 py-1 rounded-full border border-white/20">
                  معاينة المبادرة المصورة
                </span>
              </div>

              <span className="text-xs font-bold text-emerald-400 block mb-1">
                {activePhoto.category} • {activePhoto.city}
              </span>
              <h3 className="text-2xl font-black mb-2">{activePhoto.title}</h3>
              <p className="text-slate-300 text-sm font-medium mb-6">
                الجهة المنظمة: {activePhoto.association}
              </p>

              <button
                onClick={() => setActivePhoto(null)}
                className="w-full py-3 bg-[#0c7fae] hover:bg-[#0a6a91] text-white rounded-xl font-bold text-sm"
              >
                إغلاق
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
