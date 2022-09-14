import Image from "next/image";
import React, { useEffect } from "react";

const Banner = ({ banner }) => {

  return (
    <div className="container mb-3 d-flex justify-content-center px-0">
      <Image
        src={banner || '/image/logo512.png'}
        alt=""
        width={900}
        height={360}
      />
    </div>
  );
};

export default Banner;
