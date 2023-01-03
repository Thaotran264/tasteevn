import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsFacebook, BsYoutube, BsGoogle, BsApple } from "react-icons/bs";
import { SiZalo } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container footer-top-container">
          <div className="footer-top-items">
            <h5 >Thông tin chung</h5>
            <ul>
              <li><span>Email: </span> cskh@tastee.com</li>
              <li><span>Điện thoại:</span> 028 xxxx xxxx</li>
              <li><span>ĐKKD:</span> 37 Hoàng Văn Thụ, P.x, Q.Phú Nhuận, HCM</li>
              <li><span>Văn phòng:</span> Tầng 8 Tòa nhà Halo Tower, 37 Hoàng Văn Thụ, P15, Q.Phú Nhuận, HCM </li>
            </ul>
          </div>
          <div className="footer-top-items">
            <h5 >Tastee</h5>
            <ul >
              <li><a href="#">Giới thiệu về Tastee</a></li>
              <li><a href="#">Tuyển dụng nhân sự</a> </li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="/dieu-khoan-tastee-pos">Điều khoản sử dụng</a></li>
            </ul>
          </div>
          <div className="footer-top-items">
            <h5 >Cộng đồng người bán</h5>
            <div className="footer-top-socials">
              <BsFacebook />
              <BsYoutube  />
              <SiZalo />
              <BsGoogle />
              <BsApple />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="policy">© Tastee Team 2021 | all right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
