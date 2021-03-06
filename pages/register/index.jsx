import React from 'react'
import NavbarSecond from '../../components/NavbarSecond'

const Register = () => {
    return (
        <div className='vh-100 align-items-center d-flex bg-light'>
            <NavbarSecond />
            <div className='container '>
                <div className='mx-auto bg-white py-4 px-4 border rounded border-secondary' style={{ width: 400 }}>
                    <h2 className='text-center'>Register</h2>
                    <form >
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                            <a> Forgot your password?</a>

                        </div>

                        <button type="submit" class="btn btn-danger w-100">Continue</button>
                        <p className='text-center mb-0'>OR</p>
                        <button class="btn btn-primary w-100 mb-3">Continue with Facebook</button>
                        <button class="btn btn-outline-secondary text-dark w-100 mb-2">Continue with Google</button>
                        <span>Already have a account??? <a className='text-danger' href='/login' style={{ cursor: 'pointer' }}>Login</a></span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register