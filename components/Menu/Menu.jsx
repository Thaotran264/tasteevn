import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { CartContext } from '../../context/cartContext';
import { formatter } from '../../utils';
import { Link } from 'react-scroll'
import Topping from '../Modal/Topping';
import { BsFillHandbagFill } from 'react-icons/bs'
import { Button } from 'react-bootstrap';


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
  const { items, menus } = productList
  const { state: { auth }, dispatch } = useContext(CartContext)
  const { token } = auth
  const [showToppingModal, setShowToppingModal] = useState({
    open: false,
    data: null
  })
  console.log('product', productList)
  const [menuStyle, setMenuStyle] = useState(5)


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
  const MenuStyleComponenet = () => (
    <div className='bg-dark bg-opacity-10 d-flex gap-2 align-items-center p-2'>
      <span>Select style of menu:</span>
      <select
        value={menuStyle}
        onChange={(e) => setMenuStyle(e.target.value)}
        className='p-2 rounded'>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
  )
  const ItemsContainerComponent = ({ data, children }) => (
    <div className='d-flex flex-column gap-2 p-2 bg-success bg-opacity-10'>
      <h5 className='border-bottom pb-2 fw-bold' id={data.name}>{data.name}</h5>
      <div className={`menuContainer menuContainer-${menuStyle}`}>
        {
          children
        }
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
  });
  const ItemComponent = ({ it }) => (
    <div className="d-flex flex-column align-items-center">
      <div
        className='d-flex flex-column rounded gap-2  py-2 shadow-sm'>
        <div className='d-flex justify-content-center bg-light rounded w-75 mx-auto p-2'>
          <Image
            src={it.image || '/image/logo512.png'}
            alt={it.name} className='rounded'
            width={160}
            height={160} />
        </div>
        <p
          className='fw-bold mb-0 text-start px-2'>{it.name}</p>
        <div className='d-flex px-2 align-items-center'>
          <p className='fw-bold text-danger mb-0'>{
            formatter.format(it.price)}
          </p>
          <button
            className='d-flex align-items-center justify-content-center rounded-5 border-0 ms-auto'
            onClick={() => handleAddTopping(it)} style={{ width: 30, height: 30, color: '#fff', backgroundColor: 'hsl(27, 100%, 71%)' }}>
            <BsFillHandbagFill />
          </button>
        </div>
      </div>
    </div>
  )


  const renderMenus = menus.map(item =>
  (<div
    id={`${item.name}`}
    key={item.id}
    className=" text-dark mb-2 rounded p-2"
    style={items.length ? { marginTop: 0 } : { marginTop: 48 }}>
    {/* <div className='d-flex justify-content-between align-items-center'>
    </div> */}
    <h3 className='pb-1'>{item.name}</h3>
    <div
      className={`menuContainer menuContainer-${menuStyle} mb-2`}>
      {
        item.items.map(it => (
          <ItemComponent key={it.id} it={it} />
        ))
      }
      {/* {
        item.items.map(it =>
        (<div
          key={it.id}
          className="d-flex flex-column menuItems position-relative p-2 rounded"
          style={{ boxShadow: '0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)' }}>
          <div
            className='w-100 d-flex justify-content-center'>
            <Image
              src={it.image || '/image/logo512.png'}
              alt={it.name} className='rounded'
              width={160}
              height={160} />
          </div>
          <p
            className='fw-bold mb-1 px-2'>{it.name}</p>
          <div className='position-relative w-100 px-2'>
            <p className='fw-bold text-danger mb-0'>{
              formatter.format(it.price)}
            </p>
            <button
              className='d-flex align-items-center justify-content-center rounded-5 border-0 position-absolute bottom-0 end-0 me-2'
              onClick={() => handleAddTopping(it)} style={{ width: 30, height: 30, color: '#fff', backgroundColor: 'hsl(27, 100%, 71%)' }}>
              <BsFillHandbagFill />
            </button>
          </div>
        </div>)
        )} */}
    </div>

  </div>)
  )
  const renderItems = items.map(item =>
  (<div
    key={item.id}
    className="text-dark mb-2 rounded p-2"
    style={{ marginTop: 48 }}
    id={`${item.name}`}>
    <div className='d-flex justify-content-between align-items-center'>
      <h3 className='pb-1'>{item.name}</h3>
    </div>
    <div className={`menuContainer menuContainer-${menuStyle} mb-2`}>
      {
        items.map(it => (
          <ItemComponent it={it} key={it.id} />
        ))
        // items.map(it => <div key={it.id}
        //   className="rounded-3 bg-light py-2 d-flex flex-column align-items-center menuItems position-relative"
        //   style={{ minWidth: '15%', boxShadow: '0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)' }}>
        //   <div>
        //     <Image
        //       src={it.image || '/image/logo512.png'}
        //       alt={it.name}
        //       className=' rounded'
        //       width={160}
        //       height={160} />
        //   </div>
        //   <p className='fw-bold'>{it.name}</p>
        //   <div className='position-relative w-100 text-center'>
        //     <p className='fw-bold text-danger'>{formatter.format(it.price)}</p>
        //     <button
        //       className='d-flex align-items-center justify-content-center rounded-5 border-0 position-absolute bottom-0 end-0 me-2'
        //       onClick={() => handleAddTopping(it)}
        //       style={{ backgroundColor: 'hsl(27, 100%, 71%)', width: 30, height: 30, color: '#fff' }}>
        //       <BsFillHandbagFill />
        //     </button>
        //   </div>
        // </div>
        // )
      }
    </div>
  </div >)
  )

  return (
    <section className="container d-flex flex-column gap-2 bg-light py-3" ref={mbref}>
      <MenuStyleComponenet />

      <div className="d-flex flex-column gap-2 position-relative" >
        {
          menuPos &&
          <div className={`d-none container rounded menuScrollbar active`}>
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
        }
        <div className={`d-flex justify-content-center rounded`}>
          <ul className='d-flex px-0 mb-0 container bg-success bg-opacity-10'>
            {
              items.map(item => (
                <li
                  key={item.id}
                  className="p-2 fw-semibold menuListItem" >
                </li>
              ))
            }
            {
              menus.map(item =>
              (<li
                key={item.id}
                className="p-2 fw-semibold menuListItem" >
                <LinkItemComponent it={item}>{item.name}</LinkItemComponent>
              </li>)
              )}
          </ul>
        </div>
      </div>

      {
        menus.map(menu => {
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
            // <div key={menu.id} className='d-flex flex-column gap-2 p-2 bg-light rounded'>
            //   <h5 id={menu.name}>{menu.name}</h5>
            //   <div className={`menuContainer menuContainer-${menuStyle} mb-2`}>
            //     {
            //       items.map(item => (
            //         <ItemComponent key={item.id} it={item} />
            //       ))
            //     }
            //   </div>
            // </div>
          )
        })
      }
      {
        items.map(item => {
          const { items } = items
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
            // <div key={menu.id} className='d-flex flex-column gap-2 p-2 bg-light rounded'>
            //   <h5 id={menu.name}>{menu.name}</h5>
            //   <div className={`menuContainer menuContainer-${menuStyle} mb-2`}>
            //     {
            //       items.map(item => (
            //         <ItemComponent key={item.id} it={item} />
            //       ))
            //     }
            //   </div>
            // </div>
          )
        })
      }

      {showToppingModal.open ? <Topping
        showToppingModal={showToppingModal}
        setShowToppingModal={setShowToppingModal} />
        : <></>}
    </section>
  );
}

export default Menu