import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import Head from "next/head";
import type { AppProps } from "next/app";
import TextSection from "../components/TextSection";
import { H1, H2, H3, H4 } from "../components/Headline";
import Codeblock from "../components/Codeblock";
import Blockquote from "../components/Blockquote";
import InlineCode from "../components/InlineCode";
import UnorderedList from "../components/UnorderedList";

const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  wrapper: TextSection,
  code: Codeblock,
  inlineCode: InlineCode,
  blockquote: Blockquote,
  ul: UnorderedList,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Serenity Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="max-w-2xl mx-4 md:mx-auto my-8">
        <ul className="flex items-center space-x-3">
          <li className="mr-6">
            <Link href="/">
              <a className="no-underline flex items-center">
                <img
                  src="/icon.png"
                  alt="Logo"
                  style={{ height: 48, width: 48 }}
                />
                Serenity Notes
              </a>
            </Link>
          </li>
          <li>
            <Link href="/en/notes/roadmap">
              <a>Roadmap</a>
            </Link>
          </li>
          <li>
            <Link href="/en/notes/faq">
              <a>FAQ</a>
            </Link>
          </li>
        </ul>
      </header>

      <main>
        <MDXProvider components={mdxComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </main>

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
    </>
  );
}

export default MyApp;
