import React, { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { DataContext } from "../../store/globalState";
import { addToCart } from "../../store/actions/actionsType";
import { formatter } from "../../utils";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { listMenu } from "../../db";
import { toast, ToastContainer } from "react-toastify";
import Image from "next/image";
const DesktopMenu = ({ productList, menuPos }) => {
  const notify = () => toast.error("Vui lòng đăng nhập !!!", {
    pauseOnHover: false,
  });
  return (
    <section className="container px-0">
      <div className="d-flex flex-column">
        <ul className="d-flex bg-dark text-light bg-opacity-75 ps-0">
          {productList?.items.map(item => <li className="p-2">{item.name}</li>)}
          {productList?.menus.map(item => <li className="py-2 px-4 fw-bold ">{item.name}</li>)}
        </ul>
        {
          productList?.items.map(item => <p>{item.name}</p>)
        }
        {
          productList?.menus.map(item => <div className="bg-dark bg-opacity-10 text-dark mb-2 rounded p-2">
            <h2>{item.name}</h2>
            <div className="menuContainer">
              {item.items.map(it => <div className="bg-light d-flex flex-column align-items-center menuItems" style={{minWidth: '19%'}}> 
                <div  style={{flex: 1}}>
                  <Image src={it.image || '/image/logo512.png'} alt={it.name} width="80" height={80}/>
                </div>
                <p>{it.name}</p>
                <p>{it.price}</p>
              </div>)}
            </div>

          </div>)
        }
      </div>
      <div
      // className={`${menuPos ? "position-fixed w-100 top-0 start-0" : "d-none"} `}
      // style={menuPos ? { marginTop: 0, zIndex: 1 } : {}}
      >
        {/* <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <ul className="ps-0 bg-opacity-10 d-flex gap-1 flex-wrap mb-0 justify-content-center">
                {productList?.menus.map((item, index) => (
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
        </div> */}
      </div>
      {/* <div className="container">
        <div className="row">
          <div className={`col-md-4 col-lg-4 py-2 `}>
            <ul className="ps-0 bg-light bg-opacity-10 d-flex flex-wrap gap-1 justify-content-center">
              {productList?.menus?.map((item, index) => (
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
            
            {productList?.menus.map((menu, index) => 
              menu.items?.length > 0 && (<article key={menu.id} className='mb-2' style={{ backgroundColor: '#fff', borderRadius: 6 }}>
                  <h4 id={`menuRC${index}`} className="border-bottom border-dark p-2">
                    {menu.name}
                  </h4>
                  {menu.items.map((menuItem) => (
                    <MenuItem data={menuItem} key={menuItem.id} notify={notify} />
                  ))}
                </article>)
            )}
            {productList?.items.map((item, index) =>
              <article key={item.id} className='mb-2' style={{ backgroundColor: '#fff', borderRadius: 6 }}>
                <MenuItem data={item} key={item.id} notify={notify} />
              </article>
            )}
          </div>
        </div>
      </div> */}
      <ToastContainer position="top-center" />
    </section>
  );
};

export default DesktopMenu;
