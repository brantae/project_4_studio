import React, { useState, useEffect } from "react";

function Home() {

    const [lessons, setLessons] = useState()

    // useEffect(() => {
    //     fetch('http://localhost:3000/lessons', {mode: "no-cors"})
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // }, [])
    
    return (
    <div>
        <p> home page </p>
    </div>
    
    )
}

export default Home;