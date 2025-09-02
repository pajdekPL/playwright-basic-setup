import eslint from "@eslint/js";
import playwright from "eslint-plugin-playwright";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.js", "*.mjs"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",
    },
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...tseslint.configs.strict,

  {
    ...playwright.configs["flat/recommended"],
    files: ["tests/**"],
    rules: {
      "playwright/expect-expect": 1,
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "playwright/no-skipped-test": "warn",
      "playwright/no-standalone-expect": "error",
      "playwright/no-page-pause": "error",
      "playwright/max-nested-describe": ["warn", { max: 3 }],
    },
  },
  {
    ignores: [
      "node_modules",
      "test-results",
      "playwright-report",
      "playwright/.cache",
      ".auth",
      ".env",
      "*-snapshots",
    ],
  },
];
