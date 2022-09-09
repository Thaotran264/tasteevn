import React, { useState } from 'react'
import ToppingItem from './ToppingItem'
import { MdOutlineEventNote } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import Image from 'next/image'
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
const Topping = ({ setShow, show }) => {
    const { data } = show
    const [count, setCount] = useState(1)
    const [showNote, setShowNote] = useState(false)
    return (
        <article className='topping__article'>
            <div className='topping__title px-2 border-bottom position-relative py-2'>
                <h6 className='text-center'>Thêm món mới</h6>
                <button className='button topping__btn-close position-absolute top-0 end-0' onClick={() => setShow({ ...show, show: !show.show })}><AiOutlineClose style={{ fontSize: 22 }} /></button>
            </div>
            <div className='topping__info px-2 py-3'>
                <Image src={data.image || '/image/logo512.png'} width={80} height={80} />
                <div className='topping__content ms-2'>
                    <h5>{data.name}</h5>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div>
                            <span className='text-price-line-through me-2'>35.000 đ</span>
                            <span className='text-discount'>10.000 đ</span>
                        </div>
                        <div className='ms-auto'>
                            <button className={`button button--orange-outline ${count == 1 ? 'disabled' : ''}`}
                                disabled={count == 1}
                                onClick={() => setCount(prev => prev - 1)}>-</button>
                            <span className='mx-2'>{count}</span>
                            <button className='button button--orange ' onClick={() => setCount(prev => prev + 1)}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='topping__menu'>
                {listTopping.map(item =>
                    <ToppingItem key={item.id} item={item} />)}
                <div className='py-2 mx-2 mb-0 d-flex align-items-center'>
                    <MdOutlineEventNote style={{ fontSize: 20 }} className='me-2' />
                    {/* <span className='note'>Thêm ghi chú cho quán</span> */}
                    <input type='text' placeholder='Thêm ghi chú cho quán' readOnly={!showNote}
                        style={{ color: 'gray', borderRadius: 6, border: 'none', outline: 'none', width: '100%', fontSize: 13 }} />
                    <button
                        onClick={() => setShowNote(prev => !prev)}
                        className='button ms-auto button--orange d-flex align-items-center justify-content-center'><FaRegEdit /></button>
                </div>
            </div>
            <div className='px-2'>
                <button className='button topping__btn-add w-100'>Thêm vào giỏ hàng - <span>25.000 đ</span></button>
            </div>
        </article >
    )
}

export default Topping