import { createContext, useState } from 'react'


export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

    const [isUserLogedin, setIsUserLogedin] = useState(false)

    const value = {
        isUserLogedin, setIsUserLogedin,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}