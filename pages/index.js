import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick/lib/slider";
import Layout from "../components/Layout";
import React, { useState } from "react";
import Login from "../components/Modal/Login";
import Register from "../components/Modal/Register";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: ' none' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: ' none' }} onClick={onClick} />;
}
const settings = {
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  className: "center",
  centerMode: true,
  centerPadding: "25px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
export default function Home({ data }) {
const [showLoginModal, setShowLoginModal] = useState(false)
const handleShowLoginModal = () => setShowLoginModal(true)

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
      <section className="mb-5 container"  >
        {/* <button
        onClick={handleShowLoginModal} className="me-5 btn btn-dark position-absolute top-0 end-50">Login</button> */}
        <Slider {...settings} className="">
          {data?.map((it, index) => (
            <Link key={it.id} href={`/${it?.brandId}`}>
              <a>
                <div key={index}>
                  <img src={it?.image} alt={it?.brandName} className=" rounded" style={{width:'96%', height: '200px !important' }} />
                </div>
              </a>
            </Link>
          ))}

        </Slider>
        {
          showLoginModal ?
          <Login setShowLoginModal={setShowLoginModal} showLoginModal={showLoginModal} />:<></>
        }
        
      </section>

      {/* <section className="container px-0 d-flex flex-wrap">
        {
          data.map(item => (
            <Link key={item.id} href={`/${item?.brandId}`}>
              <a className="mb-2 d-block indexItems">
                <div className=" d-flex text-center flex-column ">
                  <Image src={item?.image || ''} alt={item?.name} width="200" height="250" />
                  <p>{item?.brandName}</p>
                </div>
              </a></Link>
          ))
        }
      </section> */}
    </>
  );
}

Home.getLayout = function getLayout(Page) {
  return <Layout>{Page}</Layout>;
};

export async function getStaticProps(context) {
  const res = await axios.get("https://pro.tastee.vn/api/Home/get_product_slider");
  const data = res.data.data;

  return {
    props: { data }, // will be passed to the page component as props
  };
}
