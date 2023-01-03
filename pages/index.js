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
    {
      id: 'tasteePOS01',
      brandId: 'tasteePOS',
      brandName: 'tasteePOS',
      image: 'https://tastee-test.s3.ap-southeast-1.amazonaws.com/images/brand/b44ee411-7214-4914-a040-9d63250fc4de/u2qmimif.t5319102022163049.png'
    },
    {
      id: 'Thaotv101',
      brandId: 'Thaotv1',
      brandName: 'Thaotv1',
      image: 'https://tastee-test.s3.ap-southeast-1.amazonaws.com/images/brand/89f2ecba-fb87-424e-a543-8f1e76bc1d9f/q2g1yyr2.btl03122022201655.png'
    },
    {
      id: '090900000801',
      brandId: '0909000008',
      brandName: '0909000008',
      image: 'https://tastee-test.s3.ap-southeast-1.amazonaws.com/images/decoration/2fe88620-8ce9-4bfb-b3e0-2791fc14aeb5/dztz2cvv.kmf08102022143912.file'
    },
    {
      id: 'tasteePOS02',
      brandId: 'tasteePOS',
      brandName: 'tasteePOS',
      image: 'https://tastee-test.s3.ap-southeast-1.amazonaws.com/images/brand/b44ee411-7214-4914-a040-9d63250fc4de/u2qmimif.t5319102022163049.png'
    },
    {
      id: 'Thaotv102',
      brandId: 'Thaotv1',
      brandName: 'Thaotv1',
      image: 'https://tastee-test.s3.ap-southeast-1.amazonaws.com/images/brand/89f2ecba-fb87-424e-a543-8f1e76bc1d9f/q2g1yyr2.btl03122022201655.png'
    },
    {
      id: '090900000802',
      brandId: '0909000008',
      brandName: '0909000008',
      image: 'https://tastee-test.s3.ap-southeast-1.amazonaws.com/images/decoration/2fe88620-8ce9-4bfb-b3e0-2791fc14aeb5/dztz2cvv.kmf08102022143912.file'
    },
   
  ]
  return (
    <Layout title='Tastee - Cộng đồng người bán'>

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
