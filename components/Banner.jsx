import Image from "next/image";
import React, { useEffect } from "react";

const Banner = ({ banner }) => {

  return (
    <div className="container mb-3 d-flex justify-content-center px-0">
      <Image
        src={banner || 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600'}
        alt=""
        width={1440}
        height={500}
      />
    </div>
  );
};

export default Banner;
