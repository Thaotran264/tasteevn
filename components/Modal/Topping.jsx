import React from 'react'

const Topping = () => {
    return (
        <section
            className="position-fixed bottom-0 start-0 end-0 start-0 bg-opacity-75 bg-dark h-100"
            style={{ zIndex: 100 }}
        >
            <article className="rounded px-2 py-4 d-flex bg-light flex-column align-items-center cart-container position-absolute bottom-0 start-0 end-0 w-100" style={{ height: '70vh' }}>
                <h2 className="cart-title">Thông tin giỏ hàng</h2>
                {
                    cart.length >= 1 ? <>
                        <div className="w-100 overflow-auto mb-2 py-2 rounded" style={{ maxHeight: 400 }}>
                            {
                                cart?.map(item =>
                                    <div className="d-flex w-100 border-bottom mb-2 py-2 bg-white rounded p-2 position-relative" key={item.id}>
                                        <div className="me-2">
                                            <Image
                                                className="rounded"
                                                src={item.image || 'https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'}
                                                alt=""
                                                width={110}
                                                height={110}
                                            />
                                        </div>
                                        <article className="w-100">
                                            <h4 className="cart-item-title">{item.name}</h4>
                                            <div className="d-flex w-100 justify-content-between align-items-end">
                                                <div>
                                                    <span className="cart-item-price text-danger fs-5">{item.saleNumber || 0}</span>
                                                    <br />
                                                    <span className="cart-item-price fs-6" style={{ textDecoration: ' line-through' }}>{item.price}</span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    {
                                                        <>
                                                            <button
                                                                className="border-0 rounded d-flex align-items-center justify-content-center"
                                                                onClick={() => dispatch(removeFromCart(item.id))}
                                                                style={{ backgroundColor: '#f7a76c', color: '#fff', fontSize: 22, height: 30, width: 30 }}
                                                            >
                                                                -
                                                            </button>
                                                            <span className="mx-2">{item.quantity}</span>
                                                            <button
                                                                className="border-0 rounded d-flex align-items-center justify-content-center"
                                                                onClick={() => dispatch(addToCart(item))}
                                                                style={{ backgroundColor: '#f7a76c', color: '#fff', fontSize: 22, height: 30, width: 30 }}
                                                            >
                                                                +
                                                            </button>
                                                        </>
                                                    }

                                                </div>
                                            </div>
                                        </article>
                                        <button className="button button--delete position-absolute top-0 end-0"
                                            onClick={() => dispatch(deleteItem(cart, item.id))}><BsTrash className="text-light" /></button>
                                    </div>
                                )
                            }
                        </div>
                        <p className="border-bottom border-dark">Tổng thanh toán: <span className="cart-item-price">{formatter.format(total)}</span></p>
                        <div className="cartButtonGroup">
                            <Link href="/cart">
                                <a className="btn mx-auto btn-success w-100 text-light justify-content-center d-flex align-items-center gap-1">
                                    <BsCart style={{ fontSize: 22 }} />
                                    Trang thanh toán
                                </a>
                            </Link>
                            <button className="btn btn-danger w-100" onClick={() => setShow(false)}><AiOutlineClose /> Đóng</button>
                        </div>
                    </>
                        :
                        <>
                            <h2>Giỏ hàng trống</h2>
                            <button className="btn btn-danger" onClick={() => setShow(false)}><AiOutlineClose /> Đóng</button>
                        </>
                }
            </article>
        </section>
    )
}

export default Topping