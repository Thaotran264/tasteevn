import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { adressApi } from '../../../api-client/adressApi';

function ModalAddresCRU({ text, clasNameCustom, item }) {
    const [addressData, setAddressData] = useState({})
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cities, setCities] = useState([])
    const [areas, setAreas] = useState([])
    useEffect(() => {
        if (show) {
            cities?.length <= 0 ? getCities() : ''
        }
    }, [show])

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('%cmodalAddresCRU.jsx line:20 onSubmit', 'color: #007acc;', addressData);

    }

    const getCities = async () => {
        try {
            const res = await adressApi.getCities()
            console.log(res)
            setCities(res?.data)
        } catch (error) {
            console.log('%cmodalAddresCRU.jsx line:15 error', 'color: #007acc;', error);
        }
    }

    const getAreas = async (id) => {
        try {
            const res = await adressApi.getAreasByCity(id)
            console.log(res)
            setAreas(res?.data)
        } catch (error) {
            console.log('%cmodalAddresCRU.jsx line:15 error', 'color: #007acc;', error);
        }
    }


    const changeCities = async (e) => {
        let select = document.getElementById('cities-select')
        let option = select.options[select.selectedIndex];
        setAddressData({
            ...addressData,
            citieID: option.value,
            city: option.text
        })
        getAreas(option.value)
    }
    const changeArea = async (e) => {
        let select = document.getElementById('area-select')
        let option = select.options[select.selectedIndex];
        setAddressData({
            ...addressData,
            areaID: option.value,
            area: option.text
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
                                <select name="day" id="cities-select" className="w-100 rounded p-1" onChange={changeCities}>
                                    <option value="0">Tỉnh/ Thành phố</option>
                                    {cities?.map((item, index) =>
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="Quận huyện">Quận huyện</label>
                            </div>
                            <div className="col-8 input-form-profile">
                                <select name="day" id="area-select" className="w-100 rounded p-1" onChange={changeArea}>
                                    <option value="0">Quận/ Huyện</option>
                                    {areas?.map((item, index) =>
                                        <option key={item.id} value={item.id}>{item.name}</option>
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

                        <div className="text-center">
                            <div className="form-check form-switch text-center">
                                <input onChange={(e) => setAddressData({ ...addressData, isDefault: e.target.checked })} value={addressData['isDefault'] || ''} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Đặt làm địa chỉ mặc định:</label>
                            </div>
                        </div>

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