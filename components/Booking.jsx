import moment from "moment/moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { bookingApi } from "../api-client/booking";



const Booking = ({ setShowBooking }) => {
  const [adult, setAdult] = useState(0)
  const [children, setChildren] = useState(0)
  const [description, setDescription] = useState('')
  const router = useRouter()
  const [startDate, setStartDate] = useState(new Date());
  const { query: { id } } = router
  const [hours, setHours] = useState(new Date().toLocaleTimeString().split(':')[0])
  const [minutes, setMinutes] = useState(new Date().toLocaleTimeString().split(':')[1])

  const [dates, setDates] = useState('')
  const handleClose = () => setShowBooking(prev => !prev);
  const handleHours = (e) => {
    setHours(e.target.value)
  }
  const handleMinutes = (e) => {
    setMinutes(e.target.value)
    console.log('first', minutes)
  }

  const handleDateChange = (e) => {
    setDates(e.toISOString().split('T')[0])
    setStartDate(e)
  }
  const onSubmit = async (event) => {
    event.preventDefault()
    console.log('l')
    if (!adult) {
      alert('Mời bạn nhập số người lớn!!!')
      return
    }
    const hms = `${hours}:${minutes}`
    const target = new Date(dates + 'T' + hms);
    const currentTime = new Date()

    if (target.getTime() <= currentTime.getTime()) {
      alert('Thời gian không hợp lệ')
      return
    }
    const data = {
      adultQuantity: Number(adult),
      childrenQuantity: Number(children || 0),
      bookingTime: target.getTime(),
      description,
      brandId: id
    }
    try {
      const res = await bookingApi.booking(data)
      if (res.data) {
        alert('Đặt chỗ thành công')
        setAdult('')
        setChildren('')
        setTime('')
        setDescription('')
      }
    } catch (error) {
      console.log(error)
    }

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
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center " controlId="adultQuantity">
                  <Form.Label className='mb-0'>Số người lớn:</Form.Label>
                  <Form.Control required type="number" value={adult} onChange={(e) => setAdult(e.target.value)} className='w-50' />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="childrenQuantity">
                  <Form.Label className='mb-0'>Số trẻ em:</Form.Label>
                  <Form.Control required type="number" value={children} onChange={(e) => setChildren(e.target.value)} className='w-50' />
                </Form.Group>
                <Form.Group className="mb-3  d-flex justify-content-between align-items-center" controlId="bookingTime">
                  <Form.Label className='mb-0'>Thời gian:</Form.Label>
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

                  </div>
                </Form.Group>
                <Form.Group className="mb-3  d-flex justify-content-between align-items-center" controlId="date">
                  <Form.Label className='mb-0'>Ngày:</Form.Label>
                  <div>
                    <DatePicker
                      className="p-2"
                      style={{ width: 'max-content', borderColor: '#ced4da' }}
                      dateFormat="dd/MM/yyyy"
                      selected={startDate} onChange={handleDateChange} />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3  d-flex justify-content-between align-items-center" controlId="description">
                  <Form.Label className='mb-0'>Ghi chú:</Form.Label>
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
