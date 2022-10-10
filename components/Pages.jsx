import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { bannerApi } from "../api-client";
import { listId } from "../db";
import CarouselComponent from "./Carousel";
import Loading from "./Loading";
import MultiRowSlide from "./Slider/MultiRowSlide";
import TabMenu from "./TabMenu";
const Pages = () => {
  const router = useRouter();
  const handleViewBtn = (id) => {
    router.push(`/${id}`);
  };
  const [loading, setLoading] = useState(false)
 
  if(loading) {
    return <Loading />
  }

  return (
    <section className="container mx-auto mt-2 mb-2">
      {/* <CarouselComponent banner={banner}/> */}
      {/* <MultiRowSlide text="Quán nổi bật" /> */}
      {/* <Slider02 text="Cửa hàng được yêu thích" /> */}
      {/* <section className="rounded" style={{ backgroundColor: "#fff" }}>
        <h2 className="ps-3 mb-0">Quán mới nhất</h2>
        <hr></hr>
        <div className="card__container ">
          {listId.map((item,index) =>
            <Card className="card-item card-config rounded mx-auto" key={index}>
              <Card.Img
                className="w-100"
                variant="top"
                src='https://i.pinimg.com/236x/aa/25/e4/aa25e4f9a431708406bc642b235ba216.jpg'
                onClick={() => handleViewBtn(item)}
              />
              <Card.Body>
                <Card.Title onClick={() => handleViewBtn()}>{item}</Card.Title>
                <Card.Text className="" style={{ fontSize: 13, color: "#848484" }}>
                  123 Hai Bà Trưng, quận 1, Thành phố HCM
                </Card.Text>
              </Card.Body>
            </Card>

          )}
        </div>
      </section> */}
      {/* <TabMenu /> */}
    </section>
  );
};

export default Pages;
