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
};
