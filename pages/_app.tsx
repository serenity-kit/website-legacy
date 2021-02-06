import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import Image from "next/image";
import type { AppProps } from "next/app";
import { createClient, Provider } from "urql";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const client = createClient({
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/graphql"
      : "https://api.serenity.re/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

const mdxComponents = {
  h1: ({ children }) => (
    <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-semibold text-gray-900 sm:text-4xl sm:leading-10">
      {children}
    </h1>
  ),
  // h2: H2,
  // h3: H3,
  // h4: H4,
  wrapper: ({ children }) => (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="prose prose-lg text-gray-500 mx-auto">{children}</div>
    </div>
  ),
  // code: Codeblock,
  // inlineCode: InlineCode,
  // blockquote: Blockquote,
  // ul: UnorderedList,
  img: (props) => <Image {...props} layout="fill" />,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Head>
        <title>Serenity Notes</title>
        {/* preload fonts */}
        <link
          rel="preload"
          href="/fonts/basiercircle-regular-webfont.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/basiercircle-semibold-webfont.woff2"
          as="font"
          type="font/woff2"
        />
        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="icon" href="/favicon.ico" />
        <title>Serenity Notes</title>
        <meta
          name="description"
          content="End-to-end encrypted collaborative notes"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Serenity Notes" />
        <meta
          property="og:description"
          content="End-to-end encrypted collaborative notes"
        />
        {/* <meta property="og:url" content={`https://www.serenity.re/{TODO}`} />
        <meta property="og:site_name" content="Serenity Notes" />
        <meta property="og:image" content={TODO} />
        <meta property="og:image:secure_url" content={TODO} />
        <meta property="og:image:width" content={TODO} />
        <meta property="og:image:height" content={TODO} /> */}
      </Head>

      <div className="relative bg-white overflow-hidden">
        <div className="relative pt-4 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
          <header>
            <Navigation />
          </header>

          <main>
            <MDXProvider components={mdxComponents}>
              <Component {...pageProps} />
            </MDXProvider>
          </main>
        </div>
      </div>

      <Footer />
    </Provider>
  );
}

export default MyApp;
