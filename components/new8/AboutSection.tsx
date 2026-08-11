'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Map, Sparkles } from 'lucide-react';

// Premium Corporate Animation Variants
const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1], // Smooth elegant easing
      staggerChildren: 0.15, // Stagger elements inside the card
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
};

export const AboutSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#060B17]" dir="rtl">
      
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/aboutSectionNew8/aboutsectionHorizental.webp" 
          alt="About Background Desktop" 
          className="w-full h-full object-cover hidden lg:block"
        />
        <img 
          src="/aboutSectionNew8/aboutsectionVertical.webp" 
          alt="About Background Mobile" 
          className="w-full h-full object-cover block lg:hidden"
        />
        {/* Gradients to blend smoothly with sections above and below */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#060B17] to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060B17] to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full h-full min-h-screen flex flex-col lg:flex-row lg:justify-start lg:items-center pt-24 lg:pt-0 px-6 lg:px-16 xl:px-24 2xl:px-32">
        
        {/* Text Container: Right side on Desktop (RTL start), Top side on Mobile */}
        <div className="w-full lg:w-5/12 flex flex-col gap-6 lg:gap-8 justify-start lg:justify-center h-full pt-8 lg:pt-0">
          
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 lg:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:bg-white/15 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C81AC]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <motion.div variants={itemVariants}>
                  {/* 3D Glassmorphism Icon with Galaxy Floating Animation */}
                  <motion.div 
                    animate={{ 
                      y: [-5, 5, -5],
                      rotateZ: [-3, 3, -3],
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="p-3 bg-white/10 rounded-2xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_12px_rgba(0,0,0,0.3)] backdrop-blur-md relative overflow-hidden"
                  >
                    <Map className="w-8 h-8 text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] relative z-10" />
                    {/* Galaxy core glowing effect */}
                    <motion.div 
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-cyan-400/30 blur-xl rounded-full z-0" 
                    />
                  </motion.div>
                </motion.div>
                
                <motion.h2 
                  variants={itemVariants} 
                  className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg" 
                  style={{ fontFamily: 'Thamaynyah, sans-serif' }}
                >
                  عن الخارطة
                </motion.h2>
              </div>
              
              <motion.p 
                variants={itemVariants} 
                className="text-base lg:text-lg text-white/90 leading-relaxed font-medium"
              >
                خارطة رقمية موحّدة تعزز التنسيق والتكامل بين الجمعيات الشبابية والجهات ذات العلاقة، عبر تجربة تفاعلية، تسهل وصول المهتمين والمستفيدين إلى بيانات الجمعيات الشبابية.
              </motion.p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 lg:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:bg-white/15 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3EB985]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <motion.div variants={itemVariants}>
                  {/* 3D Glassmorphism Icon with Galaxy Floating Animation */}
                  <motion.div 
                    animate={{ 
                      y: [5, -5, 5],
                      rotateZ: [3, -3, 3],
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="p-3 bg-white/10 rounded-2xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_12px_rgba(0,0,0,0.3)] backdrop-blur-md relative overflow-hidden"
                  >
                    <Sparkles className="w-8 h-8 text-emerald-300 drop-shadow-[0_0_10px_rgba(52,211,153,0.6)] relative z-10" />
                    {/* Galaxy core glowing effect */}
                    <motion.div 
                      animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-emerald-400/30 blur-xl rounded-full z-0" 
                    />
                  </motion.div>
                </motion.div>
                
                <motion.h2 
                  variants={itemVariants} 
                  className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg" 
                  style={{ fontFamily: 'Thamaynyah, sans-serif' }}
                >
                  الخدمات والمزايا
                </motion.h2>
              </div>
              
              <motion.p 
                variants={itemVariants} 
                className="text-base lg:text-lg text-white/90 leading-relaxed font-medium"
              >
                تتيح استكشاف الجمعيات الشبابية حسب المنطقة والمدينة والتخصص، والاطلاع على بياناتها وملفاتها التعريفية وبرامجها ومبادراتها ومواقعها ووسائل التواصل معها، بطريقة سهلة وتفاعلية.
              </motion.p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

