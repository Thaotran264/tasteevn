import React, { useContext, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import OrderDetail from '../detailOrder'
import { BsPlusLg, BsChevronLeft } from 'react-icons/bs'
import HandleSort from "../../../profile/components/handleSort";
import { Card } from "react-bootstrap";
import ModalAddresCRU from "../modalAddresCRU";
import { adressApi } from "../../../../api-client/adressApi";


const ShippingAddress = () => {
    const [_isMobile, setMobile] = useState(false);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const [dataAddres, setDataAddres] = useState([]);
    useEffect(() => {
        setMobile(isMobile);
    }, [_isMobile]);

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        try {
            const res = await adressApi.getAddress()
            setDataAddres(res)
        } catch (error) {
            console.log(error)
        }
    }

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
                {dataAddres && dataAddres.map((item =>
                    <div key={item.id}>
                        <div className="p-2" >
                            <div className="d-flex gap-1 justify-content-between">
                                <div className="">
                                    <p className="date-order">{item.name}
                                        {/* <i className="color-success">Địa chỉ mặc định</i> */}
                                    </p>
                                    <p style={{ color: 'var(--bs-gray-600)' }}> Địa chỉ: <i className="text-dark">{item.address}, {item.area}, {item.city}</i> </p>
                                    <p style={{ color: 'var(--bs-gray-600)' }}> Điện thoại: <i className="text-dark">{item.phone}</i> </p>
                                </div>
                                <div className="w-25">
                                    <ModalAddresCRU clasNameCustom="text-primary" text={'Chỉnh sửa'} item={item} />
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}


            </div>
        </div>
    )
}

export default ShippingAddress