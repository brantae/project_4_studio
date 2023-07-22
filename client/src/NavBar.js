import React from "react"
import { Link } from "react-router-dom"

function NavBar() {


    return (

<nav className = 'nav'>
        <Link to="/"> home </Link>
        <Link to="/login"> login </Link>
        <Link to="/sign_up"> signup </Link>
</nav>
    )
}

export default NavBar