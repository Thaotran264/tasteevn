import Image from "next/image";
import React, { useEffect } from "react";

const Banner = ({ banner,info }) => {
  // console.log('info',info)
  // const {brandImage} = info
  return (
    <div className="container mb-3 d-flex justify-content-center position-relative bannerCss" style={{height: '50vh'}} >
      <Image
        src={info?.brandImage || '/image/logo.jpg'}
        alt=""
        className="rounded"
        layout="fill"
        // width={1440}
        // height={500}
        objectFit='cover'
      />
    </div>
  );
};

export default Banner;
