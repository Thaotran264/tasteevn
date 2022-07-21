import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import NavbarSecond from '../../components/NavbarSecond'

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(data)
        try {
            const res = await axios.post('https://pro.tastee.vn/Users/Login', data)
            if(res.data && res.status == '200') {
                console.log('data', res);
            }
        } catch (error) {
            console.log(error);
        }
    }
        return (
        <div className=' vh-100 align-items-center d-flex bg-light'>
          <NavbarSecond />
            <div className='container '>
                <div className='mx-auto bg-white py-4 px-4 border rounded border-secondary' style={{width: 400}}>
                    <h2 className='text-center'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input value={data.email} onChange={e=>setData({...data, email: e.target.value})} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input
                            value={data.password}
                            onChange={e => setData({...data, password: e.target.value})} type="password" className="form-control" id="exampleInputPassword1" />
                            <a>Forgot your password?</a>

                        </div>

                        <button type="submit" className="btn btn-danger w-100">Login</button>
                        <p className='text-center mb-0'>OR</p>
                        <button className="btn btn-primary w-100 mb-3">Continue with Facebook</button>
                        <button className="btn btn-outline-secondary text-dark w-100 mb-2">Continue with Google</button>
                        <span>Dont't have a account??? <Link className='text-danger' href='/register' style={{cursor: 'pointer'}}>Resigter</Link></span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login