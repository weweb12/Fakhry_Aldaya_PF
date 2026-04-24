type CaseStudySectionProps = {
  eyebrow: string;
  title: string;
  items: string[];
};

export function CaseStudySection({ eyebrow, title, items }: CaseStudySectionProps) {
  return (
    <section className="rounded-[1.9rem] border border-line bg-panel p-6 shadow-panel lg:p-8">
      <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">{eyebrow}</p>
      <h2 className="mt-3 font-display text-2xl font-semibold text-text sm:text-[2rem]">{title}</h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-line/90 bg-surfaceSoft/60 p-4">
            <p className="text-sm leading-7 text-textMuted">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
