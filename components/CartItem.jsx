import Image from "next/image";
import React, { useContext } from "react";
import { formatter } from "../utils";
import { decrease, deleteItem, increase } from '../store/actions/actionsType'
import { DataContext } from "../store/globalState";

const CartItem = ({ item }) => {
    const { state, dispatch } = useContext(DataContext);
    const { cart, auth } = state;
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
        <h5>{item.name}</h5>
        <p className="text-danger">{formatter.format(item.price)}</p>
        <div className="d-flex align-items-center">
          <button
            className="btn btn-outline-dark"
            onClick={() => dispatch(decrease(cart, item.id))}
            disabled={item?.quantity == 1}
          >
            -
          </button>
          <span className="mx-2 text-danger">{item.quantity}</span>
          <button className="btn btn-outline-dark" onClick={() => dispatch(increase(cart, item))}>
            +
          </button>
        </div>
      </div>
      <button
        className="btn btn-danger ms-auto"
        onClick={() => dispatch(deleteItem(cart, item.id))}
      >
        x
      </button>
    </article>
  );
};

export default CartItem;