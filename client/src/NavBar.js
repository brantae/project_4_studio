import React from "react"
import { Link } from "react-router-dom"

function NavBar() {


    return (

<nav className = 'nav'>
        <Link to="/"> home </Link>
        <Link to="/book"> book lesson </Link>
        <Link to="/manage"> manage lessons </Link>
</nav>
    )
}

export default NavBar