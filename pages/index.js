import axios from "axios";
import Head from "next/head";
import React, { useState } from "react";
import CarouselComponent from "../components/Carousel";
import Layout from "../components/Layout";
import Login from "../components/Modal/Login";
import Slider02 from "../components/Slider/Slider02";

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const data = [
    {
      id: 'tasteePOS',
      brandId: 'tasteePOS',
      brandName: 'tasteePOS',
      image: 'https://tastee-test.s3.ap-southeast-1.amazonaws.com/images/brand/b44ee411-7214-4914-a040-9d63250fc4de/u2qmimif.t5319102022163049.png'
    },
    {
      id: 'Thaotv1',
      brandId: 'Thaotv1',
      brandName: 'Thaotv1',
      image: 'https://tastee-test.s3.ap-southeast-1.amazonaws.com/images/brand/89f2ecba-fb87-424e-a543-8f1e76bc1d9f/q2g1yyr2.btl03122022201655.png'
    },
    {
      id: '0909000008',
      brandId: '0909000008',
      brandName: '0909000008',
      image: 'https://tastee-test.s3.ap-southeast-1.amazonaws.com/images/decoration/2fe88620-8ce9-4bfb-b3e0-2791fc14aeb5/dztz2cvv.kmf08102022143912.file'
    },
   
  ]
  return (
    <Layout>
      <Head>
        <title>Tastee - Cộng đồng người bán</title>
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
      <section className="container px-0 d-flex flex-column gap-2"  >
        <CarouselComponent />
        <div className="px-2 overflow-hidden">
          <h2>Cửa hàng yêu thích</h2>
          <Slider02 data={data} />
          {
            showLoginModal ?
              <Login setShowLoginModal={setShowLoginModal} showLoginModal={showLoginModal} /> : <></>
          }
        </div>
      </section>
    </Layout>
  );
}


// export async function getStaticProps(context) {
//   const res = await axios.get('https://pro.tastee.vn/api/Home/get_product_slider')
//   const data = res.data.data;
//   return {
//     props: { data },
//   };
// }
