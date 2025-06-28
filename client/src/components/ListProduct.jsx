import React, { useContext, useEffect, useState } from 'react'
import { sampleProducts } from '../assets/sample_data_set'
import { FaEdit, FaTrash } from "react-icons/fa";
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from './Loader';

const ListProduct = () => {

    const { products, fetchProducts, backendUrl } = useContext(AppContext)
    const [isEdit, setIsEdit] = useState(false)
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [productId, setProductId] = useState("")

    //edit button
    const editHandler = async (id) => {
        setIsEdit(true)

        try {
            if (!id) {
                return toast.error('product ID missing or invalid')
            }

            const { data } = await axios.get(`${backendUrl}/api/products/${id}`)

            if (data.success) {
                setName(data.product.name)
                setQuantity(data.product.quantity)
                setPrice(data.product.price)
                setProductId(data.product._id)
            }
        } catch (error) {
            const errMsg = error.response?.data?.message || error.message
            toast.error(errMsg)
        }
    }

    //delete button
    const deleteHandler = async (id) => {
        try {
            if (!id) {
                return toast.error('product ID missing or invalid')
            }

            const { data } = await axios.delete(`${backendUrl}/api/products/delete-product/${id}`)

            if (data.success) {
                fetchProducts()
                toast.success(data.message)
            }
        } catch (error) {
            const errMsg = error.response?.data?.message || error.message
            toast.error(errMsg)
        }
    }

    //update button
    const updateHandler = async (e) => {
        e.preventDefault();

        try {
            if (!productId) {
                return toast.error('product ID missing or Invalid')
            }

            const { data } = await axios.put(`${backendUrl}/api/products/update-product/${productId}`, { name, price, quantity })

            if (data.success) {
                fetchProducts()
                toast.success(data.message)
                setProductId("")
                setIsEdit(false)
            }
        } catch (error) {
            const errMsg = error.response?.data?.message || error.message
            toast.error(errMsg)
        }
    }

    //get all products
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className='max-w-[900px] p-6 bg-white rounded m-auto mt-[50px] shadow'>
            <h2 className='text-xl font-semibold mb-5'>Products List</h2>
            <div className='overflow-auto'>
                <table className='min-w-[600px] md:min-w-full text-left'>
                    <thead className=''>
                        <tr className=''>
                            <th className='py-2'>No.</th>
                            <th className='py-2'>Name</th>
                            <th className='py-2'>Qty</th>
                            <th className='py-2'>Price (1 Qty)</th>
                            <th className='py-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index} className='hover:bg-gray-50'>
                                <td className='py-2 border-b border-gray-100'>{index + 1}</td>
                                <td className='py-2 border-b border-gray-100'>{product.name}</td>
                                <td className='py-2 border-b border-gray-100'>{product.quantity}</td>
                                <td className='py-2 border-b border-gray-100'>{product.price}</td>
                                <td className='py-2 border-b border-gray-100'>
                                    <div className='flex gap-4'>
                                        <button className='flex gap-1 items-center cursor-pointer'>
                                            <FaEdit className='w-5 h-5 text-blue-500' onClick={() => editHandler(product._id)} />
                                        </button>
                                        <button className='flex gap-1 items-center cursor-pointer'>
                                            <FaTrash className='w-4 h-4 text-red-600' onClick={() => deleteHandler(product._id)} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* popup modal */}
            {isEdit && (<div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
                <div className='min-w-[300px] md:min-w-auto  px-4 py-2 bg-white shadow  rounded'>
                    <form className='flex flex-col md:flex-row items-center justify-between gap-5 pb-4' >
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
                        <div className='flex gap-2 md:self-end'>
                            <button className='py-2 px-6 button-gradient text-white rounded cursor-pointer shadow' onClick={updateHandler}>update</button>
                            <button className='py-2 px-6 cancel-gradient text-white rounded cursor-pointer shadow' type='submit' onClick={() => setIsEdit(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>)}
        </div>
    )
}

export default ListProduct