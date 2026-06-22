/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Trophy, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export interface StudentAchiever {
  id: string;
  name: string;
  rank: string;
  exam: string;
  image: string;
  percentile: string;
  placement: string;
  batch: string;
  badges: string[];
}

const DEFAULT_ACHIEVERS: StudentAchiever[] = [
  {
    id: '1',
    name: 'Aditya Sharma',
    rank: 'AIR 45',
    exam: 'JEE Advanced 2025',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    percentile: '99.98 Percentile',
    placement: 'IIT Bombay (Computer Science)',
    batch: 'IIT-Elite Batch 2024-25',
    badges: ['Official Rank Card', 'Verified Result', 'Admission Letter'],
  },
  {
    id: '2',
    name: 'Ananya Reddy',
    rank: 'NEET Score 710/720',
    exam: 'NEET UG 2025',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&auto=format&fit=crop&q=80',
    percentile: '99.95 Percentile (Rank 54)',
    placement: 'AIIMS New Delhi (MBBS)',
    batch: 'NEET-Biogroup 2024-25',
    badges: ['Official Rank Card', 'Score Verified', 'Admission Letter'],
  },
  {
    id: '3',
    name: 'Rahul Verma',
    rank: 'AIR 112',
    exam: 'JEE Advanced 2025',
    image: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=400&auto=format&fit=crop&q=80',
    percentile: '99.92 Percentile',
    placement: 'IIT Delhi (Electrical Eng.)',
    batch: 'IIT-Elite Batch 2024-25',
    badges: ['Official Rank Card', 'Verified Result', 'Admission Letter'],
  },
  {
    id: '4',
    name: 'Sneha Patel',
    rank: 'NEET Rank 241',
    exam: 'NEET UG 2025',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    percentile: '99.85 Percentile',
    placement: 'MMC Chennai (MBBS)',
    batch: 'NEET-Biogroup 2024-25',
    badges: ['Official Rank Card', 'Verified Result', 'Admission Letter'],
  },
  {
    id: '5',
    name: 'Vikram Rao',
    rank: 'AIR 204',
    exam: 'JEE Main 2025',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=80',
    percentile: '100.00 Percentile',
    placement: 'IIT Madras (Mechanical Eng.)',
    batch: 'IIT-Main Stream 2024-25',
    badges: ['Official Rank Card', 'Verified Result'],
  },
  {
    id: '6',
    name: 'Divya Naidu',
    rank: 'State Rank 12',
    exam: 'Telangana Board 2025',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=80',
    percentile: '99.2% Marks',
    placement: 'Board Topper Merit List',
    batch: 'IPE Board Stream 2024-25',
    badges: ['Verified Board Sheet', 'Merit Scholarship Awardee'],
  },
];

interface EvidenceWallProps {
  members?: StudentAchiever[];
}

