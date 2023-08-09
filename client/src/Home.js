import React, { useState, useEffect } from "react";
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Home() {

    
    
    return (
    <div className="home-page">
        <h1>Welcome to The Studio!</h1>
        <h2>Book private lessons with various teachers in our state-of-the-art studio space.</h2>
        <h2>Log in or sign up to book a lesson with your preferred teacher today.</h2>
        <div>
        <Button as={Link} to='/login' primary>
            click here to log in
        </Button>
        </div>
    </div>
    
    )
}

export default Home;