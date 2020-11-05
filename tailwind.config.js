module.exports = {
  purge: {
    layers: ["base", "components", "utilities"],
    content: ["./components/**/*.tsx", "./pages/**/*.tsx", "./pages/**/*.mdx"],
  },
  plugins: [require("@tailwindcss/ui")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
