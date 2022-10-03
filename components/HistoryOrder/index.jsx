
import React, { useContext, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import OrderDetail from '../detailOrder'
import { BsFillFunnelFill, BsChevronLeft } from 'react-icons/bs'
import { Card } from "react-bootstrap";
import HandleSort from "../../pages/profile/components/handleSort";
import { orderApi } from "../../api-client";

const HistoryOrder = ({ }) => {
  const [_isMobile, setMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMobile(isMobile);
  }, [_isMobile]);
useEffect(()=>{
  const getData = async () => {
    const res = await orderApi.loadData()
  }
  getData()
},[])
  return (
    <>
      <div className="profile-content custom-card-hover">
      <Card className="">
          <Card.Body>
            <div className="d-flex gap-3 text-center ">
              {/* <a href="/profile">
                <div>
                  <BsChevronLeft />
                </div>
              </a> */}
              <span className="w-100">Quản lý đơn hàng</span>

              <a onClick={() => setOpen(!open)}>
                <BsFillFunnelFill />
              </a>
            </div>
          </Card.Body>
        </Card>

        <HandleSort isOpen={open} setOpen={setOpen} />
        <div className="rounded w-100 bg-white p-2">
          <hr className="my-1" />

          <div className="p-2">
            <div className="d-flex gap-1 justify-content-between">
              <div className="">
                <p className="date-order">13/08/2022 11:34</p>
                <p className=""> Tạo đơn: Đạo Nguyễn </p>
              </div>
              <div className="">
                <p className="color-primary">#123123456</p>
                <p className="color-success">Hoàn thành </p>
              </div>
            </div>
            <h3 className="profile-usertitle-name m-0 text-start"> Thành tiền: 201.000đ </h3>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-outline-danger rounded mx-1"
                style={{ fontSize: 13 }}
              >
                Huỷ đơn
              </button>

              <OrderDetail />
            </div>
          </div>
          <hr />

          <div className="p-2">
            <div className="d-flex gap-1 justify-content-between">
              <div className="">
                <p className="date-order">13/08/2022 11:34</p>
                <p className=""> Tạo đơn: Đạo Nguyễn </p>
              </div>
              <div className="">
                <p className="color-primary">#123123456</p>
                <p className="color-success">Hoàn thành </p>
              </div>
            </div>
            <h3 className="profile-usertitle-name m-0 text-start"> Thành tiền: 201.000đ </h3>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-outline-danger rounded mx-1"
                style={{ fontSize: 13 }}
              >
                Huỷ đơn
              </button>
              <OrderDetail />
            </div>
          </div>
          <hr />

          <div className="p-2">
            <div className="d-flex gap-1 justify-content-between">
              <div className="">
                <p className="date-order">13/08/2022 11:34</p>
                <p className=""> Tạo đơn: Đạo Nguyễn </p>
              </div>
              <div className="">
                <p className="color-primary">#123123456</p>
                <p className="color-success">Hoàn thành </p>
              </div>
            </div>
            <h3 className="profile-usertitle-name m-0 text-start"> Thành tiền: 201.000đ </h3>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-outline-danger rounded mx-1"
                style={{ fontSize: 13 }}
              >
                Huỷ đơn
              </button>
              <OrderDetail />
            </div>
          </div>
          <hr />

          <div className="p-2">
            <div className="d-flex gap-1 justify-content-between">
              <div className="">
                <p className="date-order">13/08/2022 11:34</p>
                <p className=""> Tạo đơn: Đạo Nguyễn </p>
              </div>
              <div className="">
                <p className="color-primary">#123123456</p>
                <p className="color-success">Hoàn thành </p>
              </div>
            </div>
            <h3 className="profile-usertitle-name m-0 text-start"> Thành tiền: 201.000đ </h3>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-outline-danger rounded mx-1"
                style={{ fontSize: 13 }}
              >
                Huỷ đơn
              </button>
              <OrderDetail />
            </div>
          </div>
          <hr />

          <div className="p-2">
            <div className="d-flex gap-1 justify-content-between">
              <div className="">
                <p className="date-order">13/08/2022 11:34</p>
                <p className=""> Tạo đơn: Đạo Nguyễn </p>
              </div>
              <div className="">
                <p className="color-primary">#123123456</p>
                <p className="color-success">Hoàn thành </p>
              </div>
            </div>
            <h3 className="profile-usertitle-name m-0 text-start"> Thành tiền: 201.000đ </h3>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-outline-danger rounded mx-1"
                style={{ fontSize: 13 }}
              >
                Huỷ đơn
              </button>
              <button
                className="btn btn-outline-primary rounded mx-1"
                style={{ fontSize: 13 }}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
          <hr />

          <button
            className="btn btn-outline-dark rounded mb-3"
            style={{ fontSize: 14, opacity: 0.8 }}
          >
            Xem thêm 5 đơn hàng
          </button>


        </div>
      </div>
    </>
  )
}

export default HistoryOrder