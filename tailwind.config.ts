import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "var(--surface)",
        surfaceSoft: "var(--surface-soft)",
        panel: "var(--panel)",
        panelStrong: "var(--panel-strong)",
        text: "var(--text)",
        textMuted: "var(--text-muted)",
        line: "var(--line)",
        accent: "var(--accent)",
        accentSoft: "var(--accent-soft)",
        accentStrong: "var(--accent-strong)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        panel: "var(--shadow-panel)",
        lift: "var(--shadow-lift)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        content: "76rem",
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(127, 135, 148, 0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(127, 135, 148, 0.14) 1px, transparent 1px)",
        halo: "radial-gradient(circle at top, rgba(208, 213, 221, 0.18), transparent 42%)",
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
