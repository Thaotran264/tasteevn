import Head from "next/head";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";
import Header from "./Header";
import NavComponent from "./Nav";
import ScrollToTopButton from "./ScrollToTopButton";
const Layout = ({ children, title }) => {
  return (
    <div className="overflow-hidden d-flex flex-column" style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <Head>
        <title>{title ? title : 'Tastee - Cộng đồng người bán'}</title>
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
      <ToastContainer position="bottom-center" pauseOnFocusLoss={false} />
      {/* <NavComponent />
       */}
       <Header />
      <main>{children}</main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Layout;
