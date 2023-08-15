import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = React.createContext()

function UserProvider({children}) {
    
    const [currentUser, setCurrentUser] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [teachers, setTeachers] = useState([])
    
    


//GET '/me' to 'users#show'
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

    //GET '/teachers' to 'teachers#index'
    useEffect(() => {
        const fetchTeachers = () => {
            fetch('/teachers')
            .then((res) => {
                console.log(res)
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setTeachers(data)
            })
            .catch((error) => console.error('Error fetching Teachers:', error));
        }
    
        fetchTeachers()
    }, [])

//Login
    function login(currentUser) {
        setCurrentUser(currentUser)
        setIsLoggedIn(true)
    }

//Logout
    function logout() {
        setCurrentUser({})
        setIsLoggedIn(false)
    }

//Signup
    function signup(currentUser) {
        setCurrentUser(currentUser)
        setIsLoggedIn(true)
    }



    return (
        <UserContext.Provider value={{ currentUser, login, logout, signup, isLoggedIn, teachers, setTeachers }}>
        {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }