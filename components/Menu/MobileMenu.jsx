import React, { useState } from "react";
import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { DataContext } from "../../store/globalState";
import { addToCart, decrease, increase } from "../../store/actions/actionsType";
import { formatter } from "../../utils";
const MobileMenu = ({ menuPos, menus }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0)
  return (
    <div className="hideOnDesktop">
      <ul
        className={`d-flex ps-0 mb-2 overflow-scroll hideScrollbar bg-opacity-75 ${menuPos && "position-fixed bg-light "}`}
        style={menuPos ? { top: 0, left: 0, width: "100%", zIndex: 99 } : { margin: '0 -12px', backgroundColor: '#fff', color: '#000' }}
      >
        <li className="p-2 text-center" style={{ listStyle: "none", minWidth: "35%", fontWeight: 600 }}><a>Tất cả</a></li>
        {menus?.map((item, index) => (
          <li key={item.Id} className="p-2 text-center" style={{ listStyle: "none", minWidth: "35%", fontWeight: 600 }}>
            <a href={`#menuRC${index}`}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="rounded configMenuMobile">
        {menus?.map((item, index) => (
          <div key={item.Id} className='bg-light rounded p-2 mb-2'>
            <h4 id={`menuRC${index}`}>{item.name}</h4>
            {item?.items?.map((it, ind) => (
              <div key={it.id} className='mb-2 border-bottom pb-2'>
                <div className="row">
                  <div className="col-3">
                    <div style={{ aspectRatio: "1 / 1" }}>
                      <img
                        className="w-100 h-100 d-block"
                        src={it.image}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-9 d-flex align-items-start gap-1">
                    <div className="w-100">
                      <h5>{it.name}</h5>
                      <p>{it.Description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="text-danger mb-0">{formatter.format(it.price)}</p>
                        <div className="d-flex align-items-center">
                          {
                            cart.map(item => {
                              if (item.id == it.id) {
                                if (item.quantity) {
                                  return (
                                    <>
                                      <button
                                        className="border-0 rounded d-flex align-items-center justify-content-center"
                                        onClick={() => dispatch(decrease(cart, it.id))}
                                        style={{ backgroundColor: '#f7a76c', color: '#fff', fontSize: 22, height: 30, width: 30 }}
                                      >
                                        -
                                      </button>
                                      <span className="mx-2">
                                        {item.quantity}</span>
                                      {/* <button
                                      className="border-0 rounded d-flex align-items-center justify-content-center"
                                      onClick={() => dispatch(increase(cart, it))}
                                      style={{ backgroundColor: '#f7a76c', color: '#fff', fontSize: 22, height: 30, width: 30 }}
                                    >
                                      +
                                    </button> */}
                                    </>
                                  )
                                }

                              }

                            })
                          }
                          <button
                            className="ms-auto border-0 rounded d-flex align-items-center justify-content-center"
                            onClick={() => dispatch(increase(cart, it))}
                            style={{ backgroundColor: '#f7a76c', color: '#fff', fontSize: 22, height: 30, width: 30 }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
