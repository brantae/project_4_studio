import React, { useState, useEffect } from "react";
import image1 from '../src/images/image1.jpg'
import image2 from '../src/images/image2.jpg'
import image3 from '../src/images/image3.jpg'

function Home() {

    // const componentStyle = {
    //     backgroundImage: `url(${image1})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     width: '100%',
    //     height: '100vh',
    //     border: '2px solid black',
        
    //     }

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
        <h2>Here you can book private lessons with various teachers in our state-of-the-art studio space.</h2>
        <h2>Log in or sign up to book a lesson with your preferred teacher today.</h2>
    </div>
    
    )
}

export default Home;