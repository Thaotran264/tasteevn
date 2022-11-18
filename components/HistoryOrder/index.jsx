
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
import {AiFillFilter} from 'react-icons/ai'

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
      length: '5'
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
    <div className="rounded d-flex flex-column gap-2 py-2">
      <Accordion defaultActiveKey="0" className='rounded'>
        <Card className='rounded'>
          <Card.Header className="d-flex align-items-center justify-content-between">
            <h5 className="mb-0">Quản lý đơn hàng</h5>
            <CustomToggle eventKey="0"><AiFillFilter /></CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="rounded d-flex flex-column gap-3">
                <Row className='align-items-center'>
                  <Col md={3}>
                    <span>Từ ngày:</span>
                  </Col>
                  <Col md={9}>
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
                <Row className='align-items-center'>
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
                <Row className='align-items-center'>
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
                <Row className='align-items-center'>
                  <Col md={3}></Col>
                  <Col md={9} className='d-flex justify-content-center'>
                    <Button onClick={handleSearch}
                      className='w-50'>Tìm</Button>
                  </Col>
                </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
 
      {/* <HandleSort isOpen={open} setOpen={setOpen} /> */}
      <div className="rounded w-100">
        {
          orderData.map(item =>
            <div className="p-2 bg-light mb-2 shadow rounded">
              <div className="d-flex gap-1 justify-content-between">
                <div className="d-flex">
                  <p className="date-order">{moment(item.createdDate).format('DD/MM/yyyy mm:hh')}</p>
                  {/* <p className="">Tạo đơn: {item.createdBy} </p> */}
                  <p className="color-primary">#123123456</p>
                </div>
                <div className="">
                  <p className="color-success">Hoàn thành </p>
                </div>
              </div>
              <h3 className="profile-usertitle-name text-end">Thành tiền: 201.000đ </h3>
              <div className="d-flex align-items-center justify-content-center ">
                <Link href={`/order/${item.id}`} className='d-flex'>
                  <a className="d-block text-decoration-underline text-primary">
                    Xem chi tiết</a></Link>
              </div>
            </div>
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