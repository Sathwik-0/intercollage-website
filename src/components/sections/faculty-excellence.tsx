"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Marquee } from "@/components/ui/marquee";
import { GraduationCap, Trophy, Award, BookOpen, Users, Medal, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FacultyMember {
  id: string;
  name: string;
  subject: string;
  experience: string;
  rankAchievement: string;
  image: string;
  tags: string[];
}

const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "fac-1",
    name: "Dr. Ramesh Varma",
    subject: "Physics Faculty",
    experience: "22+ Years Exp",
    rankAchievement: "Produced AIR 27, AIR 54",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    tags: ["JEE Advanced", "Physics HOD", "Olympiads"],
  },
  {
    id: "fac-2",
    name: "Dr. Anjali Reddy",
    subject: "Organic Chemistry HOD",
    experience: "18+ Years Exp",
    rankAchievement: "Guided 800+ MBBS Admissions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    tags: ["NEET Specialist", "Chemistry HOD", "Revision Strategy"],
  },
  {
    id: "fac-3",
    name: "Prof. Karthik Rao",
    subject: "Mathematics Senior Faculty",
    experience: "15+ Years Exp",
    rankAchievement: "Mentored 1200+ IIT Selections",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400",
    tags: ["Calculus Expert", "JEE Advanced", "Problem Solving"],
  },
  {
    id: "fac-4",
    name: "Prof. S. Srinivas",
    subject: "Botany Senior Faculty",
    experience: "20+ Years Exp",
    rankAchievement: "Guided 950+ NEET Selections",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    tags: ["NCERT Expert", "Botany Specialist", "Concept Mastery"],
  },
  {
    id: "fac-5",
    name: "Dr. Neha Sharma",
    subject: "Zoology HOD",
    experience: "16+ Years Exp",
    rankAchievement: "Produced AIIMS AIR 12 & 35",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    tags: ["Zoology Head", "AIIMS Focus", "Revision Planning"],
  },
  {
    id: "fac-6",
    name: "Prof. Amit Mishra",
    subject: "Physical Chemistry Faculty",
    experience: "17+ Years Exp",
    rankAchievement: "Mentored AIR 89 & 104 in JEE Adv",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    tags: ["Physical Chemistry", "JEE Advanced", "Olympiads"],
  },
];

