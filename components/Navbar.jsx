import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsSearch, BsCartCheck } from "react-icons/bs";
import Logo from '../public/image/logo.jpg'
const Navbar = () => {
  const [username, setusername] = useState()
  useEffect(() => {
    let name = JSON.parse(localStorage.getItem('userInfo'))
    if (name) {
      setusername(name)
    }
  }, [])
  return (
    <div className="container-fluid mb-2 bg-white position-fixed top-0 start-0" style={{ zIndex: 99 }} id="nav">
      <div className="container ">
        <div className="row py-2">
          <div className="col-3 col-md-2 col-lg-1 d-flex">
            <a className="navbar-brand text-light align-self-center " href="#">
              <img src='/image/logo.jpg' alt="" style={{ width: '100%', objectFit: 'cover', height: '40%', display: 'block' }} />
            </a>
          </div>
          <div className="col-7 col-md-7 col-lg-8 offset-lg-1 px-0">
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
          <div className="col-2 col-md-3 col-lg-2 d-flex align-items-center justify-content-around">
            <Link href="/cart">
              <a className="text-decoration-none d-flex justify-content-center align-items-center mx-2">
                <BsCartCheck style={{ fontSize: 24, color: "#000" }} />
              </a>
            </Link>
            {
              username ?
                <span className="text-light bg-secondary hideOnMB" style={{
                  width: 30, height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #fff', borderRadius: 50, textAlign: 'center', padding: 5
                }}>{username && username.charAt(0)}</span>
                : <a className="btn btn-outline-danger" href="/login">Log in</a>
            }
          </div>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
