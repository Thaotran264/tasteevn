
import React, { useContext, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import OrderDetail from '../detailOrder'
import { BsFillFunnelFill, BsChevronLeft } from 'react-icons/bs'
import { Button, Card, Col, Row } from "react-bootstrap";
// import HandleSort from "../../pages/profile/components/handleSort";
import { orderApi } from "../../api-client";
import moment from "moment/moment";
import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { AiFillFilter } from 'react-icons/ai'
import { formatter, getStatus } from "../../utils";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <Button
      variant='light'
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}
const HistoryOrder = ({ }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [orderData, setOrderData] = useState([])
  const currentTime = new Date().toISOString().split('T')[0]
  const [startDate, setStartDate] = useState(currentTime)
  const [endDate, setEndDate] = useState(currentTime)
  const [trangThai, setTrangThai] = useState(1)
  const [showXemThem, setShowXemThem] = useState(false)
  const handleChangeStartDate = (e) => {
    setStartDate(e.target.value)
  }
  const handleChangeEndDate = (e) => {
    setEndDate(e.target.value)
  }

  const handleTrangThaiChange = (e) => { setTrangThai(e.target.value) }
  const handleSearch = async () => {
    const param = {
      fromDate: startDate,
      toDate: endDate,
      // status: Number(trangThai),
      // length: '5'
    }

    try {
      const res = await orderApi.loadData(param)
      setOrderData(res.data.data)
      setShowXemThem(true)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="d-flex flex-column gap-2 mx-auto w-100"
    style={{backgroundColor: '#fff'}}
     >
      <div className='d-flex align-items-center p-2 gap-3'
        style={{ backgroundColor: 'hsl(27, 100%, 71%)', color: '#fff' }}>
        <Link href="/profile">
          <a className='p-2 hideOnDesktop'>
            <BsChevronLeft />
          </a>
        </Link>
        <h6 className="mb-0 w-100 text-center">
          Lịch sử đặt hàng
        </h6>
        {/* <button className='d-flex justify-content-center align-items-center border-0 bg-light bg-opacity-10'>
                    <BsFillFunnelFill />
                </button> */}
      </div>
      <div className="p-2">
        <div className="d-flex flex-column gap-2">
          <Row className='align-items-center mx-0'>
            <Col xs={12} md={3}>
              <span>Từ ngày:</span>
            </Col>
            <Col xs={12}  md={9}>
              <input
                type="date"
                id="start"
                name="trip-start"
                className="px-2 py-1 rounded w-100"
                value={startDate}
                onChange={handleChangeStartDate}
                style={{ borderWidth: 1 }}
              />
            </Col>
          </Row>
          <Row className='align-items-center mx-0'>
            <Col md={3}>
              <span>Đến ngày:</span>
            </Col>
            <Col md={9}>
              <input
                type="date"
                id="end"
                name="trip-end"
                className="px-2 py-1 rounded border-dark border-2 w-100"
                value={endDate}
                onChange={handleChangeEndDate}
                style={{ borderWidth: 1 }}
              />
            </Col>
          </Row>
          <Row className='align-items-center mx-0'>
            <Col md={3}>
              <span>Trạng thái:</span>
            </Col>
            <Col md={9}>
              <select className="form-select" aria-label="Default select example"
                onChange={handleTrangThaiChange}>
                <option value={0}>Đã hoàn thành</option>
                <option value={2}>Đang xử lý</option>
                <option value={3}>Đã hủy</option>
              </select>
            </Col>
          </Row>
          <Row className='w-100 mx-auto'>
            <Col md={3}></Col>
            <Col md={9}>
              <Button onClick={handleSearch}
                className='w-100'>Tìm</Button>
            </Col>
          </Row>
        </div>
      </div>


      {/* <HandleSort isOpen={open} setOpen={setOpen} /> */}
      <div className="rounded d-flex flex-column gap-2 w-100 px-2 ">
        {
          orderData.map(item => {
            console.log('item', item)
            return (
              <div className="p-2 bg-light mb-2 shadow rounded">
                <div className="d-flex gap-1 justify-content-between">
                  <div className="d-flex gap-2">
                    <p className="date-order">{moment(item.createdDate).format('DD/MM/yyyy MM:HH')}</p>
                    {/* <p className="">Tạo đơn: {item.createdBy} </p> */}
                    <p className="color-primary">#{item.orderCode}</p>
                  </div>
                  <div className="">
                    <p className="color-success">{getStatus(item.status)} </p>
                  </div>
                </div>
                <h3 className="profile-usertitle-name text-end">Thành tiền: {formatter.format(item.total)} </h3>
                <div className="d-flex align-items-center justify-content-center ">
                  <Link href={`/order/${item.id}`} className='d-flex'>
                    <a className="d-block text-decoration-underline text-primary">
                      Xem chi tiết</a></Link>
                </div>

              </div>
            )

          }
          )
        }
      </div>
      {
        showXemThem ?
          <div className="d-flex justify-content-center">
            <Button
              variant="outline-primary"
              className="w-50"
            >
              Xem thêm
            </Button>
          </div>
          : <></>
      }
    </div>
  )
}

export default HistoryOrder