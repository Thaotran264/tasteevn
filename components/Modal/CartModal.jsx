import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useContext } from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { decrease, deleteItem, increase } from "../../store/actions/actionsType";
import { DataContext } from "../../store/globalState";
const CartModal = ({ setShow }) => {
  const [count, setCount] = useState(0)
  const { state, dispatch } = useContext(DataContext)
  const { cart } = state

  return (
    <div
      className="vh-100 vw-100 position-fixed top-0 start-0 bg-dark bg-opacity-75 d-flex align-items-center
      justify-content-center"
      style={{ zIndex: 100 }}
    >
      <div className="rounded px-2 py-4 d-flex flex-column align-items-center bg-white bg-opacity-75 cart-container position-relative">
        <h2 className="cart-title">Thông tin giỏ hàng</h2>
        {
          cart.length >= 1 ? <>
            <div className="w-100 overflow-auto mb-2 py-2 rounded" style={{ height: 300 }}>
              {
                cart?.map(item =>
                  <div className="d-flex w-100 border-bottom mb-2 py-2 bg-white rounded p-2 position-relative" key={item.id}>
                    <div className="me-2">
                      <Image
                        className="rounded"
                        src={item.image}
                        alt=""
                        width={80}
                        height={80}
                        // style={{ width: 80, height: 80 }}
                      />
                    </div>
                    <div className="w-100">
                      <h4 className="cart-item-title border-bottom">{item.name}</h4>
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
                    </div>
                    {/* <button className="btn position-absolute top-0 p-0" style={{ right: 5 }}
                      onClick={() => dispatch(deleteItem(cart, item.id))}><AiOutlineClose className="text-danger" /></button> */}
                  </div>
                )
              }
            </div>
            <div className=" justify-content-between w-100 rounded bg-white p-2 mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <p>Giá tiền:</p>
                <span className="cart-item-price">110.000 đ</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>Phí giao hàng:</p>
                <span className="cart-item-price">17.000 đ</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>Phí dịch vụ & phí khác:</p>
                <span className="cart-item-price">2.000 đ</span>
              </div>
              <hr className="mt-0" />
              <div className="d-flex justify-content-between align-items-center">
                <p>Tổng thanh toán:</p>
                <span className="cart-item-price">129.000 đ</span>
              </div>
            </div>
            <div className="d-flex gap-1">
              <Link href="/cart">
                <a className="btn mx-auto btn-success fs-6 text-light d-flex align-items-center gap-1">
                  <BsCart style={{ fontSize: 22 }} />
                  Trang thanh toán
                </a>
              </Link>
            </div>
          </>
            : <h2>Giỏ hàng trống</h2>
        }

        <button
          className="btn mx-auto fs-5 text-danger position-absolute"
          style={{ top: 0, right: 0 }}
          onClick={() => setShow(false)}
        >
          <AiOutlineClose style={{ fontSize: 14 }} />
        </button>
      </div>
    </div>
  );
};

export default CartModal;
