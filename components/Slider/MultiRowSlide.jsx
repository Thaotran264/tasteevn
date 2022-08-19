import React from "react";
import Slider from "react-slick";
const settings = {
  centerMode: true,
  infinite: true,
  //   centerPadding: "60px",
  slidesToShow: 2,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        infinite: true,
      },
    },
  ],
};
const MultiRowSlide = ({ item }) => {
  return (
    <div className="py-4">
      <h2>Multiple Rows</h2>
      <Slider {...settings}>
        {item &&
          item.map((it) => (
            <div key={it.id} className="px-2">
              <img src={it.image} alt={it.image} className="w-100" />
            </div>
          ))}
        {item &&
          item.map((it) => (
            <div key={it.id} className="px-2 bg-danger text-center">
              <img src={it.image} alt={it.image} className="w-100" />
            </div>
          ))}
        {item &&
          item.map((it) => (
            <div key={it.id} className="px-2 bg-danger text-center">
              <img src={it.image} alt={it.image} className="w-100" />
            </div>
          ))}
        {item &&
          item.map((it) => (
            <div key={it.id} className="px-2 bg-danger text-center">
              <img src={it.image} alt={it.image} className="w-100" />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MultiRowSlide;
