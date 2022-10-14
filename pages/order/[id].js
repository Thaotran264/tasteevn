import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { orderApi, userApi } from '../../api-client'
import MerchantLayout from '../../components/MerchantLayout'
import { selectAuth } from '../../features/auth/authSlice'
import { formatter } from '../../utils/common'


const Detail = () => {
    const router = useRouter()
    const { id } = router.query
    const [data, setData] = useState()
    const [userData, setUserData] = useState()
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
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await userApi.getUserInfor()
                setUserData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])
    const {userInfo} = userData || {}
    // const { address, email, fullName, phoneNumber } = userInfo
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
    const renderUserInfo =
        <div className='rounded bg-dark bg-opacity-10 py-2' style={{ flex: 1 }}>
            <h3 className='text-center border-bottom border-dark'>Thông tin người mua</h3>
            <div className='px-2'>
                <div className='d-flex gap-2 align-items-center mb-2'>
                    <span className='fw-bold'>Họ và tên:</span>
                    <p className='mb-0'>{userInfo?.fullName}</p>
                </div>
                <div className='d-flex gap-2 align-items-center mb-2'>
                    <span className='fw-bold'>SĐT:</span>
                    <p className='mb-0'>{userInfo?.phoneNumber}</p>
                </div>
                <div className='d-flex gap-2 align-items-center mb-2'>
                    <span className='fw-bold'>Email:</span>
                    <p className='mb-0'>{userInfo?.email}</p>
                </div>
                <div className='d-flex gap-2 align-items-center mb-2'>
                    <span className='fw-bold'>Địa chỉ:</span>
                    <p className='mb-0'>{userInfo?.address}</p>
                </div>

            </div>
        </div>



    return (
        <MerchantLayout>
            <section className='container px-0'>
                <div className='d-flex gap-2' >
                    <div className='py-2' style={{ flex: 1 }}>
                        <h2 className='text-center border-bottom border-dark'>Thông tin đơn hàng</h2>
                        <div className='d-flex justify-content-between bg-dark bg-opacity-10 mb-2 align-items-center p-2 rounded    '>
                            <span className='fw-bold '>Ngày tạo:</span>
                            <p className='mb-0'>
                                {data?.createdDate}
                            </p>
                        </div>
                        {renderOrderDetails}
                        <div className='d-flex justify-content-between bg-dark bg-opacity-10 mb-2 align-items-center p-2 rounded    '>
                            <span className='fw-bold'>Tổng tiền:</span>
                            <p className='mb-0'>  {formatter.format(data?.total)}</p>
                        </div>
                    </div>
                    {
                        renderUserInfo
                    }

                </div>
            </section>
        </MerchantLayout>
    )
}

export default Detail