import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative overflow-hidden rounded-[1.9rem] border border-line bg-panel p-6 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-panelStrong hover:shadow-lift",
        featured && "grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:p-8",
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(208,213,221,0.16),transparent_42%)] opacity-80" />

      <div className="relative space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-line bg-surfaceSoft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-textMuted">
            {project.category}
          </span>
          <span className="rounded-full bg-accent/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-text">
            {project.status}
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            {featured ? <Sparkles className="h-5 w-5 text-accent" /> : null}
            <h3 className="font-display text-2xl font-semibold tracking-tight text-text sm:text-[2rem]">
              {project.name}
            </h3>
          </div>
          <p className="max-w-2xl text-base leading-7 text-textMuted">{project.summary}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {project.metrics.map((item) => (
            <div key={item.label} className="rounded-2xl border border-line/90 bg-surfaceSoft/65 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-textMuted">{item.label}</p>
              <p className="mt-2 text-sm font-medium text-text">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col justify-between gap-6">
        <div className="rounded-[1.7rem] border border-line/90 bg-surface/70 p-5">
          <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">Problem → Build → Value</p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-textMuted">
            <p>
              <span className="font-semibold text-text">Problem:</span> {project.problem[0]}
            </p>
            <p>
              <span className="font-semibold text-text">Build:</span> {project.build[0]}
            </p>
            <p>
              <span className="font-semibold text-text">Value:</span> {project.whyItMatters}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {project.techStack.slice(0, featured ? 6 : 4).map((item) => (
            <span key={item} className="rounded-full border border-line bg-panelStrong px-3 py-2 text-xs text-textMuted">
              {item}
            </span>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 text-sm font-medium text-text transition group-hover:gap-3">
          View case study
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
