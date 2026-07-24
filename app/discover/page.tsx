"use client";

import { motion, Variants } from "framer-motion";
import { 
  Users, Calendar, MapPin, Smartphone, ChevronRight, 
  ArrowUpLeft, Share2, FileText, Clock, Globe,
  Building, Check, Map as MapIcon
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ClubDetailsPage() {
  
  // Mock Data State
  const clubData = {
    associationName: "جمعية لبنات لتمكين الفتيات",
    associationLogo: "/brand/logo/logo-minimal.svg",
    associationLicense: "5594", 
    clubName: "نادي لبنات الصيفي",
    clubCategory: "مهاري",
    clubLogo: "/brand/logo/logo-minimal.svg", // Fallback to minimal logo for mock
    clubDescription: "برنامج صيفي متكامل يهدف إلى تمكين الفتيات وتطوير مهاراتهن القيادية والشخصية من خلال ورش عمل تفاعلية، ومشاريع إبداعية، وأنشطة ترفيهية تصنع قادة المستقبل.",
    targetGender: "إناث", 
    startAge: "12",
    endAge: "15",
    startDate: "1447/05/01", 
    endDate: "1447/07/01",
    registrationLink: "#",
    mobileNumber: "0533052433",
    email: "info@labanat.org.sa",
    region: "مكة المكرمة",
    city: "جدة",
    detailedAddress: "حي الحمدانية ومشروع الأمير فواز",
    mapLocationUrl: "https://maps.app.goo.gl/Xd1H6WmXaKoqPs5P8"
  };

  const [duration, setDuration] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(clubData.associationLicense);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const calculateWeeks = () => "8 أسابيع";
    setDuration(calculateWeeks());
  }, [clubData.startDate, clubData.endDate]);

  const whatsappMessage = encodeURIComponent(
    `مرحباً! أود مشاركة تفاصيل ${clubData.clubName} التابع لـ ${clubData.associationName}.\n\n` +
    `📅 التاريخ: ${clubData.startDate} إلى ${clubData.endDate}\n` +
    `🎯 الفئة: ${clubData.targetGender} (${clubData.startAge} - ${clubData.endAge} سنة)\n` +
    `📍 الموقع: ${clubData.city} - ${clubData.detailedAddress}\n\n` +
    `للتسجيل: ${clubData.registrationLink}`
  );

  return (
    <main className="flex flex-col min-h-screen bg-[#f6f7fb]">
      
      {/* Fake Navbar Placeholder to keep consistent height (matching the main app) */}
      <div className="relative w-full h-[72px] bg-white/80 backdrop-blur-md z-[100] border-b border-[#e4e6f0] shadow-sm shrink-0 flex items-center px-4 sm:px-8" dir="ltr">
         <div className="h-8 w-24 bg-[#0c7fae]/10 rounded animate-pulse"></div>
      </div>

      <div className="flex-1 relative pb-32">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 brand-pattern-bg opacity-30 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 pt-12">

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
                  <h3 className="text-[#263370] font-black text-sm md:text-lg">{clubData.associationName}</h3>
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-[#5b6178] text-xs md:text-sm mt-1 hover:text-[#0c7fae] transition-colors cursor-pointer group"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#42b07a]" /> : <FileText className="w-3.5 h-3.5" />}
                    <span>رقم الترخيص: {clubData.associationLicense}</span>
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

            {/* Club Main Profile */}
            <motion.div variants={itemVariants} className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start mb-14">
              
              {/* Club Logo */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c7fae]/20 to-[#42b07a]/20 rounded-3xl blur-xl translate-y-2 scale-90" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl p-6 shadow-xl border border-[#e4e6f0] flex items-center justify-center">
                  <Image src={clubData.clubLogo} alt="Club Logo" fill className="object-contain p-4 drop-shadow-sm opacity-80" />
                </div>
              </div>

              {/* Club Details */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-right pt-2">
                <span className="inline-block bg-[#0c7fae]/10 text-[#0c7fae] border border-[#0c7fae]/20 px-4 py-1.5 rounded-full text-xs font-bold mb-4">
                  تصنيف النادي: {clubData.clubCategory}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#263370] leading-[1.3] mb-4 tracking-tight">
                  {clubData.clubName}
                </h1>
                <p className="text-base md:text-lg text-[#5b6178] leading-relaxed font-medium max-w-3xl mx-auto md:mx-0">
                  {clubData.clubDescription}
                </p>
              </div>
            </motion.div>

            {/* Data Grid Section */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Target Audience */}
              <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 border border-[#e4e6f0] shadow-sm flex flex-col gap-4 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#f6f7fb] rounded-xl border border-[#e4e6f0]">
                    <Users className="w-5 h-5 text-[#263370]" />
                  </div>
                  <h4 className="font-bold text-[#263370]">الفئة المستهدفة</h4>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div className="bg-[#f6f7fb] p-4 rounded-2xl border border-[#e4e6f0]/50">
                    <span className="block text-xs text-[#5b6178] mb-1">الجنس</span>
                    <strong className="text-[#263370] font-black">{clubData.targetGender}</strong>
                  </div>
                  <div className="bg-[#f6f7fb] p-4 rounded-2xl border border-[#e4e6f0]/50">
                    <span className="block text-xs text-[#5b6178] mb-1">الفئة العمرية</span>
                    <strong className="text-[#263370] font-black">{clubData.startAge} - {clubData.endAge} سنة</strong>
                  </div>
                </div>
              </motion.div>

              {/* Dates & Duration */}
              <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 border border-[#e4e6f0] shadow-sm flex flex-col gap-4 lg:col-span-2 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-3 bg-[#f6f7fb] rounded-xl border border-[#e4e6f0]">
                    <Calendar className="w-5 h-5 text-[#0c7fae]" />
                  </div>
                  <h4 className="font-bold text-[#263370]">الفترة الزمنية</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2 relative z-10">
                  <div className="bg-[#f6f7fb] p-4 rounded-2xl border border-[#e4e6f0]/50">
                    <span className="block text-xs text-[#5b6178] mb-1">تاريخ البدء</span>
                    <strong className="text-[#263370] font-black">{clubData.startDate}</strong>
                  </div>
                  <div className="bg-[#f6f7fb] p-4 rounded-2xl border border-[#e4e6f0]/50">
                    <span className="block text-xs text-[#5b6178] mb-1">تاريخ الانتهاء</span>
                    <strong className="text-[#263370] font-black">{clubData.endDate}</strong>
                  </div>
                  <div className="bg-[#f6f7fb] p-4 rounded-2xl border border-[#e4e6f0]/50" title="حقل محسوب تلقائياً">
                    <span className="block text-xs text-[#5b6178] mb-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> المدة (تلقائي)
                    </span>
                    <strong className="text-[#42b07a] font-black">{duration}</strong>
                  </div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 border border-[#e4e6f0] shadow-sm flex flex-col gap-4 lg:col-span-2 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-3 bg-[#f6f7fb] rounded-xl border border-[#e4e6f0]">
                    <MapPin className="w-5 h-5 text-[#0c7fae]" />
                  </div>
                  <h4 className="font-bold text-[#263370]">موقع النادي</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2 relative z-10">
                  <div className="flex flex-col bg-[#f6f7fb] p-4 rounded-2xl border border-[#e4e6f0]/50">
                    <span className="text-xs text-[#5b6178] mb-1 flex items-center gap-1"><Globe className="w-3.5 h-3.5"/> المنطقة والمدينة</span>
                    <strong className="text-[#263370] font-black">{clubData.region} - {clubData.city}</strong>
                  </div>
                  <div className="flex flex-col sm:col-span-2 bg-[#f6f7fb] p-4 rounded-2xl border border-[#e4e6f0]/50">
                    <span className="text-xs text-[#5b6178] mb-1 flex items-center gap-1"><Building className="w-3.5 h-3.5"/> العنوان التفصيلي</span>
                    <strong className="text-[#263370] font-black">{clubData.detailedAddress}</strong>
                  </div>
                </div>
                <a href={clubData.mapLocationUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 bg-[#0c7fae]/10 hover:bg-[#0c7fae]/20 text-[#0c7fae] py-3 px-5 rounded-xl text-sm font-bold transition-colors w-fit border border-[#0c7fae]/20">
                  <MapIcon className="w-4 h-4" />
                  عرض على الخريطة
                </a>
              </motion.div>

              {/* Contact */}
              <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 border border-[#e4e6f0] shadow-sm flex flex-col gap-4 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-3 bg-[#f6f7fb] rounded-xl border border-[#e4e6f0]">
                    <Smartphone className="w-5 h-5 text-[#42b07a]" />
                  </div>
                  <h4 className="font-bold text-[#263370]">التواصل</h4>
                </div>
                <div className="flex flex-col gap-3 mt-2 relative z-10">
                  <a href={`tel:${clubData.mobileNumber}`} className="flex items-center gap-2 hover:bg-[#e7e9f2] transition-colors bg-[#f6f7fb] px-4 py-3 rounded-2xl border border-[#e4e6f0]" dir="ltr">
                    <strong className="text-sm tracking-wider text-[#263370] font-black">{clubData.mobileNumber}</strong>
                  </a>
                  <a href={`mailto:${clubData.email}`} className="flex items-center gap-2 text-sm hover:bg-[#e7e9f2] transition-colors bg-[#f6f7fb] px-4 py-3 rounded-2xl border border-[#e4e6f0] text-[#263370] font-black">
                    {clubData.email}
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
                  href={clubData.registrationLink}
                  className="group relative flex items-center justify-center gap-3 bg-[#0c7fae] text-white px-10 py-5 rounded-2xl font-black text-xl overflow-hidden transition-all shadow-[0_15px_30px_rgba(12,127,174,0.3)] hover:shadow-[0_20px_40px_rgba(12,127,174,0.4)] w-full sm:w-auto min-w-[280px]"
                >
                  <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[30deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
                  <span className="relative z-10 flex items-center gap-3">
                    سجل في النادي الآن
                    <ArrowUpLeft className="w-6 h-6 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform text-[#42b07a]" />
                  </span>
                </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </main>
  );
}
