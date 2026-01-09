# Zesty UI

**A UI component library built for Deno's Fresh framework.** Zesty UI provides a curated set of pre-built, production-ready components designed to work seamlessly with Fresh and Vite. Get started with zero configuration and modern styling tools.

## Features

- **Fresh Framework**: Built specifically for Deno's Fresh framework
- **Zero Configuration**: Pre-built, production-ready components
- **Vite Integration**: Native Vite plugin for optimal CSS injection
- **Preact/React Compatible**: Works with both Preact and React
- **TypeScript Ready**: Full type support for components
- **Small Bundle**: Lightweight CSS-in-JS approach

## Installation

```bash
deno add jsr:@zesty/ui
```

## Getting Started with Fresh

Zesty UI is designed to work out-of-the-box with Fresh 2.x projects. Follow these steps to integrate it into your Fresh application.

## Usage

### Step 1: Add the Vite Plugin

In your `vite.config.ts`, import and add the zestyUI plugin **before any other styling plugins** (like Tailwind or PostCSS):

```typescript
import { defineConfig } from 'vite';
import { zestyUI } from '@zesty/ui/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    zestyUI(),      // Must be first
    tailwindcss(),  // Other styling plugins come after
  ],
});
```

### Step 2: Import Styles

In your main CSS file (e.g., `assets/styles.css`), add the following import:

```css
@import "zestyui";
```

This will inject Zesty UI's component styles into your stylesheet.

### Step 3: Use Components in Fresh Islands

Import and use Zesty UI components in your Fresh islands and pages:

```tsx
import { ZButton } from '@zesty/ui';

export default function MyIsland() {
  return <ZButton>Click me</ZButton>;
}
```

Zesty UI components work seamlessly with Fresh's island architecture and Preact rendering.

## Why Plugin Order Matters

The zestyUI plugin must be placed **before other styling plugins** in your Vite configuration. This ensures that:

1. CSS imports are correctly resolved and transformed
2. Other plugins receive the complete, processed CSS
3. Styles are applied in the correct order
4. No conflicts occur with PostCSS, Tailwind, or other CSS tools

If you place zestyUI after other plugins, CSS injection may fail or produce unexpected results.

## API Reference

### zestyUI()

The main plugin export.

```typescript
import { zestyUI } from '@zesty/ui/vite';

const plugin = zestyUI();
```

**Returns**: A Vite plugin object that transforms CSS imports.

## Components

Zesty UI includes pre-built components for common UI patterns, all with full TypeScript support and Preact integration:

- **ZButton** - Styled button component
- **ZCard** - Container component for content grouping
- **ZestyUIProvider** - Theme provider for managing light/dark modes
- **ZThemeToggle** - Interactive theme switcher island component

For detailed documentation on all components, props, types, and examples, see [COMPONENTS.md](./COMPONENTS.md).

## TypeScript & Types

All Zesty UI components are fully typed with TypeScript. Component interfaces include:

```typescript
// Button component
interface ZButtonProps {
  children: preact.ComponentChildren;
}

// Theme provider
interface ZestyUIProviderProps extends preact.HTMLAttributes<HTMLDivElement> {
  theme?: 'light' | 'dark';
  children: preact.ComponentChildren;
}

// Theme toggle
interface ZThemeToggleProps {
  value?: 'light' | 'dark';
}
```

All types are automatically included when you import components. No additional type definitions needed.

## Customization

While Zesty UI provides pre-built styles, you can extend and customize components using CSS variables and standard CSS techniques.

```css
@import "zestyui";

/* Override default styles */
:root {
  --color-primary: #your-color;
}
```

## Fresh Framework Compatibility

Zesty UI is fully compatible with:
- **Fresh 2.0+**: Full support for Fresh's component system
- **Preact**: Primary rendering engine used in Fresh
- **Islands**: Components work seamlessly in Fresh islands
- **SSR**: Proper server-side rendering support

## Browser Support

Zesty UI supports all modern browsers that support:
- ES2020+ JavaScript
- CSS Custom Properties

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## Additional Resources

- [Component Documentation](./COMPONENTS.md) - Detailed component API, props, types, and examples
- [JSR Package](https://jsr.io/@zesty/ui) - Package registry page

