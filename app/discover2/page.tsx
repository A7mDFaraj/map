"use client";

import { motion, Variants } from "framer-motion";
import { 
  Users, MapPin, Smartphone, ChevronRight, 
  Share2, FileText, Globe, Check, Map as MapIcon,
  MessageSquare, Mail, Link as LinkIcon,
  Target, Eye, Award
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
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function AssociationDetailsPage() {
  
  // Mock Data State representing an Association
  const assocData = {
    name: "جمعية الأمل لتنمية الشباب",
    logo: "/brand/logo/logo-minimal.svg",
    isVerified: true,
    establishedYear: "2026",
    licenseNumber: "0000000",
    shortDescription: "تسعى الجمعية إلى بناء بيئة محفزة للشباب وتنمية قدراتهم من خلال برامج نوعية وشراكات فاعلة تسهم في تحقيق التنمية المستدامة.",
    aboutText: "تعتبر جمعية الأمل من الجمعيات الرائدة في مجال تمكين الشباب، حيث نعمل على توفير بيئة آمنة وداعمة تساهم في تطوير مهاراتهم الشخصية والمهنية. نقدم مجموعة واسعة من البرامج والأنشطة التي تشمل التدريب، الإرشاد، والتوجيه المهني، بالإضافة إلى مبادرات مجتمعية تعزز من دور الشباب في بناء المجتمع.",
    vision: "أن نكون النموذج الرائد محلياً وإقليمياً في التمكين والإرشاد المهني للشباب.",
    mission: "تقديم برامج وخدمات مبتكرة ومستدامة تساهم في بناء قدرات الشباب وتوجيههم نحو مسارات مهنية ناجحة تلبي احتياجات سوق العمل.",
    region: "الرياض",
    category: "خدمات الإرشاد والتوجيه المهني",
    beneficiaries: "+2,323 مستفيد",
    mobileNumber: "+966109304924093",
    email: "info@alamal-youth.org.sa",
    website: "alamal-youth.org.sa",
    twitter: "@alamal_youth",
    locationText: "الرياض، حي السليمانية",
    mapLocationUrl: "https://maps.app.goo.gl/Xd1H6WmXaKoqPs5P8"
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(assocData.licenseNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `مرحباً! أود التواصل مع ${assocData.name}.`
  );

  return (
    <BrandBackground as="main" variant="light" patternOpacity={0.03} className="flex flex-col min-h-screen">
      
      {/* Fake Navbar Placeholder */}
      <div className="relative w-full h-[72px] bg-white/80 backdrop-blur-md z-[100] border-b border-[#e4e6f0] shadow-sm shrink-0 flex items-center px-4 sm:px-8" dir="ltr">
         <div className="h-8 w-24 bg-[#0c7fae]/10 rounded animate-pulse"></div>
      </div>

      <div className="flex-1 relative pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 pt-12" dir="rtl">

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col lg:flex-row gap-6 lg:gap-8"
          >
            {/* Main Content (Right Side conceptually in RTL, so we render it first or second depending on layout. In Flex-row RTL, first element is on the right. So we render Main Content first) */}
            <div className="flex-1 flex flex-col gap-6">
              
              {/* Header Card */}
              <motion.div variants={itemVariants} whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }} transition={{ duration: 0.3 }} className="bg-white rounded-3xl p-6 md:p-8 border border-[#e4e6f0] shadow-sm relative overflow-hidden group transition-all">
                {/* Accent line */}
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-all duration-500 origin-top scale-y-0 group-hover:scale-y-100" />
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
                  {/* Title & Logo */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-50 rounded-2xl border border-[#e4e6f0] flex items-center justify-center p-3 shrink-0">
                      <Image src={assocData.logo} alt={assocData.name} width={60} height={60} className="object-contain" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h1 className="text-2xl md:text-3xl font-black text-[#263370]">{assocData.name}</h1>
                        {assocData.isVerified && (
                          <span className="flex items-center gap-1 bg-[#42b07a]/10 text-[#42b07a] text-xs font-bold px-2 py-1 rounded-full">
                            <Check className="w-3 h-3" />
                            جمعية موثقة
                          </span>
                        )}
                      </div>
                      <p className="text-[#5b6178] text-sm">
                        تأسست عام {assocData.establishedYear} | مسجلة برقم <button onClick={handleCopy} className="hover:text-[#0c7fae] inline-flex items-center gap-1 font-mono" dir="ltr">{assocData.licenseNumber} {copied && <Check className="w-3 h-3 text-[#42b07a]"/>}</button>
                      </p>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <a href={`https://wa.me/?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-[#0c7fae] border-2 border-[#0c7fae]/20 hover:border-[#0c7fae] hover:bg-[#0c7fae]/5 px-6 py-2.5 rounded-xl font-bold text-sm transition-all shrink-0">
                    <MessageSquare className="w-4 h-4" />
                    راسل الجهة
                  </a>
                </div>

                <p className="text-[#5b6178] leading-relaxed mb-6 font-medium">
                  {assocData.shortDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#f6f7fb] text-[#263370] text-sm font-bold px-4 py-2 rounded-xl border border-[#e4e6f0] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#0c7fae]" /> {assocData.region}
                  </span>
                  <span className="bg-[#f6f7fb] text-[#263370] text-sm font-bold px-4 py-2 rounded-xl border border-[#e4e6f0] flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#42b07a]" /> {assocData.category}
                  </span>
                  <span className="bg-[#f6f7fb] text-[#263370] text-sm font-bold px-4 py-2 rounded-xl border border-[#e4e6f0] flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#f59e0b]" /> {assocData.beneficiaries}
                  </span>
                </div>
              </motion.div>

              {/* About Association */}
              <motion.div variants={itemVariants} whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }} transition={{ duration: 0.3 }} className="bg-white rounded-3xl p-6 md:p-8 border border-[#e4e6f0] shadow-sm transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-all duration-500 origin-top scale-y-0 group-hover:scale-y-100" />
                <h3 className="text-xl font-black text-[#263370] mb-4 flex items-center gap-2 relative z-10">
                  <FileText className="w-5 h-5 text-[#0c7fae]" /> عن الجمعية
                </h3>
                <p className="text-[#5b6178] leading-relaxed font-medium">
                  {assocData.aboutText}
                </p>
              </motion.div>

              {/* Vision & Mission */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }} transition={{ duration: 0.3 }} className="bg-white rounded-3xl p-6 md:p-8 border border-[#e4e6f0] shadow-sm transition-all relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-all duration-500 origin-top scale-y-0 group-hover:scale-y-100" />
                  <h3 className="text-xl font-black text-[#263370] mb-4 flex items-center gap-2 relative z-10">
                    <Eye className="w-5 h-5 text-[#0c7fae]" /> رؤيتنا
                  </h3>
                  <p className="text-[#5b6178] leading-relaxed font-medium">
                    {assocData.vision}
                  </p>
                </motion.div>
                
                <motion.div variants={itemVariants} whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }} transition={{ duration: 0.3 }} className="bg-white rounded-3xl p-6 md:p-8 border border-[#e4e6f0] shadow-sm transition-all relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-all duration-500 origin-top scale-y-0 group-hover:scale-y-100" />
                  <h3 className="text-xl font-black text-[#263370] mb-4 flex items-center gap-2 relative z-10">
                    <Award className="w-5 h-5 text-[#42b07a]" /> رسالتنا
                  </h3>
                  <p className="text-[#5b6178] leading-relaxed font-medium">
                    {assocData.mission}
                  </p>
                </motion.div>
              </div>

            </div>

            {/* Sidebar (Left Side) */}
            <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">
              
              {/* Contact Info Card */}
              <motion.div variants={itemVariants} whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }} transition={{ duration: 0.3 }} className="bg-white rounded-3xl p-6 border border-[#e4e6f0] shadow-sm transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-all duration-500 origin-top scale-y-0 group-hover:scale-y-100" />
                <h3 className="text-lg font-black text-[#263370] mb-6 flex items-center gap-2 relative z-10">
                  <Smartphone className="w-5 h-5 text-[#0c7fae]" /> معلومات التواصل
                </h3>
                
                <div className="flex flex-col gap-4">
                  <a href={`tel:${assocData.mobileNumber}`} className="flex items-center justify-between group">
                    <span className="text-sm font-bold text-[#5b6178] group-hover:text-[#0c7fae] transition-colors" dir="ltr">{assocData.mobileNumber}</span>
                    <div className="w-8 h-8 rounded-full bg-[#f6f7fb] flex items-center justify-center text-[#263370] group-hover:bg-[#0c7fae]/10 group-hover:text-[#0c7fae] transition-colors">
                      <Smartphone className="w-4 h-4" />
                    </div>
                  </a>
                  
                  <div className="h-px bg-[#e4e6f0]/50" />
                  
                  <a href={`mailto:${assocData.email}`} className="flex items-center justify-between group">
                    <span className="text-sm font-bold text-[#5b6178] group-hover:text-[#0c7fae] transition-colors truncate max-w-[200px]">{assocData.email}</span>
                    <div className="w-8 h-8 rounded-full bg-[#f6f7fb] flex items-center justify-center text-[#263370] group-hover:bg-[#0c7fae]/10 group-hover:text-[#0c7fae] transition-colors shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                  </a>

                  <div className="h-px bg-[#e4e6f0]/50" />

                  <a href={`https://${assocData.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                    <span className="text-sm font-bold text-[#5b6178] group-hover:text-[#0c7fae] transition-colors">{assocData.website}</span>
                    <div className="w-8 h-8 rounded-full bg-[#f6f7fb] flex items-center justify-center text-[#263370] group-hover:bg-[#0c7fae]/10 group-hover:text-[#0c7fae] transition-colors shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                  </a>

                  <div className="h-px bg-[#e4e6f0]/50" />

                  <a href={assocData.mapLocationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                    <span className="text-sm font-bold text-[#5b6178] group-hover:text-[#0c7fae] transition-colors">{assocData.locationText}</span>
                    <div className="w-8 h-8 rounded-full bg-[#f6f7fb] flex items-center justify-center text-[#263370] group-hover:bg-[#0c7fae]/10 group-hover:text-[#0c7fae] transition-colors shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                  </a>
                </div>

                {/* Map Embed Placeholder */}
                <div className="mt-6 rounded-2xl overflow-hidden border border-[#e4e6f0] h-48 bg-gray-100 relative group">
                  <div className="absolute inset-0 bg-[#0c7fae]/5 group-hover:bg-[#0c7fae]/10 transition-colors z-10" />
                  <Image src="/brand/logo/logo-minimal.svg" alt="Map" fill className="object-cover opacity-20 blur-sm" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <a href={assocData.mapLocationUrl} target="_blank" rel="noopener noreferrer" className="bg-white/90 backdrop-blur text-[#263370] px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-white transition-colors flex items-center gap-2">
                      <MapIcon className="w-4 h-4 text-[#0c7fae]" />
                      فتح في الخرائط
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Follow Us Card */}
              <motion.div variants={itemVariants} whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }} transition={{ duration: 0.3 }} className="bg-white rounded-3xl p-6 border border-[#e4e6f0] shadow-sm transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-all duration-500 origin-top scale-y-0 group-hover:scale-y-100" />
                <h3 className="text-lg font-black text-[#263370] mb-4 relative z-10">تابعنا على</h3>
                <div className="flex items-center justify-end gap-3">
                  <a href={assocData.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#f6f7fb] border border-[#e4e6f0] flex items-center justify-center text-[#263370] hover:bg-[#0c7fae]/10 hover:text-[#0c7fae] hover:border-[#0c7fae]/30 transition-all">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href={`https://${assocData.website}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#f6f7fb] border border-[#e4e6f0] flex items-center justify-center text-[#263370] hover:bg-[#0c7fae]/10 hover:text-[#0c7fae] hover:border-[#0c7fae]/30 transition-all">
                    <LinkIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

            </div>

          </motion.div>
        </div>
      </div>
    </BrandBackground>
  );
}
