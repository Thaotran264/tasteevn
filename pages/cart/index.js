import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
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
  const ThongTinUser = () => (
    <article className="w-100 rounded p-2" style={{ backgroundColor: "#fff" }}>
      <h4 className="text-center border-bottom border-dark pb-1">Thông tin người nhận</h4>
      <Row className="mx-0 justify-content-center">
        <Col xs={12} md={6} className='px-0'>
          <form className="mb-2" style={{ fontSize: 15 }}>
            <div className="d-flex flex-column mb-2">
              <label>Tên:</label>
              <input
                readOnly
                placeholder={userAdress?.name || ""}
                type="text"
                className="p-1 w-100 rounded-2"
                style={{ fontSize: 15, borderWidth: 1, borderColor: "lightgray" }}
              />
            </div>
            <div className="d-flex flex-column mb-2">
              <label>Số điện thoại:</label>
              <input
                readOnly
                placeholder={userAdress?.phone || ''}
                type="text"
                className="p-1 w-100 rounded-2"
                style={{ fontSize: 15, borderWidth: 1 }}
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
                      style={{ fontSize: 15, borderWidth: 1 }}
                    />
                  </div> :
                  <div className="d-flex gap-2">
                    <input
                      readOnly
                      type="text"
                      className="p-1 w-100 rounded-2"
                      placeholder={addressData.address}
                      style={{ fontSize: 15, borderWidth: 1 }}
                    />
                  </div>
              }
            </div>
          </form>
        </Col>
      </Row>

      <Row xs={12} className='mx-0 justify-content-center'>
        <Col xs={12} md={6} className='px-0 d-flex justify-content-center'>
          <Button
            className="w-100 border-0 text-light customFontSize"
            style={{ backgroundColor: "#f7a76c" }}
            onClick={() => setShowModal(true)}
          >
            Chọn địa chỉ khác
          </Button>
        </Col>
      </Row>
    </article>
  )
  const ThongTinDonHang = () => (
    <article className="d-flex flex-column gap-2 py-2 rounded">
      <h4 className="text-center border-bottom border-dark mb-0 pb-1">Trang thanh toán</h4>
      <Row className="mx-0 justify-content-center">
        <Col xs={12} md={6} className='d-flex flex-column gap-2 px-0'>
          {cart?.map((cartItem, index) => (
            <CartItem item={cartItem} key={index} />
          ))}
        </Col>
      </Row>
    </article>
  )
  const CartFooter = () => (
    <Row className="mx-0 rounded gap-2 py-2 justify-content-center">
      <Col xs={12} md={6} className='d-flex flex-column gap-2'>
        <span className="text-dark customFontSize fw-bold ms-auto">Tổng tiền: {formatter.format(totalPrice)}</span>

        <Button className="w-100 mx-auto border-0 customFontSize" onClick={handleDatHangButton}>
          Đặt hàng
        </Button>
      </Col>
    </Row>
  )
  return (
    <Layout title="Cart">
      <div className="d-flex gap-2 flex-column container p-2">
        <ThongTinUser />

        <ThongTinDonHang />

        <CartFooter />
      </div>
      {
        showModal && <AddAdress setAddressData={setAddressData} showModal={showModal} setShowModal={setShowModal} />
      }
    </Layout>
  );
};

export default Cart;
