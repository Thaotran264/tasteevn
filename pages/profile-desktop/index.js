import React, { useContext, useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { isMobile } from "react-device-detect";
import { FcAddImage } from "react-icons/fc";
import { userApi } from "../../api-client/user";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import HistoryOrder from "../../components/HistoryOrder";
import TabInfor from "../../components/Infor";
import ShippingAddress from "../../components/ShippingAddress";
import WishlistShop from "../../components/wishlistShop";
import { CartContext } from "../../context/cartContext";
import MerchantLayout from "../../components/MerchantLayout";
import NavComponent from "../../components/Nav";
import { current } from "@reduxjs/toolkit";
import moment from "moment";
import Image from "next/image";
import { bookingApi } from "../../api-client";
import MobileProfile from "../../components/MobileProfile";

const Cart = () => {
  const [user, setUser] = useState({});
  const { dispatch } = useContext(CartContext);
  const currentTime = new Date().toISOString().split('T')[0]
  const [startDate, setStartDate] = useState(currentTime)
  const [endDate, setEndDate] = useState(currentTime)
  const router = useRouter();
  const [bookingData, setBookingData] = useState([])
  console.log('first,', currentTime.split('-')[2] - 7)
  useEffect(() => {
    const getDetailUser = async () => {
      try {
        const res = await userApi.getUserInfor();
        if (res['successful']) {
          setUser(res['data'].userInfo);
        }
      } catch (error) {
        dispatch({ type: "NOTIFY", payload: { error: "Đã xảy ra lỗi vui lòng đăng nhập lại" } });
      }
    };
    getDetailUser();
  }, []);

  const handleChangeStartDate = (e) => {
    console.log('date', new Date(e.target.value).getTime())
    setStartDate(e.target.value)
  }
  const handleChangeEndDate = (e) => {
    console.log('date', new Date(e.target.value).getTime())

    setEndDate(e.target.value)
  }
  const handleSearch = async () => {
    const formData = new FormData()
    formData.append('FromDate', new Date(startDate).getTime())
    formData.append('ToDate', new Date(endDate).getTime())
    formData.append('Start', 1)
    formData.append('Length', 10)
    try {
      const res = await bookingApi.loadData(formData)
      console.log('first', res)
      setBookingData(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <NavComponent />
      <div className="container hideOnMobile" style={{ marginTop: 54 }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="infor">
          <Row>
            <Col sm={3}>
              <div className="profile-sidebar pt-2">
                <div className="profile-userpic">
                  <div className="">
                    {user && user["avatar"] ? (
                      <Image
                        // className="w-100 h-100"
                        src={user["avatar"] || ''}
                        alt={user["fullName"]}
                        width={120}
                        height={120}
                        style={{ border: "1px solid #fff", borderRadius: "50%" }}
                      />
                    ) : (
                      <FcAddImage
                        className="w-75 h-75 rounded-circle border"
                        style={{ border: "1px solid #fff", borderRadius: "50%" }}
                      />
                    )}
                  </div>
                </div>
                <div className="profile-usertitle text-center">
                  <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                    <h2 className="profile-usertitle-name"> {user["fullName"] || ""} </h2>
                  </div>
                  <p className="profile-usertitle-job">{user["phoneNumber"] || ""}</p>
                </div>
                <div className="profile-usermenu">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="infor"
                        onClick={() => {
                          router.push("/profile-desktop");
                        }}
                      >
                        Thông tin chung
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="wishlist"
                        onClick={() => {
                          router.push("/profile-desktop");
                        }}
                      >
                        Quán yêu thích
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="historyOrder"
                        onClick={() => {
                          router.push("/profile-desktop");
                        }}
                      >
                        Lịch sử đơn hàng
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="historyBooking"
                        onClick={() => {
                          router.push("/profile-desktop");
                        }}
                      >
                        Lịch sử đặt bàn
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="shippingAddress"
                        onClick={() => {
                          router.push("/profile-desktop");
                        }}
                      >
                        Sổ địa chỉ
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>

                {/* <div className="portlet light bordered">
                  <div className="row list-separated profile-stat">
                    <div className="col-md-4 col-sm-4 col-xs-6">
                      <div className="uppercase profile-stat-title"> 37 </div>
                      <div className="uppercase profile-stat-text"> Projects </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-6">
                      <div className="uppercase profile-stat-title"> 51 </div>
                      <div className="uppercase profile-stat-text"> Tasks </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-6">
                      <div className="uppercase profile-stat-title"> 61 </div>
                      <div className="uppercase profile-stat-text"> Uploads </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="profile-desc-title">About Jason Davis</h4>
                    <span className="profile-desc-text">
                      {" "}
                      Lorem ipsum dolor sit amet diam nonummy nibh dolore.{" "}
                    </span>
                    <div className="margin-top-20 profile-desc-link">
                      <i className="fa fa-globe"></i>
                      <a href="https://www.apollowebstudio.com">apollowebstudio.com</a>
                    </div>
                    <div className="margin-top-20 profile-desc-link">
                      <i className="fa fa-twitter"></i>
                      <a href="https://www.twitter.com/jasondavisfl/">@jasondavisfl</a>
                    </div>
                    <div className="margin-top-20 profile-desc-link">
                      <i className="fa fa-facebook"></i>
                      <a href="https://www.facebook.com/">JasonDavisFL</a>
                    </div>
                  </div>
                </div> */}
              </div>
            </Col>

            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="infor">
                  <TabInfor userDetail={user} />
                </Tab.Pane>

                <Tab.Pane eventKey="wishlist">
                  <WishlistShop />
                </Tab.Pane>

                <Tab.Pane eventKey="historyOrder">
                  <HistoryOrder />
                </Tab.Pane>
                <Tab.Pane eventKey="historyBooking">
                  <div className='mb-2'>
                    <h4 className="border-bottom">Lịch sử đặt hàng</h4>
                    <div className="d-flex gap-1 align-items-center mb-2">
                      <div className="d-flex gap-1 align-items-center">
                        <span>Từ ngày</span>
                        <input type="date" id="start" name="trip-start"
                          value={startDate}
                          onChange={handleChangeStartDate}
                        />
                      </div>
                      <div className="d-flex gap-1 align-items-center">
                        <span>Tới ngày</span>
                        <input type="date" id="end" name="trip-end"
                          value={endDate}
                          onChange={handleChangeEndDate}
                        />
                      </div>
                      <button onClick={handleSearch}>Tìm</button>
                    </div>
                    {
                      bookingData?.map(item =>
                        <div className="rounded bg-dark bg-opacity-10 p-2 mb-2" key={item.id}>
                          <p>Tên quán: {item.brandId}</p>
                        </div>

                      )
                    }
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="shippingAddress">
                  <ShippingAddress />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <MobileProfile />
    </>
  );
};

// Cart.getLayout = function getLayout(Page) {
//   return <Layout>{Page}</Layout>;
// };

export default Cart;
