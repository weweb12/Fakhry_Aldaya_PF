import { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

import { cn, assetPath } from "@/lib/utils";

type CTAButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  disabled?: boolean;
  download?: boolean;
};

export function CTAButton({
  href = "#",
  children,
  variant = "primary",
  className,
  external = false,
  disabled = false,
  download = false,
}: CTAButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variant === "primary" &&
      "border-accentStrong bg-accent text-[#111317] shadow-panel hover:-translate-y-0.5 hover:bg-accentStrong/90",
    variant === "secondary" &&
      "border-line bg-panel text-text hover:-translate-y-0.5 hover:border-accent/50 hover:bg-panelStrong",
    variant === "ghost" &&
      "border-transparent bg-transparent px-0 text-textMuted hover:text-text",
    disabled && "cursor-not-allowed border-line/60 bg-panel/40 text-textMuted opacity-70 hover:translate-y-0",
    className,
  );

  const icon = download ? <Download className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />;

  if (disabled) {
    return <span className={classes}>{children}</span>;
  }

  if (external || href.startsWith("mailto:") || download) {
    return (
      <a
        className={classes}
        href={download ? assetPath(href) : href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        download={download}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
      {icon}
    </Link>
  );
}
