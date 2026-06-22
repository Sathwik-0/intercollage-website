"use client";

import React, { useState } from "react";
import { useConversation, ConversationProvider } from "@elevenlabs/react";
import { Mic, PhoneOff, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

function VoiceAssistantInner() {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<{ source: "ai" | "user"; text: string }[]>([]);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  
  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to ElevenLabs");
      setErrorMsg("");
      setMessages([]); // Clear previous chat
    },
    onDisconnect: () => console.log("Disconnected from ElevenLabs"),
    onError: (error) => {
      console.error("ElevenLabs Error:", error);
      setErrorMsg(typeof error === 'string' ? error : "An error occurred");
    },
    onMessage: (props: any) => {
      // The SDK calls this when the AI or user speaks/sends a message.
      if (props && props.message) {
        setMessages((prev) => [...prev, { source: props.source, text: props.message }]);
      }
    },
  });

  // Auto-scroll to bottom of chat
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const startConversation = async () => {
    setErrorMsg("");
    try {
      // Request mic permission so ElevenLabs voice connection works natively.
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const response = await fetch("/api/elevenlabs/signed-url");
      const data = await response.json();
      
      if (!response.ok) throw new Error(data.error || "Failed to fetch signed URL");

      await conversation.startSession({
        signedUrl: data.signedUrl,
      });
    } catch (error: any) {
      console.error("Failed to start conversation:", error);
      setErrorMsg(error.message || "Microphone access denied or connection failed.");
    }
  };

  const endConversation = async () => {
    await conversation.endSession();
  };

  const handleSendText = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    // Send to ElevenLabs. The SDK might fire onMessage for user inputs too, 
    // but to be safe we can let the SDK handle it or add it locally.
    // Usually the SDK fires onMessage for user speech, but maybe not for sendUserMessage.
    // If it doubles, we can remove this local state push.
    if (conversation.status === "connected" && conversation.sendUserMessage) {
      conversation.sendUserMessage(inputText);
      setMessages((prev) => [...prev, { source: "user", text: inputText }]);
      setInputText("");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-4 rounded-full text-white shadow-[0_8px_32px_rgba(4,78,59,0.3)] hover:scale-105 transition-all flex items-center justify-center group",
          isOpen ? "opacity-0 pointer-events-none scale-75" : "opacity-100 scale-100 bg-brand-950 hover:bg-[#03382a]"
        )}
      >
        <Mic className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] bg-white/95 backdrop-blur-xl border border-brand-100/50 rounded-3xl shadow-[0_20px_40px_-15px_rgba(4,78,59,0.2)] overflow-hidden flex flex-col max-sm:fixed max-sm:inset-0 max-sm:w-full max-sm:h-full max-sm:rounded-none max-sm:bg-white max-sm:border-none transition-all duration-300 animate-in slide-in-from-bottom-8 fade-in h-[600px] max-sm:h-[100dvh]">
          
          {/* Header */}
          <div className="p-4 border-b border-brand-50 bg-gradient-to-br from-brand-950/5 to-transparent flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <div className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  conversation.status === "connected" ? "bg-brand-500" : "bg-zinc-300"
                )} />
                {conversation.status === "connected" && conversation.isSpeaking && (
                  <div className="absolute inset-0 bg-brand-500 rounded-full animate-ping opacity-50" />
                )}
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-bold text-brand-950 tracking-tight">FutureMap AI Advisor</h3>
                <span className="text-xs font-medium text-brand-600/70">
                  {conversation.status === "connected" ? "AI is listening & ready to speak" : "Voice & Text Assistant"}
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                if (conversation.status === "connected") endConversation();
                setIsOpen(false);
              }}
              className="p-2 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat History */}
          <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto flex flex-col gap-4 bg-zinc-50/50">
            {errorMsg && (
              <div className="p-3 bg-rose-50 text-rose-600 text-sm rounded-xl border border-rose-100 mb-2">
                <span className="font-bold">Error:</span> {errorMsg}
              </div>
            )}
            
            {messages.length === 0 && conversation.status !== "connected" && !errorMsg && (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4 text-brand-600">
                  <Mic className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-zinc-800 mb-2">Hi, I'm FutureMap AI</h4>
                <p className="text-sm text-zinc-500">Connect to start a voice and text conversation. I will reply using both!</p>
                <button
                  onClick={startConversation}
                  className="mt-6 bg-brand-950 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#03382a] transition-all shadow-lg"
                >
                  Connect to AI
                </button>
              </div>
            )}

            {conversation.status === "connecting" && (
              <div className="flex flex-col items-center justify-center flex-1 gap-3 text-brand-600 animate-in fade-in">
                <Loader2 className="w-8 h-8 animate-spin" />
                <span className="text-sm font-medium">Connecting securely...</span>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={cn(
                "flex w-full animate-in slide-in-from-bottom-2 fade-in",
                msg.source === "user" ? "justify-end" : "justify-start"
              )}>
                <div className={cn(
                  "px-4 py-2.5 max-w-[85%] rounded-2xl text-[15px] leading-relaxed",
                  msg.source === "user" 
                    ? "bg-brand-950 text-white rounded-br-sm" 
                    : "bg-white border border-zinc-200 text-zinc-800 rounded-bl-sm shadow-sm"
                )}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {conversation.isSpeaking && (
               <div className="flex w-full justify-start animate-in fade-in">
                 <div className="px-4 py-3 bg-white border border-zinc-200 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce" />
                   <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce delay-75" />
                   <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce delay-150" />
                 </div>
               </div>
            )}
          </div>

          {/* Text Input Area */}
          <div className="p-4 bg-white border-t border-zinc-100 shrink-0">
            <form onSubmit={handleSendText} className="flex gap-2">
              <input
                type="text"
                disabled={conversation.status !== "connected"}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={conversation.status === "connected" ? "Type a message..." : "Connect first to chat..."}
                className="flex-1 bg-zinc-100 border-transparent rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || conversation.status !== "connected"}
                className="bg-brand-950 text-white px-5 rounded-xl text-sm font-semibold disabled:opacity-50 hover:bg-[#03382a] transition-all"
              >
                Send
              </button>
            </form>
          </div>
          
        </div>
      )}
    </>
  );
}

export function VoiceAssistant() {
  return (
    <ConversationProvider>
      <VoiceAssistantInner />
    </ConversationProvider>
  );
}
