import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { userApi } from '../../api-client';
const ChangePass = ({ showMdChangePass,
    setShowMdChangePass }) => {
    const [password, setPassword] = useState('')
    const [newPass, setNewPass] = useState('')
    const [renewPass, setReNewPass] = useState('')
    const handleClose = () => {
        setShowMdChangePass(false)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!password || !newPass || !renewPass) {
            alert('Mật khẩu không được để trống')
            return
        }
        if(newPass != renewPass) {
            alert('Mật khẩu mới không trùng')
            return
        }
        console.log('submit', password)
        const params = {
            password,
            newPassword: newPass
        }
        try {
            const res = await userApi.changePassword(params)
            if(res.successful) {
                alert('Đổi mật khẩu thành công')
                setShowMdChangePass(false)
                setNewPass('')
                setPassword('')
                setReNewPass('')
            }
            console.log('data', res)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Modal show={showMdChangePass} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className='text-center'>Đổi mật khẩu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mật khẩu:</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mật Khẩu mới:</Form.Label>
                        <Form.Control
                        value={newPass}
                        onChange={(e)=>setNewPass(e.target.value)} 
                        type="password" placeholder="Password" />
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Nhập lại mật khẩu mới:</Form.Label>
                        <Form.Control value={renewPass}
                        onChange={(e)=>setReNewPass(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary"
                        className='w-100' type="submit">
                        Đổi mật khẩu
                    </Button>
                </Form>
            </Modal.Body>

        </Modal>
    )
}

export default ChangePass