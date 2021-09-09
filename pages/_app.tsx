import "normalize.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blogr</title>
        <meta name="description" content="Blogging app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
