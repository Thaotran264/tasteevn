import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const MobileMenu = ({ menuPos, menus }) => {
  const menuList = JSON.parse(menus.data).Menus;
  const [active, setActive] = useState(false);

  return (
    <div className="hideOnDeskTop">
      <ul
        className={`d-flex ps-0 overflow-scroll pb-2 ${menuPos && "position-fixed bg-light "}`}
        style={menuPos ? { top: 66, width: "calc(100% - 24px)", zIndex: 99 } : {}}
      >
        {menuList.map((item, index) => (
          <li key={item.Id} className="py-2" style={{ listStyle: "none", minWidth: "35%" }}>
            <a href={`#menuRC${index}`}>{item.Name}</a>
          </li>
        ))}
      </ul>
      <div>
        {menuList.map((item, index) => (
          <div key={item.Id}>
            <h4 id={`menuRC${index}`}>{item.Name}</h4>
            {item?.Items?.map((it) => (
              <div key={it.Id}>
                <div className="row">
                  <div className="col-4">
                    <div style={{ aspectRatio: "1 / 1" }}>
                      <img
                        className="w-100 h-100 d-block"
                        src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-8 d-flex align-items-start">
                    <div>
                      <h5>{it.Name}</h5>
                      <p>{it.Description}</p>
                      <p className="text-danger">{it.Price} đ</p>
                    </div>
                    <button className="btn btn-outline-danger ms-auto ">
                      <AiOutlinePlus style={{ fontSize: 22 }} />
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
