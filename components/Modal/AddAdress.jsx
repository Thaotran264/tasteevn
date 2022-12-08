import React, { memo, useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { cityApi, wardsApi } from '../../api-client';
import { distApi } from '../../api-client/districts';
const AddAdress = ({ showModal, setShowModal,setAddressData }) => {
    const [wards, setWards] = useState([])
    const [ward, setWard] = useState([])
    const [cities, setCities] = useState([])
    const [city, setCity] = useState([])
    const [dists, setDists] = useState([])
    const [dist, setDist] = useState([])
    const [disabledDist, setDisabledDist] = useState(true)
    const [disabledWards, setDisabledWards] = useState(true)
    const [address, setAddress] = useState('')
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await cityApi.getCity()
                // console.log('first', res)
                setCities(res)
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [])
    const handleCitiesChange = async (e) => {
        setDisabledDist(false)
        setCity(e.target.value)
        try {
            const res = await distApi.getDistByCityId(e.target.value)
            setDists(res)
        } catch (err) {
            console.log(err)
        }
    }
    const handleDistChange = async (e) => {
        setDisabledWards(false)
        setDist(e.target.value)

        try {
            const res = await wardsApi.getWardsByDistId(e.target.value)
            console.log(res)
            setWards(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    const handleWardChange = (e) => {
        setWard(e.target.value)
    }
    const handleClose = () => setShowModal(!showModal)
    const onSubmit = (e) => {
        e.preventDefault()
        const params = {
            cityId: Number(city),
            districtId: Number(dist),
            wardId: Number(ward),
            address
        }
        setAddressData(params)
        setShowModal(false)
        setDist('')
        setWard('')
        setCity('')
    }
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className='text-center'>Thêm địa chỉ</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="tinhThanhPho">
                        <Form.Select aria-label="Default select example"
                            onChange={handleCitiesChange}>
                            <option>Tỉnh/Thành phố:</option>
                            {
                                cities?.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="quanHuyen">
                        <Form.Select aria-label="Default select example" disabled={disabledDist}
                            onChange={handleDistChange}>
                            <option>Quận/Huyện:</option>
                            {
                                dists?.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="xaPhuong">
                        <Form.Select aria-label="Default select example" disabled={disabledWards}
                        onChange={handleWardChange}>
                            <option>Xã/ Phường:</option>
                            {
                                wards?.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="soNha"
                      >
                        <Form.Control type="text" placeholder="Số nhà"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                    </Form.Group>
                    <button className='btn btn-primary w-100' type="submit">
                        Submit
                    </button>
                </Form>
            </Modal.Body>

        </Modal>
    )
}

export default memo(AddAdress)