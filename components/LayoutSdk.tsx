import Head from "next/head";
import Footer from "./Footer";
import NavigationSdk from "./NavigationSdk";

type Props = {
  children: React.ReactNode;
};

export default function LayoutSdk(props: Props) {
  return (
    <>
      <Head>
        <title>Serenity SDK</title>
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
          href="/notes-apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/notes-favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/notes-favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="icon" href="/notes-favicon.ico" />
        <title>Serenity SDK</title>
        <meta name="description" content="End-to-end encrypted CRDT SDK" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Serenity SDK" />
        <meta
          property="og:description"
          content="End-to-end encrypted CRDT SDK"
        />
      </Head>

      <div className="relative bg-white overflow-hidden">
        <div className="relative pt-4 pb-8">
          <header>
            <NavigationSdk />
          </header>

          <main>{props.children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
