import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"

function NavBar() {

    const {currentUser, logout, isLoggedIn} = useContext(UserContext)
    const navigate = useNavigate()

    function logoutUser() {
        fetch('/logout', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    if (isLoggedIn) {
        return (
            
        <nav className = 'nav'>
        <Link to="/"> home </Link>
        <Link to="/teachers"> teachers </Link>
        <Link to="/book"> book lesson </Link>
        <Link to="/manage"> manage bookings </Link>

        <h2> hello {currentUser.name} </h2>
        <button onClick={logoutUser}>logout</button>
        </nav>
        )
    } else {
        return (
        <nav className = 'nav'>
        <Link to="/"> home </Link>
        <Link to="/teachers"> teachers </Link>
        <Link to="/book"> book lesson </Link>
        <Link to="/manage"> manage bookings </Link>
</nav>
        )
    }

    return (

{/* <nav className = 'nav'>
        <Link to="/"> home </Link>
        <Link to="/lessons"> lessons </Link>
        <Link to="/book"> book lesson </Link>
        <Link to="/manage"> manage bookings </Link>
</nav> */}
    )
}

export default NavBar