import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineDown } from "react-icons/ai";
import { BsX } from "react-icons/bs";

function ModalDetail() {
    const [show, setShow] = useState(false);
    const handelClose = () => {
        setShow(false)
    }
    return (
        <>
            <a href="#" onClick={() => setShow(true)}> Xem chi tiết <AiOutlineDown /> </a>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-detail-custom modal-bottom-to-top"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <div className='text-center p-2 border-bottom'>
                    <span >Chi tiết đơn hàng</span>
                    <a onClick={handelClose}>
                        <BsX className='float-end fs-3 me-2' />
                    </a>
                </div>
                <Modal.Body>
                <div className="d-flex gap-1 justify-content-between">
                    <div className="w-75">
                        <p className="fw-lighter">13/08/2022 11:34</p>
                        <p className=""> Tạo đơn: Đạo Nguyễn </p>
                    </div>
                    <div className="w-20">
                        <p className="color-primary">#123123456</p>
                        <p className="color-success">Hoàn thành </p>
                    </div>
                </div>

                <h3 className="profile-usertitle-name m-0"> Các sản phẩm đã chọn </h3>
                <hr />

                <div className='product-modal'>
                    <div className="row p-1 m-2">
                        <div className='col-2 p-1'>
                            <img
                                    src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                    className=" w-100 h-100"
                                />
                        </div>

                        <div className='col-8 p-1'>
                            <span className='name-product-detail'>2x Bạc xỉu nóng</span>
                        </div>

                        <div className='col-2 p-1'>
                            <span className='fw-lighter'>30.000đ</span>
                        </div>
                    </div>

                    <div className="row p-1 m-2">
                        <div className='col-2 p-1'>
                            <img
                                    src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                    className=" w-100 h-100"
                                />
                        </div>

                        <div className='col-8 p-1'>
                            <span className='name-product-detail'>1x  Sữa tươi trân châu đường đen</span>
                        </div>

                        <div className='col-2 p-1'>
                            <span className='fw-lighter'>35.000đ</span>
                        </div>
                    </div>

                    <div className="row p-1 m-2">
                        <div className='col-2 p-1'>
                            <img
                                    src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                    className=" w-100 h-100"
                                />
                        </div>

                        <div className='col-8 p-1'>
                            <span className='name-product-detail'>1x  Cafe sữa đá</span>
                        </div>

                        <div className='col-2 p-1'>
                            <span className='fw-lighter'>30.000đ</span>
                        </div>
                    </div>


                    <div className="row p-1 m-2">
                        <div className='col-2 p-1'>
                            <img
                                    src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                    className=" w-100 h-100"
                                />
                        </div>

                        <div className='col-8 p-1'>
                            <span className='name-product-detail'>1X  Sữa tươi trân châu đường đen</span>
                        </div>

                        <div className='col-2 p-1'>
                            <span className='fw-lighter'>30.000đ</span>
                        </div>
                    </div>

                    <div className="row p-1 m-2">
                        <div className='col-2 p-1'>
                            <img
                                    src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                    className=" w-100 h-100"
                                />
                        </div>

                        <div className='col-8 p-1'>
                            <span className='name-product-detail'>2x Bạc xỉu nóng</span>
                        </div>

                        <div className='col-2 p-1'>
                            <span className='fw-lighter'>30.000đ</span>
                        </div>
                    </div>

                    <div className="row p-1 m-2">
                        <div className='col-2 p-1'>
                            <img
                                    src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                    className=" w-100 h-100"
                                />
                        </div>

                        <div className='col-8 p-1'>
                            <span className='name-product-detail'>1x  Sữa tươi trân châu đường đen</span>
                        </div>

                        <div className='col-2 p-1'>
                            <span className='fw-lighter'>35.000đ</span>
                        </div>
                    </div>

                    <div className="row p-1 m-2">
                        <div className='col-2 p-1'>
                            <img
                                    src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                    className=" w-100 h-100"
                                />
                        </div>

                        <div className='col-8 p-1'>
                            <span className='name-product-detail'>1x  Cafe sữa đá</span>
                        </div>

                        <div className='col-2 p-1'>
                            <span className='fw-lighter'>30.000đ</span>
                        </div>
                    </div>


                    <div className="row p-1 m-2">
                        <div className='col-2 p-1'>
                            <img
                                    src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                    className=" w-100 h-100"
                                />
                        </div>

                        <div className='col-8 p-1'>
                            <span className='name-product-detail'>1X  Sữa tươi trân châu đường đen</span>
                        </div>

                        <div className='col-2 p-1'>
                            <span className='fw-lighter'>30.000đ</span>
                        </div>
                    </div>

                </div>

                <h3 className="float-end fs-5 m-3"> Thành tiền: 201.000đ </h3>

                <div className="m-3">
                    <Button variant="outline-danger" className="w-100 rounded">Huỷ đơn</Button>
                </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default ModalDetail