export const THEME_STORAGE_KEY = "fakhry-portfolio-theme";

export const themes = ["graphite", "light", "dark"] as const;

export type ThemeMode = (typeof themes)[number];

export const themeLabels: Record<ThemeMode, string> = {
  graphite: "Graphite",
  light: "Light",
  dark: "Dark",
};

export const themeInitScript = `
  (function () {
    var storageKey = "${THEME_STORAGE_KEY}";
    var themes = ["graphite", "light", "dark"];
    var stored = window.localStorage.getItem(storageKey);
    var theme = themes.indexOf(stored) >= 0 ? stored : "graphite";
    document.documentElement.dataset.theme = theme;
  })();
`;
