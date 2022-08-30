import React from "react";
import { Carousel } from "react-bootstrap";
import { listRes, listBrand } from "../db";
const CarouselComponent = ({ data }) => {
  return (
    <Carousel className="mb-2 rounded">
      {listRes.map((item, index) => (
        <Carousel.Item className="carouselconfig rounded" key={index}>
          <img className="rounded" src={item} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
