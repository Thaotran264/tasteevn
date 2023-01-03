import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#8d8d8d5e"}}
      onClick={onClick}
    />
  );
}
function SampleNextArrowMB(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#8d8d8d5e"}}
      onClick={onClick}
    />
  );
}
function SamplePrevArrowMB(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}
const settings = {
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  speed: 500,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        infinite: true,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrowMB />,
        prevArrow: <SamplePrevArrowMB />
      },
    },
  ],
};

const Slider02 = ({ data }) => {
  return (
    <div className="container-md px-0 py-2 rounded">
      <Slider {...settings}>
        {data?.map((it, index) => (
          <Link href={`/${it?.brandId}`} key={it?.brandId}>
            <a className='d-flex mx-2'>
              <div className="w-100 h-100">
                <div className="d-flex justify-content-center">
                  <Image width={1024} height={800} src={it?.image} alt={it?.brandName}
                    className="rounded w-100 h-100"
                  />
                </div>
                <div>
                  <p className="mb-0 fw-bold customFontSize customText py-2" >
                    {it.brandName}
                  </p>
                  {/* <p className="mb-0 d-flex align-items-center gap-1" style={{ fontSize: 13 }}><AiOutlineStar />5.0/10 rating</p> */}
                </div>
              </div>
            </a>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Slider02;
