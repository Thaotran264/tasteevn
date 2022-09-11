import React from "react";

const Banner = ({ banner }) => {
  return (
    <div className="rounded mb-3 banner">
      <img
        src='https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt=""
        className="w-100 h-100 d-block rounded"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Banner;
