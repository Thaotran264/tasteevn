import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { bookingApi } from "../api-client";
import Modal from 'react-bootstrap/Modal';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
const Booking = ({ setShowBooking }) => {
  const [adult, setAdult] = useState()
  const [children, setChildren] = useState()
  const [description, setDescription] = useState()
  const router = useRouter()
  const { query: { id } } = router
  const [hours, setHours] = useState(new Date().toLocaleTimeString().split(':')[0])
  const [minutes, setMinutes] = useState(new Date().toLocaleTimeString().split(':')[1])
  const [seconds, setSeconds] = useState(new Date().toLocaleTimeString().split(':')[2])
  const [dates, setDates] = useState()
  const handleClose = () => setShowBooking(prev => !prev);
  const handleHours = (e) => {
    setHours(e.target.value)
  }
  const handleMinutes = (e) => {
    setMinutes(e.target.value)
    console.log('first', minutes)
  }
  const handleSelect = (date) => {
    setDates(date.toISOString().split('T')[0])
  }
  const onSubmit = async (event) => {
    event.preventDefault()
    if (!adult) return
    if (!children) return
    const hms = `${hours}:${minutes}:${seconds}`
    const target = new Date(dates + 'T' + hms);
    const data = {
      adultQuantity: Number(adult),
      childrenQuantity: Number(children),
      bookingTime: target.getTime(),
      description,
      brandId: id
    }
    console.log('data', data)
    // try {
    //   const res = await bookingApi.booking({ data })
    //   if (res.data) {
    //     alert('Đặt chỗ thành công')
    //     setAdult('')
    //     setChildren('')
    //     setTime('')
    //     setDescription('')
    //   }
    // } catch (error) {
    //   console.log(error)
    // }

  }
  const hoursList = []
  const minutesList = []
  const secondList = []
  for (let i = 0; i < 60; i++) {
    if (i < 10) {
      minutesList.push('0' + i)
      secondList.push('0' + i)

    } else
      minutesList.push(i)
      secondList.push(i)
  }
  for (let i = 0; i < 24; i++) {
    if (i < 10) {
      hoursList.push('0' + i)
    } else
      hoursList.push(i)
  }
  return (
    <section className="container mb-2 rounded" style={{ backgroundColor: '#fff' }}>
      <h2>Đặt chỗ</h2>
      <Modal show onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Thông tin đặt chỗ</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center'>
          <Row className='w-100'>
            <Col xs={12}>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3 d-flex justify-content-between" controlId="adultQuantity">
                  <Form.Label>Số người lớn:</Form.Label>
                  <Form.Control required type="number" value={adult} onChange={(e) => setAdult(e.target.value)} className='w-50' />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between" controlId="childrenQuantity">
                  <Form.Label>Số trẻ em:</Form.Label>
                  <Form.Control required type="number" value={children} onChange={(e) => setChildren(e.target.value)} className='w-50' />
                </Form.Group>
                <Form.Group className="mb-3  d-flex justify-content-between" controlId="bookingTime">
                  <Form.Label>Thời gian:</Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Select aria-label="Default select example" style={{ width: 'max-content' }}
                      onChange={handleHours} >
                      <option value={hours}>{hours}</option>
                      {hoursList.map((item, index) =>
                        <option value={item} key={index}>{item}</option>
                      )}
                    </Form.Select>
                    <span className='mx-2'>:</span>
                    <Form.Select aria-label="Default select example"
                      onChange={handleMinutes} style={{ width: 'max-content' }}>
                      <option value={minutes}>{minutes}</option>

                      {
                        minutesList.map((item, index) =>
                          <option value={item} key={index}>{item}</option>
                        )
                      }
                    </Form.Select>
                    <span className='mx-2'>:</span>
                    <Form.Select disabled aria-label="Default select example"
                     style={{ width: 'max-content' }}>
                      <option value={seconds}>{seconds}</option>
                      {
                        secondList.map((item, index) =>
                          <option value={item} key={index}>{item}</option>
                        )
                      }
                    </Form.Select>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3  d-flex justify-content-between" controlId="date">
                  <Form.Label>Ngày:</Form.Label>
                  <Calendar
                    date={new Date()}
                    onChange={handleSelect}
                  />
                </Form.Group>
                <Form.Group className="mb-3  d-flex justify-content-between" controlId="description">
                  <Form.Label>Ghi chú:</Form.Label>
                  <Form.Control className='w-50' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" className='w-100'>
                  Đặt chỗ
                </Button>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </section>
  )
};

export default Booking;
