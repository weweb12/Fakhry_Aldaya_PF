"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn, assetPath } from "@/lib/utils";
import { MediaItem } from "@/content/projects";

export function SlideShow({ items }: { items: MediaItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const slideRight = () => {
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    if (!items || items.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <div className="group relative w-full overflow-hidden rounded-[2rem] border border-line bg-panel p-2 shadow-panel sm:p-4">
      {/* Aspect Ratio Container for Slides */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#0f1217]">
        {items.map((item, index) => {
          // If a slide is not an image, safely ignore for slideshow, but assume they are images.
          const isActive = index === currentIndex;
          return (
            <div
              key={item.title}
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              )}
            >
              {item.src && (
                <Image
                  src={assetPath(item.src!)}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 80vw"
                  priority={index === 0}
                />
              )}
            </div>
          );
        })}

        {/* Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={slideLeft}
              className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surfaceSoft/60 text-text opacity-0 backdrop-blur transition hover:bg-surfaceSoft focus:opacity-100 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={slideRight}
              className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surfaceSoft/60 text-text opacity-0 backdrop-blur transition hover:bg-surfaceSoft focus:opacity-100 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {/* Progress / Status Bar */}
      <div className="mt-4 flex flex-col items-center justify-between gap-3 px-2 sm:flex-row">
        <div className="text-sm font-semibold tracking-wide text-text">
          {items[currentIndex]?.title}
        </div>
        
        {items.length > 1 && (
          <div className="flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-6 bg-accentStrong"
                    : "bg-line hover:bg-line/80"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
