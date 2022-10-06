import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { bannerApi } from "../api-client";
const CarouselComponent = ({banner }) => {
 
  return (
    <Carousel className="mb-2 rounded">
      {banner?.map((item, index) => (
        <Carousel.Item className="carouselconfig rounded" key={index}>
          <Image className="rounded" src={item.uri || '/image/logo512.png'} alt="First slide" width={2000} height={1000} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
