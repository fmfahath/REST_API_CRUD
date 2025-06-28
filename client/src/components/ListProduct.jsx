import React, { useContext, useEffect, useState } from 'react'
import { sampleProducts } from '../assets/sample_data_set'
import { FaEdit, FaTrash } from "react-icons/fa";
import { AppContext } from '../context/AppContext';

const ListProduct = () => {

    const { products, fetchProducts, backendUrl } = useContext(AppContext)
    const [isEdit, setIsEdit] = useState(false)

    const submitHandler = async (e) => {

    }

    //get all products
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className='w-[80%] p-6 bg-white rounded m-auto mt-[50px] shadow'>
            <h2 className='text-xl font-semibold mb-5'>Products List</h2>
            <div className='overflow-x-auto'>
                <table className='min-w-full text-left'>
                    <thead className=''>
                        <tr className=''>
                            <th className='py-2'>No.</th>
                            <th className='py-2'>Name</th>
                            <th className='py-2'>Qty</th>
                            <th className='py-2'>Price (1 Qty)</th>
                            <th className='py-2'>Ations</th>
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
                                            <FaEdit className='w-5 h-5 text-blue-500' onClick={() => setIsEdit(true)} />
                                        </button>
                                        <button className='flex gap-1 items-center cursor-pointer'>
                                            <FaTrash className='w-4 h-4 text-red-600' />
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
                <div className=' px-4 py-2 bg-white shadow overflow-x-hidden rounded'>
                    <form className='flex items-center justify-between gap-5 pb-4' >
                        <div className='flex flex-col'>
                            <label htmlFor="item-name">Product Name</label>
                            <input className='py-2 px-4 border-1 border-gray-200 rounded-lg outline-0' id='item-name' type="text" placeholder='Item' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="item-qty">Quantity</label>
                            <input className='py-2 px-4 border-1 border-gray-200 rounded-lg outline-0' id='item-qty' type="number" placeholder='0' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="item-price">Price (1 Qty)</label>
                            <input className='py-2 px-4 border-1 border-gray-200 rounded-lg outline-0' id='item-price' type="number" placeholder='0' />
                        </div>
                        <div className='flex gap-2 self-end'>
                            <button className='py-2 px-6 bg-green-400 text-white rounded cursor-pointer hover:bg-green-500 shadow' type='submit' >update</button>
                            <button className='py-2 px-6 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700 shadow' type='submit' onClick={() => setIsEdit(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>)}
        </div>

    )
}

export default ListProduct