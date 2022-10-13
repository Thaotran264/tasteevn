import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { formatter } from '../../utils';
import Topping from '../Modal/Topping';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Menu = ({ menuPos, productList }) => {
  const isLogin = true
  const { items, menus } = productList
  const [showToppingModal, setShowToppingModal] = useState({
    open: false,
    data: null
  })
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

  const renderMenus = menus.map(item => <div key={item.id} className="bg-dark bg-opacity-10 text-dark mb-2 rounded p-2">
    <h2 className='pb-1 border-bottom border-dark'>{item.name}</h2>
    <div className="menuContainer">
      {item.items.map(it => <div key={it.id} className="bg-light d-flex flex-column align-items-center menuItems py-2" style={{ minWidth: '19%' }}>
        <div>
          <Image src={it.image || '/image/logo512.png'} alt={it.name} width="80" height={80} />
        </div>
        <p>{it.name}</p>
        <p className='fw-bold text-danger'>{formatter.format(it.price)}</p>
        <button
          onClick={() => handleAddTopping(it)} className='px-2 py-1 border-0' style={{ backgroundColor: 'hsl(27, 100%, 71%)', color: '#fff' }}>Mua</button>
      </div>)}
    </div>
  </div>
  )
  const renderItems = items.map(item => <div key={item.id} className="bg-dark bg-opacity-10 text-dark mb-2 rounded p-2">
    <h2 className='pb-1 border-bottom border-dark'>{item.name}</h2>
    <div className="menuContainer">
      {items.map(it => <div key={it.id} className="bg-light py-2 d-flex flex-column align-items-center menuItems" style={{ minWidth: '19%' }}>
        <div>
          <Image src={it.image || '/image/logo512.png'} alt={it.name} width="80" height={80} />
        </div>
        <p className='fw-bold'>{it.name}</p>
        <p className='fw-bold text-danger'>{formatter.format(it.price)}</p>
        <button
          onClick={() => handleAddTopping(it)} className='px-2 py-1 border-0' style={{ backgroundColor: 'hsl(27, 100%, 71%)', color: '#fff' }}>Mua</button>
      </div>)}
    </div>
  </div>
  )
  return (
    <section className="container px-0">
      <div className="d-flex flex-column">
        <ul className="d-flex bg-dark text-dark bg-opacity-25 ps-0 menuScrollbar">
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
      setShowToppingModal={setShowToppingModal}/>}
      <ToastContainer position="top-center" />
    </section>
  );
}

export default Menu