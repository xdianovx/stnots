/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,scss}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#1f1f1f",
        gray: "#858585",
        grayBorder: "#C8C8C8",
        grayLight: "#EBEBEB",
      },
    },
    container: {
      center: true,
      padding: 20,
    },

    screens: {
      xl: { max: "1680px" },
      lg: { max: "1520px" },
      md: { max: "1240px" },
      sm: { max: "1000px" },
      xs: { max: "680px" },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1680px",
          "@screen xl": {
            maxWidth: "1480px",
          },
          "@screen lg": {
            maxWidth: "1240px",
          },
          "@screen md": {
            maxWidth: "1000px",
          },
          "@screen sm": {
            maxWidth: "680px",
          },
          "@screen xs": {
            maxWidth: "520px",
          },
        },
      });
    },
  ],
  // corePlugins: {
  // 	container: false,
  // },
};
