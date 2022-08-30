import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { DataContext } from "../../store/globalState";
import { addToCart } from "../../store/actions/actionsType";
import { formatter } from "../../utils";
import Link from "next/link";
const DesktopMenu = ({ menuPos, menus }) => {
  const menuList = JSON.parse(menus.data).Menus;
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  const handleClick = () => {
    console.log("object");
  };
  return (
    <div className="showOnDesktop w-100 mx-auto">
      <div
        className={`${menuPos ? "position-fixed w-100 top-0 start-0" : "d-none"} `}
        style={menuPos ? { marginTop: 0, zIndex: 1 } : {}}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <ul className="ps-0 bg-light bg-opacity-10 d-flex gap-1 flex-wrap mb-0">
                {menuList.map((item, index) => (
                  <li
                    key={item.Id}
                    className="border rounded border-dark py-1 px-2 text-center"
                    style={{ listStyle: "none" }}
                  >
                    <Link href={`#menuRC${index}`}>
                      <a>{item.Name}</a>
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
          <div className={`col-md-4 col-lg-4 ${menuPos && "d-none"}`}>
            <ul className="ps-0 bg-light bg-opacity-10">
              {menuList.map((item, index) => (
                <li
                  key={item.Id}
                  className="border-bottom border-dark w-100 py-2 mb-1 text-center"
                  style={{ listStyle: "none" }}
                >
                  <Link href={`#menuRC${index}`}>
                    <a>{item.Name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`col-md-8 col-lg-8 ${menuPos && "offset-4"}`}
            style={menuPos ? { zIndex: 2 } : {}}
          >
            {menuList.map((it, index) => (
              <div key={it.Id}>
                <h4 id={`menuRC${index}`} className="border-bottom border-dark">
                  {it.Name}
                </h4>
                {it.Items.map((its) => (
                  <div key={its.Id}>
                    <div className="row">
                      <div className="col-2" style={{ aspectRatio: "1 / 1" }}>
                        <img
                          className="w-100 h-100 d-block "
                          src="https://i.pinimg.com/236x/d4/a3/96/d4a396c0d55040c85be74a10aa4f5eee.jpg"
                          alt=""
                        />
                      </div>
                      <div className="col-10 d-flex align-items-start">
                        <div className="d-flex w-100 align-items-center">
                          <h4 className="m-0 me-auto">{its.Name}</h4>
                          <p className="text-danger mb-0 me-2">{formatter.format(its.Price)}</p>
                          <button
                            className="btn btn-danger"
                            onClick={() => dispatch(addToCart(its, cart))}
                          >
                            Mua
                          </button>
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
    </div>
  );
};

export default DesktopMenu;
