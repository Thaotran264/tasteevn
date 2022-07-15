import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
}, [])
  return (
  <>
  <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
  <Component {...pageProps} />
  </>
  )

}

export default MyApp
