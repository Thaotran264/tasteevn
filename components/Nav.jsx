import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { AiOutlineShoppingCart ,AiOutlineUser} from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { CiLogout } from 'react-icons/cg';
import { cityApi } from '../api-client/city';
import { searchApi } from '../api-client/search';
import { logOut } from '../context/actions';
import { CartContext } from '../context/cartContext';
import { removeTokenCookies } from '../hooks/setTokenCookies';
import LoginModal from './LoginModal';
import CartModal from './Modal/CartModal';
const NavComponent = () => {
  const router = useRouter()
  const [searchBox, setShowSearchBox] = useState(true)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [searchData, setSearchData] = useState()
  const [searchText, setSearchText] = useState('')
  const [searchDataResult, setSearchDataResult] = useState()
  const { state, dispatch } = useContext(CartContext)
  const { cart, auth } = state
  const { token, fullName, avatar } = auth
  const [itemsDefault, setItemsDefaul] = useState(5)
  const [cities, setCities] = useState()
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await searchApi.searchProduct('')
        setSearchData(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  useEffect(() => {
    const getData = async () => {
      const res = await cityApi.getCity()
      setCities(res)
    }
    getData()
  }, [])
  const [showCart, setShowCart] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleSearchChange = (e) => {
    setSearchText(e)
    setItemsDefaul(5)
  }
  const handleLogout = () => {
    dispatch(logOut())
    removeTokenCookies()
    router.push('/')
  }
  const handleShowCartModal = () => {
    setShowCart(true)
  }

  const handleMore = () => {
    setItemsDefaul(prev => prev + 5)
  }
  const closeSearhResult = () => {
    setSearchText('')
    setItemsDefaul(5)
  }
  const handleShowModalLogin = () => {
    setShowLoginModal(!showLoginModal)
  }
  const handleCitiesChange = (e) => {
    setSearchText(e)
  }
  const renderMobileMenu = <Dropdown className='d-flex align-items-center ' >
    <Dropdown.Toggle
      className="border-0 rounded-0  d-flex align-items-center px-1"
      id="dropdown-basic"
    >
      <FaBars />
    </Dropdown.Toggle>

    <Dropdown.Menu >
      {
        token ?
          <>
            <Dropdown.Item className='text-center py-2 d-flex align-items-center gap-2 justify-content-center ' href='/profile-desktop'>
              <AiOutlineUser /> 
              <span>Thông tin tài khoản</span>
            </Dropdown.Item>
            <Dropdown.Item className='text-center py-2  d-flex align-items-center gap-2 justify-content-center ' href='/cart'>
              <AiOutlineShoppingCart /> 
              <span>Giỏ hàng</span>
            </Dropdown.Item>
            <Dropdown.Item className='text-center py-2 d-flex justify-content-center align-items-center gap-2' onClick={handleLogout}>
            <span>Đăng xuất</span>
            </Dropdown.Item>
          </>
          : <>
            <Dropdown.Item className='text-center py-2' onClick={handleShowModalLogin}>
              Đăng nhập
            </Dropdown.Item>
            <Dropdown.Item className='text-center py-2'>
              Đăng ký
            </Dropdown.Item>
          </>
      }
    </Dropdown.Menu>
  </Dropdown>
  
  const renderDropDownCities = <Dropdown className='d-flex align-items-center justify-content-center navItem bg-dark rounded bg-opacity-10 ' onSelect={handleCitiesChange} >
    <Dropdown.Toggle
      className="border-0 d-flex gap-1 align-items-center px-2"
      id="dropdown-basic"
      style={{ fontSize: 12, width: 'max-content' }}
    >
      Hồ chí minh
    </Dropdown.Toggle>
    <Dropdown.Menu
      className='' style={{ maxHeight: 400, overflowY: 'scroll' }}>
      {cities?.map(item => (
        <Dropdown.Item className='text-center border-bottom' key={item.id} style={{ fontSize: 12 }} eventKey={item.id} value={item.id}
        >
          {item.name}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
  const renderSearchForm = <div className='d-flex align-items-center navItem justify-content-center ' >
    <form
      className='navForm justify-content-end rounded-5'
      onSubmit={handleSubmit}
    >
      <input
      className='rounded-5'
        disabled={!searchBox}
        value={searchText}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </form>
  </div>

  const renderCartItem = <div className='position-relative d-flex align-items-center '>
    <AiOutlineShoppingCart onClick={handleShowCartModal} style={{ cursor: 'pointer', fontSize: 22 }} />
    <span
      className='rounded-5 bg-danger text-light d-flex align-items-center justify-content-center'
      style={{
        fontSize: 11, position: 'absolute', top: '-10px', right: '-2px'
        , width: 20, height: 20
      }}>{cart?.length}</span>
  </div>
  const renderSearchResult = (<div className='container position-absolute bottom-0 bg-light text-light w-100 d-flex flex-column align-items-center shadow p-2 overflow-scroll' style={{ zIndex: 109, top: 48, height: `calc(100vh - 48px)` }}>
    <button className='btn btn-danger position-absolute me-2 end-0'
      onClick={closeSearhResult}>x</button>
    {
      searchData?.filter(
        item => item.name.toLowerCase().includes(String(searchText).toLowerCase())
      ).length ?
        searchData?.filter(
          item => item.name.toLowerCase().includes(String(searchText).toLowerCase())
        ).slice(0, itemsDefault).map(item =>
          <Link href={`/${item?.uri}`}>
            <a className=' w-75 customHover mb-2 border-bottom border-1 pb-2'>
              <div className='d-flex gap-2 align-items-center '>
                <Image src={item.image || '/image/logo512.png'} alt={item.name} width={50} height={50} />
                <p className='mb-0 text-dark'>{item.name}</p>
              </div>
            </a>
          </Link>

        )
        : <h2>Không có dữ liệu</h2>
    }
    <button className='btn btn-outline-dark' disabled={itemsDefault >= searchData?.filter(
      item => item.name.toLowerCase().includes(String(searchText).toLowerCase())
    ).length} onClick={handleMore}>Xem thêm</button>
  </div>)
  const renderUserInfo = <div className='px-1
  d-flex  align-items-center navItem hideOnMobile'>
    {
      token ?
        <Dropdown className='d-flex align-items-center gap-2 justify-content-end px-1 rounded-5' style={{ backgroundColor: 'hsl(27, 100%, 71%)' }} >
          <Image src={avatar || '/image/logo512.png'} className='rounded-5' width="30" height="30" alt={fullName || ''} />
          <Dropdown.Toggle
            className="border-0 d-flex align-items-center gap-1 text-light px-0"
            id="dropdown-basic"
          >
            {fullName || ''}
          </Dropdown.Toggle>

          <Dropdown.Menu >
            <Dropdown.Item className='text-center py-2' href='/profile-desktop'>Thông tin tài khoản
            </Dropdown.Item>
            <Dropdown.Item className='text-center py-2'>Giỏ hàng</Dropdown.Item>
            <Dropdown.Item className='text-center py-2' onClick={handleLogout}>Đăng xuất
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> :
        <div className='d-flex align-items-center gap-1 h-100 justify-content-end'>
          <button className='button-custom-primary px-4 py-1 text-light' onClick={handleShowModalLogin} style={{ backgroundColor: 'hsl(27, 100%, 71%)' }}>Đăng nhập</button>
          <button className='button-custom-primary px-4 py-1 text-dark' onClick={handleShowModalLogin}>Đăng ký</button>
        </div>
    }
  </div>

  return (
    <section className='d-flex justify-content-center align-items-center navContainer active shadow bg-light' style={{ height: 48 }} >
      <nav className='d-flex container gap-2 align-items-center'>
        {
          showCart && <CartModal setShow={setShowCart} />
        }
        <div className='position-relative d-flex align-items-center '>
          <Link href='/' >
            <a className='d-flex  h-100 hideOnMobile'>
              <Image src='/image/logo.jpg' height='40' width='100' />
            </a>
          </Link>
          <Link href='/' >
            <a className='d-flex hideOnDesktop' >
              <Image src='/image/logo512.png' width='40' height='40' />
            </a>
          </Link>
        </div>
        {renderDropDownCities}
        {renderSearchForm}
        {token && renderCartItem}
        {/* Login desktop */}
        {/* {renderUserInfo} */}
        {/* Login Mobile */}
        {
          renderMobileMenu
        }
      </nav >
      {
        searchText ? renderSearchResult : <></>
      }
      {
        showLoginModal ? <LoginModal showLoginModal={showLoginModal}
          setShowLoginModal={setShowLoginModal} /> : <></>
      }
    </section>
  )
}

export default NavComponent