import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { CartContext } from '../../context/cartContext';
import { formatter } from '../../utils';
import { Link } from 'react-scroll'
import Topping from '../Modal/Topping';
import { BsFillHandbagFill } from 'react-icons/bs'
import { Button, Card } from 'react-bootstrap';


const LinkItemComponent = ({ children, it }) => (
  <Link
    activeClass="active"
    to={`${it.name}`}
    spy={true}
    offset={-100}
    smooth={false}>
    {children}
  </Link>
)


const Menu = ({ productList }) => {
  const { menus } = productList?.data && JSON.parse(productList?.data) || {}
  const { items } = productList?.data && JSON.parse(productList?.data) || {}
  console.log('items', items)
  console.log('menus', menus)
  const { state: { auth }, dispatch } = useContext(CartContext)
  const { token } = auth
  const [showToppingModal, setShowToppingModal] = useState({
    open: false,
    data: null
  })
  const [menuStyle, setMenuStyle] = useState(2)

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMenuStyle(5)
    }
  }, [])

  const handleAddTopping = (value) => {
    if (!token) {
      // console.log('first')
      // notify("Vui lòng đăng nhập để thực hiện chức năng này!!!")
      toast.error("Vui lòng đăng nhập để thực hiện chức năng này!!!", {
        pauseOnHover: true,
      })
      return
    } else {
      setShowToppingModal({
        open: !showToppingModal.open,
        data: value
      })
    }
  }

  const ItemsContainerComponent = ({ data, children }) => (
    <div className='d-flex flex-column gap-2 py-2' style={{ backgroundColor: "#fff" }}>
      <h5 className='border-bottom pb-2 px-2' id={data.name}>{data.name}</h5>
      <div className={`menuContainer menuContainer-${menuStyle}`}>
        {
          children
        }
      </div>
    </div>
  )
  const MenuBar = () => (
    <div className="d-flex flex-column gap-2 position-relative" >
      {
        menuPos ?
          <div className={` container rounded menuScrollbar active`}>
            <ul className='d-flex px-0 mb-0 container'>
              {
                items.map(item => (
                  <li
                    key={item.id}
                    className="p-2 fw-semibold menuListItem" >
                    <LinkItemComponent it={item}>{item.name}</LinkItemComponent>
                  </li>
                ))
              }
              {
                menus.map(item =>
                  <li
                    key={item.id}
                    className="p-2 fw-semibold menuListItem" >
                    <LinkItemComponent it={item}>{item.name}</LinkItemComponent>
                  </li>
                )}
            </ul>
          </div>
          : <></>
      }
      <div className={`d-flex justify-content-center rounded`} style={{overflow: 'hidden'}}>
        <ul className='d-flex px-0 mb-0 container bg-success bg-opacity-10 ' style={{overflow: 'scroll'}}>
          {
            items?.map(item => (
              <li
                key={item.id}
                className="p-2 menuListItem" >
                <LinkItemComponent it={item}><h5 className='fw-bold mb-0'>{item.name}</h5></LinkItemComponent>
              </li>
            ))
          }
          {
            menus?.map(item =>
            (<li
              key={item.id}
              className="p-2 menuListItem" >
              <LinkItemComponent it={item}><h5 className='fw-bold mb-0'>{item.name}</h5></LinkItemComponent>
            </li>)
            )}
        </ul>
      </div>
    </div>
  )
  let mbref = useRef();
  const [menuPos, setMenuPos] = useState(false)
  useEffect(() => {
    let mbT = mbref.current?.offsetTop;
    const handleScroll = () => {
      if (window.scrollY >= mbT + 66) {
        setMenuPos(true);
      } else {
        setMenuPos(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const ItemComponent = ({ it }) => (
    <Card className='rounded shadow d-flex flex-column menuCard'>
      <Card.Img variant="bottom" src={it.image || '/image/logo512.png'} className='p-3 d-flex justify-content-center' />
      <Card.Body>
        <Card.Title className='text-dark customText customFontSize fw-bold'>{it.name}</Card.Title>
        <div className='d-flex align-items-center'>
          <p className='text-dark mb-0 customFontSize'>{
            formatter.format(it.price)}
          </p>
          <button
            className='d-flex align-items-center justify-content-center rounded-5 border-0 ms-auto'
            onClick={() => handleAddTopping(it)}
            style={{ width: 30, height: 30, color: '#fff', backgroundColor: 'hsl(27, 100%, 71%)' }}>
            <BsFillHandbagFill />
          </button>
        </div>
      </Card.Body>
    </Card>
  )

  return (
    <section className="container d-flex flex-column gap-2" ref={mbref} style={{}}>
  
      <MenuBar />
      {
        menus?.length && menus.map(menu => {
          const { items } = menu
          if (items.length) {
            return (<ItemsContainerComponent data={menu}>
              {
                items.map(item =>
                  (<ItemComponent key={item.id} it={item} />)
                )
              }
            </ItemsContainerComponent>)
          }
          return (
            <></>
          )
        })
      }
      {
        items?.length
          ? items.map(item =>
            <ItemsContainerComponent data={item}>
              <ItemComponent key={item.id} it={item} />
            </ItemsContainerComponent>)
          : <></>
      }

      {showToppingModal.open ? <Topping
        showToppingModal={showToppingModal}
        setShowToppingModal={setShowToppingModal} />
        : <></>}
    </section>
  );
}

export default Menu