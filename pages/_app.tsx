import "../styles/globals.css";
import Link from "next/link";
import Head from "next/head";
import type { AppProps } from "next/app";

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

      <Component {...pageProps} />

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
