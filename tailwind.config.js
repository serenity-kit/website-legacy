module.exports = {
  purge: {
    layers: ["base", "components", "utilities"],
    content: ["./components/**/*.tsx", "./pages/**/*.tsx", "./pages/**/*.mdx"],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#3E4FCE",
          DEFAULT: "#4454CF",
          light: "#5367DB",
        },
        background: "#F8F8F8",
      },
    },
  },
};
