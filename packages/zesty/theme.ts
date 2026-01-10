import { signal, type Signal } from "@preact/signals";

export const theme = signal<"light" | "dark">("light") as Signal<"light" | "dark">;