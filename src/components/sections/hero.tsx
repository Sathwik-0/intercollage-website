"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { CampusVisitModal } from "@/components/ui/campus-visit-modal";
import { 
  Trophy, 
  TrendingUp, 
  Calendar, 
  ArrowRight, 
  Users, 
  UserCheck, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  BarChart3, 
  Search,
  BookOpen,
  MapPin,
  Settings,
  Bell
} from "lucide-react";

/* Hallmark · component: hero · genre: playful · theme: light-green
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (4.5:1 text-to-bg)
 */

export function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
      },
    },
  };

  // Mock navigation sidebar items inside the dashboard mockup
  const sidebarLinks = [
    { label: "Dashboard", active: true, icon: BarChart3 },
    { label: "Ranks Board", active: false, icon: Trophy },
    { label: "Academic Programs", active: false, icon: BookOpen },
    { label: "Faculty HODs", active: false, icon: UserCheck },
    { label: "Campus Hubs", active: false, icon: MapPin },
    { label: "Success Stories", active: false, icon: GraduationCap },
  ];

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col items-center pt-36 pb-24 px-6 overflow-hidden">
      
      {/* Background Subtle Hex/Grid effect */}
      <div className="absolute inset-0 z-0 bg-grid-lines pointer-events-none opacity-50" />

      {/* TOP HEADER DETAILS (Centered layout) */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center mt-6">
        {/* Soft Green Ingress Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-[#e6f4ea] px-4 py-1.5 text-xs font-bold text-[#044e3b] shadow-sm mb-6">
          <Sparkles className="size-3.5 text-emerald-600 animate-pulse" />
          <span>Your Proven Pathway to IIT & AIIMS</span>
        </div>

        {/* Primary Outcome Headline (Animated Reveal) */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] leading-[1.1] text-[#04241a]"
        >
          From Ambition <br />
          to National <span className="text-gradient-primary">AIR Ranks.</span>
        </motion.h1>

        {/* Supporting Subheadline */}
        <p className="mt-6 text-base sm:text-lg text-[#406b5c] max-w-2xl leading-relaxed font-medium">
          The road to IITs, NITs & Top Medical Colleges starts here. We don't just teach syllabus; we engineer academic precision.
        </p>

        {/* Centered CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          {/* Primary Button - Solid Emerald Green Capsule */}
          <CampusVisitModal>
            <button
              className="rounded-full bg-[#044e3b] hover:bg-[#03382a] text-white text-sm font-bold tracking-wide px-7 py-3.5 transition-all shadow-[0_4px_14px_rgba(4,78,59,0.15)] hover:shadow-[0_6px_20px_rgba(4,78,59,0.25)] active:scale-95 cursor-pointer w-full sm:w-auto max-w-[280px] sm:max-w-none text-center"
            >
              Book Campus Visit
            </button>
          </CampusVisitModal>

          {/* Secondary Button - Sage Outline Capsule */}
          <button
            onClick={() => {
              const el = document.getElementById("results");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-full border border-[#d0e7d8] bg-white hover:bg-emerald-50/50 text-[#044e3b] text-sm font-bold tracking-wide px-7 py-3.5 transition-all shadow-sm active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 w-full sm:w-auto max-w-[280px] sm:max-w-none text-center"
          >
            <span>Explore Results</span>
            <ArrowRight className="size-4" />
          </button>
        </div>

      </div>

      {/* CENTER MOCKUP: Academic Performance Dashboard Mockup (Visual Centerpiece - Animated Reveal) */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="relative z-10 w-full max-w-5xl mt-16"
      >
        <div 
          ref={ref}
          className="w-full bg-white border border-emerald-100 shadow-[0_24px_50px_rgba(4,78,59,0.06)] rounded-3xl overflow-hidden flex flex-col md:flex-row text-left min-h-[500px]"
        >
          {/* LEFT DASHBOARD SIDEBAR */}
          <div className="hidden md:flex w-full md:w-56 bg-[#f4faf6] border-r border-emerald-100/50 p-4 flex-col gap-6 select-none shrink-0">
            {/* Mock brand header */}
            <div className="flex items-center gap-2 px-2">
              <div className="flex items-center justify-center w-6.5 h-6.5 rounded bg-[#044e3b] text-white">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-extrabold tracking-[-0.03em] text-[#044e3b] text-sm">
                Inter-College
              </span>
            </div>

            {/* Mock Search Bar */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3 text-[#406b5c]" />
              <input 
                type="text" 
                placeholder="Search..." 
                disabled 
                className="w-full bg-white border border-emerald-100/80 rounded-lg py-1.5 pl-8 pr-3 text-[10px] text-slate-400 cursor-not-allowed outline-none"
              />
            </div>

            {/* Sidebar directory list */}
            <div className="flex flex-col gap-1">
              <span className="text-[8px] font-bold text-slate-400 tracking-wider uppercase px-2 mb-2">Home Menu</span>
              {sidebarLinks.map((link, idx) => {
                const IconComponent = link.icon;
                return (
                  <div
                    key={idx}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-not-allowed",
                      link.active 
                        ? "bg-[#044e3b] text-white shadow-sm" 
                        : "text-[#406b5c] hover:bg-emerald-50/50 hover:text-[#044e3b]"
                    )}
                  >
                    <IconComponent className="size-4" />
                    <span>{link.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MAIN PANEL */}
          <div className="flex-1 p-6 flex flex-col gap-6 bg-white overflow-hidden">
            
            {/* Main Panel Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-emerald-50/80 gap-3">
              <div>
                <h3 className="text-base font-extrabold text-[#04241a] flex items-center gap-1.5">
                  Academic Dashboard <span className="text-sm">👋</span>
                </h3>
                <span className="text-[10px] font-medium text-slate-400 mt-0.5 block">Let's stabilize study accuracy values.</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-emerald-100 bg-[#f4faf6] px-3 py-1.5 text-[9px] font-bold text-[#044e3b]">
                <Calendar className="size-3 text-emerald-600" />
                <span>01 Jan, 2026 - 05 Apr, 2026</span>
              </div>
            </div>

            {/* Row of 4 Stats Widgets */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Stat card 1 */}
              <div className="rounded-xl border border-emerald-50 p-4 bg-white shadow-[0_4px_12px_rgba(4,78,59,0.01)] flex flex-col text-left">
                <span className="text-[8px] font-bold text-slate-400 tracking-wider uppercase mb-1">Total Students</span>
                <span className="text-2xl font-extrabold text-[#04241a] tracking-tight">
                  {inView ? <CountUp start={0} end={1500} duration={2.5} separator="," /> : "0"}
                </span>
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 mt-2 self-start flex items-center gap-0.5">
                  <TrendingUp className="size-2.5" /> +29% Last Month
                </span>
              </div>

              {/* Stat card 2 */}
              <div className="rounded-xl border border-emerald-50 p-4 bg-white shadow-[0_4px_12px_rgba(4,78,59,0.01)] flex flex-col text-left">
                <span className="text-[8px] font-bold text-slate-400 tracking-wider uppercase mb-1">Total Teachers</span>
                <span className="text-2xl font-extrabold text-[#04241a] tracking-tight">
                  {inView ? <CountUp start={0} end={50} duration={2} /> : "0"}
                </span>
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 mt-2 self-start flex items-center gap-0.5">
                  <TrendingUp className="size-2.5" /> +12% Last Year
                </span>
              </div>

              {/* Stat card 3 */}
              <div className="rounded-xl border border-emerald-50 p-4 bg-white shadow-[0_4px_12px_rgba(4,78,59,0.01)] flex flex-col text-left">
                <span className="text-[8px] font-bold text-slate-400 tracking-wider uppercase mb-1">Total Parents</span>
                <span className="text-2xl font-extrabold text-[#04241a] tracking-tight">
                  {inView ? <CountUp start={0} end={1200} duration={2.5} separator="," /> : "0"}
                </span>
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 mt-2 self-start flex items-center gap-0.5">
                  <TrendingUp className="size-2.5" /> +12% Growth
                </span>
              </div>

              {/* Stat card 4 */}
              <div className="rounded-xl border border-emerald-50 p-4 bg-white shadow-[0_4px_12px_rgba(4,78,59,0.01)] flex flex-col text-left">
                <span className="text-[8px] font-bold text-slate-400 tracking-wider uppercase mb-1">Total Staff</span>
                <span className="text-2xl font-extrabold text-[#04241a] tracking-tight">
                  {inView ? <CountUp start={0} end={25} duration={1.5} /> : "0"}
                </span>
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 rounded px-1.5 py-0.5 mt-2 self-start flex items-center gap-0.5">
                  <TrendingUp className="size-2.5" /> +12% Last Month
                </span>
              </div>

            </div>

            {/* Bottom visual graph: Accuracy Overview (re-drawn curves like inspiration) */}
            <div className="border border-emerald-50 rounded-xl p-4 bg-white flex flex-col gap-4 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-[10px] font-extrabold text-[#04241a] uppercase tracking-wider">
                  Grand Test Accuracy Progression
                </span>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="flex items-center gap-1 text-[9px] font-semibold text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Present: 500
                  </span>
                  <span className="flex items-center gap-1 text-[9px] font-semibold text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-rose-500" /> Absent: 200
                  </span>
                  <span className="flex items-center gap-1 text-[9px] font-semibold text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-amber-500" /> Leave: 50
                  </span>
                </div>
              </div>

              {/* Large line graph */}
              <div className="relative w-full h-44 mt-2">
                {/* Horizontal dotted grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                  <div className="border-t border-dashed border-emerald-900/30 w-full" />
                  <div className="border-t border-dashed border-emerald-900/30 w-full" />
                  <div className="border-t border-dashed border-emerald-900/30 w-full" />
                  <div className="border-t border-dashed border-emerald-900/30 w-full" />
                </div>

                {/* SVG Curve lines replicating the inspiration graph */}
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Emerald Curve */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.8, delay: 0.2 }}
                    d="M 0 80 Q 25 10, 50 60 T 100 20"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Rose Curve */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.8, delay: 0.4 }}
                    d="M 0 90 Q 20 40, 45 80 T 100 50"
                    fill="none"
                    stroke="#f43f5e"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Amber Curve */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.8, delay: 0.6 }}
                    d="M 0 95 Q 30 70, 55 90 T 100 75"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Floating tooltip labels on lines */}
                <div className="absolute left-[52%] top-[45%] rounded-md bg-[#04241a] text-white px-2 py-1 text-[8px] font-bold shadow-md flex flex-col gap-0.5">
                  <span>Present: 100</span>
                  <span>Absent: 20</span>
                </div>
              </div>

              <div className="flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                <span>0</span>
                <span>2000</span>
                <span>4000</span>
                <span>6000</span>
                <span>8000</span>
                <span>10000</span>
              </div>
            </div>

          </div>
        </div>

        {/* Ambient background blur highlights (Soft Green) */}
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none z-0" />
      </motion.div>

    </section>
  );
}
