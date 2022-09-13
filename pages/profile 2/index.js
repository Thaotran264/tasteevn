import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { isMobile } from "react-device-detect";
import { BsChevronRight, BsHeartFill } from "react-icons/bs";
import { FaAddressCard, FaClipboardList } from "react-icons/fa";
import { FcAddImage } from "react-icons/fc";
import { BiUser } from "react-icons/bi";
import { GoChecklist } from "react-icons/go";
import { userApi } from "../../api-client/user";
import Layout from "../../components/Layout";
import { AiOutlinePlus } from "react-icons/ai";

import { useRouter } from "next/router";
import { Button, ListGroup } from "react-bootstrap";
import { DataContext } from "../../store/globalState";
import ProfileItem from "../../components/Profile/ProfileItem";

const ProfileMobile = () => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({});

  const [open, setOpen] = useState(false);
  const [_isMobile, setMobile] = useState(false);
  const [isShowContent, setIsShowContent] = useState({});
  const { state, dispatch } = useContext(DataContext);
  const router = useRouter();

  // useEffect(() => {
  //   setMobile(isMobile);
  // }, [_isMobile]);

  // useEffect(() => {
  //   getDetailUser();
  // }, []);

  const getDetailUser = async () => {
    try {
      const res = await userApi.getUserInfor();
      if (res['successful']) {
        setUser(res['userInfo']);
      }
    } catch (error) {
      console.log(error)
      dispatch({ type: "NOTIFY", payload: { error: "Đã xảy ra lỗi vui lòng đăng nhập lại" } });
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
      window.location.replace("/");
    }
  };

  const [username, setusername] = useState('');
  useEffect(() => {
    let user = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo") || '') : null
    console.log('%cindex.js line:51 user', 'color: #007acc;', user);
    let userInfor = user
    console.log('%cindex.js line:50 userInfor', 'color: #007acc;', userInfor);
    if (userInfor) {
      setusername(userInfor);
    }
    else {
      router.push('/')
      handleLogOut('Đã xảy ra lỗi vui lòng đăng nhập')
    }
  }, []);


  const handleLogOut = (mess) => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    dispatch({ type: "NOTIFY", payload: { success: mess } });
    window.location.replace("/");
  };

  const menu = ["Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 5", "Menu 6"];
  const handleClick = (value) => {
    setCount(value);
  };
  const editField = (field) => {
    console.log("%cindex.js line:21 field", "color: #007acc;", field);
  };
  return (
    <section className="container">
      <ProfileItem text="Thông tin người dùng" />
      <ProfileItem text="Quản lý đơn hàng" />
      <ProfileItem text="Quán yêu thích" />
      <ProfileItem text="Quản lý đặt chỗ" />
      <ProfileItem text="Sổ địa chỉ" />
      <button className="w-100 mx-auto rounded btn btn-danger" onClick={() => handleLogOut('Đăng xuất thành công')}>
        Đăng xuất
      </button>
    </section>
  );
};

ProfileMobile.getLayout = function getLayout(Page) {
  return <Layout>{Page}</Layout>;
};

export default ProfileMobile;
