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
      <Slider {...settings}>
        {item &&
          item.map((item) => (
            <div key={item.id} className="rounded px-1" style={{ height: 80 }}>
              <img
                className="rounded"
                src={item.image}
                alt={item.image}
                style={{ width: "100%", height: "50%" }}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Slider02;
