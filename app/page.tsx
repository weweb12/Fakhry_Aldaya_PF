import { ChevronDown, ShieldCheck, Sparkles, Workflow } from "lucide-react";

import { ContactPanel } from "@/components/site/contact-panel";
import { CTAButton } from "@/components/site/cta-button";
import { PageShell } from "@/components/site/page-shell";
import { Parallax } from "@/components/site/parallax";
import { ProjectCard } from "@/components/site/project-card";
import { QuickFactCard } from "@/components/site/quick-fact-card";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { SectionDivider } from "@/components/site/section-divider";
import { SectionHeader } from "@/components/site/section-header";
import { SkillsShowcase } from "@/components/site/skills-showcase";
import { featuredProjects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { skillGroups } from "@/content/skills";

export default function HomePage() {
  return (
    <>
      {/* ── FULL-SCREEN HERO ── */}
      <section className="relative flex min-h-[calc(100dvh-4.5rem)] flex-col items-center justify-center overflow-hidden text-center group">
        {/* Ambient background orbs */}
        <div className="absolute top-1/3 left-1/4 h-[500px] w-[500px] animate-float rounded-full bg-accentSoft opacity-40 blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] animate-float rounded-full bg-accent opacity-20 blur-[120px] pointer-events-none [animation-delay:3s]"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-[min(100%-2rem,72rem)] flex flex-col items-center gap-8 px-4 py-20">
          <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted animate-fade-in-up opacity-0">
            {siteConfig.hero.eyebrow}
          </p>

          <Parallax offset={40}>
            <h1 className="text-balance font-display text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] animate-fade-in-up opacity-0 [animation-delay:150ms]">
              <span className="bg-gradient-to-br from-text via-text to-textMuted bg-clip-text text-transparent">
                {siteConfig.hero.title}
              </span>
            </h1>
          </Parallax>

          <p className="max-w-2xl text-lg leading-8 text-textMuted animate-fade-in-up opacity-0 [animation-delay:300ms]">
            {siteConfig.hero.description}
          </p>

          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up opacity-0 [animation-delay:450ms]">
            <CTAButton href={siteConfig.hero.primaryCta.href}>{siteConfig.hero.primaryCta.label}</CTAButton>
            <CTAButton href={siteConfig.hero.secondaryCta.href} variant="secondary">
              {siteConfig.hero.secondaryCta.label}
            </CTAButton>
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

        {/* Scroll indicator */}
        <a
          href="#content"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-textMuted/60 transition-colors hover:text-textMuted animate-fade-in-up opacity-0 [animation-delay:1100ms]"
          aria-label="Scroll to content"
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </section>

      {/* ── REST OF PAGE CONTENT ── */}
      <div id="content">
        <PageShell className="section-stack section-space">
          {/* Support Columns */}
          <div className="relative pt-8">
            <SectionDivider label="Profile" />
            <ScrollReveal delay={0.1}>
              <section className="grid gap-6 lg:grid-cols-2 lg:items-start">
              <div className="hero-panel space-y-5 h-full">
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surfaceSoft/70 px-4 py-2 text-xs font-semibold uppercase tracking-eyebrow text-textMuted">
                  <Sparkles className="h-4 w-4 text-accent" />
                  What I solve for
                </div>
                <div className="grid gap-4">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "Secure systems with usable interfaces",
                      description: "I care about trust and clarity, especially when systems carry operational or security meaning.",
                    },
                    {
                      icon: Workflow,
                      title: "Practical workflow improvement",
                      description: "My strongest projects reduce friction, improve repeatability, or make decisions easier to understand.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[1.6rem] border border-line bg-panelStrong p-5 h-full">
                      <item.icon className="h-5 w-5 text-accent" />
                      <h2 className="mt-4 text-lg font-semibold text-text">{item.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-textMuted">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-panel h-full flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">Quick profile</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 flex-grow auto-rows-max">
                  {siteConfig.quickFacts.map((item) => (
                    <QuickFactCard key={item.label} label={item.label} value={item.value} />
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>
          </div>

          <div className="relative pt-8">
            <SectionDivider label="Work" />
            <ScrollReveal delay={0.1}>
              <section className="section-stack">
              <SectionHeader
                eyebrow="Featured work"
                title="Projects built around trust, visibility, and real workflow value"
                description="The project section leads with systems that solve concrete problems, not filler showcases. NetSentinel gets the flagship treatment, with the rest positioned as focused product case studies."
              />
              <div className="grid gap-6">
                <ProjectCard featured project={featuredProjects[0]} />
                <div className="grid gap-6 lg:grid-cols-2">
                  {featuredProjects.slice(1).map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>
          </div>

          <div className="relative pt-8">
            <SectionDivider label="Skills" />
            <ScrollReveal delay={0.1}>
              <section className="section-stack">
                <SkillsShowcase groups={skillGroups} />
              </section>
            </ScrollReveal>
          </div>

          <div className="relative pt-8">
            <SectionDivider label="Approach" />
            <ScrollReveal delay={0.1}>
              <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="hero-panel space-y-5">
                <SectionHeader
                  eyebrow="Approach"
                  title="I like software that helps people make better decisions"
                  description="My work sits between secure systems thinking and product clarity. I want the interface, workflow, and architecture to reinforce each other."
                />
                <div className="grid gap-3">
                  {siteConfig.philosophy.map((item) => (
                    <div key={item} className="rounded-2xl border border-line/90 bg-surfaceSoft/60 p-4 text-sm leading-7 text-textMuted">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6">
                {siteConfig.approach.map((item) => (
                  <div key={item.title} className="hero-panel">
                    <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">{item.title}</p>
                    <p className="mt-4 text-base leading-7 text-textMuted">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
          </div>

          <div className="relative pt-8">
            <SectionDivider label="Contact" />
            <ScrollReveal delay={0.1}>
              <ContactPanel />
            </ScrollReveal>
          </div>
        </PageShell>
      </div>
    </>
  );
}
