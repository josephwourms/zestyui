# Zesty UI

**A modular UI component library for Deno's Fresh framework.** Zesty provides production-ready components, theme management, and Vite integration built specifically for Fresh.

## Monorepo Structure

Zesty is organized as a modular monorepo with specialized packages:

- **[@zesty/core](./packages/zesty/)** - Core components (ZButton, ZCard, theme provider)
- **[@zesty/islands](./packages/islands/)** - Island wrappers and client-side interactive components
- **[@zesty/plugin-vite](./packages/plugin-vite/)** - Vite plugin for CSS-in-JS and style injection
- **[www](./www/)** - Documentation site and component showcase

## Installation

```bash
deno add jsr:@zesty/core jsr:@zesty/islands jsr:@zesty/plugin-vite
```

## Quick Start

### Setup in Fresh App

**1. Add Vite Plugin**

In your `vite.config.ts`, import plugins with correct ordering:

```typescript
import { defineConfig } from 'vite';
import { fresh } from '@fresh/plugin-vite';
import { zestyPlugin } from '@zesty/plugin-vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    fresh(),
    zestyPlugin(),     // Before other styling plugins
    tailwindcss(),
  ],
});
```

**2. Import Styles**

In your main CSS file (e.g., `assets/styles.css`):

```css
@import "zestyui";
```

**3. Setup Theme Provider**

In your `routes/_app.tsx`:

```tsx
import { define } from "../utils.ts";
import ThemeProvider from "../islands/ThemeProvider.tsx";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ThemeProvider>
          <Component />
        </ThemeProvider>
      </body>
    </html>
  );
});
```

**4. Generate Island Wrappers**

Run the setup script to auto-generate Fresh island wrappers:

```bash
deno run --allow-read --allow-write jsr:@zesty/islands/setup
```

This creates `ThemeProvider.tsx` and `ThemeToggle.tsx` in your `islands/` directory.

