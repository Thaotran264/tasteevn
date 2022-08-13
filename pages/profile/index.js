import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import Layout from "../../components/Layout";
import LayoutProfile from "../../components/LayoutProfile";
import DesktopMenu from "../../components/Menu/DesktopMenu";
import NavbarSecond from "../../components/NavbarSecond";
import { userApi } from "../../api-client/user";
import Button from "react-bootstrap/Button";
import CollapseCustom from "./components/CollapseCustom";
import Accordion from "react-bootstrap/Accordion";
import { isMobile } from "react-device-detect";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { FcAddImage } from "react-icons/fc"


import Form from 'react-bootstrap/Form';
import TabInfor from "./components/TabInfor";
import { DataContext } from "../../store/globalState";
import { useRouter } from "next/router";

const Cart = () => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({});

  const [open, setOpen] = useState(false);
  const [_isMobile, setMobile] = useState(false);
  const [isShowContent, setIsShowContent] = useState({});
  const { state, dispatch } = useContext(DataContext);
  const router = useRouter();

  useEffect(() => {
    setMobile(isMobile);
  }, [_isMobile]);

  useEffect(() => {
    const getDetailUser = async () => {
      try {
        const res = await userApi.getDetail();
        if (res.status && res.data.successful) {
          setUser(res.data.data);
        }
      } catch (error) {
        dispatch({ type: "NOTIFY", payload: { error: 'Đã xảy ra lỗi vui lòng đăng nhập lại' } });
        localStorage.removeItem("userInfo");
        localStorage.removeItem("token");
        window.location.replace('/');
      }
    };
    getDetailUser();
  }, []);

  console.log("%cindex.js line:14 user", "color: #007acc;", user);

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

            <Col sm={_isMobile ? 12 : 3}>
              <div className="profile-sidebar pt-2">
                <div className="profile-userpic">
                  <div className="">
                    {user && user['avatar'] ?
                      <img
                        className="w-100 h-100"
                        src={user['avatar']}
                        alt={user['fullName']}
                        style={{ border: "1px solid #fff", borderRadius: "50%" }}
                      />
                      :
                      <FcAddImage className="w-75 h-75 rounded-circle border" style={{ border: "1px solid #fff", borderRadius: "50%" }} />
                    }
                  </div>
                </div>
                <div className="profile-usertitle text-center">
                  <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                    <h2 className="profile-usertitle-name"> {user['fullName'] || ""} </h2>
                  </div>
                  <p className="profile-usertitle-job">Kim cương</p>
                </div>
                <div className="profile-usermenu">
                  {!_isMobile && (
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="infor">Thông tin chung</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="wishlist">Danh sách yêu thích</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="historyOrder">Lịch sử đơn hàng</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="historyBooking">Lịch sử đặt bàn</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  )}

                  {_isMobile && (
                    <Accordion defaultActiveKey="0" flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Thông tin chung</Accordion.Header>
                        <Accordion.Body>Nội dung Thông tin chung</Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Danh sách yêu thích</Accordion.Header>
                        <Accordion.Body>
                          <div className="row py-3">
                            <div className="showOnDesktop col-12 align-items-center justify-content-between mb-2">
                              <img
                                src="https://images.pexels.com/photos/12577819/pexels-photo-12577819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                style={{ width: 100, height: 100, objectFit: "cover" }}
                              />
                              <h2>Name of product</h2>
                              <h6>Price of product</h6>
                              <div className="d-flex align-items-center">
                                <button className="btn btn-outline-dark">-</button>
                                <span className="mx-2 text-danger">{count}</span>
                                <button className="btn btn-outline-dark">+</button>
                              </div>
                              <button className="btn btn-danger">x</button>
                            </div>
                            <div className="d-flex col-12 align-items-center justify-content-between hideOnDeskTop">
                              <img
                                src="https://images.pexels.com/photos/12577819/pexels-photo-12577819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                style={{ width: 100, height: 100, objectFit: "cover" }}
                              />
                              <div className="">
                                <h2>Name of product</h2>
                                <h6 className="text-danger">Price of product</h6>
                                <div className="d-flex align-items-center">
                                  <button className="btn btn-outline-dark">-</button>
                                  <span className="mx-2 text-danger">{count}</span>
                                  <button className="btn btn-outline-dark">+</button>
                                </div>
                              </div>
                              <button className="btn btn-danger">x</button>
                            </div>
                            <hr />
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Lịch sử đơn hàng</Accordion.Header>
                        <Accordion.Body>
                          <div className="row py-3">
                            <div className=" col-12 align-items-center justify-content-between mb-2">
                              <img
                                src="https://images.pexels.com/photos/12577819/pexels-photo-12577819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                style={{ width: 100, height: 100, objectFit: "cover" }}
                              />
                              <h6>Name of product</h6>
                              <p>Price of product</p>
                              <div className="d-flex align-items-center">
                                <button className="btn btn-outline-dark">-</button>
                                <span className="mx-2 text-danger">{count}</span>
                                <button className="btn btn-outline-dark">+</button>
                              </div>
                              <button className="btn btn-danger">x</button>
                            </div>
                            <hr />
                            <div className=" col-12 align-items-center justify-content-between mb-2">
                              <img
                                src="https://images.pexels.com/photos/12577819/pexels-photo-12577819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                style={{ width: 100, height: 100, objectFit: "cover" }}
                              />
                              <h6>Name of product</h6>
                              <p>Price of product</p>
                              <div className="d-flex align-items-center">
                                <button className="btn btn-outline-dark">-</button>
                                <span className="mx-2 text-danger">{count}</span>
                                <button className="btn btn-outline-dark">+</button>
                              </div>
                              <button className="btn btn-danger">x</button>
                            </div>
                            <hr />
                            <div className=" col-12 align-items-center justify-content-between mb-2">
                              <img
                                src="https://images.pexels.com/photos/12577819/pexels-photo-12577819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                style={{ width: 100, height: 100, objectFit: "cover" }}
                              />
                              <h6>Name of product</h6>
                              <p>Price of product</p>
                              <div className="d-flex align-items-center">
                                <button className="btn btn-outline-dark">-</button>
                                <span className="mx-2 text-danger">{count}</span>
                                <button className="btn btn-outline-dark">+</button>
                              </div>
                              <button className="btn btn-danger">x</button>
                            </div>
                            <hr />
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Lịch sử đặt bàn</Accordion.Header>
                        <Accordion.Body>Nội dung Lịch sử đặt bàn</Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  )}
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

            {!_isMobile &&
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="infor">
                    <TabInfor userDetail={user} />
                  </Tab.Pane>

                  <Tab.Pane eventKey="wishlist">
                    Danh sách yêu thích
                  </Tab.Pane>
                  
                  <Tab.Pane eventKey="historyOrder">
                    <div className="profile-content">
                      <h6>Thông tin đơn hàng</h6>
                      <ul
                        className="d-flex ps-0 justify-content-around"
                        style={{ listStyle: "none", backgroundColor: "#fff" }}
                      >
                        <li className="p-2 text-center" style={{ cursor: "pointer", fontSize: 14 }}>
                          Tất cả đơn
                        </li>
                        <li className="p-2 text-center" style={{ cursor: "pointer", fontSize: 14 }}>
                          Chờ thanh toán
                        </li>
                        <li className="p-2 text-center" style={{ cursor: "pointer", fontSize: 14 }}>
                          Đang xử lý
                        </li>
                        <li className="p-2 text-center" style={{ cursor: "pointer", fontSize: 14 }}>
                          Đang vận chuyển
                        </li>
                        <li className="p-2 text-center" style={{ cursor: "pointer", fontSize: 14 }}>
                          Đã giao
                        </li>
                        <li className="p-2 text-center" style={{ cursor: "pointer", fontSize: 14 }}>
                          Đã huỷ
                        </li>
                      </ul>
                      <form className="w-100 mb-3 position-relative">
                        <input
                          type="text"
                          className="w-100 px-2 py-2"
                          style={{ border: "none", outline: "none" }}
                        />
                        <button
                          className="px-4 text-primary position-absolute end-0 "
                          style={{
                            top: "50%",
                            transform: "translateY(-50%)",
                            border: "none",
                            outline: "none",
                            backgroundColor: "#fff",
                            fontSize: 14,
                            borderLeft: "1px solid blue",
                          }}
                        >
                          Tìm
                        </button>
                      </form>
                      <div className="rounded w-100 bg-white p-2">
                        <h6 className="" style={{ fontSize: 14, opacity: 0.8 }}>
                          Giao hàng thành công
                        </h6>
                        <hr className="my-1" />
                        <div className="row">
                          <div className="col-2">
                            <img
                              src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600"
                              alt=""
                              className="img-thumbnail w-100 h-100"
                            />
                          </div>
                          <div className="col-8">Name of product</div>
                          <div className="col-2 text-end">200.000 $</div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-2">
                            <img
                              src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                              alt=""
                              className="img-thumbnail w-100 h-100"
                            />
                          </div>
                          <div className="col-8">Name of product</div>
                          <div className="col-2 text-end">150.000 $</div>
                        </div>
                        <hr />
                        <button
                          className="btn btn-outline-dark rounded mb-3"
                          style={{ fontSize: 14, opacity: 0.8 }}
                        >
                          Xem thêm 1 sản phẩm
                        </button>
                        <h6 className="text-end">
                          <span style={{ opacity: 0.8, fontSize: 18, fontWeight: 300 }}>Tổng tiền:</span>{" "}
                          350.000$
                        </h6>
                        <div className="d-flex justify-content-end">
                          <button
                            className="btn btn-outline-primary rounded mx-1"
                            style={{ fontSize: 13 }}
                          >
                            Mua lại
                          </button>
                          <button
                            className="btn btn-outline-primary rounded mx-1"
                            style={{ fontSize: 13 }}
                          >
                            Xem chi tiết
                          </button>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="historyBooking">
                    Lịch sử Đặt bàn
                  </Tab.Pane>
                </Tab.Content>
              </Col>}

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
