import path from "path";
import progress from "vite-plugin-progress";
import colors from "picocolors";
import dts from "vite-plugin-dts";

import { defineConfig, type PluginOption } from "vite";
import eslint from "vite-plugin-eslint";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint(),
    visualizer() as PluginOption,
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
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      fileName: "main",
      formats: ["es", "cjs"],
    },
  },
});
