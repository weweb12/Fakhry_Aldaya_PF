import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PageShell } from "@/components/site/page-shell";

export default function NotFound() {
  return (
    <PageShell className="section-space">
      <section className="hero-panel space-y-5">
        <p className="text-xs font-semibold uppercase tracking-eyebrow text-textMuted">404</p>
        <h1 className="font-display text-4xl font-semibold text-text">This page does not exist.</h1>
        <p className="max-w-2xl text-base leading-7 text-textMuted">
          The route might have changed, or the page may not have been generated in the static export.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-text hover:text-accent">
          Return to the homepage
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </PageShell>
  );
}
