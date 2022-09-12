import Image from "next/image";
import React from "react";
import { Carousel } from "react-bootstrap";
import { listRes } from "../db";
const CarouselComponent = ({ }) => {
  return (
    <Carousel className="mb-2 rounded">
      {listRes.map((item, index) => (
        <Carousel.Item className="carouselconfig rounded" key={index}>
          <Image className="rounded" src={item} alt="First slide" width={2000} height={1000}/>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
