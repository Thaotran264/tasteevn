import React from "react";
import { Carousel } from "react-bootstrap";
import { listImg, listRes } from "../db";
const CarouselComponent = ({ data }) => {
  return (
    <Carousel className="mb-2">
      {listRes.map((item, index) => (
        <Carousel.Item className="carouselconfig" key={index}>
          <img className="" src={item} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
