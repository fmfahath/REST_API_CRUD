import React from 'react'
import Navbar from '../components/Navbar'
import AddProduct from '../components/AddProduct'
import ListProduct from '../components/ListProduct'

const Dashboard = () => {

    return (
        <div className='w-full min-h-screen bg-gray-50 pb-10'>
            <Navbar />
            <AddProduct />
            <ListProduct />
        </div>
    )
}

export default Dashboard