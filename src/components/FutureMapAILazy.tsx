"use client"

import dynamic from "next/dynamic"

// Lazily load the FutureMapAI component only on the client side
// This avoids blocking the initial server-side render and keeps the main bundle small
export const FutureMapAILazy = dynamic(
  () => import("@/components/FutureMapAI").then((mod) => mod.FutureMapAI),
  { ssr: false }
)
