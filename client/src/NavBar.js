import React from "react"
import { Link } from "react-router-dom"

function NavBar() {


    return (

<nav className = 'nav'>
        <Link to="/"> home </Link>
        <Link to="/lessons"> lessons </Link>
        <Link to="/book"> book lesson </Link>
        <Link to="/manage"> manage bookings </Link>
</nav>
    )
}

export default NavBar