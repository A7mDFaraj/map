"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  Target, 
  Eye, 
  Users, 
  Briefcase, 
  Heart, 
  Globe, 
  MessageSquare,
  MapPin,
  Mail,
  Smartphone,
  Check,
  Link as LinkIcon,
  FileText
} from "lucide-react";
import BrandBackground from "@/components/BrandBackground";

// --- Data ---
const orgData = {
  name: "المجلس التخصصي للجمعيات الشبابية",
  logo: "/brand/logo/logo-minimal.svg",
  isVerified: true,
  establishedYear: "2018",
  licenseNumber: "109283",
  shortDesc: "المظلة الرسمية للعمل الشبابي في المملكة العربية السعودية.",
  aboutText: "نعمل على تمكين وتنسيق جهود الجمعيات الشبابية في المملكة لتعظيم الأثر التنموي والمجتمعي، وبناء جيل يقود المستقبل من خلال توفير بيئة متكاملة تدعم الابتكار والاستدامة في كافة القطاعات.",
  vision: "ريادة وتميز القطاع الشبابي ليكون نموذجاً عالمياً يحتذى به في التمكين والإرشاد المهني للشباب.",
  mission: "تقديم برامج وخدمات مبتكرة ومستدامة تساهم في بناء قدرات الشباب وتوجيههم نحو مسارات ناجحة تلبي الاحتياجات.",
  region: "الرياض",
  category: "تنمية وتنسيق العمل الشبابي",
  beneficiaries: "+500K مستفيد",
  mobileNumber: "+966 50 123 4567",
  email: "info@scy.org.sa",
  website: "scy.org.sa",
  twitter: "@scy_sa",
  locationText: "الرياض، حي السليمانية",
  mapLocationUrl: "https://maps.app.goo.gl/Xd1H6WmXaKoqPs5P8"
};

const stats = [
  { id: 1, label: "جمعية شبابية", value: "+120", icon: Users, color: "bg-scy-primary" },
  { id: 2, label: "مستفيد", value: "+500K", icon: Heart, color: "bg-scy-secondary" },
  { id: 3, label: "شريك استراتيجي", value: "25", icon: Briefcase, color: "bg-scy-accent" },
  { id: 4, label: "مبادرة وطنية", value: "+50", icon: Globe, color: "bg-scy-primary" },
];

// --- Animation Variants ---
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

