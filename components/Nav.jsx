import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'next/image'
import React from 'react'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import LoginModal from './LoginModal';
import Login from './Modal/Login';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectAuth } from '../features/auth/authSlice';
import { selectCart } from '../features/cart/cartSlice';
import CartModal from './Modal/CartModal';
import Link from 'next/link';
const Nav = () => {
  const [searchBox, setShowSearchBox] = useState(true)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const auth = useSelector(selectAuth)
  const cart = useSelector(selectCart)
  const { isLogged, authData } = auth
  const dispatch = useDispatch()
  const cities = [
    { name: 'HCM', id: 1 },
    { name: 'DN', id: 2 },
    { name: 'HN', id: 3 },
  ]
  const [showCart, setShowCart] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleShowSearchBox = () => {
    setShowSearchBox(!searchBox)
  }
  const handleSearchChange = () => { }
  const handleShowModalLogin = () => {
    setShowLoginModal(!showLoginModal)
  }
  const handleLogout = () => {
    dispatch(logout())
  }
  const handleShowCartModal = () => {
    setShowCart(true)
  }
  return (
    <nav className='nav container px-2 gap-2'>
      {
        showCart && <CartModal setShow={setShowCart} />
      }
      <div className='hideOnMobile position-relative d-flex align-items-center '>
        <Link href='/'>
          <a className='d-flex  h-100'>
            <Image src='/image/logo.jpg' height='40' width='100' />
          </a>
        </Link>
      </div>
      <div className='hideOnDesktop position-relative d-flex align-items-center h-100'>
        <Link href='/'>
          <a  className='d-flex'>
            <Image src='/image/logo512.png' width='40' height='40' />
          </a>
        </Link>
      </div>
      <Dropdown className='d-flex align-items-center justify-content-center navItem' >
        <Dropdown.Toggle
          className="border-0 rounded-0 border-warning border-bottom"
          id="dropdown-basic" style={{ color: '#fff' }}
        >
          TP HCM
        </Dropdown.Toggle>

        <Dropdown.Menu >
          {cities.map((item) => (
            <Dropdown.Item className='text-center py-2 border-bottom' key={item.id} href="#/action-1" value={item.id}>
              {item.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div className='d-flex align-items-center navItem' >
        <form
          className={`${searchBox ? 'active' : ''} navForm justify-content-end`}
          onSubmit={handleSubmit}
        >
          <input
            disabled={!searchBox}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="d-flex align-items-center" type="submit"
            onClick={handleShowSearchBox}>
            <BsSearch />
          </button>
        </form>
      </div>
      <div className='position-relative d-flex align-items-center p-2'>
        <AiOutlineShoppingCart onClick={handleShowCartModal} style={{cursor: 'pointer', color: '#fff', fontSize: 22}}/>
        <span
        className='rounded-5 d-flex align-items-center justify-content-center'
        style={{fontSize: 13, position:'absolute', top: '-3px', right: '-5px',
         backgroundColor: '#fff', width: 20, height: 20 }}>{cart?.length || 0}</span>
      </div>
      <div className='px-2 align-items-center navItem hideOnMobile' >
        {
          isLogged ?
            <Dropdown className='d-flex align-items-center justify-content-end ' >
              <Image src={authData.avatar || '/image/logo512.png'} width="30" height="30" alt={authData.fullName || ''} />
              <Dropdown.Toggle
                className="border-0 rounded-0 border-warning border-bottom d-flex align-items-center"
                id="dropdown-basic"
                style={{ color: '#fff' }}
              >
                {authData.fullName || ''}
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item className='text-center py-2 border-bottom'>Thông tin tài khoản
                </Dropdown.Item>
                <Dropdown.Item className='text-center py-2 border-bottom'>Gio hang</Dropdown.Item>
                <Dropdown.Item className='text-center py-2 border-bottom' onClick={handleLogout}>Đăng xuất
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> :
            <div className='d-flex align-items-center gap-1 justify-content-end'>
              <LoginModal />
            </div>
        }
      </div>
      <Dropdown className='d-flex align-items-center hideOnDesktop' >
        <Dropdown.Toggle
          className="border-0 rounded-0 border-warning border-bottom d-flex align-items-center"
          id="dropdown-basic"
          style={{ color: '#fff' }}
        >
          <FaBars />
        </Dropdown.Toggle>

        <Dropdown.Menu >
          {
            isLogged ?
              <>
                <Dropdown.Item className='text-center py-2 border-bottom'>Thông tin tài khoản
                </Dropdown.Item>
                <Dropdown.Item className='text-center py-2 border-bottom'>Giỏ hàng
                </Dropdown.Item>
                <Dropdown.Item className='text-center py-2 border-bottom'>Đăng xuất
                </Dropdown.Item>
              </>
              : <Dropdown.Item className='text-center py-2 border-bottom'>
                <LoginModal />
              </Dropdown.Item>
          }
        </Dropdown.Menu>
      </Dropdown>
      {
        showLoginModal && <Login setShowLoginModal={setShowLoginModal} />
      }
    </nav >
  )
}

export default Nav