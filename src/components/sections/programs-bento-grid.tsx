"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, GraduationCap, Trophy, Stethoscope, Award, Lightbulb, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgramHighlight {
  text: string;
}

interface Program {
  id: string;
  category: string;
  badge: string;
  title: string;
  highlights: ProgramHighlight[];
  image: string;
  ctaText: string;
  icon: React.ComponentType<any>;
  gridClass: string;
}

const PROGRAMS: Program[] = [
  {
    id: "jee-adv",
    category: "JEE Advanced",
    badge: "Elite AIR Focus",
    title: "JEE Advanced",
    highlights: [
      { text: "Advanced Problem Solving" },
      { text: "AIR-Oriented Strategy" },
      { text: "Elite Mentorship" },
    ],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    ctaText: "Explore Program",
    icon: Trophy,
    gridClass: "lg:col-span-6 md:col-span-2",
  },
  {
    id: "jee-main",
    category: "JEE Main",
    badge: "National Percentile Track",
    title: "JEE Main",
    highlights: [
      { text: "Concept Mastery" },
      { text: "Weekly Tests" },
      { text: "Rank Tracking" },
    ],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600",
    ctaText: "Explore Program",
    icon: GraduationCap,
    gridClass: "lg:col-span-3 md:col-span-1",
  },
  {
    id: "neet",
    category: "NEET Prep",
    badge: "AIIMS & Govt Medical Seats",
    title: "NEET",
    highlights: [
      { text: "Biology Excellence" },
      { text: "Daily Practice" },
      { text: "Mock Exams" },
    ],
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=600",
    ctaText: "Explore Program",
    icon: Stethoscope,
    gridClass: "lg:col-span-3 md:col-span-1",
  },
  {
    id: "eamcet",
    category: "State Ranks",
    badge: "EAMCET Specialization",
    title: "EAMCET",
    highlights: [
      { text: "Speed + Accuracy" },
      { text: "Exam Simulation" },
      { text: "Performance Analytics" },
    ],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600",
    ctaText: "Explore Program",
    icon: Award,
    gridClass: "lg:col-span-2 md:col-span-1",
  },
  {
    id: "foundation",
    category: "Grades 6-10",
    badge: "Early Competitive Edge",
    title: "Foundation",
    highlights: [
      { text: "Olympiads" },
      { text: "NTSE Preparation" },
      { text: "Early Competitive Skills" },
    ],
    image: "/images/foundation.png",
    ctaText: "Explore Program",
    icon: Lightbulb,
    gridClass: "lg:col-span-2 md:col-span-1",
  },
  {
    id: "long-term",
    category: "Droppers & Repeaters",
    badge: "Stabilization Cohort",
    title: "Long Term",
    highlights: [
      { text: "Personalized Roadmaps" },
      { text: "Dedicated Mentoring" },
      { text: "Rank Improvement Strategy" },
    ],
    image: "/images/long-term.png",
    ctaText: "Explore Program",
    icon: Compass,
    gridClass: "lg:col-span-2 md:col-span-2",
  },
];

export function ProgramsBentoGrid() {
  return (
    <section 
      id="programs-bento" 
      className="relative w-full py-20 md:py-28 px-6 bg-transparent overflow-hidden scroll-mt-28"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 z-0 bg-grid-lines pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-[#e6f4ea] px-3.5 py-1 text-[10px] font-bold text-[#044e3b] uppercase tracking-wider mb-5">
            <span>Academic Pathways</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#04241a] leading-tight">
            Choose Your Competitive Advantage
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#406b5c] font-medium max-w-2xl mx-auto leading-relaxed">
            Structured programs designed to maximize ranks, confidence, and long-term success.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-stretch">
          
          {PROGRAMS.map((program) => {
            const IconComponent = program.icon;
            const isFeatured = program.id === "jee-adv";
            
            return (
              <div
                key={program.id}
                className={cn(
                  "relative flex flex-col justify-between overflow-hidden rounded-3xl border border-emerald-100/50 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(4,78,59,0.03)] hover:shadow-[0_12px_40px_rgba(4,78,59,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer",
                  program.gridClass
                )}
              >
                {/* Header content of Card */}
                <div className={cn("p-6 sm:p-8 flex flex-col justify-between gap-4", isFeatured ? "lg:w-[48%] lg:min-h-[340px]" : "")}>
                  <div className="space-y-4">
                    {/* Badge */}
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[9px] font-extrabold text-[#044e3b] uppercase tracking-wider border border-emerald-100/60">
                      <IconComponent className="size-3 text-emerald-600" />
                      <span>{program.badge}</span>
                    </span>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#04241a] tracking-tight">
                      {program.title}
                    </h3>

                    {/* Highlights Check list */}
                    <ul className="space-y-2.5">
                      {program.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                          <span className="text-xs text-[#406b5c] font-semibold tracking-wide">
                            {h.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Explore Link CTA */}
                  <div className="pt-2 self-start">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#044e3b] group-hover:text-emerald-700 transition-colors duration-300">
                      <span>{program.ctaText}</span>
                      <ArrowRight className="size-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>

                {/* Visual Area */}
                <div className={cn(
                  "relative w-full overflow-hidden shrink-0 min-h-[180px]",
                  isFeatured ? "lg:w-1/2 lg:min-h-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0" : "h-[180px]"
                )}>
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent z-10" />
                  {isFeatured && (
                    <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-transparent to-transparent z-10" />
                  )}
                  <img
                    src={program.image}
                    alt={program.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
