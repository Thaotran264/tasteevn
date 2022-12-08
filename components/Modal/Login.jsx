import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineGoogle } from 'react-icons/ai'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import Image from 'next/image';
import Register from './Register';
const Login = ({ setShowLoginModal,
  showLoginModal }) => {
  const handleClose = () => setShowLoginModal(false)
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('data', e)
  }

  const [showRgModal, setShowRgModal] = useState(false)
  return (
    <>
      <Modal show={showLoginModal} onHide={handleClose}>
        <Modal.Header closeButton className='border-bottom border-warning py-2 px-3'>
          <Modal.Title>
            <div className='d-flex gap-2 align-items-center'>
              <Image src='/image/logo512.png' alt='logo' width={40} height={40} />
              <p className='mb-0 fs-6'>Tastee</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='px-4'>
          <h3 className='text-center mb-2' style={{ color: 'hsl(27, 100%, 71%)' }}>Đăng nhập</h3>
          <p className='text-center mb-3' style={{fontSize: 13}}>Vui lòng nhập số điện thoại/địa chỉ email hợp lệ</p>

          <Form onSubmit={onSubmit} className='px-2'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text"  className="rounded-0" style={{fontSize:13}}placeholder="Enter email/Phone No" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" className="rounded-0" style={{fontSize:13}}placeholder="Password" />
            </Form.Group>

            <button type="submit" className='btn btn-danger w-100 mb-2 fw-bold text-light rounded-0 ' style={{ backgroundColor: 'hsl(27, 100%, 71%)', borderColor: 'hsl(27, 100%, 71%)', fontSize: 14, letterSpacing: 1 }}>
              Đăng nhập
            </button>

          </Form>
            <div className='px-2'>
            <button
            onClick={()=>setShowRgModal(true)}
            className='btn btn-success w-100 mb-2 text-light rounded-0' style={{fontSize:13}} >
              Đăng ký nhanh
            </button>
            </div>
          {/* <div className='mb-1'>
            <p className='text-center mb-0' style={{fontSize:13}}>Hoặc đăng nhập bằng</p>
          </div> */}
          {/* <div className='px-2 d-flex flex-column gap-1'>
            <div className='d-flex gap-1'>
            <button className='btn rounded-0 bg-opacity-10 bg-dark d-flex align-items-center justify-content-center text-dark w-100 gap-2'>
              <AiOutlineGoogle style={{ fontSize: 16 }} />
              <span className='' style={{ fontSize: 13 }}>Google</span>
            </button>
            <button className='btn rounded-0 bg-opacity-10 bg-dark d-flex align-items-center justify-content-center text-dark  w-100 gap-2'>
              <BsTwitter style={{ fontSize: 16 }} />
              <span className='' style={{ fontSize: 13 }}>Twitter</span>
            </button>
            <button className='btn rounded-0 bg-opacity-10 bg-dark d-flex align-items-center justify-content-center text-dark  w-100 gap-2'><BsFacebook style={{ fontSize: 16 }} /><span className='' style={{ fontSize: 13 }}>Facebook</span></button>
            </div>
            </div> */}

        </Modal.Body>

      </Modal>
{
  showRgModal && <Register showRgModal={showRgModal}
  setShowRgModal={setShowRgModal} />
}

    </>
  );
}

export default Login