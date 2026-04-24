import type { Metadata } from "next";
import { FileText, Github, Mail, MapPin } from "lucide-react";

import { CTAButton } from "@/components/site/cta-button";
import { ContactPanel } from "@/components/site/contact-panel";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeader } from "@/components/site/section-header";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact information for Fakhry Aldaya, including email, GitHub, location, and CV download support.",
};

export default function ContactPage() {
  return (
    <PageShell className="section-stack section-space">
      <section className="hero-panel">
        <SectionHeader
          eyebrow=""
          title="Contact Me Below"
          description=""
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[1.8rem] border border-line bg-panel p-6 shadow-panel">
          <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted"></p>
          <div className="mt-5 grid gap-4">
            <a href={`mailto:${siteConfig.email}`} className="rounded-2xl border border-line bg-surfaceSoft/60 p-5 transition hover:border-accent/30 hover:bg-panelStrong">
              <Mail className="h-5 w-5 text-accent" />
              <h2 className="mt-4 text-lg font-semibold text-text">Email</h2>
              <p className="mt-2 text-sm text-textMuted">{siteConfig.email}</p>
            </a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="rounded-2xl border border-line bg-surfaceSoft/60 p-5 transition hover:border-accent/30 hover:bg-panelStrong">
              <Github className="h-5 w-5 text-accent" />
              <h2 className="mt-4 text-lg font-semibold text-text">GitHub</h2>
              <p className="mt-2 text-sm text-textMuted">github.com/weweb12</p>
            </a>
          </div>
        </article>

        <article className="rounded-[1.8rem] border border-line bg-panel p-6 shadow-panel">
          <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">Availability</p>
          <div className="mt-5 grid gap-4">
            <div className="rounded-2xl border border-line bg-surfaceSoft/60 p-5">
              <MapPin className="h-5 w-5 text-accent" />
              <h2 className="mt-4 text-lg font-semibold text-text">Location</h2>
              <p className="mt-2 text-sm text-textMuted">{siteConfig.location}</p>
            </div>
            <div className="rounded-2xl border border-line bg-surfaceSoft/60 p-5">
              <FileText className="h-5 w-5 text-accent" />
              <h2 className="mt-4 text-lg font-semibold text-text">CV download</h2>
              <div className="mt-4">
                <CTAButton
                  href={siteConfig.cv.href}
                  variant="secondary"
                  disabled={!siteConfig.cv.available}
                  download={siteConfig.cv.available}
                >
                  {siteConfig.cv.label}
                </CTAButton>
              </div>
            </div>
          </div>
        </article>
      </section>

      <ContactPanel />
    </PageShell>
  );
}
