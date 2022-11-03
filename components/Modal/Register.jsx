import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineGoogle } from 'react-icons/ai'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
const Register = ({ setShowLoginModal,
  showLoginModal }) => {
  const handleClose = () => setShowLoginModal(false)
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('data', e)
  }
  return (
    <>
      <Modal show={showLoginModal} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body className='px-4'>
          <h2 className='text-center fw-bold mb-3' style={{ color: 'hsl(27, 100%, 71%)' }}>Đăng ký</h2>
          <div className='d-flex justify-content-center gap-2 mb-3'>
            <a className='border rounded-5 py-1 px-2 border-dark'><FaFacebookF /></a>
            <a className='border rounded-5 py-1 px-2 border-dark'><AiOutlineGoogle /></a>
            <a className='border rounded-5 py-1 px-2 border-dark'><BsTwitter /></a>
          </div>
          <p className='text-center mb-3' style={{ fontSize: 13 }}>hoặc dùng số điện thoại để đăng ký:</p>

          <Form onSubmit={onSubmit} className='px-2'>
            <Form.Group className="mb-3" controlId="formBasicFullName">
              <Form.Control type="text" placeholder="Họ và tên" style={{ fontSize: 13 }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Control type="text" placeholder="Số điện thoại" style={{ fontSize: 13 }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Mật khẩu" style={{ fontSize: 13 }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Tôi đồng ý với điều khoản và dịch vụ" style={{ fontSize: 13 }} />
            </Form.Group>
            <Row>
              <Col>
                <button type="submit" className='btn  w-100 mb-2 text-light fw-bold' style={{ backgroundColor: 'hsl(27, 100%, 71%)', fontSize: 14 }}>
                  Đăng ký
                </button>
              </Col>
              <Col>
                <button type="submit" className='btn w-100 mb-2  fw-bold' style={{ borderColor: 'hsl(27, 100%, 71%)', color: 'hsl(27, 100%, 71%)', fontSize: 14 }}>
                  Đăng nhập
                </button>
              </Col>
            </Row>


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

export default Register