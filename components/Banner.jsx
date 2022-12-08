import Image from "next/image";
import React, { useEffect } from "react";

const Banner = ({ infoWg }) => {
  return (
    <div className="container px-0 d-flex justify-content-center position-relative bannerCss">
      <Image
        src={infoWg?.data?.brandImage || '/image/logo.jpg'}
        alt="banner"
        width={1600}
        objectFit='cover'
        height={900}
      />
    </div>
  );
};

export default Banner;
