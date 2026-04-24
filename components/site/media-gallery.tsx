"use client";

import Image from "next/image";
import { Film, ImageIcon, X } from "lucide-react";
import { useState } from "react";

import { MediaItem } from "@/content/projects";
import { assetPath } from "@/lib/utils";

export function MediaGallery({ items }: { items: MediaItem[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {items.map((item) => {
        const isVideo = item.kind === "video";

        return (
          <figure key={item.title} className="overflow-hidden rounded-[1.8rem] border border-line bg-panel shadow-panel">
            <div className="relative flex min-h-[260px] items-end overflow-hidden bg-[linear-gradient(145deg,rgba(177,184,194,0.16),rgba(17,19,24,0.05))] p-6">
              {item.src ? (
                isVideo ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    controls
                    poster={item.poster ? assetPath(item.poster) : undefined}
                    preload="metadata"
                  >
                    <source src={assetPath(item.src!)} />
                  </video>
                ) : (
                  <>
                    <Image
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <button
                      onClick={() => setSelectedImage(item.src!)}
                      className="absolute inset-0 z-10 h-full w-full cursor-zoom-in border-0 bg-transparent opacity-0 focus:outline-none"
                      aria-label="View fullscreen"
                    />
                  </>
                )
              ) : (
                <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_top,rgba(208,213,221,0.22),transparent_48%)]">
                  <div className="rounded-full border border-line bg-panelStrong p-4 text-accent">
                    {isVideo ? <Film className="h-6 w-6" /> : <ImageIcon className="h-6 w-6" />}
                  </div>
                </div>
              )}

              <div className="relative z-20 pointer-events-none rounded-2xl border border-line/90 bg-surface/82 p-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">
                  {isVideo ? "Video" : "Screenshot"}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-text">{item.title}</h3>
              </div>
            </div>
            <figcaption className="border-t border-line/70 p-5 text-sm leading-7 text-textMuted">{item.caption}</figcaption>
          </figure>
        );
      })}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-6 top-6 z-[110] rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Close fullscreen"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative h-[90vh] w-[95vw] max-w-7xl animate-fade-in-up [animation-duration:300ms]">
            <Image src={selectedImage} alt="Fullscreen preview" fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
