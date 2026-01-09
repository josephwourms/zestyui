import { defineConfig } from "vite";
import * as path from "@std/path";
import { transform } from "lightningcss";

const __filename = path.fromFileUrl(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: ".",
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        styles: path.resolve(__dirname, "./styles.css"),
      },
      output: {
        assetFileNames: "[name][extname]",
      },
    },
  },
  css: {
    lightningcss: {
      drafts: {
        nesting: true,
      },
    },
  },
});
