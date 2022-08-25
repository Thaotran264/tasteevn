import React from "react";
import Slider from "react-slick";
import { listBrand } from "../../db";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}
const settings = {
  infinite: true,
  slidesToShow: 2,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,

  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesPerRow: 2,
        rows: 1,
        infinite: true,
      },
    },
  ],
};
const MultiRowSlide = ({ item, text }) => {
  return (
    <div className="py-4">
      <h2>{text}</h2>
      <Slider {...settings} className="">
        {listBrand.map((it, index) => (
          <div key={index}>
            <img src={it} alt={it} className="rounded mx-auto multiRowImg" />
          </div>
        ))}
        {/* {item &&
          item.map((it) => (
            <div key={it.id} className="">
              <img src={it.image} alt={it.image} className="w-100 rounded h-100 " />
            </div>
          ))} */}
      </Slider>
    </div>
  );
};

export default MultiRowSlide;
