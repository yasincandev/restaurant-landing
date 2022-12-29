const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      mainRed: "#EA0000",
      mainDark: "#2A333E",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      slate: colors.slate,
      cyan: colors.cyan,
      teal: colors.teal,
      rose: colors.rose,
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      abhaya: ["Abhaya Libre", "serif"],
    },
  },
  plugins: [],
};
