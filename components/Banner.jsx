import Image from "next/image";
import React, { useEffect } from "react";

const Banner = ({ banner }) => {

  return (
    <div className="container px-0 mb-3 d-flex justify-content-center position-relative bannerCss">
      <Image
        src={banner || '/image/logo.jpg'}
        alt="banner"
        layout="fill"
        objectFit='cover'
      />
    </div>
  );
};

export default Banner;
