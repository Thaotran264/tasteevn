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
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      },
    },
  ],
};

const Slider02 = ({ item, text }) => {
  return (
    <div className="p-2 bg-white rounded mb-2">
      <h2 className="text-center pb-1 border-bottom mb-2">{text}</h2>
      <div className="mx-auto" style={{ width: '100%' }}>
        <Slider {...settings}>
          {listBrand.map((item, index) => (
            <div key={index} className=''>
              <div className="d-flex justify-content-center w-100">
                <img className="rounded border border-dark" src={item} alt={item} style={{ height: 130, width: 130 }} />
              </div>
              <p className="d-block text-center" style={{ fontSize: 16 }}>Bùi Văn Ngọ Coffee Coffee</p>
            </div>
          ))}
        </Slider>
      </div>
    </div >
  );
};

export default Slider02;
