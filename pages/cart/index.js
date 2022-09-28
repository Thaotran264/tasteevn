import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderApi, userApi } from "../../api-client";
import CartItem from "../../components/CartItem";
import Layout from "../../components/Layout";
import Checkout from "../../components/Modal/Checkout";
import { selectAuth } from "../../features/auth/authSlice";
import { clearCart, selectCart, totalQuantityCart } from "../../features/cart/cartSlice";
import { DataContext } from "../../store/globalState";
import { formatter } from "../../utils";
const Cart = () => {
  const [check, setCheck] = useState(false)
  const cart = useSelector(selectCart)
  const auth = useSelector(selectAuth)
  const quantity = useSelector(totalQuantityCart)
  const { isLogged } = auth
  const router = useRouter()
  const dispatch = useDispatch()
  console.log('quantity', quantity)
  console.log(isLogged)
  console.log('cart', cart)
  // useEffect(() => {
  //   if (!isLogged) {
  //     alert('Vui lòng đăng nhập')
  //     router.push('/')
  //   }
  // }, [])
  // console.log(cart)
  // console.log(quantity)
  const handleDatHangButton = async () => {
    // try {
    //   const res = await userApi.getShippingAddress()
    //   console.log(res)
    // } catch (err) {
    //   console.log(err)
    // }
    // if (!userId) {
    //   dispatch({
    //     type: "NOTIFY",
    //     payload: { error: "Vui lòng đăng nhập để thực hiện mua hàng!!!" },
    //   });
    //   return;
    // }    
    // const params = {
    //   orderDetails: cart,
    //   shippingAddressId: '50dfee76-8ce6-4e11-bf7b-937165188fe1',
    //   total: quantity

    // };
    // console.log(params)
    // const res = await orderApi.orders(params)
    // if (res.data) {
    //   setCheck(true)
    //   dispatch(clearCart([]))
    // }
  };

  if (cart?.length == 0) {
    return (
      <>
        <h2 className="text-center">Empty</h2>
        {
          check && <Checkout setCheck={setCheck} />
        }
      </>
    )
  }
  return (
    <section className="container mx-auto d-flex gap-2 p-2">
      <Head>
        <title>Cart</title>
      </Head>

      <article className="cart__article position-relative w-50">
        <h6 className="text-center border-bottom pb-1">Trang thanh toán</h6>
        {cart?.map((item) => (
          <CartItem item={item} key={item.Id} />
        ))}
        <hr />
        <div className="container mx-auto d-flex justify-content-between start-0 end-0 position-fixed bottom-0 px-2 py-3 border-top border-danger">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <div >
              <span className="rounded py-1 px-1 text-light" style={{ fontSize: 14, backgroundColor: 'hsl(0,0%,66%)', textDecoration: 'line-through' }}>{formatter.format(0)}</span>
              <span className="ms-2 text-danger">{formatter.format(0)}</span>
            </div>
            <button className="btn btn-success w-50" onClick={handleDatHangButton}>
              Đặt hàng
            </button>
          </div>
        </div>
      </article>
      <article className="w-50 rouned bg-light">
        Shipping address
      </article>
    </section>
  );
};
Cart.getLayout = function getLayout(Page) {
  return <Layout>{Page}</Layout>;
};
export default Cart;
