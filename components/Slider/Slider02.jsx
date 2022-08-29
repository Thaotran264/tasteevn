import React from "react";
import Slider from "react-slick";
import { listRes } from "../../db";
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
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
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
      <div className="mx-auto" style={{ width: '85%' }}>
        <Slider {...settings}>
          {listRes.map((item, index) => (
            <div key={index} className=''>
              <div className="d-flex justify-content-center w-100">
                <img className="rounded-circle" src={item} alt={item} style={{ height: 130, width: 130 }} />
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
