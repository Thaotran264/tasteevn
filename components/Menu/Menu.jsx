import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { removeFromCart, selectCart } from '../../features/cart/cartSlice';
import { formatter } from '../../utils';
import Topping from '../Modal/Topping';

const Menu = ({ productList }) => {
  const isLogin = true
  const { items, menus } = productList
  const [showToppingModal, setShowToppingModal] = useState({
    open: false,
    data: null
  })
  const cartData = useSelector(selectCart)
  const dispatch = useDispatch()
  // console.log('cartData', cartData)
  const notify = () => toast.error("Vui lòng đăng nhập !!!", {
    pauseOnHover: false,
  });
  const handleAddTopping = (value) => {
    if (!isLogin) {
      notify()
      return
    } else {
      console.log(value)
      setShowToppingModal({
        open: !showToppingModal.open,
        data: value
      })
    }
  }
  const handleRemoveCartItem = (value) => {
    dispatch(removeFromCart(value))
  }
  let mbref = useRef();
  const [menuPos, setMenuPos] = useState(false)
  useEffect(() => {
    let mbT = mbref.current?.offsetTop;
    const handleScroll = () => {
      if (window.scrollY >= mbT + 40) {
        setMenuPos(true);
      } else {
        setMenuPos(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const renderMenus = menus.map(item => <div key={item.id}

    className=" text-dark mb-2 rounded p-2" style={items.length ? { marginTop: 0 } : { marginTop: 48 }}>
    <div className='d-flex justify-content-between'>
    <h3 className='pb-1'>{item.name}</h3>
    <span className='' style={{fontSize: 13}}>Xem thêm</span>
    </div>
    <div className="menuContainer">
      {item.items.slice(0,5).map(it => <div key={it.id} className="rounded d-flex flex-column rounded align-items-center menuItems py-2" style={{boxShadow: '0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)' }}>
        <div>
          <Image src={it.image || '/image/logo512.png'} alt={it.name} width={160} height={160} objectFit='cover' />
        </div>
        <p>{it.name}</p>
        <p className='fw-bold text-danger'>{formatter.format(it.price)}</p>
        <div>
          <button
            className='px-2 py-1 border-0' onClick={() => handleRemoveCartItem(it)} style={{ backgroundColor: 'hsl(27, 100%, 71%)', color: '#fff', minWidth: 30 }}>-</button>
          <span className='mx-2'>{it.quantity}</span>
          <button
            className='px-2 py-1 border-0' onClick={() => handleAddTopping(it)} style={{ backgroundColor: 'hsl(27, 100%, 71%)', color: '#fff', minWidth: 30 }}>+</button>
        </div>
        {/* {
          !cartData?.find(cartItem => cartItem.itemId == it.id)?.length &&
          <button
            onClick={() => handleAddTopping(it)} className='px-2 py-1 border-0 mb-1' style={{ backgroundColor: 'hsl(27, 100%, 71%)', color: '#fff' }}>Mua</button>

        }
        {
          cartData?.find(cartItem => cartItem.itemId == it.id && <div>
            <button
              className='px-2 py-1 border-0' onClick={() => handleRemoveCartItem(it)} style={{ backgroundColor: 'hsl(27, 100%, 71%)', color: '#fff', minWidth: 30 }}>-</button>
            <span className='mx-2'>{item.quantity}</span>
            <button
              className='px-2 py-1 border-0' onClick={() => handleAddTopping(it)} style={{ backgroundColor: 'hsl(27, 100%, 71%)', color: '#fff', minWidth: 30 }}>+</button>
          </div>)
        } */}
      </div>)}
    </div>
  </div>
  )
  const renderItems = items.map(item => <div key={item.id} className="text-dark mb-2 rounded p-2" style={{ marginTop: 48 }}>
    <div className='d-flex justify-content-between'>
      <h3 className='pb-1'>{item.name}</h3>
      <span>Xem thêm</span>
    </div>
    <div className="menuContainer">
      {items.map(it => <div key={it.id} className="rounded bg-light py-2 d-flex flex-column align-items-center menuItems" style={{ minWidth: '15%', boxShadow: '0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)' }}>
        <div>
          <Image src={it.image || '/image/logo512.png'} alt={it.name} width="120" height={120} />
        </div>
        <p className='fw-bold'>{it.name}</p>
        <p className='fw-bold text-danger'>{formatter.format(it.price)}</p>
        <div className='d-flex align-items-center'>
          <button
            className='px-2 py-1 border-0' onClick={() => handleAddTopping(it)} style={{ backgroundColor: 'hsl(27, 100%, 71%)', color: '#fff', minWidth: 30 }}>Mua</button>
          {
            cartData?.filter(cartItem => cartItem.itemId == it.id).length > 0 &&
            <span className='mx-2 text-danger'>{`${cartData?.filter(cartItem => cartItem.itemId == it.id).length}x`}</span>
          }
        </div>
        {/* {
          !cartData?.filter(cartItem => cartItem.itemId == it.id).length &&
          <button
            onClick={() => handleAddTopping(it)} className='px-2 py-1 border-0 mb-1' style={{ backgroundColor: 'hsl(27, 100%, 71%)', color: '#fff' }}>Mua</button>

        }
        {
          cartData?.filter(cartItem => cartItem.itemId == it.id)?.map(item => <div>
            <button
              className='px-2 py-1 border-0' onClick={() => handleRemoveCartItem(it)} style={{ backgroundColor: 'hsl(27, 100%, 71%)', color: '#fff', minWidth: 30 }}>-</button>
            <span className='mx-2'>{item.quantity}</span>
            <button
              className='px-2 py-1 border-0'
              onClick={() => handleAddTopping(it)}
              style={{ backgroundColor: 'hsl(27, 100%, 71%)', color: '#fff', minWidth: 30 }}>+</button>
          </div>)
        } */}
      </div>)}
    </div>
  </div >
  )
  return (
    <section className="container px-0" ref={mbref}>
      <div className="d-flex flex-column position-relative" >
        <ul className={`rounded d-flex ps-0 menuScrollbar ${menuPos ? 'active container px-0' : ''}`}
        >
          {items.map(item => <li key={item.id} className="py-2 px-4 fw-bold menuListItem" >{item.name}</li>)}
          {menus.map(item => <li key={item.id} className="py-2 px-4 fw-bold menuListItem" >{item.name}</li>)}
        </ul>
        {
          renderItems
        }
        {
          renderMenus
        }
      </div>

      <div
      // className={`${menuPos ? "position-fixed w-100 top-0 start-0" : "d-none"} `}
      // style={menuPos ? { marginTop: 0, zIndex: 1 } : {}}
      >
        {/* <div className="container">
              <div className="row">
                <div className="col-md-4 col-lg-4">
                  <ul className="ps-0 bg-opacity-10 d-flex gap-1 flex-wrap mb-0 justify-content-center">
                    {menus.map((item, index) => (
                      <li
                        key={item.id}
                        className="border rounded-5 border-dark px-2 text-center bg-white "
                        style={{ listStyle: "none" }}
                      >
                        <Link href={`#menuRC${index}`} scroll={true}>
                          <a className="py-1 px-4 d-block text-decoration-none text-dark" >{item.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div> */}
      </div>
      <div className="container">
        {/* <div className="row">
              <div className={`col-md-4 col-lg-4 py-2 `}>
                <ul className="ps-0 bg-light bg-opacity-10 d-flex flex-wrap gap-1 justify-content-center">
                  {menus?.map((item, index) => (
                    <li
                      key={item.id}
                      className="border rounded-5 border-dark px-2 text-center bg-white "
                      style={{ listStyle: "none" }}
                    >
                      <Link href={`#menuRC${index}`} scroll={true}>
                        <a className="py-1 px-4 d-block text-decoration-none text-dark" >{item.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`col-md-8 col-lg-8 rounded px-0 ${menuPos && "offset-4"}`}
                style={menuPos ? { zIndex: 2 } : {}}
              >
                
                {menus.map((menu, index) => 
                  menu.items?.length > 0 && (<article key={menu.id} className='mb-2' style={{ backgroundColor: '#fff', borderRadius: 6 }}>
                      <h4 id={`menuRC${index}`} className="border-bottom border-dark p-2">
                        {menu.name}
                      </h4>
                      {menu.items.map((menuItem) => (
                        <MenuItem data={menuItem} key={menuItem.id} notify={notify} />
                      ))}
                    </article>)
                )}
                {items.map((item, index) =>
                  <article key={item.id} className='mb-2' style={{ backgroundColor: '#fff', borderRadius: 6 }}>
                    <MenuItem data={item} key={item.id} notify={notify} />
                  </article>
                )}
              </div>
            </div> */}
      </div>
      {showToppingModal.open && <Topping
        showToppingModal={showToppingModal}
        setShowToppingModal={setShowToppingModal} />}
      <ToastContainer position="top-center" />
    </section>
  );
}

export default Menu