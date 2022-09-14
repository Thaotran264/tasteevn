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
import { addToCart, removeFromCart, selectCart } from "../../features/cart/cartSlice";
import { formatter } from "../../utils";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const CartModal = ({ setShow }) => {
  const [count, setCount] = useState(0);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const total = 0;
  const totalItem = 0;
  cart.forEach((item) => {
    total += item.totalPrice;
    totalItem += item.quantity;
  });

  return (
    <section
      className="position-fixed bottom-0 start-0 end-0 start-0 bg-opacity-75 bg-dark h-100"
      style={{ zIndex: 100 }}
    >
      <article
        className="rounded px-2 d-flex bg-light flex-column align-items-center cart-container position-absolute bottom-0 start-0 end-0 w-100"
        style={{ height: "90vh" }}
      >
        <div className="border-bottom border-dark py-2 w-100 d-flex align-items-center justify-content-between">
        <button className="btn text-dark" onClick={() => setShow(false)}>
            <AiOutlineClose style={{fontSize:22}}/>
          </button>
        <h2 className="border-bottom border-light mb-0 text-center">Giỏ hàng</h2>
        <button className="btn text-danger">
            Xoá
          </button>
        </div>
        <div className="w-100 overflow-auto mb-2 py-2 rounded" style={{ maxHeight: 400 }}>
          {cart?.map((item) => (
            <div
              className="d-flex w-100 border-bottom mb-2 py-2 bg-white rounded p-2 position-relative"
              key={item.id}
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
                  <p className="mb-0">Note</p>
                </div>
                <div className="d-flex w-100 justify-content-between align-items-end">
                  <div>
                    <span
                      className="cart-item-price"
                      style={{ textDecoration: " line-through" }}
                    >
                      {formatter.format(item.price)}
                    </span>
                    <span className="cart-item-price mx-2 text-danger">
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
        <div className="position-absolute bottom-0 start-0 end-0 px-2 border-top border-dark py-3">
          <Link href="/cart">
            <a className="btn mx-auto w-100 justify-content-between d-flex align-items-center gap-1" style={{fontSize: 18, backgroundColor:'#f7a76c', color: '#fff'}}>
              <span>{totalItem} Món</span>
              {/* <BsCart style={{ fontSize: 22 }} /> */}
              Trang thanh toán
              <span>{formatter.format(total)}</span>
            </a>
          </Link>
          
        </div>
      </article>
    </section>
  );
};

export default CartModal;
