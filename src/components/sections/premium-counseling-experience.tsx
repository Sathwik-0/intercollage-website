/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
"use client";

import React, { useRef, useState, useEffect } from "react";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { CounselingModal, CounselingVariant } from "@/components/ui/counseling-modal";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Sparkles, Compass, MessageSquare, Layers, 
  GraduationCap, CheckCheck, CheckCircle2 
} from "lucide-react";

interface StepData {
  step: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  benefits: string[];
}

const STEPS_DATA: StepData[] = [
  {
    step: "01",
    icon: Compass,
    title: "Academic Discovery",
    description: "Understand the student's interests, strengths, and future aspirations.",
    benefits: [
      "Stream suitability assessment",
      "Academic profile review",
      "Goal-oriented guidance",
    ],
  },
  {
    step: "02",
    icon: MessageSquare,
    title: "Personalized Counseling",
    description: "One-on-one consultation with admission counselors.",
    benefits: [
      "Parent participation welcome",
      "Stream selection support",
      "Career pathway discussion",
    ],
  },
  {
    step: "03",
    icon: Layers,
    title: "Admission Planning",
    description: "Review eligibility, documentation, and available batch options.",
    benefits: [
      "Admission roadmap",
      "Document guidance",
      "Batch allocation support",
    ],
  },
  {
    step: "04",
    icon: GraduationCap,
    title: "Enrollment Confirmation",
    description: "Secure your place and prepare for orientation.",
    benefits: [
      "Seat confirmation",
      "Welcome onboarding",
      "Orientation preparation",
    ],
  },
];

interface CounselingCardData {
  title: string;
  description: string;
  highlights: string[];
  recommended?: boolean;
  buttonText: string;
  buttonVariant: "default" | "outline";
  variant: CounselingVariant;
}

const CARDS_DATA: CounselingCardData[] = [
  {
    title: "Student Guidance",
    description: "Personalized academic and stream planning.",
    highlights: [
      "Academic assessment",
      "Goal mapping",
      "Stream recommendations",
    ],
    buttonText: "Schedule Session",
    buttonVariant: "outline",
    variant: "student",
  },
  {
    title: "Parent Consultation",
    description: "Dedicated support for families during decision making.",
    highlights: [
      "Admission clarity",
      "Academic planning",
      "Long-term guidance",
    ],
    recommended: true,
    buttonText: "Schedule Consultation",
    buttonVariant: "default",
    variant: "parent",
  },
  {
    title: "Enrollment Support",
    description: "Guidance through every admission milestone.",
    highlights: [
      "Documentation review",
      "Seat allocation guidance",
      "Enrollment completion",
    ],
    buttonText: "Request Guide Packet",
    buttonVariant: "outline",
    variant: "enrollment",
  },
];