export function FacultyExcellence() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section 
      id="faculty" 
      className="relative w-full py-20 md:py-28 bg-transparent overflow-hidden scroll-mt-28"
    >
      {/* Background Subtle Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-grid-lines pointer-events-none opacity-20" />

      <div className="relative z-10 w-full space-y-20">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto px-6 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-[#e6f4ea] px-3.5 py-1 text-[9px] font-extrabold text-brand-950 uppercase tracking-[0.18em]">
            <Sparkles className="size-3 text-brand-600 animate-pulse" />
            <span>Faculty Excellence™</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#04241a] leading-tight">
            Learn from Mentors Who Have Produced Top Ranks Across India
          </h2>
          <p className="text-sm sm:text-base text-[#406b5c] font-medium leading-relaxed max-w-2xl mx-auto">
            Our academic team combines decades of teaching experience with proven IIT-JEE, NEET, and Board examination success.
          </p>
        </div>

        {/* Faculty Infinite Marquee */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24 md:w-44 bg-gradient-to-r from-[#f4faf6] via-[#f4faf6]/80 to-transparent" />
          <div className="pointer-events-none absolute top-0 bottom-0 right-0 z-10 w-24 md:w-44 bg-gradient-to-l from-[#f4faf6] via-[#f4faf6]/80 to-transparent" />

          <Marquee className="[--gap:2rem] [--duration:45s]" pauseOnHover>
            {FACULTY_MEMBERS.map((fac) => {
              const isActive = hoveredId === fac.id;
              const isDimmed = hoveredId !== null && !isActive;

              return (
                <div
                  key={fac.id}
                  className={cn(
                    "flex-shrink-0 w-80 rounded-3xl border border-brand-100/50 bg-white/90 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgba(4,78,59,0.03)] transition-all duration-300 cursor-pointer relative overflow-hidden group select-none",
                    isDimmed ? "opacity-60 scale-98" : "opacity-100",
                    isActive ? "shadow-[0_12px_40px_rgba(4,78,59,0.08)] -translate-y-1 bg-white border-brand-200/80" : ""
                  )}
                  onMouseEnter={() => setHoveredId(fac.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="flex flex-col space-y-5 h-full">
                    
                    {/* Faculty Photo */}
                    <div className="relative w-full h-52 rounded-2xl overflow-hidden border border-brand-100/60 bg-slate-50 shrink-0">
                      <img
                        src={fac.image}
                        alt={fac.name}
                        className={cn(
                          "w-full h-full object-cover object-top transition-all duration-500",
                          isActive ? "scale-105" : "grayscale opacity-90"
                        )}
                      />
                      <div className="absolute top-3 left-3 bg-[#e6f4ea] border border-brand-200/60 rounded-full px-3 py-1 shadow-sm">
                        <span className="text-[9px] font-bold text-brand-950 uppercase tracking-wider block">
                          {fac.experience}
                        </span>
                      </div>
                    </div>

                    {/* Faculty Info */}
                    <div className="space-y-3 flex-grow flex flex-col justify-between">
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-lg text-[#04241a] tracking-tight leading-snug">
                          {fac.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#406b5c] uppercase tracking-wider block">
                          {fac.subject}
                        </p>
                      </div>

                      {/* Rank Achievement */}
                      <div className="bg-[#e6f4ea]/40 border border-brand-100/60 rounded-2xl p-3 flex items-center gap-2.5">
                        <Trophy className="size-4 text-brand-600 shrink-0" />
                        <span className="text-xs font-bold text-brand-950">
                          {fac.rankAchievement}
                        </span>
                      </div>

                      {/* Expertise Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {fac.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex rounded-full bg-brand-50/60 border border-brand-100/60 px-2 py-0.5 text-[9px] font-extrabold text-brand-950 uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>

        {/* Faculty Impact Dashboard */}
        <div ref={ref} className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
          
          {/* Card 1: Experience */}
          <div className="flex flex-col justify-between rounded-3xl border border-brand-100/50 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(4,78,59,0.03)] hover:shadow-[0_12px_40px_rgba(4,78,59,0.06)] hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="size-10 rounded-xl bg-[#e6f4ea] border border-brand-100 flex items-center justify-center text-brand-950">
                <GraduationCap className="size-5" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#04241a] tracking-tight">
                {inView ? <CountUp start={0} end={150} duration={1.8} suffix="+" /> : "0+"}
              </h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">
                Years Combined
              </p>
              <p className="text-xs font-semibold text-[#406b5c] leading-relaxed">
                Combined teaching experience of senior HODs and subject matter mentors.
              </p>
            </div>
          </div>

          {/* Card 2: Selections */}
          <div className="flex flex-col justify-between rounded-3xl border border-brand-100/50 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(4,78,59,0.03)] hover:shadow-[0_12px_40px_rgba(4,78,59,0.06)] hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="size-10 rounded-xl bg-[#e6f4ea] border border-brand-100 flex items-center justify-center text-brand-950">
                <Users className="size-5" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#04241a] tracking-tight">
                {inView ? <CountUp start={0} end={5000} duration={2.2} suffix="+" separator="," /> : "0+"}
              </h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">
                Selections Mentored
              </p>
              <p className="text-xs font-semibold text-[#406b5c] leading-relaxed">
                Successful national test selection paths mentored by our primary active faculty.
              </p>
            </div>
          </div>

          {/* Card 3: IIT/NIT */}
          <div className="flex flex-col justify-between rounded-3xl border border-brand-100/50 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(4,78,59,0.03)] hover:shadow-[0_12px_40px_rgba(4,78,59,0.06)] hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="size-10 rounded-xl bg-[#e6f4ea] border border-brand-100 flex items-center justify-center text-brand-950">
                <Award className="size-5" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#04241a] tracking-tight">
                {inView ? <CountUp start={0} end={2500} duration={2} suffix="+" separator="," /> : "0+"}
              </h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">
                IIT & NIT Seats
              </p>
              <p className="text-xs font-semibold text-[#406b5c] leading-relaxed">
                Admissions secured across Indian Institutes of Technology & National Institutes of Technology.
              </p>
            </div>
          </div>

          {/* Card 4: MBBS */}
          <div className="flex flex-col justify-between rounded-3xl border border-brand-100/50 bg-brand-950 text-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(4,78,59,0.06)] hover:shadow-[0_12px_40px_rgba(4,78,59,0.12)] hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="size-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-brand-300">
                <Medal className="size-5" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {inView ? <CountUp start={0} end={1800} duration={2.4} suffix="+" separator="," /> : "0+"}
              </h3>
              <p className="text-xs font-bold text-brand-200 uppercase tracking-widest leading-none">
                MBBS Admissions
              </p>
              <p className="text-xs font-medium text-brand-50 leading-relaxed">
                Government medical college admissions and AIIMS placements secured by medical aspirants.
              </p>
            </div>
          </div>

        </div>

        {/* Premium Trust Panel */}
        <div className="max-w-7xl mx-auto px-6 w-full animate-in fade-in duration-700">
          <div className="relative rounded-3xl border border-brand-100/50 bg-[#e6f4ea] p-8 md:p-10 shadow-[0_8px_30px_rgba(4,78,59,0.03)] overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#044e3b08_1px,transparent_1px),linear-gradient(to_bottom,#044e3b08_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#04241a] leading-tight">
                  The Difference Between Teaching and Producing Results
                </h3>
                <p className="text-xs sm:text-sm text-[#406b5c] font-semibold leading-relaxed">
                  Our faculty members are not just subject experts. They are mentors who understand exam psychology, rank-building strategies, revision systems, and long-term academic development.
                </p>
              </div>

              <div className="flex flex-wrap md:flex-nowrap gap-3 shrink-0">
                <div className="flex items-center gap-1.5 rounded-full bg-white border border-brand-100 px-4 py-1.5">
                  <CheckCircle2 className="size-4 text-brand-600 shrink-0" />
                  <span className="text-[10px] font-bold text-brand-950 uppercase tracking-wider">JEE Main & Adv</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white border border-brand-100 px-4 py-1.5">
                  <CheckCircle2 className="size-4 text-brand-600 shrink-0" />
                  <span className="text-[10px] font-bold text-brand-950 uppercase tracking-wider">NEET Biology & Prep</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white border border-brand-100 px-4 py-1.5">
                  <CheckCircle2 className="size-4 text-brand-600 shrink-0" />
                  <span className="text-[10px] font-bold text-brand-950 uppercase tracking-wider">State & CBSE Boards</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FacultyExcellence;
