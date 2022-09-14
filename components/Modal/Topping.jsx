import React, { useEffect, useRef } from 'react'
import { BsShopWindow } from 'react-icons/bs';
import { formatter } from '../../utils';

const Topping = ({ setShow, show }) => {
    console.log(show.data)
    let mbref = useRef();
    let titleRef = useRef()
    // useEffect(() => {
    //     const handleScroll = () => {

    //     };
    //     mbref.current.addEventListener("scroll", handleScroll);
    //     return () => {
    //         mbref.current.removeEventListener("scroll", handleScroll);
    //     };
    // });
    const handleClose = () => {
        setShow({ ...show, open: false })
    }
    return (
        <section
            className="hideOnDesktop position-fixed bottom-0 start-0 end-0 start-0 bg-opacity-75 bg-dark h-100"
            style={{ zIndex: 100 }}
        >
            <article ref={mbref} className="rounded d-flex bg-light flex-column align-items-center cart-container position-absolute bottom-0 start-0 end-0 w-100" style={{ height: '90vh', overflow: 'scroll' }}>
                <div
                    style={{
                        backgroundImage: `url(${show.data.image})`,
                        minHeight: 250,
                        width: '100%',
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    {/* <img src='https://images.pexels.com/photos/13527050/pexels-photo-13527050.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' /> */}
                </div>
                <div className='w-100 p-2' ref={titleRef} >
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2>{show.data.name}</h2>
                        <span>{formatter.format(show.data.price)}</span>
                    </div>
                    <p style={{ fontSize: 14 }}>Size</p>
                    <input type='text' placeholder='Thêm ghi chú' className='border-0 bg-opacity-100 w-100 text-success' />
                </div>
                <div style={{ minHeight: 700 }} className='w-100 px-2' >
                    <div className='d-flex justify-content-between'>
                        <h5>Topping</h5>
                        <span>Tối đa 10</span>
                    </div>
                    <ul className='ps-0'>
                        {
                            show.data.groupToppings?.map(item =>
                                <li style={{ listStyle: 'none', fontSize: 14 }} className='border-bottom border-dark p-3'>{item.name}</li>

                            )
                        }
                    </ul>
                </div>
                <div className='position-fixed bg-light bottom-0 py-3 w-100 d-flex justify-content-center align-items-center gap-3' style={{ boxShadow: '0 5px 10px rgba(0,0,0,0.8)', zIndex: 99 }}>
                    <div className='d-flex align-items-center gap-2'>
                        <button className='btn text-success'>-</button>
                        <span>1</span>
                        <button className='btn text-success'>+</button>
                    </div>
                    <button className='btn btn-success'>Thêm 33.000 đ</button>
                    <button className='btn btn-danger' onClick={handleClose}>Đóng</button>
                </div>
            </article>
        </section >
    )
}

export default Topping