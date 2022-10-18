import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bannerApi, orderApi } from "../api-client";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Pages from "../components/Pages";
import { selectAuth } from "../features/auth/authSlice";
import { selectCart } from "../features/cart/cartSlice";
import { addToCart } from "../store/actions/actionsType";
export default function Home({ data }) {

  return (
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
      </Head>
      <>
        <Pages />
      </>
    </>
  );
}

Home.getLayout = function getLayout(Page) {
  return <Layout>{Page}</Layout>;
};

// export async function getStaticProps(context) {
//   // console.log("%c ENV", "color: #007acc;", process.env.BASE_URL);
//   const res = await axios.get("https://test.tastee.vn/api/Home/get_banner");
//   const data = res.data.data;
//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
