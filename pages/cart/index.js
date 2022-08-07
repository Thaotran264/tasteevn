import Link from "next/link";
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import NavbarSecond from "../../components/NavbarSecond";
const Cart = () => {
  const [count, setCount] = useState(1);

  const handleClick = (value) => {
    setCount(value);
  };
  return (
    <div className="container">
      <div className="row py-3">
        <h4>Cart</h4>
        <hr />
        <div className="showOnDesktop col-12 align-items-center justify-content-between mb-2">
          <img
            src="https://images.pexels.com/photos/12577819/pexels-photo-12577819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            style={{ width: 100, height: 100, objectFit: "cover" }}
          />
          <h2>Name of product</h2>
          <h6>Price of product</h6>
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-dark">-</button>
            <span className="mx-2 text-danger">{count}</span>
            <button className="btn btn-outline-dark">+</button>
          </div>
          <button className="btn btn-danger">x</button>
        </div>
        <div className="d-flex col-12 align-items-center justify-content-between hideOnDeskTop">
          <img
            src="https://images.pexels.com/photos/12577819/pexels-photo-12577819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            style={{ width: 100, height: 100, objectFit: "cover" }}
          />
          <div className="">
            <h2>Name of product</h2>
            <h6 className="text-danger">Price of product</h6>
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-dark">-</button>
              <span className="mx-2 text-danger">{count}</span>
              <button className="btn btn-outline-dark">+</button>
            </div>
          </div>
          <button className="btn btn-danger">x</button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Cart;
