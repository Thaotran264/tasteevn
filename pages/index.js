import Head from "next/head";
import { useRef, useState } from "react";
import Layout from "../components/Layout";
import Pages from "../components/Pages";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="container">
        <Pages />
      </div>
    </>
  );
}

Home.getLayout = function getLayout(Page) {
  return (
      <Layout>{Page}</Layout>
  )
}

export async function getStaticProps(context) {
  console.log("%c ENV", "color: #007acc;", process.env.BASE_URL);
  return {
    props: {}, // will be passed to the page component as props
  };
}
