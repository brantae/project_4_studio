import React, { useState, useEffect } from 'react'

const UserContext = React.createContext()

function UserProvider({children}) {
    
    const [user, setUser] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        fetch('/me')
        .then(resp => resp.json())
        .then(data => {
            setUser(data)
            if (data.error) {
                setIsLoggedIn(false)
            } else {
              setIsLoggedIn(true)
            }
        }) 
    }, [])


    function login(user) {
        setUser(user)
        setIsLoggedIn(true)
    }

    function logout() {
        setUser({})
        setIsLoggedIn(false)
    }

    function signup(user) {
        setUser(user)
        setIsLoggedIn(true)
    }



    return (
        <UserContext.Provider value={{ user, login, logout, signup, isLoggedIn }}>
        {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }