import React, { useEffect, useState } from 'react'
import { BsSearch, } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'

const HeaderSearchForm = ({ handleShowSearch, showSearch }) => {
  const [search, setSearch] = useState('')
  const [searchResult, setSearchSearchResuld] = useState('')
  const [showSearchResult, setShowSearchSearchResuld] = useState(false)

  useEffect(() => {
    const searchId = setTimeout(() => {
      if (!search) {
        setShowSearchSearchResuld(false)
      } else {
        setShowSearchSearchResuld(true)
      }
    }, 2000)
    return () => clearTimeout(searchId)
  }, [search])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }
  const clearSearch = () => {
    setSearch('')
    setShowSearchSearchResuld(false)
  }
  return (
    <div className={`header-searchForm ${showSearch ? 'show' : ''}`}>
      <div className='input-wrapper'>
        <span><BsSearch /></span>
        <input type="text" placeholder="Tìm kiếm"
          aria-label="search" aria-describedby="search"
          onChange={handleSearchChange}
          value={search} />
        <button className={showSearchResult ? 'show' : ''}
          disabled={!search}
          onClick={clearSearch}><AiOutlineClose /></button>

        <div className={`searchFormResult ${showSearchResult ? 'show' : ''}`}>
          <div className='searchFormResult-items'>
            <div className='searchFormResult-items-image'>
              <Image src='/image/logo.jpg' width={25} height={25} alt='logo' />
            </div>
            <p className='searchFormResult-items-name'>{search}</p>
            <p className='searchFormResult-items-price'> 250.000</p>
          </div>
            <hr />
          <div className='searchFormResult-items'>
            <div className='searchFormResult-items-image'>
              <Image src='/image/logo.jpg' width={25} height={25} alt='logo' />
            </div>
            <p className='searchFormResult-items-name'>{search}</p>
            <p className='searchFormResult-items-price'> 350.000</p>
          </div>
            <hr />
     
        </div>
      </div>
      <button onClick={handleShowSearch}><AiOutlineClose /></button>
    </div>
  )
}

export default HeaderSearchForm