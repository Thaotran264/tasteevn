import React from "react";
import CardItems from "./Card";
import CarouselComponent from "./Carousel";
import MultiRowSlide from "./Slider/MultiRowSlide";
import Slider02 from "./Slider/Slider02";

const Pages = ({ data }) => {
  return (
    <div className="mt-2">
      <CarouselComponent data={data} />
      <MultiRowSlide item={data} text="Quán nổi bật" />
      {/* <Slider02 item={data} text="Quán nổi bật" /> */}
      <Slider02 item={data} text="Cửa hàng được yêu thích" />
      <h2>Quán mới nhất</h2>
      <div className="d-flex mb-2 flex-wrap justify-content-between">
        {data && data?.map((item) => <CardItems item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Pages;
