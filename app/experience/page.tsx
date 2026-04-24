import type { Metadata } from "next";

import { ContactPanel } from "@/components/site/contact-panel";
import { ExperienceCard } from "@/components/site/experience-card";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeader } from "@/components/site/section-header";
import { experienceSupport, experiences } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience and practical infrastructure exposure from Fakhry Aldaya's networking and security background.",
};

export default function ExperiencePage() {
  return (
    <PageShell className="section-stack section-space">
      <section className="hero-panel">
        <SectionHeader
          eyebrow="Experience"
          title="Early professional experience with networking, cloud structure, and repeatable technical work"
          description="Even with one internship so far, the page is designed to show a real progression: hands-on fundamentals, security-aware thinking, and documentation habits that connect directly to product and systems work."
        />
      </section>

      <section className="section-stack">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.role} {...experience} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {experienceSupport.map((group) => (
          <article key={group.title} className="rounded-[1.8rem] border border-line bg-panel p-6 shadow-panel">
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">{group.title}</p>
            <div className="mt-5 grid gap-3">
              {group.items.map((item) => (
                <div key={item} className="rounded-2xl border border-line/90 bg-surfaceSoft/60 p-4 text-sm leading-7 text-textMuted">
                  {item}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <ContactPanel />
    </PageShell>
  );
}
