import React from 'react'
import Navbar from '../components/Navbar'
import AddProduct from '../components/AddProduct'
import ListProduct from '../components/ListProduct'

const Dashboard = () => {

    return (
        <div className='w-full min-h-screen bg-gray-100 pb-10'>
            <Navbar />
            <div className='px-5'>
                <AddProduct />
                <ListProduct />
            </div>
        </div>
    )
}

export default Dashboard