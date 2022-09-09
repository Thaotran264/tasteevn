import Image from "next/image";
import React, { useContext } from "react";
import { useState } from "react";
import { decrease, increase } from "../../store/actions/actionsType";
import { DataContext } from "../../store/globalState";
import { formatter } from "../../utils";
import Topping from "../Cart/Topping";

const MenuItem = ({ data: it }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  const [show, setShow] = useState({
    show: false,
    data: {}
  })
  const handleMinus = (cart, id) => {
    dispatch(decrease(cart, id))
  }
  const handlePlus = (cart, item) => {
    setShow({
      show: true,
      data: item
    })
  }
  return (
    <>
      <article key={it.id} className="menuItem__article">
        <div className="menuItem__image">
          <Image
            src={
              it?.image ||
              '/image/logo512.png'
            }
            width={60}
            height={60}
            alt=""
          />
        </div>
        <div className="menuItem__content">
          <h5>{it.name}</h5>
          <p>{it.Description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="text-danger mb-0">{formatter.format(it.price)}</p>
            <div className="d-flex align-items-center">
              {cart.map((item) => {
                if (item.id == it.id) {
                  if (item.quantity) {
                    return (
                      <>
                        <button
                          className="border-0 rounded d-flex align-items-center justify-content-center"
                          onClick={() => handleMinus(cart, it.id)}
                          style={{
                            backgroundColor: "#f7a76c",
                            color: "#fff",
                            fontSize: 22,
                            height: 30,
                            width: 30,
                          }}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                      </>
                    );
                  }
                }
              })}
              <button
                className="ms-auto button button--orange"
                onClick={() => handlePlus(cart, it)}

              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
      {show.show && <Topping setShow={setShow} show={show} />}
    </>

  );
};

export default MenuItem;
