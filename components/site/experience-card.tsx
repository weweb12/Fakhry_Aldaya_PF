import Image from "next/image";
import { Network, ShieldCheck } from "lucide-react";

type ExperienceCardProps = {
  role: string;
  organization: string;
  logo?: string;
  period: string;
  summary: string;
  bullets: string[];
  highlights: string[];
};

export function ExperienceCard({
  role,
  organization,
  logo,
  period,
  summary,
  bullets,
  highlights,
}: ExperienceCardProps) {
  return (
    <article className="grid gap-6 rounded-[2rem] border border-line bg-panel p-6 shadow-panel lg:grid-cols-[0.32fr_1fr] lg:p-8">
      <div className="space-y-4">
        {logo ? (
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-line bg-panelStrong shrink-0">
            <Image src={logo} alt={`${organization} logo`} fill className="object-cover" sizes="48px" />
          </div>
        ) : (
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surfaceSoft text-accent shrink-0">
            <Network className="h-5 w-5" />
          </div>
        )}
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">{period}</p>
          <h3 className="font-display text-2xl font-semibold text-text">{role}</h3>
          <p className="text-sm text-textMuted">{organization}</p>
        </div>
      </div>

      <div className="space-y-6">
        <p className="max-w-3xl text-base leading-7 text-textMuted">{summary}</p>

        <div className="grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <div key={item} className="rounded-2xl border border-line/90 bg-surfaceSoft/60 px-4 py-3 text-sm text-text">
              {item}
            </div>
          ))}
        </div>

        <div className="grid gap-3">
          {bullets.map((bullet) => (
            <div key={bullet} className="flex gap-3 rounded-2xl border border-line/90 bg-surface/60 p-4">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <p className="text-sm leading-7 text-textMuted">{bullet}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
