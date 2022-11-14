
import React, { useContext, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import OrderDetail from '../detailOrder'
import { BsFillFunnelFill, BsChevronLeft } from 'react-icons/bs'
import { Card } from "react-bootstrap";
import HandleSort from "../../pages/profile/components/handleSort";
import { orderApi } from "../../api-client";
import moment from "moment/moment";
import Link from "next/link";

const HistoryOrder = ({ }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [orderData, setOrderData] = useState([])
  const currentTime = new Date().toISOString().split('T')[0]
  const [startDate, setStartDate] = useState(currentTime)
  const [endDate, setEndDate] = useState(currentTime)

  const handleChangeStartDate = (e) => {
    console.log('date', new Date(e.target.value).getTime())
    setStartDate(e.target.value)
  }
  const handleChangeEndDate = (e) => {
    console.log('date', new Date(e.target.value).getTime())

    setEndDate(e.target.value)
  }
  const handleSearch = async () => {
    const param = {
      fromDate: startDate,
      toDate: endDate,
      length: '5'
    }

    try {
      const res = await orderApi.loadData(param)
      console.log('first', res)
      setOrderData(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="profile-content custom-card-hover">
        <Card className="">
          <Card.Body>
            <div className="d-flex gap-3 text-center ">
              <h2 className="w-100">Quản lý đơn hàng</h2>

              <a onClick={() => setOpen(!open)}>
                <BsFillFunnelFill />
              </a>
            </div>
          </Card.Body>
        </Card>
        <div className="d-flex gap-2 align-items-center mb-2">
          <div className="d-flex gap-1 align-items-center">
            <span>Từ ngày:</span>
            <input type="date" id="start" name="trip-start" className="px-2"
              value={startDate}
              onChange={handleChangeStartDate}
            />
          </div>
          <div className="d-flex gap-1 align-items-center">
            <span>Đến ngày:</span>
            <input type="date" id="end" name="trip-end" className="px-2"
              value={endDate}
              onChange={handleChangeEndDate}
            />
          </div>
          <button onClick={handleSearch} className='btn btn-primary'>Tìm</button>
        </div>
        <HandleSort isOpen={open} setOpen={setOpen} />
        <div className="rounded w-100 bg-white p-2">
          {
            orderData.map(item =>
              <>
                <hr className="my-1" />
                <div className="p-2">
                  <div className="d-flex gap-1 justify-content-between">
                    <div className="">
                      <p className="date-order">{moment(item.createdDate).format('DD/MM/yyyy')}</p>
                      <p className=""> Tạo đơn: {item.createdBy} </p>
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
                    <Link href={`/order/${item.id}`}>
                      <a>
                        Xem chi tiet</a></Link>
                    {/* <OrderDetail /> */}
                  </div>
                </div>
                <hr />
              </>
            )
          }

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