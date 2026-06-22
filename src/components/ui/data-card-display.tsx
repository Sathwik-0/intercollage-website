import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Define the icon type. Using React.ElementType for flexibility.
type IconType = React.ElementType | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

// --- 📦 API (Props) Definition ---
export interface CardDisplayItem {
  /** A unique identifier for the card item. */
  id: string;
  /** Title of the card. */
  title: string;
  /** Main value or content of the card. */
  value: string;
  /** Detailed description or subtext. */
  description: string;
  /** Optional icon to display in the header. */
  icon?: IconType;
  /** Label for the optional footer action button. */
  actionLabel?: string;
  /** Disables the action button if true. */
  isDisabled?: boolean;
  /** Callback for when the action button is clicked. */
  onActionClick?: (id: string) => void;
}

export interface CardDisplayProps {
  /** Array of card items to display. */
  items: CardDisplayItem[];
  /** Optional class name to apply to the main container. */
  className?: string;
}

/**
 * A professional, monochrome, and responsive display for a collection of data cards.
 * Uses shadcn/ui components for styling, light/dark theme support, and accessibility.
 */
export const CardDisplay: React.FC<CardDisplayProps> = ({ items, className }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    setHasHover(window.matchMedia("(hover: hover)").matches);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!items || items.length === 0) {
    return <p className="text-center text-muted-foreground p-8">No display items configured.</p>;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.08,
      },
    },
  };

  const cardVariants: any = {
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 p-4 md:p-6 w-full",
        className
      )}
      role="list" // ARIA role for a list of cards
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={cardVariants}
          style={isMobile ? undefined : { willChange: "transform, opacity" }}
          className="h-full"
        >
          <Card
            className={cn(
              "flex flex-col h-full border border-brand-100/50 bg-white/70 backdrop-blur-xl shadow-sm transition-all duration-300",
              hasHover && "hover:shadow-md hover:border-brand-200/80 group"
            )}
            role="listitem" // ARIA role for a card item
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-5">
              <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                {item.title}
              </CardTitle>
              {item.icon && (
                <div className={cn(
                  "w-8 h-8 rounded-full bg-[#e6f4ea] flex items-center justify-center text-brand-950 transition-colors",
                  hasHover && "group-hover:bg-[#d5eedc]"
                )}>
                  <item.icon className="h-4 w-4 text-brand-950" aria-hidden="true" />
                </div>
              )}
            </CardHeader>
            <CardContent className="flex-grow p-5 pt-0">
              <div className="text-xl sm:text-2xl font-black text-brand-950 tracking-tight mb-1">{item.value}</div>
              <CardDescription className="text-[11px] font-medium text-zinc-500 leading-normal min-h-[1.5rem]">
                {item.description}
              </CardDescription>
            </CardContent>
            {item.actionLabel && (
              <CardFooter className="p-5 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => item.onActionClick?.(item.id)}
                  disabled={item.isDisabled}
                  className={cn(
                    "w-full text-xs font-bold transition-all duration-300 border-zinc-200 rounded-xl",
                    hasHover && "hover:bg-brand-50 hover:text-brand-900 border-brand-200"
                  )}
                  aria-label={`Action for ${item.title}: ${item.actionLabel}`}
                >
                  {item.actionLabel}
                </Button>
              </CardFooter>
            )}
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};
export default CardDisplay;
