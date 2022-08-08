import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 text-light">
            <h5 className="text-center">Thông tin</h5>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-light">
            <h5 className="text-center">Hỗ trợ</h5>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-light">
            <h5 className="text-center">Kết nối</h5>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-light">
            <h5 className="text-center">Liên hệ</h5>
          </div>
        </div>
        <div className="policy text-light text-center py-2">
          <p>Copyright 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
