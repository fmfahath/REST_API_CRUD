import { createContext, useState } from 'react'


export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

    const [isUserLogedin, setIsUserLogedin] = useState(false)
    const [userData, setUserData] = useState(null)
    const backendUrl = import.meta.env.VITE_BACKEND_URL;





    const value = {
        isUserLogedin, setIsUserLogedin,
        userData, setUserData,
        backendUrl,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}