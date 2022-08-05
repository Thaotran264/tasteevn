import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsSearch, BsCartCheck } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import { isMobile } from "react-device-detect";
import Logo from '../public/image/logo.jpg'
import { useRouter } from "next/router";
import { DataContext } from "../store/globalState";
import LoginModal from "./LoginModal";
const Navbar = () => {
  const { state, dispatch } = useContext(DataContext)
  const [username, setusername] = useState()
  useEffect(() => {
    let name = JSON.parse(localStorage.getItem('userInfo')) || ''
    if (name) {
      setusername(name.fullName)
    }
  }, [])

  const router = useRouter()
  const handleLogOut = () => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('token')
    dispatch({ type: 'NOTIFY', payload: { success: 'success' } })
    router.push('/')
    window.location.reload();
}

  const [_isMobile, setMobile] = useState(false);
  useEffect(() => {
      setMobile(isMobile);
  }, [_isMobile]);
  return (
    <div className="container-fluid mb-2 bg-white position-fixed top-0 start-0" style={{ zIndex: 99 }} id="nav">
      <div className="container ">
        <div className="row py-2">
          <div className="col-3 col-md-2 col-lg-1 d-flex">
            <a className="navbar-brand text-light align-self-center " href="#">
              <img src='/image/logo.jpg' alt="" style={{ width: '100%', objectFit: 'cover', height: '40%', display: 'block' }} />
            </a>
          </div>
          <div className="col-3 col-md-7 col-lg-8 offset-lg-1 px-0">
            <form className="d-flex border border-dark rounded" role="search">
              <input
                className="form-control text-dark"
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
          <div className="col-6 col-md-3 col-lg-2 d-flex align-items-center justify-content-around cart-user">
            {/* <Link href="/cart">
              <a className="text-decoration-none d-flex justify-content-center align-items-center mx-2">
                <BsCartCheck style={{ fontSize: 24, color: "#000" }} />
              </a>
            </Link> */}
            {username &&  !_isMobile ?
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-menu-align-responsive-1">
                    <span className="text-light bg-secondary hideOnMB" style={{
                      width: 30, height: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid #fff', borderRadius: 50, textAlign: 'center', padding: 5
                    }}>{username && username.charAt(0)}</span>
                </Dropdown.Toggle>
          
                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">Thông tin tài khoản</Dropdown.Item>
                  <Dropdown.Item href="#">Đơn hàng</Dropdown.Item>
                  <Dropdown.Item href="#">Booking</Dropdown.Item>
                  <Dropdown.Item  onClick={handleLogOut} >Đăng xuất</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
                : ''
            }

            {!username &&
                <LoginModal></LoginModal>
            }
          </div>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
