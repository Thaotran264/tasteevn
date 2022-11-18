import Image from "next/image";
import React, { useEffect } from "react";

const Banner = ({ banner }) => {

  return (
    <div className="container px-0 d-flex justify-content-center position-relative bannerCss">
      <Image
        src={banner || '/image/logo.jpg'}
        alt="banner"
        width={1080}
        height={660}
      />
    </div>
  );
};

export default Banner;
