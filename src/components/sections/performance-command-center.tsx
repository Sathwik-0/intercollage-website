"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Trophy, ShieldCheck, Sparkles, ChevronRight, TrendingUp, Cpu, Award, BookOpen, GraduationCap, MapPin } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Achiever {
  id: string;
  name: string;
  rank: string;
  exam: string;
  year: string;
  batch: string;
  scores: {
    label: string;
    value: string;
  }[];
  avatarBg: string;
}

const ACHIEVERS: Achiever[] = [
  {
    id: "achiever-1",
    name: "Chadrack K.",
    rank: "AIR 14",
    exam: "JEE Advanced",
    year: "2025",
    batch: "CO-SPARK IIT Elite",
    avatarBg: "from-emerald-500 to-teal-700",
    scores: [
      { label: "Mathematics", value: "99.92%" },
      { label: "Physics", value: "99.85%" },
      { label: "Chemistry", value: "99.78%" },
    ],
  },
  {
    id: "achiever-2",
    name: "Mak VieSAinte",
    rank: "AIR 28",
    exam: "NEET Medical",
    year: "2025",
    batch: "AIIMS Target Super 30",
    avatarBg: "from-teal-500 to-emerald-700",
    scores: [
      { label: "Biology", value: "355/360" },
      { label: "Chemistry", value: "175/180" },
      { label: "Physics", value: "170/180" },
    ],
  },
  {
    id: "achiever-3",
    name: "Osiris Balonga",
    rank: "AIR 52",
    exam: "JEE Advanced",
    year: "2025",
    batch: "CO-SPARK IIT Elite",
    avatarBg: "from-emerald-600 to-cyan-700",
    scores: [
      { label: "Mathematics", value: "99.88%" },
      { label: "Physics", value: "99.80%" },
      { label: "Chemistry", value: "99.68%" },
    ],
  },
];

interface SubjectEngine {
  subject: string;
  maxScore: string;
  avgPercent: number;
  improvement: string;
  icon: React.ComponentType<any>;
}

const SUBJECT_ENGINES: SubjectEngine[] = [
  {
    subject: "Mathematics Core",
    maxScore: "120/120",
    avgPercent: 88.5,
    improvement: "+12.4%",
    icon: Cpu,
  },
  {
    subject: "Physics Engine",
    maxScore: "120/120",
    avgPercent: 89.1,
    improvement: "+14.8%",
    icon: TrendingUp,
  },
  {
    subject: "Chemistry Processor",
    maxScore: "120/120",
    avgPercent: 87.2,
    improvement: "+10.2%",
    icon: ShieldCheck,
  },
  {
    subject: "Biology System",
    maxScore: "360/360",
    avgPercent: 92.4,
    improvement: "+16.3%",
    icon: Sparkles,
  },
];

interface ExamStat {
  name: string;
  qualifiedPercent: number;
  totalCandidates: number;
  label: string;
}

const EXAM_STATS: ExamStat[] = [
  { name: "JEE Advanced", qualifiedPercent: 89.2, totalCandidates: 450, label: "Top-Tier IIT Selections" },
  { name: "NEET Medical", qualifiedPercent: 94.5, totalCandidates: 620, label: "AIIMS / Govt Pathways" },
  { name: "EAMCET State", qualifiedPercent: 98.2, totalCandidates: 1200, label: "Premier State Engineering" },
];

