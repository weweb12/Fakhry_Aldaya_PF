"use client";

import type { FocusEvent, PointerEvent as ReactPointerEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { SkillGroup } from "@/content/skills";
import { SkillIconStack } from "@/lib/skill-icons";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_MS = 4400;
const SWIPE_THRESHOLD = 56;

const shortLabels: Record<string, string> = {
  "Developer Workflow Tools": "Workflow Tools",
};

type SkillsShowcaseProps = {
  groups: SkillGroup[];
  className?: string;
  initialIndex?: number;
};

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return prefersReducedMotion;
}

function getDisplayTitle(title: string) {
  return shortLabels[title] ?? title;
}

function getWrappedIndex(index: number, total: number) {
  return (index + total) % total;
}

export function SkillsShowcase({
  groups,
  className,
  initialIndex = 0,
}: SkillsShowcaseProps) {
  const totalGroups = groups.length;
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(getWrappedIndex(initialIndex, totalGroups));
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStateRef = useRef({ pointerId: -1, startX: 0 });

  const shouldPauseAutoplay =
    prefersReducedMotion || isHovered || isFocusWithin || isDragging || totalGroups <= 1;

  const goToIndex = (nextIndex: number) => {
    setActiveIndex(getWrappedIndex(nextIndex, totalGroups));
    setDragOffset(0);
  };

  const goToNext = () => goToIndex(activeIndex + 1);
  const goToPrevious = () => goToIndex(activeIndex - 1);

  useEffect(() => {
    if (shouldPauseAutoplay) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setActiveIndex((currentIndex) => getWrappedIndex(currentIndex + 1, totalGroups));
      setDragOffset(0);
    }, AUTO_ADVANCE_MS);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, shouldPauseAutoplay, totalGroups]);

  const handleSectionBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsFocusWithin(false);
    }
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragStateRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
    };

    setIsDragging(true);
    setDragOffset(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStateRef.current.pointerId !== event.pointerId) {
      return;
    }

    setDragOffset(event.clientX - dragStateRef.current.startX);
  };

  const handlePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStateRef.current.pointerId !== event.pointerId) {
      return;
    }

    const delta = event.clientX - dragStateRef.current.startX;
    dragStateRef.current.pointerId = -1;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
    setDragOffset(0);

    if (delta <= -SWIPE_THRESHOLD) {
      goToNext();
      return;
    }

    if (delta >= SWIPE_THRESHOLD) {
      goToPrevious();
    }
  };

  return (
    <section
      className={cn("rounded-[2rem] border border-line bg-panel shadow-panel", className)}
      onFocusCapture={() => setIsFocusWithin(true)}
      onBlurCapture={handleSectionBlur}
      aria-roledescription="carousel"
      aria-label="Skills categories"
    >
      <div className="border-b border-line/80 p-6 sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-2">
            <p className="font-display text-2xl font-semibold tracking-tight text-text sm:text-[1.85rem]">
              Grouped by the way I work
            </p>
            <p className="text-sm leading-7 text-textMuted sm:text-[0.98rem]">
              A compact view of the stack I rely on most across secure systems, automation, and practical product builds.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full border border-line bg-surfaceSoft/75 px-3.5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-textMuted">
              {activeIndex + 1} / {totalGroups}
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surfaceSoft/80 text-text transition hover:border-accent/35 hover:bg-panelStrong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="Show previous skill category"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surfaceSoft/80 text-text transition hover:border-accent/35 hover:bg-panelStrong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="Show next skill category"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative overflow-hidden px-4 py-5 sm:px-6 sm:py-6 lg:px-7"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-10 bg-[linear-gradient(90deg,var(--panel),rgba(255,255,255,0))] lg:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-10 bg-[linear-gradient(270deg,var(--panel),rgba(255,255,255,0))] lg:block" />

        <div
          className={cn(
            "overflow-hidden",
            isDragging ? "cursor-grabbing select-none" : "cursor-grab",
          )}
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              goToPrevious();
            }

            if (event.key === "ArrowRight") {
              event.preventDefault();
              goToNext();
            }
          }}
          style={{ touchAction: "pan-y" }}
        >
          <div
            className="flex"
            style={{
              transform: `translate3d(calc(-${activeIndex * 100}% + ${dragOffset}px), 0, 0)`,
              transition: isDragging
                ? "none"
                : "transform 720ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {groups.map((group, index) => (
              <div
                key={group.title}
                className="min-w-full shrink-0"
                role="group"
                aria-roledescription="slide"
                aria-label={`${getDisplayTitle(group.title)} (${index + 1} of ${totalGroups})`}
                aria-hidden={index !== activeIndex}
              >
                <article className="mx-auto max-w-[62rem] rounded-[1.85rem] border border-line/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0))] p-5 shadow-panel sm:p-6 lg:p-7">
                  <div className="flex flex-col gap-4 border-b border-line/70 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-2">
                      <div className="inline-flex items-center rounded-full border border-line bg-surfaceSoft/72 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-textMuted">
                        Skill category
                      </div>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-text sm:text-[2rem]">
                        {getDisplayTitle(group.title)}
                      </h3>
                      <p className="max-w-2xl text-sm leading-7 text-textMuted sm:text-[0.98rem]">
                        {group.description}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-line bg-surfaceSoft/72 px-4 py-3 text-sm text-textMuted">
                      {group.items.length} technologies
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {group.items.map((item) => (
                      <div
                        key={`${group.title}-${item.name}`}
                        className="rounded-[1.4rem] border border-line bg-panelStrong/90 p-4 transition duration-300 hover:border-accent/25 hover:bg-panelStrong"
                      >
                        <div className="flex items-center gap-3">
                          <SkillIconStack name={item.name} />
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-text sm:text-[0.96rem]">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {groups.map((group, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={group.title}
                type="button"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm",
                  isActive
                    ? "border-accent/45 bg-accent text-[#111317]"
                    : "border-line bg-surfaceSoft/75 text-textMuted hover:border-accent/30 hover:text-text",
                )}
                aria-label={`Show ${getDisplayTitle(group.title)} skill category`}
                aria-pressed={isActive}
                onClick={() => goToIndex(index)}
              >
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full",
                    isActive ? "bg-[#111317]" : "bg-textMuted/55",
                  )}
                />
                {getDisplayTitle(group.title)}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
