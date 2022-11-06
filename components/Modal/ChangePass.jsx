import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const ChangePass = ({ showMdChangePass,
    setShowMdChangePass }) => {

    const handleClose = () => {
        setShowMdChangePass(false)
    }
    return (
        <Modal show={showMdChangePass} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className='text-center'>Đổi mật khẩu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mật khẩu:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mật Khẩu mới:</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Nhập lại mật khẩu mới:</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  
                    <Button variant="primary" className='w-100' type="submit">
                        Đổi mật khẩu
                    </Button>
                </Form>
            </Modal.Body>

        </Modal>
    )
}

export default ChangePass