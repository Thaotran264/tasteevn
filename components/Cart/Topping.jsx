import React from 'react'
import ToppingItem from './ToppingItem'
import { MdOutlineEventNote } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
const listTopping = [
    {
        id: 1,
        name: 'TOPPING',
        value: [
            { id: 1, name: "Mì Tomyum Bò Mĩ", price: 55000 },
            { id: 2, name: "Mì Tomyum Bò Úc", price: 55000 },
            { id: 3, name: "Mì kim chi hải sản", price: 55000 },
            { id: 4, name: "Mì kim chi Bò Mĩ", price: 55000 },
        ]
    },
    {
        id: 2,
        name: 'ICE',
        value: [
            { id: 1, name: "100% đá" },
            { id: 2, name: "75% đá" },
            { id: 3, name: "50% đá" },
            { id: 4, name: "0% đá" },
        ]
    },
]
const Topping = ({ setShow }) => {
    return (
        <article className='topping__article'>
            <div className='topping__title px-2 border-bottom'>
                <h6 className='mb-0'>Thêm món mới</h6>
                <button className='button topping__btn-close' onClick={() => setShow(prev => !prev)}><AiOutlineClose style={{ fontSize: 22 }} /></button>
            </div>
            <div className='topping__menu'>
                {listTopping.map(item =>
                    <ToppingItem key={item.id} item={item} />)}
                <p className='py-2 mx-2 mb-0 d-flex align-items-center'><MdOutlineEventNote style={{ fontSize: 18 }} className='me-2' />Ghi chú</p>
            </div>
            <div className='px-2'>
                <button className='button topping__btn-add w-100'>Thêm vào giỏ hàng - <span>25.000 đ</span></button>
            </div>
        </article>
    )
}

export default Topping