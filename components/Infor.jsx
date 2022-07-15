import React from 'react'
import { BsClock } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'
import Image from 'next/image'
const Infor = () => {
    return (
        <div className="container-fluid bg-white">
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <Image src='https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={480} height={300} />
                </div>
                <div className="col-7">
                    <h2>Bếp Bà Muối - Ăn Vặt Online</h2>
                    <p>606/52 Đường 3 Tháng 2, P. 14, Quận 10, TP. HCM</p>
                    <span>Mở cửa</span> <BsClock />06:00 - 22:00 <br />
                    <span><MdAttachMoney />44,000 - 85,000</span>
                    <hr />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Infor