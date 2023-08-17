import React, { createContext, useContext, useState, useEffect, } from 'react'

const UserContext = React.createContext()

function UserProvider({children}) {
    
    const [currentUser, setCurrentUser] = useState({lessons: []})
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [teachers, setTeachers] = useState([])
    const [userLessons, setUserLessons] = useState([])
    const [userTeachers, setUserTeachers] = useState([])
    
    


//GET '/me' to 'users#show'
    useEffect(() => {
        fetch('/me')
        .then(resp => resp.json())
        .then(data => {
            // console.log("fetched user data:", data)
            // console.log("fetched users:", data.users)
            // console.log("fetched user's lessons:", data.lessons)
            // console.log("fetched user's teachers:", data.teachers)
            if (data.error) {
            setIsLoggedIn(false)
            setCurrentUser({})
            } else {
            setIsLoggedIn(true)

            setCurrentUser(data)
            setUserLessons(data.lessons)
            setUserTeachers(data.teachers)
        }
        }) 
    }, [])

    //GET '/teachers' to 'teachers#index'
    useEffect(() => {
        const fetchTeachers = () => {
            fetch('/teachers')
            .then((res) => {
                //console.log(res)
                return res.json()
            })
            .then((data) => {
                //console.log("teacher data:", data)
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
        <UserContext.Provider value={{ currentUser, setCurrentUser, login, logout, signup, isLoggedIn, teachers, setTeachers, userLessons, userTeachers }}>
        {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }