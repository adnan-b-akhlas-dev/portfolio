import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import unusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,

  {
    plugins: {
      "unused-imports": unusedImports,
    },

    rules: {
      // Remove unused imports automatically
      "unused-imports/no-unused-imports": "error",

      // Prevent unused variables
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // Prevent accidental any
      "@typescript-eslint/no-explicit-any": "warn",

      // Prefer const
      "prefer-const": "error",

      // Prevent console.log in production code
      "no-console": ["error", { allow: ["warn", "error"] }],

      // Use === instead of ==
      eqeqeq: ["error", "always"],

      // Prevent duplicate imports
      "no-duplicate-imports": "error",

      // Require curly braces
      curly: ["error", "all"],

      // Consistent import ordering
      "sort-imports": [
        "warn",
        {
          ignoreDeclarationSort: true,
        },
      ],
    },
  },
]);
