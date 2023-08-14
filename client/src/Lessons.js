import React, { useState, useEffect } from 'react'

  function TeachersBio({ lessons, setLessons }) {

    function formatTime(str) {
        const date = new Date(str)
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const ampm = hours >= 12 ? 'PM' : 'AM'

        const formattedHours = hours % 12 || 12
        const formattedMinutes = minutes.toString().padStart(2, '0')

        return `${formattedHours}:${formattedMinutes}`
    }


  return (
    <div>
        <h1>See a list of our current teachers and some of their students</h1>
      {lessons.map(lesson => (
        <div key={lesson.id}>
            <h2>{lesson.teacher.specialty} class</h2>
            <p>taught by: {lesson.teacher.name}</p>
            <p>{lesson.user.name}</p>
            <hr></hr>
            </div>
      ))}
    </div>
  )
}

export default TeachersBio
