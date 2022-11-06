import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { CartContext } from '../../context/cartContext'
import { AiOutlineSetting, AiOutlineHeart, AiOutlineArrowLeft, AiOutlineHome } from 'react-icons/ai'
import { GrNotes } from 'react-icons/gr'
import { BiBuilding } from 'react-icons/bi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';
import "react-datepicker/dist/react-datepicker.css";
import { orderApi, userApi } from '../../api-client'
import moment from 'moment/moment'
import Link from 'next/link'
import ChangePass from '../../components/Modal/ChangePass'


const User = () => {
  const router = useRouter()
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { state, dispatch } = useContext(CartContext)
  const [orders, setOrders] = useState([])
  const [address, setAddress] = useState()
  const [info, setInfo] = useState()
  const { auth } = state
  const [showUserInfo, setShowUserInfo] = useState(false)
  const [showDonHang, setShowDonHang] = useState(false)
  const [showQuanYeuThich, setShowQuanYeuThich] = useState(false)
  const [showSoDiaChi, setShowSoDiaChi] = useState(false)
  const [showMdChangePass, setShowMdChangePass] = useState(false)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await userApi.getShippingAddress()
        setAddress(...res)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  // coomment
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await userApi.getUserInfor()
        console.log('res', res.data.userInfo)
        setInfo(res.data.userInfo)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  const handleShowModalChangePass = () => {
    setShowMdChangePass(true)
  }
  const handleShowDonHang = async () => {
    setShowDonHang(true)
  }
  const handleSearchDate = async () => {
    const params = {
      start: "1",
      fromDate: startDate.toISOString().split('T')[0],
      toDate: endDate.toISOString().split('T')[0]
    }
    try {
      const res = await orderApi.loadData(params)
      setOrders(res.data.data)
      console.log('data', res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  const userInfor = <div className='position-absolute py-2 top-0 end-0 w-100 bg-light d-flex flex-column justify-content-start align-items-center' style={{ zIndex: 1 }}>
    <div className='w-50'>
      <div className='position-relative mb-4 border-bottom'>
        <button className='position-absolute top-0 start-0'
          onClick={() => setShowUserInfo(false)}><AiOutlineArrowLeft /></button>
        <h2 className='text-center'>Thông tin tài khoản</h2>
      </div>
      <div className='mb-2'>
        {/* <p>{info?.fullName || 'text'}</p> */}
        <input className='w-100 rounded p-2 border-0 shadow' type='text' placeholder={info?.fullName} readOnly />
      </div>
      <div className='mb-2'>
        <input className='w-100 rounded p-2 border-0 shadow' type='email' placeholder={info?.email} readOnly />
      </div>
      <div className='mb-2'>
        <input className='w-100 rounded p-2 border-0 shadow' type='text' placeholder={info?.phoneNumber} readOnly />
      </div>
      <button
        onClick={handleShowModalChangePass} className='btn btn-outline-dark  mb-2 w-100'>Đổi mật khẩu</button>
      <button className='btn btn-outline-dark  w-100'>Xóa tài khoản</button>
    </div>
  </div>
  const DonHang = <div className='position-absolute bottom-0 py-2 top-0 end-0 w-100 bg-light' style={{ zIndex: 1 }}>
    <div className='position-relative'>
      <button className='position-absolute top-0 start-0'
        onClick={() => setShowDonHang(false)}><AiOutlineArrowLeft /></button>
      <h2 className='text-center'>Đơn hàng của tôi</h2>
    </div>
    <div className='d-flex gap-2 justify-content-between w-50 me-auto align-items-center'>
      <DatePicker
        className='rounded p-1'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        className='rounded p-1'
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
      <button onClick={handleSearchDate} className='btn btn-primary'>Tìm</button>
    </div>

    <div className='d-flex flex-column'>
      {
        orders?.map(order =>
          <Link href={`/order/${order.id}`} key={order.id}>
            <a className='border-bottom'>
              <span>Ngày mua: {moment(order?.createdDate).format('DD/MM/yyyy')}</span>
              <p>Tổng tiền: {order?.total}</p>
            </a></Link>)
      }
    </div>
  </div>
  const QuanYeuThich = <div className='position-absolute bottom-0 py-2 top-0 end-0 w-100 bg-light' style={{ zIndex: 1 }}>
    <div className='position-relative'>
      <button className='position-absolute top-0 start-0'
        onClick={() => setShowQuanYeuThich(false)}><AiOutlineArrowLeft /></button>
      <h2 className='text-center'>Nhà hàng yêu thích</h2>
    </div></div>
  const SoDiaChi = <div className='position-absolute py-2 top-0 end-0 w-100 bg-light' style={{ zIndex: 1 }}>
    <div className='position-relative'>
      <button className='position-absolute top-0 start-0'
        onClick={() => setShowSoDiaChi(false)}><AiOutlineArrowLeft /></button>
      <h2 className='text-center'>Địa chỉ đã lưu</h2>
    </div>
    <div className='d-flex mb-2 align-items-center gap-1 bg-dark bg-opacity-10 rounded py-3 px-2'>
      <AiOutlineHome style={{ fontSize: 22 }} />
      <span>Nhà:{address?.address}-{address?.wardName} - {address?.districtName} - {address?.cityName}</span>
    </div>
    <div className='d-flex align-items-center gap-1 bg-dark bg-opacity-10 rounded py-3 px-2'>
      <BiBuilding style={{ fontSize: 22 }} />
      <span>Công ty:{address?.address}-{address?.wardName} - {address?.districtName} - {address?.cityName}</span>
    </div>
  </div>


  return (
    <section className='container py-2 px-0 position-relative'>
      <h2 className='text-center'>Thông tin tài khoản</h2>
      {showUserInfo &&
        userInfor}
      {showDonHang &&
        DonHang}
      {showQuanYeuThich &&
        QuanYeuThich}
      {showSoDiaChi &&
        SoDiaChi}
      <div className='d-flex gap-2 align-items-center border-bottom border-top p-2 position-relative'>
        <Image src={auth?.avatar || '/image/logo512.png'} className='rounded' alt='' width={80} height={80} />
        <p className='mb-0 fw-bold'>{auth?.fullName}</p>
        <button className='btn ms-auto'
          onClick={() => setShowUserInfo(!showUserInfo)}><AiOutlineSetting style={{ fontSize: 22 }}
          /></button>

      </div>
      <Row className='position-relative' style={{ padding: '0 14px' }}>
        <Col className='d-flex justify-content-center px-0'>
          <button className='w-100 rounded-0 justify-content-center d-flex flex-column align-items-center btn'
            onClick={handleShowDonHang}>
            <GrNotes style={{ fontSize: 22 }} className='mb-1' />
            <span style={{ fontSize: 13 }}>Đơn hàng</span>
          </button></Col>
        <Col className='d-flex justify-content-center px-0 border-start border-end'>
          <button className='w-100 rounded-0 justify-content-center d-flex flex-column align-items-center btn '
            onClick={() => setShowQuanYeuThich(true)}>
            <AiOutlineHeart style={{ fontSize: 22 }} className='mb-1' />
            <span style={{ fontSize: 13 }}>Quán yêu thích</span>
          </button></Col>
        <Col className='d-flex justify-content-center px-0'>
          <button className='w-100 rounded-0 justify-content-center d-flex flex-column align-items-center btn'
            onClick={() => setShowSoDiaChi(true)}>
            <FaMapMarkerAlt style={{ fontSize: 22 }} className='mb-1' />
            <span style={{ fontSize: 13 }}>Sổ địa chỉ</span>
          </button></Col>



      </Row>
      {showMdChangePass && <ChangePass showMdChangePass={showMdChangePass}
        setShowMdChangePass={setShowMdChangePass} />}
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={4}>
            <Nav className="position-relative">
              <Nav.Item className='d-block w-100'>
                <Nav.Link eventKey="first">Thông tin tài khoản</Nav.Link>
              </Nav.Item>
              <Nav.Item className='d-block w-100'>
                <Nav.Link eventKey="second">Lịch sử đơn hàng</Nav.Link>
              </Nav.Item>
              <Nav.Item className='d-block w-100'>
                <Nav.Link eventKey="third">Nhà hàng yêu thích</Nav.Link>
              </Nav.Item>
              <Nav.Item className='d-block w-100'>
                <Nav.Link eventKey="four">Sổ địa chỉ</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content className='bg-dark bg-opacity-10 h-100 rounded p-2 w-100'>
              <Tab.Pane eventKey="first">
                <h4 className='border-bottom border-danger'>Thông tin tài khoản</h4>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h2>Đơn hàng</h2>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <h2>Quán yêu thích</h2>
              </Tab.Pane>
              <Tab.Pane eventKey="four">
                <h2>Sổ địa chỉ</h2>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
<div className='bg-light mt-2'>
      <Tabs
        defaultActiveKey="first"
        id="justify-tab-example"
        className="mb-3 bg-light"
        justify
      >
        <Tab eventKey="first" title="Home" className='rounded'>
          <h4 className='border-bottom border-danger'>Thông tin tài khoản</h4>

        </Tab>
        <Tab eventKey="second" title="Profile">
          <h2>Đơn hàng</h2>

        </Tab>
        <Tab eventKey="third" title="Loooonger Tab">
          <h2>Quán yêu thích</h2>

        </Tab>
        <Tab eventKey="four" title="Contact">
          <h2>Sổ địa chỉ</h2>

        </Tab>
      </Tabs>
      </div>
    </section>
  )
}
// User.getLayout = function getLayout(Page) {
//   return <Layout>{Page}</Layout>;
// };
export default User