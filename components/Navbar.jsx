import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsSearch, BsCartCheck } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import { isMobile } from "react-device-detect";
import Logo from "../public/image/logo.jpg";
import { useRouter } from "next/router";
import { DataContext } from "../store/globalState";
import LoginModal from "./LoginModal";
const Navbar = () => {
  const { state, dispatch } = useContext(DataContext);
  const [username, setusername] = useState();
  useEffect(() => {
    let name = JSON.parse(localStorage.getItem("userInfo")) || "";
    if (name) {
      setusername(name.fullName);
    }
  }, []);

  const router = useRouter();
  const handleLogOut = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    dispatch({ type: "NOTIFY", payload: { success: "success" } });
    router.push("/");
    window.location.reload();
  };

  const [_isMobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(isMobile);
  }, [_isMobile]);
  return (
    <header
      className="container-fluid bg-white position-fixed top-0 start-0"
      style={{ zIndex: 99 }}
      id="nav"
    >
      <nav className="container">
        <div className="row align-items-center">
          <div className="col-2 col-sm-2 col-md-2 col-lg-2">
            <div>
              <div className="showOnDesktop p-1">
                <Link href="/">
                  <img src="/image/logo.jpg" className=" w-75 h-75" style={{ cursor: "pointer" }} />
                </Link>
              </div>
              <div className="hideOnDeskTop" style={{ aspectRatio: "1/1", padding: 5 }}>
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
          <div className="col-4 col-sm-3 col-md-3 col-lg-2">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                TP HCM
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">DN</Dropdown.Item>
                <Dropdown.Item href="#/action-2">HN</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-2 col-sm-4 col-md-4 col-lg-6">
            <form className="d-flex border border-dark rounded" role="search">
              <input
                className="form-control text-dark hideOnMobile"
                style={{
                  backgroundColor: "transparent",
                  ouline: "none",
                  border: "none",
                }}
                type="search"
                aria-label="Search"
              />
              <button className="btn d-flex align-items-center" type="submit">
                <BsSearch style={{ color: "#000" }} />
              </button>
            </form>
          </div>
          <div className="col-4 col-sm-3 col-md-3 col-lg-2 cart-user">
            <div className="d-flex justify-content-between align-items-center">
              <Link href="/cart">
                <a className="text-decoration-none d-flex align-items-center me-3 ms-auto hideOnMobile">
                  <BsCartCheck style={{ fontSize: 24, color: "#000" }} />
                </a>
              </Link>
              {username && !_isMobile ? (
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-menu-align-responsive-1">
                    <span
                      className="text-light bg-secondary hideOnMB"
                      style={{
                        width: 30,
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid #fff",
                        borderRadius: 50,
                        textAlign: "center",
                        padding: 5,
                      }}
                    >
                      {username && username.charAt(0)}
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/profile">Thông tin tài khoản</Dropdown.Item>
                    <Dropdown.Item href="#">Đơn hàng</Dropdown.Item>
                    <Dropdown.Item href="#">Booking</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogOut}>Đăng xuất</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                ""
              )}

              {!username && <LoginModal />}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
