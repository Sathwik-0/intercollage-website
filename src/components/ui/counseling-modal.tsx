"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

export type CounselingVariant = "student" | "parent" | "enrollment";

interface CounselingModalProps {
  variant: CounselingVariant;
  children: React.ReactNode;
}

const COUNSELING_CONFIG = {
  student: {
    title: "Student Guidance Session",
    description: "Book a personalized academic planning session with our counseling team.",
    fields: [
      { name: "studentName", label: "Student Name", type: "text", placeholder: "Enter student name" },
      { name: "parentName", label: "Parent Name", type: "text", placeholder: "Enter parent name" },
      { name: "mobile", label: "Mobile Number", type: "tel", placeholder: "+91" },
      { name: "class", label: "Current Class", type: "text", placeholder: "e.g., 11th, 12th, or Completed" },
      { name: "stream", label: "Interested Program", type: "text", placeholder: "JEE Adv, JEE Main, NEET, etc." },
      { name: "time", label: "Preferred Contact Time", type: "text", placeholder: "e.g., 5 PM - 7 PM" }
    ],
    ctaText: "Book Student Session"
  },
  parent: {
    title: "Parent Consultation Request",
    description: "Speak with an academic counselor to evaluate pathways, streams, and admission opportunities.",
    fields: [
      { name: "parentName", label: "Parent Name", type: "text", placeholder: "Enter your name" },
      { name: "studentName", label: "Student Name", type: "text", placeholder: "Enter student name" },
      { name: "mobile", label: "Mobile Number", type: "tel", placeholder: "+91" },
      { name: "concerns", label: "Academic Concerns", type: "textarea", placeholder: "Any specific areas of concern?" },
      { name: "time", label: "Preferred Consultation Time", type: "text", placeholder: "e.g., Weekend mornings" }
    ],
    ctaText: "Schedule Consultation"
  },
  enrollment: {
    title: "Admission Guide Packet Request",
    description: "Receive detailed admission information and enrollment guidance.",
    fields: [
      { name: "studentName", label: "Student Name", type: "text", placeholder: "Enter student name" },
      { name: "mobile", label: "Mobile Number", type: "tel", placeholder: "+91" },
      { name: "email", label: "Email Address", type: "email", placeholder: "name@example.com" },
      { name: "program", label: "Program Interest", type: "text", placeholder: "Which program are you considering?" }
    ],
    ctaText: "Send Guide Packet"
  }
};

export function CounselingModal({ variant, children }: CounselingModalProps) {
  const config = COUNSELING_CONFIG[variant];
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Dialog>
      <DialogTrigger render={React.isValidElement(children) ? children : undefined}>
        {!React.isValidElement(children) && children}
      </DialogTrigger>
      
      <DialogContent 
        className="sm:max-w-[550px] w-[95vw] p-0 border border-brand-500/20 shadow-2xl overflow-hidden bg-white/70 backdrop-blur-3xl rounded-3xl !zoom-in-100 data-open:slide-in-from-bottom-3 duration-300"
      >
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
            <div className="w-20 h-20 rounded-full bg-brand-100 flex items-center justify-center mb-6">
              <CheckCircle2 className="size-10 text-brand-600" />
            </div>
            <h3 className="text-3xl font-extrabold text-[#04241a] tracking-tight mb-3">
              Request Received
            </h3>
            <p className="text-[#406b5c] font-medium max-w-md text-base leading-relaxed">
              Our team will reach out to you shortly to assist with your inquiry.
            </p>
          </div>
        ) : (
          <div className="flex flex-col max-h-[85vh] overflow-y-auto">
            {/* Header Block */}
            <div className="bg-gradient-to-br from-brand-950 to-[#04241a] p-8 md:p-10 relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              <DialogTitle className="text-2xl md:text-3xl font-extrabold text-white tracking-tight relative z-10">
                {config.title}
              </DialogTitle>
              <DialogDescription className="text-brand-100/80 mt-2 font-medium text-sm md:text-base max-w-sm relative z-10 leading-relaxed">
                {config.description}
              </DialogDescription>
            </div>

            {/* Form Block */}
            <div className="p-6 md:p-8 bg-white/50">
              <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="space-y-5">
                {config.fields.map((field) => (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <Label className="text-xs font-bold text-[#406b5c]">{field.label}</Label>
                    {field.type === "textarea" ? (
                      <textarea 
                        required
                        placeholder={field.placeholder}
                        className="flex min-h-[80px] w-full rounded-lg border border-brand-100 bg-white/80 px-3 py-2 text-sm text-[#04241a] shadow-sm shadow-black/5 transition-shadow placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/20 resize-none"
                      />
                    ) : (
                      <Input 
                        required
                        type={field.type} 
                        placeholder={field.placeholder}
                        className="bg-white/80 border-brand-100 focus-visible:ring-brand-500/20"
                      />
                    )}
                  </div>
                ))}
                
                <Button 
                  type="submit" 
                  className="mt-4 w-full h-11 bg-brand-950 hover:bg-[#033b2c] text-white font-bold rounded-xl shadow-[0_8px_16px_rgba(4,78,59,0.2)] transition-all hover:-translate-y-px hover:shadow-[0_12px_20px_rgba(4,78,59,0.3)]"
                >
                  {config.ctaText}
                </Button>
              </form>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
