import React from 'react'
import {BsSearch,BsCart } from 'react-icons/bs'
import {AiOutlineUser } from 'react-icons/ai'
const HeaderCTA = ({handleShowSearch}) => {
  return (
    <div className='header-cta'>
        <button onClick={handleShowSearch}><BsSearch /></button>
        <button><AiOutlineUser /></button>
        <button><BsCart /></button>
    </div>
  )
}

export default HeaderCTA