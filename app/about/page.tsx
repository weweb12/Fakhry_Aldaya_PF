import type { Metadata } from "next";

import { PageShell } from "@/components/site/page-shell";
import { QuickFactCard } from "@/components/site/quick-fact-card";
import { SectionHeader } from "@/components/site/section-header";
import { SkillGroupBlock } from "@/components/site/skill-group-block";
import { siteConfig } from "@/content/site";
import { skillGroups } from "@/content/skills";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, philosophy, and strengths of Fakhry Aldaya across networking, security, automation, and product-minded engineering.",
};

export default function AboutPage() {
  return (
    <PageShell className="section-stack section-space">
      <section className="hero-panel">
        <SectionHeader
          eyebrow="About"
          title="A networking and security background moving into practical software systems"
          description="I am most interested in building tools that feel trustworthy, readable, and grounded in real workflow needs. That usually means thinking about system behavior and user decisions at the same time."
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="hero-panel space-y-4">
          <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">Personal philosophy</p>
          {siteConfig.philosophy.map((item) => (
            <p key={item} className="text-base leading-8 text-textMuted">
              {item}
            </p>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {siteConfig.quickFacts.map((item) => (
            <QuickFactCard key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {siteConfig.strengths.map((item) => (
          <article key={item.title} className="rounded-[1.8rem] border border-line bg-panel p-6 shadow-panel">
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">Strength</p>
            <h2 className="mt-4 font-display text-2xl font-semibold text-text">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-textMuted">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="hero-panel space-y-4">
          <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">Education</p>
          <h2 className="font-display text-3xl font-semibold text-text">{siteConfig.education.school}</h2>
          <p className="text-base font-medium text-text">{siteConfig.education.degree}</p>
          <p className="text-sm text-textMuted">{siteConfig.education.period}</p>
          <p className="text-sm leading-7 text-textMuted">{siteConfig.education.summary}</p>
        </div>

        <div className="grid gap-6">
          {skillGroups.slice(0, 2).map((group) => (
            <SkillGroupBlock key={group.title} group={group} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
