import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { AiFillFilter, AiOutlineHome, AiOutlinePlus } from 'react-icons/ai';
import { BsChevronLeft } from "react-icons/bs";
import { FcAddImage } from 'react-icons/fc';
import { bookingApi, cityApi, distApi, wardsApi } from "../../api-client";
import { userApi } from "../../api-client/user";
import HistoryOrder from "../../components/HistoryOrder";
import TabInfor from "../../components/Infor";
import LichSuDatHen from "../../components/LichSuDatHen";
import MobileProfile from "../../components/MobileProfile";
import NavComponent from "../../components/Nav";
import SoDiaChi from "../../components/SoDiaChi";
import WishlistShop from "../../components/wishlistShop";
import { CartContext } from "../../context/cartContext";


const Profile = () => {
  const [user, setUser] = useState({});
  const { state, dispatch } = useContext(CartContext);
  const { auth } = state
  console.log('au', auth)

  useEffect(() => {
    const getDetailUser = async () => {
      try {
        const res = await userApi.getUserInfor();
        console.log('data', res)
        if (res['successful']) {
          setUser(res['data'].userInfo);
        }
      } catch (error) {
        console.log(error)
      }
    };
    getDetailUser();
  }, []);
  return (
    <>
      <NavComponent />
      <div className="container hideOnMobile" style={{ marginTop: 54 }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="infor">
          <Row style={{ minHeight: 'calc(100vh - 54px)' }}>
            <Col sm={3} style={{ backgroundColor: "#fff" }}>
              <div className="profile-userpic py-2">
                <div className="">
                  {user && user["avatar"] ? (
                    <Image
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
              <div className="">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="infor"
                    >
                      Thông tin chung
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="wishlist"
                    >
                      Quán yêu thích
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="historyOrder"
                    >
                      Lịch sử đơn hàng
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="historyBooking"
                    >
                      Lịch sử đặt hẹn
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="shippingAddress"
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
                  <LichSuDatHen />
                </Tab.Pane>

                <Tab.Pane eventKey="shippingAddress">
                  <SoDiaChi/>
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

export default Profile;
