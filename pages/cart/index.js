import Head from "next/head";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { orderApi } from "../../api-client";
import CartItem from "../../components/CartItem";
import Layout from "../../components/Layout";
import Checkout from "../../components/Modal/Checkout";
import { selectCart } from "../../features/cart/cartSlice";
import { DataContext } from "../../store/globalState";
import { formatter } from "../../utils";
const Cart = () => {
  const [check, setCheck] = useState(false)
  const cart = useSelector(selectCart)
  const total = 0
  cart.forEach(item => {
    total += item.totalPrice
  })
  const handleDatHangButton = async () => {
    const user = localStorage.getItem("userInfo");
    if (!user) {
      dispatch({
        type: "NOTIFY",
        payload: { error: "Vui lòng đăng nhập để thực hiện mua hàng!!!" },
      });
      return;
    }
    const data = JSON.parse(user);
    const { id } = data;
    const params = {
      userId: id,
      orderDetails: cart.map((item) => {
        return { itemId: item.id, quantity: item.quantity, price: item.price };
      }),
    };
    const res = await orderApi.orders(params)
    if(res.data) {
      setCheck(true)
      dispatch({type: "ADD_CART", payload: []})
    }
  };

  if (cart.length == 0) return (
    <>
    <h2 className="text-center">Empty</h2>
    {
        check && <Checkout setCheck={setCheck}/>
      }
    </>
  )

  return (
    <section className="container">
      <Head>
        <title>Cart</title>
      </Head>
      <article className="cart__article position-relative">
        <h5 className="text-center border-bottom pb-3">Trang thanh toán</h5>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
        <hr />
        <div className="d-flex justify-content-between start-0 end-0 position-fixed bottom-0 px-2 py-3 border-top border-danger">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <div>
            <span className="" style={{fontSize: 14, color: '#000', textDecoration: 'line-through'}}>{formatter.format(total)}</span>
          <span className="ms-2 text-danger">{formatter.format(total)}</span>
            </div>
        <button className="btn btn-success w-50" onClick={handleDatHangButton}>
          Đặt hàng
        </button>
            </div>
        </div>
      </article>
    
    </section>
  );
};
Cart.getLayout = function getLayout(Page) {
  return <Layout>{Page}</Layout>;
};
export default Cart;
