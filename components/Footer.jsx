import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark bg-opacity-75 ">
      <div className="container py-4">
        <div className="row">
          <div className="col-6 col-md-6 col-lg-3 text-light">
            <h5 className="text-center">Thông tin</h5>
          </div>
          <div className="col-6 col-md-6 col-lg-3 text-light">
            <h5 className="text-center">Hỗ trợ</h5>
          </div>
          <div className="col-6 col-md-6 col-lg-3 text-light">
            <h5 className="text-center">Kết nối</h5>
          </div>
          <div className="col-6 col-md-6 col-lg-3 text-light">
            <h5 className="text-center">Liên hệ</h5>
          </div>
        </div>
      </div>
      <p className="py-2 text-light text-center ">Copyright 2022</p>
    </footer>
  );
};

export default Footer;
