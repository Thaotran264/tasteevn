import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderApi, userApi } from "../../api-client";
import CartItem from "../../components/CartItem";
import Layout from "../../components/Layout";
import AddAdress from "../../components/Modal/AddAdress";
import Checkout from "../../components/Modal/Checkout";
import { clearCart } from "../../context/actions";
import { CartContext } from "../../context/cartContext";
// import { DataContext } from "../../store/globalState";
import { formatter } from "../../utils";

const Cart = () => {
  const [check, setCheck] = useState(false);
  const { state, dispatch } = useContext(CartContext)
  const { cart } = state
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()
  const [userAdress, setUserAdress] = useState();
  const [addressData, setAddressData] = useState({})
  const totalPrice = cart?.reduce((cal, item) => cal + item.price * item.quantity, 0)
  const totalQuantity= cart?.reduce((cal, item) => cal + item.quantity, 0)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await userApi.getShippingAddress();
        console.log('res',res)
        setUserAdress(...res);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  const handleDatHangButton = async () => {
    const params = {
      userId: userAdress?.userId,
      orderDetails: cart,
      shippingAddressId: userAdress?.id,
      total: totalQuantity,
      ...addressData
    };
    console.log(params);
    // try {
    //   const res = await orderApi.orders(params);
    //   if (res.data && res.successful) {
    //     alert("Đặt hàng thành công");
    //     dispatch(clearCart());
    //     router.push(`/order/${res.data}`)
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  if (!cart?.length) {
    return (
      <>
        <h2 className="text-center">Empty</h2>
        {check && <Checkout setCheck={setCheck} />}
      </>
    );
  }

  console.log('addressData',addressData)
  return (
    <section className="container mx-auto d-flex flex-column">
      <Head>
        <title>Cart</title>
      </Head>
      <div className="w-100 d-flex mb-2 gap-2">
        <article className="cart__article position-relative w-50 rounded-2 bg-light p-2">
          <h4 className="text-center border-bottom">Trang thanh toán</h4>
          {cart?.map((cartItem,index) => (
            <CartItem item={cartItem} key={index} />
          ))}
        </article>
        {/* Shipping Address */}
        <article className="w-50 rounded p-2" style={{ backgroundColor: "#fff" }}>
          <h4 className="text-center border-bottom">Thông tin người nhận</h4>
          <form className="mb-2" style={{ fontSize: 15 }}>
            <div className="d-flex flex-column mb-2">
              <label>Tên:</label>
              <input
                readOnly
                placeholder={userAdress?.name || ""}
                type="text"
                className="p-1 w-100 rounded-2"
                style={{ fontSize: 15, borderColor: "lightgray" }}
              />
            </div>
            <div className="d-flex flex-column mb-2">
              <label>Số điện thoại:</label>
              <input
                readOnly
                placeholder={userAdress?.phone || '123456'}
                type="text"
                className="p-1 w-100 rounded-2"
                style={{ fontSize: 15 }}
              />
            </div>
            <div className="">
              <label>Địa chỉ:</label>
              {
                !Object.keys(addressData).length ?
              <div className="d-flex gap-2">
                <input
                  readOnly
                  type="text"
                  className="p-1 w-100 rounded-2"
                  placeholder={`${userAdress?.wardName || ""}-${userAdress?.districtName || ""}-${userAdress?.cityName || ""}`}
                  style={{ fontSize: 15 }}
                />
              </div> :
               <div className="d-flex gap-2">
               <input
                 readOnly
                 type="text"
                 className="p-1 w-100 rounded-2"
                 placeholder={addressData.address}
                 style={{ fontSize: 15 }}
               />
             </div>
              }
            </div>
          </form>
          <button
            className="border-0 w-100 py-2 rounded"
            style={{ backgroundColor: "#f7a76c", color: "#fff" }}
            onClick={()=>setShowModal(true)}
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
              {formatter.format(totalPrice)}
            </span>
            <span className="text-danger">Tổng tiền: {formatter.format(totalPrice)}</span>
          </div>
          <button className="btn btn-success w-50" onClick={handleDatHangButton}>
            Thanh toán
          </button>
        </div>
      </div>

      {
        showModal && <AddAdress setAddressData={setAddressData} showModal={showModal} setShowModal={setShowModal} />
      }
    </section>
  );
};
Cart.getLayout = function getLayout(Page) {
  return <Layout>{Page}</Layout>;
};
export default Cart;
