import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import backgroundImg from '../assets/background-2.jpg'
import logo from '../assets/logo.jpg'

const Login = () => {

    const { isUserLogedin, setIsUserLogedin, setUserData, backendUrl } = useContext(AppContext)
    const [loginState, setLoginState] = useState("signin")
    const [name, setName] = useState("test")
    const [email, setEmail] = useState("test@gmail.com")
    const [password, setPassword] = useState("12345")
    const navigate = useNavigate()

    //register new user
    const registerUser = async (e) => {
        e.preventDefault();

        try {
            if (!name || !email || !password) {
                return toast.error('All fields are required')
            }

            const { data } = await axios.post(`${backendUrl}/api/users/register`, { name, email, password })

            if (data.success) {
                toast.success(data.message)
                setLoginState('signin')
                setIsUserLogedin(true)
                setUserData(data.user)
                navigate('/')
            }

        } catch (error) {
            const errMsg = error.response?.data?.message || error.message
            toast.error(errMsg)
        }
    }

    //login
    const loginUser = async (e) => {
        e.preventDefault(0)

        try {
            if (!email || !password) {
                return toast.error('All fields are required')
            }

            const { data } = await axios.post(`${backendUrl}/api/users/login`, { email, password })

            if (data.success) {
                toast.success(data.message)
                setLoginState('signin')
                setIsUserLogedin(true)
                setUserData(data.user)
                navigate('/')
            }

        } catch (error) {
            const errMsg = error.response?.data?.message || error.message
            toast.error(errMsg)
        }
    }

    return (
        <div className='w-full min-h-screen flex items-center justify-center   bg-gray-100 bg-center bg-cover' style={{ backgroundImage: `URL(${backgroundImg})` }}>
            {/* form */}
            <div className='w-[320px] p-6 rounded-xl bg-white shadow-lg'>
                {/* logo */}
                <div className='flex flex-col items-center justify-center gap-2 p-1'>
                    <img className='w-[40px] h-[40px] rounded-full' src={logo} alt="" />
                    <div>
                        <h1 className='text-[15pxpx] text-center font-bold text-gradient'>Future Code Technologies</h1>
                        <p className='text-[10px] text-center -mt-1 text-blue-950'>Transforming Ideas into Scalable Software</p>
                    </div>
                </div>

                {/* form */}
                <h3 className='py-6 text-center font-bold text-2xl text-gradient'>{loginState === 'signin' ? 'Sign In' : 'Register'}</h3>
                <form>
                    {loginState === 'register' && <div className='flex flex-col my-2'>
                        {/* <label htmlFor="name">Name</label> */}
                        <input className='w-full mt-1 py-2 px-4 border-1 border-gray-200 rounded-lg outline-0 shadow' id='name' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} />
                    </div>}
                    <div className='flex flex-col my-2'>
                        {/* <label htmlFor="email">Email</label> */}
                        <input className='w-full mt-1 py-2 px-4 border-1 border-gray-200 rounded-lg outline-0 shadow' id='email' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className='flex flex-col my-2'>
                        {/* <label htmlFor="password">Password</label> */}
                        <input className='w-full mt-1 py-2 px-4 border-1 border-gray-200 rounded-lg outline-0 shadow' id='password' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    {loginState === 'signin' ?
                        <button className='w-[130px] block py-2 px-4 m-auto mt-6 mb-4 text-white rounded-xl cursor-pointer button-gradient  shadow' onClick={loginUser}>Login</button>
                        :
                        <button className='w-[130px] block py-2 px-4 m-auto mt-6 mb-4 text-white rounded-xl cursor-pointer button-gradient shadow' onClick={registerUser}>Register</button>
                    }
                    <div className='mb-6'>
                        {loginState === 'register' && <p className='text-center text-gray-700'>Already have an account? <span><a href='#' className='text-blue-600 ' onClick={() => setLoginState('signin')}>Sign In</a></span></p>}
                        {loginState === 'signin' && <p className='text-center text-gray-700'>Don't have an account? <span><a href='#' className='text-blue-600 ' onClick={() => setLoginState('register')}>Register Now</a></span></p>}
                    </div>
                </form >
            </div>
        </div >
    )
}

export default Login