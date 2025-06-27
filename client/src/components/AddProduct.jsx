import React, { useState } from 'react'

const AddProduct = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [qty, setQty] = useState(0)

    const submitHandler = async (e) => {
        e.preventDefault()

        const productData = {
            name,
            price,
            qty
        }

        console.log("product Data: ", productData);

    }

    return (
        <div className='w-[80%] p-6 bg-white rounded m-auto mt-[50px] shadow'>
            <h2 className='text-xl font-semibold mb-5'>Add Product</h2>
            <form className='flex items-center justify-between gap-5 pb-5' onSubmit={submitHandler}>
                <div className='flex flex-col'>
                    <label htmlFor="item-name">Product Name</label>
                    <input className='py-2 px-4 border-1 border-gray-200 rounded-lg outline-0' id='item-name' type="text" placeholder='Item' onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="item-qty">Quantity</label>
                    <input className='py-2 px-4 border-1 border-gray-200 rounded-lg outline-0' id='item-qty' type="number" placeholder='0' onChange={(e) => setQty(e.target.value)} value={qty} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="item-price">Price (1 Qty)</label>
                    <input className='py-2 px-4 border-1 border-gray-200 rounded-lg outline-0' id='item-price' type="number" placeholder='0' onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
                <button className='self-end py-2 px-6 bg-blue-400 text-white rounded cursor-pointer hover:bg-blue-500 shadow' type='submit' >Add</button>
            </form>
        </div>
    )
}

export default AddProduct