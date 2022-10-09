import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { SiZalo } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-light pt-1">
      <div className="container py-4">
        <div className="row">
          <div className="col-10 col-md-10 col-lg-5 text-dark">
            <h5 className="fw-bold">Thông tin</h5>
            <ul className="text-footer p-1 m-1">
              <li><span className="fw-bolder">Email: </span><a href="#">hotro@tastee.com</a></li>
              {/* <li><span className="fw-bolder">Điện thoại:</span><a href="#">028 xxxx xxxx</a> </li> */}
              <li><span className="fw-bolder">Địa chỉ: </span><a href="#">37 Hoàn Văn Thụ, P.15, Q.Phú Nhuận, TP. HCM </a></li>
              {/* <li><span className="fw-bolder">Văn phòng:</span> <a href="#">Tầng 14 Tòa nhà Halo Tower, 37 Hoàn Văn Thụ, P.x, Q.Phú Nhuận, HCM </a> </li> */}
            </ul>
          </div>
          {/* <div className="col-6 col-md-6 col-lg-3 text-dark">
            <h5 className="fw-bold">VỀ TASTEE</h5>
            <ul className="text-footer p-1 m-1">
              <li><span className="fw-bolder">Ứng dụng:</span><a href="#">Tastee POS</a></li>
               <li><a href="#">Mua và giao nhận Online</a> </li>
              <li><a href="#">Qui định và hình thức thanh toán</a></li>
              <li><a href="#">Bảo hành và Bảo trì</a></li>
              <li><a href="#">Đổi trả và Hoàn tiền</a></li>
            </ul>
          </div> */}
          <div className="col-10 col-md-10 col-lg-4 text-dark">
            <h5 className="fw-bold">Sản phẩm</h5>
            <ul className="text-footer p-1 m-1">
              {/* <li><a href="#">Giới thiệu về Tastee</a></li>
              <li><a href="#">Tuyển dụng nhân sự</a> </li>
              <li><a href="#">Chính sách bảo mật</a></li> */}
              <li><span className="fw-bolder">Ứng dụng: </span><a href="#">Tastee POS</a></li>
              <li><span className="fw-bolder">Điều khoản: </span><a href="/dieu-khoan-tastee-pos"> Điều khoản sử dụng Tastee POS</a></li>
            </ul>
          </div>
          <div className="col-10 col-md-10 col-lg-3 text-dark">
            <h5 className="fw-bold">Cộng đồng người bán</h5>
            {/* <ul className="justify-content-center d-flex gap-4 fs-1"> */}
            <ul className="text-footer p-1 m-1">
              {/* <BsFacebook style={{ color: '#3b5998' }} /> */}
              <li><a href="https://www.facebook.com/groups/401975274852327"><BsFacebook style={{ color: '#3b5998' }} /></a></li>
              {/* <BsYoutube style={{ color: '#c4302b' }} />
              <SiZalo style={{ color: '#3b5998' }} /> */}
            </ul>
          </div>
        </div>
      </div>
      <p className="border-top py-2 text-center fw-light " style={{ fontSize: '12px' , color: '#252525' }}>© Copyright 2022 by Tastee team. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
