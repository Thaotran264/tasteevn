import React from "react";
import Card from 'react-bootstrap/Card';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FaAddressCard, FaClipboardList } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { FcAddImage } from "react-icons/fc";
import { GoChecklist } from "react-icons/go";
import ModalDetail from '../modalDetail'


import { Button } from "react-bootstrap";
const HistoryOrder = ({ }) => {

  return (
    <>
      <div className="profile-mobile" style={{ height: 'auto' }}>

        <Card className="">
          <Card.Body>
            <div className="d-flex gap-3 text-center">
              <a href="/profile">
                <div>
                  <BsChevronLeft />
                </div>
              </a>
              <span className="w-100">Quản lý đơn hàng</span>
            </div>
          </Card.Body>
        </Card>

        <Card>
            <Card.Body className="p-3">
              <div className="d-flex gap-1 justify-content-between">

                <div className="">
                  <p className="date-order">13/08/2022 11:34</p>
                  <p className=""> Tạo đơn: Đạo Nguyễn </p>
                  <h3 className="profile-usertitle-name m-0"> Thành tiền: 201.000đ </h3>
                </div>

                <div className="">
                  <p className="color-primary">#123123456</p>
                  <p className="color-success">Hoàn thành </p>
                </div>

              </div>
            </Card.Body>
            <div className="m-1 text-center">
              <ModalDetail />
            </div>
        </Card>

        <Card>
            <Card.Body className="p-3">
              <div className="d-flex gap-1 justify-content-between">

                <div className="">
                  <p className="date-order">13/08/2022 11:34</p>
                  <p className=""> Tạo đơn: Đạo Nguyễn </p>
                  <h3 className="profile-usertitle-name m-0"> Thành tiền: 201.000đ </h3>
                </div>

                <div className="">
                  <p className="color-primary">#123123456</p>
                  <p className="color-success">Hoàn thành </p>
                </div>

              </div>
            </Card.Body>
            <div className="m-1 text-center">
              <ModalDetail />
            </div>
        </Card>

        <Card>
            <Card.Body className="p-3">
              <div className="d-flex gap-1 justify-content-between">

                <div className="">
                  <p className="date-order">13/08/2022 11:34</p>
                  <p className=""> Tạo đơn: Đạo Nguyễn </p>
                  <h3 className="profile-usertitle-name m-0"> Thành tiền: 201.000đ </h3>
                </div>

                <div className="">
                  <p className="color-primary">#123123456</p>
                  <p className="color-success">Hoàn thành </p>
                </div>

              </div>
            </Card.Body>
            <div className="m-1 text-center">
              <ModalDetail />
            </div>
        </Card>

        <Card>
            <Card.Body className="p-3">
              <div className="d-flex gap-1 justify-content-between">

                <div className="">
                  <p className="date-order">13/08/2022 11:34</p>
                  <p className=""> Tạo đơn: Đạo Nguyễn </p>
                  <h3 className="profile-usertitle-name m-0"> Thành tiền: 201.000đ </h3>
                </div>

                <div className="">
                  <p className="color-primary">#123123456</p>
                  <p className="color-success">Hoàn thành </p>
                </div>

              </div>
            </Card.Body>
            <div className="m-1 text-center">
              <ModalDetail />
            </div>
        </Card>

        <Card>
            <Card.Body className="p-3">
              <div className="d-flex gap-1 justify-content-between">

                <div className="">
                  <p className="date-order">13/08/2022 11:34</p>
                  <p className=""> Tạo đơn: Đạo Nguyễn </p>
                  <h3 className="profile-usertitle-name m-0"> Thành tiền: 201.000đ </h3>
                </div>

                <div className="">
                  <p className="color-primary">#123123456</p>
                  <p className="color-success">Hoàn thành </p>
                </div>

              </div>
            </Card.Body>
            <div className="m-1 text-center">
              <ModalDetail />
            </div>
        </Card>

        <Card>
            <Card.Body className="p-3">
              <div className="d-flex gap-1 justify-content-between">

                <div className="">
                  <p className="date-order">13/08/2022 11:34</p>
                  <p className=""> Tạo đơn: Đạo Nguyễn </p>
                  <h3 className="profile-usertitle-name m-0"> Thành tiền: 201.000đ </h3>
                </div>

                <div className="">
                  <p className="color-primary">#123123456</p>
                  <p className="color-success">Hoàn thành </p>
                </div>

              </div>
            </Card.Body>
            <div className="m-1 text-center">
              <ModalDetail />
            </div>
        </Card>

      </div>
    </>
  )
}

export default HistoryOrder