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
      // can be removed after 2021-08
      {
        source: "/en/notes/terms-and-conditions",
        destination: "/en/notes/terms-of-service",
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