export function EvidenceWall({ members = DEFAULT_ACHIEVERS }: EvidenceWallProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    setHasHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-14 select-none w-full max-w-6xl mx-auto py-4 px-4 md:px-6 font-sans">
      {/* ── Left: staggered photo grid ── */}
      <div className="flex gap-2.5 md:gap-4 flex-shrink-0 overflow-x-auto pb-4 lg:pb-0 w-full lg:w-auto justify-center lg:justify-start">
        {/* Column 1 */}
        <div className="flex flex-col gap-2.5 md:gap-4">
          {col1.map((member) => {
            const originalIndex = members.findIndex(m => m.id === member.id);
            return (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-[80px] h-[90px] sm:w-[125px] sm:h-[135px] md:w-[150px] md:h-[160px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
                index={originalIndex}
                hasHover={hasHover}
              />
            );
          })}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2.5 md:gap-4 mt-[30px] sm:mt-[48px] md:mt-[56px]">
          {col2.map((member) => {
            const originalIndex = members.findIndex(m => m.id === member.id);
            return (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-[90px] h-[100px] sm:w-[136px] sm:h-[146px] md:w-[165px] md:h-[175px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
                index={originalIndex}
                hasHover={hasHover}
              />
            );
          })}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2.5 md:gap-4 mt-[15px] sm:mt-[24px] md:mt-[28px]">
          {col3.map((member) => {
            const originalIndex = members.findIndex(m => m.id === member.id);
            return (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-[85px] h-[95px] sm:w-[130px] sm:h-[140px] md:w-[158px] md:h-[168px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
                index={originalIndex}
                hasHover={hasHover}
              />
            );
          })}
        </div>
      </div>

      {/* ── Right: member name list ── */}
      <div className="flex flex-col gap-1 w-full lg:flex-1">
        {members.map((member, index) => (
          <MemberRow
            key={member.id}
            member={member}
            index={index}
            hoveredId={hoveredId}
            onHover={setHoveredId}
            hasHover={hasHover}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Photo card 
   ───────────────────────────────────────── */

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
  index,
  hasHover,
}: {
  member: StudentAchiever;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  index: number;
  hasHover: boolean;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  const imgRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

  // Limit stagger delay to max 8-10 cards
  const staggerDelay = index < 8 ? index * 0.05 : 8 * 0.05;

  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      animate={imageLoaded ? { y: 0, opacity: isDimmed ? 0.5 : 1 } : { y: 16, opacity: 0 }}
      transition={{
        type: "tween",
        duration: 0.35,
        ease: "easeOut",
        delay: staggerDelay,
      }}
      style={{ willChange: "transform, opacity" }}
      className={cn(
        'overflow-hidden rounded-2xl cursor-pointer flex-shrink-0 transition-all duration-400 border border-emerald-100/50 bg-emerald-950/5',
        className,
        isActive ? 'border-emerald-400 shadow-md shadow-emerald-700/5 -translate-y-0.5' : '',
      )}
      onMouseEnter={() => hasHover && onHover(member.id)}
      onMouseLeave={() => hasHover && onHover(null)}
      onClick={() => onHover(isActive ? null : member.id)}
    >
      <img
        ref={imgRef}
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-top transition-[filter] duration-500 select-none pointer-events-none"
        onLoad={() => setImageLoaded(true)}
        style={{
          filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.77)',
        }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Member name section
   ───────────────────────────────────────── */

function MemberRow({
  member,
  index,
  hoveredId,
  onHover,
  hasHover,
}: {
  member: StudentAchiever;
  index: number;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  hasHover: boolean;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  // Limit stagger delay to max 8-10 items
  const staggerDelay = index < 8 ? index * 0.05 : 8 * 0.05;

  return (
    <motion.div
      initial={{ x: 12, opacity: 0 }}
      whileInView={{ x: 0, opacity: isDimmed ? 0.4 : 1 }}
      viewport={{ once: true }}
      transition={{
        type: "tween",
        duration: 0.3,
        ease: "easeOut",
        delay: staggerDelay,
      }}
      style={{ willChange: "transform, opacity" }}
      className={cn(
        'cursor-pointer border-b border-emerald-50/50 py-3.5 transition-all duration-300',
      )}
      onMouseEnter={() => hasHover && onHover(member.id)}
      onMouseLeave={() => hasHover && onHover(null)}
      onClick={() => onHover(isActive ? null : member.id)}
    >
      {/* Name & Rank */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              'w-4 h-1.5 rounded-[5px] flex-shrink-0 transition-all duration-300',
              isActive ? 'bg-emerald-600 w-6' : 'bg-emerald-100',
            )}
          />
          <span
            className={cn(
              'text-[15px] sm:text-base font-bold tracking-tight transition-colors duration-300',
              isActive ? 'text-emerald-950' : 'text-zinc-700',
            )}
          >
            {member.name}
          </span>
        </div>
        
        {/* Rank tag */}
        <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md tracking-wider transition-all duration-300 ${
          isActive ? "bg-[#e6f4ea] text-[#044e3b]" : "bg-zinc-50 text-zinc-500"
        }`}>
          {member.rank}
        </span>
      </div>

      {/* Exam sub-header */}
      <p className="mt-1 pl-[27px] text-[9px] font-bold uppercase tracking-wider text-emerald-800/60 leading-none">
        {member.exam}
      </p>

      {/* Expanded Proof Details */}
      <div className={cn(
        'pl-[27px] transition-all duration-500 ease-in-out overflow-hidden',
        isActive ? 'max-h-40 opacity-100 mt-3.5' : 'max-h-0 opacity-0 pointer-events-none'
      )}>
        <div className="space-y-3 text-xs text-zinc-500 font-medium pb-1.5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-[8px] font-extrabold text-zinc-400 uppercase tracking-widest block leading-none mb-1">Academic Score</span>
              <span className="text-emerald-950 font-bold text-xs">{member.percentile}</span>
            </div>
            <div>
              <span className="text-[8px] font-extrabold text-zinc-400 uppercase tracking-widest block leading-none mb-1">Placement Outcome</span>
              <span className="text-emerald-950 font-bold text-xs">{member.placement}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 items-center">
            <div>
              <span className="text-[8px] font-extrabold text-zinc-400 uppercase tracking-widest block leading-none mb-1">Prep Batch</span>
              <span className="text-zinc-700 font-semibold text-[11px]">{member.batch}</span>
            </div>
            <div className="flex flex-wrap gap-1 items-center">
              {member.badges.map((b) => (
                <span key={b} className="inline-flex items-center gap-0.5 rounded bg-[#e6f4ea] border border-emerald-100/50 px-1.5 py-0.5 text-[8px] font-bold text-[#044e3b]">
                  <ShieldCheck className="size-2 text-emerald-600 inline-block mr-0.5" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
