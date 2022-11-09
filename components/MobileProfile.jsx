import moment from 'moment/moment'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { AiOutlineArrowLeft, AiOutlineHeart, AiOutlineHome, AiOutlineSetting, AiOutlinePlusCircle } from 'react-icons/ai'
import { BiBuilding, BiNotepad } from 'react-icons/bi'
import { MdOutlineChair } from 'react-icons/md'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { GrNotes } from 'react-icons/gr'
import { orderApi, userApi } from '../api-client'
import { CartContext } from '../context/cartContext'
import ChangePass from './Modal/ChangePass'


const MobileProfile = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const { state, dispatch } = useContext(CartContext)
    const [orders, setOrders] = useState([])
    const [address, setAddress] = useState()
    const [info, setInfo] = useState()
    const { auth } = state
    const [showUserInfo, setShowUserInfo] = useState(false)
    const [showDonHang, setShowDonHang] = useState(false)
    const [showDatCho, setShowDatCho] = useState(false)
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
        setShowMdChangePass(!showMd)
    }
    const handleShowDonHang = async () => {
        setShowDonHang(!showDonHang)
    }
    const handleShowDatCho = async () => {
        setShowDatCho(!showDatCho)
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
    const userInfor = <div className='profileMobile__Component'>
        <div className='w-100 p-2'>
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
    const DonHang = <div className='profileMobile__Component'>
        <h2 className='text-center'>Đơn hàng của tôi</h2>
        <div className='position-relative'>
        </div>
        <div className='d-flex gap-2 flex-column'>
            <DatePicker
                className='rounded p-1'
                style={{ width: 'max-content' }}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
            />
            <DatePicker
                className='rounded p-1' style={{ width: 'max-content' }}
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
        <button onClick={() => setShowDonHang(false)}><AiOutlineArrowLeft /></button>

    </div>
    const DatCho = <div className='profileMobile__Component'>
        <h4>Lịch sử đặt chỗ</h4>

        <div className='d-flex gap-2 flex-column px-2'>
            <div className='d-flex align-items-center justify-content-between'>
                <span className='w-25'>Từ ngày:</span>
                <DatePicker
                    className='rounded p-1 w-100'
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
            <div className='d-flex align-items-center justify-content-between'>
                <span className='w-25'>Đến ngày:</span>
                <DatePicker
                    className='rounded p-1 w-100'
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                />
            </div>

            <button onClick={handleSearchDate} className='btn btn-primary' style={{letterSpacing: 1, fontSize: 14}}>Tìm</button>
        </div>

        <div className='d-flex flex-column gap-2 rounded mx-2'>
            {
                orders?.map(order =>
                    <Link href={`/order/${order.id}`} key={order.id}>
                        <a className='border-bottom bg-dark bg-opacity-10 p-2 rounded'>
                            <span>Ngày mua: {moment(order?.createdDate).format('DD/MM/yyyy')}</span>
                            <p className='mb-0'>Tổng tiền: {order?.total}</p>
                        </a></Link>)
            }
        </div>
        <button onClick={() => setShowDatCho(false)}>Đóng</button>

    </div>
    const QuanYeuThich = <div className='profileMobile__Component'>
        <h4>Nhà hàng yêu thích</h4>
        <button onClick={() => setShowQuanYeuThich(false)}>
            Đóng
        </button>
    </div>
    const SoDiaChi = <div className='profileMobile__Component'>
        <h4>Địa chỉ đã lưu</h4>
        <div className='px-2 d-flex flex-column gap-2'>
            <div className='profileMobile__Component__items'>
                <AiOutlineHome />
                <span>{address?.address}-{address?.wardName} - {address?.districtName} - {address?.cityName}</span>
            </div>
            <div className='profileMobile__Component__items'>
                <BiBuilding />
                <span>{address?.address}-{address?.wardName} - {address?.districtName} - {address?.cityName}</span>
            </div>
        </div>
        <button onClick={() => setShowSoDiaChi(false)}>Đóng</button>
    </div>

    return (
        <section className='profileMobile__container container hideOnDesktop'>
            {/* <h2 className='text-center'>Thông tin tài khoản</h2> */}
            <div className='d-flex flex-column gap-2'>
                <div className='profileMobile__buttonContainer'>
                    <button className='profileMobile__button'
                        onClick={() => setShowUserInfo(!showUserInfo)}>
                        <Image src={auth?.avatar || '/image/logo512.png'} className='rounded' alt='' width={80} height={80} />
                        <span>{auth?.fullName}</span>
                        <AiOutlineSetting />
                    </button>
                    {showUserInfo &&
                        userInfor}
                </div>
                <div className='profileMobile__buttonContainer'>
                    <button className='profileMobile__button'
                        onClick={handleShowDonHang}>
                        <BiNotepad />
                        <span>Đơn hàng</span>
                        <AiOutlinePlusCircle />
                    </button>
                    {showDonHang &&
                        DonHang}
                </div>
                <div className='profileMobile__buttonContainer'>
                    <button className='profileMobile__button'
                        onClick={handleShowDatCho}>
                        <MdOutlineChair />
                        <span>Booking</span>
                        <AiOutlinePlusCircle />
                    </button>
                    {showDatCho &&
                        DatCho}
                </div>
                <div className='profileMobile__buttonContainer'>
                    <button className='profileMobile__button'
                        onClick={() => setShowQuanYeuThich(!showQuanYeuThich)}>
                        <AiOutlineHeart />
                        <span>Quán yêu thích</span>
                        <AiOutlinePlusCircle />
                    </button>
                    {showQuanYeuThich &&
                        QuanYeuThich}
                </div>
                <div className='profileMobile__buttonContainer'>
                    <button className='profileMobile__button'
                        onClick={() => setShowSoDiaChi(!showSoDiaChi)}>
                        <HiOutlineLocationMarker />
                        <span>Sổ địa chỉ</span>
                        <AiOutlinePlusCircle />
                    </button>
                    {showSoDiaChi &&
                        SoDiaChi}
                </div>
            </div>
            {showMdChangePass && <ChangePass showMdChangePass={showMdChangePass}
                setShowMdChangePass={setShowMdChangePass} />}
        </section>
    )
}
// User.getLayout = function getLayout(Page) {
//   return <Layout>{Page}</Layout>;
// };
export default MobileProfile