"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn, assetPath } from "@/lib/utils";
import { MediaItem } from "@/content/projects";

/**
 * MobileDeck displays images like a stacked deck of cards
 * Great for showing off mobile UI screens natively
 */
export function MobileDeck({ items }: { items: MediaItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  // Autoplay functionality
  useEffect(() => {
    if (!items || items.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
    }, 4500);
    return () => clearInterval(timer);
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <div className="relative mx-auto flex w-full max-w-[320px] flex-col items-center pb-8 pt-8 sm:max-w-[360px] lg:max-w-[400px]">
      {/* Container for the stacked cards */}
      {/* Height corresponds roughly to the mobile aspect ratio. */}
      <div className="relative h-[650px] w-full sm:h-[700px] lg:h-[750px]">
        {items.map((item, index) => {
          // Calculate relative position to current index mapped circularly
          let offset = index - currentIndex;
          if (offset < 0) offset += items.length;

          // offset 0 = Front, offset 1 = Middle, offset 2 = Back
          const isFront = offset === 0;
          const isMiddle = offset === 1;
          const isBack = offset === 2;

          return (
            <div
              key={item.src}
              className={cn(
                "absolute top-0 w-full rounded-[2.5rem] border border-line/40 bg-zinc-900/10 p-[10px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]",
                isFront && "z-30 translate-y-0 scale-100 opacity-100",
                isMiddle && "z-20 translate-y-10 scale-95 opacity-80",
                isBack && "z-10 translate-y-20 scale-90 opacity-40",
                offset > 2 && "pointer-events-none translate-y-24 scale-90 opacity-0" // Fallback if more than 3
              )}
            >
              {/* Fake Phone bezel */}
              <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#1C1C1E] bg-surface shadow-inner">
                {/* Dynamic Island / Notch Simulation */}
                <div className="absolute left-1/2 top-1 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-[#1C1C1E]"></div>
                
                <div className="relative aspect-[9/19.5] w-full">
                  <Image
                    src={assetPath(item.src || "")}
                    alt={item.caption || "App Screenshot"}
                    fill
                    className="object-cover"
                  />
                  {/* Subtle glare effect representing screen glass */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls & Active Metadata */}
      <div className="mt-6 flex w-full flex-col items-center gap-5 text-center">
        {/* Contextual Title */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-text">
            <Smartphone className="h-4 w-4 text-textMuted" />
            <h3 className="font-display text-xl font-semibold">
              {items[currentIndex].title}
            </h3>
          </div>
          <p className="mx-auto max-w-[280px] text-sm leading-relaxed text-textMuted">
            {items[currentIndex].caption}
          </p>
        </div>

        {/* Navigation Layer */}
        <div className="flex items-center gap-5 pt-2">
          <button
            onClick={prevCard}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surfaceSoft text-textMuted transition-all duration-300 hover:scale-105 hover:bg-surface hover:text-text hover:shadow-sm"
            aria-label="Previous mobile screenshot"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex gap-2.5">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-500",
                  idx === currentIndex ? "w-6 bg-text" : "bg-line hover:bg-textMuted"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextCard}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surfaceSoft text-textMuted transition-all duration-300 hover:scale-105 hover:bg-surface hover:text-text hover:shadow-sm"
            aria-label="Next mobile screenshot"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
