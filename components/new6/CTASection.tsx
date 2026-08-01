'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SAUDI_REGIONS } from '@/data/mapRegionsData';
import LogoMaskImage from '@/components/LogoMaskImage';
import { Users, Megaphone, Heart, MapPin } from 'lucide-react';

export const CTASection = () => {
  // Animated Aurora Background using radial gradients and SVG animation for the Logo mask
  const maskBg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><radialGradient id='g1'><stop offset='0%' stop-color='%231C81AC' stop-opacity='1'/><stop offset='100%' stop-color='%231C81AC' stop-opacity='0'/></radialGradient><radialGradient id='g2'><stop offset='0%' stop-color='%233EB985' stop-opacity='1'/><stop offset='100%' stop-color='%233EB985' stop-opacity='0'/></radialGradient><radialGradient id='g3'><stop offset='0%' stop-color='%2338bdf8' stop-opacity='1'/><stop offset='100%' stop-color='%2338bdf8' stop-opacity='0'/></radialGradient></defs><rect width='100' height='100' fill='%230a0d1d'/><circle r='70' fill='url(%23g1)'><animate attributeName='cx' values='-20;120;-20' dur='6s' repeatCount='indefinite'/><animate attributeName='cy' values='-20;120;-20' dur='8s' repeatCount='indefinite'/></circle><circle r='80' fill='url(%23g2)'><animate attributeName='cx' values='120;-20;120' dur='7s' repeatCount='indefinite'/><animate attributeName='cy' values='120;-20;120' dur='5s' repeatCount='indefinite'/></circle><circle r='60' fill='url(%23g3)'><animate attributeName='cx' values='50;-20;120;50' dur='9s' repeatCount='indefinite'/><animate attributeName='cy' values='50;120;-20;50' dur='11s' repeatCount='indefinite'/></circle></svg>";

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 relative" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* The Card Container */}
        <div className="w-full bg-[#12172e] border border-[#1C81AC]/20 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-16 gap-12">
          
          {/* Card Ambient Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1C81AC]/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3EB985]/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-right relative z-20" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight mb-6 whitespace-nowrap"
            >
              هل أنت ممثل لجمعية شبابية؟
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/80 mb-10 leading-relaxed max-w-lg"
            >
              سجل جمعيتك مجاناً واحصل على ملف تعريفي شامل وإمكانية التواصل المباشر مع المهتمين
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mt-2"
            >
              {/* Modern Primary Button */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group bg-gradient-to-r from-[#1C81AC] to-[#3EB985] text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-[0_10px_20px_rgba(28,129,172,0.3)] transition-all"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 flex items-center gap-2">
                  سجل جمعيتك الآن
                  <svg className="w-5 h-5 rtl:rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </span>
              </motion.button>

              {/* Modern Secondary Button */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group bg-[#0a0d1d]/40 backdrop-blur-md border border-[#1C81AC]/30 hover:border-[#3EB985]/60 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg transition-all"
              >
                <span className="relative z-10 flex items-center gap-2 group-hover:text-[#3EB985] transition-colors">
                  تعرف على المزايا
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Left Side: 3D Map Object & Floating Elements */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[400px]">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateX: 20, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
              transition={{ duration: 1.5, type: 'spring' }}
              viewport={{ once: true }}
              className="relative w-full max-w-[450px] aspect-square flex items-center justify-center perspective-1000"
            >
              {/* 3D Map SVG */}
              <svg
                viewBox="0 0 730 600"
                className="w-full h-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)]"
              >
                <defs>
                  <linearGradient id="cardMapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#233A77" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1C81AC" stopOpacity="0.95" />
                  </linearGradient>
                  <linearGradient id="cardStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7dd3fc" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>

                {/* 3D Solid Mold Extrusion - stacking paths downwards */}
                {[...Array(12)].map((_, i) => (
                  <g key={`side-${i}`} transform={`translate(0, ${i * 2.5})`}>
                    {SAUDI_REGIONS.map((region) => (
                      <path
                        key={`side-path-${region.id}-${i}`}
                        d={region.svgPath}
                        fill={i === 11 ? "#060b14" : "#132345"} 
                        stroke="#132345"
                        strokeWidth="1.5"
                      />
                    ))}
                  </g>
                ))}

                {/* Top Surface */}
                <g>
                  {SAUDI_REGIONS.map((region) => (
                    <motion.path
                      key={`top-${region.id}`}
                      d={region.svgPath}
                      fill="url(#cardMapGrad)"
                      stroke="url(#cardStrokeGrad)"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    />
                  ))}
                </g>
                
                {/* Connecting lines on surface (like the reference) */}
                <g className="opacity-50">
                  <path d="M 250 200 L 450 350" stroke="#fff" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                  <path d="M 450 350 L 300 450" stroke="#fff" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                </g>

                {/* Map Pins / Nodes */}
                <g>
                  {[
                    { cx: 250, cy: 200 },
                    { cx: 450, cy: 350 },
                    { cx: 300, cy: 450 },
                  ].map((pos, i) => (
                    <motion.circle
                      key={`pin-${i}`}
                      cx={pos.cx}
                      cy={pos.cy}
                      r={6}
                      fill="#fff"
                      className="drop-shadow-[0_0_8px_#fff]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.2, type: 'spring' }}
                      viewport={{ once: true }}
                    />
                  ))}
                </g>
              </svg>

              {/* Centered LogoMaskImage */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none mt-10 ml-8"
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5, type: 'spring' }}
                viewport={{ once: true }}
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-[0_0_20px_rgba(56,189,248,0.9)]">
                  <LogoMaskImage src={maskBg} className="w-full h-full" />
                </div>
              </motion.div>
              
            </motion.div>

            {/* Floating UI Elements (Glassmorphic Cards) */}
            <motion.div 
              animate={{ y: [0, -12, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[5%] right-[5%] bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl flex flex-col items-center gap-2 z-30"
            >
              <Users className="w-6 h-6 text-white" />
              <div className="flex flex-col gap-1.5 mt-1">
                <div className="w-10 h-1.5 bg-white/40 rounded-full" />
                <div className="w-6 h-1.5 bg-white/20 rounded-full mx-auto" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[10%] right-[10%] bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl flex flex-col items-center gap-2 z-30"
            >
              <Megaphone className="w-6 h-6 text-white" />
              <div className="flex flex-col gap-1.5 mt-1">
                <div className="w-12 h-1.5 bg-white/40 rounded-full" />
                <div className="w-8 h-1.5 bg-white/20 rounded-full mx-auto" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-[30%] left-[0%] bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl flex flex-col items-center gap-2 z-30"
            >
              <Heart className="w-6 h-6 text-white" />
              <div className="flex flex-col gap-1.5 mt-1">
                <div className="w-8 h-1.5 bg-white/40 rounded-full" />
                <div className="w-10 h-1.5 bg-white/20 rounded-full mx-auto" />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
