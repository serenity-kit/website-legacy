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
      {
        source: "/opaque",
        destination: "/en/opaque",
        permanent: false,
      },
    ];
  },
  // TODO caused issues with the redirect
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
};

module.exports = withMDX(config);
