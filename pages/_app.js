import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import React from "react";
import { SSRProvider } from "react-bootstrap";
import { SWRConfig } from "swr";
import Layout from "../components/Layout";
import { CartProvider } from "../context/cartContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <SSRProvider>
      <CartProvider>
        <SWRConfig
          value={{
            fetcher: (resource) => axios.get(resource).then((res) => res.data),
            dedupingInterval: 10000,
          }}
        >
          <>
            <Component {...pageProps} />
          </>
        </SWRConfig>
      </CartProvider>
    </SSRProvider>
  );
}

export default MyApp;
