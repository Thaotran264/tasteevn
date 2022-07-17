import React from 'react'

const Login = () => {
    return (
        <div className=' vh-100 align-items-center d-flex bg-light'>
            <nav class="navbar bg-dark mb-5 position-fixed top-0 start-0 end-0">
                <div class="container text-center justify-content-center">
                    <a class="navbar-brand text-light" href="/">Tastee.vn</a>
                </div>
            </nav>
            <div className='container '>
                <div className='mx-auto bg-white py-4 px-4 border rounded border-secondary' style={{width: 400}}>
                    <h2 className='text-center'>Login</h2>
                    <form >
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                            <a>                        Forgot your password?</a>

                        </div>

                        <button type="submit" class="btn btn-danger w-100">Login</button>
                        <p className='text-center mb-0'>OR</p>
                        <button class="btn btn-primary w-100 mb-3">Continue with Facebook</button>
                        <button class="btn btn-outline-secondary text-dark w-100 mb-2">Continue with Google</button>
                        <span>Dont't have a account??? <a className='text-danger' href='/register' style={{cursor: 'pointer'}}>Resigter</a></span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login