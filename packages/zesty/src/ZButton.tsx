export function ZButton(props: { children: preact.ComponentChildren }): preact.JSX.Element {
  return (
    <div data-zui="button">
      <button type="button" class="root">{props.children}</button>
    </div>
  );
}
