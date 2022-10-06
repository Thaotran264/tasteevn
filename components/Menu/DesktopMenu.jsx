import React, { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { DataContext } from "../../store/globalState";
import { addToCart } from "../../store/actions/actionsType";
import { formatter } from "../../utils";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { listMenu } from "../../db";
import { toast, ToastContainer } from "react-toastify";
const DesktopMenu = ({ productList, menuPos }) => {
  const notify = () => toast.error("Vui lòng đăng nhập !!!", {
    pauseOnHover: false,
  });

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
                {productList?.map((item, index) => (
                  <li
                    key={item.id}
                    className="border rounded-5 border-dark px-2 text-center bg-white "
                    style={{ listStyle: "none" }}
                  >
                    <Link href={`#menuRC${index}`} scroll={true}>
                      <a className="py-1 px-4 d-block text-decoration-none text-dark" >{item.name}</a>
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
              {productList?.map((item, index) => (
                <li
                  key={item.id}
                  className="border rounded-5 border-dark px-2 text-center bg-white "
                  style={{ listStyle: "none" }}
                >
                  <Link href={`#menuRC${index}`} scroll={true}>
                    <a className="py-1 px-4 d-block text-decoration-none text-dark" >{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`col-md-8 col-lg-8 rounded px-0 ${menuPos && "offset-4"}`}
            style={menuPos ? { zIndex: 2 } : {}}
          >
            {productList?.map((it, index) => {
              if(it.items.length) {
              return (<article key={it.id} className='mb-2' style={{ backgroundColor: '#fff', borderRadius: 6 }}>
                <h4 id={`menuRC${index}`} className="border-bottom border-dark p-2">
                  {it.name}
                </h4>
                {it.items.map((its) => (
                  <MenuItem data={its} key={its.id} notify={notify} />
                ))}
              </article>)}
            }
            )}

          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />

    </section>
  );
};

export default DesktopMenu;
