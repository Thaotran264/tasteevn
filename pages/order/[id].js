import axios from 'axios'
import moment from 'moment/moment'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { orderApi, userApi } from '../../api-client'
import Layout from '../../components/Layout'
import MerchantLayout from '../../components/MerchantLayout'
import { selectAuth } from '../../features/auth/authSlice'
import { formatter } from '../../utils/common'


const Detail = () => {
    const router = useRouter()
    const { id } = router.query
    const [data, setData] = useState()
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await orderApi.detail(id)
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [id])
    const { shippingAddress } = data || {}

    const totalPrice = data?.orderDetails?.reduce((cal, item) => cal += item.price * item.quantity, 0)

    const renderOrderDetails = data?.orderDetails?.map(order => (
        <div className=' rounded p-2 d-flex shadow-sm flex-column gap-2' key={order.id} style={{ backgroundColor: '#fff' }}>
            <div className='d-flex gap-2 align-items-center bg-success bg-opacity-10 rounded'  >
                <Image src={order.itemImage || '/image/logo512.png'} width="80" height="80" />
                {/* <p className='text-success'></p> */}
                <div className='d-flex flex-column p-2'>
                    <div className='d-flex px-2'>
                        <p className='mb-0'><span className='font-bold'>{order.quantity}</span>x {order.itemName} </p>
                        <p className='mb-0 text-danger'>{formatter.format(order.price * order.quantity)}</p>
                    </div>
                    <button style={{ fontSize: 11 }} className='border-0 text-decoration-underline ms-auto mb-0'>Xem chi tiết</button>
                </div>
            </div>
            <div className='d-flex flex-column gap-1 d-none'>
                {
                    order.orderToppings?.map(orderTopping =>
                        <p key={orderTopping.id} className='bg-dark bg-opacity-10 mb-0 rounded p-2'>{orderTopping.toppingName}</p>
                    )
                }
            </div>
        </div>
    ))
    const renderUserInfo = <div className='rounded p-2' style={{ backgroundColor: '#fff' }}>
        <h5 className='text-center border-bottom border-dark'>Thông tin người mua</h5>
        <div className='px-2'>
            <div className='d-flex gap-2 align-items-center mb-2'>
                <span className='fw-bold'>Họ và tên:</span>
                <p className='mb-0'>{shippingAddress?.name}</p>
            </div>
            <div className='d-flex gap-2 align-items-center mb-2'>
                <span className='fw-bold'>SĐT:</span>
                <p className='mb-0'>{shippingAddress
                    ?.phone}</p>
            </div>
            {/* <div className='d-flex gap-2 align-items-center mb-2'>
                <span className='fw-bold'>Email:</span>
                <p className='mb-0'>{shippingAddress
                    ?.email}</p>
            </div> */}
            <div className='d-flex gap-2 align-items-center mb-2'>
                <span className='fw-bold'>Địa chỉ:</span>
                <p className='mb-0'>{data
                    ?.address}</p>
                <p></p>
            </div>

        </div>
    </div>

    return (
        <Layout>
        <section className='container mt-2 d-flex flex-column gap-2' >
            <h4 className='text-center border-bottom fw-bold'>Chi tiết đơn hàng</h4>
            <div className='d-flex gap-2 flex-column w-100 ' >
                {
                    renderUserInfo
                }
                <div className='p-2 rounded d-flex flex-column gap-1' style={{ backgroundColor: '#fff' }}>
                    <h5 className='text-center border-bottom border-dark'>Thông tin đơn hàng</h5>
                    <div className='d-flex justify-content-between align-items-center px-2 rounded    ' >
                        <span className='fw-bold '>Ngày tạo:</span>
                        <p className='mb-0'>
                            {moment(data?.createdDate).format('DD/MM/yyyy hh:mm')}
                        </p>
                    </div>
                    {renderOrderDetails}
                    <div className='d-flex justify-content-between align-items-center p-2 rounded    ' style={{ backgroundColor: '#fff' }}>
                        <span className='fw-bold'>Tổng tiền:</span>
                        <p className='mb-0'>  {formatter.format(totalPrice)}</p>
                    </div>
                </div>

            </div>
        </section>
        </Layout>
    )
}

export default Detail