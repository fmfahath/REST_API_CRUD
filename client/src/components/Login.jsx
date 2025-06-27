import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Login = () => {

    const { isUserLogedin, setIsUserLogedin } = useContext(AppContext)
    const [loginState, setLoginState] = useState("signin")

    return (
        <div className='w-full min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='w-[350px] p-6 rounded-xl bg-white shadow-lg'>
                <h3 className='py-6 text-center font-bold text-xl'>{loginState === 'signin' ? 'Sign In' : 'Register'}</h3>
                <form>
                    {loginState === 'register' && <div className='flex flex-col my-2'>
                        {/* <label htmlFor="name">Name</label> */}
                        <input className='w-full mt-1 py-2 px-4 border-1 border-gray-200 rounded-lg outline-0 shadow' id='name' type="text" placeholder='Name' />
                    </div>}
                    <div className='flex flex-col my-2'>
                        {/* <label htmlFor="email">Email</label> */}
                        <input className='w-full mt-1 py-2 px-4 border-1 border-gray-200 rounded-lg outline-0 shadow' id='email' type="email" placeholder='Email' />
                    </div>
                    <div className='flex flex-col my-2'>
                        {/* <label htmlFor="password">Password</label> */}
                        <input className='w-full mt-1 py-2 px-4 border-1 border-gray-200 rounded-lg outline-0 shadow' id='password' type="password" placeholder='Password' />
                    </div>
                    <button className='w-[130px] block py-2 px-4 m-auto mt-6 mb-4 bg-blue-400 text-white rounded-xl cursor-pointer hover:bg-blue-500 shadow' type='submit' >{loginState === 'signin' ? 'Login' : 'Register'}</button>
                    <div className='mb-6'>
                        {loginState === 'register' && <p className='text-center'>Already have an account? <span><a href='#' className='text-blue-600 ' onClick={() => setLoginState('signin')}>Sign In</a></span></p>}
                        {loginState === 'signin' && <p className='text-center'>Don't have an account? <span><a href='#' className='text-blue-600 ' onClick={() => setLoginState('register')}>Register Now</a></span></p>}
                    </div>
                </form >
            </div >
        </div >
    )
}

export default Login