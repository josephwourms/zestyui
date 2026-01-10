import { Plugin } from "vite";
import { styles } from "./dist/styles.ts";

export function zestyui(): Plugin {
  return {
    name: "zestyui",
    enforce: "pre",

    transform(src: string, id: string) {
      if (id.endsWith('.css') && src.includes('@import "zestyui";')) {
        return src.replace('@import "zestyui";', styles);
      }
      return null;
    }
  };
}