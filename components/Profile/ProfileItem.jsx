import React, { useState } from 'react'
import { BsChevronRight, BsHeartFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import QLDH from '../Modal/QLDH';

const ProfileItem = ({ text }) => {
    const [show, setShow] = useState(false)
    return (
        <article className='d-flex align-items-center mb-2 bg-light p-3'>
            {
                text == 'Thông tin người dùng' ? <BiUser className='me-2' style={{ fontSize: 22 }} />
                    : <AiOutlinePlus className='text-danger me-2' />
            }

            <p className='mb-0'>{text}</p>
            <button className='ms-auto button' onClick={() => setShow(!show)}>
                <BsChevronRight />
            </button>
            {
                show && <QLDH setShow={setShow} text={text} />
            }
        </article>
    )
}

export default ProfileItem