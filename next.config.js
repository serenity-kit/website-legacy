const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

const config = {
  pageExtensions: ["mdx", "tsx"],
};

module.exports = withMDX(config);
