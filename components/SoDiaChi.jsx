import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Accordion, Button, Card, Col, Form, Row, useAccordionButton } from 'react-bootstrap'
import { AiOutlineHome, AiOutlinePlus } from 'react-icons/ai'
import { BsChevronLeft } from 'react-icons/bs'
import { cityApi, distApi, userApi, wardsApi } from '../api-client'
function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            className='border-0 p-1'
            // style={{ backgroundColor: 'pink' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}
const SoDiaChi = () => {
    const [user, setUser] = useState({});

    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')

    const [wards, setWards] = useState([])
    const [ward, setWard] = useState([])
    const [cities, setCities] = useState([])
    const [city, setCity] = useState([])
    const [dists, setDists] = useState([])
    const [dist, setDist] = useState([])
    const [disabledDist, setDisabledDist] = useState(true)
    const [disabledWards, setDisabledWards] = useState(true)
    const handleSubmit = () => { }
    useEffect(() => {
        const getDetailUser = async () => {
            try {
                const res = await userApi.getUserInfor();
                console.log('data', res)
                if (res['successful']) {
                    setUser(res['data'].userInfo);
                }
            } catch (error) {
                console.log(error)
            }
        };
        getDetailUser();
    }, []);
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await cityApi.getCity()
                setCities(res)
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [])
    const handleCitiesChange = async (e) => {
        setDisabledDist(false)
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
            setWards(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    const handleWardChange = (e) => {
        setWard(e.target.value)
    }
    const RenderForm = () => (
        <Form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
            <Form.Group className="" controlId="fullName">
                <Form.Control type="text" placeholder="Họ và tên"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="" controlId="phoneNum">
                <Form.Control type="text" placeholder="Số điện thoại"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="" controlId="tinhThanhPho">
                <Form.Select aria-label="Default select example"
                    onChange={handleCitiesChange}>
                    {
                        cities?.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className="" controlId="quanHuyen">
                <Form.Select aria-label="Default select example" disabled={disabledDist}
                    onChange={handleDistChange}>
                    {
                        dists?.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className="" controlId="xaPhuong">
                <Form.Select aria-label="Default select example" disabled={disabledWards}
                    onChange={handleWardChange}>
                    <option>Xã/ Phường:</option>
                    {
                        wards?.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className="" controlId="soNha"
            >
                <Form.Control type="text" placeholder="Số nhà"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" className=' w-25 mx-auto' type="submit">
                Thêm
            </Button>
        </Form>)
    return (
            <div className="d-flex flex-column gap-2">
                <div className='d-flex align-items-center py-2 gap-3 mobileHeader position-relative'>
                    <Link href="/profile">
                        <a className=' p-2 hideOnDesktop position-absolute'>
                            <BsChevronLeft />
                        </a>
                    </Link>
                    <h6 className="mb-0 w-100 text-center">
                        Địa chỉ của tôi
                    </h6>
                </div>
                <Accordion >
                    <Card className='bg-light'>
                        <Card.Header className='d-flex justify-content-center'>
                            <CustomToggle eventKey="0"><AiOutlinePlus />Thêm địa chỉ</CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                    <RenderForm />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
                <div className="d-flex flex-column gap-2 p-2">
                    <Row className="shadow-sm mx-0 p-2 rounded align-items-center">
                        <Col xs={2} className='d-flex justify-content-center'><AiOutlineHome style={{ fontSize: 22 }} /></Col>
                        <Col xs={9}>
                            <div className="d-flex flex-column">
                                <h6>{user?.fullName} - {user?.phoneNumber} </h6>
                                <span>{user?.address}</span>
                            </div>
                        </Col>
                        <Col xs={1}>
                            <input type='radio' />
                        </Col>
                    </Row>
                    <Row className="shadow-sm mx-0 p-2 rounded d-flex align-items-center">
                        <Col xs={2} className='d-flex justify-content-center'><AiOutlineHome style={{ fontSize: 22 }} /></Col>
                        <Col xs={9}>
                            <div className="d-flex flex-column">
                                <h6>{user?.fullName} - {user?.phoneNumber} </h6>
                                <span>{user?.address}</span>
                            </div>
                        </Col>
                        <Col xs={1}>
                            <input type='radio' />
                        </Col>
                    </Row>
                </div>
            </div>
    )
}

export default SoDiaChi