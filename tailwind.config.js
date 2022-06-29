/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur-bg.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        blue: {
          300: "#0093B3",
          500: "#3D9BAF",
          700: "#12AEBB",
        },
        sky: {
          500: "#399ED8",
        },
        green: {
          500: "#DAFF8A",
        },
        orange: {
          500: "#E95E3F",
        },
        gray: {
          100: "#E1E1E5",
          200: "#C4C3CC",
          300: "#8D8D98",
          500: "#323238",
          600: "#29282E",
          700: "#121213",
          900: "#09080A",
        },
      },
    },
  },
  plugins: [],
};
