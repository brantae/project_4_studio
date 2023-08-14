import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = React.createContext()

function UserProvider({children}) {
    
    const [currentUser, setCurrentUser] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        fetch('/me')
        .then(resp => resp.json())
        .then(data => {
            if (data.error) {
            setIsLoggedIn(false)
            setCurrentUser({})
            } else {
            setIsLoggedIn(true)
            setCurrentUser(data)
            }
        }) 
    }, [])


    function login(user) {
        setCurrentUser(user)
        setIsLoggedIn(true)
    }

    function logout() {
        setCurrentUser({})
        setIsLoggedIn(false)
    }

    function signup(user) {
        setCurrentUser(user)
        setIsLoggedIn(true)
    }



    return (
        <UserContext.Provider value={{ currentUser, login, logout, signup, isLoggedIn }}>
        {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }