import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const DesktopMenu = () => {
  return (
    <div className="showOnDesktop">
      <div className="d-none position-fixed w-100 top-0 start-0" style={{ marginTop: 88 }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <ul className="ps-0 bg-secondary bg-opacity-10">
                <li
                  className="border border-danger w-100 py-2 mb-1 text-center rounded"
                  style={{ listStyle: "none" }}
                >
                  <a>Menu 1</a>
                </li>
                <li
                  className="border border-danger w-100 py-2 mb-1 text-center rounded"
                  style={{ listStyle: "none" }}
                >
                  <a>Menu 2</a>
                </li>
                <li
                  className="border border-danger w-100 py-2 mb-1 text-center rounded"
                  style={{ listStyle: "none" }}
                >
                  <a>Menu 3</a>
                </li>
                <li
                  className="border border-danger w-100 py-2 mb-1 text-center rounded"
                  style={{ listStyle: "none" }}
                >
                  <a>Menu 4</a>
                </li>
                <li
                  className="border border-danger w-100 py-2 mb-1 text-center rounded"
                  style={{ listStyle: "none" }}
                >
                  <a>Menu 5</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <ul className="ps-0 bg-secondary bg-opacity-10">
            <li
              className="border border-danger w-100 py-2 mb-1 text-center rounded"
              style={{ listStyle: "none" }}
            >
              <a>Menu 1</a>
            </li>
            <li
              className="border border-danger w-100 py-2 mb-1 text-center rounded"
              style={{ listStyle: "none" }}
            >
              <a>Menu 2</a>
            </li>
            <li
              className="border border-danger w-100 py-2 mb-1 text-center rounded"
              style={{ listStyle: "none" }}
            >
              <a>Menu 3</a>
            </li>
            <li
              className="border border-danger w-100 py-2 mb-1 text-center rounded"
              style={{ listStyle: "none" }}
            >
              <a>Menu 4</a>
            </li>
            <li
              className="border border-danger w-100 py-2 mb-1 text-center rounded"
              style={{ listStyle: "none" }}
            >
              <a>Menu 5</a>
            </li>
          </ul>
        </div>
        <div className="col-md-8 col-lg-8">
          <h4 id="menuRC01">Menu</h4>
          <div className="row">
            <div className="col-2" style={{ aspectRatio: "1 / 1" }}>
              <img
                className="w-100 h-100 d-block "
                src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
                alt=""
              />
            </div>
            <div className="col-10 d-flex align-items-start">
              <div className="d-flex w-100 align-items-center">
                <h3 className="m-0">Name of food</h3>
                <p className="text-danger mx-2 mb-0">$15</p>
                <button className="btn btn-outline-danger ms-auto w-25 h-25 ">Mua</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-2" style={{ aspectRatio: "1 / 1" }}>
              <img
                className="w-100 h-100 d-block "
                src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
                alt=""
              />
            </div>
            <div className="col-10 d-flex align-items-start">
              <div className="d-flex w-100 align-items-center">
                <h3 className="m-0">Name of food</h3>
                <p className="text-danger mx-2 mb-0">$15</p>
                <button className="btn btn-outline-danger ms-auto w-25 h-25 ">Mua</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-2" style={{ aspectRatio: "1 / 1" }}>
              <img
                className="w-100 h-100 d-block "
                src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
                alt=""
              />
            </div>
            <div className="col-10 d-flex align-items-start">
              <div className="d-flex w-100 align-items-center">
                <h3 className="m-0">Name of food</h3>
                <p className="text-danger mx-2 mb-0">$15</p>
                <button className="btn btn-outline-danger ms-auto w-25 h-25 ">Mua</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-2" style={{ aspectRatio: "1 / 1" }}>
              <img
                className="w-100 h-100 d-block "
                src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
                alt=""
              />
            </div>
            <div className="col-10 d-flex align-items-start">
              <div className="d-flex w-100 align-items-center">
                <h3 className="m-0">Name of food</h3>
                <p className="text-danger mx-2 mb-0">$15</p>
                <button className="btn btn-outline-danger ms-auto w-25 h-25 ">Mua</button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
