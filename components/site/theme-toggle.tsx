"use client";

import { MonitorCog, MoonStar, SunMedium } from "lucide-react";

import { useTheme } from "@/components/providers/theme-provider";
import { ThemeMode, themeLabels, themes } from "@/lib/theme";
import { cn } from "@/lib/utils";

const icons: Record<ThemeMode, typeof MonitorCog> = {
  graphite: MonitorCog,
  light: SunMedium,
  dark: MoonStar,
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      aria-label="Theme toggle"
      className="inline-flex items-center gap-1 rounded-full border border-line bg-panel/90 p-1 shadow-panel backdrop-blur"
      role="group"
    >
      {themes.map((option) => {
        const Icon = icons[option];

        return (
          <button
            key={option}
            type="button"
            onClick={() => setTheme(option)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
              theme === option
                ? "bg-accent text-[#111317]"
                : "text-textMuted hover:bg-surfaceSoft hover:text-text",
            )}
            aria-pressed={theme === option}
          >
            <Icon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{themeLabels[option]}</span>
          </button>
        );
      })}
    </div>
  );
}
