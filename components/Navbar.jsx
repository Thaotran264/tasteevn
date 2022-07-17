import Link from 'next/link'
import React from 'react'
import { BsSearch,BsBagCheck } from 'react-icons/bs'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white" >
            <div className="container justify-content-start">
                <a className="navbar-brand" href="#">Tastee.vn</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="dropdown me-2">
                        <button className="btn btn-outline-light text-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                            TP.HCM
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">HN</a></li>
                            <li><a className="dropdown-item" href="#">DN</a></li>
                        </ul>
                    </div>
               
                    <form className="d-flex flex-fill" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary d-flex align-items-center" type="submit">
                        <BsSearch />
                    </button>
                    </form>
                    <div className='d-flex'>
                    <button className="btn btn-outline-success mx-2 d-flex align-items-center " type="submit">
                        <BsBagCheck />
                        <span className='ms-1'>01</span>
                    </button>
                    <Link href='/login'>
                    <a className="btn btn-outline-danger">Đăng nhập</a>

                    </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar