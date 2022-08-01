import React from 'react'
import { AiOutlineUser, AiOutlineHome, AiOutlineMenu, AiOutlineTags } from 'react-icons/ai'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';
import { useRouter } from 'next/router'

const TabMenu = () => {
    const router = useRouter()
    const handleLogOut = () => {
        localStorage.removeItem('userInfo')
        localStorage.removeItem('token')
        router.push('/login')
    }
    return (
        <div className='container position-fixed bottom-0 start-0 bg-danger py-2 hideonmobile mx-auto'>
            <div className='row'>
                <div className='col-3 d-flex justify-content-center'>
                    <a className='btn btn-outline-light text-light' href='#hero'>
                        <AiOutlineHome style={{ fontSize: 24 }} />
                    </a>
                </div>
                <div className='col-3 d-flex justify-content-center'>
                    <a className='btn btn-outline-light text-light' href='#menu'>
                        <AiOutlineMenu style={{ fontSize: 24 }} />
                    </a>
                </div>
                <div className='col-3 d-flex justify-content-center'>
                    <a className='btn btn-outline-light text-light' >
                        <AiOutlineTags style={{ fontSize: 24 }} />
                    </a>
                </div>
                <div className='col-3 d-flex
                justify-content-center'>
                    {/* <a className='btn btn-outline-light text-light' href='/cart'>
                        <AiOutlineUser style={{ fontSize: 24 }} />
                    </a> */}
                    <DropdownButton
                        variant="outline-light"
                        title={<AiOutlineUser style={{ fontSize: 24 }} />}
                    >
                        <Dropdown.Item eventKey="1">Cart</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                            <button className='btn' onClick={handleLogOut}>Log Out</button>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3">Booking</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
        </div>
    )
}

export default TabMenu