import React from 'react'
import logo from '../assets/logo.jpg'
import profile from '../assets/profile.jpg'

const Navbar = () => {
    return (
        <div className='w-full px-6 py-2 flex items-center justify-between shadow-md'>
            {/* logo */}
            <div>
                <img src={logo} className='h-[50px] w-[50px] cursor-pointer' alt="logo" />
            </div>
            <div className='flex items-center justify-between gap-6'>
                <div className='flex items-center justify-between gap-3'>
                    <p className=''>John Doe</p>
                    <img src={profile} alt="profile-icon" className='h-[35px] w-[35px]  rounded-full object-cover' />
                </div>
                <button className='block py-2 px-5 bg-blue-400 text-white rounded-xl cursor-pointer hover:bg-blue-500 shadow'>Logout</button>
            </div>
        </div>
    )
}

export default Navbar