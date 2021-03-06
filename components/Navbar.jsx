import Link from "next/link";
import React from "react";
import { BsSearch, BsBagCheck } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="container-fluid bg-danger mb-2">
      <div className="container ">
        <div className="row py-2">
          <div className="col-3 col-md-2 d-flex">
            <a className="navbar-brand text-light align-self-center " href="#">
              Tastee.vn
            </a>
          </div>
          <div className="col-7 col-md-7 px-0">
            <form className="d-flex border border-light rounded" role="search">
              <input
                className="form-control text-dark"
                style={{
                  backgroundColor: "transparent",
                  ouline: "none",
                  border: "none",
                }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn d-flex align-items-center" type="submit">
                <BsSearch style={{ color: "#fff" }} />
              </button>
            </form>
          </div>
          <div className="col-2 col-md-3 d-flex align-items-center">
            <Link href="/cart">
              <a className="text-decoration-none d-flex justify-content-center align-items-center mx-2">
                <BsBagCheck style={{ fontSize: 24 }} />
              </a>
            </Link>
            <Link href="/login">
              <a className="btn btn-dark text-light hideonmobile">Đăng nhập</a>
            </Link>
          </div>
        </div>
        {/* <div className="row">
        <div className="col group">
          <ul
            className="list px-0 list-group list-group-horizontal"
            style={{ overflowY: "scroll" }}
          >
            <li
              className="list-group-item border border-0"
              style={{
                minWidth: "50%",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "0.85rem",
              }}
            >
              <a>Tp HCM</a>
            </li>
            <li
              className="list-group-item border border-0"
              style={{
                minWidth: "50%",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "0.85rem",
              }}
            >
              <a>Đà Nẵng</a>
            </li>
            <li
              className="list-group-item border border-0 "
              style={{
                minWidth: "50%",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "0.85rem",
              }}
            >
              <a>Hà Nội</a>
            </li>
            <li
              className="list-group-item border border-0 "
              style={{
                minWidth: "50%",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "0.85rem",
              }}
            >
              <a>Tp HCM</a>
            </li>
            <li
              className="list-group-item border border-0 "
              style={{
                minWidth: "50%",
                backgroundColor: "transparent",
                color: "white",
                fontSize: "0.85rem",
              }}
            >
              <a>Đà Nẵng</a>
            </li>
          </ul>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Navbar;
