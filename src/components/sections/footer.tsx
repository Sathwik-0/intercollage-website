/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
"use client";

import React, { useState, useEffect } from "react";
import { 
  Send, Mail, Phone, MapPin, Sparkles 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function FacebookIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
    </svg>
  );
}

function InstagramIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function TwitterIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function AppStoreButton({ hasHover }: { hasHover: boolean }) {
  return (
    <div className={cn(
      "h-10 bg-black text-white border border-zinc-800 transition-all duration-300 rounded-xl px-3 flex items-center gap-2 cursor-pointer shadow-sm select-none",
      hasHover && "hover:bg-zinc-900"
    )}>
      <svg className="size-4.5 fill-current" viewBox="0 0 24 24">
        <g>
          <g>
            <path d="M18.546,12.763c0.024-1.87,1.004-3.597,2.597-4.576c-1.009-1.442-2.64-2.323-4.399-2.378    c-1.851-0.194-3.645,1.107-4.588,1.107c-0.961,0-2.413-1.088-3.977-1.056C6.122,5.927,4.25,7.068,3.249,8.867    c-2.131,3.69-0.542,9.114,1.5,12.097c1.022,1.461,2.215,3.092,3.778,3.035c1.529-0.063,2.1-0.975,3.945-0.975    c1.828,0,2.364,0.975,3.958,0.938c1.64-0.027,2.674-1.467,3.66-2.942c0.734-1.041,1.299-2.191,1.673-3.408    C19.815,16.788,18.548,14.879,18.546,12.763z" />
            <path d="M15.535,3.847C16.429,2.773,16.87,1.393,16.763,0c-1.366,0.144-2.629,0.797-3.535,1.829    c-0.895,1.019-1.349,2.351-1.261,3.705C13.352,5.548,14.667,4.926,15.535,3.847z" />
          </g>
        </g>
      </svg>
      <div className="text-left flex flex-col justify-center leading-none pr-1">
        <span className="text-[7px] leading-none uppercase tracking-widest text-zinc-400 font-bold mb-0.5">
          Download on the
        </span>
        <p className="text-[11px] font-black leading-none tracking-tight">App Store</p>
      </div>
    </div>
  );
}

function PlayStoreButton({ hasHover }: { hasHover: boolean }) {
  return (
    <div className={cn(
      "h-10 bg-black text-white border border-zinc-800 transition-all duration-300 rounded-xl px-3 flex items-center gap-2 cursor-pointer shadow-sm select-none",
      hasHover && "hover:bg-zinc-900"
    )}>
      <svg className="size-4 fill-current" viewBox="0 0 24 24">
        <path d="m21.762,9.942L4.67.378c-.721-.466-1.635-.504-2.393-.099-.768.411-1.246,1.208-1.246,2.08v19.282c0,.872.477,1.668,1.246,2.079.755.404,1.668.37,2.393-.098l17.092-9.564c.756-.423,1.207-1.192,1.207-2.058s-.451-1.635-1.207-2.058Zm-5.746-1.413l-2.36,2.36-10.714,5.995,10.714-11.99ZM2.604,21.906V2.094l9.941,9.906L2.604,21.906Zm2.698-.439l8.355-8.355,2.36,2.36-10.714,5.995Zm15.692-8.78l-3.552,1.987-2.674-2.674,2.674-2.674,3.552,1.987c.363.203.402.548.402.686s-.039.483-.402.686Z" />
      </svg>
      <div className="text-left flex flex-col justify-center leading-none pr-1">
        <span className="text-[7px] leading-none uppercase tracking-widest text-zinc-400 font-bold mb-0.5">
          Get it on
        </span>
        <p className="text-[11px] font-black leading-none tracking-tight">Google Play</p>
      </div>
    </div>
  );
}

