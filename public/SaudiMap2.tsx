"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import saudiMap from "@svg-maps/saudi-arabia";

const REGION_NAMES_AR: Record<string, string> = {
  "tabuk": "تبوك",
  "al-jawf": "الجوف",
  "northern-borders": "الحدود الشمالية",
  "medina": "المدينة المنورة",
  "al-bahah": "الباحة",
  "hail": "حائل",
  "najran": "نجران",
  "mecca": "مكة المكرمة",
  "asir": "عسير",
  "jizan": "جازان",
  "ryiadh": "الرياض",
  "al-qassim": "القصيم",
  "eastern-province": "المنطقة الشرقية"
};

// Carefully calibrated coordinates for actual major cities to avoid borders
const PATTERN_1 = [
  { id: "p1-riyadh", cx: 380, cy: 300, color: "#ffffff" }, // Riyadh
  { id: "p1-mecca", cx: 210, cy: 360, color: "#ffffff" },  // Mecca
  { id: "p1-dammam", cx: 540, cy: 260, color: "#ffffff" }, // Dammam
  { id: "p1-tabuk", cx: 150, cy: 120, color: "#ffffff" },  // Tabuk
];

const PATTERN_2 = [
  { id: "p2-riyadh", cx: 380, cy: 300, color: "#ffffff" }, // Riyadh
  { id: "p2-medina", cx: 190, cy: 270, color: "#ffffff" }, // Medina
  { id: "p2-abha", cx: 280, cy: 470, color: "#ffffff" },   // Abha
  { id: "p2-hail", cx: 270, cy: 180, color: "#ffffff" },   // Hail
];

const PATTERN_3 = [
  { id: "p3-riyadh", cx: 380, cy: 300, color: "#ffffff" }, // Riyadh
  { id: "p3-jawf", cx: 210, cy: 100, color: "#ffffff" },   // Al Jawf
  { id: "p3-najran", cx: 360, cy: 500, color: "#ffffff" }, // Najran
  { id: "p3-qassim", cx: 320, cy: 230, color: "#ffffff" }, // Al Qassim
];
const PATTERN_MAIN = [
  { id: "pmain-riyadh", cx: 380, cy: 300, color: "#ffffff" }, // Riyadh
  { id: "pmain-tabuk", cx: 160, cy: 120, color: "#ffffff" },  // Tabuk
  { id: "pmain-hail", cx: 270, cy: 180, color: "#ffffff" },   // Hail
  { id: "pmain-eastern", cx: 550, cy: 330, color: "#ffffff" },// Eastern
];

const ALL_PATTERNS = [PATTERN_MAIN, PATTERN_1, PATTERN_2, PATTERN_3];

export default function SaudiMap2() {
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [patternIndex, setPatternIndex] = useState(0);

  React.useEffect(() => {
    let timeoutId: any;
    const nextPattern = () => {
      setPatternIndex((prev) => {
        const next = (prev + 1) % ALL_PATTERNS.length;
        // Main pattern (index 0) shows for 8 seconds, others show for 3 seconds
        const duration = next === 0 ? 8000 : 3000; 
        timeoutId = setTimeout(nextPattern, duration);
        return next;
      });
    };
    
    // Initial wait for the first pattern is 8 seconds
    timeoutId = setTimeout(nextPattern, 8000);
    return () => clearTimeout(timeoutId);
  }, []);

  const activePoints = ALL_PATTERNS[patternIndex];

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto flex items-center justify-center p-2"
      onMouseMove={handleMouseMove}
    >
      {/* Creative Premium Aura using frame.svg */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10 overflow-visible">
        {/* Outer slow rotating frame */}
        <motion.img 
          src="/brand/logo/frame.svg" 
          className="absolute w-[140%] max-w-none h-auto opacity-[0.05] blur-[2px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        {/* Inner counter-rotating frame */}
        <motion.img 
          src="/brand/logo/frame.svg" 
          className="absolute w-[110%] max-w-none h-auto opacity-10 drop-shadow-2xl"
          animate={{ rotate: -360, scale: [1, 1.05, 1] }}
          transition={{ 
            rotate: { duration: 90, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        {/* Central static frame with pulse */}
        <motion.img 
          src="/brand/logo/frame.svg" 
          className="absolute w-[95%] max-w-none h-auto opacity-20 mix-blend-screen"
          animate={{ scale: [0.98, 1.02, 0.98], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <svg
        viewBox={saudiMap.viewBox}
        className="w-full h-full drop-shadow-2xl overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Regions */}
        <g className="regions">
          {saudiMap.locations.map((region: any, index: number) => {
            // Calculate a random starting position for each piece (like a scattered puzzle)
            const randomX = (Math.sin(index * 13) * 300);
            const randomY = (Math.cos(index * 17) * 300);
            const randomRotate = (Math.sin(index * 19) * 45);

            return (
              <motion.g
                key={region.id}
                id={region.id}
                initial={{ 
                  scale: 0.8, 
                  x: randomX, 
                  y: randomY, 
                  rotate: randomRotate, 
                  opacity: 0,
                }}
                animate={{ 
                  scale: 1, 
                  x: 0, 
                  y: [0, -8, 0], 
                  rotate: 0, 
                  opacity: 1,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 40, 
                  damping: 12, 
                  mass: 1.5,
                  delay: index * 0.08,
                  y: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                    delay: 2 + (index * 0.1) // Sweeping vertical wave effect
                  }
                }}
                whileHover={{ 
                  scale: 1.04, 
                  y: -15, 
                  zIndex: 50
                }}
                onMouseEnter={() => setHoveredRegionId(region.id)}
                onMouseLeave={() => setHoveredRegionId(null)}
                className="cursor-pointer outline-none transform-origin-center group"
              >
                {/* 3D Extrusion Bulk - rendering multiple layers below */}
                {[...Array(15)].map((_, i) => (
                  <path
                    key={`${region.id}-ext-${i}`}
                    d={region.path}
                    fill="#0f516e" // Darker brand color for depth
                    stroke="#0b4057"
                    strokeWidth={1}
                    strokeLinejoin="round"
                    transform={`translate(0, ${15 - i})`}
                    className="pointer-events-none transition-colors duration-300 group-hover:fill-[#156a8f]"
                  />
                ))}
                
                {/* Top Surface */}
                <path
                  name={region.name}
                  d={region.path}
                  fill="#1C81AC" // Solid brand color
                  stroke="#ffffff"
                  strokeWidth={1}
                  strokeLinejoin="round"
                  className="transition-colors duration-300 group-hover:fill-[#2fa4d6]"
                />
              </motion.g>
            );
          })}
        </g>
        
        {/* Duplicate the hovered region at the end of the SVG so it renders on top! */}
        {hoveredRegionId && (
          <use href={`#${hoveredRegionId}`} pointerEvents="none" />
        )}
        

      </svg>
      
      {/* Dynamic Cursor Tooltip */}
      <motion.div 
        className="fixed bg-black/90 text-white px-5 py-2 rounded-xl font-bold shadow-2xl pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-[150%] text-sm"
        style={{ left: mousePos.x, top: mousePos.y }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: hoveredRegionId ? 1 : 0, 
          scale: hoveredRegionId ? 1 : 0.8 
        }}
        transition={{ duration: 0.15 }}
        dir="rtl"
      >
        {hoveredRegionId ? (REGION_NAMES_AR[hoveredRegionId] || "المملكة العربية السعودية") : ""}
      </motion.div>
    </div>
  );
}
