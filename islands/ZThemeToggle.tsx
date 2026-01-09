import type { JSX } from "preact";
import { useCallback } from "preact/hooks";
import { useSignal } from "@preact/signals";

export function ZThemeToggle(props: { value?: "light" | "dark" }): JSX.Element {
    const theme = useSignal(props.value || "light");
  const toggle = useCallback((e: Event) => {
    const btn = e.currentTarget as HTMLElement;
    const root = btn.closest(".zui");

    if (!root) return;

    const current = root.getAttribute("data-theme") ?? "light";
    theme.value = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", theme.value);
  }, []);

  return (
    <div data-zui="theme-toggle">
        <div class="root">
            <input type="checkbox" id="toggle" class="toggle-checkbox" checked={theme.value === "dark"} onClick={toggle} />
            <label for="toggle" class="toggle-label">
            <span class="toggle-inner"></span>
            <span class="toggle-switch">
                {/* <!-- Sun Icon (Visible in Light Mode) --> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun icon sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                {/* <!-- Moon Icon (Visible in Dark Mode) --> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon icon moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
            </span>
            </label>
        </div>
    </div>
  );
}
