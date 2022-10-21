import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { bookingApi } from "../api-client";
const Booking = () => {
  const [adult, setAdult] = useState()
  const [children, setChildren] = useState()
  const [time, setTime] = useState()
  const [description, setDescription] = useState()
  const router = useRouter()
  const {query: {id}} = router
  console.log('id',id)
  const onSubmit =async (event) => {
    event.preventDefault()
    const data = {
      adultQuantity: adult,
      childrenQuantity: children,
      bookingTime: time,
      description,
      brandId: id
    }
    try {
      const res = await bookingApi.booking({data})
      if(res.data) {
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
    <section className="container mb-2 rounded" style={{backgroundColor: '#fff'}}>
      <h2>Đặt chỗ</h2>
      <Row>
        <Col xs={6}>
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
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Ghi chú:</Form.Label>
              <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>


            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>

    </section>
  )
};

export default Booking;
