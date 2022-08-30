import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import Layout from "../../components/Layout";
import LayoutProfile from "../../components/LayoutProfile";
import DesktopMenu from "../../components/Menu/DesktopMenu";
import { userApi } from "../../api-client/user";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { isMobile } from "react-device-detect";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { FcAddImage } from "react-icons/fc";

import Form from "react-bootstrap/Form";
import TabInfor from "./components/Infor";
import HistoryOrder from "./components/HistoryOrder";
import { DataContext } from "../../store/globalState";
import { useRouter } from "next/router";
import WishlistShop from "./components/wishlistShop";
import ShippingAddress from "./components/ShippingAddress";

const Cart = () => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const [isShowContent, setIsShowContent] = useState({});
  const { state, dispatch } = useContext(DataContext);
  const router = useRouter();

  const [_isMobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile);
    isMobile ? router.push("/profile") : router.push("/profile-desktop?slug=chinh-sua-thong-tin");
  }, [_isMobile]);
  useEffect(() => {
    const getDetailUser = async () => {
      try {
        const res = await userApi.getUserInfor();
        if (res['successful']) {
          setUser(res['userInfo']);
        }
      } catch (error) {
        dispatch({ type: "NOTIFY", payload: { error: "Đã xảy ra lỗi vui lòng đăng nhập lại" } });
        localStorage.removeItem("userInfo");
        localStorage.removeItem("token");
        window.location.replace("/");
      }
    };
    getDetailUser();
  }, []);
  const menu = ["Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 5", "Menu 6"];
  const handleClick = (value) => {
    setCount(value);
  };
  const editField = (field) => {
    console.log("%cindex.js line:21 field", "color: #007acc;", field);
  };
  return (
    <>
      <div className="container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="infor">
          <Row>
            <Col sm={3}>
              <div className="profile-sidebar pt-2">
                <div className="profile-userpic">
                  <div className="">
                    {user && user["avatar"] ? (
                      <img
                        // className="w-100 h-100"
                        src={user["avatar"] || ''}
                        alt={user["fullName"]}
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
                          router.push("/profile-desktop?slug=chinh-sua-thong-tin");
                        }}
                      >
                        Thông tin chung
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="wishlist"
                        onClick={() => {
                          router.push("/profile-desktop?slug=danh-sach-yeu-thich");
                        }}
                      >
                        Quán yêu thích
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="historyOrder"
                        onClick={() => {
                          router.push("/profile-desktop?slug=lich-su-don-hang");
                        }}
                      >
                        Lịch sử đơn hàng
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="historyBooking"
                        onClick={() => {
                          router.push("/profile-desktop?slug=lich-su-dat-ban");
                        }}
                      >
                        Lịch sử đặt bàn
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="shippingAddress"
                        onClick={() => {
                          router.push("/profile-desktop?slug=so-dia-chi");
                        }}
                      >
                        Sổ địa chỉ
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>

                <div className="portlet light bordered">
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
                </div>
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
                <Tab.Pane eventKey="historyBooking">Lịch sử Đặt bàn body</Tab.Pane>
                <Tab.Pane eventKey="shippingAddress">
                  <ShippingAddress />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
};

Cart.getLayout = function getLayout(Page) {
  return <Layout>{Page}</Layout>;
};

export default Cart;
