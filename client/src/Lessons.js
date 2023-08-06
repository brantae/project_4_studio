import React, { useState, useEffect } from 'react'

export default function Lessons() {

    const [lessons, setLessons] = useState([])

    useEffect(() => {
        const fetchLessons = () => {
            fetch('/lessons', {
                cache: 'no-cache',
                headers: {
                  pragma: 'no-cache',
                },
              })
            .then((res) => {
                console.log(res)
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setLessons(data)
            })
            .catch((error) => console.error('Error fetching Lessons:', error));
        }

        fetchLessons()
    }, [])


  return (
    <div>
        <h2>Lessons</h2>
        <ul>
            {lessons.map((lesson) => {
                <li key={lesson.id}>
                    <strong>{lesson.title}</strong>
                </li>
            })}
        </ul>
    </div>
  )
}
