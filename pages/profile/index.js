import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import Layout from "../../components/Layout";
import LayoutProfile from "../../components/LayoutProfile";
import DesktopMenu from "../../components/Menu/DesktopMenu";
import NavbarSecond from "../../components/NavbarSecond";
import { AiFillEdit, AiFillSave } from "react-icons/ai";
import { userApi } from "../../api-client/user";
import Button from "react-bootstrap/Button";
import CollapseCustom from "./components/CollapseCustom";
import Accordion from "react-bootstrap/Accordion";
import { isMobile } from "react-device-detect";

const Cart = () => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({});
  const [fieldEdit, setFieldEdit] = useState({
    editFullName: false,
  });
  const [open, setOpen] = useState(false);
  const [_isMobile, setMobile] = useState(false);
  const [ls, setLs] = useState(false);
  useEffect(() => {
    setMobile(isMobile);
  }, [_isMobile]);

  useEffect(() => {
    const getDetailUser = async () => {
      try {
        const res = await userApi.getDetail();
        console.log("%cindex.js line:21 res", "color: #007acc;", res.status);
        if (res.status && res.data.successful) {
          setUser(res.data.data);
        }
      } catch (error) {
        console.log(error);
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
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-lg-3">
          <div className="profile-sidebar pt-2">
            <div className="profile-userpic">
              <img
                src={`https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png`}
                className="img-responsive"
                alt=""
              />
            </div>
            <div className="profile-usertitle text-center">
              <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                {!fieldEdit.editFullName && (
                  <h2 className="profile-usertitle-name"> {user.fullName || ""} </h2>
                )}
                {!fieldEdit.editFullName ? (
                  <a
                    onClick={() =>
                      setFieldEdit({ ...fieldEdit, editFullName: !fieldEdit.editFullName })
                    }
                  >
                    {" "}
                    <AiFillEdit />
                  </a>
                ) : (
                  <a
                    onClick={() =>
                      setFieldEdit({ ...fieldEdit, editFullName: !fieldEdit.editFullName })
                    }
                  >
                    {" "}
                    <AiFillSave />
                  </a>
                )}
              </div>
              {fieldEdit.editFullName && (
                <input
                  type="text"
                  className="border-dark border-bottom"
                  placeholder="Tên"
                  value={user?.fullName}
                  style={{
                    border: "none",
                    outline: "none",
                    paddingBottom: "5px",
                  }}
                />
              )}
              <p className="profile-usertitle-job">Developer</p>
            </div>
            <div className="profile-usermenu">
              {!_isMobile && (
                <ul className="nav">
                  <li className="active w-100">
                    <a onClick={() => setLs(!ls)}>
                      <i className=" glyphicon glyphicon-home"></i> Thông tin chung
                    </a>
                  </li>
                  <li className="w-100">
                    <a href="#">
                      <i className="glyphicon glyphicon-user"></i>Danh sách yêu thích
                    </a>
                  </li>
                  <li className="w-100">
                    <a href="#" target="_blank">
                      <i className="glyphicon glyphicon-ok"></i>Lịch sử đơn hàng
                    </a>
                  </li>
                  <li className="w-100">
                    <a href="#">
                      <i className="glyphicon glyphicon-flag"></i>Lịch sử đặt bàn
                    </a>
                  </li>
                </ul>
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
        </div>

        {!_isMobile && (
          <div className="col-md-9">
            {ls && (
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
            )}
            <div className="profile-content">
              <h5>Thông tin tài khoản</h5>
              <div className="rounded w-100 bg-white p-3">
                <div className="row">
                  <div className="col-7">
                    <h6 className="" style={{ fontSize: 14, opacity: 0.8 }}>
                      Thông tin cá nhân
                    </h6>
                    <div className="row">
                      <div className="col-3">
                        <img
                          className="w-100 h-100"
                          src="https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png"
                          alt=""
                          style={{ border: "1px solid #fff", borderRadius: "50%" }}
                        />
                      </div>
                      <div className="col-3">
                        <span>Họ và tên</span>
                      </div>
                      <div className="col-6">
                        <input type="text" />
                      </div>
                      <div className="col-3">Ngày sinh</div>
                      <div className="col-9">
                        <input type="date" />
                      </div>
                      <div className="col-3">
                        <span>Giới tính</span>
                      </div>
                      <div className="col-9">
                        <input type="radio" />
                      </div>
                      <div className="col-3 mb-3">
                        <span>Quốc tịch</span>
                      </div>
                      <div className="col-9">
                        <input type="select" />
                      </div>
                      <div className="col-3"></div>
                      <div className="col-9">
                        <button className="btn btn-primary px-5 rounded">Lưu thay đổi</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <h5 className="" style={{ fontSize: 14, opacity: 0.8 }}>
                      Số điện thoại và email
                    </h5>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span className="" style={{ fontSize: 14 }}>
                        Số điện thoại
                        <br></br>
                        <span className="" style={{ opacity: 0.8 }}>
                          0334 34 34 34
                        </span>
                      </span>
                      <button
                        className="btn btn-outline-primary rounded px-3"
                        style={{ fontSize: 13 }}
                      >
                        Cập nhật
                      </button>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="" style={{ fontSize: 14 }}>
                        Địa chỉ email
                        <br />
                        <span className="" style={{ opacity: 0.8 }}>
                          rmtran@gmail.com
                        </span>
                      </span>
                      <button
                        className="btn btn-outline-primary rounded px-3"
                        style={{ fontSize: 13 }}
                      >
                        Cập nhật
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Cart.getLayout = function getLayout(Page) {
  return <Layout>{Page}</Layout>;
};

export default Cart;
