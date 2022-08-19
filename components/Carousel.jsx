import React from "react";

const Carousel = ({ banner }) => {
  return (
    <div className="mb-2" id="hero">
      <div className="rounded" style={{ aspectRatio: "2/1" }}>
        <img
          src={banner && banner}
          alt=""
          className="rounded w-100 h-100"
          style={{ objectFit: "cover", display: "block" }}
        />
      </div>
    </div>
  );
};

export default Carousel;
