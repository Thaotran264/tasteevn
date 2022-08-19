import React from "react";
import CardItems from "./Card";
import CarouselComponent from "./Carousel";
import MultiRowSlide from "./Slider/MultiRowSlide";
import Slider02 from "./Slider/Slider02";

const Pages = ({ data }) => {
  console.log(data);

  return (
    <div className="mt-2">
      <CarouselComponent data={data} />
      <MultiRowSlide item={data} />
      <Slider02 item={data} />

      <div className="d-flex mb-2 flex-wrap justify-content-between">
        {data && data?.map((item) => <CardItems item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Pages;
