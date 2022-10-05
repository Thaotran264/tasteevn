import Image from "next/image";
import React, { useEffect } from "react";

const Banner = ({ banner,info }) => {
  // console.log('info',info)
  // const {brandImage} = info
  return (
    <div className="container mb-3 d-flex justify-content-center">
      <Image
        src={info?.brandImage || 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600'}
        alt=""
        className="rounded"
        width={1440}
        height={500}
      />
    </div>
  );
};

export default Banner;
