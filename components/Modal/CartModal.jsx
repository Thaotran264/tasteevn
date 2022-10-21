import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { decrease, deleteItem, increase } from "../../store/actions/actionsType";
import { DataContext } from "../../store/globalState";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  removeFromCart,
  selectCart,
  totalQuantityCart,
} from "../../features/cart/cartSlice";
import { formatter } from "../../utils";

const CartModal = ({ setShow }) => {
  const [count, setCount] = useState(0);
  // const cart = useSelector(selectCart) || [];
  // const quantity = useSelector(totalQuantityCart);
  const [cart, setCart] = useState()
  const [total, setTotal] = useState()
  useEffect(()=>{
    setCart(JSON.parse(sessionStorage.getItem('cartItems')) || [])
    setTotal(JSON.parse(sessionStorage.getItem('totalQuantity')) || 0)
  },[])
  const dispatch = useDispatch();

  const renderCartItem = cart && cart?.map((cartItem) => {
    return (
      <div
        className="d-flex w-100 border-bottom mb-2 py-2 bg-white rounded p-2 position-relative"
        key={cartItem?.id}
      >
        <div className="me-2">
          <Image
            className="rounded"
            src={
              cartItem?.image ||
              '/image/logo512.png'
            }
            alt=""
            width={110}
            height={110}
          />
        </div>
        <article className="w-100">
          <div>
            <h6 className="mb-0">{cartItem?.name || ""}</h6>
            {/* {cartItem?.toppings.map((it) => (
                        <span
                          className=""
                          style={{ fontSize: 13, color: "hsl(0,0%,40%)" }}
                          key={it.id}
                        >
                          {it.name}
                        </span>
                      ))} */}
            {
            cartItem?.orderToppings.map(topping => (
              <span
                className="me-1"
                style={{ fontSize: 13, color: "hsl(0,0%,40%)" }}
                key={topping.toppingId}
              >
                {topping.name || ""}
              </span>
            ))
            }
            <p className="mb-0" style={{ fontSize: 13, color: "#8d8d8d" }}>
              {cartItem?.note || "Không có ghi chú"}
            </p>
          </div>
          <div className="d-flex  w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <span className="cart-item-price mb-0" style={{ textDecoration: " line-through" }}>
                {formatter.format(cartItem?.price || 0)}
              </span>
              <span className="cart-item-price mx-2 text-danger mb-0">
                {formatter.format(cartItem?.price || 0)}
              </span>
            </div>
            <div className="d-flex align-items-center">
              {
                <>
                  <button
                    className="border-0 rounded d-flex align-items-center justify-content-center"
                    onClick={() => dispatch(removeFromCart(cartItem?.itemId))}
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
                  <span className="mx-2">{cartItem?.quantity || 0}</span>
                  <button
                    className="border-0 rounded d-flex align-items-center justify-content-center"
                    onClick={() => dispatch(addToCart(cartItem))}
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
    );
  });
  return (
    <>
        <section
          className="position-fixed bottom-0 start-0 end-0 start-0 bg-opacity-75 bg-dark h-100 d-flex"
          style={{ zIndex: 100 }}>
          <article className="mx-auto rounded cartModalCss">
            <div className="border-bottom position-fixed top-0 left-0 border-dark p-2 d-flex align-items-center justify-content-between cartModalTitle" >
              <button className="border-0 rounded text-dark p-1" onClick={() => setShow(false)}>
                <AiOutlineClose style={{ fontSize: 18 }} />
              </button>
              <h5 className="border-bottom border-light mb-0 text-center">Giỏ hàng</h5>
              <button
                className="btn text-danger"
                style={{ fontSize: 13, fontWeight: "bold" }}
                onClick={() => dispatch(clearCart([]))}
              >
                Xoá
              </button>
            </div>
            <div className="w-100 py-2 rounded" style={{overflow: 'scroll',height: '90vh', margin: '56px 0'}}>
              {renderCartItem}
            </div>
            <div className="position-fixed bottom-0 cardModalGroupButton">
              <Link href="/cart">
                <a
                  className="btn mx-auto w-100 justify-content-between d-flex align-items-center gap-1"
                  style={{ fontSize: 18, backgroundColor: "#f7a76c", color: "#fff" }}
                >
                  <span style={{ fontSize: 16 }}>0 Món</span>
                  Trang thanh toán
                  <span>{formatter.format(0)}</span>
                </a>
              </Link>
            </div>
          </article>
        </section> 
       
    </>
  )
};

export default CartModal;
