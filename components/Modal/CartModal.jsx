import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useContext } from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import {BsTrash} from 'react-icons/bs'

import { decrease, deleteItem, increase } from "../../store/actions/actionsType";
import { DataContext } from "../../store/globalState";
const CartModal = ({ setShow }) => {
  const [count, setCount] = useState(0)
  const { state, dispatch } = useContext(DataContext)
  const { cart } = state

  return (
    <section
      className="vh-100 vw-100 position-fixed top-0 start-0 bg-dark bg-opacity-75 d-flex align-items-center
      justify-content-center"
      style={{ zIndex: 100 }}
    >
      <article className="rounded px-2 py-4 d-flex flex-column align-items-center bg-white bg-opacity-75 cart-container position-relative">
        <h2 className="cart-title">Thông tin giỏ hàng</h2>
        {
          cart.length >= 1 ? <>
            <div className="w-100 overflow-auto mb-2 py-2 rounded" style={{ height: 200 }}>
              {
                cart?.map(item =>
                  <div className="d-flex w-100 border-bottom mb-2 py-2 bg-white rounded p-2 position-relative" key={item.id}>
                    <div className="me-2">
                      <Image
                        className="rounded"
                        src={item.image || 'https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'}
                        alt=""
                        width={80}
                        height={80}
                        // style={{ width: 80, height: 80 }}
                      />
                    </div>
                    <article className="w-100">
                      <h4 className="cart-item-title">{item.name}</h4>
                      <div className="d-flex w-100 justify-content-between align-items-end">
                        <div>
                          <span className="cart-item-price text-danger mb-0">{item.saleNumber || 0}</span>
                          <br />
                          <span className="cart-item-price  mb-0" style={{ textDecoration: ' line-through' }}>{item.price}</span>
                        </div>
                        <div className="d-flex align-items-center">
                          {
                            <>
                              <button
                                className="border-0 rounded d-flex align-items-center justify-content-center"
                                onClick={() => dispatch(decrease(cart, item.id))}
                                style={{ backgroundColor: '#f7a76c', color: '#fff', fontSize: 22, height: 30, width: 30 }}
                              >
                                -
                              </button>
                              <span className="mx-2">{item.quantity}</span>
                              <button
                                className="border-0 rounded d-flex align-items-center justify-content-center"
                                onClick={() => dispatch(increase(cart, item))}
                                style={{ backgroundColor: '#f7a76c', color: '#fff', fontSize: 22, height: 30, width: 30 }}
                              >
                                +
                              </button>
                            </>
                          }

                        </div>
                      </div>
                    </article>
                    <button className="button button--delete position-absolute top-0 end-0"
                      onClick={() => dispatch(deleteItem(cart, item.id))}><BsTrash className="text-light" /></button>
                  </div>
                )
              }
            </div>
                <p className="border-bottom border-dark">Tổng thanh toán: <span className="cart-item-price">129.000 đ</span></p>
            <div className="cartButtonGroup">
              <Link href="/cart">
                <a className="btn mx-auto btn-success w-100 text-light justify-content-center d-flex align-items-center gap-1">
                  <BsCart style={{ fontSize: 22 }} />
                  Trang thanh toán
                </a>
              </Link>
              <button className="btn btn-danger w-100"   onClick={() => setShow(false)}><AiOutlineClose/> Đóng</button>
            </div>
          </>
            : 
            <>
            <h2>Giỏ hàng trống</h2>
            <button className="btn btn-danger"   onClick={() => setShow(false)}><AiOutlineClose/> Đóng</button>
            </>
        }
        {/* <button
          className="btn mx-auto fs-5 text-danger position-absolute"
          style={{ top: 0, right: 0 }}
          onClick={() => setShow(false)}
        >
          <AiOutlineClose style={{ fontSize: 14 }} />
        </button> */}
      </article>
    </section>
  );
};

export default CartModal;
