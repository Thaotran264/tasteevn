import React from "react";
import { Carousel } from "react-bootstrap";
import { listImg } from "../db";
const CarouselComponent = ({ data }) => {
  return (
    <Carousel className="mb-2">
      {/* <Carousel.Item className="carouselconfig">
        <img className="" src={listImg[0]} alt="First slide" />
      </Carousel.Item> */}
      {listImg.map((item, index) => (
        <Carousel.Item className="carouselconfig" key={index}>
          <img className="" style={{ objectFit: "cover" }} src={item} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
