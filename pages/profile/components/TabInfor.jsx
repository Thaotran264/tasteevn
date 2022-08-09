import { AiFillEdit } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcAddImage } from "react-icons/fc"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../../store/globalState";


const TabInfor = ({ user }) => {
  const [show, setShow] = useState(false);
  const { state, dispatch } = useContext(DataContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChangePass = () => {
    console.log('%cTabInfor.jsx line:15 Lưu', 'color: #007acc;', );
    dispatch({ type: "NOTIFY", payload: { success: 'Bạn đã đổi mật khẩu thành công' } });
    handleClose()
  }
  const [fieldEdit, setFieldEdit] = useState({
    editFullName: false,
  });
  return (
    <div className="profile-content">
      <h5 className="title-section">Thông tin tài khoản</h5>
      <div className="rounded w-100 bg-white p-3">
        <div className="row">
          <div className="col-8">
            <h6 className="title-section">
              Thông tin cá nhân
            </h6>
            <div className="row">
              <div className="col-3 d-flex align-items-center">
                <div className="w-100 h-50">
                  {user && user['avatar'] ?
                    <img
                      className="w-100 h-100"
                      src={user && user['avatar']}
                      alt={user && user['fullName']}
                      style={{ border: "1px solid #fff", borderRadius: "50%" }}
                    />
                    :
                    <FcAddImage className="w-100 h-100" style={{ border: "1px solid #fff", borderRadius: "50%" }} />
                  }
                </div>
              </div>

              <div className="col-9">
                <div className="input-form-profile">
                  Họ và tên
                  <input className="inputFomCustom w-75 rounded " type="text" placeholder="Họ và tên" />
                </div>
                <div className="input-form-profile">
                  Ngày sinh
                  <input className="inputFomCustom w-75 rounded " type="date" placeholder="Ngày sinh" />
                </div>
                <div className="input-form-profile">
                  <span>
                    Giới tính
                  </span>
                  <div className="d-flex gap-3 ps-3">
                    <input type="radio" name="group2" placeholder="Giới tính" /> nam
                    <input type="radio" name="group2" placeholder="Giới tính" /> nữ
                    <input type="radio" name="group2" placeholder="Giới tính" /> khác
                  </div>
                </div>
                <div className="input-form-profile">
                  Quốc tịch
                  <input className="inputFomCustom w-75 rounded " type="text" placeholder="Quốc tịch" />
                </div>
              </div>

              <div className="col-9">
                <button className="btn btn-primary px-5 rounded">Lưu thay đổi</button>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="box-infor">
              <h5 className="title-section"> Số điện thoại và email </h5>
              <div className="d-flex align-items-end justify-content-between  mb-3">
                <span className="" style={{
                  fontSize: '14px',
                  width: '80%',
                  overflow: 'hidden'
                }} >
                  Số điện thoại
                  <br></br>
                  <span className="w-100" style={{ opacity: 0.8 }}>
                    {!fieldEdit['editPhone'] ? (user['phoneNumber']) :
                      <input
                        type="text"
                        className="border-dark border-bottom w-100"
                        placeholder="Tên"
                        value={user['phoneNumber']}
                        style={{
                          width: "80%",
                          border: "none",
                          outline: "none",
                          paddingBottom: "5px",
                        }} />
                    }
                  </span>
                </span>
                <button onClick={() => setFieldEdit({ ...fieldEdit, editPhone: !fieldEdit[''] })} className="btn btn-outline-primary rounded px-3 ms-auto" style={{ fontSize: 13 }} >
                  <AiFillEdit />
                </button>

              </div>
              <div className="d-flex align-items-end justify-content-between ">
                <span className="" style={{
                  fontSize: '14px',
                  width: '80%',
                  overflow: 'hidden'
                }} >
                  Địa chỉ email
                  <br />
                  {!fieldEdit['editEmail'] ?
                    <span className="w-100" style={{ opacity: 0.8 }}> {user['email']} </span> :
                    <input
                      type="email"
                      className="border-dark border-bottom w-100"
                      placeholder="Tên"
                      value={user['email']}
                      style={{
                        width: "80%",
                        border: "none",
                        outline: "none",
                        paddingBottom: "5px",
                      }} />}
                </span>
                <button
                  onClick={() => setFieldEdit({ ...fieldEdit, editEmail: !fieldEdit['editEmail'] })}
                  className="btn btn-outline-primary rounded px-3 ms-auto"
                  style={{ fontSize: 13 }}
                >
                  <AiFillEdit />
                </button>
              </div>
            </div>

            <div className="box-infor">
              <h5 className="title-section"> Bảo mật </h5>

              <div className="d-flex align-items-center justify-content-between mb-3">
                <span className="" style={{ fontSize: 14, color: '#7f90a4' }}>
                  <RiLockPasswordFill />  Đổi mật khẩu
                  <br></br>
                </span>
                <button className="btn btn-outline-primary rounded px-3" style={{ fontSize: 13 }} onClick={handleShow}>
                  Cập nhật
                </button>
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Xử lý thay đổi password
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Đóng
                    </Button>
                    <Button variant="primary" onClick={handleChangePass}>Lưu</Button>
                  </Modal.Footer>
                </Modal>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default TabInfor