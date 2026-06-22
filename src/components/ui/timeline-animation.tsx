"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineContentProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: string;
  className?: string;
  children: React.ReactNode;
  animationNum: number;
  customVariants: any;
  timelineRef: React.RefObject<HTMLDivElement | null>;
}

export function TimelineContent({
  as = "div",
  className,
  children,
  animationNum,
  customVariants,
  timelineRef,
  ...props
}: TimelineContentProps) {
  const Component = (motion as any)[as] || motion.div;

  return (
    <Component
      className={className}
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={animationNum}
      {...props}
    >
      {children}
    </Component>
  );
}
