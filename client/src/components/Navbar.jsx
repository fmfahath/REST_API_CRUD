import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import profile from '../assets/profile.jpg'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const { setIsUserLogedin, userData, setUserData } = useContext(AppContext)
    const navigate = useNavigate()

    const userLogout = async () => {
        setUserData(null)
        setIsUserLogedin(false)
        navigate('/login')
    }

    return (
        <div className='w-full px-6 py-2 flex items-center justify-between shadow-md bg-white'>
            {/* logo */}
            <div>
                <img src={logo} className='h-[50px] w-[50px] cursor-pointer' alt="logo" />
            </div>
            <div className='flex items-center justify-between gap-6'>
                <div className='flex items-center justify-between gap-3'>
                    <p className=''>{userData ? userData.name : 'John Doe'}</p>
                    <img src={profile} alt="profile-icon" className='h-[35px] w-[35px]  rounded-full object-cover' />
                </div>
                <button className='block py-2 px-5 bg-blue-400 text-white rounded-xl cursor-pointer hover:bg-blue-500 shadow' onClick={userLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar