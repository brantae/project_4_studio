import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './contexts/UserContext'
import { List, Button, Input } from 'semantic-ui-react'

  function ManageBookings( {lessons, setLessons} ) {
    
    const { currentUser, isLoggedIn } = useContext(UserContext)
    const [userLessons, setUserLessons] = useState([])
    const userBookedLessons = lessons.filter(lesson => lesson.user_id === currentUser.id)
    
        if (!isLoggedIn) {
            return (
                <div>
                    please <Link to="/login">log in</Link> to manage your bookings.
                </div>
            )
        }



  function handleUpdateTime(lessonId, newTime) {
    // Send PUT request to update lesson time
  }

  function handleCancelLesson(lessonId) {
    // Send DELETE request to cancel lesson
  }

  return (
    <div>
      <h2>Your Booked Lessons</h2>
      <List divided relaxed>
        {userBookedLessons.map(lesson => (
          <List.Item key={lesson.id}>
            <List.Content>
              <List.Header>Room: {lesson.room_num}</List.Header>
              <List.Description>
                <div>Teacher: {lesson.teacher.name}</div>
                <div>Start Time: {lesson.start_time}</div>
                <Input
                  type="time"
                  onChange={event => handleUpdateTime(lesson.id, event.target.value)}
                />
                <Button onClick={() => handleCancelLesson(lesson.id)}>Cancel</Button>
              </List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
}

  export default ManageBookings