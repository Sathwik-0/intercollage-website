"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";
import { AuthorityWall } from "@/components/sections/authority-wall";
import { PerformanceCommandCenter } from "@/components/sections/performance-command-center";
import { ParentConfidenceCenter } from "@/components/sections/parent-confidence-center";
import { FutureMap } from "@/components/sections/futuremap";
import { ProgramsBentoGrid } from "@/components/sections/programs-bento-grid";
import { TransformationStories } from "@/components/sections/transformation-stories";
import { FacultyExcellence } from "@/components/sections/faculty-excellence";
import { CampusExperience } from "@/components/sections/campus-experience";
import { LearningJourney } from "@/components/sections/learning-journey";
import { ProofCenter } from "@/components/sections/proof-center";
import { UrgencyLayer } from "@/components/sections/urgency-layer";
import { PremiumCounselingExperience } from "@/components/sections/premium-counseling-experience";
import { Footer } from "@/components/sections/footer";
import { GlassFilter } from "@/components/ui/liquid-glass";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="relative min-h-screen w-full bg-transparent text-foreground overflow-hidden flex flex-col items-center">
      {/* Background Grid Lines (Sleek Vercel Grid) */}
      <div className="absolute inset-0 z-0 bg-grid-lines pointer-events-none opacity-30" />

      {/* Global SVG Filters for Liquid Glass */}
      <GlassFilter />

      {/* Ambient Backdrop Glows */}
      <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[15%] w-[700px] h-[700px] rounded-full bg-emerald-500/3 blur-[150px] pointer-events-none z-0" />

      {/* Navigation System */}
      <Navbar activeSection={activeSection} onNavClick={setActiveSection} />

      {/* Main Content Area */}
      <main className="relative z-10 w-full flex-1 flex flex-col">
        <Hero />
        <AuthorityWall />
        <PerformanceCommandCenter />
        <ParentConfidenceCenter />
        <FutureMap />
        <ProgramsBentoGrid />
        <TransformationStories />
        <FacultyExcellence />
        <CampusExperience />
        <LearningJourney />
        <ProofCenter />
        <UrgencyLayer />
        <PremiumCounselingExperience />
        <Footer />
      </main>
    </div>
  );
}
