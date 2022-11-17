import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { orderApi, userApi } from "../../api-client";
import CartItem from "../../components/CartItem";
import Layout from "../../components/Layout";
import AddAdress from "../../components/Modal/AddAdress";
// import Checkout from "../../components/Modal/Checkout";
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
  const totalQuantity = cart?.reduce((cal, item) => cal + item.quantity, 0)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await userApi.getShippingAddress();
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
    try {
      const res = await orderApi.orders(params);
      if (res.data && res.successful) {
        alert("Đặt hàng thành công");
        dispatch(clearCart());
        router.push(`/order/${res.data}`)
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!cart?.length) {
    return (
      <>
        <h2 className="text-center">Empty</h2>
        {/* {check && <Checkout setCheck={setCheck} />} */}
      </>
    );
  }

  return (
    <section className="container mx-auto d-flex flex-column mt-2">
      <Head>
        <title>Cart</title>
      </Head>
      <div className="d-flex mb-2 gap-2 flex-column align-items-center">
        <article className="w-75 rounded p-2" style={{ backgroundColor: "#fff" }}>
          <h4 className="text-center border-bottom">Thông tin người nhận</h4>
          <form className="mb-2" style={{ fontSize: 15 }}>
            <div className="d-flex flex-column mb-2">
              <label>Tên:</label>
              <input
                readOnly
                placeholder={userAdress?.name || ""}
                type="text"
                className="p-1 w-100 rounded-2"
                style={{ fontSize: 15,borderWidth: 1, borderColor: "lightgray" }}
              />
            </div>
            <div className="d-flex flex-column mb-2">
              <label>Số điện thoại:</label>
              <input
                readOnly
                placeholder={userAdress?.phone || ''}
                type="text"
                className="p-1 w-100 rounded-2"
                style={{ fontSize: 15,borderWidth: 1 }}
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
                      style={{ fontSize: 15 ,borderWidth: 1}}
                    />
                  </div> :
                  <div className="d-flex gap-2">
                    <input
                      readOnly
                      type="text"
                      className="p-1 w-100 rounded-2"
                      placeholder={addressData.address}
                      style={{ fontSize: 15,borderWidth: 1 }}
                    />
                  </div>
              }
            </div>
          </form>
          <div className="d-flex">

          <Button 
            className="border-0 w-50 py-2 mx-auto text-light"
            style={{ backgroundColor: "#f7a76c"}}
            onClick={() => setShowModal(true)}
            >
            Chọn địa chỉ khác
          </Button>
            </div>
        </article>
        <article className="cart__article position-relative w-75 rounded-2 bg-light p-2">
          <h4 className="text-center border-bottom">Trang thanh toán</h4>
          {cart?.map((cartItem, index) => (
            <CartItem item={cartItem} key={index} />
          ))}
        </article>
        <div className="d-flex flex-column w-75 gap-2">
            <div className="d-flex justify-content-end mx-2">
              {/* <span
                className="rounded py-1 px-1 text-light"
                style={{
                  fontSize: 14,
                  backgroundColor: "hsl(0,0%,66%)",
                  textDecoration: "line-through",
                }}
              >
                {formatter.format(totalPrice)}
              </span> */}
              <span className="text-dark fw-bold">Tổng tiền: {formatter.format(totalPrice)}</span>
            </div>
            <div className="d-flex">

            <Button variant='success' className=" w-50 mx-auto" onClick={handleDatHangButton}>
              Đặt hàng
            </Button>
            </div>
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
