import React, { useState, useEffect } from 'react'

export default function Lessons({ lessons, setLessons }) {

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
        <h1>Here is a list of currently booked lessons by our users below</h1>
      {lessons.map(lesson => (
        <div key={lesson.id}>
            <h2>{lesson.teacher.specialty} class</h2>
            <p>taught by: {lesson.teacher.name}</p>
            <p>repeats {lesson.repeat} at {formatTime(lesson.start_time)} for {lesson.class_length} minutes</p>
            <hr></hr>
            </div>
      ))}
    </div>
  )
}
