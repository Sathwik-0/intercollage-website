"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Phone, Calendar, Menu, X } from "lucide-react";
import { GlassEffect } from "./liquid-glass";
import { CampusVisitDialog } from "@/components/ui/campus-visit-dialog";

/* Hallmark · component: navbar · genre: modern-minimal · theme: light-green
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (4.5:1 text-to-bg)
 */

interface NavbarProps {
  activeSection?: string;
  onNavClick?: (section: string) => void;
}

export function Navbar({ activeSection = "home", onNavClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Handle scroll trigger to compress height
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "results", label: "Results" },
    { id: "programs", label: "Programs" },
    { id: "faculty", label: "Faculty" },
    { id: "campus", label: "Campus" },
    { id: "success-stories", label: "Success Stories" },
    { id: "admissions", label: "Admissions" },
  ];

  // Active section tracking via scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      let maxTop = -Infinity;
      
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          // Detect if section is near the top of the viewport
          const sectionTop = section.getBoundingClientRect().top;
          // Find the section closest to the top of the viewport (max top <= 150)
          if (sectionTop <= 150 && sectionTop > maxTop) {
            maxTop = sectionTop;
            current = item.id;
          }
        }
      });
      
      // Force last item if we are at the absolute bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        current = "admissions";
      }
      
      if (current && current !== activeSection && onNavClick) {
        onNavClick(current);
      }
    };

    // Add passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, onNavClick]);

  const handleItemClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (onNavClick) onNavClick(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* SVG Liquid Glass Distortion Filter (Hidden Layer) */}
      <svg style={{ display: "none" }}>
        <filter id="nav-glass-distortion">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.002 0.005"
            numOctaves="1"
            seed="24"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="1.5" result="softMap" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="10" /* Keep it elegant and readable */
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Main Wrapper Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none"
      >
        <div
          className={cn(
            "relative w-full max-w-7xl flex items-center justify-between rounded-[24px] pointer-events-auto transition-all duration-500",
            isScrolled ? "px-6 py-2.5 max-w-6xl mt-2" : "px-8 py-5"
          )}
        >
          {/* BACKGROUND LAYER: Light Mode premium glass panel */}
          <div
            className={cn(
              "absolute inset-0 rounded-[24px] transition-all duration-500 z-0",
              isScrolled 
                ? "bg-white/80 backdrop-blur-xl border border-brand-100/50 shadow-[0_8px_30px_rgba(4,78,59,0.06)]" 
                : "bg-transparent border border-transparent"
            )}
            style={isScrolled ? {
              filter: "url(#nav-glass-distortion)",
            } : {}}
          />

          {/* LEFT: Branding Logo & Wordmark (Relative, Z-10 to stay sharp) */}
          <div 
            onClick={() => handleItemClick("home")} 
            className="relative z-10 flex items-center gap-2.5 cursor-pointer group select-none"
          >
            {/* Elegant Prestige Shield Logo - Emerald Theme */}
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 via-brand-600 to-brand-accent-700 p-[1px] shadow-[0_4px_10px_rgba(16,185,129,0.15)] group-hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-full h-full rounded-[7px] bg-[#f4faf6] text-brand-600">
                <svg className="w-4.5 h-4.5 text-brand-600 group-hover:text-brand-accent-700 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            {/* Wordmark */}
            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-[-0.03em] leading-none text-brand-950 text-base group-hover:text-brand-600 transition-colors">
                Inter-College
              </span>
            </div>
          </div>

          {/* CENTER: Navigation Links (Desktop) */}
          <nav className="relative z-10 hidden lg:flex items-center gap-1 rounded-full bg-brand-500/[0.03] border border-brand-500/[0.06] p-1 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={cn(
                    "relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide cursor-pointer transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50",
                    isActive ? "text-white font-bold" : "text-[#406b5c] hover:text-brand-950"
                  )}
                >
                  {/* Gliding Active Indicator - Emerald Green style */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-brand-950 rounded-full z-0 shadow-sm"
                      transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.8 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* RIGHT: CTAs (Desktop) */}
          <div className="relative z-10 hidden lg:flex items-center gap-4">
            {/* Secondary CTA: Call Now */}
            <a 
              href="tel:+919876543210" 
              className="group/call flex items-center gap-2 text-xs font-semibold text-[#406b5c] hover:text-brand-950 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-500/[0.03] border border-brand-500/[0.06] group-hover/call:bg-brand-500/[0.08] group-hover/call:border-brand-500/[0.12] transition-all">
                <Phone className="size-3 text-[#406b5c] group-hover/call:text-brand-950 transition-colors" />
              </div>
              <span>Call Counselor</span>
            </a>

            {/* Primary CTA: Book Campus Visit (Solid Emerald Green Capsule) */}
            <CampusVisitDialog>
              <button
                className="rounded-full bg-brand-950 hover:bg-[#03382a] text-white text-xs font-bold tracking-wide px-5 py-2.5 transition-all shadow-[0_4px_12px_rgba(4,78,59,0.15)] hover:shadow-[0_6px_16px_rgba(4,78,59,0.25)] active:scale-95 cursor-pointer"
              >
                Book Campus Visit
              </button>
            </CampusVisitDialog>
          </div>

          {/* Hamburger Trigger (Mobile) */}
          <div className="relative z-10 lg:hidden flex items-center gap-3">
            <a 
              href="tel:+919876543210" 
              className="flex items-center justify-center w-11 h-11 rounded-full bg-brand-500/[0.03] border border-brand-500/[0.06] text-[#406b5c] hover:text-brand-950 cursor-pointer active:scale-95 transition-all"
            >
              <Phone className="size-4 text-brand-600" />
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-11 h-11 rounded-lg bg-brand-500/[0.03] border border-brand-500/[0.06] text-brand-950 cursor-pointer active:scale-95 transition-all focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </motion.header>
 
      {/* MOBILE DRAWER EXPERIENCE */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "110%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "110%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden rounded-2xl overflow-hidden"
          >
            {/* Isolated background to avoid text warp */}
            <div 
              className="absolute inset-0 bg-white/95 backdrop-blur-2xl border border-brand-100/80 shadow-[0_24px_60px_rgba(4,78,59,0.08)] rounded-2xl z-0"
              style={{ filter: "url(#nav-glass-distortion)" }}
            />

            <div className="relative z-10 flex flex-col p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] gap-6">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={cn(
                        "w-full text-left py-3.5 px-4 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer",
                        isActive 
                          ? "bg-brand-950/10 text-brand-950 border-l-2 border-brand-950" 
                          : "text-[#406b5c] hover:text-brand-950 hover:bg-brand-950/5"
                      )}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              <div className="flex flex-col gap-3 border-t border-brand-100 pt-4">
                <a 
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-brand-100 bg-brand-950/5 text-xs font-semibold text-brand-950 hover:bg-brand-950/10 transition-all cursor-pointer"
                >
                  <Phone className="size-3.5 text-brand-600" />
                  Call Counselor
                </a>
                
                <CampusVisitDialog>
                  <button
                    className="w-full rounded-xl bg-brand-950 hover:bg-[#03382a] text-white py-3.5 text-xs font-bold tracking-wide transition-all shadow-[0_4px_12px_rgba(4,78,59,0.15)] cursor-pointer"
                  >
                    Book Campus Visit
                  </button>
                </CampusVisitDialog>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
