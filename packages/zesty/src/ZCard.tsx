export function ZCard(props: { children: preact.ComponentChildren }): preact.JSX.Element {
  return (
    <div data-zui="card">
      <div class="root">{props.children}</div>
    </div>
  );
}
