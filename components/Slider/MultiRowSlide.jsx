import React from "react";
import Slider from "react-slick";
import { listBrand } from "../../db";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: ' none' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: ' none' }} onClick={onClick} />;
}
const settings = {
  infinite: false,
  slidesToShow: 2,
  slidesPerRow: 2,
  rows: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesPerRow: 3,
        infinite: false,
        rows: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      },
    },
  ],
};
const MultiRowSlide = ({ item, text }) => {
  return (
    <div className="bg-white rounded mb-2">
      <h2 className="text-center mb-2 border-bottom pb-1">{text}</h2>
      <Slider {...settings} className="">
        {listBrand.map((it, index) => (
          <div key={index}>
            <img src={it} alt={it} className="rounded-circle mx-auto multiRowImg border border-dark" />
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
