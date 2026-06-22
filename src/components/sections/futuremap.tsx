"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Sparkles, 
  Target, 
  Award, 
  ChevronRight, 
  CheckCircle2, 
  BookOpen, 
  TrendingUp, 
  ArrowRight,
  Zap,
  Calendar,
  Clock,
  Compass,
  FileCheck,
  CheckCircle,
  Activity,
  RefreshCw
} from "lucide-react";

interface SelectorItem {
  id: string;
  label: string;
}

const CLASSES: SelectorItem[] = [
  { id: "class8", label: "Class 8" },
  { id: "class9", label: "Class 9" },
  { id: "class10", label: "Class 10" },
  { id: "inter1", label: "Intermediate 1st Year" },
  { id: "inter2", label: "Intermediate 2nd Year" },
];

const GOALS: SelectorItem[] = [
  { id: "iit", label: "IIT" },
  { id: "nit", label: "NIT" },
  { id: "bits", label: "BITS" },
  { id: "aiims", label: "AIIMS" },
  { id: "engg", label: "Top Engineering College" },
  { id: "med", label: "Top Medical College" },
];

const EXAMS: SelectorItem[] = [
  { id: "jeeadv", label: "JEE Advanced" },
  { id: "jeemain", label: "JEE Main" },
  { id: "neet", label: "NEET" },
  { id: "eamcet", label: "EAMCET" },
  { id: "olympiad", label: "Olympiads" },
];

interface QuickAction {
  label: string;
  classId: string;
  goalId: string;
  examId: string;
}

const QUICK_ACTIONS: QuickAction[] = [
  { label: "JEE Strategy", classId: "inter1", goalId: "iit", examId: "jeeadv" },
  { label: "NEET Strategy", classId: "inter1", goalId: "aiims", examId: "neet" },
  { label: "Rank Improvement", classId: "inter2", goalId: "iit", examId: "jeemain" },
  { label: "Study Planner", classId: "class10", goalId: "engg", examId: "olympiad" },
  { label: "Revision Roadmap", classId: "inter2", goalId: "nit", examId: "jeemain" },
  { label: "Subject Analysis", classId: "class9", goalId: "bits", examId: "olympiad" },
  { label: "Time Management", classId: "class8", goalId: "iit", examId: "olympiad" },
  { label: "Goal Setting", classId: "class10", goalId: "aiims", examId: "neet" },
];

interface TimelinePhase {
  title: string;
  phaseName: string;
  duration: string;
  focus: string;
  actionItems: string[];
  metrics: string;
  icon: React.ComponentType<any>;
}

