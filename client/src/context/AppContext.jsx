const { useContext, useState } = require("react");


const AppContext = useContext()

export const AppContextProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false)

    value = {
        isLogin, setIsLogin,
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}