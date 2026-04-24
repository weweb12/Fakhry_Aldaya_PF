"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ThemeToggle } from "@/components/site/theme-toggle";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-surface/82 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(100%-1.5rem,76rem)] items-center justify-between gap-4 py-4">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-line bg-panel text-sm font-semibold text-text shadow-panel transition group-hover:-translate-y-0.5">
            FA
          </span>
          <div>
            <p className="font-display text-sm font-semibold tracking-wide text-text">{siteConfig.name}</p>
            <p className="text-xs text-textMuted">Secure systems and practical product work</p>
          </div>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <nav aria-label="Primary navigation" className="flex items-center gap-1 rounded-full border border-line bg-panel/80 p-1 shadow-panel">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  pathname === item.href
                    ? "bg-accent text-[#111317]"
                    : "text-textMuted hover:bg-surfaceSoft hover:text-text",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-panel text-text transition hover:bg-panelStrong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line/70 bg-surface/96 lg:hidden">
          <div className="mx-auto flex w-[min(100%-1.5rem,76rem)] flex-col gap-4 py-4">
            <nav aria-label="Mobile navigation" className="grid gap-2">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-2xl border px-4 py-3 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                    pathname === item.href
                      ? "border-accent/50 bg-accent/16 text-text"
                      : "border-line bg-panel text-textMuted hover:border-accent/40 hover:text-text",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      ) : null}
    </header>
  );
}
