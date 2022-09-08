import React from "react";

const Banner = ({ banner }) => {
  return (
    <div className="container px-0 banner">
      <img
        src={banner && banner}
        alt=""
        className="w-100 h-100 d-block"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Banner;
