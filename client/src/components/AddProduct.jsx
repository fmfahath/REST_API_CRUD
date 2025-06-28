import axios from 'axios'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { AppContext } from '../context/AppContext'

const AddProduct = () => {
    const { backendUrl, fetchProducts } = useContext(AppContext)
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            if (!name || !price || !quantity) {
                return toast.error('All fields are required')
            }

            const { data } = await axios.post(`${backendUrl}/api/products/register`, { name, price, quantity })

            if (data.success) {
                toast.success(data.message)
                fetchProducts()
                setName("")
                setPrice(0)
                setQuantity(0)
            }
        } catch (error) {
            const errMsg = error.response?.data?.message || error.message
            toast.error(errMsg)
        }
    }

    return (
        <div className='max-w-[900px]  p-6 bg-white rounded m-auto mt-[50px] shadow'>
            <h2 className='text-xl font-semibold mb-5'>Add Product</h2>
            <form className='flex flex-col md:flex-row justify-end md:justify-center gap-4 pb-5' onSubmit={submitHandler}>
                <div className='flex flex-col'>
                    <label htmlFor="item-name">Product Name</label>
                    <input className='py-2 px-4 border-1 border-gray-200 rounded-lg outline-0' id='item-name' type="text" placeholder='Item' onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="item-qty">Quantity</label>
                    <input className='py-2 px-4 border-1 border-gray-200 rounded-lg outline-0' id='item-qty' type="number" placeholder='0' onChange={(e) => setQuantity(e.target.value)} value={quantity} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="item-price">Price (1 Qty)</label>
                    <input className='py-2 px-4 border-1 border-gray-200 rounded-lg outline-0' id='item-price' type="number" placeholder='0' onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
                <button className='mt-2 md:mt-0 md:self-end py-2 px-6  text-white rounded cursor-pointer button-gradient shadow' type='submit' >Add</button>
            </form>
        </div>
    )
}

export default AddProduct