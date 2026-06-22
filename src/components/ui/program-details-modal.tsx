"use client";

import React from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CampusVisitModal } from "@/components/ui/campus-visit-modal";
import { programData } from "@/data/programData";
import { CheckCircle2, Target, Calendar, BarChart3, Users, BookOpen } from "lucide-react";

export function ProgramDetailsModal({ 
  programId, 
  children 
}: { 
  programId: string; 
  children: React.ReactNode;
}) {
  const data = programData[programId];

  if (!data) {
    // Fallback if data doesn't exist, just render children without modal
    return <>{children}</>;
  }

  return (
    <Dialog>
      <DialogTrigger render={React.isValidElement(children) ? children : undefined}>
        {!React.isValidElement(children) && children}
      </DialogTrigger>
      
      {/* 
        Custom animation constraint: Fade + 12px translateY (slide-in-from-bottom-3) 250ms-300ms
        We override the default shadcn zoom with !zoom-in-100 to disable scaling, 
        and apply the slide and duration classes.
      */}
      <DialogContent 
        className="sm:max-w-[650px] w-[95vw] p-0 border border-brand-500/20 shadow-2xl overflow-hidden bg-white/60 backdrop-blur-2xl rounded-3xl !zoom-in-100 data-open:slide-in-from-bottom-3 duration-300"
      >
        <DialogTitle className="sr-only">{data.name} Details</DialogTitle>

        <div className="flex flex-col max-h-[85vh] overflow-y-auto">
          {/* Header Area */}
          <div className="bg-[#04241a] p-8 md:p-10 relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2 relative z-10">
              {data.name}
            </h3>
            <p className="text-brand-100/80 font-medium text-sm md:text-base max-w-lg relative z-10">
              {data.whoItIsFor}
            </p>
          </div>

          {/* Content Area */}
          <div className="p-6 md:p-8 bg-white/80 space-y-8">
            
            {/* Key Benefits */}
            <div>
              <h4 className="text-sm font-bold text-brand-950 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Target className="size-4 text-brand-600" />
                Key Benefits
              </h4>
              <ul className="space-y-3">
                {data.keyBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-brand-600 shrink-0 mt-0.5" />
                    <span className="text-[#406b5c] font-medium leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Teaching Methodology */}
              <div>
                <h4 className="text-sm font-bold text-brand-950 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BookOpen className="size-4 text-brand-600" />
                  Methodology
                </h4>
                <p className="text-[#406b5c] text-sm leading-relaxed font-medium">
                  {data.teachingMethodology}
                </p>
              </div>

              {/* Weekly Schedule */}
              <div>
                <h4 className="text-sm font-bold text-brand-950 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Calendar className="size-4 text-brand-600" />
                  Schedule
                </h4>
                <p className="text-[#406b5c] text-sm leading-relaxed font-medium">
                  {data.weeklySchedule}
                </p>
              </div>

              {/* Assessment Structure */}
              <div>
                <h4 className="text-sm font-bold text-brand-950 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BarChart3 className="size-4 text-brand-600" />
                  Assessment
                </h4>
                <p className="text-[#406b5c] text-sm leading-relaxed font-medium">
                  {data.assessmentStructure}
                </p>
              </div>

              {/* Expected Outcomes */}
              <div>
                <h4 className="text-sm font-bold text-brand-950 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Users className="size-4 text-brand-600" />
                  Outcomes
                </h4>
                <p className="text-[#406b5c] text-sm leading-relaxed font-medium">
                  {data.expectedOutcomes}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-brand-100/50">
              <CampusVisitModal>
                <Button className="w-full h-12 bg-brand-950 hover:bg-[#033b2c] text-white font-bold rounded-xl shadow-[0_8px_16px_rgba(4,78,59,0.2)] transition-all hover:-translate-y-px hover:shadow-[0_12px_20px_rgba(4,78,59,0.3)]">
                  Book Campus Visit
                </Button>
              </CampusVisitModal>
            </div>
            
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
