import React from 'react'
import NavbarSecond from '../../components/NavbarSecond'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { BsPhone } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'

const UserInfo = () => {
    return (
        <div>
            <NavbarSecond />
            <div className='container py-4' style={{ marginTop: 56 }}>
                <div className='py-2'>
                    <h2>User Info</h2>
                    <hr />
                    <div className='d-flex gap-3'>
                        <div className='border-end border-dark pe-3' style={{ width: 200, height: 250 }}>
                            <img src='https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='girl' className='w-100 h-100' style={{ objectFit: 'cover' }} />
                        </div>
                        <div>
                            <h4 className='text-decoration-underline text-danger'>Memorise</h4>
                            <p><HiOutlineMail style={{ fontSize: 24 }} className='me-2' /> <span>test@gmail.com</span></p>
                            <p><BsPhone style={{ fontSize: 24 }} className='me-2' /><span>+84 123 333 666 </span></p>
                            <p><HiOutlineLocationMarker style={{ fontSize: 24 }} className='me-2' /><span>HCM city</span></p>
                        </div>
                        <div className='ms-auto'>
                        <button type="button" className="btn btn-success"><BiEdit /></button>
                        </div>
                    </div>
                </div>
                <div className='py-2'>
                    <h2>History</h2>
                    <hr />
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td >Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default UserInfo