module.exports = {
  content: ["./src/*.html"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      Messiri: ["El Messiri", "sans-serif"],
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "991px" },
      // => @media (max-width: 991px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "575px" },
      // => @media (max-width: 575px) { ... }

      exsm: { max: "480px" },
      // => @media (max-width: 575px) { ... }
    },
    extend: {
      colors: {
        "daily-dev-tips": "#F89283",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};
