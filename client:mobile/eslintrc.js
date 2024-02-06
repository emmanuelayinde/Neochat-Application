module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "universe/native",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  rules: {
    // Add your own ESLint rules here
  },
};
