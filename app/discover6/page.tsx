"use client";

import { motion, Variants, animate, useInView } from "framer-motion";
import { 
  Users, MapPin, Smartphone, ChevronRight, 
  Share2, FileText, Globe, Check, Map as MapIcon,
  MessageSquare, Mail, Link as LinkIcon,
  Target, Eye, Award, Download, Heart,
  TrendingUp, Trophy, Music, Ghost,
  Briefcase, CheckCircle2, LayoutGrid, BarChart3, GraduationCap,
  Sparkles, Copy, ExternalLink, ShieldCheck, ArrowUpRight, Share, Activity
} from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Card entrance stagger
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

// Internal Text Stagger inside cards (makes text inside cards animate gracefully!)
const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 }
  }
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.45, ease: "easeOut" } 
  }
};

// Animated counter hook matching new8 status section behavior
const AnimatedCounter = ({ 
  from = 0, 
  to, 
  prefix = "", 
  suffix = "", 
  className 
}: { 
  from?: number; 
  to: number; 
  prefix?: string; 
  suffix?: string; 
  className?: string 
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-30px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: 2.2,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = prefix + Math.round(value).toLocaleString('en-US') + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, prefix, suffix, isInView]);

  return (
    <span ref={nodeRef} className={className} dir="ltr">
      {prefix}{from}{suffix}
    </span>
  );
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
      "تعزيز الثقة بالنفس لدى الشباب وتطوير القدرات الذاتية",
      "تقديم برامج تدريبية متخصصة ومواكبة لاحتياجات سوق العمل",
      "بناء شراكات استراتيجية مستدامة مع القطاعين العام والخاص",
      "دعم ورعاية المبادرات والابتكارات الشبابية النوعية"
    ],
    fields: [
      "خدمات الإرشاد والتوجيه المهني",
      "تعزيز الاعتماد على الذات والتمكين الاقتصادى",
      "خدمات الشباب والنشئ وتطوير المهارات"
    ],
    achievements: [
      { 
        title: "ساعات تطوعية", 
        target: 10000, 
        prefix: "+", 
        suffix: "", 
        icon: Heart, 
        iconBg: "bg-rose-500/15 border border-rose-500/30 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.2)] group-hover:bg-rose-500/25 group-hover:scale-110", 
        neonGlow: "group-hover:border-rose-500/50 group-hover:shadow-[0_0_35px_rgba(244,63,94,0.25)]" 
      },
      { 
        title: "مستفيدين", 
        target: 5000, 
        prefix: "+", 
        suffix: "", 
        icon: Users, 
        iconBg: "bg-sky-500/15 border border-sky-500/30 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)] group-hover:bg-sky-500/25 group-hover:scale-110", 
        neonGlow: "group-hover:border-sky-500/50 group-hover:shadow-[0_0_35px_rgba(56,189,248,0.25)]" 
      },
      { 
        title: "شراكات استراتيجية", 
        target: 25, 
        prefix: "", 
        suffix: "", 
        icon: Briefcase, 
        iconBg: "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.2)] group-hover:bg-emerald-500/25 group-hover:scale-110", 
        neonGlow: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_35px_rgba(52,211,153,0.25)]" 
      },
      { 
        title: "نمو مالي", 
        target: 15, 
        prefix: "", 
        suffix: "%", 
        icon: TrendingUp, 
        iconBg: "bg-amber-500/15 border border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.2)] group-hover:bg-amber-500/25 group-hover:scale-110", 
        neonGlow: "group-hover:border-amber-500/50 group-hover:shadow-[0_0_35px_rgba(251,191,36,0.25)]" 
      }
    ],
    programs: [
      { 
        name: "معسكر طويق البرمجي", 
        type: "برنامج تدريبي مكثف", 
        description: "معسكر مكثف لتأهيل الشباب لسوق العمل في مجالات البرمجة وتطوير التطبيقات الحديثة والذكاء الاصطناعي.", 
        beneficiariesCount: "500" 
      },
      { 
        name: "تطوعنا حياة", 
        type: "مبادرة مجتمعية", 
        description: "مبادرة مجتمعية شاملة لتعزيز ثقافة التطوع وتفعيل الطاقات الشبابية في مشاريع تنموية ذات أثر ملموس.", 
        beneficiariesCount: "1,200" 
      },
      { 
        name: "قيادات شابة", 
        type: "دبلوم قيادي", 
        description: "برنامج نوعي في القيادة الابتكارية وإدارة الفرق والمؤسسات التنموية وفق أحدث المعايير الدولية.", 
        beneficiariesCount: "150" 
      }
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
  const [shareSuccess, setShareSuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(assocData.licenseNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: assocData.name,
          text: assocData.shortDescription,
          url: window.location.href,
        });
      } catch (err) {
        copyUrl();
      }
    } else {
      copyUrl();
    }
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `مرحباً! أود التواصل مع ${assocData.name}.`
  );

  return (
    <main className="min-h-screen bg-[#060911] text-slate-100 relative overflow-hidden font-sans selection:bg-sky-500/30 selection:text-sky-200">
      
      {/* 
        PREMIUM DARK AMBIENT LIGHTING (CLEAN & NO PATTERN BACKGROUND)
      */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {/* Top Right Cyan Ambient Glow */}
        <motion.div 
          className="absolute -top-40 -right-40 w-[650px] h-[650px] bg-[#1C81AC]/15 rounded-full blur-[140px]"
          animate={{ opacity: [0.6, 0.85, 0.6], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Bottom Left Emerald Ambient Glow */}
        <motion.div 
          className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-[#3EB985]/12 rounded-full blur-[150px]"
          animate={{ opacity: [0.5, 0.75, 0.5], scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Center Navy Deep Glow */}
        <div className="absolute top-1/4 left-1/3 w-[750px] h-[750px] bg-[#233A77]/25 rounded-full blur-[180px] opacity-85" />
      </div>

      {/* Floating Dark Glass Navbar */}
      <header className="sticky top-0 z-[100] w-full bg-[#090D17]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between" dir="rtl">
          <div className="flex items-center gap-4">
            <Link 
              href="/discover"
              className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl border border-white/10 transition-all hover:border-sky-500/40 hover:shadow-[0_0_20px_rgba(28,129,172,0.2)]"
            >
              <ChevronRight className="w-4 h-4 text-sky-400 rotate-180" />
              <span>العودة للدليل</span>
            </Link>
            <div className="h-4 w-px bg-white/15 hidden sm:block" />
            <span className="text-xs font-semibold text-slate-400 hidden sm:inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              دليل الجمعيات الأهلية والشبابية
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl border border-white/10 transition-all hover:border-sky-500/40 hover:shadow-[0_0_20px_rgba(28,129,172,0.2)] active:scale-95"
            >
              <Share className="w-4 h-4 text-sky-400" />
              <span>{shareSuccess ? "تم نسخ الرابط!" : "مشاركة"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Page Layout Container */}
      <div className="relative z-10 pb-32 pt-8 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6" dir="rtl">

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col lg:flex-row gap-6 lg:gap-8"
          >
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col gap-6">
              
              {/* 
                HEADER HERO PROFILE CARD WITH LIVE TOP-EDGE TRAVELING NEON BEAM
                Features a continuous cyan/emerald neon light beam sweeping across the TOP EDGE of the card!
              */}
              <motion.div 
                variants={itemVariants}
                className="bg-[#0D1322]/85 backdrop-blur-2xl rounded-[2rem] p-6 md:p-8 border border-white/10 hover:border-[#1C81AC]/60 shadow-2xl shadow-black/70 hover:shadow-[0_0_45px_rgba(28,129,172,0.3)] relative overflow-hidden group transition-all duration-500 hover:-translate-y-2"
              >
                {/* TOP EDGE ONLY - CONTINUOUSLY LIVE SWEEPING NEON LIGHT BEAM */}
                <div className="absolute top-0 inset-x-0 h-[3.5px] overflow-hidden pointer-events-none z-20">
                  <motion.div 
                    className="w-full h-full bg-gradient-to-r from-transparent via-[#1C81AC] via-[#3EB985] to-transparent shadow-[0_0_20px_rgba(56,189,248,0.95)]"
                    animate={{
                      x: ["-100%", "100%", "-100%"]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3.5,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Top Accent Line Base Glow */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#1C81AC]/40 to-transparent" />

                {/* Inner Breathing Spotlight */}
                <motion.div 
                  className="absolute -top-24 -right-24 w-80 h-80 bg-[#1C81AC]/25 rounded-full blur-3xl pointer-events-none z-0"
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.35, 0.7, 0.35]
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Inside Text Stagger Wrapper */}
                <motion.div 
                  variants={textContainerVariants}
                  initial="hidden"
                  animate="show"
                  className="relative z-10 flex flex-col gap-6"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    {/* Logo & Info */}
                    <div className="flex items-center gap-4 md:gap-5">
                      {/* Logo with Living Neon Pulse */}
                      <motion.div 
                        variants={textItemVariants}
                        className="w-20 h-20 md:w-24 md:h-24 bg-[#121A2D] rounded-2xl border border-white/15 flex items-center justify-center p-3.5 shrink-0 shadow-[0_0_30px_rgba(28,129,172,0.2)] group-hover:border-sky-500/60 group-hover:shadow-[0_0_40px_rgba(28,129,172,0.4)] transition-all relative overflow-hidden"
                      >
                        <Image 
                          src={assocData.logo} 
                          alt={assocData.name} 
                          width={70} 
                          height={70} 
                          className="object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" 
                        />
                      </motion.div>

                      <div>
                        <motion.div variants={textItemVariants} className="flex items-center flex-wrap gap-2.5 mb-2.5">
                          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
                            {assocData.name}
                          </h1>
                          
                          <div className="flex items-center flex-wrap gap-2 mt-1 md:mt-0">
                            {assocData.isVerified && (
                              <span className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                                {/* Living Pulse Radar Beacon Dot */}
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span>جمعية موثقة</span>
                              </span>
                            )}
                            <span className="flex items-center gap-1 bg-sky-500/10 text-sky-300 border border-sky-500/25 text-xs font-bold px-3 py-1 rounded-full shrink-0">
                              {assocData.organizationType}
                            </span>
                            
                            {/* Governance Gauge Badge */}
                            <span className="flex items-center gap-2 bg-gradient-to-r from-purple-500/15 to-sky-500/15 text-purple-200 border border-purple-500/30 text-xs font-bold px-3.5 py-1 rounded-full shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                              الحوكمة {assocData.governancePercentage}%
                            </span>
                          </div>
                        </motion.div>

                        <motion.p variants={textItemVariants} className="text-slate-400 text-xs md:text-sm flex items-center flex-wrap gap-2.5 font-medium">
                          <span>تأسست عام <strong className="text-slate-200">{assocData.establishedYear}</strong></span>
                          <span className="text-white/20">•</span>
                          <span className="flex items-center gap-1">
                            مسجلة برقم 
                            <button 
                              onClick={handleCopy} 
                              className="bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/10 text-sky-400 hover:text-sky-300 transition-all font-mono inline-flex items-center gap-1.5 cursor-pointer ml-1 hover:border-sky-400/40 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]" 
                              dir="ltr"
                              title="انقر لنسخ الترخيص"
                            >
                              <span>{assocData.licenseNumber}</span>
                              {copied ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5 opacity-70" />
                              )}
                            </button>
                            {copied && <span className="text-xs text-emerald-400 font-bold animate-fade-in">تم النسخ!</span>}
                          </span>
                        </motion.p>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <motion.div variants={textItemVariants} className="flex sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto">
                      <a 
                        href={`https://wa.me/?text=${whatsappMessage}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-[#1C81AC] to-[#233A77] hover:from-[#2295c7] hover:to-[#2b468e] text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-[0_0_20px_rgba(28,129,172,0.3)] hover:shadow-[0_0_30px_rgba(28,129,172,0.5)] active:scale-95"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>راسل الجهة</span>
                      </a>
                      <a 
                        href={assocData.profileDocumentPath} 
                        download 
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all hover:border-sky-400/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] active:scale-95"
                      >
                        <Download className="w-4 h-4 text-sky-400" />
                        <span>الملف التعريفي</span>
                      </a>
                    </motion.div>
                  </div>

                  <motion.p variants={textItemVariants} className="text-slate-300 leading-relaxed text-sm md:text-base font-normal">
                    {assocData.shortDescription}
                  </motion.p>

                  {/* Info Tag Pills Grid with Initial Stagger */}
                  <motion.div variants={textItemVariants} className="flex flex-wrap gap-2.5 pt-4 border-t border-white/10">
                    <span className="bg-[#121A2C] text-slate-200 text-xs md:text-sm font-semibold px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2 hover:border-sky-500/40 hover:shadow-[0_0_15px_rgba(28,129,172,0.2)] transition-all">
                      <MapPin className="w-4 h-4 text-sky-400" /> 
                      <span>{assocData.region}</span>
                    </span>
                    <span className="bg-[#121A2C] text-slate-200 text-xs md:text-sm font-semibold px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2 hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(62,185,133,0.2)] transition-all">
                      <Target className="w-4 h-4 text-emerald-400" /> 
                      <span>{assocData.category}</span>
                    </span>
                    <span className="bg-[#121A2C] text-slate-200 text-xs md:text-sm font-semibold px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2 hover:border-amber-500/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all">
                      <Users className="w-4 h-4 text-amber-400" /> 
                      <span>الفئة: {assocData.targetAudience}</span>
                    </span>
                    <span className="bg-[#121A2C] text-slate-200 text-xs md:text-sm font-semibold px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2 hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all">
                      <BarChart3 className="w-4 h-4 text-purple-400" /> 
                      <span>الحجم المالي: {assocData.financialSizeClassification}</span>
                    </span>
                  </motion.div>
                </motion.div>
            </motion.div>

              {/* ACHIEVEMENTS & STATUS CARDS (WITH INITIAL TEXT ANIMATION) */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                {assocData.achievements.map((ach, idx) => {
                  const IconComp = ach.icon;
                  return (
                    <motion.div 
                      key={idx} 
                      variants={textContainerVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className={`bg-[#16203B]/90 backdrop-blur-2xl rounded-[2rem] p-6 border border-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group flex flex-col items-center justify-center text-center ${ach.neonGlow}`}
                    >
                      {/* Subtle Background Sheen Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="relative z-10 flex flex-col items-center w-full">
                        {/* Icon Box */}
                        <motion.div variants={textItemVariants} className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${ach.iconBg}`}>
                          <IconComp className="w-7 h-7" />
                        </motion.div>
                        
                        {/* Animated Counter Number */}
                        <motion.div variants={textItemVariants} className="mb-2">
                          <AnimatedCounter 
                            to={ach.target} 
                            prefix={ach.prefix} 
                            suffix={ach.suffix} 
                            className="text-3xl md:text-4xl font-black text-white tracking-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]" 
                          />
                        </motion.div>

                        {/* Title Label */}
                        <motion.div variants={textItemVariants} className="text-xs md:text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                          {ach.title}
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Unified Identity Card: About, Vision, Mission */}
              <motion.div 
                variants={itemVariants} 
                className="bg-[#0D1322]/85 backdrop-blur-2xl rounded-[2rem] p-6 md:p-8 md:px-10 border border-white/10 hover:border-sky-500/30 shadow-2xl hover:shadow-[0_0_45px_rgba(28,129,172,0.15)] relative overflow-hidden group transition-all duration-500 hover:-translate-y-2"
              >
                {/* Unified ambient background glow inside the card */}
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1C81AC]/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#3EB985]/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div variants={textContainerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative z-10 flex flex-col gap-8 md:gap-10">
                  
                  {/* About Section */}
                  <div>
                    <motion.h2 variants={textItemVariants} className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                        <FileText className="w-5 h-5" />
                      </div>
                      <span>عن الجمعية</span>
                    </motion.h2>
                    <motion.p variants={textItemVariants} className="text-slate-300 leading-relaxed font-normal text-sm md:text-[15px] pr-1 md:pr-2">
                      {assocData.aboutText}
                    </motion.p>
                  </div>

                  {/* Elegant Divider */}
                  <motion.div variants={textItemVariants} className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Vision and Mission Split */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                    {/* Vertical divider for desktop */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent transform -translate-x-1/2" />

                    {/* Vision */}
                    <div className="relative group/vision">
                      <motion.h3 variants={textItemVariants} className="text-lg font-black text-white mb-3.5 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover/vision:scale-110 transition-transform">
                          <Eye className="w-4 h-4" />
                        </div>
                        <span>رؤيتنا</span>
                      </motion.h3>
                      <motion.p variants={textItemVariants} className="text-slate-300 leading-relaxed font-normal text-sm pr-1">
                        {assocData.vision}
                      </motion.p>
                    </div>

                    {/* Mission */}
                    <div className="relative group/mission">
                      <motion.h3 variants={textItemVariants} className="text-lg font-black text-white mb-3.5 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover/mission:scale-110 transition-transform">
                          <Award className="w-4 h-4" />
                        </div>
                        <span>رسالتنا</span>
                      </motion.h3>
                      <motion.p variants={textItemVariants} className="text-slate-300 leading-relaxed font-normal text-sm pr-1">
                        {assocData.mission}
                      </motion.p>
                    </div>
                  </div>

                </motion.div>
              </motion.div>

              {/* Strategic Goals */}
              <motion.div variants={itemVariants} className="bg-[#0D1322]/85 backdrop-blur-2xl rounded-[2rem] p-6 md:p-8 border border-white/10 hover:border-sky-500/40 shadow-xl hover:shadow-[0_0_30px_rgba(28,129,172,0.15)] transition-all duration-500 hover:-translate-y-2">
                <motion.div variants={textContainerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <motion.h3 variants={textItemVariants} className="text-xl font-black text-white mb-6 flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span>الأهداف الاستراتيجية</span>
                  </motion.h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {assocData.goals.map((goal, idx) => (
                      <motion.li 
                        key={idx} 
                        variants={textItemVariants}
                        className="flex items-center gap-3 text-slate-300 font-medium text-sm leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-sky-500/30 hover:bg-white/10 transition-all group"
                      >
                        <span className="w-7 h-7 rounded-lg bg-sky-500/15 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0 text-xs font-bold group-hover:scale-110 transition-transform">
                          {idx + 1}
                        </span>
                        <span>{goal}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {/* Work Fields */}
              <motion.div variants={itemVariants} className="bg-[#0D1322]/85 backdrop-blur-2xl rounded-[2rem] p-6 md:p-8 border border-white/10 hover:border-emerald-500/40 shadow-xl hover:shadow-[0_0_30px_rgba(62,185,133,0.15)] transition-all duration-500 hover:-translate-y-2">
                <motion.div variants={textContainerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <motion.h3 variants={textItemVariants} className="text-xl font-black text-white mb-6 flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <LayoutGrid className="w-5 h-5" />
                    </div>
                    <span>مجالات العمل الرئيسي</span>
                  </motion.h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {assocData.fields.map((field, idx) => (
                      <motion.div 
                        key={idx} 
                        variants={textItemVariants}
                        className="bg-white/5 hover:bg-white/10 text-slate-200 text-sm font-semibold p-4 rounded-2xl border border-white/10 hover:border-emerald-500/40 flex items-center gap-3 group transition-all"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        <span>{field}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Programs & Projects Gallery */}
              <motion.div variants={itemVariants} className="bg-[#0D1322]/85 backdrop-blur-2xl rounded-[2rem] p-6 md:p-8 border border-white/10 hover:border-sky-500/40 shadow-xl transition-all duration-500 hover:-translate-y-2">
                <motion.div variants={textContainerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <motion.h3 variants={textItemVariants} className="text-xl font-black text-white mb-6 flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span>البرامج والمشاريع النوعية</span>
                  </motion.h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {assocData.programs.map((prog, idx) => (
                      <motion.div 
                        key={idx} 
                        variants={textItemVariants}
                        className="bg-[#121A2E] rounded-2xl p-5 border border-white/10 hover:border-sky-500/50 hover:bg-[#162445] hover:shadow-[0_0_25px_rgba(28,129,172,0.2)] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-2"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-3 gap-2">
                            <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                              {prog.name}
                            </h4>
                            <span className="bg-sky-500/10 border border-sky-500/25 text-sky-300 text-[11px] font-bold px-2.5 py-1 rounded-lg whitespace-nowrap">
                              {prog.type}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mb-4 font-normal leading-relaxed">
                            {prog.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-semibold text-emerald-400">
                          <span className="flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 shadow-[0_0_10px_rgba(52,211,153,0.15)]">
                            <Users className="w-3.5 h-3.5" />
                            {prog.beneficiariesCount} مستفيد
                          </span>
                          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-[-2px] transition-all" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Partners Gallery */}
              <motion.div variants={itemVariants} className="bg-[#0D1322]/85 backdrop-blur-2xl rounded-[2rem] p-6 md:p-8 border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(28,129,172,0.15)] hover:border-sky-500/30">
                <motion.div variants={textContainerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <motion.h3 variants={textItemVariants} className="text-xl font-black text-white mb-6 flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <span>الشركاء والداعمين الاستراتيجيين</span>
                  </motion.h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {assocData.partnerLogos.map((logo, idx) => (
                      <motion.div 
                        key={idx} 
                        variants={textItemVariants}
                        className="h-24 bg-[#121A2E] rounded-2xl border border-white/10 flex items-center justify-center p-4 hover:border-sky-500/50 hover:bg-[#162445] hover:shadow-[0_0_20px_rgba(28,129,172,0.2)] transition-all cursor-pointer group"
                      >
                        <Image 
                          src={logo} 
                          alt="Partner Logo" 
                          width={64} 
                          height={64} 
                          className="object-contain opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all filter drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]" 
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

            </div>

            {/* Sidebar Contact Suite */}
            <div className="w-full lg:w-[340px] shrink-0 flex flex-col gap-6">
              
              {/* Contact Information Card */}
              <motion.div 
                variants={itemVariants} 
                className="bg-[#0D1322]/85 backdrop-blur-2xl rounded-[2rem] p-6 border border-white/10 hover:border-white/20 shadow-xl relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,255,255,0.05)]"
              >
                <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-sky-500 via-emerald-500 to-transparent" />
                
                <motion.div variants={textContainerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <motion.h3 variants={textItemVariants} className="text-lg font-black text-white mb-6 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <span>معلومات التواصل</span>
                  </motion.h3>
                  
                  <div className="flex flex-col gap-4">
                    {/* Phone */}
                    <motion.a variants={textItemVariants} href={`tel:${assocData.mobileNumber}`} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-sky-500/40 hover:shadow-[0_0_15px_rgba(28,129,172,0.2)] transition-all group">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-semibold text-slate-400">رقم الهاتف</span>
                        <span className="text-sm font-bold text-slate-200 group-hover:text-sky-400 transition-colors dir-ltr font-mono" dir="ltr">
                          {assocData.mobileNumber}
                        </span>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                        <Smartphone className="w-4 h-4" />
                      </div>
                    </motion.a>
                    
                    {/* Email */}
                    <motion.a variants={textItemVariants} href={`mailto:${assocData.email}`} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-sky-500/40 hover:shadow-[0_0_15px_rgba(28,129,172,0.2)] transition-all group">
                      <div className="flex flex-col truncate max-w-[200px]">
                        <span className="text-[11px] font-semibold text-slate-400">البريد الإلكتروني</span>
                        <span className="text-sm font-bold text-slate-200 group-hover:text-sky-400 transition-colors truncate">
                          {assocData.email}
                        </span>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                    </motion.a>

                    {/* Website */}
                    <motion.a variants={textItemVariants} href={`https://${assocData.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-sky-500/40 hover:shadow-[0_0_15px_rgba(28,129,172,0.2)] transition-all group">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-semibold text-slate-400">الموقع الإلكتروني</span>
                        <span className="text-sm font-bold text-slate-200 group-hover:text-sky-400 transition-colors">
                          {assocData.website}
                        </span>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform shrink-0">
                        <Globe className="w-4 h-4" />
                      </div>
                    </motion.a>

                    {/* Location Text */}
                    <motion.a variants={textItemVariants} href={assocData.mapLocationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-sky-500/40 hover:shadow-[0_0_15px_rgba(28,129,172,0.2)] transition-all group">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-semibold text-slate-400">المقر الرئيسي</span>
                        <span className="text-sm font-bold text-slate-200 group-hover:text-sky-400 transition-colors">
                          {assocData.locationText}
                        </span>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                    </motion.a>
                  </div>

                  {/* Dark Stylized Map Card */}
                  <motion.div variants={textItemVariants} className="mt-6 rounded-2xl overflow-hidden border border-white/10 h-44 bg-[#0A0F1D] relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090D17] via-transparent to-transparent z-10 opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <a 
                        href={assocData.mapLocationUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-sky-500/20 hover:bg-sky-500/35 text-sky-200 border border-sky-500/40 backdrop-blur-md px-4 py-2.5 rounded-xl text-xs font-bold shadow-lg hover:shadow-[0_0_20px_rgba(28,129,172,0.3)] transition-all flex items-center gap-2 group-hover:scale-105 active:scale-95"
                      >
                        <MapIcon className="w-4 h-4 text-sky-400" />
                        <span>فتح الموقع في الخرائط</span>
                      </a>
                    </div>
                  </motion.div>

                  {/* Operating Regions */}
                  <motion.div variants={textItemVariants} className="mt-5 pt-5 border-t border-white/10">
                    <div className="text-xs font-bold text-slate-300 mb-3 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-emerald-400" />
                      <span>نطاق عمل وتواجد الجمعية:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {assocData.activityRegions.map((region, idx) => (
                        <span key={idx} className="bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-lg hover:border-sky-500/30 transition-colors">
                          {region}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Social Media Hub Card */}
              <motion.div 
                variants={itemVariants} 
                className="bg-[#0D1322]/85 backdrop-blur-2xl rounded-[2rem] p-6 border border-white/10 hover:border-white/20 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,255,255,0.05)]"
              >
                <motion.div variants={textContainerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <motion.h3 variants={textItemVariants} className="text-lg font-black text-white mb-4">قنوات التواصل الاجتماعي</motion.h3>
                  <div className="flex flex-wrap items-center justify-start gap-3">
                    {Object.entries(assocData.socialMedia).map(([platform, url]) => {
                      const icons = {
                        twitter: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
                        snapchat: <Ghost className="w-4 h-4" />,
                        instagram: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
                        linkedin: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>,
                        youtube: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
                        whatsapp: <MessageSquare className="w-4 h-4" />,
                        tiktok: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.45 4.34-3.5 5.25-2.22.99-4.88.75-6.85-.64-1.99-1.4-3.03-3.84-2.61-6.21.36-2.02 1.77-3.79 3.65-4.63 1.95-.87 4.3-.77 6.13.29v4.11c-1.49-1.02-3.66-1.01-4.9.23-1.08 1.08-1.25 2.87-.38 4.12.8 1.17 2.45 1.57 3.79 1.05 1.34-.52 2.22-1.9 2.19-3.37.01-4.88.01-9.76.01-14.64.01z"/></svg>
                      };
                      return (
                        <motion.a 
                          key={platform} 
                          variants={textItemVariants}
                          href={url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-500/40 hover:scale-110 hover:shadow-[0_0_20px_rgba(28,129,172,0.3)] transition-all shadow-md"
                          title={platform}
                        >
                          {icons[platform as keyof typeof icons] || <LinkIcon className="w-4 h-4" />}
                        </motion.a>
                      );
                    })}
                    <motion.a 
                      variants={textItemVariants}
                      href={`https://${assocData.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-500/40 hover:scale-110 hover:shadow-[0_0_20px_rgba(28,129,172,0.3)] transition-all shadow-md"
                      title="Website"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

            </div>

          </motion.div>
        </div>
      </div>
    </main>
  );
}
