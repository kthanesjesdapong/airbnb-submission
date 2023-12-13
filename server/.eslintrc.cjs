module.exports = {
  root: true,
  plugins: ["@typescript-eslint"],
  rules: {
    "import/no-named-as-default": 0,
    "import/no-unresolved": 0
  },
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended"],
  "parserOptions": { "ecmaVersion": 2018, "sourceType": "module" },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
        "project": "tsconfig.json",

      }
    }
  }
};