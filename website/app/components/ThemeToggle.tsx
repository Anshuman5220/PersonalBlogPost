"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "site-theme";
const THEME_EVENT = "site-theme-change";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.localStorage.setItem(STORAGE_KEY, theme);
  window.dispatchEvent(new Event(THEME_EVENT));
}

function getThemeSnapshot(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const documentTheme = document.documentElement.dataset.theme;
  if (documentTheme === "light" || documentTheme === "dark") {
    return documentTheme;
  }

  return getPreferredTheme();
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleThemeChange = () => onStoreChange();

  window.addEventListener(THEME_EVENT, handleThemeChange);
  window.addEventListener("storage", handleThemeChange);
  mediaQuery.addEventListener("change", handleThemeChange);

  return () => {
    window.removeEventListener(THEME_EVENT, handleThemeChange);
    window.removeEventListener("storage", handleThemeChange);
    mediaQuery.removeEventListener("change", handleThemeChange);
  };
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, () => "light");

  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => applyTheme(nextTheme)}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={theme === "dark"}
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {theme === "light" ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4.25" />
            <path d="M12 1.75v2.5" />
            <path d="M12 19.75v2.5" />
            <path d="M4.76 4.76l1.77 1.77" />
            <path d="M17.47 17.47l1.77 1.77" />
            <path d="M1.75 12h2.5" />
            <path d="M19.75 12h2.5" />
            <path d="M4.76 19.24l1.77-1.77" />
            <path d="M17.47 6.53l1.77-1.77" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.2 14.4a8.5 8.5 0 1 1-10.6-10.6 7.3 7.3 0 1 0 10.6 10.6Z" />
          </svg>
        )}
      </span>
    </button>
  );
}
