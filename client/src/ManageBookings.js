import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './contexts/UserContext'
import { List, Button, Input } from 'semantic-ui-react'

  function ManageBookings( {lessons, setLessons, handleUpdateTime, handleCancelLesson} ) {
    
    const [updatedTime, setUpdatedTime] = useState([])
    const { currentUser, isLoggedIn } = useContext(UserContext)
    const userBookedLessons = lessons.filter(lesson => lesson.user_id === currentUser.id)

    const handleChange = (lessonId, newTime) => {
      setUpdatedTime({ ...updatedTime, [lessonId]: newTime });
    }
    
        if (!isLoggedIn) {
            return (
              <div>
              <h1>want to manage your lessons?</h1>
              <div>
              please <Link to="/login">log in</Link> to access this page.
              </div>
          </div>
            )
        }


  return (
    <div>
      <h2>your booked lessons</h2>
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
                    value={updatedTime[lesson.id] || lesson.start_time}
                    onChange={event => handleChange(lesson.id, event.target.value)}
                  />
                  <Button onClick={() => handleUpdateTime(lesson.id)}>Update Time</Button>
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