export function PremiumCounselingExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    setHasHover(window.matchMedia("(hover: hover)").matches);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const revealVariants: any = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.45,
        ease: "easeOut",
        delay: i * (isMobile ? 0.06 : 0.12),
      },
    }),
    hidden: {
      y: isMobile ? 0 : -16,
      opacity: isMobile ? 1 : 0,
    },
  };

  return (
    <section
      id="admissions"
      className="relative py-20 md:py-28 px-4 bg-white border-t border-brand-100/30 scroll-mt-28 overflow-hidden"
      ref={containerRef}
    >
      {/* Background Subtle Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-grid-lines pointer-events-none opacity-[0.12]" />

      <div className="max-w-[1400px] mx-auto relative z-10 space-y-16">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto px-6 space-y-4 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-[#e6f4ea] px-3.5 py-1 text-[9px] font-extrabold text-brand-950 uppercase tracking-[0.18em]">
            <Sparkles className="size-3 text-brand-600 animate-pulse" />
            <span>PERSONALIZED ADMISSION GUIDANCE</span>
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
              Start Your Success Journey
            </VerticalCutReveal>
          </h2>
          <p className="text-sm sm:text-base text-[#406b5c] font-medium leading-relaxed max-w-2xl mx-auto">
            Every student follows a different path. Our academic counselors help students and parents evaluate streams, career goals, academic strengths, and admission opportunities before enrollment decisions are finalized.
          </p>
        </div>

        {/* Process Flow Timelines */}
        <div className="max-w-5xl mx-auto w-full relative">
          {/* Connecting line for desktop */}
          <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-0.5 border-t border-dashed border-brand-200 pointer-events-none z-0 hidden md:block" />
          
          {/* Connecting line for mobile */}
          <div className="absolute left-[28px] top-8 bottom-8 w-0.5 border-l border-dashed border-brand-200 pointer-events-none z-0 block md:hidden" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {STEPS_DATA.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <TimelineContent
                  key={step.step}
                  as="div"
                  animationNum={idx}
                  timelineRef={containerRef}
                  customVariants={revealVariants}
                  className="flex md:flex-col gap-4 md:gap-0 items-start text-left"
                >
                  {/* Step Number Circle */}
                  <div className="size-14 rounded-2xl bg-white border border-brand-100 flex flex-col items-center justify-center flex-shrink-0 z-10 shadow-sm md:mb-5 group hover:border-brand-300 transition-colors duration-300">
                    <span className="text-[9px] font-extrabold text-brand-800 tracking-wider leading-none mb-1">
                      STEP {step.step}
                    </span>
                    <IconComponent className="size-4.5 text-brand-950" />
                  </div>

                  {/* Step Text Info */}
                  <div className="space-y-2 max-w-[240px]">
                    <h4 className="text-sm font-extrabold text-[#04241a] leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Benefits Checklist */}
                    <ul className="space-y-1.5 pt-1">
                      {step.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <span className="size-3.5 rounded-full bg-[#e6f4ea] flex items-center justify-center text-brand-950 flex-shrink-0">
                            <CheckCheck className="size-2 text-brand-950" />
                          </span>
                          <span className="text-[10px] font-bold text-zinc-600 leading-none">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TimelineContent>
              );
            })}
          </div>
        </div>

        {/* Premium Packages Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-8">
          {CARDS_DATA.map((card, idx) => (
            <TimelineContent
              key={card.title}
              as="div"
              animationNum={4 + idx}
              timelineRef={containerRef}
              customVariants={revealVariants}
              className="h-full"
            >
              <Card
                className={`relative h-full flex flex-col justify-between border rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                  card.recommended
                    ? "border-brand-500 bg-[#e6f4ea]/10 ring-2 ring-brand-500/20 shadow-md scale-[1.02]"
                    : "border-neutral-200 bg-white shadow-sm hover:shadow-md hover:border-neutral-300"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-black text-brand-950 tracking-tight">
                      {card.title}
                    </h3>
                    {card.recommended && (
                      <span className="bg-brand-950 text-white px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-zinc-500 mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-neutral-100">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">
                      Guidance Scope
                    </h4>
                    <ul className="space-y-2.5">
                      {card.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2">
                          <CheckCheck className="size-4 text-brand-600 flex-shrink-0" />
                          <span className="text-xs font-bold text-brand-950/80 leading-none">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <CounselingModal variant={card.variant}>
                    <Button
                      variant={card.buttonVariant}
                      size="sm"
                      className={cn(
                        "w-full text-xs font-bold py-5 rounded-2xl transition-all duration-300 active:scale-[0.98]",
                        card.recommended
                          ? cn("bg-brand-950 text-white shadow-sm shadow-brand-950/10", hasHover && "hover:bg-[#033629]")
                          : cn("border-brand-950 text-brand-950", hasHover && "hover:bg-brand-50/50")
                      )}
                    >
                      {card.buttonText}
                    </Button>
                  </CounselingModal>
                </div>
              </Card>
            </TimelineContent>
          ))}
        </div>

        {/* Counseling Availability Status Panel */}
        <TimelineContent
          as="div"
          animationNum={7}
          timelineRef={containerRef}
          customVariants={revealVariants}
          className="max-w-5xl mx-auto w-full"
        >
          <div className="border border-brand-100/50 bg-[#fbfdfc]/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-0 justify-between border-l-4 border-l-brand-950">
            <div className="text-center md:text-left space-y-1">
              <h3 className="text-sm font-black text-[#04241a] uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="size-4 text-brand-600" />
                Counseling Availability Dashboard
              </h3>
              <p className="text-xs font-bold text-zinc-400">
                Live verification of stream advisory counters and appointment desks.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
              {[
                "Personalized sessions available",
                "Parent counseling active",
                "Science stream guidance active",
                "Commerce stream guidance active",
                "Admission planning sessions open",
              ].map((item) => (
                <span 
                  key={item} 
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#e6f4ea] border border-brand-100/50 px-3 py-1 text-[9px] font-bold text-brand-950"
                >
                  <CheckCircle2 className="size-3 text-brand-600" />
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col justify-center text-center md:text-right md:pl-6 border-t md:border-t-0 md:border-l border-zinc-100 pt-4 md:pt-0 w-full md:w-auto">
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-none mb-1 block">
                Last Updated
              </span>
              <span className="text-[11px] font-black text-brand-950 tracking-wider uppercase leading-none">
                Today
              </span>
            </div>
          </div>
        </TimelineContent>

      </div>
    </section>
  );
}
export default PremiumCounselingExperience;
