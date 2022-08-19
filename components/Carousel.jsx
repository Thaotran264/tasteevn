import React from "react";
import { Carousel } from "react-bootstrap";
const CarouselComponent = ({ data }) => {
  console.log(data);
  return (
    <Carousel className="mb-2 rounded">
      {data &&
        data.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-25"
              src={item?.image}
              style={{ objectFit: "contain" }}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default CarouselComponent;
