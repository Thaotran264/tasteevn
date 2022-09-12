import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { useEffect } from "react";
const MobileMenu = ({ menuPos, menu, items }) => {
  // const [menuItem, setMenuItem] = useState(listMenu[0].name);

  return (
    <section className="menu__section">
      <ul
        className={`d-flex ps-0 mb-2 overflow-scroll bg-opacity-75 ${menuPos && "position-fixed bg-light "
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
          onClick={() => setMenuItem("All")}
        >
          Tất cả
        </li>
        {menu?.map((item, index) => (
          <li
            key={item.id}
            className="p-2 text-center"
            style={{ listStyle: "none", minWidth: "35%", fontWeight: 600 }}
            onClick={() =>
              setMenuItem(`${item.name}`)
            }
          >
            {item.name}
          </li>
        ))}
      </ul>
      {
        items.map(item => console.log(item))}

      {/* <div className="rounded configMenuMobile">
          {menu?.map((item, index) => (
            <article key={item.id} className="menu__article">
              <h4 id={`menuRC${index}`}>{item.name}</h4>
              {item?.items?.map((it) => (
                <MenuItem data={it} key={it.id} />
              ))}
            </article>
          ))}
        </div> */}

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
