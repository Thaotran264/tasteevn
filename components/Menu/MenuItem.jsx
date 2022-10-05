import Image from "next/image";
import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../features/auth/authSlice";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
import { decrease, increase } from "../../store/actions/actionsType";
import { DataContext } from "../../store/globalState";
import { formatter } from "../../utils";
import Topping from "../Modal/Topping";

const MenuItem = ({ data: it }) => {
  const { state } = useContext(DataContext);
  const { cart } = state;
  const auth = useSelector(selectAuth)
  const { isLogged } = auth
  // console.log(auth)

  const dispatch = useDispatch()
  const [show, setShow] = useState({ open: false, data: {} })
  const handleIncrement = (item) => {
    if (!isLogged) {
      alert('XIn vui lòng đăng nhập!!!')
      return
    }
    // dispatch(addToCart(item))
    setShow({
      open: true,
      data: item
    })
  }
  const handleDecrement = (item) => {
    // dispatch(removeFromCart(item))
  }
  return (
    <>
      <article key={it.id} className="menuItem__article d-flex justify-content-around">
        <div className="menuItem__image" style={{ width: 80, height: 80 }}>
          <Image
            src={
              it?.image ||
              "https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            }
            width={80}
            height={80}
            alt=""
          />
        </div>
        <div className="menuItem__content">
          <h5>{it.name}</h5>
          <p style={{ fontSize: 13, color: 'gray', marginBottom: 8 }}>{String(it.description).substr(0, 100) + "..."}</p>
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
                          onClick={() => handleDecrement(it)}
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
                onClick={() => handleIncrement(it)}
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
      {show.open && <Topping setShow={setShow} show={show} />}
    </>

  );
};

export default MenuItem;
