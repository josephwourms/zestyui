export function ZestyUIProvider(
  props: { theme?: "light" | "dark"; children: preact.ComponentChildren } & preact.HTMLAttributes<HTMLDivElement>
): preact.JSX.Element {
  return <div class="zui" data-theme={props.theme || "light"} {...props}>{props.children}</div>;
}
