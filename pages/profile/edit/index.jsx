import React, { useContext, useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { isMobile } from "react-device-detect";
import { FcAddImage } from "react-icons/fc";
import { BsChevronLeft } from "react-icons/bs";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Infor from "../components/Infor"
import Card from 'react-bootstrap/Card';



import { useRouter } from "next/router";
import { userApi } from "../../../api-client/user";
import Layout from "../../../components/Layout";
import Image from "next/image";
import { CartContext } from "../../../context/cartContext";

const editProfile = () => {
    const [count, setCount] = useState(1);
    const [user, setUser] = useState({});
    const [isUpload, setIsUpload] = useState(false);

    const [open, setOpen] = useState(false);
    const [_isMobile, setMobile] = useState(false);
    const [isShowContent, setIsShowContent] = useState({});
    const { state, dispatch } = useContext(CartContext);
    const router = useRouter();

    useEffect(() => {
        setMobile(isMobile);
        isMobile ? '' : router.push("/profile-desktop?slug=chinh-sua-thong-tin")
    }, [_isMobile]);

    const upload = (e) => {
        setIsUpload(true)
        setUser({ ...user, avatar: e.target.files[0] })
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function () {
            var output = document.getElementById('prevew-img');
            output.src = reader.result ? reader.result : '';
        };
        console.log(reader)

    }

    useEffect(() => {
        const getDetailUser = async () => {
          try {
            const res = await userApi.getUserInfor();
            if (res['successful']) {
              setUser(res['data'].userInfo);
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
            <div className="custom-card-hover">
                <Tab.Container id="left-tabs-example" defaultActiveKey="infor">
                    <Card className="">
                        <Card.Body>
                            <div className="d-flex gap-3 text-center">
                                <a href="/profile">
                                    <div>
                                        <BsChevronLeft />
                                    </div>
                                </a>
                                <span className="w-100">Thông tin tài khoản</span>
                            </div>
                        </Card.Body>
                    </Card>

                    <div className="profile-sidebar p-2">
                        <div className="profile-userpic">
                            <div className="">
                                <div className="wrapper">
                                    <div className="file-upload avata-input">
                                        <input type="file" onChange={(e) => upload(e)} />

                                       { isUpload && 
                                        <img
                                                id="prevew-img"
                                                className="w-100 h-100"
                                                src={''}
                                                alt={user && user['fullName'] || ''}
                                                style={{ border: "1px solid #fff", borderRadius: "50%" }}
                                            />
                                        }

                                        {user && user['avatar'] && !isUpload ?
                                            <>
                                                <img
                                                    className="w-100 h-100"
                                                    src={user && user['avatar'] || ''}
                                                    alt={user && user['fullName'] || ''}
                                                    style={{ border: "1px solid #fff", borderRadius: "50%" }}
                                                />
                                            </>
                                            :
                                            <AiOutlineCloudUpload />
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="profile-usertitle text-center">
                            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                                <h2 className="profile-usertitle-name"> {user['fullName'] || ""} </h2>
                            </div>
                            <p className="profile-usertitle-job">{user["phoneNumber"] || ""}</p>
                        </div>

                        <div className="profile-usermenu">
                            <Infor userDetail={user } />
                        </div>
                    </div>
                </Tab.Container>
            </div>
        </>
    );
};

editProfile.getLayout = function getLayout(Page) {
    return <Layout>{Page}</Layout>;
};

export default editProfile;
