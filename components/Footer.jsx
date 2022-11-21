import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsFacebook, BsYoutube, BsGoogle, BsApple } from "react-icons/bs";
import { SiZalo } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="py-4 d-flex flex-column gap-2 shadow">
      <div className="container">
        <Row>
          <Col xs={12} md={4}>
            <h5 className="fw-bold text-dark">Thông tin</h5>
            <ul className="text-footer ps-0">
              <li><span className="fw-bolder">Email: </span><a href="#">cskh@tastee.com</a></li>
              <li><span className="fw-bolder">Điện thoại:</span><a href="#">028 xxxx xxxx</a> </li>
              <li><span className="fw-bolder">ĐKKD:</span><a href="#">37 Hoàn Văn Thụ, P.x, Q.Phú Nhuận, HCM </a></li>
              <li><span className="fw-bolder">Văn phòng:</span> <a href="#">Tầng 14 Tòa nhà Halo Tower, 37 Hoàn Văn Thụ, P.x, Q.Phú Nhuận, HCM </a> </li>
            </ul></Col>
          <Col xs={12} md={4}>
            <h5 className="fw-bold text-dark">Sản phẩm</h5>
            <ul className="text-footer ps-0">
              <li><a href="#">Giới thiệu về Tastee</a></li>
              <li><a href="#">Tuyển dụng nhân sự</a> </li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="/dieu-khoan-tastee-pos">Điều khoản sử dụng</a></li>
            </ul></Col>
          <Col xs={12} md={4}>
            <h5 className="fw-bold text-dark">Cộng đồng người bán</h5>
            <div className=" d-flex gap-4 fs-1 align-items-center">
              <BsFacebook style={{ color: '#3b5998', fontSize: 22 }} />
              <BsYoutube style={{ color: '#c4302b' }} />
              <SiZalo style={{ color: '#3b5998' }} />
              <BsGoogle style={{ color: '#3b5998', fontSize: 22 }} />
              <BsApple style={{ color: '#3b5998', fontSize: 22 }} />
            </div>
          </Col>
        </Row>
      <Row>
        <Col xs={12}>
      <p className="text-center mb-0 text-dark" style={{ fontSize: 14 }}>© Copyright 2022 by Tastee team. </p>
        </Col>
        <Col xs={12}>
      <p className="text-center mb-0 text-dark" style={{ fontSize: 14 }}>All Rights Reserved</p>
        </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
