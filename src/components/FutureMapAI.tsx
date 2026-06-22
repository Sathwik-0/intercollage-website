"use client"

import React, { useState, useRef, useEffect } from "react"
import { MorphPanel } from "@/components/ui/ai-input"
import { VoiceInput } from "@/components/ui/voice-input"
import { CampusVisitDialog } from "@/components/ui/campus-visit-dialog"
import { CounselingModal } from "@/components/ui/counseling-modal"
import { cn } from "@/lib/utils"
import { Loader2, X } from "lucide-react"

type Message = {
  role: "user" | "ai"
  content: string
}

export function FutureMapAI() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  
  const scrollRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const playTTS = async (text: string, signal: AbortSignal) => {
    try {
      setIsSpeaking(true)
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
        signal,
      })

      if (!response.ok) {
        throw new Error("Failed to fetch audio")
      }

      const audioBlob = await response.blob()
      if (signal.aborted) return; // double check after reading blob

      const audioUrl = URL.createObjectURL(audioBlob)

      if (audioRef.current) {
        audioRef.current.pause()
      }

      const audio = new Audio(audioUrl)
      audioRef.current = audio

      audio.onended = () => {
        setIsSpeaking(false)
        URL.revokeObjectURL(audioUrl)
      }

      await audio.play()
    } catch (error: any) {
      if (error.name === "AbortError") {
        console.log("TTS fetch aborted")
      } else {
        console.error("TTS Error:", error)
      }
      setIsSpeaking(false)
    }
  }

  const handleSend = async (message: string) => {
    if (!message.trim()) return

    // 1. Abort any ongoing Groq/TTS fetches instantly
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
    const newController = new AbortController()
    abortControllerRef.current = newController
    const signal = newController.signal

    // 2. Stop any playing audio instantly
    if (audioRef.current) {
      audioRef.current.pause()
      setIsSpeaking(false)
    }

    // 3. Prepare the new chat history
    // We compute the new array once to send to Groq, ensuring we don't send stale data
    let messagesToSend: Message[] = []
    setMessages((prev) => {
      messagesToSend = [...prev, { role: "user", content: message }]
      // Immediately add the user message and a placeholder for the AI response
      return [...messagesToSend, { role: "ai", content: "" }]
    })
    setIsTyping(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messagesToSend.map(m => ({ role: m.role === "ai" ? "assistant" : "user", content: m.content })),
        }),
        signal,
      })

      if (!response.ok) throw new Error("Failed to chat")
      if (!response.body) throw new Error("No response body")

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let aiText = ""

      setIsTyping(false) // stream starts

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        if (signal.aborted) {
          reader.cancel()
          break
        }

        const chunk = decoder.decode(value, { stream: true })
        aiText += chunk

        setMessages((prev) => {
          const newArr = [...prev]
          // Always update the very last message (which we know is the AI placeholder we just added)
          newArr[newArr.length - 1] = { ...newArr[newArr.length - 1], content: aiText }
          return newArr
        })
      }

      // Stream complete, now play audio if not aborted
      if (!signal.aborted) {
        const textToSpeak = aiText.replace("[CTA:CAMPUS_VISIT]", "").replace("[CTA:INQUIRY]", "")
        playTTS(textToSpeak, signal)
      }

    } catch (error: any) {
      if (error.name === "AbortError") {
        console.log("Chat fetch aborted due to new message")
      } else {
        console.error("Chat Error:", error)
        setIsTyping(false)
        setMessages((prev) => [...prev, { role: "ai", content: "Sorry, I encountered an error connecting to the AI." }])
      }
    }
  }

  const handleClose = () => {
    // 1. Abort any ongoing Groq/TTS fetches instantly
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
    // 2. Stop any playing audio instantly
    if (audioRef.current) {
      audioRef.current.pause()
      setIsSpeaking(false)
    }
    // 3. Clear chat
    setMessages([])
  }

  return (
    <div className="fixed bottom-0 right-4 z-50 flex flex-col items-end pointer-events-none max-sm:right-0 max-sm:w-full">
      {/* Chat Messages Area */}
      {messages.length > 0 && (
        <div 
          className="bg-white/95 backdrop-blur-md border border-brand-100 shadow-[0_20px_40px_-15px_rgba(4,78,59,0.2)] rounded-3xl p-4 w-[380px] max-h-[60vh] flex flex-col mb-4 mr-4 pointer-events-auto max-sm:w-[calc(100%-2rem)] max-sm:mr-0 max-sm:mx-auto transition-all animate-in slide-in-from-bottom-8 fade-in"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-brand-50 mb-3 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              <h3 className="font-bold text-brand-950 text-sm tracking-tight">FutureMap AI Advisor</h3>
            </div>
            
            {/* The Speaking Visualizer & Close Button */}
            <div className="flex items-center gap-1">
              <div className="scale-75 origin-right">
                <VoiceInput isSpeaking={isSpeaking} />
              </div>
              <button 
                onClick={handleClose} 
                className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-full transition-colors"
                title="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto flex flex-col gap-3 pr-2 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={cn(
                "flex w-full animate-in fade-in slide-in-from-bottom-2 duration-300",
                msg.role === "user" ? "justify-end" : "justify-start"
              )}>
                <div className={cn(
                  "px-3.5 py-2.5 max-w-[85%] rounded-2xl text-[14px] leading-relaxed shadow-sm",
                  msg.role === "user" 
                    ? "bg-brand-950 text-white rounded-br-sm" 
                    : "bg-zinc-50 border border-zinc-100 text-zinc-800 rounded-bl-sm"
                )}>
                  {msg.role === "user" ? (
                    msg.content
                  ) : (
                    <div className="space-y-3">
                      <div>{msg.content.replace("[CTA:CAMPUS_VISIT]", "").replace("[CTA:INQUIRY]", "")}</div>
                      {msg.content.includes("[CTA:CAMPUS_VISIT]") && (
                        <CampusVisitDialog>
                          <button className="w-full py-2 px-4 bg-brand-600 text-white rounded-xl text-sm font-semibold hover:bg-brand-700 transition-colors shadow-md text-center">
                            Book Campus Visit
                          </button>
                        </CampusVisitDialog>
                      )}
                      {msg.content.includes("[CTA:INQUIRY]") && (
                        <CounselingModal variant="enrollment">
                          <button className="w-full py-2 px-4 bg-brand-950 text-white rounded-xl text-sm font-semibold hover:bg-brand-900 transition-colors shadow-md text-center">
                            Schedule Counseling
                          </button>
                        </CounselingModal>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex w-full justify-start animate-in fade-in">
                <div className="px-4 py-3 bg-zinc-50 border border-zinc-100 rounded-2xl rounded-bl-sm flex items-center gap-1.5 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce delay-75" />
                  <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce delay-150" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MorphPanel Input Box */}
      <div className="pointer-events-auto">
        <MorphPanel onSend={handleSend} isTyping={isTyping} />
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
}
