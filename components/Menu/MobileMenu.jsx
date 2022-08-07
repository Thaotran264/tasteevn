import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const MobileMenu = ({ menuPos }) => {
  const menu = ["Menu1", "Menu2", "Menu3", "Menu4", "Menu5", "Menu6"];
  const [active, setActive] = useState(false);

  return (
    <div className="hideOnDeskTop">
      <ul
        className={`d-flex bg-secondary bg-opacity-50 ps-0 overflow-scroll pb-2 ${
          menuPos && "position-fixed bg-light bg-opacity-100 border border-bottom"
        }`}
        style={menuPos ? { top: 66, left: 0, width: "100%", zIndex: 99 } : {}}
      >
        {menu.map((item, index) => (
          <li
            key={index}
            className="py-2 text-center"
            onClick={() => setActive(index)}
            style={{ listStyle: "none", minWidth: "25%" }}
          >
            {item}
          </li>
        ))}
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
