import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { SWRConfig } from "swr";
import { DataProvider } from "../store/globalState";
import "../styles/globals.css";
import { store } from '../store/store'
import { Provider, useSelector } from 'react-redux'
import { useEffect } from "react";
import { useRouter } from "next/router";
import { selectAuth } from "../features/auth/authSlice";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <Provider store={store}>
      <DataProvider>
        <SWRConfig
          value={{
            fetcher: (resource) => axios.get(resource).then((res) => res.data),
            dedupingInterval: 10000,
          }}
        >
          <>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {
              getLayout(<Component {...pageProps} />)
            }
          </>
        </SWRConfig>
      </DataProvider>
    </Provider>
  );
}

export default MyApp;
