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
    console.log('id',id)
    const [data, setData] = useState()
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await orderApi.detail(id)
                console.log(res.data)
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
        <div className='bg-dark bg-opacity-10 rounded p-2 mb-2' key={order.id}>
            <div className='d-flex justify-content-between'>
                <Image src={order.itemImage || '/image/logo512.png'} width="80" height="80" />
                <p className='fw-bold'>{order.itemName}</p>
                <p className='text-success'>x{order.quantity}</p>
                <p className='text-danger'>{formatter.format(order.price)}</p>
            </div>
            <div className='d-flex gap-1'>
                {
                    order.orderToppings?.map(orderTopping =>
                        <p key={orderTopping.id}>{orderTopping.toppingName}</p>
                    )
                }
            </div>
        </div>
    ))
    const renderUserInfo = <div className='rounded shadow p-2 '>
        <h3 className='text-center border-bottom border-dark'>Thông tin người mua</h3>
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
        <section className='container px-0 py-4' style={{marginTop: 54}}>
            <div className='d-flex gap-2 flex-column w-75 mx-auto ' >
                <div className='p-2 shadow rounded' style={{ flex: 1 }}>
                    <h2 className='text-center border-bottom border-dark'>Thông tin đơn hàng</h2>
                    <div className='d-flex justify-content-between bg-dark bg-opacity-10 mb-2 align-items-center p-2 rounded    '>
                        <span className='fw-bold '>Ngày tạo:</span>
                        <p className='mb-0'>
                            {moment(data?.createdDate).format('DD/MM/yyyy')}
                        </p>
                    </div>
                    {renderOrderDetails}
                    <div className='d-flex justify-content-between bg-dark bg-opacity-10 mb-2 align-items-center p-2 rounded    '>
                        <span className='fw-bold'>Tổng tiền:</span>
                        <p className='mb-0'>  {formatter.format(totalPrice)}</p>
                    </div>
                </div>
                {
                    renderUserInfo
                }
            </div>
        </section>
    )
}
Detail.getLayout = function getLayout(Page) {
    return <Layout>{Page}</Layout>;
};
export default Detail