import Link from 'next/link'
import React, { useState } from 'react'
import {BsTrash} from 'react-icons/bs'
import NavbarSecond from '../../components/NavbarSecond'
const Cart = () => {
  const [count, setCount] = useState(1)
  
  const handleClick = (value) => {
    setCount(value)  }
  return (
    <div className='container'>
   <NavbarSecond />
      <div className='py-3' style={{ marginTop: 56 }}>

        <h4>Cart</h4>
        <hr />
        <div>
          <table className="table">
            <tbody>
              <tr className='d-flex align-items-center justify-content-between'>
                <th scope="row">1</th>
                <td className='d-flex justify-content-start align-items-center'><img src='https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' style={{width: 80, height: 80}} /></td>
                <td>Otto</td>
                <td>$15</td>
                <td><div>
                <button type="button" className="btn btn-outline-danger" onClick={()=>handleClick(count - 1)} disabled={count == 1}>-</button>
                <span className='d-inline-block mx-2'>{count}</span>
                <button type="button" className="btn btn-outline-danger"
                onClick={()=>handleClick(count + 1)}>+</button>
                  </div></td>
                <td><button type="button" className="btn btn-outline-danger"><BsTrash /></button></td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h2>Total: $200</h2>
        </div>
      </div>
    </div>
  )
}

export default Cart