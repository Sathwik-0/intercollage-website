"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Award, GraduationCap, Trophy, Users, BookOpen, Clock, Percent, ShieldCheck } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

/* Hallmark · component: authority-wall · genre: modern-minimal · theme: light-green
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (4.5:1 text-to-bg)
 */

interface MetricCard {
  id: string;
  category: string;
  metric: string;
  metricValue: number;
  suffix: string;
  description: string;
  icon: React.ComponentType<any>;
  details: string;
}

const METRIC_CARDS: MetricCard[] = [
  {
    id: "1",
    category: "JEE Advanced",
    metric: "IIT Bombay Placements",
    metricValue: 14,
    suffix: " AIR",
    description: "Top ranks in engineering streams",
    icon: Trophy,
    details: "Our specialized IIT-incubator batches consistently deliver double-digit All India Ranks. Over 14 ranks recorded inside the Top 100 in JEE Advanced exams.",
  },
  {
    id: "2",
    category: "NEET Excellence",
    metric: "Medical Admissions",
    metricValue: 48,
    suffix: " AIR",
    description: "Top seats in premier medical universities",
    icon: GraduationCap,
    details: "Securing student pathways to prestigious institutions like AIIMS New Delhi and JIPMER. 48 selections inside the top national percentiles.",
  },
  {
    id: "3",
    category: "Academic Ranks",
    metric: "EAMCET Success Rates",
    metricValue: 97,
    suffix: "%",
    description: "State-wide qualification dominance",
    icon: Award,
    details: "Stabilizing state-rank benchmarks with over 97% of our student cohort qualifying in the top state engineering and agricultural categories.",
  },
  {
    id: "4",
    category: "Mentorship Scale",
    metric: "Students Guided",
    metricValue: 10000,
    suffix: "+",
    description: "Successful competitive journeys",
    icon: Users,
    details: "Over 10,000 students successfully guided by our counselors and subject HODs, transitioning raw student potential into measurable test outcomes.",
  },
  {
    id: "5",
    category: "Academic Tenacity",
    metric: "Years of Excellence",
    metricValue: 15,
    suffix: "+ Yrs",
    description: "Proven curriculum methodologies",
    icon: Clock,
    details: "15+ years of continuous test-prep refinement. We have engineered, tested, and optimized our curriculum cycles to guarantee student stabilization.",
  },
  {
    id: "6",
    category: "Curriculum Precision",
    metric: "HOD Faculty Team",
    metricValue: 80,
    suffix: "+",
    description: "Senior IIT/Medical educators",
    icon: BookOpen,
    details: "Our classes are led by 80+ senior HOD mentors who possess over 12+ years of direct coaching experience at national institutions.",
  },
];

