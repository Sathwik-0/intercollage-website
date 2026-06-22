"use client";

import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { ArrowUp, ShieldCheck, Heart, Users, GraduationCap, Award, Compass, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustItem {
  label: string;
  image: string;
  tooltipTitle: string;
  tooltipText: string;
}

const TRUST_ITEMS: TrustItem[] = [
  {
    label: "academic mentorship",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400",
    tooltipTitle: "Academic Mentorship",
    tooltipText: "Every student receives structured academic guidance and performance reviews.",
  },
  {
    label: "parent communication",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400",
    tooltipTitle: "Parent Communication",
    tooltipText: "Regular updates keep parents informed about academic progress.",
  },
  {
    label: "progress tracking",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400",
    tooltipTitle: "Progress Tracking",
    tooltipText: "Performance insights help identify strengths and improvement opportunities.",
  },
  {
    label: "career guidance",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400",
    tooltipTitle: "Career Guidance",
    tooltipText: "Students receive mentorship beyond examinations.",
  },
];

interface TrustStat {
  percentage: string;
  label: string;
  explanation: string;
  icon: React.ComponentType<any>;
}

const TRUST_STATS: TrustStat[] = [
  {
    percentage: "98%",
    label: "Parent Satisfaction",
    explanation: "Verified through annual feedback surveys across all campuses.",
    icon: Heart,
  },
  {
    percentage: "96%",
    label: "Student Retention",
    explanation: "Demonstrating the strength of our safety and academic stabilization.",
    icon: ShieldCheck,
  },
  {
    percentage: "10K+",
    label: "Progress Reviews",
    explanation: "Weekly one-on-one evaluations with assigned HOD mentors.",
    icon: Compass,
  },
  {
    percentage: "15K+",
    label: "Families Guided",
    explanation: "Successful admissions and career pathway counseling sessions.",
    icon: MessageSquare,
  },
];

export function ParentConfidenceCenter() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasHover, setHasHover] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    setHasHover(window.matchMedia("(hover: hover)").matches);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: any = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      id="confidence-center" 
      className="relative w-full py-20 md:py-28 px-6 bg-transparent overflow-hidden scroll-mt-28"
    >
      {/* Grid line overlay */}
      <div className="absolute inset-0 z-0 bg-grid-lines pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Community Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-[#e6f4ea] px-3.5 py-1 text-[10px] font-bold text-brand-950 uppercase tracking-wider">
            <Users className="size-3 text-brand-600 animate-pulse" />
            <span>Section 05 — Parent Confidence Center</span>
          </span>
        </div>

        {/* Headline with Interactive Image Tooltips */}
        <div className="text-center max-w-4xl mx-auto relative text-[#04241a] font-sans">
          
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Built For Student Success. <span className="text-brand-600">Trusted By Families.</span> <br className="hidden sm:inline" />
            We create a structured 
            <TooltipProvider delayDuration={150}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-block mx-3 align-middle relative cursor-pointer">
                    <div className={cn(
                      "relative overflow-hidden w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-white transition-transform duration-300 shadow-md",
                      hasHover && "hover:scale-105"
                    )}>
                      <img
                        src={TRUST_ITEMS[0].image}
                        alt="Mentoring session"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  sideOffset={8}
                  className="max-w-xs bg-white text-[#04241a] p-4 rounded-2xl shadow-[0_12px_32px_rgba(4,78,59,0.08)] border border-brand-100/60 z-50 text-left font-sans animate-fade-in"
                >
                  <h4 className="font-extrabold text-xs text-brand-950 uppercase tracking-wider mb-1">
                    {TRUST_ITEMS[0].tooltipTitle}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {TRUST_ITEMS[0].tooltipText}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            environment
          </h1>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mt-1">
            where students receive
            <TooltipProvider delayDuration={150}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-block mx-3 align-middle cursor-pointer">
                    <div className={cn(
                      "relative overflow-hidden w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-white transition-transform duration-300 shadow-md",
                      hasHover && "hover:scale-105"
                    )}>
                      <img
                        src={TRUST_ITEMS[1].image}
                        alt="Family moment"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  sideOffset={8}
                  className="max-w-xs bg-white text-[#04241a] p-4 rounded-2xl shadow-[0_12px_32px_rgba(4,78,59,0.08)] border border-brand-100/60 z-50 text-left font-sans animate-fade-in"
                >
                  <h4 className="font-extrabold text-xs text-brand-950 uppercase tracking-wider mb-1">
                    {TRUST_ITEMS[1].tooltipTitle}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {TRUST_ITEMS[1].tooltipText}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            guidorship,
            <TooltipProvider delayDuration={150}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-block mx-3 align-middle cursor-pointer">
                    <div className={cn(
                      "relative overflow-hidden w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-white transition-transform duration-300 shadow-md",
                      hasHover && "hover:scale-105"
                    )}>
                      <img
                        src={TRUST_ITEMS[2].image}
                        alt="Tracking insights"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  sideOffset={8}
                  className="max-w-xs bg-white text-[#04241a] p-4 rounded-2xl shadow-[0_12px_32px_rgba(4,78,59,0.08)] border border-brand-100/60 z-50 text-left font-sans animate-fade-in"
                >
                  <h4 className="font-extrabold text-xs text-brand-950 uppercase tracking-wider mb-1">
                    {TRUST_ITEMS[2].tooltipTitle}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {TRUST_ITEMS[2].tooltipText}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            mentorship,
          </h1>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mt-1">
            and care at every stage of their journey.
          </h1>

          <p className="mt-6 text-sm sm:text-base text-[#406b5c] max-w-2xl mx-auto leading-relaxed font-medium">
            Academic excellence is only part of the journey. We create a structured environment where students receive guidance, progress tracking, and support.
          </p>
        </div>

        {/* Bottom Trust Metrics Strip (SaaS Hover Reveal blueprint transformed) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-white/70 backdrop-blur-xl border border-brand-100/50 rounded-3xl p-6 sm:p-8 shadow-[0_12px_40px_rgba(4,78,59,0.02)] select-none"
        >
          {TRUST_STATS.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                style={isMobile ? undefined : { willChange: "transform, opacity" }}
                className={cn(
                  "relative flex flex-col items-center justify-center p-4 min-h-[140px] rounded-2xl border border-transparent transition-all duration-500 ease-out cursor-pointer overflow-hidden",
                  hasHover && "group hover:border-brand-100/60 hover:bg-brand-500/[0.02]"
                )}
              >
                {/* Dashed Left Border for grid dividers */}
                {index !== 0 && (
                  <div className="hidden md:block w-px h-12 border-l border-dashed border-brand-100/80 absolute left-0 top-1/2 -translate-y-1/2" />
                )}

                {/* Mobile View: Static Stack (shown on mobile, hidden on desktop) */}
                <div className="flex md:hidden flex-col items-center justify-center text-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                    <IconComponent className="size-4.5" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-extrabold text-[#04241a] tracking-tight">
                      {stat.percentage}
                    </span>
                  </div>
                  <p className="text-brand-950 font-bold text-[9px] uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium max-w-[140px] leading-normal">
                    {stat.explanation}
                  </p>
                </div>

                {/* Desktop View: Interactive Hover Reveal (hidden on mobile, shown on desktop) */}
                <div className="hidden md:flex flex-col items-center gap-3 transition-all duration-500 ease-out transform translate-y-0 group-hover:-translate-y-12 opacity-100 group-hover:opacity-0 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                    <IconComponent className="size-5" />
                  </div>
                  <span className="text-xs font-bold text-[#406b5c] tracking-wide text-center">
                    {stat.label}
                  </span>
                </div>

                {/* Desktop Hover Content (hidden on mobile, shown on desktop) */}
                <div className="hidden md:flex absolute inset-x-3 bottom-4 top-4 opacity-0 flex-col items-center justify-center transition-all duration-500 ease-out transform translate-y-12 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none">
                  <div className="flex items-center gap-1">
                    <ArrowUp className="size-4.5 text-brand-600 animate-bounce" />
                    <span className="text-3xl font-extrabold text-[#04241a] tracking-tight">
                      {stat.percentage}
                    </span>
                  </div>
                  <p className="text-brand-950 font-bold text-[10px] uppercase tracking-wider mt-1 text-center">
                    {stat.label}
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium text-center mt-2 leading-relaxed max-w-[180px]">
                    {stat.explanation}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
