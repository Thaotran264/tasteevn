import axios from "axios";
import Head from "next/head";
import React from "react";
import { useRef, useState } from "react";
import Layout from "../components/Layout";
import Pages from "../components/Pages";
export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="container">
        <Pages data={data} />
      </div>
    </>
  );
}

Home.getLayout = function getLayout(Page) {
  return <Layout>{Page}</Layout>;
};

export async function getStaticProps(context) {
  // console.log("%c ENV", "color: #007acc;", process.env.BASE_URL);
  const res = await axios.get("https://pro.tastee.vn/api/Home/get_product_slider");
  const data = res.data.data;
  return {
    props: { data }, // will be passed to the page component as props
  };
}
