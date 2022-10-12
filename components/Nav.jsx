import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'next/image'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import LoginModal from './LoginModal';
import Login from './Modal/Login';
const Nav = () => {
  const [searchBox, setShowSearchBox] = useState(true)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const logIn = true
  const cities = [
    { name: 'HCM', id: 1 },
    { name: 'DN', id: 2 },
    { name: 'HN', id: 3 },
  ]

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
  return (
    <nav className='nav container px-2 gap-2'>
      <div className='hideOnMobile position-relative d-flex align-items-center '>
        <Image src='/image/logo.jpg' height='40' width='100' />
      </div>
      <div className='hideOnDesktop position-relative d-flex align-items-center '>
        <Image src='/image/logo512.png' width='40' height='40' />
      </div>
      <Dropdown className='d-flex align-items-center justify-content-center navItem' >
        <Dropdown.Toggle
          className="border-0 rounded-0 border-warning border-bottom"
          id="dropdown-basic"style={{color: '#fff'}}
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
      <div className='px-2 align-items-center navItem hideOnMobile' >
        {
          logIn ?
            <Dropdown className='d-flex align-items-center justify-content-end ' >
              <AiOutlineUser className='me-2 bg-light text-dark rounded-5 p-2' style={{ height: 30, width: 30 }} />
              <Dropdown.Toggle
                className="border-0 rounded-0 border-warning border-bottom d-flex align-items-center"
                id="dropdown-basic"
                style={{color: '#fff'}}
              >
                User 01
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item className='text-center py-2 border-bottom' href="#/action-1">Thông tin tài khoản
                </Dropdown.Item>
                <Dropdown.Item className='text-center py-2 border-bottom' href="#/action-1">Gio hang</Dropdown.Item>
                <Dropdown.Item className='text-center py-2 border-bottom' href="#/action-1">Đăng xuất
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
          style={{color: '#fff'}}
        >
          <FaBars />
        </Dropdown.Toggle>

        <Dropdown.Menu >
          {
            !logIn ? 
        <Dropdown.Item className='text-center py-2 border-bottom'>
          <LoginModal />
          </Dropdown.Item>
          : <>
          <Dropdown.Item className='text-center py-2 border-bottom'>Thông tin tài khoản
          </Dropdown.Item>
          <Dropdown.Item className='text-center py-2 border-bottom'>Giỏ hàng
          </Dropdown.Item>
          <Dropdown.Item className='text-center py-2 border-bottom'>Đăng xuất
          </Dropdown.Item>
          </>
          }
        </Dropdown.Menu>
      </Dropdown>
{
  showLoginModal && <Login setShowLoginModal={setShowLoginModal}/>
}
    </nav >
  )
}

export default Nav