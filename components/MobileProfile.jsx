import moment from 'moment/moment'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { AiOutlineArrowLeft, AiOutlineHeart, AiOutlineHome, AiOutlineSetting, AiOutlinePlusCircle, AiOutlineEdit } from 'react-icons/ai'
import { BiBuilding, BiEditAlt, BiNotepad } from 'react-icons/bi'
import { MdOutlineChair } from 'react-icons/md'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { GrNotes } from 'react-icons/gr'
import { bookingApi, orderApi, userApi } from '../api-client'
import { CartContext } from '../context/cartContext'
import ChangePass from './Modal/ChangePass'


const MobileProfile = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const { state, dispatch } = useContext(CartContext)
    const [orders, setOrders] = useState([])
    const [bookings, setBookings] = useState([])
    const [address, setAddress] = useState()
    const [info, setInfo] = useState()
    const { auth } = state
    const [showUserInfo, setShowUserInfo] = useState(false)
    const [showDonHang, setShowDonHang] = useState(false)
    const [showDatCho, setShowDatCho] = useState(false)
    const [showQuanYeuThich, setShowQuanYeuThich] = useState(false)
    const [showSoDiaChi, setShowSoDiaChi] = useState(false)
    const [showMdChangePass, setShowMdChangePass] = useState(false)
    const [birthday, setBirthday] = useState('')
    const [shippingAddress, setShippingAddress] = useState()
    const [change, setChange] = useState(true)
    const [nameEdit, setNameEdit] = useState(false)
    const [gender, setGender] = useState(1)
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [fullName, setFullName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [emailEdit, setEmailEdit] = useState(true)
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await userApi.getShippingAddress()
                setShippingAddress(...res)
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
                setInfo(res.data.userInfo)
                setPhone(res.data.userInfo.phoneNumber)
                setAddress(res.data.userInfo.address)
                setAvatar(res.data.userInfo.avatar)
                setEmail(res.data.userInfo.email)
                setFullName(res.data.userInfo.fullName)
                setBirthday(new Date(res.data.userInfo.birthday).toISOString().split('T')[0])
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [])
    const handleShowModalChangePass = () => {
        setShowMdChangePass(!showMdChangePass)
    }
    const handleShowDonHang = async () => {
        setShowDonHang(!showDonHang)
    }
    const handleShowDatCho = async () => {
        setShowDatCho(!showDatCho)
    }
    const handleSearchOrderDate = async () => {
        const params = {
            start: "1",
            length: '5',
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
    const handleSearchBookingDate = async () => {
        const formData = new FormData()
        formData.append('FromDate', new Date(startDate.toISOString().split('T')[0]).getTime())
        formData.append('ToDate ', new Date(endDate.toISOString().split('T')[0]).getTime())
        formData.append('Length ', 5)
        try {
            const res = await bookingApi.loadData(formData)
            setBookings(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    const handlePhotoChange = (e) => {
        console.log(e.target.value)
        setInfo({ ...info, avatar: e.target.files[0] })
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function () {
            var output = document.getElementById('prevew-imgMobile');
            output.src = reader.result;
        };
    }
    const handleGenderChange = (e) => {
        setChange(false)
        setGender(e.target.value)
    }
    const handleDateChange = (e) => {
        setBirthday(e.target.value)
    }
    const handleEditChange = () => {
        setChange(false)
        setNameEdit(!nameEdit)
    }
    const handleEmailChange = (e) => {
        setEmail(e)
        setEmailEdit(false)
        setChange(false)
    }
    const handleCapNhatBtn = async () => {
        const params = {
            phoneNumber: phone,
            fullName,
            birthday: new Date(birthday).getTime(),
            gender: String(gender),
            address,
            email,
            avatar
        }
        try {
            const res = await userApi.updateUser(params)
            console.log('data', res)
        } catch (error) {
            console.log(error)
        }
        console.log('data', params)
    }
    const userInfor = <div className='profileMobile__Component'>
        <h4>Thông tin tài khoản</h4>
        <div className='d-flex gap-2 flex-column'>
            <div className='profileMobile__Component__formImage'>
                <input type='file' hidden id='photo' onChange={handlePhotoChange} />
                <label htmlFor='photo'>
                    <img
                        id="prevew-imgMobile"
                        className='rounded'
                        style={{ width: 80, height: 80 }}
                        src={info?.avatar}
                        alt={info?.fullName}
                    />
                </label>
            </div>
            <div className='profileMobile__Component__formContent'>
                <div className='d-flex flex-column'>
                    <label htmlFor='name'>Họ tên:</label>
                    <div className='d-flex align-items-center bg-light position-relative'>
                        <input id='name' type='text' placeholder={info?.fullName} disabled={!nameEdit} className='w-100 ' />
                        <AiOutlineEdit onClick={handleEditChange} className='position-absolute end-0' style={{ zIndex: 1 }} />
                    </div>
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor='name'>Ngày sinh:</label>
                    <input id='birthday' type='date' value={birthday} onChange={handleDateChange} />
                </div>
                <div onChange={handleGenderChange}>
                    <input type='radio' name='gender' value='1' defaultChecked={info?.gender == 1} />Nam
                    <input type='radio' name='gender' value='2' defaultChecked={info?.gender == 2} /> Nữ
                    <input type='radio' name='gender' value='3' defaultChecked={info?.gender == 3} /> Khác
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor='phone'>Số điện thoại:</label>
                    <input id='phone' value={phone} onChange={e => setPhone(e.target.value)} readOnly type='number' />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor='email'>Email:</label>
                    <div className='w-100 d-flex position-relative align-items-center bg-light'>
                        <input id='email' className='w-100'
                            type='email' value={email} readOnly={emailEdit} onChange={e => handleEmailChange(e.target.value)} />
                        <AiOutlineEdit onClick={() => setEmailEdit(!emailEdit)} className='position-absolute end-0' />
                    </div>
                </div>
            </div>
        </div>

        <button className='btn btn-success' onClick={handleShowModalChangePass}>Đổi mật khẩu</button>
        <button disabled={change}
            onClick={handleCapNhatBtn} >Cập nhật</button>
        <button onClick={() => setShowUserInfo(false)}>Đóng</button>
    </div>
    const DonHang = <div className='profileMobile__Component'>
        <h4 className='text-center'>Đơn hàng của tôi</h4>
        <div className='d-flex gap-2 p-2 align-items-end bg-dark bg-opacity-10 rounded'>
            <div className='d-flex flex-column'>
                <span>Từ ngày:</span>
                <div className=''>
                    <DatePicker
                        className='rounded p-1 w-100'
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                </div>
            </div>
            <div>
                <span>Đến ngày:</span>
                <div>
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
            </div>
            <button onClick={handleSearchOrderDate} className='btn btn-primary'>Tìm</button>
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
        <button onClick={() => setShowDonHang(false)}>Đóng</button>
    </div>
    const DatCho = <div className='profileMobile__Component'>
        <h4>Lịch sử đặt chỗ</h4>
        <div className='d-flex gap-1 align-items-end p-2 bg-dark bg-opacity-10 rounded'>
            <div className='d-flex flex-column'>
                <span className=''>Từ ngày:</span>
                <div className='w-100'>
                    <DatePicker
                        className='rounded p-1 w-100'
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                </div>
            </div>
            <div className='d-flex flex-column'>
                <span className=''>Đến ngày:</span>
                <div className='w-100'>
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
            </div>
            <button onClick={handleSearchBookingDate} className='btn btn-primary flex-1' style={{ letterSpacing: 1, fontSize: 14 }}>Tìm</button>
        </div>
        {
            bookings?.length ?
                <div className='d-flex flex-column gap-2 rounded bg-dark bg-opacity-10'>
                    {
                        bookings?.map(order =>
                            <Link href={`/order/${order.id}`} key={order.id}>
                                <a className='border-bottom bg-dark bg-opacity-10 p-2 rounded'>
                                    <span>Ngày mua: {moment(order?.createdDate).format('DD/MM/yyyy')}</span>
                                    <p className='mb-0'>Tổng tiền: {order?.total}</p>
                                </a></Link>)
                    }
                </div>
                : <></>
        }
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
                <span>{shippingAddress?.address}-{shippingAddress?.wardName} - {shippingAddress?.districtName} - {shippingAddress?.cityName}</span>
            </div>
            <div className='profileMobile__Component__items'>
                <BiBuilding />
                <span>{shippingAddress?.address}-{shippingAddress?.wardName} - {shippingAddress?.districtName} - {shippingAddress?.cityName}</span>
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