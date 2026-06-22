/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
"use client";

import React, { useState, useRef } from "react";
import TimelineRail, { TimelineItem } from "@/components/ui/timeline-rail";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { UserPlus, BookOpen, ClipboardCheck, FileText, LineChart, TrendingUp, Trophy, Sparkles } from "lucide-react";

type StepItem = TimelineItem & {
  icon: React.ComponentType<{ className?: string }>;
  stepNum: string;
  label: string;
  title: string;
  description: string;
};

const STEPS: StepItem[] = [
  {
    stepNum: "01",
    label: "Admission",
    title: "Personalized Counseling",
    description: "Begin your academic journey with customized stream counseling and goal setting.",
    icon: UserPlus,
    active: true,
  },
  {
    stepNum: "02",
    label: "Foundation",
    title: "Core Syllabus Mastery",
    description: "Build deep conceptual understanding through structured lecture sequences.",
    icon: BookOpen,
    active: true,
  },
  {
    stepNum: "03",
    label: "Weekly Tests",
    title: "Weekly Assessments",
    description: "Track progress consistently through mock assessments and feedback loops.",
    icon: ClipboardCheck,
    active: true,
  },
  {
    stepNum: "04",
    label: "Grand Tests",
    title: "Real Exam Simulations",
    description: "Experience full-length mock exams designed around JEE & NEET patterns.",
    icon: FileText,
    active: true,
  },
  {
    stepNum: "05",
    label: "Analysis",
    title: "Performance Diagnostic",
    description: "Identify strengths and weaknesses through automated, detailed report diagnostics.",
    icon: LineChart,
  },
  {
    stepNum: "06",
    label: "Improvement",
    title: "Rank Correction Program",
    description: "Focused mentor interventions and corrective workshops accelerate growth.",
    icon: TrendingUp,
  },
  {
    stepNum: "07",
    label: "JEE / NEET Success",
    title: "Secure Elite Placement",
    description: "Secure admission into India's premier engineering and medical institutions.",
    icon: Trophy,
  },
];

