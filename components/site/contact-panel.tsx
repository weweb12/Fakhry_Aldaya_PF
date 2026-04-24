import { Github, Mail, MapPin } from "lucide-react";

import { CTAButton } from "@/components/site/cta-button";
import { siteConfig } from "@/content/site";

export function ContactPanel() {
  return (
    <section className="rounded-[2rem] border border-line bg-panel p-6 shadow-panel lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">Contact</p>
          <h2 className="font-display text-3xl font-semibold text-text">{siteConfig.contactPanel.title}</h2>
          <p className="max-w-2xl text-base leading-7 text-textMuted">{siteConfig.contactPanel.description}</p>
          <div className="flex flex-wrap gap-3">
            <CTAButton href={`mailto:${siteConfig.email}`}>Email Fakhry</CTAButton>
            <CTAButton href={siteConfig.github} variant="secondary" external>
              View GitHub
            </CTAButton>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="rounded-2xl border border-line/90 bg-surfaceSoft/60 p-4">
            <p className="inline-flex items-center gap-3 text-sm text-text">
              <Mail className="h-4 w-4 text-accent" />
              {siteConfig.email}
            </p>
          </div>
          <div className="rounded-2xl border border-line/90 bg-surfaceSoft/60 p-4">
            <p className="inline-flex items-center gap-3 text-sm text-text">
              <Github className="h-4 w-4 text-accent" />
              GitHub: weweb12
            </p>
          </div>
          <div className="rounded-2xl border border-line/90 bg-surfaceSoft/60 p-4">
            <p className="inline-flex items-center gap-3 text-sm text-text">
              <MapPin className="h-4 w-4 text-accent" />
              {siteConfig.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
