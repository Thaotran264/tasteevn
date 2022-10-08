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
        <meta property="og:image" content="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/306924619_7983509318387061_5915609229902822402_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=100&ccb=1-7&_nc_sid=8631f5&_nc_ohc=RKbcYTw-jUUAX9orLmK&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT_yVQvee1jZsM44BMTsVRixvm3eM9MYaQ0v1G4Ixqn8cg&oe=6346619B" />
        <meta property="og:description" content="Nhóm được xây dựng để hỗ trợ người bán hàng sử dụng ứng dụng POS của Tastee." />
        <meta property="og:url" content="https://tastee.vn" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:image:alt " content="Tastee POS - Cộng đồng người bán" />
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
        <meta name="twitter:image" content="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/306924619_7983509318387061_5915609229902822402_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=100&ccb=1-7&_nc_sid=8631f5&_nc_ohc=RKbcYTw-jUUAX9orLmK&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT_yVQvee1jZsM44BMTsVRixvm3eM9MYaQ0v1G4Ixqn8cg&oe=6346619B" />
        <meta name="twitter:creator" content="@tastee" />
      </Head>
      <>
        <Pages />
      </>
      <Footer />
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
