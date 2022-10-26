import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick/lib/slider";
import Layout from "../components/Layout";
import React from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: ' none' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: ' none' }} onClick={onClick} />;
}
export default function Home({ data }) {
  let banners = [
    {
      "id": "a7867858-2505-48f2-a3a7-f2c801cd5bd0",
      "brandId": "68af74fa-595f-439d-882a-2ce1c236af28",
      "brandName": "The Pizza Company - Nguyễn Thị Minh Khai",
      "image": "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-3202-1664279830?w=393&type=o",
      "order": 12
    },
    {
      "id": "ee4e148c-e604-422b-a4e1-1b6b4f3829f5",
      "brandId": "12d14d71-58b5-4481-9834-1299519a5813",
      "brandName": "Pizza Hut - Hậu Giang",
      "image": "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-3183-1664438196?w=393&type=o",
      "order": 2
    },
    {
      "id": "72ef381d-1442-4012-a888-a9a2439edf79",
      "brandId": "",
      "brandName": "",
      "image": "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-2444-1645171670?w=393&type=o",
      "order": 3
    },
    {
      "id": "fbfc4cf0-bd59-4cbe-abaf-96bc179922ad",
      "brandId": "a3b66785-e234-4f5a-abf1-d5ae101ef3bf",
      "brandName": "TOUS les JOURS - Hậu Giang",
      "image": "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-3313-1664611060?w=393&type=o",
      "order": 4
    },
    {
      "id": "a7867858-2505-48f2-a3a7-f2c801cd5bd05",
      "brandId": "68af74fa-595f-439d-882a-2ce1c236af28",
      "brandName": "The Pizza Company - Nguyễn Thị Minh Khai",
      "image": "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-2733-1655805928?w=393&type=o",
      "order": 2
    },
    {
      "id": "ee4e148c-e604-422b-a4e1-1b6b4f3829f56",
      "brandId": "12d14d71-58b5-4481-9834-1299519a5813",
      "brandName": "Pizza Hut - Hậu Giang",
      "image": "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-3183-1664438196?w=393&type=o",
      "order": 2
    },
    {
      "id": "72ef381d-1442-4012-a888-a9a2439edf797",
      "brandId": "",
      "brandName": "",
      "image": "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-2880-1661156575?w=393&type=o",
      "order": 3
    },
    {
      "id": "fbfc4cf0-bd59-4cbe-abaf-96bc179922ad8",
      "brandId": "a3b66785-e234-4f5a-abf1-d5ae101ef3bf",
      "brandName": "TOUS les JOURS - Hậu Giang",
      "image": "https://tea-3.lozi.vn/v1/images/resized/banner-mobile-3202-1664279830?w=393&type=o",
      "order": 4
    }
  ]

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
