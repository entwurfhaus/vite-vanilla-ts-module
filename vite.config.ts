import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import progress from "vite-plugin-progress";
import colors from "picocolors";
import dts from "vite-plugin-dts";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/jeddygong/vite-plugin-progress
    progress({
      format: `Building ${colors.green("[:bar]")} :percent :eta`,
      total: 100,
      width: 60,
      // complete: "=",
      // incomplete: "",
    }),
    dts({
      entryRoot: "src",
      tsconfigPath: path.join(__dirname, "tsconfig.json"),
    }),
  ],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      fileName: "main",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [],
      plugins: [
        visualizer({
          title: "visualizer - vite-vanilla-ts-module",
          template: "network",
        }),
      ],
    },
  },
});