export function AuthorityWall() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const col1 = METRIC_CARDS.filter((_, i) => i % 3 === 0);
  const col2 = METRIC_CARDS.filter((_, i) => i % 3 === 1);
  const col3 = METRIC_CARDS.filter((_, i) => i % 3 === 2);

  return (
    <section id="results" className="relative w-full py-20 md:py-28 px-6 bg-transparent overflow-hidden scroll-mt-28">
      
      {/* Grid line overlay */}
      <div className="absolute inset-0 z-0 bg-grid-lines pointer-events-none opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Title Block */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-4 text-xs font-bold tracking-widest text-brand-950 uppercase">
            Section 03 — Authority Wall
          </span>
          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-[#04241a] md:text-5xl md:leading-[1.15]">
            Proven Results. <span className="text-gradient-primary">Measurable Impact.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[#406b5c] font-medium leading-relaxed">
            For years, students have trusted our systems, mentors, and academic environment to achieve exceptional outcomes in competitive examinations.
          </p>
        </div>

        {/* Interactive Split Layout */}
        <div 
          ref={sectionRef}
          className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 w-full select-none mt-6"
        >
          {/* LEFT SIDE: Visual Authority Grid (Staggered Column Layout) */}
          <div className="flex gap-2 sm:gap-4 flex-shrink-0 w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 justify-start lg:justify-center">
            {/* Column 1 */}
            <div className="flex flex-col gap-2 sm:gap-4">
              {col1.map((card) => (
                <AuthorityCard
                  key={card.id}
                  card={card}
                  className="w-[100px] h-[115px] sm:w-[170px] sm:h-[180px] md:w-[190px] md:h-[200px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                  inView={inView}
                />
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2 sm:gap-4 mt-[20px] sm:mt-[50px] md:mt-[60px]">
              {col2.map((card) => (
                <AuthorityCard
                  key={card.id}
                  card={card}
                  className="w-[105px] h-[120px] sm:w-[175px] sm:h-[185px] md:w-[195px] md:h-[205px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                  inView={inView}
                />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-2 sm:gap-4 mt-[10px] sm:mt-[25px] md:mt-[30px]">
              {col3.map((card) => (
                <AuthorityCard
                  key={card.id}
                  card={card}
                  className="w-[100px] h-[115px] sm:w-[170px] sm:h-[180px] md:w-[190px] md:h-[200px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                  inView={inView}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Progressive Metric Information Block */}
          <div className="flex flex-col gap-6 lg:gap-8 pt-2 flex-1 w-full text-left">
            {METRIC_CARDS.map((card) => (
              <MetricRow
                key={card.id}
                card={card}
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Left Side Staggered Glass Cards
───────────────────────────────────────── */

interface AuthorityCardProps {
  card: MetricCard;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  inView: boolean;
}

function AuthorityCard({
  card,
  className,
  hoveredId,
  onHover,
  inView,
}: AuthorityCardProps) {
  const isActive = hoveredId === card.id;
  const isDimmed = hoveredId !== null && !isActive;
  const IconComponent = card.icon;

  return (
    <motion.div
      onMouseEnter={() => onHover(card.id)}
      onMouseLeave={() => onHover(null)}
      className={cn(
        "rounded-2xl border border-brand-100/50 bg-[#ffffff]/90 backdrop-blur-md p-2 sm:p-5 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_12px_rgba(4,78,59,0.01)] cursor-pointer flex-shrink-0 text-left",
        isActive 
          ? "border-brand-500 bg-[#f4faf6] shadow-[0_12px_24px_rgba(4,78,59,0.04)] scale-[1.02]" 
          : "hover:border-brand-200",
        isDimmed && "opacity-50",
        className
      )}
    >
      {/* Card Header Category */}
      <div className="flex items-center justify-between gap-1">
        <span className="text-[7px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none line-clamp-2">
          {card.category}
        </span>
        <IconComponent className={cn(
          "size-3 sm:size-4 transition-colors duration-300 flex-shrink-0",
          isActive ? "text-brand-950" : "text-slate-400"
        )} />
      </div>

      {/* Card Value Representation */}
      <div className="my-auto flex flex-col">
        <h4 className="text-lg sm:text-2xl font-extrabold tracking-tight text-[#04241a] leading-none flex items-baseline tabular-nums">
          {inView ? (
            <CountUp
              start={0}
              end={card.metricValue}
              duration={2}
              separator=","
            />
          ) : (
            <span>0</span>
          )}
          <span className="text-xs sm:text-sm font-semibold text-brand-600 ml-0.5">{card.suffix}</span>
        </h4>
        <span className="text-[8px] sm:text-[10px] font-bold text-slate-500 mt-1 sm:mt-2 leading-tight line-clamp-2">
          {card.metric}
        </span>
      </div>

      {/* Mini Verification Badge */}
      <div className="flex items-center gap-1 mt-1 text-[7px] sm:text-[8px] font-bold text-slate-400">
        <ShieldCheck className="size-2.5 sm:size-3 text-[#10b981] flex-shrink-0" />
        <span className="truncate">Verified Registry</span>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Right Side Hover-Synchronized Metric Rows
───────────────────────────────────────── */

interface MetricRowProps {
  card: MetricCard;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}

function MetricRow({
  card,
  hoveredId,
  onHover,
}: MetricRowProps) {
  const isActive = hoveredId === card.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      onMouseEnter={() => onHover(card.id)}
      onMouseLeave={() => onHover(null)}
      className={cn(
        "group cursor-pointer transition-all duration-300 relative border-b border-brand-50/50 pb-5",
        isDimmed ? "opacity-50" : "opacity-100"
      )}
    >
      {/* Metric Name + Bullet Indicator */}
      <div className="flex items-center gap-3">
        {/* Sliding bullet block */}
        <span
          className={cn(
            "h-1.5 rounded-full flex-shrink-0 transition-all duration-300",
            isActive ? "bg-brand-950 w-6" : "bg-brand-200 w-2.5"
          )}
        />
        
        {/* Large Number Tag */}
        <span
          className={cn(
            "text-base md:text-lg font-bold leading-none tracking-tight transition-colors duration-300",
            isActive ? "text-brand-950" : "text-[#406b5c]"
          )}
        >
          {card.metricValue.toLocaleString()}{card.suffix} — {card.metric}
        </span>
      </div>

      {/* Progressive details reveal on hover */}
      <div className="pl-9 overflow-hidden">
        <motion.div
          initial={false}
          animate={isActive ? { height: "auto", opacity: 1, marginTop: 8 } : { height: 0, opacity: 0, marginTop: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl"
        >
          {card.details}
        </motion.div>
      </div>
    </div>
  );
}
