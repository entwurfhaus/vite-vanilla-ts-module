import { configDefaults, defineConfig } from "vitest/config";
import * as path from "path";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
  test: {
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: [...configDefaults.exclude, "_docs", "src/main.ts"],
    },
  },
});
