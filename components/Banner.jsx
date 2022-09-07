import React from "react";

const Banner = ({ banner }) => {
  return (
    <div className="rounded mb-3 banner">
      <img
        src={banner && banner}
        alt=""
        className="w-100 h-100 d-block rounded"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Banner;
