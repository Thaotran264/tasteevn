import Head from "next/head";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { BsTrash } from "react-icons/bs";
import Navbar from "../../components/Navbar";
import { DataContext } from "../../store/globalState";
import { formatter } from "../../utils";
import Table from "react-bootstrap/Table";
import Layout from "../../components/Layout";
import Image from "next/image";
import { decrease, deleteItem, increase } from "../../store/actions/actionsType";
import axiosAuth3 from "../../api-client/axios-auth3";
const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;
  console.log(auth)
const handleDatHangButton = async() => {
  const user = localStorage.getItem('userInfo')
  if(!user) {
    dispatch({type: 'NOTIFY', payload: {error: 'Vui lòng đăng nhập để thực hiện mua hàng!!!'}})
    return
  }
  const data = JSON.parse(user)
  const {id} = data
  console.log('first',id)
  const params = {
    userId: id,
    orderDetails: cart.map(item => { return {itemId: item.id, quantity: item.quantity, price: item.price}})
  }
  const res = await axiosAuth3.post('/api/Orders', params)
  console.log(res)
}
  
  if (cart.length == 0) return <h2 className="text-center">Empty</h2>;

  return (
    <div className="container">
      <Head>
        <title>Cart</title>
      </Head>
      <div className="container py-3">
        <h2 className="text-center border-bottom text-uppercase">Cart</h2>

        {
          cart.map((item) => (
            <>
              {/* <div className="d-none showOnDesktop col-12 align-items-center justify-content-between mb-2">
                <img
                  src={
                    item.Image
                      ? item.Image
                      : "https://images.pexels.com/photos/12577819/pexels-photo-12577819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  style={{ width: 100, height: 100, objectFit: "cover" }}
                />
                <h2>{item.Name}</h2>
                <h6>{formatter.format(item.Price)}</h6>
                <div className="d-flex align-items-center">
                  <button className="btn btn-outline-dark">-</button>
                  <span className="mx-2 text-danger">{count}</span>
                  <button className="btn btn-outline-dark">+</button>
                </div>
                <button className="btn btn-danger">x</button>
              </div> */}
              <div className="d-flex col-12 align-items-center hideOnDeskTop">
                <Image
                  src={item.image || ''}
                 width={100}
                 height={100}
                  // style={{ width: 100, height: 100, objectFit: "cover" }}
                />
                <div className="">
                  <h2>{item.name}</h2>
                  <h6 className="text-danger">{formatter.format(item.price)}</h6>
                  <div className="d-flex align-items-center">
                    <button className="btn btn-outline-dark"
                    onClick={()=>dispatch(decrease(cart, item.id))}
                    disabled={item?.quantity == 1}>-</button>
                    <span className="mx-2 text-danger">{item.quantity}</span>
                    <button className="btn btn-outline-dark"
                    onClick={()=>dispatch(increase(cart, item))}
                    >+</button>
                  </div>
                </div>
                <button className="btn btn-danger ms-auto" onClick={()=>dispatch(deleteItem(cart, item.id))}>x</button>
              </div>
              <hr />
            </>
          ))}
           <div className="d-flex justify-content-between align-items-center">
          <span className="mb-0">Tổng tiền</span>
          <p>0</p>
        </div>
          <button className="btn btn-success w-100" onClick={handleDatHangButton}>Đặt hàng</button>
      </div>
    </div>
  );
};
Cart.getLayout = function getLayout(Page) {
  return <Layout>{Page}</Layout>;
};
export default Cart;
