import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { bookingApi } from "../api-client";
import Modal from 'react-bootstrap/Modal';
import { Calendar } from 'react-date-range';
const Booking = ({ setShowBooking }) => {
  const [adult, setAdult] = useState()
  const [children, setChildren] = useState()
  const [time, setTime] = useState()
  const [description, setDescription] = useState()
  const router = useRouter()
  const { query: { id } } = router

  const handleClose = () => setShowBooking(prev => !prev);
  const handleSelect = (date) =>{
    console.log(date); // native Date object
  }
  const handleShow = () => setShow(true);
  // console.log('id',id)
  const onSubmit = async (event) => {
    event.preventDefault()
    const data = {
      adultQuantity: adult,
      childrenQuantity: children,
      bookingTime: time,
      description,
      brandId: id
    }
    try {
      const res = await bookingApi.booking({ data })
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
                <Form.Group className="mb-3" controlId="adultQuantity">
                  <Form.Label>Số người lớn:</Form.Label>
                  <Form.Control type="text" value={adult} onChange={(e) => setAdult(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="childrenQuantity">
                  <Form.Label>Số trẻ em:</Form.Label>
                  <Form.Control type="text" value={children} onChange={(e) => setChildren(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="bookingTime">
                  <Form.Label>Thời gian:</Form.Label>
                  <Form.Control type="text" value={time} onChange={(e) => setTime(e.target.value)} />
                </Form.Group>
                {/* Date Picker */}
                <Calendar
                  date={new Date()}
                  onChange={(date)=>handleSelect(date)}
                />
                {/* Time */}
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Ghi chú:</Form.Label>
                  <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
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
