import React, { useContext, useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { isMobile } from "react-device-detect";
import { FcAddImage } from "react-icons/fc";
import { BsChevronLeft } from "react-icons/bs";
import  Infor  from "../components/Infor"
import Card from 'react-bootstrap/Card';



import { useRouter } from "next/router";
import { DataContext } from "../../../store/globalState";
import { userApi } from "../../../api-client/user";
import Layout from "../../../components/Layout";

const editProfile = () => {
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
            <div className="">
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
                            <p className="profile-usertitle-job">Mobile</p>
                        </div>

                        <div className="profile-usermenu">
                            <Infor userDetail={user} />
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
