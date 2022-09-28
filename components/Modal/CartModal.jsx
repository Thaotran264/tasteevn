import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useContext } from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { decrease, deleteItem, increase } from "../../store/actions/actionsType";
import { DataContext } from "../../store/globalState";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeFromCart, selectCart } from "../../features/cart/cartSlice";
import { formatter } from "../../utils";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const CartModal = ({ setShow }) => {
  const [count, setCount] = useState(0);
  const cart = useSelector(selectCart);
  // console.log('cart', cart)
  const dispatch = useDispatch();
  const total = 0;
  const totalItem = 0;
  const toppingTotal = 0
  cart?.forEach((item) => {
    total += item.totalPrice;
    totalItem += item.quantity;
    item.toppings?.forEach(it =>
      toppingTotal += it.price
    )
  });
  return (
    <>
      {totalItem &&
        <section
          className="position-fixed bottom-0 start-0 end-0 start-0 bg-opacity-75 bg-dark h-100 d-flex"
          style={{ zIndex: 100 }}
        >
          <article
            className="mt-auto mx-auto rounded cartModalCss">
            <div className="border-bottom border-dark p-2 w-100 d-flex align-items-center justify-content-between">
              <button className="border-0 rounded text-dark p-1" onClick={() => setShow(false)}>
                <AiOutlineClose style={{ fontSize: 18 }} />
              </button>
              <h5 className="border-bottom border-light mb-0 text-center">Giỏ hàng</h5>
              <button className="btn text-danger" style={{ fontSize: 13, fontWeight: 'bold' }}
               onClick={() => dispatch(clearCart([]))}>
                Xoá
              </button>
            </div>
            <div className="w-100 overflow-auto mb-2 py-2 rounded" style={{ maxHeight: 400 }}>
              {cart?.map((item) => (
                <div
                  className="d-flex w-100 border-bottom mb-2 py-2 bg-white rounded p-2 position-relative"
                  key={item.Id}
                >
                  <div className="me-2">
                    <Image
                      className="rounded"
                      src={
                        item.image ||
                        "https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                      }
                      alt=""
                      width={110}
                      height={110}
                    />
                  </div>
                  <article className="w-100">
                    <div>
                      <h6 className="mb-0">{item.name}</h6>
                      {item.toppings.map(item =>
                        <span className="" style={{ fontSize: 13, color: 'hsl(0,0%,40%)' }} key={item.Id}>{item.name}</span>)}
                      <p className="mb-0" style={{ fontSize: 13, color: '#8d8d8d' }}>{item.note || "Không có ghi chú"}</p>
                    </div>
                    <div className="d-flex  w-100 justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span
                          className="cart-item-price mb-0"
                          style={{ textDecoration: " line-through" }}
                        >
                          {formatter.format(item.price + toppingTotal)}
                        </span>
                        <span className="cart-item-price mx-2 text-danger mb-0">
                          {formatter.format(item.saleNumber) || 0}
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        {
                          <>
                            <button
                              className="border-0 rounded d-flex align-items-center justify-content-center"
                              onClick={() => dispatch(removeFromCart(item.id))}
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
                            <button
                              className="border-0 rounded d-flex align-items-center justify-content-center"
                              onClick={() => dispatch(addToCart(item))}
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
                          </>
                        }
                      </div>
                    </div>
                  </article>

                </div>
              ))}
            </div>
            <div className="position-absolute cardModalGroupButton">
              <Link href="/cart">
                <a className="btn mx-auto w-100 justify-content-between d-flex align-items-center gap-1" style={{ fontSize: 18, backgroundColor: '#f7a76c', color: '#fff' }}>
                  <span style={{ fontSize: 16 }}>{totalItem} Món</span>
                  {/* <BsCart style={{ fontSize: 22 }} /> */}
                  Trang thanh toán
                  <span>{formatter.format(total + toppingTotal)}</span>
                </a>
              </Link>

            </div>
          </article>
        </section>
      }
    </>
  );
};

export default CartModal;
