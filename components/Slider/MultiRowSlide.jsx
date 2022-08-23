import React from "react";
import Slider from "react-slick";
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
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "2px",
  slidesToShow: 2,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesPerRow: 2,
        rows: 1,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      },
    },
  ],
};
const MultiRowSlide = ({ item }) => {
  return (
    <div className="py-4">
      <h2>Cửa hàng yêu thích</h2>
      <Slider {...settings}>
        {item &&
          item.map((it) => (
            <div key={it.id} className="">
              <img src={it.image} alt={it.image} className="w-100 rounded h-100 " />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MultiRowSlide;
