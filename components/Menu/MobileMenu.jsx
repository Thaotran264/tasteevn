import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const MobileMenu = () => {
  return (
    <div className="hideOnDeskTop">
      <ul className="d-flex bg-secondary bg-opacity-10 ps-0 overflow-scroll pb-2 " style={{}}>
        <li className="py-2 text-center" style={{ listStyle: "none", minWidth: "25%" }}>
          Menu 1
        </li>
        <li className="p-2 text-center" style={{ listStyle: "none", minWidth: "25%" }}>
          Menu 2
        </li>
        <li className="p-2 text-center" style={{ listStyle: "none", minWidth: "25%" }}>
          Menu 3
        </li>
        <li className="p-2 text-center" style={{ listStyle: "none", minWidth: "25%" }}>
          Menu 4
        </li>
        <li className="p-2 text-center" style={{ listStyle: "none", minWidth: "25%" }}>
          Menu 5
        </li>
      </ul>
      <h4 id="menuRC01">Menu</h4>
      <div className="row">
        <div className="col-4" style={{ aspectRatio: "1 / 1" }}>
          <img
            className="w-100 h-100 d-block img-thumbnail"
            src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
            alt=""
          />
        </div>
        <div className="col-8">
          <h3>Name of food</h3>
          <p className="text-danger">$15</p>
          <button className="btn btn-outline-danger ">
            <AiOutlinePlus style={{ fontSize: 22 }} />
          </button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4 col-md-4" style={{ aspectRatio: "1 / 1" }}>
          <img
            className="w-100 h-100 d-block img-thumbnail"
            src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
            alt=""
          />
        </div>
        <div className="col-8 col-md-8">
          <h3>Name of food</h3>
          <p className="text-danger">$15</p>
          <button className="btn btn-outline-danger ">
            <AiOutlinePlus style={{ fontSize: 22 }} />
          </button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4" style={{ aspectRatio: "1 / 1" }}>
          <img
            className="w-100 h-100 d-block img-thumbnail"
            src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
            alt=""
          />
        </div>
        <div className="col-8">
          <h3>Name of food</h3>
          <p className="text-danger">$15</p>
          <button className="btn btn-outline-danger ">
            <AiOutlinePlus style={{ fontSize: 22 }} />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default MobileMenu;
