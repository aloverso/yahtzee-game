/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  env: {
    es2021: true,
    jest: true,
  },
  parserOptions: {
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname,
  },
};
