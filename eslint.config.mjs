import globals from "globals"
import tseslint from "typescript-eslint"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    ignores: ["public/**/*", "node_modules/**/*", "dist/**/*", "out/**/*"],
  },
  {
    files: [
      "src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
      "unrestored/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"
    ],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser
    },
    rules: {
      "semi": ["warn", "never"]
    }
  }
])
