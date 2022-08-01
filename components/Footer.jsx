import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid footer bg-light py-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col text-dark">
            <h5 className="text-center">Thông tin</h5>
          </div>
          <div className="col text-dark">
            <h5 className="text-center">Hỗ trợ</h5>

          </div>
          <div className="col text-dark">
            <h5 className="text-center">Kết nối</h5>

          </div>
          <div className="col text-dark">
            <h5 className="text-center">Liên hệ</h5>

          </div>
        </div>
        <div className="policy text-dark text-center py-2">
          <p>Copyright 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
