/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#202722",
        background: "#f8f6f3",
        primary: "#9c7c64",
        "primary-light": "#ba967b",
        secondary: "#b9ccaf",
        accent: "#90b991",
        "flower-pink": "#d6595d",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        dynapuff: ["DynaPuff", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
