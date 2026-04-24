import type { Metadata } from "next";

import { PageShell } from "@/components/site/page-shell";
import { ProjectCard } from "@/components/site/project-card";
import { SectionHeader } from "@/components/site/section-header";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies and project highlights from Fakhry Aldaya across secure systems, workflow tooling, and practical product builds.",
};

export default function ProjectsPage() {
  const [flagship, ...rest] = projects;

  return (
    <PageShell className="section-stack section-space">
      <section className="hero-panel">
        <SectionHeader
          eyebrow="Projects"
          title="Technical case studies with stronger structure and clearer value"
          description="Each project is framed around the problem it addresses, what was built, and why it matters. The goal is to communicate engineering depth and product judgment at the same time."
        />
      </section>

      <section className="section-stack">
        <div className="grid gap-6">
          <ProjectCard featured project={flagship} />
          <div className="grid gap-6 lg:grid-cols-2">
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
