import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { SWRConfig } from "swr";
// import { DataProvider } from "../store/globalState";
import "../styles/globals.css";
import { store } from '../store/store'
import { Provider, useSelector } from 'react-redux'
import { useEffect } from "react";
import { useRouter } from "next/router";
import { selectAuth } from "../features/auth/authSlice";
import React from "react";
import { SSRProvider } from "react-bootstrap";
import { DataProvider } from "../context/cartContext";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <SSRProvider>
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
                <title>Tastee POS - Cộng đồng người bán</title>
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Tastee POS - Cộng đồng người bán" />
                <meta property="og:image" content="https://tastee.vn/_next/image?url=%2Fimage%2FTastee-POS.jpeg&w=3840&q=75" />
                <meta property="og:description" content="Nhóm được xây dựng để hỗ trợ người bán hàng sử dụng ứng dụng POS của Tastee." />
                <meta property="og:url" content="https://tastee.vn" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="628" />
                <meta property="og:image:alt" content="Tastee POS - Cộng đồng người bán" />
                <meta property="fb:app_id" content="401975274852327" />
                <meta property="article:author" content="Tastee" />
                <meta property="article:published_time" content="2022-10-08T23:26:00.000+07:00" />
                <meta property="article:modified_time" content="2022-10-08T23:26:00.000+07:00" />
                <meta property="article:section" content="Tastee POS - Cộng đồng người bán" />
                <meta property="article:tag" content="Tastee POS - Cộng đồng người bán" />

                {/* -- End Open Graph Metadata -- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content="Nhóm được xây dựng để hỗ trợ người bán hàng sử dụng ứng dụng POS của Tastee." />
                <meta name="twitter:title" content="Tastee POS - Cộng đồng người bán" />
                <meta name="twitter:site" content="@tastee" />
                <meta name="twitter:image" content="https://tastee.vn/_next/image?url=%2Fimage%2FTastee-POS.jpeg&w=3840&q=75" />
                <meta name="twitter:creator" content="@tastee" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
              </Head>
              
              {
                getLayout(<Component {...pageProps} />)
              }
            </>
          </SWRConfig>
        </DataProvider>
      </Provider>
    </SSRProvider>
  );
}

export default MyApp;
