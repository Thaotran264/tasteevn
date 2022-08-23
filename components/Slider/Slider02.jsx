import React from "react";
import Slider from "react-slick";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1.5,
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
            <div key={item.id}>
              <img
                className="rounded"
                src="https://images.pexels.com/photos/1648023/pexels-photo-1648023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt={item.image}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Slider02;
