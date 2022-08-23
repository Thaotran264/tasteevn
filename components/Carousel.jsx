import React from "react";
import { Carousel } from "react-bootstrap";
const CarouselComponent = ({ data }) => {
  console.log(data);
  return (
    <Carousel className="mb-2 rounded">
      {data &&
        data.map((item) => (
          <Carousel.Item className="carouselconfig" key={item.id}>
            <img
              className="d-block w-100 h-100 rounded"
              src={item?.image}
              style={{ objectFit: "cover" }}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default CarouselComponent;
