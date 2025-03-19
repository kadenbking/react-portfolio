/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: "class",
  theme: {
    colors: {
      extraDarkBlue: '#0C1B30',
      darkBlue: '#1F3558',
      primaryBlue: '#4E9AD0',
      lightBlue: '#AEDFFA',
      extraLightBlue: "#D9F0FD",
      footerDarkBlue: '#091526',
      footerLightBlue: "#F3FAFE"
    },
    fontSize: {
      'tiny': '0.875rem',
      'sm': '1rem',
      'base': '1.125rem',
      'lg': '1.25rem',
      'xl': '1.5rem',
      '2xl': '1.75rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    maxWidth: {
      'sm': '24rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '7xl': '80rem',
      '8xl': '100rem'
    },
    extend: {
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
