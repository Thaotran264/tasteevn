import React, { useState } from "react";
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
import { cityApi } from "../api-client";
const Pages = () => {
  const router = useRouter();
  const handleViewBtn = (id) => {
    router.push(`/${id}`);
  };


  return (
    <section className="container mx-auto mt-2">
      <CarouselComponent />
      <MultiRowSlide text="Quán nổi bật" />
      <Slider02 text="Cửa hàng được yêu thích" />
      <section className="rounded" style={{ backgroundColor: "#fff" }}>
        <h2 className="ps-3 mb-0">Quán mới nhất</h2>
        <hr></hr>
        <div className="d-flex flex-wrap ">
          {listId.map(item =>
            <Card className="card-item card-config rounded mx-auto" key={item.id}>
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
      </section>
      <TabMenu />
    </section>
  );
};

export default Pages;
