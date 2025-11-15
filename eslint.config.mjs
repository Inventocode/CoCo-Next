import globals from "globals"
import stylistic from "@stylistic/eslint-plugin"
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
    plugins: {
      "@stylistic": stylistic
    },
    rules: {
      "@stylistic/semi": ["warn", "never"],
      "@stylistic/member-delimiter-style": ["warn", {
        "multiline": {
          "delimiter": "none",
          "requireLast": false
        },
        "singleline": {
          "delimiter": "comma",
          "requireLast": false
        },
        "multilineDetection": "brackets"
      }],
      "@stylistic/eol-last": ["error", "always"]
    }
  }
])
