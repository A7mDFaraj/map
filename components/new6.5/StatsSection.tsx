'use client';

import React, { useRef, useEffect } from 'react';
import { BarChart3, Users, MapPin, ShieldCheck } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedCounter = ({ from, to, suffix, className }: { from: number, to: number, suffix: string, className: string }) => {
  const nodeRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toLocaleString('en-US') + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, suffix, isInView]);

  return <h3 ref={nodeRef} className={`text-4xl md:text-5xl font-black ${className}`} dir="ltr">{from}{suffix}</h3>;
};

export const StatsSection = () => {
  const stats = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#3EB985] drop-shadow-[0_0_8px_rgba(62,185,133,0.8)]" />,
      target: 120,
      suffix: '+',
      label: 'جمعية موثقة رسمياً',
      colorClass: 'text-[#3EB985] drop-shadow-[0_0_15px_rgba(62,185,133,0.4)]'
    },
    {
      icon: <MapPin className="w-7 h-7 text-[#1C81AC] drop-shadow-[0_0_8px_rgba(28,129,172,0.8)]" />,
      target: 13,
      suffix: '',
      label: 'منطقة مغطاة',
      colorClass: 'text-[#1C81AC] drop-shadow-[0_0_15px_rgba(28,129,172,0.4)]'
    },
    {
      icon: <Users className="w-7 h-7 text-[#1C81AC] drop-shadow-[0_0_8px_rgba(28,129,172,0.8)]" />,
      target: 450000,
      suffix: '+',
      label: 'مستفيد بشكل سنوي',
      colorClass: 'text-[#1C81AC] drop-shadow-[0_0_15px_rgba(28,129,172,0.4)]'
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-[#3EB985] drop-shadow-[0_0_8px_rgba(62,185,133,0.8)]" />,
      target: 45,
      suffix: '%',
      label: 'نسبة نمو محققة',
      colorClass: 'text-[#3EB985] drop-shadow-[0_0_15px_rgba(62,185,133,0.4)]'
    }
  ];

  return (
    <section className="w-full py-20 bg-transparent relative" style={{ fontFamily: 'Thamaynyah, sans-serif' }}>
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1C81AC]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#3EB985]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-[#1C81AC] pb-2 leading-relaxed"
          >
            أثرنا في المملكة
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#233A77]/80 border border-white/5 hover:border-[#1C81AC]/40 rounded-[2rem] p-8 shadow-xl backdrop-blur-xl flex flex-col items-center justify-center text-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(28,129,172,0.15)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1C81AC]/0 via-transparent to-[#3EB985]/0 group-hover:from-[#1C81AC]/10 group-hover:to-[#3EB985]/5 transition-colors duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center w-full">
                <div className="w-16 h-16 bg-[#1A2A5E] border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(28,129,172,0.2)] group-hover:scale-110 group-hover:bg-[#1C81AC]/10 group-hover:border-[#1C81AC]/30 transition-all duration-300">
                  {stat.icon}
                </div>
                
                <p className="text-white/60 font-bold text-sm md:text-base mb-3 group-hover:text-white/90 transition-colors">
                  {stat.label}
                </p>
                
                <AnimatedCounter 
                  from={0} 
                  to={stat.target} 
                  suffix={stat.suffix} 
                  className={stat.colorClass} 
                />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};
