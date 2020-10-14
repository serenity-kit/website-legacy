const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

const config = {
  pageExtensions: ["mdx", "tsx"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en/notes",
        permanent: false,
      },
    ];
  },
};

module.exports = withMDX(config);
