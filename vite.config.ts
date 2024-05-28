// import eslint from "vite-plugin-eslint"; // this is currently not working :( turn this back on when it's fixed
import eslintPlugin from "@nabla/vite-plugin-eslint";
import path from "path";
import colors from "picocolors";
import { visualizer } from "rollup-plugin-visualizer";
import { type PluginOption, defineConfig } from "vite";
import dts from "vite-plugin-dts";
import progress from "vite-plugin-progress";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // eslint({ fix: true }),
    eslintPlugin(),
    visualizer() as PluginOption,
    // Uncomment to get cool progress bar - https://github.com/jeddygong/vite-plugin-progress
    // progress({
    //   format: `Building ${colors.green("[:bar]")} :percent :eta`,
    //   total: 100,
    //   width: 60,
    //   // complete: "=",
    //   // incomplete: "",
    // }),
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
