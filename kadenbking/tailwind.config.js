/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      extraDarkBlue: "#03045E",
      darkBlue: "#023E8A",
      primaryBlue: "#0077B6",
      lightBlue: "#90E0EF",
      extraLightBlue: "#CAF0F8",
      footerDarkBlue: "#091526",
      footerLightBlue: "#F3FAFE",
    },
    fontSize: {
      tiny: "0.875rem",
      sm: "1rem",
      base: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.75rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    maxWidth: {
      sm: "24rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "7xl": "80rem",
      "8xl": "88rem",
    },
    extend: {
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
