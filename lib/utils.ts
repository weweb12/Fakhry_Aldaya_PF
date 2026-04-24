export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Prefix a public-folder path with the Next.js basePath so raw HTML elements
 * (<video>, <source>, <a>, <meta>) resolve correctly on GitHub Pages.
 * `next/image` and `next/link` handle this automatically — use this helper
 * only for native HTML tags.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/Fakhry_Aldaya_PF";

export function assetPath(path: string): string {
  if (!path || path.startsWith("http") || path.startsWith("data:")) return path;
  return `${BASE_PATH}${path.startsWith("/") ? "" : "/"}${path}`;
}