export function PerformanceCommandCenter() {
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);
  const [activeAchieverId, setActiveAchieverId] = useState<string>("achiever-1");
  const [isMobile, setIsMobile] = useState(false);
  const [hasHover, setHasHover] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    setHasHover(window.matchMedia("(hover: hover)").matches);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const activeAchiever = ACHIEVERS.find(a => a.id === activeAchieverId) || ACHIEVERS[0];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
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
        duration: isMobile ? 0.3 : 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      id="results" 
      className="relative w-full py-20 md:py-28 px-6 bg-transparent overflow-hidden scroll-mt-28"
    >
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 bg-grid-lines pointer-events-none opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Title Block */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-[#e6f4ea] px-3.5 py-1 text-[10px] font-bold text-[#044e3b] uppercase tracking-wider">
            <Trophy className="size-3 text-emerald-600" />
            <span>Section 04 — Performance Command Center</span>
          </span>
          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-[#04241a] md:text-5xl md:leading-[1.15]">
            Performance That <span className="text-gradient-primary">Speaks For Itself.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[#406b5c] font-medium leading-relaxed">
            Every result represents years of discipline, mentorship, academic systems, and student success.
          </p>
        </div>

        {/* 5-Block Bento Layout Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          
          {/* BLOCK 1: TOP RANK ACHIEVERS (Dominant Panel - Spans 7 Columns on Large Screens) */}
          <motion.div 
            variants={cardVariants}
            style={{ willChange: "transform, opacity" }}
            onMouseEnter={() => hasHover && setHoveredBlock("achievers")}
            onMouseLeave={() => hasHover && setHoveredBlock(null)}
            onClick={() => setHoveredBlock(hoveredBlock === "achievers" ? null : "achievers")}
            className={cn(
              "lg:col-span-7 rounded-3xl transition-all duration-500 flex flex-col glass-panel-glow p-6 sm:p-8 cursor-pointer lg:cursor-default",
              hoveredBlock && hoveredBlock !== "achievers" && "opacity-50 blur-[2px] scale-[0.98]"
            )}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-50/50 pb-5">
              <div>
                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest leading-none">
                  Registry Engine
                </span>
                <h3 className="text-lg font-extrabold text-[#04241a] mt-1.5">
                  Elite Ranks Directory
                </h3>
              </div>
              <div className="flex gap-1.5 self-start sm:self-center">
                {ACHIEVERS.map((achiever) => (
                  <button
                    key={achiever.id}
                    onClick={() => setActiveAchieverId(achiever.id)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-[10px] font-bold transition-all cursor-pointer",
                      activeAchieverId === achiever.id 
                        ? "bg-[#044e3b] text-white shadow-sm" 
                        : "bg-emerald-50 text-[#406b5c] hover:bg-[#e6f4ea] hover:text-[#044e3b]"
                    )}
                  >
                    {achiever.rank}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Achiever Details */}
            <div className="flex-1 flex flex-col justify-between mt-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Student Avatar / Badge */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-br p-[1.5px] shadow-[0_12px_24px_rgba(4,78,59,0.06)] overflow-hidden group/avatar">
                    {/* Radial Backglow */}
                    <div className="absolute inset-0 bg-[#f4faf6] z-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-emerald-500/10 blur-xl pointer-events-none" />
                    </div>
                    {/* SVG Graphic Avatar */}
                    <div className="relative z-10 w-full h-full rounded-[14px] bg-[#f4faf6] flex flex-col items-center justify-center p-4">
                      <div className={cn("w-14 h-14 rounded-full bg-gradient-to-br flex items-center justify-center text-white text-lg font-extrabold shadow-sm mb-2.5", activeAchiever.avatarBg)}>
                        {activeAchiever.name[0]}
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase leading-none">
                        {activeAchiever.exam}
                      </span>
                      <h4 className="text-xl font-extrabold text-[#04241a] tracking-tight mt-1">
                        {activeAchiever.rank}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Achiever Statistics Presentation */}
                <div className="md:col-span-7 flex flex-col gap-4 text-left">
                  <div>
                    <span className="text-[8px] font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded px-1.5 py-0.5 uppercase tracking-widest">
                      {activeAchiever.batch}
                    </span>
                    <h4 className="text-xl font-extrabold text-[#04241a] mt-2.5">
                      {activeAchiever.name}
                    </h4>
                    <p className="text-xs text-[#406b5c] font-semibold mt-1">
                      Academic Year {activeAchiever.year} Selection Registry
                    </p>
                  </div>

                  {/* Core Scores specification list */}
                  <div className="flex flex-col gap-2 border-t border-emerald-50/50 pt-3">
                    {activeAchiever.scores.map((score, idx) => (
                      <div key={idx} className="flex justify-between items-center py-1 text-xs">
                        <span className="text-slate-400 font-bold">{score.label} Percentile</span>
                        <span className="font-extrabold text-[#044e3b] bg-[#e6f4ea] px-2 py-0.5 rounded-md">
                          {score.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Verified Badge */}
              <div className="border-t border-emerald-50/50 pt-4 mt-6 flex items-center gap-1.5 text-[9px] font-bold text-slate-400">
                <ShieldCheck className="size-3.5 text-emerald-600" />
                <span>Verified National Registry Scoreboard • UID: 042025-{activeAchiever.id}</span>
              </div>
            </div>
          </motion.div>

          {/* BLOCK 2: EXAM PERFORMANCE INTELLIGENCE (Spans 5 Columns) */}
          <motion.div 
            variants={cardVariants}
            style={{ willChange: "transform, opacity" }}
            onMouseEnter={() => hasHover && setHoveredBlock("exams")}
            onMouseLeave={() => hasHover && setHoveredBlock(null)}
            onClick={() => setHoveredBlock(hoveredBlock === "exams" ? null : "exams")}
            className={cn(
              "lg:col-span-5 rounded-3xl transition-all duration-500 flex flex-col justify-between glass-panel p-6 sm:p-8 cursor-pointer lg:cursor-default",
              hoveredBlock && hoveredBlock !== "exams" && "opacity-50 blur-[2px] scale-[0.98]"
            )}
          >
            <div>
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest leading-none">
                Throughput Speed
              </span>
              <h3 className="text-lg font-extrabold text-[#04241a] mt-1.5">
                Qualification Ratios
              </h3>
              <p className="text-xs text-[#406b5c] font-medium mt-1 leading-relaxed">
                Visualizing selection yield inside our advanced programs cohort.
              </p>
            </div>

            {/* Circular rings mapping */}
            <div className="flex flex-col gap-4 my-6">
              {EXAM_STATS.map((exam, idx) => (
                <div key={idx} className="flex items-center gap-4 text-left">
                  {/* Custom Minimal Circular Ring */}
                  <div className="relative size-12 flex-shrink-0 flex items-center justify-center">
                    <svg className="size-full transform -rotate-90">
                      <circle 
                        cx="24" 
                        cy="24" 
                        r="20" 
                        stroke="#e2f0e7" 
                        strokeWidth="3.5" 
                        fill="transparent" 
                      />
                      <motion.circle 
                        cx="24" 
                        cy="24" 
                        r="20" 
                        stroke="#044e3b" 
                        strokeWidth="3.5" 
                        fill="transparent" 
                        strokeDasharray={125.6}
                        initial={{ strokeDashoffset: 125.6 }}
                        animate={inView ? { strokeDashoffset: 125.6 - (125.6 * exam.qualifiedPercent) / 100 } : {}}
                        transition={{ duration: 1.5, delay: idx * 0.15, ease: "easeOut" }}
                      />
                    </svg>
                    <span className="absolute text-[9px] font-extrabold text-[#044e3b]">
                      {inView ? <CountUp start={0} end={Math.round(exam.qualifiedPercent)} duration={1.5} /> : "0"}%
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-extrabold text-[#04241a]">
                      {exam.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-semibold block leading-tight">
                      {exam.label} • {exam.totalCandidates}+ Verified Candidates
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-emerald-50/50 pt-4 flex items-center justify-between text-[9px] font-bold text-[#406b5c]">
              <span>CURRICULUM ACCURACY YIELD</span>
              <span className="text-emerald-600">STABILIZED</span>
            </div>
          </motion.div>

          {/* BLOCK 3: SUBJECT CORE ENGINES (Spans 6 Columns) */}
          <motion.div 
            variants={cardVariants}
            style={{ willChange: "transform, opacity" }}
            onMouseEnter={() => hasHover && setHoveredBlock("subjects")}
            onMouseLeave={() => hasHover && setHoveredBlock(null)}
            onClick={() => setHoveredBlock(hoveredBlock === "subjects" ? null : "subjects")}
            className={cn(
              "lg:col-span-6 rounded-3xl transition-all duration-500 flex flex-col justify-between glass-panel p-6 sm:p-8 cursor-pointer lg:cursor-default",
              hoveredBlock && hoveredBlock !== "subjects" && "opacity-50 blur-[2px] scale-[0.98]"
            )}
          >
            <div className="border-b border-emerald-50/50 pb-4 mb-5">
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest leading-none">
                Hardware Core Specs
              </span>
              <h3 className="text-lg font-extrabold text-[#04241a] mt-1.5">
                Subject Core Engines
              </h3>
              <p className="text-xs text-[#406b5c] font-medium mt-1 leading-relaxed">
                Academic throughput indexes presenting top-tier score benchmarks.
              </p>
            </div>

            {/* Spec grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SUBJECT_ENGINES.map((engine, idx) => {
                const IconComponent = engine.icon;
                return (
                  <div 
                    key={idx}
                    className={cn(
                      "border border-emerald-50/60 rounded-xl p-3.5 bg-white/50 text-left transition-all duration-300 group/item",
                      hasHover && "hover:border-emerald-200 hover:bg-emerald-50/20"
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-extrabold text-[#04241a] leading-none">
                        {engine.subject}
                      </span>
                      <IconComponent className="size-3.5 text-slate-400 group-hover/item:text-[#044e3b] transition-colors" />
                    </div>
                    <div className="mt-3 flex items-baseline gap-1.5">
                      <span className="text-base font-extrabold text-[#044e3b]">
                        {engine.maxScore.split("/")[0]}
                      </span>
                      <span className="text-[9px] text-slate-400 font-bold">
                        /{engine.maxScore.split("/")[1]} Max
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2.5 pt-2 border-t border-dashed border-emerald-50 text-[9px] font-bold">
                      <span className="text-slate-400">Avg {engine.avgPercent}%</span>
                      <span className="text-emerald-600 bg-emerald-50 px-1 rounded">{engine.improvement}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* BLOCK 4: HISTORICAL PROGRESSION TIMELINE (Spans 6 Columns) */}
          <motion.div 
            variants={cardVariants}
            style={{ willChange: "transform, opacity" }}
            onMouseEnter={() => hasHover && setHoveredBlock("timeline")}
            onMouseLeave={() => hasHover && setHoveredBlock(null)}
            onClick={() => setHoveredBlock(hoveredBlock === "timeline" ? null : "timeline")}
            className={cn(
              "lg:col-span-6 rounded-3xl transition-all duration-500 flex flex-col justify-between glass-panel-glow p-6 sm:p-8 cursor-pointer lg:cursor-default",
              hoveredBlock && hoveredBlock !== "timeline" && "opacity-50 blur-[2px] scale-[0.98]"
            )}
          >
            <div>
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest leading-none">
                Acceleration Track
              </span>
              <h3 className="text-lg font-extrabold text-[#04241a] mt-1.5">
                Institutional Growth Progression
              </h3>
              <p className="text-xs text-[#406b5c] font-medium mt-1 leading-relaxed">
                Tracking execution scale and rank increases across academic eras.
              </p>
            </div>

            {/* Stepping progression design */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
              
              <div className="relative border border-emerald-50 rounded-xl p-4 bg-white/40 text-left flex flex-col justify-between min-h-[110px]">
                <div className="text-[10px] font-bold text-slate-400">ERA 1 • 2018</div>
                <div className="my-auto flex flex-col mt-2">
                  <span className="text-2xl font-extrabold text-[#04241a]">2</span>
                  <span className="text-[9px] text-slate-500 font-bold leading-tight mt-0.5">Top 500 Ranks</span>
                </div>
                <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded self-start mt-2">Baseline</span>
              </div>

              <div className="relative border border-emerald-50 rounded-xl p-4 bg-white/40 text-left flex flex-col justify-between min-h-[110px]">
                <div className="text-[10px] font-bold text-slate-400">ERA 2 • 2021</div>
                <div className="my-auto flex flex-col mt-2">
                  <span className="text-2xl font-extrabold text-[#04241a]">6</span>
                  <span className="text-[9px] text-slate-500 font-bold leading-tight mt-0.5">Top 200 Ranks</span>
                </div>
                <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded self-start mt-2">+200% Growth</span>
              </div>

              <div className="relative border border-[#044e3b]/30 rounded-xl p-4 bg-[#f4faf6] text-left flex flex-col justify-between min-h-[110px]">
                <div className="text-[10px] font-bold text-emerald-700">ERA 3 • 2025</div>
                <div className="my-auto flex flex-col mt-2">
                  <span className="text-2xl font-extrabold text-[#044e3b]">14</span>
                  <span className="text-[9px] text-slate-500 font-bold leading-tight mt-0.5">Top 100 Ranks</span>
                </div>
                <span className="text-[8px] font-bold text-white bg-[#044e3b] px-1.5 py-0.5 rounded self-start mt-2">Peak Yield</span>
              </div>

            </div>

            <div className="border-t border-emerald-50/50 pt-4 flex items-center justify-between text-[9px] font-bold text-slate-400">
              <span>SYSTEM SCALING REGISTERED</span>
              <span>VERIFIED ACCELERATION</span>
            </div>
          </motion.div>

          {/* BLOCK 5: SUCCESS DESTINY DISTRIBUTION (Spans Full 12 Columns) */}
          <motion.div 
            variants={cardVariants}
            style={{ willChange: "transform, opacity" }}
            onMouseEnter={() => hasHover && setHoveredBlock("placements")}
            onMouseLeave={() => hasHover && setHoveredBlock(null)}
            onClick={() => setHoveredBlock(hoveredBlock === "placements" ? null : "placements")}
            className={cn(
              "lg:col-span-12 rounded-3xl transition-all duration-500 glass-panel p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 cursor-pointer lg:cursor-default",
              hoveredBlock && hoveredBlock !== "placements" && "opacity-50 blur-[2px] scale-[0.98]"
            )}
          >
            <div className="max-w-md text-left">
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest leading-none">
                Destination Log
              </span>
              <h3 className="text-lg font-extrabold text-[#04241a] mt-1.5">
                Outcome & Placement Destinations
              </h3>
              <p className="text-xs text-[#406b5c] font-medium mt-1 leading-relaxed">
                Verification index of national institutional admissions across top departments.
              </p>
            </div>

            {/* Glowing stats list */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
              
              <div className="border-l-2 border-emerald-500 pl-4 text-left">
                <span className="text-[8px] font-bold text-slate-400 tracking-wider uppercase block">IIT Admissions</span>
                <span className="text-2xl font-extrabold text-[#04241a] tracking-tight block mt-1">
                  {inView ? <CountUp start={0} end={420} duration={2} suffix="+" /> : "0"}
                </span>
                <span className="text-[9px] text-[#406b5c] font-bold">Top-10 Departments</span>
              </div>

              <div className="border-l-2 border-emerald-500 pl-4 text-left">
                <span className="text-[8px] font-bold text-slate-400 tracking-wider uppercase block">NIT & BITS Admissions</span>
                <span className="text-2xl font-extrabold text-[#04241a] tracking-tight block mt-1">
                  {inView ? <CountUp start={0} end={680} duration={2.2} suffix="+" /> : "0"}
                </span>
                <span className="text-[9px] text-[#406b5c] font-bold">Engineering Yield</span>
              </div>

              <div className="border-l-2 border-emerald-500 pl-4 text-left">
                <span className="text-[8px] font-bold text-slate-400 tracking-wider uppercase block">Medical Admissions</span>
                <span className="text-2xl font-extrabold text-[#04241a] tracking-tight block mt-1">
                  {inView ? <CountUp start={0} end={180} duration={2.4} suffix="+" /> : "0"}
                </span>
                <span className="text-[9px] text-[#406b5c] font-bold">AIIMS / Govt Medical</span>
              </div>

              <div className="border-l-2 border-emerald-500 pl-4 text-left">
                <span className="text-[8px] font-bold text-slate-400 tracking-wider uppercase block">Govt Universities</span>
                <span className="text-2xl font-extrabold text-[#04241a] tracking-tight block mt-1">
                  {inView ? <CountUp start={0} end={980} duration={2.6} suffix="+" /> : "0"}
                </span>
                <span className="text-[9px] text-[#406b5c] font-bold">State Allocations</span>
              </div>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
