export function SectionDivider({ label }: { label?: string }) {
  return (
    <div className={`w-full relative flex items-center justify-center my-6 ${label ? 'sticky top-6 z-40' : ''}`}>
      <div className="w-full max-w-[76rem] h-px bg-text/60 shadow-sm relative">
        <div className="absolute top-0 w-full h-12 bg-gradient-to-b from-[var(--surface-soft)]/20 to-transparent pointer-events-none" />
      </div>
      {label && (
        <div className="absolute rounded-full border border-line/80 bg-panel/80 px-5 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-textMuted shadow-sm backdrop-blur-md">
          {label}
        </div>
      )}
    </div>
  );
}
