import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { listBrand } from "../../db";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}
const settings = {
  // centerMode: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  // autoplay: true,
  speed: 500,
  // autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      },
    },
  ],
};

const Slider02 = ({ data }) => {
  return (
    <div className="container px-0 rounded">
      <Slider {...settings}>
        {data?.map((it, index) => (
          <Link href={`/${it?.brandId}`} key={index}>
            <a className='bg-light d-flex bg-dark bg-opacity-10 justify-content-center'>
                <Image src={it?.image} alt={it?.brandName} width={180} height={180}
                />
            </a>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Slider02;