// Generate tailored roadmap phases based on selected options
function getRoadmapPhases(examId: string, goalLabel: string): TimelinePhase[] {
  if (examId === "jeeadv" || examId === "jeemain") {
    return [
      {
        phaseName: "Phase 1: Foundation Baseline",
        title: "Diagnostic Profiling & Stream Alignment",
        duration: "Months 1 - 3",
        focus: "Core physics kinematics, basic calculus integrations, organic chemistry baselines.",
        actionItems: [
          "Conduct HOD baseline evaluation tests to check analytical logic.",
          "Solve 100+ subject conceptual questions every week.",
          "Complete baseline modules in mechanics & physical chemistry foundations."
        ],
        metrics: "Target: 80%+ Accuracy in Baseline Concepts",
        icon: Compass,
      },
      {
        phaseName: "Phase 2: Syllabus Acceleration",
        title: "Concept Mastery & Problem Optimization",
        duration: "Months 4 - 8",
        focus: "Tackling Advanced problems (Irodov, standard calculus proofs) and structural revisions.",
        actionItems: [
          "Complete intensive classes covering high-yield JEE topics.",
          "Perform weekly timed tests to measure question selection efficiency.",
          "Document mistakes in personal revision error logs for daily evaluation."
        ],
        metrics: "Target: 50+ timed practice questions daily",
        icon: BookOpen,
      },
      {
        phaseName: "Phase 3: Rank Stabilization",
        title: "All-India Mock Series & Error Remediation",
        duration: "Months 9 - 11",
        focus: "Full-syllabus mock tests, rank-prediction analysis, and HOD mentoring checkins.",
        actionItems: [
          "Attend regular national simulator test series under exam conditions.",
          "Analyze chapter-wise weak hotspots and resolve with subject experts.",
          "Perform specific time-management adjustments based on score metrics."
        ],
        metrics: "Target: Top 2% state level rank placement in mocks",
        icon: TrendingUp,
      },
      {
        phaseName: "Phase 4: D-Day Execution",
        title: "Precision Revisions & Final Examination",
        duration: "Month 12",
        focus: "Formula checkouts, high-weightage topic overviews, and mental conditioning.",
        actionItems: [
          "Attempt past 15 years actual examination papers under standard timers.",
          "Conduct final concept reviews with designated subject mentors.",
          "Execute exam-day strategy protocols to maximize score conversions."
        ],
        metrics: "Aim: Secure top target seat at " + goalLabel,
        icon: Award,
      }
    ];
  } else if (examId === "neet") {
    return [
      {
        phaseName: "Phase 1: NCERT Alignment",
        title: "NCERT Mapping & Biology Structural Drilling",
        duration: "Months 1 - 3",
        focus: "Complete textual biology baselines, physical chemistry formulas, basic physics vector math.",
        actionItems: [
          "Daily flashcard sessions targeting high-yield botanical and zoological structures.",
          "Weekly baseline assessment checkups by academic supervisors.",
          "Complete physics baseline modules to ensure strong core mechanics."
        ],
        metrics: "Target: 320+ score in mock Biology sections",
        icon: Compass,
      },
      {
        phaseName: "Phase 2: Speed Engineering",
        title: "Accuracy Drills & Conceptual Integration",
        duration: "Months 4 - 8",
        focus: "Speed practice targeting 180 questions mapping, active organic reaction reviews.",
        actionItems: [
          "Practice daily speed drills aiming for under 40 seconds per biology MCQ.",
          "Resolve complex organic synthesis pathways and chemical equilibrium modules.",
          "Attend special weakness resolution classes with campus HODs."
        ],
        metrics: "Target: 600+ threshold in mid-term mocks",
        icon: BookOpen,
      },
      {
        phaseName: "Phase 3: Performance Hardening",
        title: "National Level Simulator Series",
        duration: "Months 9 - 11",
        focus: "Simulation tests in standard OMR formats, detailed test-metrics reviews.",
        actionItems: [
          "Write weekly simulator papers matching official NEET exam times (2:00 PM - 5:20 PM).",
          "Identify and isolate test performance blocks with counselors.",
          "Revise formula sheets, plant tables, and organic naming reactions."
        ],
        metrics: "Target: Under 15% error rate in mock tests",
        icon: TrendingUp,
      },
      {
        phaseName: "Phase 4: Final Peak Strategy",
        title: "D-Day Precision Protocols & Target Seat Match",
        duration: "Month 12",
        focus: "Stress-free revisions, final mock reviews, and campus readiness.",
        actionItems: [
          "Complete focused reviews of personal high-yield summary documents.",
          "Simulate final real-exam scenarios in designated campus classrooms.",
          "Lock-in student examination strategies to secure premier medical seats."
        ],
        metrics: "Aim: Clear cutoff for " + goalLabel,
        icon: Award,
      }
    ];
  } else {
    // Default / Olympiad / EAMCET
    return [
      {
        phaseName: "Phase 1: Baseline Strength",
        title: "Diagnostic Analysis & Foundation Strengthening",
        duration: "Months 1 - 3",
        focus: "Basic algebraic properties, mechanical properties, structural biology base.",
        actionItems: [
          "Participate in subject baselines to isolate logical skill gaps.",
          "Complete daily worksheets in core math and analytical reasoning.",
          "Attend introductory science HOD mentorship webinars."
        ],
        metrics: "Target: Consistent 80%+ baseline conceptual marks",
        icon: Compass,
      },
      {
        phaseName: "Phase 2: Academic Acceleration",
        title: "Advanced Syllabus Track & Conceptual Modules",
        duration: "Months 4 - 8",
        focus: "Solving previous olympiad / EAMCET questions, complex proof derivations.",
        actionItems: [
          "Deep dive into advanced topics beyond normal school curriculum guidelines.",
          "Solve 80+ chapter-specific application questions every week.",
          "Build specialized summaries of high-importance chapters."
        ],
        metrics: "Target: 40+ advanced problems solved daily",
        icon: BookOpen,
      },
      {
        phaseName: "Phase 3: Simulator Mock Rounds",
        title: "Speed Tests & Weakness Remediation",
        duration: "Months 9 - 11",
        focus: "State-wide mock exams, interactive leaderboard evaluations, counselor inputs.",
        actionItems: [
          "Attend regular state EAMCET/Olympiad baseline simulator modules.",
          "Identify weak topic sections and attend revision feedback groups.",
          "Strengthen performance metrics with timed mock iterations."
        ],
        metrics: "Target: Place inside top tier ranks in mocks",
        icon: TrendingUp,
      },
      {
        phaseName: "Phase 4: Goal Placement",
        title: "Final Review & Achievement Placement",
        duration: "Month 12",
        focus: "Targeted scholarship preparations, final revisions, D-day walkthroughs.",
        actionItems: [
          "Attempt past years' actual competitive question blocks with HOD oversight.",
          "Complete final revision of formulas and baseline facts.",
          "Align exam-day logic steps to secure a top rank."
        ],
        metrics: "Aim: Secure admission at " + goalLabel,
        icon: Award,
      }
    ];
  }
}

