import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { useEffect } from "react";
import Image from "next/image";
import { selectCart } from "../../features/cart/cartSlice";
import { useSelector } from "react-redux";
import Link from "next/link";

const MobileMenu = ({ productList,menuPos }) => {
  return (
    <>
      <section className="menu__section position-relative menuMobile">
        <ul
          className={` d-flex ps-0 mb-2 overflow-scroll position-absolute top-0 ${menuPos && "position-fixed bg-light "
            }`}
          style={
            menuPos ? { top: 0, left: 0, width: "100%", zIndex: 99 } : { backgroundColor: "#fff", overflow: 'scroll', width: '100vw' }
          }
        >
          {productList?.map((item, index) => (
            <li
              key={item.Id}
              className="p-2 text-center"
              style={{ listStyle: "none", fontWeight: 600, cursor: "pointer"}}

            >
              <Link href={`#menuRC${index}`}>
                <a className="py-1 px-4 d-block" style={{width: 'max-content'}}>{item.Name}</a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="container rounded " 
         style={ {paddingTop: 56, overflow: 'scroll' }} >
          {productList?.map((item, index) => (
            <article key={item.Id} className="menu__article">
              <h4 id={`menuRC${index}`} className="ms-2">
                {item.Name}
              </h4>
              {item.Items.map((its) => (
                <MenuItem data={its} key={its.Id} />
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default MobileMenu;
