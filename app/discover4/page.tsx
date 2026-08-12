"use client";

import { motion, Variants } from "framer-motion";
import { 
  Users, MapPin, Smartphone, ChevronRight, 
  Share2, FileText, Globe, Check, Map as MapIcon,
  MessageSquare, Mail, Link as LinkIcon,
  Target, Eye, Award, Download, BookOpen, Heart,
  TrendingUp, Trophy, Music, Ghost,
  Briefcase, Activity, CheckCircle2, LayoutGrid, BarChart3, GraduationCap
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
    governancePercentage: "95",
    organizationType: "جمعية شبابية",
    targetAudience: "شباب وفتيات (12 - 34 سنة)",
    financialSizeClassification: "الكبيرة (8 مليون - 30 مليون)",
    shortDescription: "تسعى الجمعية إلى بناء بيئة محفزة للشباب وتنمية قدراتهم من خلال برامج نوعية وشراكات فاعلة تسهم في تحقيق التنمية المستدامة.",
    aboutText: "تعتبر جمعية الأمل من الجمعيات الرائدة في مجال تمكين الشباب، حيث نعمل على توفير بيئة آمنة وداعمة تساهم في تطوير مهاراتهم الشخصية والمهنية. نقدم مجموعة واسعة من البرامج والأنشطة التي تشمل التدريب، الإرشاد، والتوجيه المهني، بالإضافة إلى مبادرات مجتمعية تعزز من دور الشباب في بناء المجتمع.",
    vision: "أن نكون النموذج الرائد محلياً وإقليمياً في التمكين والإرشاد المهني للشباب.",
    mission: "تقديم برامج وخدمات مبتكرة ومستدامة تساهم في بناء قدرات الشباب وتوجيههم نحو مسارات مهنية ناجحة تلبي احتياجات سوق العمل.",
    goals: [
      "تعزيز الثقة بالنفس لدى الشباب",
      "تقديم برامج تدريبية متخصصة",
      "بناء شراكات استراتيجية مع القطاع الخاص",
      "دعم المبادرات الشبابية المبتكرة"
    ],
    fields: [
      "خدمات الإرشاد والتوجيه المهني",
      "تعزيز الاعتماد على الذات",
      "خدمات الشباب والنشئ"
    ],
    achievements: [
      { title: "ساعات تطوعية", size: "+10,000", icon: "Heart" },
      { title: "مستفيدين", size: "+5,000", icon: "Users" },
      { title: "شراكات استراتيجية", size: "25", icon: "Briefcase" },
      { title: "نمو مالي", size: "15%", icon: "TrendingUp" }
    ],
    programs: [
      { name: "معسكر طويق البرمجي", type: "برنامج تدريبي", description: "معسكر مكثف لتأهيل الشباب لسوق العمل في مجال البرمجة", beneficiariesCount: "500" },
      { name: "تطوعنا حياة", type: "برنامج تطوعي", description: "مبادرة مجتمعية لتعزيز ثقافة التطوع بين الشباب", beneficiariesCount: "1200" },
      { name: "قيادات شابة", type: "برنامج مهاري", description: "دبلوم مصغر في القيادة وإدارة الفرق", beneficiariesCount: "150" }
    ],
    partnerLogos: [
      "/brand/logo/logo-minimal.svg",
      "/brand/logo/logo-minimal.svg",
      "/brand/logo/logo-minimal.svg",
      "/brand/logo/logo-minimal.svg"
    ],
    region: "الرياض",
    activityRegions: ["الرياض", "القصيم", "الشرقية"],
    category: "خدمات الإرشاد والتوجيه المهني",
    beneficiaries: "+2,323 مستفيد",
    mobileNumber: "+966109304924093",
    email: "info@alamal-youth.org.sa",
    website: "alamal-youth.org.sa",
    socialMedia: {
      twitter: "https://twitter.com/alamal_youth",
      snapchat: "https://snapchat.com/add/alamal_snap",
      instagram: "https://instagram.com/alamal_ig",
      linkedin: "https://linkedin.com/company/alamal_youth",
      youtube: "https://youtube.com/@alamal_yt",
      whatsapp: "https://wa.me/966109304924093",
      tiktok: "https://tiktok.com/@alamal_tiktok"
    },
    locationText: "الرياض، حي السليمانية",
    mapLocationUrl: "https://maps.app.goo.gl/Xd1H6WmXaKoqPs5P8",
    profileDocumentPath: "#"
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
                      <div className="flex items-center flex-wrap gap-3 mb-2">
                        <h1 className="text-2xl md:text-3xl font-black text-[#263370] leading-tight">{assocData.name}</h1>
                        <div className="flex items-center flex-wrap gap-2 mt-1 md:mt-0">
                          {assocData.isVerified && (
                            <span className="flex items-center justify-center gap-1 bg-[#42b07a]/10 text-[#42b07a] text-sm md:text-xs font-bold px-3 py-1.5 rounded-full shrink-0 whitespace-nowrap">
                              <Check className="w-3.5 h-3.5" />
                              جمعية موثقة
                            </span>
                          )}
                          <span className="flex items-center justify-center gap-1 bg-[#0c7fae]/10 text-[#0c7fae] text-sm md:text-xs font-bold px-3 py-1.5 rounded-full shrink-0 whitespace-nowrap">
                            {assocData.organizationType}
                          </span>
                          <span className="flex items-center justify-center gap-1 bg-purple-100 text-purple-700 text-sm md:text-xs font-bold px-3 py-1.5 rounded-full shrink-0 whitespace-nowrap">
                            الحوكمة {assocData.governancePercentage}%
                          </span>
                        </div>
                      </div>
                      <p className="text-[#5b6178] text-sm flex items-center flex-wrap gap-2">
                        <span>تأسست عام {assocData.establishedYear}</span>
                        <span className="text-gray-300">|</span>
                        <span>مسجلة برقم <button onClick={handleCopy} className="hover:text-[#0c7fae] inline-flex items-center gap-1 font-mono" dir="ltr">{assocData.licenseNumber} {copied && <Check className="w-3 h-3 text-[#42b07a]"/>}</button></span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 shrink-0">
                    <a href={`https://wa.me/?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white text-[#0c7fae] border-2 border-[#0c7fae]/20 hover:border-[#0c7fae] hover:bg-[#0c7fae]/5 px-6 py-2.5 rounded-xl font-bold text-sm transition-all">
                      <MessageSquare className="w-4 h-4" />
                      راسل الجهة
                    </a>
                    <a href={assocData.profileDocumentPath} download className="flex items-center justify-center gap-2 bg-[#0c7fae] text-white hover:bg-[#0a668c] px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-[#0c7fae]/20">
                      <Download className="w-4 h-4" />
                      الملف التعريفي
                    </a>
                  </div>
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
                    <Users className="w-4 h-4 text-[#f59e0b]" /> {assocData.targetAudience}
                  </span>
                  <span className="bg-[#f6f7fb] text-[#263370] text-sm font-bold px-4 py-2 rounded-xl border border-[#e4e6f0] flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-purple-500" /> {assocData.financialSizeClassification}
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

              {/* Strategic Goals & Work Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 md:p-8 border border-[#e4e6f0] shadow-sm relative overflow-hidden group">
                  <h3 className="text-xl font-black text-[#263370] mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0c7fae]" /> الأهداف الاستراتيجية
                  </h3>
                  <ul className="space-y-4">
                    {assocData.goals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#5b6178] font-medium leading-relaxed">
                        <span className="w-6 h-6 rounded-full bg-[#0c7fae]/10 text-[#0c7fae] flex items-center justify-center shrink-0 text-sm mt-0.5">{idx + 1}</span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 md:p-8 border border-[#e4e6f0] shadow-sm relative overflow-hidden group">
                  <h3 className="text-xl font-black text-[#263370] mb-6 flex items-center gap-2">
                    <LayoutGrid className="w-5 h-5 text-[#42b07a]" /> مجالات العمل
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {assocData.fields.map((field, idx) => (
                      <span key={idx} className="bg-[#f6f7fb] text-[#263370] text-sm font-bold px-4 py-2.5 rounded-xl border border-[#e4e6f0]">
                        {field}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Achievements Section */}
              <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 md:p-8 border border-[#e4e6f0] shadow-sm">
                <h3 className="text-xl font-black text-[#263370] mb-6 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#f59e0b]" /> الأثر والإنجازات
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {assocData.achievements.map((ach, idx) => {
                    const IconComponent = ach.icon === 'Heart' ? Heart : 
                                          ach.icon === 'Users' ? Users : 
                                          ach.icon === 'Briefcase' ? Briefcase : TrendingUp;
                    return (
                      <div key={idx} className="bg-[#f6f7fb] rounded-2xl p-5 border border-[#e4e6f0] flex flex-col items-center justify-center text-center gap-3 hover:border-[#0c7fae]/30 hover:bg-white transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-white border border-[#e4e6f0] flex items-center justify-center text-[#0c7fae] group-hover:scale-110 transition-transform shadow-sm">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-2xl font-black text-[#263370] mb-1" dir="ltr">{ach.size}</div>
                          <div className="text-sm font-bold text-[#5b6178]">{ach.title}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Programs & Projects Gallery */}
              <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 md:p-8 border border-[#e4e6f0] shadow-sm">
                <h3 className="text-xl font-black text-[#263370] mb-6 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#0c7fae]" /> البرامج والمشاريع
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {assocData.programs.map((prog, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-5 border border-[#e4e6f0] hover:border-[#0c7fae]/30 hover:shadow-md transition-all group relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-1 h-full bg-[#0c7fae] opacity-0 group-hover:opacity-100 transition-opacity" />
                       <div className="flex justify-between items-start mb-3">
                         <h4 className="text-lg font-bold text-[#263370]">{prog.name}</h4>
                         <span className="bg-[#0c7fae]/10 text-[#0c7fae] text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap">
                           {prog.type}
                         </span>
                       </div>
                       <p className="text-sm text-[#5b6178] mb-4 font-medium leading-relaxed">
                         {prog.description}
                       </p>
                       <div className="flex items-center gap-2 text-sm font-bold text-[#42b07a] bg-[#42b07a]/10 px-3 py-1.5 rounded-lg w-fit">
                         <Users className="w-4 h-4" />
                         {prog.beneficiariesCount} مستفيد
                       </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Partners Gallery */}
              <motion.div variants={itemVariants} className="bg-white rounded-3xl p-6 md:p-8 border border-[#e4e6f0] shadow-sm">
                <h3 className="text-xl font-black text-[#263370] mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#0c7fae]" /> الشركاء والداعمين
                </h3>
                <div className="flex flex-wrap gap-4 items-center">
                  {assocData.partnerLogos.map((logo, idx) => (
                    <div key={idx} className="w-24 h-24 bg-gray-50 rounded-2xl border border-[#e4e6f0] flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer">
                      <Image src={logo} alt="Partner" width={60} height={60} className="object-contain" />
                    </div>
                  ))}
                </div>
              </motion.div>

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

                {/* Activity Regions */}
                <div className="mt-5 pt-5 border-t border-[#e4e6f0]">
                  <div className="text-sm font-bold text-[#263370] mb-3">نطاق عمل الجمعية:</div>
                  <div className="flex flex-wrap gap-2">
                    {assocData.activityRegions.map((region, idx) => (
                      <span key={idx} className="bg-[#0c7fae]/5 border border-[#0c7fae]/10 text-[#0c7fae] text-xs font-bold px-3 py-1.5 rounded-lg">
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Follow Us Card */}
              <motion.div variants={itemVariants} whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)" }} transition={{ duration: 0.3 }} className="bg-white rounded-3xl p-6 border border-[#e4e6f0] shadow-sm transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#0c7fae] to-[#42b07a] opacity-0 group-hover:opacity-100 transition-all duration-500 origin-top scale-y-0 group-hover:scale-y-100" />
                <h3 className="text-lg font-black text-[#263370] mb-4 relative z-10">تابعنا على</h3>
                <div className="flex flex-wrap items-center justify-start gap-3">
                  {Object.entries(assocData.socialMedia).map(([platform, url]) => {
                    const icons = {
                      twitter: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
                      snapchat: <Ghost className="w-4 h-4" />,
                      instagram: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
                      linkedin: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>,
                      youtube: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
                      whatsapp: <MessageSquare className="w-4 h-4" />,
                      tiktok: <Music className="w-4 h-4" />
                    };
                    return (
                      <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#f6f7fb] border border-[#e4e6f0] flex items-center justify-center text-[#263370] hover:bg-[#0c7fae]/10 hover:text-[#0c7fae] hover:border-[#0c7fae]/30 transition-all shadow-sm">
                        {icons[platform as keyof typeof icons] || <LinkIcon className="w-4 h-4" />}
                      </a>
                    );
                  })}
                  <a href={`https://${assocData.website}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#f6f7fb] border border-[#e4e6f0] flex items-center justify-center text-[#263370] hover:bg-[#0c7fae]/10 hover:text-[#0c7fae] hover:border-[#0c7fae]/30 transition-all shadow-sm">
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
