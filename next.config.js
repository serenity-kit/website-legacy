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
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = withMDX(config);
