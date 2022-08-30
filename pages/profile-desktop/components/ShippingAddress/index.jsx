import React, { useContext, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import OrderDetail from '../detailOrder'
import { BsPlusLg, BsChevronLeft } from 'react-icons/bs'
import HandleSort from "../../../profile/components/handleSort";
import { Card } from "react-bootstrap";
import ModalAddresCRU from "../modalAddresCRU";
import { adressApi } from "../../../../api-client/adressApi";
import { DataContext } from "../../../../store/globalState";


const ShippingAddress = () => {
    const [_isMobile, setMobile] = useState(false);
    const { state, dispatch } = useContext(DataContext);
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

    const setDefault = async (id) => {
        try {
            const res = await adressApi.setDefault(id)
            if(res?.successful ){
                dispatch({ type: "NOTIFY", payload: { success: res.message ? res.message : "Đã tạo thành công" } });
                getData()
            }
            else{
                dispatch({ type: "NOTIFY", payload: { error: res.message ? res.message : "Đã xảy ra lỗi vui lòng kiểm tra lại" } });
            }
        } catch (error) {
            console.log('%cindex.jsx line:39 error', 'color: #007acc;', error);
        }
    }
    const handleDelete = async (id) => {
        try {
            const res = await adressApi.deleteAddress(id)
            if(res?.successful ){
                dispatch({ type: "NOTIFY", payload: { success: res.message ? res.message : "Đã tạo thành công" } });
                getData()
            }
            else{
                dispatch({ type: "NOTIFY", payload: { error: res.message ? res.message : "Đã xảy ra lỗi vui lòng kiểm tra lại" } });
            }
        } catch (error) {
            console.log('%cindex.jsx line:39 error', 'color: #007acc;', error);
        }
    }

    const setStatus = async () => {
        console.log('first setStatus')
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
                        <span className="w-100"><ModalAddresCRU clasNameCustom="text-primary pe-2" text={'Thêm mới địa chỉ'} setStatus={getData} /> <BsPlusLg /></span>
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
                                    <p className="date-order">{item.name}</p>
                                    <p style={{ color: 'var(--bs-gray-600)' }}> Địa chỉ: <i className="text-dark">{item.address}, {item.areaName}, {item.cityName}</i> </p>
                                    <p style={{ color: 'var(--bs-gray-600)' }}> Điện thoại: <i className="text-dark">{item.phone}</i> </p>

                                    <div className="text-center">
                                        <div className="form-check form-switch text-center">
                                            <input defaultChecked={item['isDefault']} name="groundGender" onClick={() => setDefault(item.id)} value={item['isDefault']} className="form-check-input" type="radio" role="switch" id="flexSwitchCheckDefault" />
                                            <label className="form-check-label color-success" htmlFor="flexSwitchCheckDefault">Đặt làm địa chỉ mặc định</label>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-20 d-flex gap-1" style={_isMobile ? {fontSize: 12} : {fontSize: 14}}>
                                    <ModalAddresCRU clasNameCustom="text-primary" text={'Chỉnh sửa'} item={item} setDefault={setDefault} setStatus={getData} />
                                     | <p type='button' onClick={() => handleDelete(item.id)} className="text-danger"> Xoá</p>
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