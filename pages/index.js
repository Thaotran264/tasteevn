import Head from "next/head";
import { useRef, useState } from "react";
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

export async function getStaticProps(context) {
  console.log("%c ENV", "color: #007acc;", process.env.BASE_URL);
  return {
    props: {}, // will be passed to the page component as props
  };
}
