import React from 'react'
import Link from 'next/link'
const NavbarSecond = () => {
    return (
        <nav className="navbar bg-dark bg-opacity-25 mb-5 position-fixed top-0 start-0 end-0" >
            <div className="container text-center justify-content-center">
                <Link href="/">
                    <a className="navbar-brand text-light">Tastee.vn</a></Link>
            </div>
        </nav >
    )
}

export default NavbarSecond