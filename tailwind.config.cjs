const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        "poppins": ["poppins", "sans-serif"],
        "montserrat": ["montserrat", "sans-serif"]
      },
      colors: {
        "placeholder-white": '#FFFF',
      }
    },
  },

  plugins: [forms, typography],
};

module.exports = config;
