import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import type { AppProps } from "next/app";
import { createClient, Provider } from "urql";
import TextSection from "../components/TextSection";
import { H1, H2, H3, H4 } from "../components/Headline";
import Codeblock from "../components/Codeblock";
import Blockquote from "../components/Blockquote";
import InlineCode from "../components/InlineCode";
import UnorderedList from "../components/UnorderedList";
import Navigation from "../components/Navigation";

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
    <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      {children}
    </h1>
  ),
  // h2: H2,
  // h3: H3,
  // h4: H4,
  wrapper: ({ children }) => (
    <div className="prose prose-lg text-gray-500 mx-auto">{children}</div>
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-0">
          <svg
            className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
            width="640"
            height="784"
            fill="none"
            viewBox="0 0 640 784"
          >
            <defs>
              <pattern
                id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                x="118"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              y="72"
              width="640"
              height="640"
              className="text-gray-50"
              fill="currentColor"
            />
            <rect
              x="118"
              width="404"
              height="784"
              fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
            />
          </svg>
        </div>

        <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
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
      <footer className="max-w-2xl mx-4 md:mx-auto my-8">
        <ul className="flex items-center space-x-3">
          <li>
            <Link href="/en/notes/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/en/notes/terms-and-conditions">
              <a>Terms & Conditions</a>
            </Link>
          </li>
          <li>
            <Link href="/en/notes/imprint">
              <a>Imprint</a>
            </Link>
          </li>
        </ul>
      </footer>
    </Provider>
  );
}

export default MyApp;
