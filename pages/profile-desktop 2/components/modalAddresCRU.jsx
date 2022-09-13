/**
 * @author [daoNguyen]
 * @email [daonds@vinorsoft.com ]
 * @create date 2022-08-26 17:01:35
 * @modify date 2022-08-26 17:01:35
 * @desc [description]
 */
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../store/globalState";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { adressApi } from '../../../api-client/adressApi';

function ModalAddresCRU({ text, clasNameCustom, item, setDefault, setStatus }) {
    const [addressData, setAddressData] = useState(item ? item : {})
    const { state, dispatch } = useContext(DataContext);
    const [show, setShow] = useState(false);
    const handleClose = () => { 
        setShow(false) 
        setStatus()
        setAddressData({})
    }
    const handleShow = () => setShow(true);
    const [cities, setCities] = useState([])
    const [areas, setAreas] = useState([])

    useEffect(() => {
        if (show) {
            cities?.length <= 0 ? getCities() : ''
            item ? getAreas(addressData.cityId) : ''
        }
    }, [show])

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await adressApi.setAddress(addressData)
            if (res && res.successful) {
                dispatch({ type: "NOTIFY", payload: { success: res.message ? res.message : "Đã tạo thành công" } });
                handleClose()
            }
            else {
                dispatch({ type: "NOTIFY", payload: { error: res.message ? res.message : "Đã xảy ra lỗi vui lòng kiểm tra lại dd" } });
            }
        } catch (error) {
            dispatch({ type: "NOTIFY", payload: { error: "Đã xảy ra lỗi vui lòng kiểm tra lại 123" } });
        }

    }

    const getCities = async () => {
        try {
            const res = await adressApi.getCities()
            setCities(res)
        } catch (error) {
            console.log('%cmodalAddresCRU.jsx line:15 error', 'color: #007acc;', error);
        }
    }

    const getAreas = async (id) => {
        try {
            const res = await adressApi.getAreasByCity(id)
            setAreas(res)
        } catch (error) {
            console.log('%cmodalAddresCRU.jsx line:15 error', 'color: #007acc;', error);
        }
    }


    const changeCities = async (e) => {
        let select = document.getElementById('cities-select')
        let option = select.options[select.selectedIndex];
        setAddressData({
            ...addressData,
            cityId: Number(option.value),
            // cityName: option.text
        })
        getAreas(option.value)
    }
    const changeArea = async (e) => {
        let select = document.getElementById('area-select')
        let option = select.options[select.selectedIndex];
        setAddressData({
            ...addressData,
            areaId: Number(option.value),
            // areaName: option.text
        })
    }

    return (
        <>
            <a className={clasNameCustom} onClick={handleShow}> {text}</a>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Tạo sổ địa chỉ</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={onSubmit} >
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="">Họ và tên</label>
                            </div>
                            <div className="col-8 input-form-profile">
                                <input required className="inputFomCustom w-100 rounded" onChange={(e) => setAddressData({ ...addressData, name: e.target.value })} value={addressData['name'] || ''} type="text" placeholder="Họ và tên" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="Số điện thoại">Số điện thoại</label>
                            </div>
                            <div className="col-8 input-form-profile">
                                <input required className="inputFomCustom w-100 rounded" onChange={(e) => setAddressData({ ...addressData, phone: e.target.value })} value={addressData['phone'] || ''} type="text" placeholder="Số điện thoại" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="Tỉnh/ Thành phố">Tỉnh/ Thành phố</label>
                            </div>
                            <div className="col-8 input-form-profile">
                                <select value={addressData.cityId || 0} name="day" id="cities-select" className="w-100 rounded p-1" onChange={changeCities}>
                                    <option value={0}>Tỉnh/ Thành phố</option>
                                    {cities?.map((item, index) =>
                                        <option key={item.id} value={Number(item.id)}>{item.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="Quận huyện">Quận huyện </label>
                            </div>
                            <div className="col-8 input-form-profile">
                                <select value={addressData.areaId || 0} name="day" id="area-select" className="w-100 rounded p-1" onChange={changeArea}>
                                    <option value={0}>Quận/ Huyện</option>
                                    {areas?.map((item, index) =>
                                        <option key={item.id} value={Number(item.id)} >{item.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="Địa chỉ:">Địa chỉ:</label>
                            </div>
                            <div className="col-8 input-form-profile">
                                <input required className="inputFomCustom w-100 rounded" onChange={(e) => setAddressData({ ...addressData, address: e.target.value })} value={addressData['address'] || ''} type="text" placeholder="Địa chỉ" />
                            </div>
                        </div>

                        {/* {item && 
                            <div className="text-center">
                                <div className="form-check form-switch text-center">
                                    <input defaultChecked={item['isDefault']} name="groundGender" onClick={() => setDefault(item.id)} value={item['isDefault'] || ''} className="form-check-input" type="radio" role="switch" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label color-success" htmlFor="flexSwitchCheckDefault">Đặt làm địa chỉ mặc định</label>
                                </div>
                            </div>
                        } */}

                        <div className="text-center">
                            <button type='submit' className='btn btn-outline-primary rounded mx-1'> Lưu</button>
                            <button type='button' onClick={handleClose} className="btn btn-outline-danger rounded mx-1"> Đóng</button>
                        </div>

                    </form>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalAddresCRU