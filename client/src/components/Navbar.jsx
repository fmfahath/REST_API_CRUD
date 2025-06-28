import React, { useContext, useState } from 'react'
import logo from '../assets/logo.jpg'
import profile from '../assets/profile.jpg'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const { setIsUserLogedin, userData, setUserData } = useContext(AppContext)
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const userLogout = async () => {
        setUserData(null)
        setIsUserLogedin(false)
        navigate('/login')
    }

    return (
        <>
            <div className='w-full px-6 py-2 flex items-center justify-between bg-white shadow-md relative'>
                {/* logo */}
                <div>
                    <img src={logo} className='h-[50px] w-[50px] cursor-pointer' alt="logo" />
                </div>
                <div className='flex items-center justify-between gap-5'>
                    <div className='flex items-center justify-between gap-6'>
                        <div className='flex items-center justify-between gap-3'>
                            <p className=''>{userData ? userData.name : 'John Doe'}</p>
                            <img src={profile} alt="profile-icon" className='h-[35px] w-[35px]  rounded-full object-cover' />
                        </div>
                        <button className='hidden md:block py-2 px-5 text-white rounded-xl cursor-pointer button-gradient shadow' onClick={userLogout}>Logout</button>
                    </div>
                    <div className=' md:hidden transition-all ease-in-out' onClick={() => setIsMenuOpen(true)}>
                        <FaBars className='text-2xl' />
                    </div>
                </div>

            </div>

            {/* slide-in mobile menu */}
            <div className={`fixed top-0 right-0 h-full w-2/3 max-w-[300px] bg-black/90 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <p className='text-white text-3xl font-light text-end px-5 pt-3 cursor-pointer' onClick={() => setIsMenuOpen(false)}>×</p>

                <div className='flex flex-col gap-4 px-5 pt-5'>
                    <button className='py-2 px-10 m-auto text-white rounded-xl cursor-pointer button-gradient shadow' onClick={userLogout}>Logout</button>
                    {/* Add more mobile menu items here if needed */}
                </div>
            </div>

        </>
    )
}

export default Navbar