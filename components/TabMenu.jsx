import React, { useContext } from "react";
import { AiOutlineUser, AiOutlineHome, AiOutlineMenu, AiOutlineTags } from "react-icons/ai";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import { useRouter } from "next/router";
import { DataContext } from "../store/globalState";
import { useState, useEffect } from "react";
import LoginModal from "./LoginModal";
import { isMobile } from "react-device-detect";
import { BsCartCheck } from "react-icons/bs";
import { stringify } from "querystring";

const TabMenu = () => {
  const [_isMobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(isMobile);
  }, [_isMobile]);
  const { state, dispatch } = useContext(DataContext);
  const router = useRouter();
  const [username, setusername] = useState();

  let userInfo = {}
  useEffect(() => {
    userInfo = localStorage.getItem("userInfo") ? localStorage.getItem("userInfo") : {}
    if(!userInfo && userInfo === 'undefined'){
      handleLogOut();
    }
    else{
      let name = JSON.parse(localStorage.getItem("userInfo")) || "";
      setusername(name.fullName);
      console.log('%cTabMenu.jsx line:32 name', 'color: #007acc;', name);
    }
  }, [userInfo]);

  const handleLogOut = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    dispatch({ type: "NOTIFY", payload: { success: "Đăng xuất thành công" } });
    router.push("/");
    window.location.reload();
  };
  return (
    <div className="position-fixed bottom-0 start-0 w-100 py-2 hideOnDesktop mx-auto" style={{ backgroundColor: "#FF9551" }}>
      <div className="container">
        <div className="row">
          <div className="col-3 d-flex justify-content-center">
            <Link href="/">
              <a className="btn btn-outline-light text-light">
                <AiOutlineHome style={{ fontSize: 24 }} />
              </a>
            </Link>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <a className="btn btn-outline-light text-light" href="#menu">
              <AiOutlineMenu style={{ fontSize: 24 }} />
            </a>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <a className="btn btn-outline-light text-light">
              <BsCartCheck style={{ fontSize: 24 }} />
            </a>
          </div>
          <div
            className="col-3 d-flex
                justify-content-center"
          >
            {username ?
              <DropdownButton
                style={{ border: 'none!important', borderRadius: '0.6em' }}
                title={<AiOutlineUser style={{ fontSize: 24, color: 'white' }} />}
              >
                <Dropdown.Item eventKey="1" href={_isMobile ? "/profile" : "/profile-desktop"}>Thông tin tài khoản</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={handleLogOut} >Đăng xuất</Dropdown.Item>
              </DropdownButton>
              :
              <LoginModal btnStyle={'ICON'} />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabMenu;
