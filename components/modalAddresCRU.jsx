/**
 * @author [daoNguyen]
 * @email [daonds@vinorsoft.com ]
 * @create date 2022-08-26 17:01:35
 * @modify date 2022-08-26 17:01:35
 * @desc [description]
 */
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineClose, AiOutlineSave } from 'react-icons/ai'
import { adressApi } from "../api-client/adressApi";
import { CartContext } from "../context/cartContext";
// import { DataContext } from "../store/globalState";

function ModalAddresCRU({ text, clasNameCustom, item, setDefault, setStatus }) {
    const [addressData, setAddressData] = useState(item ? item : {})
    const { dispatch } = useContext(CartContext);
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
            setAddressData(item)
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
                dispatch({ type: "NOTIFY", payload: { error: res.message ? res.message : "Đã xảy ra lỗi vui lòng kiểm tra lại " } });
            }
        } catch (error) {
            dispatch({ type: "NOTIFY", payload: { error: "Đã xảy ra lỗi vui lòng kiểm tra lại " } });
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
            console.log('%c error getAreas', 'color: #007acc;', error);
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
                    <form onSubmit={onSubmit} className='d-flex flex-column gap-3 mb-2'>
                        <Row className="d-flex align-items-center">
                            <Col md={4}>
                                <span>Họ và tên:</span>
                            </Col>
                            <Col md={8}>
                                <input
                                    required
                                    className="w-100 rounded px-2 py-1"
                                    style={{borderWidth: 1}}
                                    onChange={(e) => setAddressData({ ...addressData, name: e.target.value })}
                                    value={addressData && addressData['name'] || ''} type="text"
                                    placeholder="Họ và tên" />
                            </Col>
                        </Row>
                        <Row className="d-flex align-items-center">
                            <Col md={4}>
                                <span>Số điện thoại:</span>
                            </Col>
                            <Col md={8}>
                                <input
                                    required
                                    className="w-100 rounded px-2 py-1"
                                    style={{borderWidth: 1}} onChange={(e) => setAddressData({ ...addressData, phone: e.target.value })} value={addressData && addressData['phone'] || ''} type="text" placeholder="Số điện thoại" />
                            </Col>
                        </Row>
                        <Row className="d-flex align-items-center">
                            <Col md={4}>
                                <span>Tỉnh/Thành phố:</span>
                            </Col>
                            <Col md={8}>
                                <select value={addressData && addressData.cityId || 0} name="day" id="cities-select" className="w-100 rounded p-1" onChange={changeCities}>
                                    <option value={0}>Tỉnh/ Thành phố</option>
                                    {cities?.map((item, index) =>
                                        <option key={item.id} value={Number(item.id)}>{item.name}</option>
                                    )}
                                </select>
                            </Col>
                        </Row>
                        <Row className="d-flex align-items-center">
                            <Col md={4}>
                                <span>Quận/Huyện:</span>
                            </Col>
                            <Col md={8}>
                                <select value={addressData && addressData.areaId || 0} name="day" id="area-select" className="w-100 rounded p-1" onChange={changeArea}>
                                    <option value={0}>Quận/Huyện</option>
                                    {areas?.map((item, index) =>
                                        <option key={item.id} value={Number(item.id)} >{item.name}</option>
                                    )}
                                </select>
                            </Col>
                        </Row>
                        <Row className="d-flex align-items-center">
                            <Col md={4}>
                                <span>Phường xã:</span>
                            </Col>
                            <Col md={8}>
                                <select value={addressData && addressData.areaId || 0} name="day" id="area-select" className="w-100 rounded p-1" onChange={changeArea}>
                                    <option value={0}>Phường/xã</option>
                                    {areas?.map((item, index) =>
                                        <option key={item.id} value={Number(item.id)} >{item.name}</option>
                                    )}
                                </select>
                            </Col>
                        </Row>
                        <Row className="d-flex align-items-center">
                            <Col md={4}>
                                <span>Địa chỉ:</span>
                            </Col>
                            <Col md={8}>
                                <input
                                    required
                                    className="w-100 rounded px-2 py-1"
                                    style={{borderWidth: 1}} onChange={(e) => setAddressData({ ...addressData, address: e.target.value })} value={addressData && addressData['address'] || ''} type="text" placeholder="Địa chỉ" />
                            </Col>
                        </Row>
                        <div>
                            <Button
                                variant="primary"
                                type='submit'
                                className='w-75 mx-auto d-flex align-items-center gap-2 justify-content-center'> <AiOutlineSave />Lưu</Button>
                        </div>
                    </form>
                    <div>
                        <Button
                            onClick={handleClose}
                            variant='danger'
                            className="w-75 mx-auto d-flex align-items-center gap-2 justify-content-center">
                            <AiOutlineClose /> Đóng</Button>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalAddresCRU