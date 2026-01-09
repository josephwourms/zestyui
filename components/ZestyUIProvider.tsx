export function ZestyUIProvider(
  props: { children: preact.ComponentChildren } & preact.HTMLAttributes<HTMLDivElement>
): preact.JSX.Element {
  return <div class="zui" {...props}>{props.children}</div>;
}
