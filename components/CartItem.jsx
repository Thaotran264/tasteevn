import Image from "next/image";
import React, { useContext } from "react";
import { formatter } from "../utils";
import { FaTrash } from "react-icons/fa";
import { AiOutlineTag } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { CartContext } from "../context/cartContext";
import { removeFromCart } from "../context/actions";
import { Col, Row } from "react-bootstrap";
const CartItem = ({ item }) => {
  const { state, dispatch } = useContext(CartContext)
  const { cart } = state
  return (
    <Row className="mx-0 hideOnDeskTop d-flex align-items-center bg-light shadow-sm rounded">
      <Col xs={3} md={2} className='d-flex align-items-center p-2'>
        <Image
          src={
            item.image ||
            "/image/logo512.png"
          }
          alt=""
          width={80}
          height={80}
        /></Col>
      <Col xs={7} md={8}>
        <p className="mb-1 customFontSize">{item.name}</p>
        {
          item.orderToppings.map((topping) => (
            <span key={topping.toppingId} className="me-1 customFontSize" >
              {topping.name}
            </span>
          ))
        }
        <p
          className="mb-0 d-flex align-items-center"        >
          <FiEdit className="me-2" />
          {item.note || ""}
        </p>
        <span className="mx-2 text-danger customFontSize">
          x{item.quantity}
        </span>

        <span className="text-dark ms-2 customFontSize">
          {formatter.format(item.price * item.quantity) || 0}
        </span>
      </Col>
      <Col xs={2} md={2} className='d-flex justify-content-end align-items-center'>
        <button
          className="border-0 text-danger" style={{ backgroundColor: 'transparent' }}
          onClick={() => dispatch(removeFromCart(item, cart))}
        >
          <FaTrash style={{ fontSize: 22 }} />
        </button>
      </Col>
    </Row>
  );
};

export default CartItem;
