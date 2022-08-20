import React from "react";
import Slider from "react-slick";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};
const Slider02 = ({ item }) => {
  return (
    <div className="py-4">
      <h2>Cửa hàng yêu thích</h2>
      <Slider {...settings} style={{ overflow: "hidden" }}>
        {item &&
          item.map((item) => (
            <div key={item.id} className="rounded">
              <img className="rounded w-100" src={item.image} alt={item.image} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Slider02;
