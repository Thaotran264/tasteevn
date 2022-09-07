import React, { useState } from "react";
import MenuItem from "./MenuItem";
const MobileMenu = ({ menuPos, menus }) => {
  return (
    <section className="menu__section hideOnDesktop">
      <ul
        className={`d-flex ps-0 mb-2 overflow-scroll hideScrollbar bg-opacity-75 ${
          menuPos && "position-fixed bg-light "
        }`}
        style={
          menuPos
            ? { top: 0, left: 0, width: "100%", zIndex: 99 }
            : { margin: "0 -12px", backgroundColor: "#fff", color: "#000" }
        }
      >
        <li
          className="p-2 text-center"
          style={{ listStyle: "none", minWidth: "35%", fontWeight: 600 }}
        >
          <a>Tất cả</a>
        </li>
        {menus?.map((item, index) => (
          <li
            key={item.id}
            className="p-2 text-center"
            style={{ listStyle: "none", minWidth: "35%", fontWeight: 600 }}
          >
            <a href={`#menuRC${index}`}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="rounded configMenuMobile">
        {menus?.map((item, index) => (
          <article key={item.id} className="menu__article">
            <h4 id={`menuRC${index}`}>{item.name}</h4>
            {item?.items?.map((it) => (
              <MenuItem data={it} key={it.id} />
            ))}
          </article>
        ))}
      </div>
    </section>
  );
};

export default MobileMenu;