export default function Discover3Page() {
  const whatsappMessage = encodeURIComponent(`مرحباً! أود التواصل مع ${orgData.name}.`);

  return (
    <BrandBackground as="main" variant="light" patternOpacity={0.03} className="min-h-screen w-full flex flex-col font-sans overflow-x-hidden bg-[#f6f7fb]">
      
      {/* Top spacing reserved for future Navbar */}
      <div className="h-24 w-full shrink-0"></div>
      
      <div className="flex-1 w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 pb-12 flex items-start justify-center">
        
        {/* --- Main Horizontal Card --- */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          animate="show"
          className="w-full bg-white rounded-[2rem] md:rounded-[3rem] card-shadow border border-[#e4e6f0] flex flex-col xl:flex-row relative z-10 overflow-hidden"
        >
          {/* --- Right Column (Identity & Contact) - Solid Primary Color --- */}
          <div className="w-full xl:w-[480px] bg-scy-primary p-6 lg:p-10 flex flex-col relative z-20 shrink-0 text-white overflow-hidden">
            {/* Pattern Overlay for Right Column */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/brand/logo/frame.svg')", backgroundRepeat: 'repeat', backgroundSize: '300px auto', filter: 'brightness(0) invert(1)', opacity: 0.07 }}></div>
            
            <div className="flex items-start gap-5 mb-6 relative z-10">
              {/* Logo Box */}
              <motion.div variants={itemVariants} className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center p-3 shadow-lg shrink-0">
                <Image src="/brand/logo/logo-white.svg" alt="Logo" width={60} height={60} className="object-contain" />
              </motion.div>
              
              {/* Title & Verification */}
              <motion.div variants={itemVariants} className="flex flex-col justify-center gap-3 pt-1">
                <h1 className="text-2xl lg:text-3xl font-black text-white leading-tight">{orgData.name}</h1>
                <div className="flex flex-wrap items-center gap-2">
                  {orgData.isVerified && (
                    <span className="inline-flex items-center gap-1 bg-scy-accent/20 text-scy-accent text-xs font-bold px-3 py-1.5 rounded-full border border-scy-accent/30">
                      <Check className="w-3 h-3" />
                      مظلة رسمية
                    </span>
                  )}
                  <span className="text-xs font-medium text-white/80 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                    تأسست {orgData.establishedYear}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6 relative z-10">
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-bold px-3 py-2 rounded-lg border border-white/20 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-scy-secondary-100" /> {orgData.region}
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-bold px-3 py-2 rounded-lg border border-white/20 flex items-center gap-2">
                <Target className="w-4 h-4 text-scy-accent" /> {orgData.category}
              </span>
            </motion.div>

            {/* About / Description (Detailed) */}
            <motion.div variants={itemVariants} className="mb-8 flex-1 relative z-10">
              <h3 className="text-sm font-black text-scy-secondary-100 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4" /> عن المجلس
              </h3>
              <p className="text-sm text-white/90 leading-relaxed font-medium">
                {orgData.aboutText}
              </p>
            </motion.div>

            <div className="flex flex-col gap-6 mt-auto relative z-10">
              
              {/* Contact Information Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
                <a href={`tel:${orgData.mobileNumber}`} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-scy-secondary transition-colors shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-white group-hover:text-scy-secondary-100 transition-colors" dir="ltr">{orgData.mobileNumber}</span>
                </a>
                <a href={`mailto:${orgData.email}`} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-scy-secondary transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-white group-hover:text-scy-secondary-100 transition-colors">{orgData.email}</span>
                </a>
              </motion.div>

              <hr className="border-white/20" />

              {/* Action Buttons & Socials */}
              <motion.div variants={itemVariants} className="flex gap-3">
                <a href={`https://wa.me/?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-scy-accent hover:bg-[#329e70] text-white px-4 py-3 rounded-xl font-bold text-sm transition-all shadow-lg border border-scy-accent/50">
                  <MessageSquare className="w-4 h-4" />
                  راسل الجهة
                </a>
                <a href={`https://twitter.com/${orgData.twitter}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-xl transition-all shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href={`https://${orgData.website}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-xl transition-all shrink-0">
                  <LinkIcon className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* --- Left Column (Details Grid) --- */}
          <div className="flex-1 p-6 lg:p-10 relative z-10 flex flex-col gap-6 bg-white/50">
            {/* Overall pattern for the left side */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/brand/logo/frame.svg')", backgroundRepeat: 'repeat', backgroundSize: '400px auto', opacity: 0.03 }}></div>
            
            {/* Top Row: Vision & Mission (Fully Colored Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vision - Secondary Color (Teal) */}
              <motion.div variants={itemVariants} className="bg-scy-secondary rounded-[2rem] p-6 lg:p-8 card-shadow flex flex-col justify-center relative overflow-hidden text-white group hover:-translate-y-1 transition-transform">
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/brand/logo/frame.svg')", backgroundRepeat: 'repeat', backgroundSize: '200px auto', filter: 'brightness(0) invert(1)', opacity: 0.08 }}></div>
                <div className="absolute -left-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-[40px] pointer-events-none"></div>
                
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-white">رؤيتنا</h3>
                </div>
                <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed relative z-10">
                  {orgData.vision}
                </p>
              </motion.div>

              {/* Mission - Accent Color (Green) */}
              <motion.div variants={itemVariants} className="bg-scy-accent rounded-[2rem] p-6 lg:p-8 card-shadow flex flex-col justify-center relative overflow-hidden text-white group hover:-translate-y-1 transition-transform">
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/brand/logo/frame.svg')", backgroundRepeat: 'repeat', backgroundSize: '200px auto', filter: 'brightness(0) invert(1)', opacity: 0.08 }}></div>
                <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-black/5 rounded-full blur-[40px] pointer-events-none"></div>
                
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-white">رسالتنا</h3>
                </div>
                <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed relative z-10">
                  {orgData.mission}
                </p>
              </motion.div>
            </div>

            {/* Middle Row: Stats (Fully Colored Cards) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div key={stat.id} variants={itemVariants} className={`${stat.color} text-white rounded-3xl p-5 md:p-6 card-shadow flex flex-col justify-center items-center text-center group hover:-translate-y-2 transition-transform relative overflow-hidden border border-white/10`}>
                    <div className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('/brand/logo/frame.svg')", backgroundRepeat: 'repeat', backgroundSize: '150px auto', filter: 'brightness(0) invert(1)', opacity: 0.15 }}></div>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/10 group-hover:scale-110 transition-transform relative z-10">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-3xl font-black text-white font-mono mb-1 relative z-10">{stat.value}</h4>
                    <span className="text-xs md:text-sm font-bold text-white/90 relative z-10">{stat.label}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Bottom Row: Location Map */}
            <motion.div variants={itemVariants} className="w-full min-h-[200px] bg-white rounded-[2rem] border border-[#e4e6f0] p-4 flex flex-col relative overflow-hidden group card-shadow">
              <div className="flex justify-between items-center mb-4 relative z-20 px-2 pt-2">
                <h3 className="text-base font-black text-scy-primary flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-scy-accent" /> {orgData.locationText}
                </h3>
                <a href={orgData.mapLocationUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white bg-scy-primary hover:bg-scy-primary-600 px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2">
                  فتح في الخرائط
                </a>
              </div>

              {/* Map Placeholder Image */}
              <div className="flex-1 rounded-2xl overflow-hidden relative border border-[#e4e6f0] bg-scy-bg-alt">
                {/* Adding a pattern to make the map placeholder look nicer */}
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/brand/logo/frame.svg')", backgroundRepeat: 'repeat', backgroundSize: '250px auto', opacity: 0.05 }}></div>
                <Image src="/brand/logo/logo-minimal.svg" alt="Map" fill className="object-contain p-8 opacity-20 drop-shadow-lg" />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-white/40 to-transparent">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl text-sm font-black text-scy-primary border border-white/50 shadow-lg transform group-hover:scale-105 transition-transform">
                    عرض الموقع التفاعلي
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </BrandBackground>
  );
}
