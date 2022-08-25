import React from "react";
import Slider from "react-slick";
import { listRes } from "../../db";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2.5,
        infinite: true,
      },
    },
  ],
};
const Slider02 = ({ item, text }) => {
  return (
    <div className="py-2">
      <h2>{text}</h2>
      {/* <Slider {...settings}>
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
      </Slider> */}
      <Slider {...settings}>
        {listRes.map((item, index) => (
          <div key={index}>
            <div>
              <img className="rounded-4" src={item} alt={item} style={{ height: 140, width: "140px" }} />
            </div>
            <span>tẽt</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider02;
