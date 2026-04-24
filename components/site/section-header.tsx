import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center", className)}>
      <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">{eyebrow}</p>
      <div className="space-y-3">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-7 text-textMuted sm:text-lg">{description}</p>
      </div>
    </div>
  );
}
