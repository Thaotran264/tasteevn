import Image from "next/image";
import React, { useContext } from "react";
import { formatter } from "../utils";
import { decrease, deleteItem, increase } from "../store/actions/actionsType";
import { DataContext } from "../store/globalState";
import { BsTrash } from "react-icons/bs";
import { AiOutlineTag } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCart } from "../features/cart/cartSlice";
const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <article className="cartItem__article hideOnDeskTop">
      <div className="cartItem__image">
        <Image
          src={
            item.Image ||
            "https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          }
          alt=""
          width={80}
          height={80}
        />
      </div>
      <div className="cartItem__content">
        <div>
          <h6 className="mb-0">{item.Name}</h6>
          {item.toppings.map(item=>
            <span key={item.id} className='me-1' style={{fontSize: 13, color: 'hsl(0,0%,51%)'}}>{item.Name}</span>)}
          <p className="mb-0 d-flex align-items-center" style={{ fontSize: 13,color: 'hsl(0,0%,51%)' }}><FiEdit className='me-2'/>
            {item.note || "không có gì"}
          </p>
        </div>
        <div>
        <span className="mx-2 text-danger" style={{ fontSize: 13 }}>
          x{item.quantity}
        </span>
          <span className="text-light rounded px-2 py-1" style={{ fontSize: 13, textDecoration: " line-through", backgroundColor:'hsl(0,0%,66%)' }}>
            <AiOutlineTag className="me-1" />{formatter.format(item.Price)}
          </span>
          <span className="text-danger ms-2" style={{ fontSize: 14 }}>
            {formatter.format(item.SaleNumber) || 0}
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
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        <BsTrash />
      </button>
    </article>
  );
};

export default CartItem;
