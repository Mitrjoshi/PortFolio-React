/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        navbar: "#060b19",
        ultramarineBlue: "#3d70ff",
        chineseBlack: "#060b19",
        maastrichtBlue: "#0c1631",
        aliceblue: "#f0f8ff",
        razzmatazz: "#f32170",
        blazeOrange: "#FF6B08 ",
        steelPink: "#CF23CF",
        sandstorm: "#EEDD44",
        veryLightBlueFirst: "#6E3EFF",
        ultramarineBlueSecond: "#3168FF ",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
    variants: {},
    screens: {
      xxs: "395px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      ms: "860px",
      smd: "910px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
