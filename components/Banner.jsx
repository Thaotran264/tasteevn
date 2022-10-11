import Image from "next/image";
import React, { useEffect } from "react";

const Banner = ({ banner,info }) => {

  return (
    <div className="container mb-3 d-flex justify-content-center position-relative bannerCss">
      <Image
        src={info?.brandImage || '/image/logo.jpg'}
        alt=""
        layout="fill"
        objectFit='cover'
      />
    </div>
  );
};

export default Banner;
