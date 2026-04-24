import { SkillItem, SkillStrength } from "@/content/skills";
import { SkillIconStack } from "@/lib/skill-icons";
import { cn } from "@/lib/utils";

const strengthLabel: Record<SkillStrength, string> = {
  strongest: "Strongest",
  "project-backed": "Project-backed",
  supporting: "Supporting",
};

type SkillItemCardProps = {
  item: SkillItem;
  className?: string;
};

export function SkillItemCard({ item, className }: SkillItemCardProps) {
  return (
    <article
      className={cn(
        "rounded-[1.45rem] border border-line/90 bg-surfaceSoft/60 p-4 transition duration-300 hover:border-accent/35 hover:bg-panelStrong",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <SkillIconStack name={item.name} />
          <h4 className="text-sm font-semibold text-text">{item.name}</h4>
        </div>
        <span
          className={cn(
            "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
            item.strength === "strongest" && "bg-accent text-[#111317]",
            item.strength === "project-backed" && "bg-accent/14 text-text",
            item.strength === "supporting" && "bg-surface text-textMuted",
          )}
        >
          {strengthLabel[item.strength]}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-textMuted">{item.context}</p>
    </article>
  );
}
