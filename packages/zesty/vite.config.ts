import { defineConfig } from "vite";
import * as path from "@std/path";

const __filename = path.fromFileUrl(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: ".",
  build: {
    outDir: "../plugin-vite/dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        styles: path.resolve(__dirname, "./src/styles.css"),
      },
      output: {
        assetFileNames: "[name][extname]",
      },
    },
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      drafts: {
        customMedia: true,
      }
    },
  },
});
