# Component Documentation

Zesty UI provides a set of lightweight, pre-built components for use with Deno's Fresh framework. All components are fully typed with TypeScript and built on Preact.

## Component Listing

- [ZButton](#zbutton) - Simple styled button component
- [ZCard](#zcard) - Container component for content grouping
- [ZestyUIProvider](#zestyuiprovider) - Theme provider and wrapper component
- [ZThemeToggle](#zthemetoggle) - Interactive theme switcher island

---

## ZButton

A simple, styled button component with default styling applied via CSS.

### Type Definition

```typescript
interface ZButtonProps {
  children: preact.ComponentChildren;
}

function ZButton(props: ZButtonProps): preact.JSX.Element
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `preact.ComponentChildren` | Yes | The content to render inside the button |

### Example

```tsx
import { ZButton } from '@zesty/ui';

export default function App() {
  return (
    <ZButton>
      Click me
    </ZButton>
  );
}
```

### Styling

The button uses the `data-zui="button"` attribute for styling. CSS classes applied:
- `.root` - Main button element with default styles

---

## ZCard

A container component for grouping content with card styling.

### Type Definition

```typescript
interface ZCardProps {
  children: preact.ComponentChildren;
}

function ZCard(props: ZCardProps): preact.JSX.Element
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `preact.ComponentChildren` | Yes | Content to render inside the card |

### Example

```tsx
import { ZCard } from '@zesty/ui';

export default function Dashboard() {
  return (
    <ZCard>
      <h2>Card Title</h2>
      <p>Card content goes here</p>
    </ZCard>
  );
}
```

### Styling

The card uses the `data-zui="card"` attribute for styling. CSS classes applied:
- `.root` - Main card container with default card styles

---

## ZestyUIProvider

A theme provider component that wraps your application or section. Manages the application theme and provides CSS variables for styling.

### Type Definition

```typescript
interface ZestyUIProviderProps extends preact.HTMLAttributes<HTMLDivElement> {
  theme?: 'light' | 'dark';
  children: preact.ComponentChildren;
}

function ZestyUIProvider(props: ZestyUIProviderProps): preact.JSX.Element
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `theme` | `'light' \| 'dark'` | No | `'light'` | The initial theme mode |
| `children` | `preact.ComponentChildren` | Yes | - | Content to render inside the provider |
| `...props` | `preact.HTMLAttributes<HTMLDivElement>` | No | - | Standard HTML div attributes (className, id, style, etc.) |

### Example

```tsx
import { ZestyUIProvider } from '@zesty/ui';
import MyApp from './MyApp.tsx';

export default function Root() {
  return (
    <ZestyUIProvider theme="light">
      <MyApp />
    </ZestyUIProvider>
  );
}
```

### Theme Management

The provider sets the `data-theme` attribute on a `.zui` container:

```html
<div class="zui" data-theme="light">
  <!-- Your content -->
</div>
```

CSS can use this to apply theme-specific styles:

```css
.zui[data-theme="light"] {
  --color-background: #ffffff;
  --color-text: #000000;
}

.zui[data-theme="dark"] {
  --color-background: #1a1a1a;
  --color-text: #ffffff;
}
```

---

## ZThemeToggle

An interactive island component that allows users to toggle between light and dark themes. This is a client-side interactive component that requires Fresh island hydration.

### Type Definition

```typescript
interface ZThemeToggleProps {
  value?: 'light' | 'dark';
}

function ZThemeToggle(props: ZThemeToggleProps): preact.JSX.Element
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | `'light' \| 'dark'` | No | `'light'` | Initial theme value |

### Example (Fresh Island)

Create a file in `routes/islands/ThemeToggle.tsx`:

```tsx
import { ZThemeToggle } from '@zesty/ui/islands';

export default function ThemeToggleIsland() {
  return <ZThemeToggle value="light" />;
}
```

Then use it in a route:

```tsx
// routes/index.tsx
import { ThemeToggleIsland } from '#islands/ThemeToggle.tsx';

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <ThemeToggleIsland />
    </div>
  );
}
```

### Behavior

- Renders a checkbox-based toggle with sun/moon SVG icons
- Tracks the current theme in a Preact Signal for reactivity
- Updates the `data-theme` attribute on the nearest `.zui` ancestor
- Toggles between light and dark modes on click
- Uses `@preact/signals` for efficient state management

### Styling

The toggle uses the `data-zui="theme-toggle"` attribute. CSS classes applied:
- `.root` - Main container
- `.toggle-container` - Wrapper for toggle elements
- `.toggle-checkbox` - Hidden checkbox input
- `.toggle-label` - Clickable label
- `.toggle-inner` - Inner toggle track
- `.toggle-switch` - Switch indicator
- `.icon` - SVG icons (sun/moon)
- `.sun` - Sun icon (visible in light mode)
- `.moon` - Moon icon (visible in dark mode)

---

## Type Imports

All components are fully typed. You can import types directly:

```typescript
import type { JSX } from 'preact';
import type { ComponentChildren } from 'preact';
```

For component-specific props, refer to the type definitions above.

---

## Common Props

All Zesty UI components accept standard Preact component patterns:

- Render other components as children
- Support TypeScript JSX syntax
- Work with Preact hooks (when applicable)
- Compatible with Fresh framework patterns

---

## Best Practices

1. **Always wrap your app with `ZestyUIProvider`** to enable theme management
2. **Use `ZThemeToggle` as a Fresh island** for client-side interactivity
3. **Import from subpaths** for better tree-shaking:
   - Regular components: `from '@zesty/ui'`
   - Island components: `from '@zesty/ui/islands'`
4. **Leverage CSS custom properties** for theme customization
5. **Type your components** using Preact's JSX types

---

## Customization

All components use `data-zui` attributes and CSS classes for styling. Override styles using standard CSS:

```css
@import "zestyui";

/* Customize button */
[data-zui="button"] .root {
  background-color: var(--color-primary);
  padding: 1rem;
  border-radius: 8px;
}

/* Customize card */
[data-zui="card"] .root {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}
```
