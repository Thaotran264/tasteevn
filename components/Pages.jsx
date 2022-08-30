import React from "react";
import { Card } from "react-bootstrap";
import useGetBanner from "../hooks/useGetBanner";
import CardItems from "./Card";
import CarouselComponent from "./Carousel";
import MultiRowSlide from "./Slider/MultiRowSlide";
import Slider02 from "./Slider/Slider02";
import { useRouter } from "next/router";

const Pages = () => {
  const { data,
    isLoading,
    isError
  } = useGetBanner()
  if (isLoading) return <p>Loading....</p>
  if (isError) return <p>{isError}</p>

  const router = useRouter();
  const handleViewBtn = (id) => {
    router.push(`/8d3932d9-c541-4699-ac49-9f7edbbe05f7`);
  };
  return (
    <div className="mt-2">
      <CarouselComponent data={data} />
      <MultiRowSlide item={data} text="Quán nổi bật" />
      {/* <Slider02 item={data} text="Quán nổi bật" /> */}
      <Slider02 item={data} text="Cửa hàng được yêu thích" />
      <h2>Quán mới nhất</h2>
      <div className="d-flex mb-2 flex-wrap justify-content-between">
        {/* {data && data?.map((item) => <CardItems item={item} key={item.id} />)} */}
        <Card className="card-item card-config rounded">
          <Card.Img
            className="w-100"
            variant="top"
            src='https://i.pinimg.com/236x/d4/a3/96/d4a396c0d55040c85be74a10aa4f5eee.jpg'
            onClick={() => handleViewBtn()}
          />
          <Card.Body>
            <Card.Title onClick={() => handleViewBtn()}>The Coffee House</Card.Title>
            <Card.Text className="" style={{ fontSize: 13, color: "#848484" }}>
              123 Hai Bà Trưng, quận 1, Thành phố HCM
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Pages;
