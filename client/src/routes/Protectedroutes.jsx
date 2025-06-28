import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Protectedroutes = ({ children }) => {
    const { isUserLogedin, userData } = useContext(AppContext)

    if (!isUserLogedin || !userData) {
        return <Navigate to={'/login'} replace />
    }

    return children;
}

export default Protectedroutes