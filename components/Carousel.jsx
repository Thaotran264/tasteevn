import React from "react";

const Carousel = () => {
  return (
    <div className="container mb-2" id="hero" style={{ marginTop: 64 }}>
      <div className="rounded" style={{ aspectRatio: "2/1" }}>
        <img
          src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="rounded w-100 h-100"
          style={{ objectFit: "cover", display: "block" }}
        />
      </div>
    </div>
  );
};

export default Carousel;
