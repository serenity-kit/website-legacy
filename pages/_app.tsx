import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import Head from "next/head";
import Image from 'next/image'
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { createClient, Provider, useMutation } from "urql";
import Cookies from "js-cookie";
import TextSection from "../components/TextSection";
import { H1, H2, H3, H4 } from "../components/Headline";
import Codeblock from "../components/Codeblock";
import Blockquote from "../components/Blockquote";
import InlineCode from "../components/InlineCode";
import UnorderedList from "../components/UnorderedList";

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
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  wrapper: TextSection,
  code: Codeblock,
  inlineCode: InlineCode,
  blockquote: Blockquote,
  ul: UnorderedList,
  img: (props) => <Image {...props} unsized />
};

const LogoutBillingAccountMutation = `
mutation logoutBillingAccount {
  logoutBillingAccount {
    success
  }
}`;

const LogoutLink: React.FC = (props) => {
  const router = useRouter();
  const [, logoutBillingAccount] = useMutation(LogoutBillingAccountMutation);

  return (
    <Link href="/">
      <a
        onClick={async (evt) => {
          evt.preventDefault();
          await logoutBillingAccount();
          router.push("/");
        }}
      >
        {props.children}
      </a>
    </Link>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  let isLoggedIn = false;
  if (process.browser && Cookies.get("billing_auth_active") === "true") {
    isLoggedIn = true;
  }

  return (
    <Provider value={client}>
      <Head>
        <title>Serenity Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="max-w-2xl mx-4 md:mx-auto my-8">
        <ul className="flex items-center space-x-3">
          <li className="mr-6">
            <Link href="/">
              <a className="no-underline flex items-center">
                <Image
                  src="/icon.png"
                  alt="Logo"
                  width="48"
                  height="48"
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
          {isLoggedIn ? (
            <>
              <li>
                <Link href="/en/billing-account">
                  <a>Billing Account</a>
                </Link>
              </li>
              <li>
                <LogoutLink>Logout</LogoutLink>
              </li>
            </>
          ) : (
            <li>
              <Link href="/en/login">
                <a>Billing Login</a>
              </Link>
            </li>
          )}
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
    </Provider>
  );
}

export default MyApp;
