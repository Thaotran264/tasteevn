import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { useEffect } from "react";
import Image from "next/image";
import { selectCart } from "../../features/cart/cartSlice";
import { useSelector } from "react-redux";
const MobileMenu = ({ productList, menuPos }) => {
  const handleMenuItem = (id) => {
    console.log(id);
  };
  const cartItem = useSelector(selectCart)
  return (
    <section className="menu__section position-relative">
      <ul
        className={`d-flex ps-0 mb-2 overflow-scroll position-absolute top-0 w-100 ${menuPos && "position-fixed bg-light "
          }`}
        style={
          menuPos
            ? { top: 0, left: 0, width: "100%", zIndex: 99 }
            : { backgroundColor: "#fff" }
        }
      >
        {/* <li
          className="p-2 text-center"
          style={{ listStyle: "none", minWidth: "35%", fontWeight: 600 }}
          onClick={() => handleMenuItem("all")}
        >
          Tất cả
        </li> */}
        {productList?.menus?.map((item) => (
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

      <div className="container rounded configMenuMobile" style={{ paddingTop: 48 }}>
        {productList?.menus?.map((item, index) => (
          <article key={item.id} className="menu__article">
            <h4 id={`menuRC${index}`} className='ms-2'>{item.name}</h4>
            {
              item.items.map(its =>
                <MenuItem data={its} key={its.id} />
              )
            }
          </article>
        ))}
        {productList?.menus?.map((item, index) => (
          <article key={item.id} className="menu__article">
            <h4 id={`menuRC${index}`} className='ms-2'>{item.name}</h4>
            {
              item.items.map(its =>
                <MenuItem data={its} key={its.id} />
              )
            }
          </article>
        ))}
        {productList?.menus?.map((item, index) => (
          <article key={item.id} className="menu__article">
            <h4 id={`menuRC${index}`} className='ms-2'>{item.name}</h4>
            {
              item.items.map(its =>
                <MenuItem data={its} key={its.id} />
              )
            }
          </article>
        ))}
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
