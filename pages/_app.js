import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { useEffect } from "react";
import { SWRConfig } from "swr";
import Layout from "../components/Layout";
import { DataProvider } from "../store/globalState";
import "../styles/globals.css";
import axios from "axios";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <DataProvider>
      <SWRConfig
        value={{
          fetcher: (resource) => axios.get(resource).then((res) => res.data),
          dedupingInterval: 10000,
        }}
      >
        {/* <Layout> */}
        <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          {
            getLayout(<Component {...pageProps} />)
          }
        </>
        {/* </Layout> */}
      </SWRConfig>
    </DataProvider>
  );
}

export default MyApp;
