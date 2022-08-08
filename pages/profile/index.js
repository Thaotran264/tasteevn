import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import Layout from "../../components/Layout";
import LayoutProfile from "../../components/LayoutProfile";
import DesktopMenu from "../../components/Menu/DesktopMenu";
import NavbarSecond from "../../components/NavbarSecond";
import { AiFillEdit, AiFillSave } from 'react-icons/ai'
import { userApi } from "../../api-client/user";
import Button from 'react-bootstrap/Button';
import CollapseCustom from "./components/CollapseCustom";
import Accordion from 'react-bootstrap/Accordion';
import { isMobile } from "react-device-detect";

const Cart = () => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({});
  const [fieldEdit, setFieldEdit] = useState({
    editFullName: false,
  });
  const [open, setOpen] = useState(false);
  const [_isMobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(isMobile);
  }, [_isMobile]);


  useEffect(() => {
    const getDetailUser = async () => {
      try {
        const res = await userApi.getDetail()
        console.log('%cindex.js line:21 res', 'color: #007acc;', res.status);
        if (res.status && res.data.successful) {
          setUser(res.data.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getDetailUser()
  }, [])

  console.log('%cindex.js line:14 user', 'color: #007acc;', user);

  const menu = ["Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 5", "Menu 6"];
  const handleClick = (value) => {
    setCount(value);
  };
  const editField = (field) => {
    console.log('%cindex.js line:21 field', 'color: #007acc;', field);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-lg-3">
          <div className="profile-sidebar pt-2">
            <div className="profile-userpic">
              <img src={`https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png`} className="img-responsive" alt="" />
            </div>
            <div className="profile-usertitle text-center">
              <div style={{ display: 'flex', gap: 10, justifyContent: "center" }}>
                {!fieldEdit.editFullName && <h2 className="profile-usertitle-name">  {user.fullName || ''} </h2>}
                {!fieldEdit.editFullName ?
                  <a onClick={() => setFieldEdit({ ...fieldEdit, editFullName: !fieldEdit.editFullName })}> <AiFillEdit /></a>
                  : <a onClick={() => setFieldEdit({ ...fieldEdit, editFullName: !fieldEdit.editFullName })}> <AiFillSave /></a>}
              </div>
              {fieldEdit.editFullName && <input type="text" className="border-dark border-bottom" placeholder="Tên" value={user?.fullName} style={{
                border: 'none',
                outline: 'none',
                paddingBottom: '5px'
              }} />}
              <p className="profile-usertitle-job">
                Developer
              </p>
            </div>
            <div className="profile-usermenu">
              {!_isMobile &&
                <ul className="nav">
                  <li className="active w-100">
                    <a href="#">
                      <i className=" glyphicon glyphicon-home"></i> Thông tin chung
                    </a>
                  </li>
                  <li className="w-100">
                    <a href="#">
                      <i className="glyphicon glyphicon-user"></i>Danh sách yêu thích</a>
                  </li>
                  <li className="w-100">
                    <a href="#" target="_blank">
                      <i className="glyphicon glyphicon-ok"></i>Lịch sử đơn hàng</a>
                  </li>
                  <li className="w-100">
                    <a href="#">
                      <i className="glyphicon glyphicon-flag"></i>Lịch sử đặt bàn</a>
                  </li>
                </ul>
              }

              {_isMobile &&
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Thông tin chung</Accordion.Header>
                    <Accordion.Body>
                      Nội dung Thông tin chung
                    </Accordion.Body>
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
                    <Accordion.Body>
                      Nội dung  Lịch sử đặt bàn
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              }
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
                <span className="profile-desc-text"> Lorem ipsum dolor sit amet diam nonummy nibh dolore. </span>
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

        {!_isMobile &&
          <div className="col-md-9">
            <div className="profile-content">
              <h1>jịidsjđíịđị</h1>
              <h1>jịidsjđíịđị</h1>
              <h1>jịidsjđíịđị</h1>
              <h1>jịidsjđíịđị</h1>
            </div>
          </div>
        }
      </div>

    </div>
  );
};




Cart.getLayout = function getLayout(Page) {
  return (
    <Layout>{Page}</Layout>
  )
}

export default Cart;
