/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': "#43c651",
        'brand-secondary': "#056526",
        primary: "#f3f3f3",
        secondary: "#fefefe",
        "primary-dark": "#2e2e2e",
        "secondary-dark": "#262626",
        primaryText: "#555",
        danger: "#BB2124",
        success: "#22BB33"
      },
      backgroundColor: {
        'brand-primary': "#43c651",
        'brand-secondary': "#056526",
        primary: "#f3f3f3",
        secondary: "#fefefe",
        "primary-dark": "#2e2e2e",
        "secondary-dark": "#262626",
      }
    },
  },
  plugins: [],
}