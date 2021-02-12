import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createClient, Provider } from "urql";
import LayoutNotes from "../components/LayoutNotes";

const client = createClient({
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/graphql"
      : "https://api.serenity.re/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const Layout = Component.Layout ? Component.Layout : LayoutNotes;

  return (
    <Provider value={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