export function LearningJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(3); // default to Grand Tests (step index 3)

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  // Build items list with dynamic active state based on selection
  const timelineItems: TimelineItem[] = STEPS.map((step, idx) => ({
    label: step.label,
    caption: step.caption,
    active: idx <= activeStepIndex,
    onClick: () => setActiveStepIndex(idx),
  }));

  // Render milestone cards for desktop (no image, step number + icon + title)
  const renderStepCard = (step: StepItem, index: number, isStepActive: boolean) => {
    const Icon = step.icon;
    return (
      <div 
        className={`flex flex-col items-center select-none group/card transition-all duration-300 cursor-pointer ${
          isStepActive ? "scale-100" : "scale-[0.98] opacity-85 hover:opacity-100"
        }`}
        onClick={() => setActiveStepIndex(index)}
      >
        <div className={`relative w-28 h-20 lg:w-36 lg:h-24 rounded-xl flex flex-col justify-between p-2 lg:p-3 border transition-all duration-500 shadow-sm ${
          isStepActive 
            ? "border-brand-200 bg-white shadow-[0_6px_20px_rgba(4,78,59,0.04)]" 
            : "border-zinc-100 bg-zinc-50/50 hover:border-brand-100 hover:bg-white"
        }`}>
          {/* Top Row: Step Number & Icon */}
          <div className="flex justify-between items-center w-full">
            <span className={`text-[8px] font-extrabold px-1 py-0.5 rounded transition-colors ${
              isStepActive ? "bg-brand-50 text-brand-800" : "bg-zinc-100 text-zinc-500"
            }`}>
              {step.stepNum}
            </span>
            <Icon className={`size-3 lg:size-3.5 transition-colors duration-300 ${
              isStepActive ? "text-brand-700" : "text-zinc-400"
            }`} />
          </div>

          {/* Bottom Title */}
          <div className="text-left w-full mt-1">
            <span className={`text-[7px] font-bold uppercase tracking-wider block ${
              isStepActive ? "text-brand-950/60" : "text-zinc-400"
            }`}>
              {step.label}
            </span>
            <h4 className={`text-[9px] lg:text-xs font-extrabold tracking-tight mt-0.5 leading-tight ${
              isStepActive ? "text-brand-900" : "text-zinc-700"
            }`}>
              {step.title}
            </h4>
          </div>
        </div>
      </div>
    );
  };

  // Render description text blocks for desktop
  const renderDescriptionCard = (step: StepItem, index: number, isStepActive: boolean, isAbove: boolean) => {
    return (
      <div 
        className={`w-28 sm:w-36 text-center select-none cursor-pointer flex flex-col items-center justify-center transition-all duration-300 ${
          isAbove ? "pb-3" : "pt-3"
        }`}
        onClick={() => setActiveStepIndex(index)}
      >
        <p className={`text-[8px] sm:text-[9px] lg:text-[10px] font-medium leading-normal transition-colors duration-300 ${
          isStepActive ? "text-[#406b5c]" : "text-zinc-400"
        }`}>
          {step.description}
        </p>
      </div>
    );
  };

  // Custom render for the top label slot (alternates milestone card and description card)
  const renderLabel = (item: TimelineItem, index: number) => {
    const step = STEPS[index];
    const isStepActive = index <= activeStepIndex;
    if (index % 2 === 0) {
      return renderStepCard(step, index, isStepActive);
    } else {
      return renderDescriptionCard(step, index, isStepActive, true);
    }
  };

  // Custom render for the bottom caption slot (alternates milestone card and description card)
  const renderCaption = (item: TimelineItem, index: number) => {
    const step = STEPS[index];
    const isStepActive = index <= activeStepIndex;
    if (index % 2 === 0) {
      return renderDescriptionCard(step, index, isStepActive, false);
    } else {
      return renderStepCard(step, index, isStepActive);
    }
  };

  return (
    <section
      id="learning-journey"
      className="relative py-20 md:py-28 px-4 bg-white border-t border-brand-100/30 scroll-mt-28 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 bg-grid-lines pointer-events-none opacity-[0.12]" />

      <div className="max-w-[1400px] mx-auto relative z-10 text-center space-y-12">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-[#e6f4ea] px-3.5 py-1 text-[9px] font-extrabold text-brand-950 uppercase tracking-[0.18em]">
            <Sparkles className="size-3 text-brand-600 animate-pulse" />
            <span>Success Path™</span>
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
              }}
            >
              Your Success Journey, Step by Step
            </VerticalCutReveal>
          </h2>
          <p className="text-sm sm:text-base text-[#406b5c] font-medium leading-relaxed max-w-2xl mx-auto">
            A structured academic system designed to transform every student from admission day to JEE/NEET rank achievement.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (Visible on desktop, hidden on mobile) */}
        <div className="hidden md:block w-full max-w-6xl mx-auto px-4 select-none">
          <TimelineRail
            items={timelineItems}
            size="md"
            emphasizeActiveTrail={true}
            labelAngle={0}
            gapClassName="justify-between w-full px-4"
            lineColorClass="bg-brand-50 border-y border-brand-100/50"
            lineThickness={8}
            dotClass="bg-white border-2 border-brand-100 hover:border-brand-300 shadow-sm cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300"
            dotActiveClass="bg-brand-700 ring-4 ring-brand-500/25 hover:ring-brand-500/40 cursor-pointer shadow-md shadow-brand-900/10 hover:scale-110 active:scale-95 transition-all duration-300"
            activeTrailClass="bg-gradient-to-r from-brand-500 to-brand-700 shadow-sm shadow-brand-500/10"
            renderLabel={renderLabel}
            renderCaption={renderCaption}
            itemClassName="shrink-0 w-28 lg:w-36 flex flex-col items-center"
            labelClassName="left-1/2 -translate-x-1/2 flex justify-center w-28 lg:w-36"
            captionClassName="left-1/2 -translate-x-1/2 flex justify-center w-28 lg:w-36"
            className="py-24"
          />
        </div>

        {/* Mobile Vertical Timeline (Visible on mobile, hidden on desktop) */}
        <div className="relative md:hidden w-full max-w-md mx-auto px-4 py-8 select-none">
          {/* Vertical Progress Rail */}
          <div className="absolute left-6 top-10 bottom-10 w-1.5 bg-brand-50 rounded-full">
            {/* Active Vertical Trail */}
            <div 
              className="absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-brand-500 to-brand-700 transition-all duration-500 shadow-sm"
              style={{
                height: `${(activeStepIndex / (STEPS.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* Vertical Steps List */}
          <div className="space-y-6 relative z-10">
            {STEPS.map((step, idx) => {
              const isStepActive = idx <= activeStepIndex;
              const Icon = step.icon;

              return (
                <div 
                  key={idx}
                  className="flex items-start gap-4 cursor-pointer group"
                  onClick={() => setActiveStepIndex(idx)}
                >
                  {/* Indicator Dot on the Rail */}
                  <div className="relative flex items-center justify-center pt-2">
                    <div className={`size-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                      isStepActive 
                        ? "bg-brand-700 border-brand-500 ring-4 ring-brand-500/20 shadow-md scale-110" 
                        : "bg-white border-brand-100 shadow-sm"
                    }`}>
                      <div className={`size-1.5 rounded-full ${
                        isStepActive ? "bg-white" : "bg-brand-100"
                      }`} />
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <div className={`flex-1 rounded-xl p-3 border transition-all duration-500 text-left ${
                    isStepActive 
                      ? "border-brand-200 bg-white shadow-[0_6px_20px_rgba(4,78,59,0.04)]" 
                      : "border-zinc-100 bg-zinc-50/50 hover:border-brand-100 hover:bg-white"
                  }`}>
                    {/* Header */}
                    <div className="flex justify-between items-center w-full mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[8px] font-extrabold px-1.5 py-0.5 rounded transition-colors ${
                          isStepActive ? "bg-brand-50 text-brand-800" : "bg-zinc-100 text-zinc-500"
                        }`}>
                          {step.stepNum}
                        </span>
                        <span className={`text-[8px] font-bold uppercase tracking-wider ${
                          isStepActive ? "text-brand-950/60" : "text-zinc-400"
                        }`}>
                          {step.label}
                        </span>
                      </div>
                      <Icon className={`size-3.5 transition-colors duration-300 ${
                        isStepActive ? "text-brand-700" : "text-zinc-400"
                      }`} />
                    </div>

                    {/* Content */}
                    <h4 className={`text-xs font-extrabold tracking-tight transition-colors duration-300 ${
                      isStepActive ? "text-brand-900" : "text-zinc-700"
                    }`}>
                      {step.title}
                    </h4>
                    <p className="text-[10px] font-medium text-zinc-400 mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Small Navigation/Guide Indicator */}
        <div className="text-[10px] text-zinc-400 font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 opacity-80 select-none">
          <span>Click on any milestone stage to trace the progress track</span>
        </div>
      </div>
    </section>
  );
}
