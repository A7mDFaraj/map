"use client";

import { motion, Variants } from "framer-motion";
import { 
  MapPin, Smartphone, ChevronRight, ArrowUpLeft, Share2, 
  FileText, Globe, Building, Check, Map as MapIcon, 
  Eye, Award, TrendingUp, Target, Users, BookOpen, Phone, Mail
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import BrandBackground from "@/components/BrandBackground";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AssociationDetailsPage() {
  
  // Mock Data State
  const assocData = {
    associationName: "جمعية الأمل لتنمية الشباب",
    associationLicense: "5594", 
    associationCategory: "تنمية وتطوير",
    associationLogo: "/brand/logo/logo-minimal.svg", 
    associationDescription: "جمعية رائدة تسعى إلى تمكين الشباب وتطوير مهاراتهم القيادية والشخصية من خلال برامج نوعية ومشاريع إبداعية تسهم في تحقيق التنمية المستدامة وصنع قادة المستقبل.",
    
    aboutText: "صرح مجتمعي رائد يسعى لتوفير بيئة محفزة للشباب، وتقديم الدعم والإرشاد المهني لبناء جيل واعٍ وقادر على قيادة المستقبل والمساهمة الفاعلة في تنمية الوطن.",
    vision: "أن نكون النموذج الرائد محلياً وإقليمياً في التمكين والإرشاد المهني للشباب.",
    mission: "تقديم برامج وخدمات مبتكرة ومستدامة تساهم في بناء قدرات الشباب وتوجيههم نحو مسارات مهنية ناجحة تلبي احتياجات سوق العمل.",
    
    impactStats: [
      { id: 1, value: "+5,000", label: "مستفيد", icon: Users, color: "text-[#0c7fae]" },
      { id: 2, value: "+50", label: "شراكة استراتيجية", icon: Share2, color: "text-[#42b07a]" },
      { id: 3, value: "+200", label: "ورشة عمل", icon: BookOpen, color: "text-[#f59e0b]" }
    ],
    
    websiteLink: "#",
    mobileNumber: "0533052433",
    email: "info@alamal-youth.org.sa",
    region: "مكة المكرمة",
    city: "جدة",
    detailedAddress: "حي الحمدانية ومشروع الأمير فواز",
    mapLocationUrl: "https://maps.app.goo.gl/Xd1H6WmXaKoqPs5P8"
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(assocData.associationLicense);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `مرحباً! أود مشاركة تفاصيل ${assocData.associationName}.\n\n` +
    `📖 عن الجمعية: ${assocData.aboutText}\n` +
    `📍 الموقع: ${assocData.city} - ${assocData.detailedAddress}\n\n` +
    `للتواصل: ${assocData.websiteLink}`
  );

  return (
    <BrandBackground as="main" variant="light" patternOpacity={0.03} className="flex flex-col min-h-screen">
      
      {/* Fake Navbar Placeholder to keep consistent height (matching the main app) */}
      <div className="relative w-full h-[72px] bg-white/80 backdrop-blur-md z-[100] border-b border-[#e4e6f0] shadow-sm shrink-0 flex items-center px-4 sm:px-8" dir="ltr">
         <div className="h-8 w-24 bg-[#0c7fae]/10 rounded animate-pulse"></div>
      </div>

      <div className="flex-1 relative pb-32">

        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 pt-12" dir="rtl">

          {/* Detailed Hero Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative bg-white rounded-[2.5rem] p-6 md:p-12 border border-[#e4e6f0]/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
          >
            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0c7fae]/5 to-[#42b07a]/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Top Bar: Back Button, Association Info & Share */}
            <motion.div variants={itemVariants} className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8 mb-10 border-b border-[#e4e6f0] gap-4">
              
              <div className="flex items-center gap-4">
                {/* Back Navigation */}
                <Link 
                  href="/"
                  className="flex items-center justify-center size-12 rounded-2xl bg-[#f6f7fb] text-[#263370] hover:bg-[#263370] hover:text-white transition-all border border-[#e4e6f0]"
                  title="العودة للرئيسية"
                >
                  <ChevronRight className="w-6 h-6" />
                </Link>

                <div>
                  <h3 className="text-[#263370] font-black text-sm md:text-lg flex items-center gap-2">
                    ملف الجمعية
                  </h3>
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-[#5b6178] text-xs md:text-sm mt-1 hover:text-[#0c7fae] transition-colors cursor-pointer group"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#42b07a]" /> : <FileText className="w-3.5 h-3.5" />}
                    <span>رقم الترخيص: {assocData.associationLicense}</span>
                    {copied && <span className="text-[#42b07a] text-[10px] bg-[#42b07a]/10 px-1.5 py-0.5 rounded mr-1">تم النسخ!</span>}
                  </button>
                </div>
              </div>

              {/* Share to WhatsApp */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all border border-[#25D366]/20 shrink-0 w-full sm:w-auto justify-center"
              >
                <Share2 className="w-4 h-4" />
                مشاركة عبر واتساب
              </motion.a>
            </motion.div>

            {/* Association Main Profile */}
            <motion.div variants={itemVariants} className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start mb-14">
              
              {/* Association Logo */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c7fae]/20 to-[#42b07a]/20 rounded-3xl blur-xl translate-y-2 scale-90" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl p-6 shadow-xl border border-[#e4e6f0] flex items-center justify-center">
                  <Image src={assocData.associationLogo} alt="Association Logo" fill className="object-contain p-4 drop-shadow-sm opacity-80" />
                </div>
              </div>

              {/* Association Details */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-right pt-2">
                <span className="inline-block bg-[#0c7fae]/10 text-[#0c7fae] border border-[#0c7fae]/20 px-4 py-1.5 rounded-full text-xs font-bold mb-4">
                  تصنيف الجمعية: {assocData.associationCategory}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#263370] leading-[1.3] mb-4 tracking-tight">
                  {assocData.associationName}
                </h1>
                <p className="text-base md:text-lg text-[#5b6178] leading-relaxed font-medium max-w-3xl mx-auto md:mx-0">
                  {assocData.associationDescription}
                </p>
              </div>
            </motion.div>

            {/* Data Grid Section (WITH HOVER ANIMATIONS & OLD NESTED STYLE) */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* About */}
              <motion.div 
                variants={itemVariants} 
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 border border-[#e4e6f0] shadow-sm flex flex-col gap-4 relative overflow-hidden group transition-all"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-3 bg-[#f6f7fb] rounded-xl border border-[#e4e6f0]">
                    <FileText className="w-5 h-5 text-[#263370]" />
                  </div>
                  <h4 className="font-bold text-[#263370]">عن الجمعية</h4>
                </div>
                <div className="bg-[#f6f7fb] p-4 sm:p-5 rounded-2xl border border-[#e4e6f0]/50 group-hover:bg-[#f6f7fb]/60 transition-colors h-full">
                  <p className="text-sm text-[#5b6178] leading-relaxed font-bold text-right">
                    {assocData.aboutText}
                  </p>
                </div>
              </motion.div>

              {/* Vision & Mission */}
              <motion.div 
                variants={itemVariants} 
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 border border-[#e4e6f0] shadow-sm flex flex-col gap-4 lg:col-span-2 relative overflow-hidden group transition-all"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-3 bg-[#f6f7fb] rounded-xl border border-[#e4e6f0]">
                    <Target className="w-5 h-5 text-[#0c7fae]" />
                  </div>
                  <h4 className="font-bold text-[#263370]">الرؤية والرسالة</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 relative z-10 h-full">
                  <div className="bg-[#f6f7fb] p-4 sm:p-5 rounded-2xl border border-[#e4e6f0]/50 group-hover:bg-[#f6f7fb]/60 transition-colors flex flex-col">
                    <span className="text-xs text-[#5b6178] mb-2 flex items-center gap-1.5 font-bold"><Eye className="w-4 h-4 text-[#0c7fae]"/> الرؤية</span>
                    <p className="text-sm text-[#263370] font-bold leading-relaxed text-right mt-1">{assocData.vision}</p>
                  </div>
                  <div className="bg-[#f6f7fb] p-4 sm:p-5 rounded-2xl border border-[#e4e6f0]/50 group-hover:bg-[#f6f7fb]/60 transition-colors flex flex-col">
                    <span className="text-xs text-[#5b6178] mb-2 flex items-center gap-1.5 font-bold"><Award className="w-4 h-4 text-[#42b07a]"/> الرسالة</span>
                    <p className="text-sm text-[#263370] font-bold leading-relaxed text-right mt-1">{assocData.mission}</p>
                  </div>
                </div>
              </motion.div>

              {/* Impact & Achievements */}
              <motion.div 
                variants={itemVariants} 
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 border border-[#e4e6f0] shadow-sm flex flex-col gap-4 lg:col-span-3 relative overflow-hidden group transition-all"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-3 bg-[#f6f7fb] rounded-xl border border-[#e4e6f0]">
                    <TrendingUp className="w-5 h-5 text-[#42b07a]" />
                  </div>
                  <h4 className="font-bold text-[#263370]">الأثر والإنجازات</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2 relative z-10">
                  {assocData.impactStats.map((stat) => (
                    <div key={stat.id} className="bg-[#f6f7fb] p-5 rounded-2xl border border-[#e4e6f0]/50 group-hover:bg-[#f6f7fb]/80 transition-all flex flex-col items-center justify-center text-center group/stat">
                      <div className={`p-3 rounded-xl bg-white shadow-sm mb-3 ${stat.color} group-hover/stat:scale-110 transition-transform border border-[#e4e6f0]/60`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <strong className="text-[#263370] font-black text-2xl mb-1" dir="ltr">{stat.value}</strong>
                      <span className="text-sm text-[#5b6178] font-bold">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Location */}
              <motion.div 
                variants={itemVariants} 
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 border border-[#e4e6f0] shadow-sm flex flex-col gap-4 lg:col-span-2 relative overflow-hidden group transition-all"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-3 bg-[#f6f7fb] rounded-xl border border-[#e4e6f0]">
                    <MapPin className="w-5 h-5 text-[#0c7fae]" />
                  </div>
                  <h4 className="font-bold text-[#263370]">موقع الجمعية</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2 relative z-10">
                  <div className="flex flex-col bg-[#f6f7fb] p-4 sm:p-5 rounded-2xl border border-[#e4e6f0]/50 group-hover:bg-[#f6f7fb]/60 transition-colors">
                    <span className="text-xs text-[#5b6178] mb-2 flex items-center gap-1.5 font-bold"><Globe className="w-4 h-4 text-[#0c7fae]"/> المنطقة والمدينة</span>
                    <strong className="text-[#263370] font-black text-right mt-1">{assocData.region} - {assocData.city}</strong>
                  </div>
                  <div className="flex flex-col sm:col-span-2 bg-[#f6f7fb] p-4 sm:p-5 rounded-2xl border border-[#e4e6f0]/50 group-hover:bg-[#f6f7fb]/60 transition-colors">
                    <span className="text-xs text-[#5b6178] mb-2 flex items-center gap-1.5 font-bold"><Building className="w-4 h-4 text-[#42b07a]"/> العنوان التفصيلي</span>
                    <strong className="text-[#263370] font-black text-right mt-1 truncate whitespace-normal leading-relaxed">{assocData.detailedAddress}</strong>
                  </div>
                </div>
                <a href={assocData.mapLocationUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center justify-center gap-2 bg-white hover:bg-[#0c7fae]/5 text-[#0c7fae] py-3 px-5 rounded-xl text-sm font-bold transition-all border border-[#0c7fae]/20 hover:border-[#0c7fae]/50 w-full relative z-10 shadow-sm">
                  <MapIcon className="w-4 h-4" />
                  عرض الموقع على الخريطة
                </a>
              </motion.div>

              {/* Contact */}
              <motion.div 
                variants={itemVariants} 
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 border border-[#e4e6f0] shadow-sm flex flex-col gap-4 relative overflow-hidden group transition-all"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-3 bg-[#f6f7fb] rounded-xl border border-[#e4e6f0]">
                    <Smartphone className="w-5 h-5 text-[#42b07a]" />
                  </div>
                  <h4 className="font-bold text-[#263370]">التواصل</h4>
                </div>
                <div className="flex flex-col gap-3 mt-2 relative z-10 h-full">
                  <a href={`tel:${assocData.mobileNumber}`} className="flex items-center gap-3 hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all bg-[#f6f7fb] p-3 rounded-2xl border border-[#e4e6f0] group/btn">
                    <div className="p-2.5 bg-[#42b07a]/10 rounded-xl text-[#42b07a] group-hover/btn:bg-[#42b07a] group-hover/btn:text-white transition-colors shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <strong className="text-sm tracking-wider text-[#263370] font-black" dir="ltr">{assocData.mobileNumber}</strong>
                  </a>
                  <a href={`mailto:${assocData.email}`} className="flex items-center gap-3 hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all bg-[#f6f7fb] p-3 rounded-2xl border border-[#e4e6f0] group/btn">
                    <div className="p-2.5 bg-[#0c7fae]/10 rounded-xl text-[#0c7fae] group-hover/btn:bg-[#0c7fae] group-hover/btn:text-white transition-colors shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm tracking-wider text-[#263370] font-black truncate" dir="ltr">{assocData.email}</span>
                  </a>
                </div>
              </motion.div>

            </div>

            {/* Call to Action Bar */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative z-10 mt-12 pt-8 border-t border-[#e4e6f0] flex flex-col sm:flex-row items-center justify-center gap-4"
            >
               <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={assocData.websiteLink}
                  className="group relative flex items-center justify-center gap-3 bg-[#0c7fae] text-white px-10 py-5 rounded-2xl font-black text-xl overflow-hidden transition-all shadow-[0_15px_30px_rgba(12,127,174,0.3)] hover:shadow-[0_20px_40px_rgba(12,127,174,0.4)] w-full sm:w-auto min-w-[280px]"
                >
                  <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[30deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
                  <span className="relative z-10 flex items-center gap-3">
                    انتقل لموقع الجمعية
                    <ArrowUpLeft className="w-6 h-6 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform text-[#42b07a]" />
                  </span>
                </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </BrandBackground>
  );
}
