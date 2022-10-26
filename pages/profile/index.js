import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { isMobile } from "react-device-detect";
import { BsChevronRight, BsHeartFill } from "react-icons/bs";
import { FaAddressCard, FaClipboardList } from "react-icons/fa";
import { FcAddImage } from "react-icons/fc";
import { GoChecklist } from "react-icons/go";
import { userApi } from "../../api-client/user";
import Layout from "../../components/Layout";

import { useRouter } from "next/router";
import { Button, ListGroup } from "react-bootstrap";
import { DataContext } from "../../context/cartContext";
// import { DataContext } from "../../store/globalState";

const ProfileMobile = () => {
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

  // useEffect(() => {
  //   getDetailUser();
  // }, []);

  const getDetailUser = async () => {
    try {
      const res = await userApi.getUserInfor();
      if (res['successful']) {
        setUser(res['userInfo']);
      }
    } catch (error) {
      console.log(error)
      dispatch({ type: "NOTIFY", payload: { error: "Đã xảy ra lỗi vui lòng đăng nhập lại" } });
      sessionStorage.removeItem("userInfo");
      sessionStorage.removeItem("token");
      window.location.replace("/");
    }
  };

  const [username, setusername] = useState('');
  useEffect(() => {
    let user = sessionStorage.getItem("userInfo") ?  JSON.parse(sessionStorage.getItem("userInfo") || '' ) : null
    console.log('%cindex.js line:51 user', 'color: #007acc;', user);
    let userInfor = user
    console.log('%cindex.js line:50 userInfor', 'color: #007acc;', userInfor);
    if (userInfor) {
      setusername(userInfor);
    }
    else{
      router.push('/')
      handleLogOut('Đã xảy ra lỗi vui lòng đăng nhập')
    }
  }, []);


  const handleLogOut = (mess) => {
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("token");
    dispatch({ type: "NOTIFY", payload: { success: mess } });
    window.location.replace("/");
  };
  



  const menu = ["Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 5", "Menu 6"];
  const handleClick = (value) => {
    setCount(value);
  };
  const editField = (field) => {
    console.log("%cindex.js line:21 field", "color: #007acc;", field);
  };
  return (
    <>
      <div className="container profile-mobile custom-card-hover" style={{ height: "100vh" }}>
        <Card>
          <a href="/profile/edit">
            <Card.Body className="p-3">
              <div className="d-flex gap-1">
                <div className="w-25">
                  {username && username["avatar"] ? (
                    <img
                      className=""
                      src={username["avatar"]}
                      alt={username["fullName"]}
                      style={{ border: "1px solid #fff", borderRadius: "50%", height: 80, width: 80 }}
                    />
                  ) : (
                    <FcAddImage
                      className="w-75 h-100 rounded-circle border"
                      style={{ border: "1px solid #fff", borderRadius: "50%" }}
                    />
                  )}
                </div>

                <div className="w-75 pt-2 pb-2">
                  <h3 className="profile-usertitle-name m-0"> {username && username["fullName"] || ""} </h3>
                  {/* <span className="profile-stat-text"> {username && username["status"] ? 'Đã kích hoạt' : "Chưa kích hoạt"} </span> */}
                </div>

                <div>
                  <BsChevronRight />
                </div>
              </div>
            </Card.Body>
          </a>
        </Card>

        <Card className="m-1">
          <a href="/profile/order?slug=lich-su-don-hang">
            <Card.Body>
              <div className="d-flex gap-3">
                <div>
                  <FaClipboardList />
                </div>

                <span className="w-100">Quản lý đơn hàng</span>

                <div>
                  <BsChevronRight />
                </div>
              </div>
            </Card.Body>
          </a>
        </Card>

        <Card className="m-1">
          <a href="/profile/wishlist?slug=san-pham-yeu-thich">
            <Card.Body>
              <div className="d-flex gap-3">
                <div>
                  <BsHeartFill />
                </div>

                <span className="w-100"> Quán yêu thích </span>

                <div>
                  <BsChevronRight />
                </div>
              </div>
            </Card.Body>
          </a>
        </Card>

        <Card className="m-1">
          <a href="/profile/edit">
            <Card.Body>
              <div className="d-flex gap-3">
                <div>
                  <GoChecklist />
                </div>

                <span className="w-100"> Quản lý đặt chỗ</span>

                <div>
                  <BsChevronRight />
                </div>
              </div>
            </Card.Body>
          </a>
        </Card>

        <Card className="m-1">
          <a href="/profile/adress?slug=so-dia-chi">
            <Card.Body>
              <div className="d-flex gap-3">
                <div>
                  <FaAddressCard />
                </div>

                <span className="w-100">Sổ địa chỉ </span>

                <div>
                  <BsChevronRight />
                </div>
              </div>
            </Card.Body>
          </a>
        </Card>

        <div className="m-3">
          <Button variant="outline-danger" className="w-100 rounded" onClick={() => handleLogOut('Đăng xuất thành công')}>
            Đăng xuất
          </Button>
        </div>
      </div>
    </>
  );
};

ProfileMobile.getLayout = function getLayout(Page) {
  return <Layout>{Page}</Layout>;
};

export default ProfileMobile;
