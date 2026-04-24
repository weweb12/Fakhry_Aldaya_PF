"use client";

import { MediaItem } from "@/content/projects";
import { assetPath } from "@/lib/utils";

export function VideoPlayer({ item }: { item: MediaItem }) {
  if (!item || !item.src || item.kind !== "video") return null;

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="overflow-hidden rounded-2xl border border-line bg-surfaceSoft/50 shadow-xl ring-1 ring-black/5 dark:ring-white/10 relative group">
        <video
          className="w-full h-auto aspect-[16/9] object-cover bg-black"
          controls
          autoPlay
          muted
          loop
          playsInline
          poster={item.poster ? assetPath(item.poster) : undefined}
        >
          <source src={assetPath(item.src)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {(item.title || item.caption) && (
        <div className="mt-6 flex flex-col items-center text-center space-y-1.5">
          {item.title && <h3 className="font-display text-xl font-semibold text-text">{item.title}</h3>}
          {item.caption && <p className="text-sm text-textMuted max-w-2xl leading-relaxed">{item.caption}</p>}
        </div>
      )}
    </div>
  );
}
