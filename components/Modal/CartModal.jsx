import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
const CartModal = ({ setShow }) => {
  return (
    <div
      className="vh-100 vw-100 position-fixed top-0 start-0 bg-dark bg-opacity-75 d-flex align-items-center
      justify-content-center"
      style={{ zIndex: 100 }}
    >
      <div className="rounded px-2 py-4 d-flex flex-column align-items-center bg-light bg-opacity-75 cart-container position-relative">
        <h2 className="cart-title">Thông tin giỏ hàng</h2>
        <div className="w-100">
          <div className="d-flex w-100 border-bottom mb-2 py-2 bg-white rounded p-2 position-relative">
            <div className="me-2">
              <img
                className="rounded"
                src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                style={{ width: 80, height: 80 }}
              />
            </div>
            <div className="px-2 w-100">
              <h4 className="cart-item-title">Mì Tomyum Bò Úc</h4>
              <div className="d-flex w-100 justify-content-between align-items-end">
                <div>
                  <span className="cart-item-price text-danger mb-0">52.000 đ</span>
                  <br />
                  <span className="cart-item-price  mb-0" style={{ textDecoration: ' line-through' }}>55.000 đ</span>
                </div>
                <div>
                  <button className="btn rounded px-2 py-1" style={{ borderColor: 'orange' }}><AiOutlineMinus style={{ fontSize: 16, color: 'orange' }} /></button>
                  <span className="mx-2">0</span>
                  <button className="btn rounded px-2 py-1" style={{ borderColor: 'orange' }}><AiOutlinePlus style={{ fontSize: 16, color: 'orange' }} /></button>
                </div>
              </div>
            </div>
            <button className="btn position-absolute top-0 p-0" style={{ right: 5 }}><AiOutlineClose className="text-danger" /></button>
          </div>
          <div className="d-flex w-100 border-bottom mb-2 py-2 bg-white rounded p-2">
            <div className="me-2">
              <img
                className="rounded"
                src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                style={{ width: 100, height: 80 }}
              />
            </div>
            <div className="px-2">
              <h4 className="cart-item-title">Mì Kim chi Bò Úc</h4>
              <span className="cart-item-price">55.000 đ</span>
              <div>
                <button className="btn btn-outline-success rounded-circle">-</button>
                <span className="mx-2">0</span>
                <button className="btn btn-outline-success rounded-circle">+</button>
              </div>
            </div>
            <button className="btn btn-outline-danger ms-auto">Xoá</button>
          </div>
          <div className="d-flex w-100 border-bottom mb-2 py-2 bg-white rounded p-2">
            <div className="me-2">
              <img
                className="rounded"
                src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                style={{ width: 100, height: 80 }}
              />
            </div>
            <div className="px-2">
              <h4 className="cart-item-title">Mì Kim chi Bò Úc</h4>
              <span className="cart-item-price">55.000 đ</span>
              <div>
                <button className="btn btn-outline-success rounded-circle">-</button>
                <span className="mx-2">0</span>
                <button className="btn btn-outline-success rounded-circle">+</button>
              </div>
            </div>
            <button className="btn btn-outline-danger ms-auto">Xoá</button>
          </div>
          <hr className="mt-0" />
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
