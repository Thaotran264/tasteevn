import React from "react";

const Banner = ({ banner }) => {
  return (
    <div className="rounded mb-2" style={{ aspectRatio: "2/1" }}>
      <img
        src={banner && banner}
        alt=""
        className="rounded w-100 h-100"
        style={{ objectFit: "cover", display: "block" }}
      />
    </div>
  );
};

export default Banner;
