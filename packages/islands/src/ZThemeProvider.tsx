import { useEffect } from "preact/hooks";
import { ZestyUIProvider } from "@zesty/core";
import { theme } from "@zesty/core";

export function ZThemeProvider({ children }: { children: preact.ComponentChildren }): preact.JSX.Element {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("theme");
    const prefersDark = globalThis.window?.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
    const initial = (stored === "dark" || stored === "light") ? stored : (prefersDark ? "dark" : "light");

    theme.value = initial;
    document.documentElement.dataset.theme = initial;
  }, []);

  return <ZestyUIProvider data-theme={theme.value}>{children}</ZestyUIProvider>;
}