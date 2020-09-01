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

const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  wrapper: TextSection,
  code: Codeblock,
  inlineCode: InlineCode,
  blockquote: Blockquote,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Link href="/">
          <a>Lausbub Notes</a>
        </Link>
      </header>

      <MDXProvider components={mdxComponents}>
        <Component {...pageProps} />
      </MDXProvider>

      <footer>
        <ul>
          <li>
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
            <Link href="/terms-and-conditions">
              <a>Terms & Conditions</a>
            </Link>
            <Link href="/imprint">
              <a>Imprint</a>
            </Link>
          </li>
        </ul>
        Made by Lausbub Team
      </footer>
    </>
  );
}

export default MyApp;
