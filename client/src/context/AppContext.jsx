import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'


export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

    const [isUserLogedin, setIsUserLogedin] = useState(false)
    const [userData, setUserData] = useState(null)
    const [products, setProducts] = useState([])
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    //get all products details
    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/products/`)

            if (data.success) {
                setProducts(data.products.reverse())
            }
        } catch (error) {
            const errMsg = error.response?.data?.message || error.message
            toast.error(errMsg)
        }
    }


    const value = {
        isUserLogedin, setIsUserLogedin,
        userData, setUserData,
        backendUrl,
        products, setProducts,
        fetchProducts,
    }

    useEffect(() => {
        if (isUserLogedin) {
            fetchProducts();
        }
    }, [isUserLogedin])

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}