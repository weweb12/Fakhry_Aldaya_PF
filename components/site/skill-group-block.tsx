import { SkillGroup } from "@/content/skills";
import { SkillItemCard } from "@/components/site/skill-item-card";

export function SkillGroupBlock({ group }: { group: SkillGroup }) {
  return (
    <article className="rounded-[1.75rem] border border-line bg-panel p-6 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-panelStrong">
      <div className="space-y-3">
        <h3 className="font-display text-2xl font-semibold text-text">{group.title}</h3>
        <p className="text-sm leading-7 text-textMuted">{group.description}</p>
      </div>
      <div className="mt-6 space-y-3">
        {group.items.map((item) => (
          <SkillItemCard key={item.name} item={item} />
        ))}
      </div>
    </article>
  );
}
