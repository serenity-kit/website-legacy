module.exports = {
  purge: [],
  theme: {
    listStyleType: {
      none: "none",
      circle: "circle",
      decimal: "decimal",
    },
    extend: {},
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
