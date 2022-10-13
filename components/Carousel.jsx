import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { bannerApi } from "../api-client";
// import { bannerApi } from "../api-client";
const CarouselComponent = ({ banner }) => {
  const [banners, setBanner] = useState()
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await bannerApi.getBanner()
        if (res.data) {
          setBanner(res.data)
        }
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  return (
    <section className="container px-0 banner">
      <Carousel>
        {banners?.map((item, index) => (
          <Carousel.Item key={index} style={{height: '60vh', width:' 100%'}}>
            <Image src={item?.uri || '/image/logo.jpg'} alt="First slide" 
            layout="fill" objectFit="cover"/>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselComponent;
