/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "App.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#43c651",
        secondary: "#056526",
        primaryText: "#555",
      },
    },
  },
  plugins: [],
};
