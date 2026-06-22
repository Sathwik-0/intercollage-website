"use client";

import React, { useRef } from "react";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { ArrowRight, Sparkles, BookOpen, GraduationCap, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface SuccessStory {
  id: string;
  name: string;
  program: string;
  before: string;
  after: string;
  outcomeBadge: string;
  quote: string;
  image: string;
}

const STORIES: SuccessStory[] = [
  {
    id: "1",
    name: "Aarav Reddy",
    program: "JEE Advanced",
    before: "Struggled with Physics",
    after: "AIR 1244",
    outcomeBadge: "IIT Admission",
    quote: "I stopped studying harder and started studying smarter. Stabilizing physics concepts with HODs changed my path.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "2",
    name: "Sai Teja",
    program: "NEET",
    before: "Low Biology Scores",
    after: "MBBS Seat",
    outcomeBadge: "Govt Medical College",
    quote: "NCERT mapping and daily speed drills in biology made sure I finished the paper ahead of time with zero errors.",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "3",
    name: "Harshitha",
    program: "Foundation",
    before: "No Olympiad Base",
    after: "Olympiad Qual.",
    outcomeBadge: "Scholarship Winner",
    quote: "Starting advanced logical math in 8th grade took the fear out of physics proofs when I reached Intermediate.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "4",
    name: "Nikhil",
    program: "Long Term",
    before: "Failed Target Rank",
    after: "Top State Rank",
    outcomeBadge: "Rank Improvement",
    quote: "The personalized analysis isolated exactly which test blocks were limiting my final score output.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "5",
    name: "Akhila",
    program: "EAMCET",
    before: "Average Mock Scores",
    after: "Top Seat",
    outcomeBadge: "University Placement",
    quote: "Transitioning to speed simulation mock drills stabilized my pacing and accuracy benchmarks under pressure.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "6",
    name: "Rahul",
    program: "JEE Main",
    before: "Confidence Issues",
    after: "99+ Percentile",
    outcomeBadge: "National Ranker",
    quote: "Frequent one-on-one evaluations with assigned mentors kept me focused on high-yield chapters only.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400",
  },
];

export function TransformationStories() {
  const containerRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 20,
      opacity: 0,
    },
  };

  return (
    <section 
      id="transformation-stories" 
      className="relative w-full py-20 md:py-28 px-6 bg-transparent overflow-hidden scroll-mt-28"
      ref={containerRef}
    >
      {/* Background Subtle Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-grid-lines pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-[#e6f4ea] px-3.5 py-1 text-[10px] font-bold text-[#044e3b] uppercase tracking-wider">
            <Sparkles className="size-3 text-emerald-600 animate-pulse" />
            <span>Real Student Outcomes</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#04241a] leading-tight">
            From Ambition To Achievement
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#406b5c] font-medium leading-relaxed max-w-2xl mx-auto">
            Every rank, admission, and success story begins with a student who decided to start.
          </p>
        </div>

        {/* Masonry / Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            
            {/* Story 1: Aarav Reddy (JEE Advanced) - Large Card */}
            <TimelineContent
              animationNum={0}
              customVariants={revealVariants}
              timelineRef={containerRef}
              className="flex-1 flex flex-col justify-between rounded-3xl border border-emerald-100/50 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(4,78,59,0.03)] hover:shadow-[0_12px_40px_rgba(4,78,59,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#044e3b08_1px,transparent_1px),linear-gradient(to_bottom,#044e3b08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                <div>
                  {/* Before / After Progress node */}
                  <div className="flex justify-between items-center bg-[#e6f4ea] border border-emerald-100 rounded-2xl p-4.5 mb-6">
                    <div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Before</span>
                      <span className="text-xs font-bold text-slate-700">{STORIES[0].before}</span>
                    </div>
                    <ArrowRight className="size-4.5 text-emerald-600 animate-pulse" />
                    <div className="text-right">
                      <span className="text-[9px] font-bold text-[#044e3b] uppercase tracking-widest block mb-0.5">After</span>
                      <span className="text-xs font-extrabold text-[#044e3b]">{STORIES[0].after}</span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold italic text-[#406b5c] leading-relaxed mb-6">
                    "{STORIES[0].quote}"
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-emerald-100/50 mt-auto">
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-base text-[#04241a] leading-none">
                      {STORIES[0].name}
                    </h3>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                      {STORIES[0].program}
                    </span>
                    <span className="inline-flex rounded-full bg-emerald-50 border border-emerald-100/60 px-2 py-0.5 text-[9px] font-extrabold text-[#044e3b] uppercase tracking-wider">
                      {STORIES[0].outcomeBadge}
                    </span>
                  </div>
                  <div className="relative size-14 rounded-2xl overflow-hidden border border-emerald-100 shadow-sm shrink-0">
                    <img
                      src={STORIES[0].image}
                      alt={STORIES[0].name}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>

            {/* Story 2: Sai Teja (NEET) - Medium Card */}
            <TimelineContent
              animationNum={1}
              customVariants={revealVariants}
              timelineRef={containerRef}
              className="flex-1 flex flex-col justify-between rounded-3xl border border-emerald-100/50 bg-[#044e3b] text-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(4,78,59,0.06)] hover:shadow-[0_12px_40px_rgba(4,78,59,0.12)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex justify-between items-center bg-white/10 border border-white/10 rounded-2xl p-4.5 mb-6">
                    <div>
                      <span className="text-[9px] font-bold text-emerald-200 uppercase tracking-widest block mb-0.5">Before</span>
                      <span className="text-xs font-bold text-emerald-100">{STORIES[1].before}</span>
                    </div>
                    <ArrowRight className="size-4.5 text-emerald-300" />
                    <div className="text-right">
                      <span className="text-[9px] font-bold text-white uppercase tracking-widest block mb-0.5">After</span>
                      <span className="text-xs font-extrabold text-emerald-300">{STORIES[1].after}</span>
                    </div>
                  </div>

                  <p className="text-sm font-medium italic text-emerald-50 leading-relaxed mb-6">
                    "{STORIES[1].quote}"
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-auto">
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-base text-white leading-none">
                      {STORIES[1].name}
                    </h3>
                    <span className="text-[9px] font-bold text-emerald-200 uppercase tracking-wider block">
                      {STORIES[1].program}
                    </span>
                    <span className="inline-flex rounded-full bg-white/10 border border-white/10 px-2 py-0.5 text-[9px] font-extrabold text-white uppercase tracking-wider">
                      {STORIES[1].outcomeBadge}
                    </span>
                  </div>
                  <div className="relative size-14 rounded-2xl overflow-hidden border border-white/10 shadow-sm shrink-0">
                    <img
                      src={STORIES[1].image}
                      alt={STORIES[1].name}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>

          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            
            {/* Story 3: Harshitha (Foundation) */}
            <TimelineContent
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={containerRef}
              className="flex-1 flex flex-col justify-between rounded-3xl border border-emerald-100/50 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(4,78,59,0.03)] hover:shadow-[0_12px_40px_rgba(4,78,59,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex justify-between items-center bg-[#e6f4ea] border border-emerald-100 rounded-2xl p-4.5 mb-6">
                    <div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Before</span>
                      <span className="text-xs font-bold text-slate-700">{STORIES[2].before}</span>
                    </div>
                    <ArrowRight className="size-4.5 text-emerald-600" />
                    <div className="text-right">
                      <span className="text-[9px] font-bold text-[#044e3b] uppercase tracking-widest block mb-0.5">After</span>
                      <span className="text-xs font-extrabold text-[#044e3b]">{STORIES[2].after}</span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold italic text-[#406b5c] leading-relaxed mb-6">
                    "{STORIES[2].quote}"
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-emerald-100/50 mt-auto">
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-base text-[#04241a] leading-none">
                      {STORIES[2].name}
                    </h3>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                      {STORIES[2].program}
                    </span>
                    <span className="inline-flex rounded-full bg-emerald-50 border border-emerald-100/60 px-2 py-0.5 text-[9px] font-extrabold text-[#044e3b] uppercase tracking-wider">
                      {STORIES[2].outcomeBadge}
                    </span>
                  </div>
                  <div className="relative size-14 rounded-2xl overflow-hidden border border-emerald-100 shadow-sm shrink-0">
                    <img
                      src={STORIES[2].image}
                      alt={STORIES[2].name}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>

            {/* Story 4: Nikhil (Long Term) */}
            <TimelineContent
              animationNum={3}
              customVariants={revealVariants}
              timelineRef={containerRef}
              className="flex-1 flex flex-col justify-between rounded-3xl border border-emerald-100/50 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(4,78,59,0.03)] hover:shadow-[0_12px_40px_rgba(4,78,59,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex justify-between items-center bg-[#e6f4ea] border border-emerald-100 rounded-2xl p-4.5 mb-6">
                    <div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Before</span>
                      <span className="text-xs font-bold text-slate-700">{STORIES[3].before}</span>
                    </div>
                    <ArrowRight className="size-4.5 text-emerald-600" />
                    <div className="text-right">
                      <span className="text-[9px] font-bold text-[#044e3b] uppercase tracking-widest block mb-0.5">After</span>
                      <span className="text-xs font-extrabold text-[#044e3b]">{STORIES[3].after}</span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold italic text-[#406b5c] leading-relaxed mb-6">
                    "{STORIES[3].quote}"
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-emerald-100/50 mt-auto">
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-base text-[#04241a] leading-none">
                      {STORIES[3].name}
                    </h3>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                      {STORIES[3].program}
                    </span>
                    <span className="inline-flex rounded-full bg-emerald-50 border border-emerald-100/60 px-2 py-0.5 text-[9px] font-extrabold text-[#044e3b] uppercase tracking-wider">
                      {STORIES[3].outcomeBadge}
                    </span>
                  </div>
                  <div className="relative size-14 rounded-2xl overflow-hidden border border-emerald-100 shadow-sm shrink-0">
                    <img
                      src={STORIES[3].image}
                      alt={STORIES[3].name}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>

            {/* Story 5: Akhila (EAMCET) */}
            <TimelineContent
              animationNum={4}
              customVariants={revealVariants}
              timelineRef={containerRef}
              className="flex-1 flex flex-col justify-between rounded-3xl border border-emerald-100/50 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(4,78,59,0.03)] hover:shadow-[0_12px_40px_rgba(4,78,59,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex justify-between items-center bg-[#e6f4ea] border border-emerald-100 rounded-2xl p-4.5 mb-6">
                    <div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Before</span>
                      <span className="text-xs font-bold text-slate-700">{STORIES[4].before}</span>
                    </div>
                    <ArrowRight className="size-4.5 text-emerald-600" />
                    <div className="text-right">
                      <span className="text-[9px] font-bold text-[#044e3b] uppercase tracking-widest block mb-0.5">After</span>
                      <span className="text-xs font-extrabold text-[#044e3b]">{STORIES[4].after}</span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold italic text-[#406b5c] leading-relaxed mb-6">
                    "{STORIES[4].quote}"
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-emerald-100/50 mt-auto">
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-base text-[#04241a] leading-none">
                      {STORIES[4].name}
                    </h3>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                      {STORIES[4].program}
                    </span>
                    <span className="inline-flex rounded-full bg-emerald-50 border border-emerald-100/60 px-2 py-0.5 text-[9px] font-extrabold text-[#044e3b] uppercase tracking-wider">
                      {STORIES[4].outcomeBadge}
                    </span>
                  </div>
                  <div className="relative size-14 rounded-2xl overflow-hidden border border-emerald-100 shadow-sm shrink-0">
                    <img
                      src={STORIES[4].image}
                      alt={STORIES[4].name}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>

          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            
            {/* Story 6: Rahul (JEE Main) */}
            <TimelineContent
              animationNum={5}
              customVariants={revealVariants}
              timelineRef={containerRef}
              className="flex-1 flex flex-col justify-between rounded-3xl border border-emerald-100/50 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(4,78,59,0.03)] hover:shadow-[0_12px_40px_rgba(4,78,59,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex justify-between items-center bg-[#e6f4ea] border border-emerald-100 rounded-2xl p-4.5 mb-6">
                    <div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Before</span>
                      <span className="text-xs font-bold text-slate-700">{STORIES[5].before}</span>
                    </div>
                    <ArrowRight className="size-4.5 text-emerald-600" />
                    <div className="text-right">
                      <span className="text-[9px] font-bold text-[#044e3b] uppercase tracking-widest block mb-0.5">After</span>
                      <span className="text-xs font-extrabold text-[#044e3b]">{STORIES[5].after}</span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold italic text-[#406b5c] leading-relaxed mb-6">
                    "{STORIES[5].quote}"
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-emerald-100/50 mt-auto">
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-base text-[#04241a] leading-none">
                      {STORIES[5].name}
                    </h3>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                      {STORIES[5].program}
                    </span>
                    <span className="inline-flex rounded-full bg-emerald-50 border border-emerald-100/60 px-2 py-0.5 text-[9px] font-extrabold text-[#044e3b] uppercase tracking-wider">
                      {STORIES[5].outcomeBadge}
                    </span>
                  </div>
                  <div className="relative size-14 rounded-2xl overflow-hidden border border-emerald-100 shadow-sm shrink-0">
                    <img
                      src={STORIES[5].image}
                      alt={STORIES[5].name}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>

            {/* Story 7: Start Your Journey Call to Action Card (Matching guillermo CTAs) */}
            <TimelineContent
              animationNum={6}
              customVariants={revealVariants}
              timelineRef={containerRef}
              className="flex-1 flex flex-col justify-between rounded-3xl border border-emerald-100/50 bg-[#e6f4ea] p-6 sm:p-8 shadow-[0_8px_30px_rgba(4,78,59,0.03)] hover:shadow-[0_12px_40px_rgba(4,78,59,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#044e3b08_1px,transparent_1px),linear-gradient(to_bottom,#044e3b08_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 text-[9px] font-extrabold text-[#044e3b] uppercase tracking-widest mb-4">
                    Admission Cohort Open
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#04241a] leading-tight">
                    Start Your Own Transformation
                  </h3>
                  <p className="text-xs text-[#406b5c] font-semibold leading-relaxed mt-2">
                    Schedule a diagnostic baseline review with our senior HODs today. Locate your weak conceptual areas and establish a roadmap for IIT & AIIMS.
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-100/50 mt-auto flex items-center justify-between">
                  <span className="text-xs font-bold text-[#044e3b] group-hover:text-emerald-700 transition-colors flex items-center gap-1.5">
                    <span>Schedule Free Counseling</span>
                    <ArrowRight className="size-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </TimelineContent>

          </div>

        </div>

        {/* Elegant Bottom Line border decoration to match testimonial.tsx source */}
        <div className="absolute border-b border-emerald-100/50 bottom-4 h-16 z-[2] md:w-full w-[90%] md:left-0 left-[5%] pointer-events-none">
          <div className="container mx-auto w-full h-full relative before:absolute before:-left-2 before:-bottom-1.5 before:w-3 before:h-3 before:bg-white before:rounded-full before:border before:border-emerald-100 after:absolute after:-right-2 after:-bottom-1.5 after:w-3 after:h-3 after:bg-white after:rounded-full after:border after:border-emerald-100"></div>
        </div>

      </div>
    </section>
  );
}
