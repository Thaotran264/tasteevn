import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { Accordion, Card, Col, Row, Button } from 'react-bootstrap'
import { AiFillFilter } from 'react-icons/ai'
import { BsChevronLeft } from 'react-icons/bs'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Link from 'next/link';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <Button
            variant='light'
            className='d-flex justify-content-center align-items-center'
            onClick={decoratedOnClick}
        >
            {children}
        </Button>
    );
}
const LichSuDatHen = () => {
    const currentTime = new Date().toISOString().split('T')[0]
    const [bookingData, setBookingData] = useState([])

    const [startDate, setStartDate] = useState(currentTime)
    const [endDate, setEndDate] = useState(currentTime)
    const router = useRouter();
    const handleChangeStartDate = (e) => {
        console.log('date', new Date(e.target.value).getTime())
        setStartDate(e.target.value)
    }
    const handleChangeEndDate = (e) => {
        console.log('date', new Date(e.target.value).getTime())

        setEndDate(e.target.value)
    }
    const handleSearch = async () => {
        const formData = new FormData()
        formData.append('FromDate', new Date(startDate).getTime())
        formData.append('ToDate', new Date(endDate).getTime())
        formData.append('Start', 1)
        formData.append('Length', 10)
        try {
            const res = await bookingApi.loadData(formData)
            console.log('first', res)
            setBookingData(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='d-flex flex-column gap-2'>
            <div className='d-flex align-items-center p-2 gap-3 bg-success bg-opacity-25'>
                <Link href="/profile">
                    <a className='p-2 hideOnDesktop'>
                        <BsChevronLeft />
                    </a>
                </Link>
                <h6 className="mb-0 w-100 text-center">
                    Lịch sử đặt hẹn
                </h6>
                {/* <button className='d-flex justify-content-center align-items-center border-0 bg-light bg-opacity-10'>
                    <BsFillFunnelFill />
                </button> */}
            </div>
            <div className="bg-light p-2">
                <div className='d-flex flex-column gap-3 '>
                    <Row className='d-flex align-items-center'>
                        <Col md={3}><span>Từ ngày:</span></Col>
                        <Col md={9}>
                            <input type="date" id="start" name="trip-start"
                                className="px-2 py-1 rounded border-dark border-2 w-100"
                                value={startDate}
                                onChange={handleChangeStartDate}
                                style={{ borderWidth: 1 }}

                            /></Col>
                    </Row>
                    <Row className='d-flex align-items-center'>
                        <Col md={3}><span>Đến ngày:</span>
                        </Col>
                        <Col md={9}>
                            <input type="date" id="end" name="trip-end"
                                className="px-2 py-1 rounded border-dark border-2 w-100"
                                value={endDate}
                                onChange={handleChangeEndDate}
                                style={{ borderWidth: 1 }}

                            /></Col>
                    </Row>
                    <Row className='d-flex align-items-center'>
                        <Col md={3}></Col>
                        <Col md={9}>
                            <Button onClick={handleSearch} variant='primary' className='w-50'>Tìm</Button>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header className="d-flex align-items-center justify-content-between">
                        <h6 className="text-center mb-0">Tìm kiếm</h6>
                        <CustomToggle eventKey="0" ><AiFillFilter /></CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className='bg-light rounded'>
                            <div className="d-flex flex-column gap-3 w-75 mx-auto bg-light rounded p-3">
                                <Row className='d-flex align-items-center'>
                                    <Col md={3}><span>Từ ngày:</span></Col>
                                    <Col md={9}>
                                        <input type="date" id="start" name="trip-start"
                                            className="px-2 py-1 rounded border-dark border-2 w-100"
                                            value={startDate}
                                            onChange={handleChangeStartDate}
                                            style={{ borderWidth: 1 }}

                                        /></Col>
                                </Row>
                                <Row className='d-flex align-items-center'>
                                    <Col md={3}><span>Đến ngày:</span>
                                    </Col>
                                    <Col md={9}>
                                        <input type="date" id="end" name="trip-end"
                                            className="px-2 py-1 rounded border-dark border-2 w-100"
                                            value={endDate}
                                            onChange={handleChangeEndDate}
                                            style={{ borderWidth: 1 }}

                                        /></Col>
                                </Row>
                                <Row className='d-flex align-items-center'>
                                    <Col md={3}></Col>
                                    <Col md={9}>
                                        <Button onClick={handleSearch} variant='primary' className='w-50'>Tìm</Button>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion> */}
            <div className='d-flex flex-column gap-2 py-2'>
                {
                    bookingData?.map(item =>
                        <div className="rounded bg-light shadow p-2" key={item.id}>
                            <p className="mb-0">Tên quán: {item.brandId}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default LichSuDatHen