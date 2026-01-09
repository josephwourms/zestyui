import type { Plugin } from "@vite";

export default function zestyUI(): Plugin {
  const cssContent = Deno.readTextFileSync(new URL("./dist/styles.css", import.meta.url));
  return {
    name: "zestyui",
    enforce: "pre",

    transform(src, id) {
      if (id.endsWith('.css') && src.includes('@import "zestyui";')) {
        return src.replace('@import "zestyui";', cssContent);
      }
      return null;
    }
  };
}
