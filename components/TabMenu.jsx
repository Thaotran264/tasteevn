import React, { useContext } from "react";
import { AiOutlineUser, AiOutlineHome, AiOutlineMenu, AiOutlineTags } from "react-icons/ai";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import { useRouter } from "next/router";
import { DataContext } from "../store/globalState";
import { useState } from "react";
import LoginModal from "./LoginModal";

const TabMenu = () => {
  const { state, dispatch } = useContext(DataContext);
  const router = useRouter();
  const handleLogOut = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    dispatch({ type: "NOTIFY", payload: { success: "Đăng xuất thành công" } });
    router.push("/");
  };
  return (
    <div className="position-fixed bottom-0 start-0 w-100 bg-danger py-2 hideOnDesktop mx-auto">
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
              <AiOutlineTags style={{ fontSize: 24 }} />
            </a>
          </div>
          <div
            className="col-3 d-flex
                justify-content-center"
          >
            {/* <a className='btn btn-outline-light text-light' href='/cart'>
                        <AiOutlineUser style={{ fontSize: 24 }} />
                    </a> */}
            <DropdownButton
              variant="outline-light"
              title={<AiOutlineUser style={{ fontSize: 24 }} />}
            >
              <Dropdown.Item eventKey="4">
                <LoginModal />
              </Dropdown.Item>
              <Dropdown.Item eventKey="1">Thông tin</Dropdown.Item>
              <Dropdown.Item eventKey="2">Đăng xuất</Dropdown.Item>
              <Dropdown.Item eventKey="3">Booking</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabMenu;
