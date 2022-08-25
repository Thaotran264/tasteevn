import React, { useContext, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import OrderDetail from '../detailOrder'
import { BsPlusLg, BsChevronLeft } from 'react-icons/bs'
import HandleSort from "../../../profile/components/handleSort";
import { Card } from "react-bootstrap";
import ModalAddresCRU from "../modalAddresCRU";


const ShippingAddress = () => {
    const [_isMobile, setMobile] = useState(false);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    useEffect(() => {
        setMobile(isMobile);
    }, [_isMobile]);

    return (
        <div className="profile-content custom-card-hover">
            <Card className="">
                <Card.Body>
                    <div className="d-flex gap-3 text-center ">
                        {_isMobile &&
                            <a href="/profile">
                                <div>
                                    <BsChevronLeft />
                                </div>
                            </a>
                        }
                        <span className="w-100"><ModalAddresCRU clasNameCustom="text-primary pe-2" text={'Thêm mới địa chỉ'} /> <BsPlusLg /></span>
                    </div>
                </Card.Body>
            </Card>

            <div className="rounded w-100 bg-white p-2">
                <hr className="my-1" />
                <div className="p-2">
                    <div className="d-flex gap-1 justify-content-between">
                        <div className="">
                            <p className="date-order">TRẦN VĂN THẠO <i className="color-success">Địa chỉ mặc định </i> </p>
                            <p style={{ color: 'var(--bs-gray-600)' }}> Địa chỉ: <i className="text-dark">160/127 nguyễn văn quỳ, Phường Phú Thuận, Quận 7, Hồ Chí Minh</i> </p>
                            <p style={{ color: 'var(--bs-gray-600)' }}> Điện thoại: <i className="text-dark">0343703379</i> </p>
                        </div>
                        <div className="w-25">
                            <ModalAddresCRU clasNameCustom="text-primary" text={'Chỉnh sửa'} item={''} />
                        </div>
                    </div>
                </div>
                <hr />

                <div className="p-2">
                    <div className="d-flex gap-1 justify-content-between">
                        <div className="">
                            <p className="date-order">NGUYỄN DIÊN SỸ ĐẠO </p>
                            <p style={{ color: 'var(--bs-gray-600)' }}> Địa chỉ: <i className="text-dark">104/A10 đường số 2, phường 13, Quận 6, Hồ Chí Minh</i> </p>
                            <p style={{ color: 'var(--bs-gray-600)' }}> Điện thoại: <i className="text-dark">0961547511</i> </p>
                        </div>
                        <div className="w-25">
                            <ModalAddresCRU clasNameCustom="text-primary" text={'Chỉnh sửa'} item={''} />
                        </div>
                    </div>
                </div>
                <hr />

                <div className="p-2">
                    <div className="d-flex gap-1 justify-content-between">
                        <div className="">
                            <p className="date-order">NGUYỄN DIÊN SỸ ĐẠO </p>
                            <p style={{ color: 'var(--bs-gray-600)' }}> Địa chỉ: <i className="text-dark">104/A10 đường số 2, phường 13, Quận 6, Hồ Chí Minh</i> </p>
                            <p style={{ color: 'var(--bs-gray-600)' }}> Điện thoại: <i className="text-dark">0961547511</i> </p>
                        </div>
                        <div className="w-25">
                            <ModalAddresCRU clasNameCustom="text-primary" text={'Chỉnh sửa'} item={''} />
                        </div>
                    </div>
                </div>
                <hr />



                {/* <button
                    className="btn btn-outline-dark rounded mb-3"
                    style={{ fontSize: 14, opacity: 0.8 }}
                >
                    Xem thêm 
                </button> */}


            </div>
        </div>
    )
}

export default ShippingAddress