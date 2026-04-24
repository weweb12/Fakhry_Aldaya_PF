type QuickFactCardProps = {
  label: string;
  value: string;
};

export function QuickFactCard({ label, value }: QuickFactCardProps) {
  return (
    <div className="rounded-3xl border border-line bg-panel p-5 shadow-panel">
      <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">{label}</p>
      <p className="mt-3 text-base font-medium leading-6 text-text">{value}</p>
    </div>
  );
}
