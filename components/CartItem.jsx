import Image from "next/image";
import React, { useContext } from "react";
import { formatter } from "../utils";
import { BsTrash } from "react-icons/bs";
import { AiOutlineTag } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { CartContext } from "../context/cartContext";
import { removeFromCart } from "../context/actions";
const CartItem = ({ item }) => {
  const {state, dispatch} = useContext(CartContext)
  const { cart} = state
  return (
    <article className="cartItem__article hideOnDeskTop">
      <div className="cartItem__image">
        <Image
          src={
            item.image ||
            "/image/logo512.png"
          }
          alt=""
          width={80}
          height={80}
        />
      </div>
      <div className="cartItem__content">
        <div>
          <h6 className="mb-0">{item.name}</h6>
          {
          item.orderToppings.map((topping) => (
            <span key={topping.toppingId} className="me-1" style={{ fontSize: 13, color: "hsl(0,0%,51%)" }}>
              {topping.name}
            </span>
          ))
          }
          <p
            className="mb-0 d-flex align-items-center"
            style={{ fontSize: 13, color: "hsl(0,0%,51%)" }}
          >
            <FiEdit className="me-2" />
            {item.note || ""}
          </p>
        </div>
        <div>
          <span className="mx-2 text-danger" style={{ fontSize: 13 }}>
            x{item.quantity}
          </span>
          <span
            className="text-light rounded px-2 py-1"
            style={{
              fontSize: 13,
              textDecoration: " line-through",
              backgroundColor: "hsl(0,0%,66%)",
            }}
          >
            <AiOutlineTag className="me-1" />
            {formatter.format(item.price)}
          </span>
          <span className="text-danger ms-2" style={{ fontSize: 14 }}>
            {formatter.format(item.price * item.quantity) || 0}
          </span>
        </div>

        <div className="d-flex align-items-center">
          {/* <button
            className="button button--orange"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            -
          </button> */}
          {/* <button className="button button--orange" onClick={() => dispatch(addToCart(item))}>
            +
          </button> */}
        </div>
      </div>
      <button
        className="button button--delete btn-danger ms-auto"
        onClick={() => dispatch(removeFromCart(item,cart))}
      >
        <BsTrash />
      </button>
    </article>
  );
};

export default CartItem;
