import Link from "next/link";
import { useRouter } from "next/router";
import Dropdown from "react-bootstrap/Dropdown";
import { isMobile } from "react-device-detect";
import { BsCartCheck, BsSearch } from "react-icons/bs";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../store/globalState";
import LoginModal from "./LoginModal";
import Search from "./Search";
const Navbar = () => {
  const { state, dispatch } = useContext(DataContext);
  const [username, setusername] = useState();
  const [showSearch, setShowSearch] = useState(false);
  const [_isMobile, setMobile] = useState(false);
  let userInfo = {}

  useEffect(() => {
    userInfo = localStorage.getItem("userInfo") ? localStorage.getItem("userInfo") : null
    if (!userInfo && userInfo === 'undefined') {
      handleLogOut();
    }
    else {
      let name = JSON.parse(localStorage.getItem("userInfo")) || "";
      setusername(name.fullName);
    }
  }, [userInfo]);

  useEffect(() => {
    setMobile(isMobile);
  }, [_isMobile]);

  const handleSearch = () => {
    console.log("first");
    setShowSearch(!showSearch);

  };

  const router = useRouter();
  const handleLogOut = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    dispatch({ type: "NOTIFY", payload: { success: "Đăng xuất thành công" } });
    router.push("/");
    window.location.reload();
  };

  return (
    <header
      className="bg-white position-fixed top-0 start-0 w-100 border border-bottom"
      style={{ zIndex: 99 }}
      id="nav"
    >
      <nav className="container">
        <div className="row align-items-center justify-content-between">
          {/* Logo */}
          <div className="col-2 col-sm-2 col-md-2 col-lg-2">
            <div>
              <div className="d-none showOnDesktop p-1">
                <Link href="/">
                  <img src="/image/logo.jpg" className=" w-75 h-75" style={{ cursor: "pointer" }} />
                </Link>
              </div>
              <div className="hideOnDesktop" style={{ aspectRatio: "1/1", padding: 5 }}>
                <Link href="/">
                  <img
                    src="/image/mobileLogo.jpg"
                    className=" w-100 h-100"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* Dropdown */}
          <div className="col-4 col-sm-3 col-md-3 col-lg-2">
            <Dropdown>
              <Dropdown.Toggle
                className="border-0 rounded-0 border-warning border-bottom"
                id="dropdown-basic"
              >
                TP HCM
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">DN</Dropdown.Item>
                <Dropdown.Item href="#/action-2">HN</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {/* Search Form */}
          <div className="col-2 col-sm-4 col-md-4 col-lg-6">
            <form
              className=" d-none border border-dark showOnDesktop rounded position-relative"
              role="search"
            >
              <input
                className="form-control text-dark"
                style={{
                  backgroundColor: "transparent",
                  outline: "none",
                  border: "none",
                }}
                type="search"
                aria-label="Search"
              />
              <button className="btn d-flex align-items-center" type="submit">
                <BsSearch style={{ color: "#000" }} />
              </button>
              {/* <div
                className="position-absolute w-100 top-100 bg-danger "
                style={{ minHeight: 500 }}
              ></div> */}
            </form>
            <button className="btn align-items-center hideOnDesktop" onClick={handleSearch}>
              <BsSearch style={{ color: "#000", fontSize: 18 }} />
            </button>
          </div>
          {/* CTA */}
          <div className="col-4 col-sm-3 col-md-3 col-lg-2 cart-user d-none showOnDesktop">
            <div className="d-flex justify-content-around align-items-center w-100 align-items-center">
              <Link href="/cart">
                <a className="text-decoration-none d-flex align-items-center hideOnMobile">
                  <BsCartCheck style={{ fontSize: 24, color: "#000" }} />
                </a>
              </Link>

              {username ? (
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-menu-align-responsive-1"
                    className="border-0"
                  >
                    <div
                      className="d-flex gap-1 align-items-center"
                    >
                      <span className="d-flex align-items-center"> {username} </span>
                      <img
                        className="m-0 p-0"
                        style={{
                          borderRadius: '20px',
                          width: 40, height: 40
                        }}
                        src={username.avatar || 'https://images.pexels.com/photos/8407039/pexels-photo-8407039.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'} />

                    </div>

                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/profile">
                      Thông tin tài khoản
                    </Dropdown.Item>
                    <Dropdown.Item href="#">Đơn hàng</Dropdown.Item>
                    <Dropdown.Item href="#">Booking</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogOut}>Đăng xuất</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <LoginModal />
              )}
            </div>
          </div>
        </div>
      </nav>
      {showSearch && <Search showSearch={showSearch} setShowSearch={setShowSearch} />}
    </header>
  );
};

export default Navbar;
