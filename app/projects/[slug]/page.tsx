import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { CaseStudySection } from "@/components/site/case-study-section";
import { MediaGallery } from "@/components/site/media-gallery";
import { SlideShow } from "@/components/site/slide-show";
import { VideoPlayer } from "@/components/site/video-player";
import { MobileDeck } from "@/components/site/mobile-deck";
import { PageShell } from "@/components/site/page-shell";
import { CTAButton } from "@/components/site/cta-button";
import { getProjectBySlug, projects } from "@/content/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <PageShell className="section-stack section-space">
      <section className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
        <article className="hero-panel space-y-6">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-textMuted hover:text-text">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-line bg-surfaceSoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-textMuted">
                {project.category}
              </span>
              <span className="rounded-full bg-accent/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-text">
                {project.status}
              </span>
            </div>
            <h1 className="text-balance font-display text-4xl font-semibold leading-tight text-text sm:text-5xl">
              {project.name}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-textMuted">{project.summary}</p>
            {project.websiteUrl && (
              <div className="pt-3 animate-fade-in-up [animation-delay:200ms]">
                <CTAButton href={project.websiteUrl} external>
                  Visit Website
                </CTAButton>
              </div>
            )}
          </div>
          <div className="rounded-[1.75rem] border border-line/90 bg-surfaceSoft/65 p-5">
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">Positioning summary</p>
            <p className="mt-4 text-base leading-8 text-textMuted">{project.positioning}</p>
          </div>
        </article>

        <aside className="grid gap-6">
          <article className="hero-panel">
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">Project snapshot</p>
            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl border border-line bg-surfaceSoft/60 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-textMuted">Timeline</p>
                <p className="mt-2 text-sm font-medium text-text">{project.timeframe}</p>
              </div>
              {project.metrics.map((item) => (
                <div key={item.label} className="rounded-2xl border border-line bg-surfaceSoft/60 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-textMuted">{item.label}</p>
                  <p className="mt-2 text-sm font-medium text-text">{item.value}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="hero-panel">
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">Stack and themes</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((item) => (
                <span key={item} className="rounded-full border border-line bg-panelStrong px-3 py-2 text-xs text-textMuted">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((item) => (
                <span key={item} className="rounded-full bg-accent/14 px-3 py-2 text-xs text-text">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </aside>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <CaseStudySection eyebrow="Problem" title="Why this project exists" items={project.problem} />
        <CaseStudySection eyebrow="Build" title="What was built" items={project.build} />
        <CaseStudySection eyebrow="Architecture" title="Workflow and system highlights" items={project.architecture} />
        <CaseStudySection eyebrow="Key decisions" title="Choices that shaped the product" items={project.decisions} />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <CaseStudySection eyebrow="Challenges" title="Constraints and product direction" items={project.challenges} />
        <CaseStudySection eyebrow="Result" title="Current status and value" items={project.result} />
      </section>

      {project.media && project.media.length > 0 && (
        <section className="section-stack">
          <div className="hero-panel space-y-4">
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">
              {project.presentationMode
                ? "Presentation Slides"
                : project.isVideoShowcase
                  ? "Product Walkthrough"
                  : "Media gallery"}
            </p>
            <h2 className="font-display text-3xl font-semibold text-text">
              {project.presentationMode
                ? "Project presentation and overview"
                : project.isVideoShowcase
                  ? "End-to-End Demonstration"
                  : "Screenshots and walkthrough"}
            </h2>
            <p className="max-w-3xl text-base leading-7 text-textMuted">
              {" "}
              <code className="rounded bg-surfaceSoft px-2 py-1 text-xs text-text">{project.slug}</code>
            </p>
          </div>
          {project.presentationMode ? (
            <SlideShow items={project.media} />
          ) : project.isVideoShowcase ? (
            <VideoPlayer item={project.media[0]} />
          ) : (
            <MediaGallery items={project.media} />
          )}
        </section>
      )}

      {project.mobileMedia && project.mobileMedia.length > 0 && (
        <section className="section-stack pt-8 lg:pt-16">
          <div className="hero-panel space-y-4">
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">Mobile Interface</p>
            <h2 className="font-display text-3xl font-semibold text-text">Responsive App Screens</h2>
            <p className="max-w-3xl text-base leading-7 text-textMuted">
              Native and responsive experiences mapped onto real-device layouts.
            </p>
          </div>
          <MobileDeck items={project.mobileMedia} />
        </section>
      )}

      <section className="hero-panel">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">Next project</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-text">{nextProject.name}</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-textMuted">{nextProject.summary}</p>
          </div>
          <CTAButton href={`/projects/${nextProject.slug}`}>Continue to next case study</CTAButton>
        </div>
      </section>
    </PageShell>
  );
}
