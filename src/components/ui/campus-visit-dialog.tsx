"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, FlaskConical, Library, MonitorPlay, Users } from "lucide-react";

export function CampusVisitDialog({ children }: { children: React.ReactNode }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Dialog>
      <DialogTrigger render={React.isValidElement(children) ? children : undefined}>
        {!React.isValidElement(children) && children}
      </DialogTrigger>
      
      <DialogContent 
        className="sm:max-w-[900px] w-[95vw] p-0 border border-emerald-500/20 shadow-2xl overflow-hidden bg-white/70 backdrop-blur-3xl rounded-3xl !zoom-in-100 data-open:slide-in-from-bottom-3 duration-300"
      >
        <DialogTitle className="sr-only">Schedule Your Campus Visit</DialogTitle>
        <DialogDescription className="sr-only">Experience classrooms, laboratories, academic facilities, and student life firsthand.</DialogDescription>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center p-12 text-center min-h-[500px]">
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
              <CheckCircle2 className="size-10 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-extrabold text-[#04241a] tracking-tight mb-3">
              Visit Request Submitted
            </h3>
            <p className="text-[#406b5c] font-medium max-w-md text-base leading-relaxed">
              Your campus visit request has been received. Our admissions team will contact you shortly to confirm your visit schedule.
            </p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row max-h-[85vh] overflow-y-auto">
            {/* Left Panel: Trust Builder */}
            <div className="w-full md:w-[40%] relative bg-[#04241a] overflow-hidden shrink-0 flex flex-col justify-end">
              {/* Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80" 
                alt="Olympus Campus" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04241a] via-[#04241a]/80 to-transparent" />
              
              <div className="relative z-10 p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                    Visit Our Campus
                  </h3>
                  <p className="text-emerald-100/80 text-sm leading-relaxed font-medium">
                    Explore classrooms, laboratories, academic infrastructure, student facilities, and the learning environment that powers exceptional results.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-emerald-500/30">
                  <div className="flex items-center gap-3">
                    <FlaskConical className="size-4 text-emerald-400" />
                    <span className="text-sm font-bold text-white tracking-wide">15+ Research Labs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Library className="size-4 text-emerald-400" />
                    <span className="text-sm font-bold text-white tracking-wide">85,000+ Academic Volumes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MonitorPlay className="size-4 text-emerald-400" />
                    <span className="text-sm font-bold text-white tracking-wide">Smart Classrooms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="size-4 text-emerald-400" />
                    <span className="text-sm font-bold text-white tracking-wide">Dedicated IIT & NEET Ecosystem</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel: Inquiry Form */}
            <div className="w-full md:w-[60%] p-6 md:p-8 bg-white/90 shrink-0">
              <div className="mb-6">
                <h2 className="text-2xl font-extrabold text-[#04241a] tracking-tight mb-1">
                  Schedule Your Campus Visit
                </h2>
                <p className="text-sm text-[#406b5c] font-medium">
                  Submit your details and our admissions team will coordinate a visit schedule.
                </p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-[#406b5c]">Student Name</Label>
                    <Input required placeholder="Enter student name" className="bg-white/80 border-emerald-100 focus-visible:ring-emerald-500/20" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-[#406b5c]">Parent Name</Label>
                    <Input required placeholder="Enter parent name" className="bg-white/80 border-emerald-100 focus-visible:ring-emerald-500/20" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-[#406b5c]">Mobile Number</Label>
                    <Input required type="tel" placeholder="+91" className="bg-white/80 border-emerald-100 focus-visible:ring-emerald-500/20" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-[#406b5c]">Email Address</Label>
                    <Input required type="email" placeholder="name@example.com" className="bg-white/80 border-emerald-100 focus-visible:ring-emerald-500/20" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-[#406b5c]">Current Class</Label>
                    <Input required placeholder="e.g. 10th, 11th, 12th" className="bg-white/80 border-emerald-100 focus-visible:ring-emerald-500/20" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-[#406b5c]">Program of Interest</Label>
                    <select required className="flex h-9 w-full rounded-lg border border-emerald-100 bg-white/80 px-3 py-2 text-sm text-[#04241a] shadow-sm shadow-black/5 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-emerald-500/20">
                      <option value="" disabled selected>Select a program</option>
                      <option value="IIT/JEE">IIT / JEE</option>
                      <option value="NEET">NEET</option>
                      <option value="EAMCET">EAMCET</option>
                      <option value="Foundation">Foundation</option>
                      <option value="Long-Term">Long-Term</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-[#406b5c]">Preferred Visit Date</Label>
                    <Input required type="date" className="bg-white/80 border-emerald-100 focus-visible:ring-emerald-500/20" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-[#406b5c]">Preferred Visit Time</Label>
                    <Input required type="time" className="bg-white/80 border-emerald-100 focus-visible:ring-emerald-500/20" />
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <Label className="text-xs font-bold text-[#406b5c]">Additional Notes</Label>
                  <textarea 
                    placeholder="Any specific facilities you wish to see?"
                    className="flex min-h-[60px] w-full rounded-lg border border-emerald-100 bg-white/80 px-3 py-2 text-sm text-[#04241a] shadow-sm shadow-black/5 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-emerald-500/20 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="mt-6 w-full h-11 bg-[#044e3b] hover:bg-[#033b2c] text-white font-bold rounded-xl shadow-[0_8px_16px_rgba(4,78,59,0.2)] transition-all hover:-translate-y-px hover:shadow-[0_12px_20px_rgba(4,78,59,0.3)]"
                >
                  Request Campus Visit
                </Button>
              </form>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
