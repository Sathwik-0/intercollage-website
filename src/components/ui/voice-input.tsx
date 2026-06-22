"use client"

import React from "react"
import { Mic } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

interface VoiceInputProps {
  onStart?: () => void
  onStop?: () => void
  isSpeaking?: boolean // Added to control from parent
}

export function VoiceInput({
  className,
  onStart,
  onStop,
  isSpeaking = false,
}: React.ComponentProps<"div"> & VoiceInputProps) {
  const [_listening, _setListening] = React.useState<boolean>(isSpeaking)
  const [_time, _setTime] = React.useState<number>(0)

  // Sync with parent prop
  React.useEffect(() => {
    _setListening(isSpeaking);
  }, [isSpeaking]);

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (_listening) {
      onStart?.()
      intervalId = setInterval(() => {
        _setTime((t) => t + 1)
      }, 1000)
    } else {
      onStop?.()
      _setTime(0)
    }

    return () => clearInterval(intervalId)
  }, [_listening])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const onClickHandler = () => {
    // If controlled by parent, maybe don't allow click, but we'll leave it for flexibility.
    _setListening(!_listening)
  }

  return (
    <div className={cn("flex flex-col items-center justify-center pointer-events-none", className)}>
      <motion.div
        className="flex p-2 border items-center justify-center rounded-full bg-background shadow-md border-emerald-100"
        layout
        transition={{
          layout: {
            duration: 0.4,
          },
        }}
        onClick={onClickHandler}
      >
        <div className="h-6 w-6 items-center justify-center flex text-emerald-600">
          {_listening ? (
            <motion.div
              className="w-4 h-4 bg-emerald-600 rounded-sm"
              animate={{
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ) : (
            <Mic className="w-5 h-5 text-emerald-600" />
          )}
        </div>
        <AnimatePresence mode="wait">
          {_listening && (
            <motion.div
              initial={{ opacity: 0, width: 0, marginLeft: 0 }}
              animate={{ opacity: 1, width: "auto", marginLeft: 8 }}
              exit={{ opacity: 0, width: 0, marginLeft: 0 }}
              transition={{
                duration: 0.4,
              }}
              className="overflow-hidden flex gap-2 items-center justify-center"
            >
              {/* Frequency Animation */}
              <div className="flex gap-0.5 items-center justify-center">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-emerald-600 rounded-full"
                    initial={{ height: 2 }}
                    animate={{
                      height: _listening
                        ? [2, 3 + Math.random() * 10, 3 + Math.random() * 5, 2]
                        : 2,
                    }}
                    transition={{
                      duration: _listening ? 1 : 0.3,
                      repeat: _listening ? Infinity : 0,
                      delay: _listening ? i * 0.05 : 0,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
              {/* Timer */}
              <div className="text-xs text-emerald-600 font-medium w-10 text-center">
                {formatTime(_time)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
