import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineGoogle } from 'react-icons/ai'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
const register = () => {
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('data', e)
    }
    return (
        <section className='container h-full d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <article className='w-50 shadow-lg py-4 rounded'>
                <h2 className='text-center fw-bold mb-3' style={{ color: 'hsl(27, 100%, 71%)' }}>Đăng ký</h2>
                <div className='d-flex justify-content-center gap-2 mb-3'>
                    <a className='d-flex border rounded-5 p-2 border-dark'><FaFacebookF /></a>
                    <a className='d-flex border rounded-5 p-2 border-dark'><AiOutlineGoogle /></a>
                    <a className='d-flex border rounded-5 p-2 border-dark'><BsTwitter /></a>
                </div>
                <p className='text-center mb-3' style={{ fontSize: 14 }}>hoặc dùng số điện thoại để đăng ký:</p>

                <Form onSubmit={onSubmit} className='px-4'>
                    <Form.Group className="mb-3" controlId="formBasicFullName">
                        <Form.Control type="text" placeholder="Họ và tên" style={{ fontSize: 14 }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Control type="text" placeholder="Số điện thoại" style={{ fontSize: 14 }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Mật khẩu" style={{ fontSize: 14 }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicRePassword">
                        <Form.Control type="password" placeholder="Nhập lại mật khẩu" style={{ fontSize: 14 }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Tôi đồng ý với điều khoản và dịch vụ" style={{ fontSize: 14 }} />
                    </Form.Group>
                    <Row>
                        <Col>
                            <button type="submit" className='btn  w-100 mb-2 text-light fw-bold' style={{ backgroundColor: 'hsl(27, 100%, 71%)', fontSize: 14 }}>
                                Đăng ký
                            </button>
                        </Col>
                    </Row>
                    <p className='text-center'><a href='/' className='text-decoration-underline' style={{ fontSize: 13 }}>Tôi đã có tài khoản</a></p>

                </Form>
            </article>
        </section>
    )
}

export default register