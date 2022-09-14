import Image from "next/image";
import React, { useContext } from "react";
import { formatter } from "../utils";
import { decrease, deleteItem, increase } from '../store/actions/actionsType'
import { DataContext } from "../store/globalState";
import { BsTrash } from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCart } from "../features/cart/cartSlice";
const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <article className="cartItem__article hideOnDeskTop">
      <div className="cartItem__image">
        <Image
          src={
            item.image ||
            "https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          }
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="cartItem__content">
        <h6>{item.name}</h6>
        <p className="text-danger">{formatter.format(item.price)}</p>
        <div className="d-flex align-items-center">
          <button
            className="button button--orange"
            onClick={() => dispatch(removeFromCart(item.id))}
          // disabled={item?.quantity == 1}
          >
            -
          </button>
          <span className="mx-2 text-danger">{item.quantity}</span>
          <button className="button button--orange" onClick={() => dispatch(addToCart(item))}>
            +
          </button>
        </div>
      </div>
      {/* <button
        className="button button--delete btn-danger ms-auto"
        onClick={() => dispatch(deleteItem(cart, item.id))}
      >
        <BsTrash />
      </button> */}
    </article>
  );
};

export default CartItem;
