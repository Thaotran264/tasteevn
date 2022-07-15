import React from 'react'
import { BsSearch } from 'react-icons/bs'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white" >
            <div className="container justify-content-start">
                <a className="navbar-brand" href="#">Tastee.vn</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="dropdown">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form> */}
                    <div className='d-flex'>
                    <button className="btn btn-outline-success mx-2" type="submit">
                        <BsSearch />
                    </button>
                    <button className="btn btn-outline-danger">Đăng nhập</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar