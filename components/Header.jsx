import React from 'react'
import Banner from './Banner'
import CarouselComponent from './Carousel'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='header d-flex flex-column align-items-center justify-content-center'>
        <Nav />
        <CarouselComponent />
    </header>
  )
}

export default Header