/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
"use client";

import React, { useRef } from "react";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import InkReveal from "@/components/ui/ink-reveal";
import { CampusVisitDialog } from "@/components/ui/campus-visit-dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Landmark } from "lucide-react";

export function CampusExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [hasHover, setHasHover] = React.useState(false);

  React.useEffect(() => {
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
    setHasHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
    hidden: {
      y: -12,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
    hidden: {
      opacity: 0,
    },
  };

  return (
    <section
      id="campus"
      className="relative py-20 md:py-28 px-4 bg-[#f4faf6] border-t border-emerald-100/50 scroll-mt-28 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Subtle Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-grid-lines pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative">
          {/* Header with socials */}
          <div className="flex justify-between items-center mb-8 w-full z-20">
            <div className="flex items-center gap-2">
              <span className="inline-flex size-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 animate-spin">
                <Sparkles className="size-3" />
              </span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={sectionRef}
                customVariants={revealVariants}
                className="text-xs font-bold text-emerald-800 uppercase tracking-widest"
              >
                The Future Learning Ecosystem
              </TimelineContent>
            </div>
            
            {/* Premium Social Links */}
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.facebook.com/",
                  svg: (
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                  )
                },
                {
                  href: "https://www.instagram.com/",
                  svg: (
                    <svg className="size-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  )
                },
                {
                  href: "https://www.linkedin.com/",
                  svg: (
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )
                },
                {
                  href: "https://www.youtube.com/",
                  svg: (
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.522 3.5 12 3.5 12 3.5s-7.522 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.029 0 12 0 12s0 3.971.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.478 20.5 12 20.5 12 20.5s7.522 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.971 24 12 24 12s0-3.971-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <TimelineContent
                  key={idx}
                  as="a"
                  animationNum={idx + 1}
                  timelineRef={sectionRef}
                  customVariants={revealVariants}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "size-8 border border-emerald-100 bg-white/70 transition-all rounded-lg flex items-center justify-center cursor-pointer text-emerald-800 shadow-sm",
                    hasHover && "hover:bg-emerald-50 hover:border-emerald-300"
                  )}
                >
                  {item.svg}
                </TimelineContent>
              ))}
            </div>
          </div>

          {/* Interactive Image Box with SVG Clip Path */}
          <div className="relative w-full mb-10 overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-950/5 group shadow-[0_12px_40px_rgba(4,78,59,0.06)]">
            <TimelineContent
              as="figure"
              animationNum={5}
              timelineRef={sectionRef}
              customVariants={scaleVariants}
              className="relative w-full aspect-[2.5/1] min-h-[300px] rounded-3xl overflow-hidden"
            >
              {/* Underlay: The Premium Campus Photo */}
              <motion.img
                ref={imgRef}
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
                alt="Olympus Academic Campus"
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                initial={{ opacity: 0 }}
                animate={imageLoaded ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onLoad={() => setImageLoaded(true)}
                style={{ willChange: "opacity" }}
              />

              {/* InkReveal Canvas Overlay */}
              <InkReveal
                maskColor={[244, 250, 246]}
                brushSize={140}
                lifetime={800}
                className="absolute inset-0 pointer-events-auto block"
              />
              
              {/* Micro-Interaction Indicator */}
              <div className="absolute bottom-4 right-4 z-10 pointer-events-none bg-emerald-950/80 backdrop-blur-md border border-emerald-700/30 text-white rounded-lg px-3 py-1.5 text-[10px] tracking-wider font-extrabold uppercase flex items-center gap-1.5 opacity-90 group-hover:opacity-0 transition-opacity duration-300">
                <Landmark className="size-3 animate-bounce" />
                <span className="hidden md:inline">Hover to Reveal</span>
                <span className="md:hidden">Swipe to Reveal</span>
              </div>
            </TimelineContent>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center gap-6 justify-between border-b border-emerald-100 pb-8 mb-8 text-sm">
            <TimelineContent
              as="div"
              animationNum={6}
              timelineRef={sectionRef}
              customVariants={revealVariants}
              className="flex flex-wrap gap-8"
            >
              <div className="flex items-center gap-2">
                <span className="text-emerald-700 font-extrabold text-lg sm:text-2xl">15+</span>
                <span className="text-emerald-900/60 font-medium tracking-wide">Research Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-700 font-extrabold text-lg sm:text-2xl">85,000+</span>
                <span className="text-emerald-900/60 font-medium tracking-wide">Academic Volumes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-700 font-extrabold text-lg sm:text-2xl">4.0 Acres</span>
                <span className="text-emerald-900/60 font-medium tracking-wide">Eco-Campus</span>
              </div>
            </TimelineContent>

            <TimelineContent
              as="div"
              animationNum={7}
              timelineRef={sectionRef}
              customVariants={revealVariants}
              className="flex items-center gap-2"
            >
              <span className="text-emerald-700 font-extrabold text-lg sm:text-2xl">100%</span>
              <span className="text-emerald-900/60 font-medium tracking-wide">Smart Classrooms</span>
            </TimelineContent>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Main Copy */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-emerald-950 tracking-tight leading-[115%]">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.06}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 25,
                  delay: 0.2,
                }}
              >
                A World-Class Campus Engineered to Nurture Global Leaders.
              </VerticalCutReveal>
            </h2>

            <TimelineContent
              as="div"
              animationNum={8}
              timelineRef={sectionRef}
              customVariants={revealVariants}
              className="grid sm:grid-cols-2 gap-8 text-[#406b5c] text-sm leading-relaxed"
            >
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-widest">
                  Academic Core
                </h4>
                <p className="text-justify font-medium">
                  Our infrastructure represents the absolute pinnacle of educational architecture. By combining high-ceilinged, digital-first lecture wings with immersive test-prep chambers and a state-of-the-art library, we create an environment built for deep focus and elite productivity.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-widest">
                  Creative Commons
                </h4>
                <p className="text-justify font-medium">
                  We believe that genius requires recovery. The Olympus campus features open-air botanical discussion courtyards, quiet reflection lounges, and active recreation spaces designed to lower stress levels, eliminate cognitive fatigue, and foster organic collaboration.
                </p>
              </div>
            </TimelineContent>
          </div>

          {/* Right Profile & Call-to-Action */}
          <div className="md:col-span-1 bg-white/70 border border-emerald-100/60 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[220px]">
            <div>
              <TimelineContent
                as="div"
                animationNum={9}
                timelineRef={sectionRef}
                customVariants={revealVariants}
                className="text-emerald-800 text-xl font-extrabold tracking-wide mb-1"
              >
                OLYMPUS
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={sectionRef}
                customVariants={revealVariants}
                className="text-xs font-bold text-emerald-950/50 uppercase tracking-widest mb-4"
              >
                The Ultimate Academic Habitat
              </TimelineContent>
              <TimelineContent
                as="p"
                animationNum={11}
                timelineRef={sectionRef}
                customVariants={revealVariants}
                className="text-[#406b5c] text-xs font-medium leading-relaxed mb-6"
              >
                Ready to witness a campus engineered for Stanford & IIT-level performance? Experience our labs, libraries, and classrooms firsthand.
              </TimelineContent>
            </div>

            <TimelineContent
              as="div"
              animationNum={12}
              timelineRef={sectionRef}
              customVariants={revealVariants}
            >
              <div className="pt-2">
                <CampusVisitDialog>
                  <Button 
                    className={cn(
                      "bg-[#04241a] hover:bg-[#044e3b] text-white rounded-xl px-6 py-6 font-bold text-[11px] tracking-[0.2em] shadow-sm transition-all duration-300 group",
                      hasHover && "hover:-translate-y-0.5 hover:shadow-md"
                    )}
                  >
                    SCHEDULE A SITE TOUR <ArrowRight className="size-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CampusVisitDialog>
              </div>
            </TimelineContent>
          </div>
        </div>
      </div>
    </section>
  );
}
