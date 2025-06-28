import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { isUserLogedin, setIsUserLogedin, setUserData, backendUrl } = useContext(AppContext)
    const [loginState, setLoginState] = useState("signin")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const registerUser = async () => {
        try {

            if (!name || !email || !password) {
                return toast.error('All fields are required')
            }

            const registerUserData = {
                name,
                email,
                password
            }

            const { data } = await axios.post(`${backendUrl}/api/user/register`, { registerUserData })

            if (data.success) {
                toast.success("User registered successfully!")
                setLoginState('signin')
                setIsUserLogedin(true)
                setUserData(data.user)
                navigate('/')
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className='w-full min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='w-[350px] p-6 rounded-xl bg-white shadow-lg'>
                <h3 className='py-6 text-center font-bold text-xl'>{loginState === 'signin' ? 'Sign In' : 'Register'}</h3>
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
                        <button className='w-[130px] block py-2 px-4 m-auto mt-6 mb-4 bg-blue-400 text-white rounded-xl cursor-pointer hover:bg-blue-500 shadow' type='submit' >Login</button>
                        :
                        <button className='w-[130px] block py-2 px-4 m-auto mt-6 mb-4 bg-blue-400 text-white rounded-xl cursor-pointer hover:bg-blue-500 shadow' type='submit' onClick={registerUser}>Register</button>
                    }
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