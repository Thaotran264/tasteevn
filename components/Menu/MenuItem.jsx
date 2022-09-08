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
  const [show, setShow] = useState(false)
  const handleMinus = (cart, id) => {
    dispatch(decrease(cart, id))
  }
  const handlePlus = (cart, item) => {
    dispatch(increase(cart, it))
    setShow(!show)
  }
  return (
    <>
      <article key={it.id} className="menuItem__article">
        <div className="menuItem__image">
          <Image
            src={
              it?.image ||
              "https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
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
                className="ms-auto border-0 rounded d-flex align-items-center justify-content-center"
                onClick={() => handlePlus(cart, it)}
                style={{
                  backgroundColor: "#f7a76c",
                  color: "#fff",
                  fontSize: 22,
                  height: 30,
                  width: 30,
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
      {show && <Topping setShow={setShow} />}
    </>

  );
};

export default MenuItem;
