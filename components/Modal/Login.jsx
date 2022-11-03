import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import {AiOutlineGoogle} from 'react-icons/ai'
import {BsFacebook,BsTwitter} from 'react-icons/bs'
const Login = ({ setShowLoginModal,
  showLoginModal }) => {
  const handleClose = () => setShowLoginModal(false)
const onSubmit = (e)=>{
  e.prevetDefault()
  console.log('data',e)
}
  return (
    <>
      <Modal show={showLoginModal} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body className='px-4'>
          <h3 className='text-center fw-bold mb-3' style={{color: 'hsl(27, 100%, 71%)'}}>Đăng nhập</h3>
          <p className='text-center mb-3'>Vui lòng nhập số điện thoại/địa chỉ email hợp lệ</p>

          <Form onSubmit={onSubmit} className='px-2'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter email/Phone No" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <a href='/dieu-khoan-tastee-pos' className='mb-2 d-block' style={{fontSize: 12}}>Bạn gặp vấn đề khi đăng nhập?</a>

            <button type="submit" className='btn btn-danger w-100 mb-2 text-light fw-bold' style={{backgroundColor:'hsl(27, 100%, 71%)', borderColor: 'hsl(27, 100%, 71%)', fontSize: 15, letterSpacing: 1}}>
              Đăng nhập
            </button>
            <div>
              <p className='text-center mb-2'>-- Or Sign in with --</p>
              <Row className='mb-2'>
                <Col xs={12} md={4} className='mb-2'>
                <button className='btn bg-opacity-10 bg-dark d-flex align-items-center justify-content-center text-dark w-100 gap-2'>
                  <AiOutlineGoogle style={{fontSize:16}} />
                  <span className='' style={{fontSize:13}}>Google</span></button>
                  </Col>
                <Col   xs={12} md={4} className='mb-2'><button className='btn bg-opacity-10 bg-dark d-flex align-items-center justify-content-center text-dark  w-100 gap-2'>
                  <BsTwitter style={{fontSize:16}} />
                  <span className='' style={{fontSize:13}}>Twitter</span>
                  </button></Col>
                <Col  xs={12} md={4} className='mb-2'><button className='btn bg-opacity-10 bg-dark d-flex align-items-center justify-content-center text-dark  w-100 gap-2'><BsFacebook style={{fontSize:16}} /><span className='' style={{fontSize:13}}>Facebook</span></button></Col>
              </Row>
              <p className='text-center' style={{fontSize:12}}>Chưa có tài khoản?<a className='fw-bold ms-1' href='/register'>Đăng ký ngay</a></p> </div>

          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Login