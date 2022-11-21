import Image from "next/image";
import React, { useEffect } from "react";

const Banner = ({ banner }) => {

  return (
    <div className="container px-0 d-flex justify-content-center position-relative bannerCss">
      <Image
        src={banner || '/image/logo.jpg'}
        alt="banner"
        // className="rounded"
        width={1600}
        height={900}
      />
    </div>
  );
};

export default Banner;
