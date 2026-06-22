"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Calendar, MapPin, Building2, UserCircle2 } from "lucide-react";

export function CampusVisitModal({ children }: { children: React.ReactNode }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Dialog>
      <DialogTrigger render={React.isValidElement(children) ? children : undefined}>
        {!React.isValidElement(children) && children}
      </DialogTrigger>
      
      {/* 
        Custom animation constraint: Fade + 12px translateY (slide-in-from-bottom-3) 300ms
        We override the default shadcn zoom with !zoom-in-100 to disable scaling, 
        and apply the slide and duration classes.
      */}
      <DialogContent 
        className="sm:max-w-[700px] w-[95vw] p-0 border border-brand-500/20 shadow-2xl overflow-hidden bg-white/60 backdrop-blur-2xl rounded-3xl data-open:zoom-in-100 data-open:slide-in-from-bottom-3 duration-300"
      >
        <DialogTitle className="sr-only">Campus Visit Booking</DialogTitle>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
            <div className="w-20 h-20 rounded-full bg-brand-100 flex items-center justify-center mb-6">
              <CheckCircle2 className="size-10 text-brand-600" />
            </div>
            <h3 className="text-3xl font-extrabold text-[#04241a] tracking-tight mb-3">
              Campus Visit Request Received
            </h3>
            <p className="text-[#406b5c] font-medium max-w-md text-base leading-relaxed">
              Our admissions counselor will contact you within 24 hours to confirm your visit schedule and answer any preliminary questions.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] h-full max-h-[85vh] overflow-y-auto">
            
            {/* Premium Illustration / Info Area */}
            <div className="bg-gradient-to-br from-brand-950 to-[#04241a] p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-400/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />
              
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-[10px] font-bold text-brand-100 uppercase tracking-wider mb-6">
                  <Building2 className="size-3" />
                  Premium Campus Tour
                </span>
                <h3 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
                  Experience Academic Precision in Person.
                </h3>
                <p className="text-brand-100/80 font-medium text-sm mt-3 leading-relaxed">
                  Walk through our advanced academic environments and meet the mentors driving top-tier selections.
                </p>
              </div>

              <div className="relative z-10 mt-8 space-y-4">
                <div className="flex items-center gap-3 text-brand-50">
                  <div className="size-8 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0">
                    <UserCircle2 className="size-4" />
                  </div>
                  <span className="text-sm font-semibold text-brand-100">1-on-1 Counselor Meeting</span>
                </div>
                <div className="flex items-center gap-3 text-brand-50">
                  <div className="size-8 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="size-4" />
                  </div>
                  <span className="text-sm font-semibold text-brand-100">Guided Infrastructure Tour</span>
                </div>
                <div className="flex items-center gap-3 text-brand-50">
                  <div className="size-8 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0">
                    <Calendar className="size-4" />
                  </div>
                  <span className="text-sm font-semibold text-brand-100">Tailored Academic Blueprint</span>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="p-6 md:p-8 bg-white/50">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-xs font-bold text-[#406b5c]">Student Name *</Label>
                    <Input required placeholder="Enter student name" className="bg-white/80 border-brand-100 focus-visible:ring-brand-500/20" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-xs font-bold text-[#406b5c]">Parent Name *</Label>
                    <Input required placeholder="Enter parent name" className="bg-white/80 border-brand-100 focus-visible:ring-brand-500/20" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-xs font-bold text-[#406b5c]">Mobile Number *</Label>
                    <Input required type="tel" placeholder="+91" className="bg-white/80 border-brand-100 focus-visible:ring-brand-500/20" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-xs font-bold text-[#406b5c]">Email Address *</Label>
                    <Input required type="email" placeholder="name@example.com" className="bg-white/80 border-brand-100 focus-visible:ring-brand-500/20" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-xs font-bold text-[#406b5c]">Class / Grade *</Label>
                    <Input required placeholder="e.g., 10th standard" className="bg-white/80 border-brand-100 focus-visible:ring-brand-500/20" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-xs font-bold text-[#406b5c]">Preferred Stream</Label>
                    <Input placeholder="MPC, BiPC, etc." className="bg-white/80 border-brand-100 focus-visible:ring-brand-500/20" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs font-bold text-[#406b5c]">Preferred Visit Date</Label>
                  <Input type="date" className="bg-white/80 border-brand-100 focus-visible:ring-brand-500/20 text-[#04241a]" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs font-bold text-[#406b5c]">Questions (Optional)</Label>
                  <textarea 
                    placeholder="Any specific queries for the counselor?" 
                    className="flex min-h-[80px] w-full rounded-lg border border-brand-100 bg-white/80 px-3 py-2 text-sm text-[#04241a] shadow-sm shadow-black/5 transition-shadow placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/20 resize-none" 
                  />
                </div>

                <Button 
                  type="submit" 
                  className="mt-2 w-full h-11 bg-brand-950 hover:bg-[#033b2c] text-white font-bold rounded-xl shadow-[0_8px_16px_rgba(4,78,59,0.2)] transition-all hover:translate-y-[-1px] hover:shadow-[0_12px_20px_rgba(4,78,59,0.3)]"
                >
                  Confirm Campus Visit Request
                </Button>
              </form>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
