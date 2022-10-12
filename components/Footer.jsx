import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsYoutube ,BsTwitter,BsMessenger} from "react-icons/bs";
import { SiZalo } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className="container footerContainer d-flex mx-auto pt-4">
        <div className="footerItem">
          <h5 >Thông tin</h5>
          <ul >
            <li><span>Email: </span><a href="#">hotro@tastee.com</a></li>
            <li><span>Điện thoại:</span><a href="#">028 xxxx xxxx</a> </li>
            <li><span>Địa chỉ: </span><a href="#">Lầu 8, 37 Hoàng Văn Thụ, P.15, Q.Phú Nhuận, TP. HCM </a></li>
          </ul>
        </div>
        <div className="footerItem">
          <h5 >VỀ TASTEE</h5>
          <ul >
            <li><span>Ứng dụng:</span><a href="#">Tastee POS</a></li>
            <li><a href="#">Mua và giao nhận Online</a> </li>
            <li><a href="#">Qui định và hình thức thanh toán</a></li>
            <li><a href="#">Bảo hành và Bảo trì</a></li>
            <li><a href="#">Đổi trả và Hoàn tiền</a></li>
          </ul>
        </div>
        <div className="footerItem">
          <h5 >Sản phẩm</h5>
          <ul >
            <li><a href="#">Giới thiệu về Tastee</a></li>
            <li><a href="#">Tuyển dụng nhân sự</a> </li>
            <li><a href="#">Chính sách bảo mật</a></li>
            <li><span>Ứng dụng: </span><a href="#">Tastee POS</a></li>
            <li><span>Điều khoản: </span><a href="/dieu-khoan-tastee-pos"> Điều khoản sử dụng Tastee POS</a></li>
          </ul>
        </div>
        <div className="footerItem">
          <h5>Cộng đồng</h5>
          <div className="footerSocials">
            <BsFacebook style={{ color: 'hsla(0, 0%, 100%, 0.571)', fontSize: 22 }} />
            <BsMessenger style={{ color: 'hsla(0, 0%, 100%, 0.571)',fontSize: 22  }} />
            <BsYoutube style={{ color: 'hsla(0, 0%, 100%, 0.571)' ,fontSize: 22 }} />
            <SiZalo style={{ color: 'hsla(0, 0%, 100%, 0.571)',fontSize: 22  }} />
            <BsTwitter style={{ color: 'hsla(0, 0%, 100%, 0.571)',fontSize: 22  }} />
          </div>
        </div>
      </div>
      <p className="copyright">© Copyright 2022 by Tastee team. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
