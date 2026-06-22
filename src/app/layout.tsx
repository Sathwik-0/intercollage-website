import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inter-College | Premium Test Prep Academy",
  description: "The digital headquarters of Hyderabad's elite educational institution. Preparing future leaders for JEE, NEET, and EAMCET with unmatched academic rigour and proven top ranks.",
};

import { FutureMapAILazy } from "@/components/FutureMapAILazy";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full bg-background text-foreground font-sans flex flex-col">
        <MotionConfig reducedMotion="user">
          {children}
          <FutureMapAILazy />
        </MotionConfig>
      </body>
    </html>
  );
}
