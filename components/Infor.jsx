import React from 'react'
import { BsClock } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'
import Image from 'next/image'
const Infor = () => {
    return (
        <div className="container-fluid py-1">
            <div className="container d-flex justify-content-between gap-3 border-bottom border-secondary pb-3">
                <div className='border-end border-secondary pe-3'>
                    <Image src='https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={480} height={300} />

                </div>
                <div className='flex-fill'>
                    <h2 className='fs-3'>Mì Ý siêu to khổng lồ</h2>
                    <p>606/52 Đường 3 Tháng 2, P. 14, Quận 10, TP. HCM</p>
                    <p><BsClock style={{ fontSize: 24 }} className='me-2' />06:00 - 22:00 </p>
                    <hr />
                </div>

            </div>
        </div>
    )
}

export default Infor