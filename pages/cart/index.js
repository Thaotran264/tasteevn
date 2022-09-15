import Head from "next/head";
import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderApi } from "../../api-client";
import CartItem from "../../components/CartItem";
import Layout from "../../components/Layout";
import Checkout from "../../components/Modal/Checkout";
import { selectAuth } from "../../features/auth/authSlice";
import { clearCart, selectCart } from "../../features/cart/cartSlice";
import { DataContext } from "../../store/globalState";
import { formatter } from "../../utils";
const Cart = () => {
  const [check, setCheck] = useState(false)
  const cart = useSelector(selectCart)
  const auth = useSelector(selectAuth)
  const dispatch = useDispatch()
  const {id: userId} = auth || ""
  const total = 0
  const totalSale = 0
  cart?.forEach(item => {
    total += item.totalPrice
    totalSale += item.saleNumber
  })
  console.log(cart)
  console.log(auth)
  const handleDatHangButton = async () => {
    // if (!userId) {
    //   dispatch({
    //     type: "NOTIFY",
    //     payload: { error: "Vui lòng đăng nhập để thực hiện mua hàng!!!" },
    //   });
    //   return;
    // }    
    const params = {
      userId,
      orderDetails: cart
      
    };
    console.log(params)
    const res = await orderApi.orders(params)
    if(res.data) {
      setCheck(true)
      dispatch(clearCart([]))
    }
  };

  if (cart?.length == 0) return (
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
        <h6 className="text-center border-bottom pb-3">Trang thanh toán</h6>
        {cart?.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
        <hr />
        <div className="d-flex justify-content-between start-0 end-0 position-fixed bottom-0 px-2 py-3 border-top border-danger">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <div >
            <span className="rounded py-1 px-1 text-light" style={{fontSize: 14, backgroundColor: 'hsl(0,0%,66%)', textDecoration: 'line-through'}}>{formatter.format(total)}</span>
          <span className="ms-2 text-danger">{formatter.format(totalSale || 0)}</span>
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
