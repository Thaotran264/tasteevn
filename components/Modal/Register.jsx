import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineGoogle } from 'react-icons/ai'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import Image from 'next/image';
const Register = ({ showRgModal,setShowRgModal }) => {
const [name, setName] = useState('')
const [password, setPass] = useState('')
const [phone, setPhone] = useState('')
  const handleClose = () => setShowRgModal(false)
  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("PhoneNumber",phone);
    formData.append("ConfirmPassword", phone);
    formData.append("Password",password);
    formData.append("FullName", name);
    console.log('data', e)
  }
  return (
    <>
      <Modal show={showRgModal} onHide={handleClose}>
        <Modal.Header className='py-2 px-3' closeButton>
          <Modal.Title>
            <div className='d-flex gap-2 align-items-center'>
              <Image src='/image/logo512.png' alt='logo' width={40} height={40} />
              <p className='mb-0 fs-6'>Tastee POS</p>
            </div>
          </Modal.Title>
        </Modal.Header>
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
              <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Họ và tên" style={{ fontSize: 13 }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Control value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" placeholder="Số điện thoại" style={{ fontSize: 13 }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control value={password} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Mật khẩu" style={{ fontSize: 13 }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Tôi đồng ý với điều khoản và dịch vụ" style={{ fontSize: 13 }} />
            </Form.Group>
            <div className='d-flex gap-1'>
              <button type="submit" className='btn  w-100 mb-2 text-light fw-bold' style={{ backgroundColor: 'hsl(27, 100%, 71%)', fontSize: 14 }}>
                Đăng ký
              </button>
              <button
              onClick={handleClose} type="submit" className='btn w-100 mb-2  fw-bold' style={{ borderColor: 'hsl(27, 100%, 71%)', color: 'hsl(27, 100%, 71%)', fontSize: 14 }}>
                Đăng nhập
              </button>
            </div>



          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register