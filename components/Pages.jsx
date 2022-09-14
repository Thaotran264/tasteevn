import React from "react";
import { Card } from "react-bootstrap";
import useGetBanner from "../hooks/useGetBanner";
import CardItems from "./Card";
import CarouselComponent from "./Carousel";
import MultiRowSlide from "./Slider/MultiRowSlide";
import Slider02 from "./Slider/Slider02";
import { useRouter } from "next/router";
import { useEffect } from "react";
import TabMenu from "./TabMenu";
import { listId } from "../db";
const Pages = () => {
  const router = useRouter();
  const handleViewBtn = (id) => {
    router.push(`/${id}`);
  };

  return (
    <div className="mt-2">
      <CarouselComponent />
      <MultiRowSlide text="Quán nổi bật" />
      <Slider02 text="Cửa hàng được yêu thích" />
      <h2>Quán mới nhất</h2>
      <div className="d-flex flex-wrap">
        {listId.map(item =>
          <Card className="card-item card-config rounded mx-auto" style={{ width: '49%' }}>
            <Card.Img
              className="w-100"
              variant="top"
              src='https://i.pinimg.com/236x/aa/25/e4/aa25e4f9a431708406bc642b235ba216.jpg'
              onClick={() => handleViewBtn(item)}
            />
            <Card.Body>
              <Card.Title onClick={() => handleViewBtn()}>The Coffee House</Card.Title>
              <Card.Text className="" style={{ fontSize: 13, color: "#848484" }}>
                123 Hai Bà Trưng, quận 1, Thành phố HCM
              </Card.Text>
            </Card.Body>
          </Card>

        )}
      </div>
      <TabMenu />
    </div>
  );
};

export default Pages;
