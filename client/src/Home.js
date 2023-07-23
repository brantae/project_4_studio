import React, { useState, useEffect } from "react";

function Home() {

    const [lessons, setLessons] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/lessons')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])
    
    return (
    <div className="home-page">
        <h1>Welcome to The Studio!</h1>
        <h2>Here you can book private lessons with various teachers in our state of the art studio space.</h2>
        <h2>Log in or sign up to book a lesson with your preferred teacher today.</h2>
    </div>
    
    )
}

export default Home;