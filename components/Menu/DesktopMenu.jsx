import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const DesktopMenu = ({ menuPos, menus }) => {
  const menuList = JSON.parse(menus.data).Menus;
  const handleClick = () => {
    console.log("object");
  };
  return (
    <div className="showOnDesktop">
      <div
        className={`${menuPos ? "position-fixed w-100 top-0 start-0" : "d-none"} `}
        style={menuPos ? { marginTop: 0, zIndex: 1 } : {}}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <ul className="ps-0 bg-light bg-opacity-10">
                {menuList.map((item) => (
                  <li
                    key={item.Id}
                    className="border-bottom border-dark w-100 py-2 mb-1 text-center"
                    style={{ listStyle: "none" }}
                  >
                    <a onClick={handleClick}>{item.Name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className={`col-md-4 col-lg-4 ${menuPos && "d-none"}`}>
          <ul className="ps-0 bg-light bg-opacity-10">
            {menuList.map((item) => (
              <li
                key={item.Id}
                className="border-bottom border-dark w-100 py-2 mb-1 text-center"
                style={{ listStyle: "none" }}
              >
                <a onClick={handleClick} style={{ cursor: "pointer" }}>
                  {item.Name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`col-md-8 col-lg-8 ${menuPos && "offset-4"}`}
          style={menuPos ? { zIndex: 2 } : {}}
        >
          {menuList.map((it) => (
            <div key={it.Id}>
              <h4 id="menuRC01" className="border-bottom border-dark">
                {it.Name}
              </h4>
              {it.Items.map((its) => (
                <div key={its.Id}>
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
                        <h4 className="m-0">{its.Name}</h4>
                        <p className="text-danger mx-auto">{its.Price}</p>
                        <button className="btn btn-outline-danger ms-auto w-25 h-25 ">Mua</button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
