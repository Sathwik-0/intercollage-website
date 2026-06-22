/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
"use client";

import React, { useRef, useState, useEffect } from "react";
import { CardDisplay, CardDisplayItem } from "@/components/ui/data-card-display";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { Sparkles, GraduationCap, Users, CalendarDays, Clock3, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface Milestone {
  step: string;
  title: string;
  status: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
}

const MILESTONES: Milestone[] = [
  {
    step: "01",
    title: "Applications Open",
    status: "Completed",
    description: "Online registration and stream preference selection active.",
    isCompleted: true,
    isActive: false,
  },
  {
    step: "02",
    title: "Counseling Sessions",
    status: "Active Now",
    description: "One-on-one parent discussions and counselor goal alignment.",
    isCompleted: false,
    isActive: true,
  },
  {
    step: "03",
    title: "Document Verification",
    status: "Ongoing",
    description: "Verification of academic rank sheets and board transcripts.",
    isCompleted: false,
    isActive: false,
  },
  {
    step: "04",
    title: "Batch Confirmation",
    status: "Upcoming",
    description: "Official admissions offer letter release and batch allocation.",
    isCompleted: false,
    isActive: false,
  },
];

export function UrgencyLayer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  const dashboardItems: CardDisplayItem[] = [
    {
      id: "intake",
      title: "Current Intake",
      value: "2026 Science Batch",
      description: "Admissions currently under active review and enrollment processing.",
      icon: GraduationCap,
    },
    {
      id: "seats",
      title: "Seats Remaining",
      value: "38 Seats",
      description: "Remaining verified capacity across active divisions.",
      icon: Users,
    },
    {
      id: "counseling",
      title: "Counseling Availability",
      value: "14 Slots This Week",
      description: "Available academic counseling appointments for parents and students.",
      icon: CalendarDays,
    },
    {
      id: "review",
      title: "Next Admission Review",
      value: "15 July",
      description: "Upcoming review cycle for submitted applications.",
      icon: Clock3,
    },
  ];

  return (
    <section
      id="urgency-layer"
      className="relative py-20 md:py-28 px-4 bg-white border-t border-brand-100/30 scroll-mt-28 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 bg-grid-lines pointer-events-none opacity-[0.12]" />

      <div className="max-w-[1400px] mx-auto relative z-10 space-y-12">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto px-6 space-y-4 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-[#e6f4ea] px-3.5 py-1 text-[9px] font-extrabold text-brand-950 uppercase tracking-[0.18em]">
            <Sparkles className="size-3 text-brand-600 animate-pulse" />
            <span>ADMISSIONS 2026</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#04241a] leading-tight">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.08}
              staggerFrom="first"
              reverse={true}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                delay: 0.1,
              } as any}
            >
              Applications Are Moving Forward
            </VerticalCutReveal>
          </h2>
          <p className="text-sm sm:text-base text-[#406b5c] font-medium leading-relaxed max-w-2xl mx-auto">
            Every academic cycle has a limited intake capacity. Monitor current batch availability, counseling schedules, and admission milestones before the next review cycle begins.
          </p>
        </div>

        {/* Dashboard Grid Card Display */}
        <div className="max-w-6xl mx-auto w-full">
          <CardDisplay items={dashboardItems} className="p-0 md:p-0" />
        </div>

        {/* Timeline and Snapshot Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full"
        >
          
          {/* Admissions Timeline Panel */}
          <motion.div 
            variants={itemVariants}
            style={isMobile ? undefined : { willChange: "transform, opacity" }}
            className="lg:col-span-2 relative border border-brand-100/50 bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-black text-[#04241a] uppercase tracking-wider mb-1 flex items-center gap-2">
                <Sparkles className="size-4.5 text-brand-600" />
                Admission Milestone Flow
              </h3>
              <p className="text-xs font-bold text-zinc-400 mb-8">
                Current operational cycle status tracking.
              </p>
              
              {/* Timeline Flow */}
              <div className="relative">
                {/* Horizontal dotted line for desktop */}
                <div className="absolute top-5 left-8 right-8 h-0.5 border-t border-dashed border-brand-100/80 pointer-events-none z-0 hidden md:block" />
                
                {/* Vertical dotted line for mobile */}
                <div className="absolute left-[19px] top-6 bottom-6 w-0.5 border-l border-dashed border-brand-100/80 pointer-events-none z-0 block md:hidden" />
                
                <motion.div 
                  variants={containerVariants}
                  className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
                >
                  {MILESTONES.map((milestone) => (
                    <motion.div 
                      key={milestone.step} 
                      variants={itemVariants}
                      style={isMobile ? undefined : { willChange: "transform, opacity" }}
                      className="flex md:flex-col gap-4 md:gap-0 items-start"
                    >
                      {/* Step Circle */}
                      <div className={`size-10 rounded-full flex items-center justify-center font-black text-xs border transition-all duration-300 md:mb-4 flex-shrink-0 ${
                        milestone.isCompleted 
                          ? "bg-[#e6f4ea] border-brand-200 text-brand-950"
                          : milestone.isActive
                            ? "bg-brand-700 border-brand-500 text-white shadow-md ring-4 ring-brand-500/20"
                            : "bg-white border-zinc-200 text-zinc-400"
                      }`}>
                        {milestone.step}
                      </div>
                      
                      {/* Content */}
                      <div className="text-left">
                        <span className={`text-[9px] font-bold uppercase tracking-wider block mb-0.5 ${
                          milestone.isCompleted 
                            ? "text-brand-700" 
                            : milestone.isActive 
                              ? "text-brand-800 animate-pulse" 
                              : "text-zinc-400"
                        }`}>
                          {milestone.status}
                        </span>
                        <h4 className="text-xs font-extrabold text-[#04241a] leading-tight">
                          {milestone.title}
                        </h4>
                        <p className="text-[10px] text-zinc-400 font-semibold leading-relaxed mt-1 max-w-[180px]">
                          {milestone.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Admission Snapshot Panel */}
          <motion.div 
            variants={itemVariants}
            style={isMobile ? undefined : { willChange: "transform, opacity" }}
            className="lg:col-span-1 border border-brand-100/50 bg-[#fbfdfc]/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between border-l-4 border-l-brand-950"
          >
            <div>
              <h3 className="text-sm font-black text-[#04241a] uppercase tracking-wider mb-1">
                Admission Snapshot
              </h3>
              <p className="text-xs font-bold text-zinc-400 mb-6">
                Active operations and counseling checkpoints.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Science Batch Admissions Active",
                  "Counseling Slots Available",
                  "Scholarship Reviews In Progress",
                  "Limited Intake Capacity",
                  "Parent Orientation Ongoing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs font-bold text-brand-950/80">
                    <CheckCircle2 className="size-4 text-brand-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              <span>Last Updated</span>
              <span className="text-brand-800">Today</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
