import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='w-full min-h-screen bg-gray-100 p-6 flex items-center justify-center'>
            <div className='w-[500px] bg-white p-6 flex flex-col items-center rounded-xl shadow-lg'>
                <h1 className='text-2xl font-semibold mb-1'>Sorry!, Page Not Found - 404</h1>
                <p>Back to Home Page</p>
                <Link to={'/'} className='my-4 not-first:py-2 px-6 bg-blue-400 text-white rounded-xl cursor-pointer hover:bg-blue-500 shadow' type='submit' >Home</Link>
            </div>
        </div>
    )
}

export default NotFound