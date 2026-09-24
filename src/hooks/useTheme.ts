import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const darkQuery = "(prefers-color-scheme: dark)";

function getInitialTheme(): Theme {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === "light" || explicit === "dark") return explicit;
  return window.matchMedia(darkQuery).matches ? "dark" : "light";
}

/**
 * Follows the OS color scheme until the visitor picks one, then remembers it.
 * index.html applies the saved choice before first paint.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const media = window.matchMedia(darkQuery);
    const onChange = (e: MediaQueryListEvent) => {
      if (!document.documentElement.dataset.theme) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {
        // Storage can be unavailable (private mode); the choice just won't persist.
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