const LOADING_STEPS = [
  "Reading academic profile baseline...",
  "Calculating syllabus milestones...",
  "Structuring revision checkpoints...",
  "Assembling HOD mentorship pathways...",
];

export function FutureMap() {
  const [selectedClass, setSelectedClass] = useState("inter1");
  const [selectedGoal, setSelectedGoal] = useState("iit");
  const [selectedExam, setSelectedExam] = useState("jeeadv");
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [roadmapData, setRoadmapData] = useState<TimelinePhase[]>([]);
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  // Synchronize options when goal/exam are modified to keep them aligned
  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId);
    if (goalId === "aiims" || goalId === "med") {
      setSelectedExam("neet");
    } else if (goalId === "iit") {
      setSelectedExam("jeeadv");
    } else if (goalId === "nit") {
      setSelectedExam("jeemain");
    }
  };

  const handleExamSelect = (examId: string) => {
    setSelectedExam(examId);
    if (examId === "neet") {
      setSelectedGoal("aiims");
    } else if (examId === "jeeadv") {
      setSelectedGoal("iit");
    } else if (examId === "jeemain") {
      setSelectedGoal("nit");
    }
  };

  const generateRoadmap = () => {
    setIsGenerating(true);
    setLoadingStep(0);
    setShowRoadmap(false);
    
    // Simulate smart AI calculations
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= LOADING_STEPS.length - 1) {
          clearInterval(interval);
          const goalObj = GOALS.find((g) => g.id === selectedGoal);
          const phases = getRoadmapPhases(selectedExam, goalObj ? goalObj.label : "Target College");
          setRoadmapData(phases);
          setIsGenerating(false);
          setShowRoadmap(true);
          setActivePhaseIndex(0);
          return 0;
        }
        return prev + 1;
      });
    }, 600);
  };

  const handleQuickAction = (action: QuickAction) => {
    setSelectedClass(action.classId);
    setSelectedGoal(action.goalId);
    setSelectedExam(action.examId);
    
    // Auto-generate roadmap immediately for seamless preview experience
    setIsGenerating(true);
    setLoadingStep(0);
    setShowRoadmap(false);
    
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= LOADING_STEPS.length - 1) {
          clearInterval(interval);
          const goalObj = GOALS.find((g) => g.id === action.goalId);
          const phases = getRoadmapPhases(action.examId, goalObj ? goalObj.label : "Target College");
          setRoadmapData(phases);
          setIsGenerating(false);
          setShowRoadmap(true);
          setActivePhaseIndex(0);
          return 0;
        }
        return prev + 1;
      });
    }, 400); // slightly faster for quick actions
  };

  // Pre-generate default roadmap on mount so user sees something initial
  useEffect(() => {
    const goalObj = GOALS.find((g) => g.id === selectedGoal);
    const phases = getRoadmapPhases(selectedExam, goalObj ? goalObj.label : "Target College");
    setRoadmapData(phases);
    setShowRoadmap(true);
  }, []);

  return (
    <section 
      id="futuremap" 
      className="relative w-full py-20 md:py-28 px-6 bg-transparent overflow-hidden scroll-mt-28"
    >
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-grid-lines pointer-events-none opacity-25" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-[#e6f4ea] px-3.5 py-1 text-[10px] font-bold text-brand-950 uppercase tracking-wider mb-5">
            <Sparkles className="size-3 text-brand-600 animate-pulse" />
            <span>AI-Powered Academic Roadmap</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#04241a] leading-tight">
            FutureMap™ AI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-950 font-extrabold tracking-normal">
            Plan Your Journey Before It Begins.
          </p>
          <p className="mt-3 text-sm text-[#406b5c] max-w-2xl mx-auto leading-relaxed font-medium">
            Tell us where you are today and where you want to go. Receive a structured academic roadmap designed around your goals, milestones, and examination strategy.
          </p>
        </div>

        {/* Interface Grid: Selectors + Presets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-100/50 shadow-[0_12px_40px_rgba(4,78,59,0.02)] space-y-6 relative overflow-hidden bg-white/70">
              
              {/* Class Selector */}
              <div>
                <label className="text-[10px] font-extrabold text-brand-950 uppercase tracking-wider block mb-3">
                  1. Current Class
                </label>
                <div className="flex flex-wrap gap-2">
                  {CLASSES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedClass(c.id)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300",
                        selectedClass === c.id
                          ? "bg-[#e6f4ea] text-brand-950 border-brand-300 shadow-sm"
                          : "bg-white/50 text-[#406b5c] border-brand-100 hover:bg-[#f0f7f2]"
                      )}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Goal Selector */}
              <div>
                <label className="text-[10px] font-extrabold text-brand-950 uppercase tracking-wider block mb-3">
                  2. Ultimate Goal
                </label>
                <div className="flex flex-wrap gap-2">
                  {GOALS.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => handleGoalSelect(g.id)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300",
                        selectedGoal === g.id
                          ? "bg-[#e6f4ea] text-brand-950 border-brand-300 shadow-sm"
                          : "bg-white/50 text-[#406b5c] border-brand-100 hover:bg-[#f0f7f2]"
                      )}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Exam Selector */}
              <div>
                <label className="text-[10px] font-extrabold text-brand-950 uppercase tracking-wider block mb-3">
                  3. Target Examination
                </label>
                <div className="flex flex-wrap gap-2">
                  {EXAMS.map((e) => (
                    <button
                      key={e.id}
                      onClick={() => handleExamSelect(e.id)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300",
                        selectedExam === e.id
                          ? "bg-[#e6f4ea] text-brand-950 border-brand-300 shadow-sm"
                          : "bg-white/50 text-[#406b5c] border-brand-100 hover:bg-[#f0f7f2]"
                      )}
                    >
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={generateRoadmap}
                disabled={isGenerating}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-3 sm:py-4.5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md select-none",
                  isGenerating 
                    ? "bg-[#e6f4ea] text-[#406b5c] border border-brand-200 cursor-not-allowed" 
                    : "bg-brand-950 text-white hover:bg-[#033c2e] hover:-translate-y-0.5 border border-brand-600/30 active:translate-y-0 active:scale-[0.98]"
                )}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="size-4 animate-spin text-brand-600" />
                    <span>Analyzing Custom Roadmap...</span>
                  </>
                ) : (
                  <>
                    <span>Generate Custom Roadmap</span>
                    <ArrowRight className="size-4" />
                  </>
                )}
              </button>

            </div>

            {/* Quick Actions Panel */}
            <div className="glass-panel p-5 rounded-3xl border border-brand-100/50 bg-white/70">
              <label className="text-[9px] font-extrabold text-[#406b5c] uppercase tracking-wider block mb-3 text-center">
                Quick Action Presets
              </label>
              <div className="flex flex-wrap justify-center gap-2">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => handleQuickAction(action)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-brand-100 bg-white/60 text-[10px] font-bold text-brand-950 hover:bg-[#e6f4ea] transition-colors duration-300"
                  >
                    <Zap className="size-3 text-brand-600" />
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Roadmap Dashboard / Output (Right) */}
          <div className="lg:col-span-7 h-full min-h-[500px]">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-100/50 bg-white/70 h-full flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  /* Loading State */
                  <motion.div
                    key="generating"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col items-center justify-center py-20 text-center space-y-6"
                  >
                    <div className="relative">
                      {/* Outer pulse circle */}
                      <div className="absolute inset-0 rounded-full border-4 border-brand-100 size-20 animate-ping opacity-75" />
                      {/* Inner spinner */}
                      <div className="rounded-full border-4 border-brand-100 border-t-brand-600 size-20 animate-spin" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-extrabold text-brand-950 tracking-wider uppercase animate-pulse">
                        {LOADING_STEPS[loadingStep]}
                      </p>
                      <p className="text-xs text-slate-400">
                        Synthesizing HOD parameters & competitive modules...
                      </p>
                    </div>
                  </motion.div>
                ) : showRoadmap && roadmapData.length > 0 ? (
                  /* Timeline State */
                  <motion.div
                    key="roadmap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    {/* Roadmap Header Summary */}
                    <div className="flex items-center justify-between pb-6 border-b border-brand-100/60 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                          <Activity className="size-5 animate-pulse" />
                        </div>
                        <div>
                          <h4 className="text-sm font-extrabold text-[#04241a] leading-none">
                            {EXAMS.find((e) => e.id === selectedExam)?.label} Plan
                          </h4>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1 block">
                            Targeting {GOALS.find((g) => g.id === selectedGoal)?.label}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold bg-[#e6f4ea] text-brand-950 border border-brand-100 px-2.5 py-1 rounded-full uppercase">
                          4 Phase Road
                        </span>
                      </div>
                    </div>

                    {/* Timeline Path Flow */}
                    <div className="grid grid-cols-4 gap-2 mb-8 relative pb-4">
                      {/* Main Horizontal Connector Line */}
                      <div className="absolute top-4 left-[12.5%] right-[12.5%] h-0.5 bg-brand-100" />
                      
                      {/* Connector Fill */}
                      <div 
                        className="absolute top-4 left-[12.5%] h-0.5 bg-brand-600 transition-all duration-700 ease-in-out" 
                        style={{ width: `${(activePhaseIndex / 3) * 75}%` }}
                      />

                      {roadmapData.map((phase, idx) => {
                        const IconComponent = phase.icon;
                        const isActive = idx <= activePhaseIndex;
                        const isCurrent = idx === activePhaseIndex;
                        return (
                          <div 
                            key={phase.phaseName}
                            onClick={() => setActivePhaseIndex(idx)}
                            className="flex flex-col items-center text-center cursor-pointer group relative z-10"
                          >
                            {/* Milestone Node */}
                            <div 
                              className={cn(
                                "size-8.5 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                                isCurrent 
                                  ? "bg-brand-600 text-white border-brand-600 scale-110 shadow-md shadow-brand-600/20"
                                  : isActive 
                                    ? "bg-[#e6f4ea] text-brand-950 border-brand-400"
                                    : "bg-white text-slate-300 border-slate-200 group-hover:border-slate-300"
                              )}
                            >
                              {isActive ? <CheckCircle2 className="size-4.5" /> : <span className="text-xs font-bold">{idx + 1}</span>}
                            </div>
                            <span className={cn(
                              "text-[9px] font-bold tracking-tight mt-3 transition-colors uppercase max-w-[80px]",
                              isCurrent ? "text-brand-950 font-extrabold" : "text-slate-400 group-hover:text-slate-500"
                            )}>
                              Phase {idx + 1}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Detailed Active Phase Content Card */}
                    <div className="flex-1">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activePhaseIndex}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="bg-brand-500/[0.01] border border-brand-100/50 rounded-2xl p-6 shadow-sm"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                            <span className="text-[10px] font-extrabold text-brand-600 uppercase tracking-widest">
                              {roadmapData[activePhaseIndex].phaseName}
                            </span>
                            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                              <Calendar className="size-3.5" />
                              <span>{roadmapData[activePhaseIndex].duration}</span>
                            </div>
                          </div>

                          <h3 className="text-lg font-extrabold text-[#04241a] mb-2 leading-snug">
                            {roadmapData[activePhaseIndex].title}
                          </h3>

                          <p className="text-xs text-slate-500 leading-relaxed font-medium mb-5">
                            {roadmapData[activePhaseIndex].focus}
                          </p>

                          {/* Specific Actionable Checklists */}
                          <div className="space-y-3">
                            <label className="text-[9px] font-extrabold text-[#406b5c] uppercase tracking-wider block">
                              Required Action Steps
                            </label>
                            {roadmapData[activePhaseIndex].actionItems.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2.5">
                                <CheckCircle className="size-4.5 text-brand-600 shrink-0 mt-0.5" />
                                <span className="text-xs text-[#04241a] font-medium leading-relaxed">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Metric Goal footer */}
                          <div className="mt-6 pt-4 border-t border-brand-100/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 text-[10px] font-bold">
                            <span className="text-slate-400 uppercase text-[9px] sm:text-[10px]">Key Milestone Metric</span>
                            <span className="text-brand-950 font-extrabold bg-[#e6f4ea] px-2.5 py-1.5 sm:px-3 sm:py-1 rounded-lg sm:rounded-full border border-brand-100/50 text-[10px] text-center sm:text-left w-full sm:w-auto">
                              {roadmapData[activePhaseIndex].metrics}
                            </span>
                          </div>

                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Timeline Navigation Actions */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-brand-100/60">
                      <button
                        onClick={() => setActivePhaseIndex((prev) => Math.max(0, prev - 1))}
                        disabled={activePhaseIndex === 0}
                        className={cn(
                          "px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap",
                          activePhaseIndex === 0 
                            ? "text-slate-300 cursor-not-allowed" 
                            : "text-[#406b5c] hover:bg-[#e6f4ea] hover:text-brand-950"
                        )}
                      >
                        Back
                      </button>
                      <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                        Phase {activePhaseIndex + 1} of 4
                      </span>
                      <button
                        onClick={() => {
                          if (activePhaseIndex === 3) {
                            // Reset timeline cycle
                            setActivePhaseIndex(0);
                          } else {
                            setActivePhaseIndex((prev) => Math.min(3, prev + 1));
                          }
                        }}
                        className="flex items-center gap-0.5 sm:gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-bold text-white bg-brand-950 hover:bg-[#033c2e] transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <span>{activePhaseIndex === 3 ? "Restart" : "Next Phase"}</span>
                        <ChevronRight className="size-3 sm:size-3.5" />
                      </button>
                    </div>

                  </motion.div>
                ) : (
                  /* Initial Empty/Placeholder State */
                  <div className="flex-1 flex flex-col items-center justify-center text-center py-20">
                    <Compass className="size-16 text-brand-100 animate-spin" style={{ animationDuration: '6s' }} />
                    <p className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Ready to plan your roadmap
                    </p>
                  </div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
