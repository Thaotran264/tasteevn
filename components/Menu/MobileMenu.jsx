import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { useEffect } from "react";
import Image from "next/image";
import { selectCart } from "../../features/cart/cartSlice";
import { useSelector } from "react-redux";
const MobileMenu = ({ menuPos, menu, items }) => {
  // const [menuItem, setMenuItem] = useState(listMenu[0].name);
  const handleMenuItem = (id) => {
    console.log(id);
  };
  const cartItem = useSelector(selectCart)
  console.log(cartItem);
  return (
    <section className="menu__section">
      <ul
        className={`d-flex ps-0 mb-2 overflow-scroll bg-opacity-75 ${
          menuPos && "position-fixed bg-light "
        }`}
        style={
          menuPos
            ? { top: 0, left: 0, width: "100%", zIndex: 99 }
            : { margin: "0 auto", backgroundColor: "#fff", color: "#000" }
        }
      >
        <li
          className="p-2 text-center"
          style={{ listStyle: "none", minWidth: "35%", fontWeight: 600 }}
          onClick={() => handleMenuItem("all")}
        >
          Tất cả
        </li>
        {menu?.map((item, index) => (
          <li
            key={item.id}
            className="p-2 text-center"
            style={{ listStyle: "none", minWidth: "35%", fontWeight: 600 }}
            onClick={() => handleMenuItem(item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>

      <div className="rounded configMenuMobile">
        {/* {menu?.map((item, index) => (
            <article key={item.id} className="menu__article">
              <h4 id={`menuRC${index}`}>{item.name}</h4>
              {items.map((its) => its.map((it) => {
                <MenuItem data={it} key={it.id} />
              }
              ))}
            </article>
          ))} */}
        {items.map((item) => item.map((it) => <MenuItem data={it} key={it.id} />))}
      </div>

      {/* {menuItem == listMenu.length + 1 && (
        <div className="rounded configMenuMobile">
          {menu?.map((item, index) => (
            <article key={item.id} className="menu__article">
              <h4 id={`menuRC${index}`}>{item.name}</h4>
              {item?.items?.map((it) => (
                <MenuItem data={it} key={it.id} />
              ))}
            </article>
          ))}
        </div>
      )} */}
    </section>
  );
};

export default MobileMenu;
