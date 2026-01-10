import { Plugin } from "vite";

export function zestyui(): Plugin {
  const cssContent = Deno.readTextFileSync(new URL("../core/dist/styles.css", import.meta.url));
  return {
    name: "zestyui",
    enforce: "pre",

    transform(src: string, id: string) {
      if (id.endsWith('.css') && src.includes('@import "zestyui";')) {
        return src.replace('@import "zestyui";', cssContent);
      }
      return null;
    }
  };
}