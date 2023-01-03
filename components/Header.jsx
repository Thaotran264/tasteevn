import Image from 'next/image'
import React, { useState } from 'react'
import Banner from './Banner'
import CarouselComponent from './Carousel'
import HeaderCities from './Header/HeaderCities'
import HeaderCTA from './Header/HeaderCTA'
import HeaderSearchForm from './Header/HeaderSearchForm'
import Nav from './Nav'

const Header = () => {
  const [showSearch, setShowSearch] = useState(false)
  const handleShowSearch = () => {
    setShowSearch(!showSearch)
  }
  return (
    <header>
      <nav className='container'>
        <div className='logo'>
          {/* <Image src='/image/logo.jpg' width={160} height={37} alt='logo' /> */}
          <h2>Tastee</h2>
        </div>
        <HeaderCities />
        <HeaderSearchForm handleShowSearch={handleShowSearch} showSearch={showSearch} />
        <HeaderCTA handleShowSearch={handleShowSearch} />
      </nav>
    </header>
  )
}

export default Header