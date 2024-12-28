import { Theme } from "@/types/theme";

export const getInitialTheme = (
  storageKey: string,
  defaultTheme: Theme
): Theme => {
  const storedTheme = localStorage.getItem(storageKey) as Theme;
  return storedTheme || defaultTheme;
};

export const applyTheme = (theme: Theme) => {
  localStorage.setItem("vite-ui-theme", theme);
  window.document.documentElement.classList.remove("light", "dark");

  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    window.document.documentElement.classList.add(systemTheme);
    return;
  }

  window.document.documentElement.classList.add(theme);
};
