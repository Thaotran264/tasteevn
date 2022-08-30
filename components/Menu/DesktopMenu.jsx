import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { DataContext } from "../../store/globalState";
import { addToCart } from "../../store/actions/actionsType";
import { formatter } from "../../utils";
import Link from "next/link";
const DesktopMenu = ({ menuPos, menus }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  const handleClick = () => {
    console.log("object");
  };
  return (
    <div className="showOnDesktop w-100 mx-auto py-2">
      <div
        className={`${menuPos ? "position-fixed w-100 top-0 start-0" : "d-none"} `}
        style={menuPos ? { marginTop: 0, zIndex: 1 } : {}}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <ul className="ps-0 bg-light bg-opacity-10 d-flex gap-1 flex-wrap mb-0">
                {menus?.map((item, index) => (
                  <li
                    key={item.id}
                    className="border rounded border-dark py-1 px-2 text-center"
                    style={{ listStyle: "none" }}
                  >
                    <Link href={`#menuRC${index}`}>
                      <a>{item.name}</a>
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
            <ul className="ps-0 bg-light bg-opacity-10 d-flex flex-wrap gap-1">
              {menus?.map((item, index) => (
                <li
                  key={item.id}
                  className="border rounded border-dark py-1 px-2 text-center"
                  style={{ listStyle: "none" }}
                >
                  <Link href={`#menuRC${index}`}>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`col-md-8 col-lg-8 ${menuPos && "offset-4"}`}
            style={menuPos ? { zIndex: 2 } : {}}
          >
            {menus?.map((it, index) => (
              <div key={it.id}>
                <h4 id={`menuRC${index}`} className="border-bottom border-dark">
                  {it.name}
                </h4>
                {it.items.map((its) => (
                  <div key={its.id}>
                    <div className="row">
                      <div className="col-2" style={{ aspectRatio: "1 / 1" }}>
                        <img
                          className="w-100 h-100 d-block "
                          src={its.image}
                          alt=""
                        />
                      </div>
                      <div className="col-10 d-flex align-items-start">
                        <div className="d-flex w-100 align-items-center">
                          <h5 className="m-0 me-auto">{its.name}</h5>
                          <p className="text-danger mb-0 me-2">{formatter.format(its.price)}</p>
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
