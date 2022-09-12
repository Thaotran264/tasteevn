import Image from 'next/image'
import React, { useState } from 'react'
import { formatter } from '../../utils/common'

const OrderItem = ({ item }) => {
    const [show, setShow] = useState(false)
    console.log(item)
    return (
        <article className='d-flex flex-column w-100 mb-2 p-2 rounded' style={{ backgroundColor: '#e5e5e5' }}>
            <div className='d-flex justify-content-between'>
                <p>{item.createdDate}</p>
                <p>#{item.orderCode}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Người tạo đơn: {item.createdBy}</p>
                <p>Hoàn thành</p>
            </div>
            {
                show && <div className='d-flex flex-column'>
                    {
                        item.orderDetails.map(it =>
                            <>
                                <div className='d-flex mb-2 justify-content-between border-bottom border-dark py-2'>
                                    <Image width={100} height={80} src={it.itemImage || 'https://images.pexels.com/photos/13415115/pexels-photo-13415115.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'} />
                                    <p>{it.itemName}</p>
                                    <p>{formatter.format(it.price)}</p>
                                </div>
                            </>)
                    }
                </div>
            }
            <p>Thành tiền: {formatter.format(item.total)}</p>
            <button className='button w-50 align-self-center button--orange' onClick={() => setShow(!show)}>{!show ? "Xem chi tiết" : "Ẩn bớt"}</button>
        </article>
    )
}

export default OrderItem