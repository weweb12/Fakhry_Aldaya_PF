import type { ReactNode } from "react";
import type { Metadata } from "next";

import "@/app/globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { siteConfig } from "@/content/site";
import { themeInitScript } from "@/lib/theme";

export const metadata: Metadata = {
  title: {
    default: "Fakhry Aldaya | Secure Systems and Product-Minded Developer",
    template: "%s | Fakhry Aldaya",
  },
  description:
    "Portfolio of Fakhry Aldaya, a junior developer focused on secure software systems, automation tools, and networking-aware technical product work.",
  icons: {
    icon: "/Fakhry_Aldaya_PF/icon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <meta property="og:title" content="Fakhry Aldaya | Secure Systems and Product-Minded Developer" />
        <meta
          property="og:description"
          content="Secure systems, automation tooling, operator visibility, and practical technical product work."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Fakhry_Aldaya_PF/og-cover.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fakhry Aldaya" />
        <meta
          name="twitter:description"
          content="Junior developer focused on secure systems, automation, and technical products."
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
