/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
"use client";

import React, { useState, useEffect } from "react";
import { EvidenceWall } from "@/components/ui/team-showcase";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { Sparkles, Trophy, GraduationCap, Award, ShieldCheck } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StatMetric {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ComponentType<any>;
}

const STAT_METRICS: StatMetric[] = [
  {
    value: 3200,
    suffix: "+",
    label: "IIT Selections",
    sublabel: "Verified engineering admissions",
    icon: Trophy,
  },
  {
    value: 5800,
    suffix: "+",
    label: "Medical Admissions",
    sublabel: "Verified NEET path selections",
    icon: GraduationCap,
  },
  {
    value: 127,
    suffix: "",
    label: "State Rankers",
    sublabel: "Top Board & state rankers",
    icon: Award,
  },
  {
    value: 96,
    suffix: "%",
    label: "Parents Recommend Us",
    sublabel: "Annual parent confidence feedback",
    icon: ShieldCheck,
  },
];

export function ProofCenter() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    setHasHover(window.matchMedia("(hover: hover)").matches);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { ref: statsRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      id="proof-center"
      className="relative py-20 md:py-28 px-4 bg-white border-t border-emerald-100/30 scroll-mt-28 overflow-hidden"
    >
      {/* Background Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 bg-grid-lines pointer-events-none opacity-[0.12]" />

      <div className="max-w-[1400px] mx-auto relative z-10 space-y-12">
        {/* Header Block */}
        <div className="max-w-3xl mx-auto px-6 space-y-4 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-[#e6f4ea] px-3.5 py-1 text-[9px] font-extrabold text-[#044e3b] uppercase tracking-[0.18em]">
            <Sparkles className="size-3 text-emerald-600 animate-pulse" />
            <span>PROOF CENTER™</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#04241a] leading-tight">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.08}
              staggerFrom="first"
              reverse={true}
              transition={{
                type: "spring",
                offset: 0,
                stiffness: 200,
                damping: 25,
                delay: 0.1,
              } as any}
            >
              Results Speak Louder Than Claims
            </VerticalCutReveal>
          </h2>
          <p className="text-sm sm:text-base text-[#406b5c] font-medium leading-relaxed max-w-2xl mx-auto">
            Every number and rank below is independently verifiable. Discover real stories of dedication, mentor guidance, and structured academic preparation.
          </p>
        </div>

        {/* Evidence Wall Grid */}
        <div className="w-full">
          <EvidenceWall />
        </div>

        {/* Outcomes Statistics Strip */}
        <motion.div 
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-white/70 backdrop-blur-xl border border-emerald-100/50 rounded-3xl p-6 sm:p-8 shadow-[0_12px_40px_rgba(4,78,59,0.02)] select-none max-w-6xl mx-auto"
        >
          {STAT_METRICS.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={stat.label}
                variants={cardVariants}
                style={isMobile ? undefined : { willChange: "transform, opacity" }}
                className={cn(
                  "relative flex flex-col items-center justify-center p-4 min-h-[140px] rounded-2xl border border-transparent transition-all duration-500 ease-out cursor-pointer overflow-hidden text-center",
                  hasHover && "group hover:border-emerald-100/60 hover:bg-emerald-500/[0.02]"
                )}
              >
                {/* Divider Line */}
                {idx !== 0 && (
                  <div className="hidden md:block w-px h-12 border-l border-dashed border-emerald-100/80 absolute left-0 top-1/2 -translate-y-1/2" />
                )}

                {/* Mobile View: Static Stack (shown on mobile, hidden on desktop) */}
                <div className="flex md:hidden flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#e6f4ea] flex items-center justify-center text-[#044e3b] mb-1">
                    <IconComponent className="size-4" />
                  </div>
                  <div className="flex items-center gap-0.5">
                    <span className="text-xl font-extrabold text-[#04241a] tracking-tight" style={{ fontVariantNumeric: "tabular-nums" }}>
                      {inView ? (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2}
                          separator=","
                        />
                      ) : (
                        <span>0</span>
                      )}
                    </span>
                    <span className="text-sm font-bold text-[#044e3b]">{stat.suffix}</span>
                  </div>
                  <p className="text-[10px] font-bold text-[#044e3b] uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-[9px] text-zinc-400 font-semibold leading-normal max-w-[140px]">
                    {stat.sublabel}
                  </p>
                </div>

                {/* Desktop View: Interactive Hover Reveal (hidden on mobile, shown on desktop) */}
                <div className="hidden md:flex flex-col items-center gap-3 transition-all duration-500 ease-out transform translate-y-0 group-hover:-translate-y-12 opacity-100 group-hover:opacity-0 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-[#e6f4ea] flex items-center justify-center text-[#044e3b]">
                    <IconComponent className="size-5" />
                  </div>
                  <span className="text-xs font-bold text-[#406b5c] tracking-wide">
                    {stat.label}
                  </span>
                </div>

                {/* Desktop Hover Content (hidden on mobile, shown on desktop) */}
                <div className="hidden md:flex absolute inset-x-3 bottom-4 top-4 opacity-0 flex-col items-center justify-center transition-all duration-500 ease-out transform translate-y-12 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none">
                  <div className="flex items-center gap-0.5">
                    <span className="text-3xl font-extrabold text-[#04241a] tracking-tight" style={{ fontVariantNumeric: "tabular-nums" }}>
                      {inView ? (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2}
                          separator=","
                        />
                      ) : (
                        <span>0</span>
                      )}
                    </span>
                    <span className="text-lg font-bold text-[#044e3b]">{stat.suffix}</span>
                  </div>
                  <p className="text-[#044e3b] font-bold text-[10px] uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                  <p className="text-[10px] text-zinc-400 font-semibold mt-2 leading-normal max-w-[170px]">
                    {stat.sublabel}
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
