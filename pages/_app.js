import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { DataProvider } from "../store/globalState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}

export default MyApp;
