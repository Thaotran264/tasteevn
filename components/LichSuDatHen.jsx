import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { Accordion, Card, Col, Row, Button } from 'react-bootstrap'
import { AiFillFilter } from 'react-icons/ai'
import { GrNotes } from 'react-icons/gr'
import { BsChevronLeft } from 'react-icons/bs'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Link from 'next/link';
import { bookingApi } from '../api-client';
import moment from 'moment/moment';
import Image from 'next/image';

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
            <div className='d-flex align-items-center p-2 bg-success bg-opacity-25' style={{height: 40}}>
                <Link href="/profile">
                    <a className='p-2 position-absolute top-0 hideOnDesktop'>
                        <BsChevronLeft />
                    </a>
                </Link>
                <h6 className="mb-0 w-100 text-center fw-bold">
                    Lịch sử đặt hẹn
                </h6>
            </div>
            <div className="rounded p-2 shadow px-2" style={{ backgroundColor: '#fff' }}>
                <div className='d-flex flex-column gap-2 '>
                    <Row className='mx-auto'>
                        <Col xs={6} md={6} className='d-flex flex-column gap-1'>
                            <span>Từ ngày:</span>
                            <input type="date" id="start" name="trip-start"
                                className="px-2 py-1 rounded border-dark border-2 w-100"
                                value={startDate}
                                onChange={handleChangeStartDate}
                                style={{ borderWidth: 1 }}

                            />
                        </Col>
                        <Col xs={6} md={6} className='d-flex flex-column gap-1'>
                            <span>Đến ngày:</span>
                            <input type="date" id="end" name="trip-end"
                                className="px-2 py-1 rounded border-dark border-2 w-100"
                                value={endDate}
                                onChange={handleChangeEndDate}
                                style={{ borderWidth: 1 }}

                            />
                        </Col>
                    </Row>
                    <Button onClick={handleSearch} variant='primary' className='w-100'>Tìm</Button>
                </div>
            </div>

            <div className='d-flex flex-column gap-2 px-2'>
                {
                    bookingData?.map(item =>
                        <div className="rounded bg-light shadow p-2" key={item.id}>
                            <p className="mb-1"><span className='fw-bold'>Cửa hàng:</span> {item.brandName}</p>
                            <p className="mb-1"><span className='fw-bold'>Thời gian:</span> {moment(item.bookingTime).format('DD/MM/yyyy HH:mm')}</p>
                            <div>
                                <p className='align-items-center d-flex gap-1 mb-1'>
                                    <Image src='/icons/man-and-woman.png'
                                        width={22} height={22} alt='mânndwomen' />{' '}Người lớn: {item.adultQuantity}</p>
                                <p className='d-flex gap-1 align-items-center mb-1'>
                                    <Image src='/icons/children.png'
                                        width={22} height={22} alt='children' />
                                    {' '}Trẻ em: {item.childrenQuantity}</p>
                            </div>
                            <p className="mb-0"><GrNotes /> {item.description}</p>
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default LichSuDatHen