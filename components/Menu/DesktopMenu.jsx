import React, { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { DataContext } from "../../store/globalState";
import { addToCart } from "../../store/actions/actionsType";
import { formatter } from "../../utils";
import Link from "next/link";
import MenuItem from "./MenuItem";
const DesktopMenu = ({ menuPos, productList }) => {
  const [tabMenu, setTabMenu] = useState('all')
  const handleMenuItem = (tab) => {
    setTabMenu(tab)
  };
  return (
    <section className="d-none showOnDesktop w-100 mx-auto py-2">
      <div
        className={`${menuPos ? "position-fixed w-100 top-0 start-0" : "d-none"} `}
        style={menuPos ? { marginTop: 0, zIndex: 1 } : {}}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <ul className="ps-0 bg-opacity-10 d-flex gap-1 flex-wrap mb-0 justify-content-center">

                {productList?.menus?.map((item, index) => (
                  <li
                    key={item.id}
                    className="border rounded border-primary px-2 text-center bg-white "
                    style={{ listStyle: "none" }}
                  >
                    <Link href={`#menuRC${index}`}>
                      <a className="py-1 px-4 d-block" >{item.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className={`col-md-4 col-lg-4 py-2 ${menuPos && "d-none"}`}>
            <ul className="ps-0 bg-light bg-opacity-10 d-flex flex-wrap gap-1 justify-content-center">

              {productList?.menus?.map((item, index) => (
                <li
                  key={item.id}
                  className="border rounded border-primary px-2 text-center bg-white "
                  style={{ listStyle: "none" }}
                >
                  <Link href={`#menuRC${index}`} scroll={true}>
                    <a className="py-1 px-4 d-block" >{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`col-md-8 col-lg-8 rounded ${menuPos && "offset-4"}`}
            style={menuPos ? { zIndex: 2 } : {}}
          >
            {productList?.menus?.map((it, index) => (
              <article key={it.id} className='mb-2' style={{ backgroundColor: '#fff', borderRadius: 6 }}>
                <h4 id={`menuRC${index}`} className="border-bottom border-dark p-2">
                  {it.name}
                </h4>
                {it.items.map((its) => (
                  <MenuItem data={its} key={its.id} />
                ))}
              </article>
            ))}
            {productList?.menus?.map((it, index) => (
              <article key={it.id} className='mb-2' style={{ backgroundColor: '#fff', borderRadius: 6 }}>
                <h4 id={`menuRC${index}`} className="border-bottom border-dark p-2">
                  {it.name}
                </h4>
                {it.items.map((its) => (
                  <MenuItem data={its} key={its.id} />
                ))}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopMenu;
