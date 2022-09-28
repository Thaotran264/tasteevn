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
  const [check, setCheck] = useState(false);
  const cart = useSelector(selectCart);
  const auth = useSelector(selectAuth);
  const quantity = useSelector(totalQuantityCart);
  const { isLogged } = auth;
  const router = useRouter();
  const dispatch = useDispatch();
  console.log("quantity", quantity);
  console.log(isLogged);
  console.log("cart", cart);
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
    const params = {
      orderDetails: cart,
      shippingAddressId: "50dfee76-8ce6-4e11-bf7b-937155188fe1",
      total: quantity,
    };
    console.log(params);
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
        {check && <Checkout setCheck={setCheck} />}
      </>
    );
  }
  return (
    <section className="container mx-auto d-flex flex-column">
      <Head>
        <title>Cart</title>
      </Head>
<div className="w-100 d-flex mb-2 gap-2">
      <article className="cart__article position-relative w-50 rounded-2 bg-light p-2">
        <h4 className="text-center border-bottom">Trang thanh toán</h4>
        {cart?.map((item) => (
          <CartItem item={item} key={item.Id} />
        ))}
      </article>
      <article className="w-50 rounded p-2" style={{ backgroundColor: "#fff" }}>
        <h4 className="text-center border-bottom">Thông tin người nhận</h4>
        <form className="mb-2" style={{ fontSize: 15 }}>
          <div className="d-flex flex-column mb-2">
            <label>Tên:</label>
            <input
              readOnly
              type="text"
              className="p-1 w-100 rounded-2"
              style={{ fontSize: 15, borderColor: "lightgray" }}
            />
          </div>
          <div className="d-flex flex-column mb-2">
            <label>Số điện thoại:</label>
            <input readOnly type="text" className="p-1 w-100 rounded-2" style={{ fontSize: 15 }} />
          </div>
          <div className="">
            <label>Địa chỉ:</label>
            <div className="d-flex gap-2">
              <input
                readOnly
                type="text"
                className="p-1 w-100 rounded-2"
                placeholder="Số nhà"
                style={{ fontSize: 15 }}
              />
              <input
                readOnly
                type="text"
                className="p-1 w-100 rounded-2"
                placeholder="Quận/ huyện"
                style={{ fontSize: 15 }}
              />
              <input
                readOnly
                type="text"
                className="p-1 w-100 rounded-2"
                placeholder="Tỉnh/ thành phố"
                style={{ fontSize: 15 }}
              />
            </div>
          </div>
        </form>
        <button
          className="border-0 w-100 py-2 rounded"
          style={{ backgroundColor: "#f7a76c", color: "#fff" }}
        >
          Chọn địa chỉ khác
        </button>
      </article>
      </div>
      <div className="w-100 bg-light p-2 rounded-2">
        <div className="d-flex justify-content-between w-100 align-items-center">
          <div className="d-flex flex-column">
            <span
              className="rounded py-1 px-1 text-light"
              style={{
                fontSize: 14,
                backgroundColor: "hsl(0,0%,66%)",
                textDecoration: "line-through",
              }}
            >
              {formatter.format(0)}
            </span>
            <span className="text-danger">Tổng tiền: {formatter.format(0)}</span>
          </div>
          <button className="btn btn-success w-50" onClick={handleDatHangButton}>
            Thanh toán
          </button>
        </div>
      </div>
    </section>
  );
};
Cart.getLayout = function getLayout(Page) {
  return <Layout>{Page}</Layout>;
};
export default Cart;
