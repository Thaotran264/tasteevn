import React from "react";

const Banner = ({ banner }) => {
  return (
    <div className="rounded mb-2 banner">
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
