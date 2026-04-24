import Link from "next/link";
import { Github, Mail, MapPin } from "lucide-react";

import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line/70 bg-surfaceSoft/60">
      <div className="mx-auto grid w-[min(100%-1.5rem,76rem)] gap-10 py-12 lg:grid-cols-[1.35fr_0.85fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">Fakhry Aldaya</p>
          <h2 className="font-display text-2xl font-semibold text-text">
            Secure systems, workflow tooling, and technical products with practical value.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-textMuted">
          </p>
        </div>

        <div className="grid gap-3 text-sm text-textMuted">
          <a className="inline-flex items-center gap-3 hover:text-text" href={`mailto:${siteConfig.email}`}>
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </a>
          <a className="inline-flex items-center gap-3 hover:text-text" href={siteConfig.github} target="_blank" rel="noreferrer">
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <p className="inline-flex items-center gap-3">
            <MapPin className="h-4 w-4" />
            {siteConfig.location}
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-text">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