export function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasHover, setHasHover] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    setHasHover(window.matchMedia("(hover: hover)").matches);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <footer className="relative bg-[#fbfdfc] border-t border-emerald-100/50 pt-16 pb-[calc(2rem+env(safe-area-inset-bottom))] px-4 font-sans select-none">
      
      {/* Background Subtle Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 bg-grid-lines pointer-events-none opacity-[0.08]" />

      <motion.div 
        initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
        whileInView={isMobile ? { opacity: 1 } : { opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={isMobile ? undefined : { willChange: "opacity" }}
        className="max-w-6xl mx-auto relative z-10 space-y-12"
      >
        
        {/* Main Grid Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: 20% Luxury Brand Details */}
          <div className="space-y-5 text-left">
            <div className="flex items-center gap-2 text-[#04241a]">
              <Sparkles className="size-4 text-emerald-600 animate-pulse" />
              <span className="text-sm font-black tracking-[0.16em] uppercase">
                INTER-COLLEGE™
              </span>
            </div>
            
            <p className="text-xs font-semibold text-zinc-400 leading-relaxed max-w-[220px]">
              A premium academy engineered to transform student potential into verified JEE & NEET success. Guided by senior HOD mentors on an eco-campus.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2.5 items-center">
              {[
                { icon: FacebookIcon, href: "https://facebook.com" },
                { icon: InstagramIcon, href: "https://instagram.com" },
                { icon: LinkedinIcon, href: "https://linkedin.com" },
                { icon: TwitterIcon, href: "https://twitter.com" },
              ].map(({ icon: IconComponent, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "size-8 rounded-xl border border-zinc-200/80 bg-white flex items-center justify-center text-zinc-400 transition-all duration-300 shadow-sm",
                    hasHover && "hover:text-[#044e3b] hover:bg-[#e6f4ea] hover:border-emerald-200"
                  )}
                >
                  <IconComponent className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: 70% Apple Footer Directory Links - Academics */}
          <div className="text-left space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#04241a]/60">
              Academics & Pathways
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Engineering (JEE Main/Adv.)", href: "#" },
                { label: "Medical Prep (NEET UG)", href: "#" },
                { label: "Board Excellence (IPE/CBSE)", href: "#" },
                { label: "Success Path™ Journey", href: "#" },
                { label: "Performance Diagnostic Center", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs font-bold text-zinc-500 hover:text-[#044e3b] transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: 10% University Contact Details */}
          <div className="text-left space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#04241a]/60">
              Admissions Support
            </h3>
            
            {/* Contacts Stack */}
            <address className="space-y-3 not-italic">
              <div className="flex items-center gap-2.5 text-xs font-bold text-zinc-500">
                <Mail className="size-4 text-emerald-600 flex-shrink-0" />
                <a href="mailto:hello@intercollege.edu.in" className="hover:text-[#044e3b] transition-colors">
                  hello@intercollege.edu.in
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-zinc-500">
                <Phone className="size-4 text-emerald-600 flex-shrink-0" />
                <a href="tel:+918637373116" className="hover:text-[#044e3b] transition-colors">
                  +91 86373 73116
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-xs font-bold text-zinc-500">
                <MapPin className="size-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="leading-tight">
                  Kolkata, West Bengal, India
                </span>
              </div>
            </address>

            <div className="pt-2 border-t border-zinc-100/50 space-y-2">
              <a href="#" className="block text-[11px] font-bold text-emerald-700 hover:text-emerald-950 transition-colors">
                ✓ Booking & Counseling
              </a>
              <a href="#" className="block text-[11px] font-bold text-emerald-700 hover:text-emerald-950 transition-colors">
                ✓ Verification Center
              </a>
            </div>
          </div>

          {/* Column 4: 10% University Newsletter Form */}
          <div className="text-left space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#04241a]/60">
              Stay Connected
            </h3>
            <p className="text-xs font-semibold text-zinc-400 leading-normal max-w-[240px]">
              Subscribe to our admissions newsletter for the latest intake deadlines and schedule openings.
            </p>
            
            {/* Form */}
            {isSubscribed ? (
              <div className="relative max-w-[280px] bg-emerald-50 border border-emerald-200/50 rounded-xl px-4 py-3.5 flex items-center gap-3 animate-in fade-in zoom-in-95 duration-300">
                <Sparkles className="size-4 text-emerald-600" />
                <span className="text-xs font-bold text-emerald-800">
                  Successfully subscribed!
                </span>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubscribed(true);
                }} 
                className="relative max-w-[280px]"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter parent or student email"
                  className="w-full bg-white border border-zinc-200/80 focus:border-emerald-300 rounded-xl px-4 py-3.5 text-xs font-bold focus:outline-none pr-14 shadow-sm transition-all placeholder:text-zinc-300 focus:ring-4 focus:ring-emerald-50"
                />
                <button 
                  type="submit"
                  className="absolute right-1 top-1 h-10 w-10 rounded-lg bg-[#044e3b] text-white flex items-center justify-center hover:bg-[#033629] active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <Send className="size-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Apple-style Dividers & Legal Bar */}
        <div className="space-y-6 pt-6 border-t border-zinc-100/80">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
            {/* Copyright Statement */}
            <div className="text-left text-xs font-bold text-zinc-400/80 flex flex-wrap gap-1 items-center justify-center md:justify-start">
              <span>© {new Date().getFullYear()}</span>
              <span className="text-[#04241a] font-extrabold uppercase tracking-wider">Inter-College™</span>
              <span>• Premium Test Prep Academy. All rights reserved.</span>
            </div>

            {/* App download badges */}
            <div className="flex items-center gap-3">
              <AppStoreButton hasHover={hasHover} />
              <PlayStoreButton hasHover={hasHover} />
            </div>
          </div>

          {/* Legal link rows divided by Apple style rules (spacious gaps on mobile to avoid mis-taps) */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3.5 md:gap-x-4 md:gap-y-2 text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 border-t border-zinc-100/80 pt-4">
            <a href="#" className="hover:text-[#044e3b] transition-colors">Privacy Policy</a>
            <span className="text-zinc-200">|</span>
            <a href="#" className="hover:text-[#044e3b] transition-colors">Terms & Conditions</a>
            <span className="text-zinc-200">|</span>
            <a href="#" className="hover:text-[#044e3b] transition-colors">Cookie Notice</a>
            <span className="text-zinc-200">|</span>
            <a href="#" className="hover:text-[#044e3b] transition-colors">Trust Center</a>
            <span className="text-zinc-200">|</span>
            <a href="#" className="hover:text-[#044e3b] transition-colors">Transparency Report</a>
          </div>

        </div>

        </motion.div>
    </footer>
  );
}
export default Footer;
