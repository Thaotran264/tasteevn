import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { CartContext } from '../../context/cartContext';
import { formatter } from '../../utils';
import { Link } from 'react-scroll'
import 'react-toastify/dist/ReactToastify.css';
import Topping from '../Modal/Topping';
import { BsFillHandbagFill } from 'react-icons/bs'
const Menu = ({ productList }) => {
  const { items, menus } = productList
  const { state: { auth }, dispatch } = useContext(CartContext)
  const { token } = auth
  const [showToppingModal, setShowToppingModal] = useState({
    open: false,
    data: null
  })
  const notify = (text) => toast.error(text, { pauseOnHover: false, });
  const handleAddTopping = (value) => {
    if (!token) {
      notify("Vui lòng đăng nhập để thực hiện chức năng này!!!")
      return
    } else {
      setShowToppingModal({
        open: !showToppingModal.open,
        data: value
      })
    }
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
  const renderMenus = menus.map(item => <div id={`${item.name}`} key={item.id}
    className=" text-dark mb-2 rounded p-2" style={items.length ? { marginTop: 0 } : { marginTop: 48 }}>
    <div className='d-flex justify-content-between align-items-center'>
      <h3 className='pb-1'>{item.name}</h3>

    </div>
    <div className="menuContainer mb-2">
      {item.items.map(it => <div key={it.id} className="rounded d-flex flex-column rounded-4 align-items-center menuItems py-2 position-relative" style={{ boxShadow: '0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)' }}>
        <div>
          <Image src={it.image || '/image/logo512.png'} alt={it.name} width={160} height={160} objectFit='cover' />
        </div>
        <p>{it.name}</p>
        <div className='position-relative w-100 text-center'>
          <p className='fw-bold text-danger mb-0'>{formatter.format(it.price)}</p>
          <button
            className='d-flex align-items-center justify-content-center rounded-5 border-0 position-absolute bottom-0 end-0 me-2' onClick={() => handleAddTopping(it)} style={{ width: 30, height: 30, color: '#fff', backgroundColor: 'hsl(27, 100%, 71%)' }}>
            <BsFillHandbagFill />
          </button>
        </div>
      </div>
      )}
    </div>

  </div>
  )
  const renderItems = items.map(item => <div key={item.id} className="text-dark mb-2 rounded p-2" style={{ marginTop: 48 }} id={`${item.name}`}>
    <div className='d-flex justify-content-between align-items-center'>
      <h3 className='pb-1'>{item.name}</h3>
    </div>
    <div className="menuContainer">
      {items.map(it => <div key={it.id} className="rounded-3 bg-light py-2 d-flex flex-column align-items-center menuItems position-relative" style={{ minWidth: '15%', boxShadow: '0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)' }}>
        <div>
          <Image src={it.image || '/image/logo512.png'} alt={it.name} width="120" height={120} />
        </div>
        <p className='fw-bold'>{it.name}</p>
        <div className='position-relative w-100 text-center'>
          <p className='fw-bold text-danger'>{formatter.format(it.price)}</p>
          <button
            className='d-flex align-items-center justify-content-center rounded-5 border-0 position-absolute bottom-0 end-0 me-2' onClick={() => handleAddTopping(it)} style={{ backgroundColor: 'hsl(27, 100%, 71%)', width: 30, height: 30, color: '#fff' }}>
            <BsFillHandbagFill />
          </button>
        </div>
      </div>
      )}
    </div>

  </div >
  )
  return (
    <section className="container px-0" ref={mbref}>
      <div className="d-flex flex-column position-relative" >
        <div className={`d-flex justify-content-center rounded menuScrollbar ${menuPos ? 'active px-0 rounded-0' : ''}`}>
          <ul className='d-flex px-0 mb-0 container'
          >
            {items.map(item => <li key={item.id} className="py-2 px-4 fw-semibold menuListItem" >
              <Link activeClass="active" to={`${item.name}`} spy={true} offset={-100} smooth={true}>
                {item.name}
              </Link>
            </li>)}
            {menus.map(item => <li key={item.id} className="py-2 px-4 fw-semibold menuListItem" >
              <Link activeClass="active" to={`${item.name}`} spy={true} offset={-100} smooth={true}>
                {item.name}
              </Link></li>)}
          </ul>
        </div>

        {
          renderItems
        }
        {
          renderMenus
        }
      </div>
      {showToppingModal.open ? <Topping
        showToppingModal={showToppingModal}
        setShowToppingModal={setShowToppingModal} />
        : <></>}

      <ToastContainer position="top-center" pauseOnFocusLoss={false} />
    </section>
  );
}

export default Menu