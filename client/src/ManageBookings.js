import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './contexts/UserContext'
import { List, Button, Dropdown } from 'semantic-ui-react'


  function ManageBookings( {lessons, setLessons, handleCancelLesson} ) {
    
    
    const { currentUser, setCurrentUser, isLoggedIn, teachers, setTeachers } = useContext(UserContext)
    const userBookedLessons = currentUser.lessons
    console.log(userBookedLessons)
    


    function formatDate(dateString) {
      const date = new Date(dateString)
      const options = { hour: 'numeric', minute: 'numeric', hour12: true }
      return date.toLocaleTimeString(undefined, options)
    }

    function handleChangeTeacher(lessonId, newTeacherId) {
      fetch(`/lessons/${lessonId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lesson: {
            teacher_id: newTeacherId,
          },
        }),
      })
        .then(response => response.json())
        .then(updatedData => {
          console.log('Updated data from server:', updatedData)
          const updatedLessons = currentUser.lessons.map(lesson =>
            lesson.id === updatedData.id ? updatedData : lesson
          );
          console.log(updatedLessons)
          const updatedUser = {...currentUser, lessons: updatedLessons}
          setCurrentUser(updatedUser)
        })
        .catch(error => {
          console.error('Error updating teacher:', error);
        });
    }

    function handleCancelLesson(lessonId, teacherId) {
      fetch(`/lessons/${lessonId}`, {
        method: 'DELETE'
      })
        .then(() => {
          console.log("delete")
          const updatedLessons = currentUser.lessons.filter(lesson =>
            lesson.id !== lessonId
          );
          console.log(updatedLessons)
          console.log('teacherId:', teacherId);
          console.log('currentUser.id:', currentUser.id)

          const updatedUser = {...currentUser, lessons: updatedLessons}
            setCurrentUser(updatedUser)
          const updatedTeachers = teachers.map(teacher => {
            if (teacher.id === teacherId) {
                const updatedUsers = teacher.users.filter(user => user.id !== currentUser.id);
                return {
                    ...teacher,
                    users: updatedUsers
                };
            }
            return teacher;
            
        });
        console.log('updatedTeachers:', updatedTeachers)
        setTeachers(updatedTeachers);
        })
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
      {userBookedLessons.length === 0 ? (
        <p>you have no lessons to manage!</p>
      ) : (
      <List divided relaxed>
          {userBookedLessons.map(lesson => (
            <List.Item key={lesson.id}>
<List.Content>
              <List.Header>room: {lesson.room_num}</List.Header>
              <List.Description>
                <div>teacher: {lesson.teacher_name}</div>
                <div>start time: {formatDate(lesson.start_time)}</div>
                <Dropdown
                  placeholder="Select Instructor"
                  fluid
                  selection
                  options={teachers.map(teacher => ({
                    key: teacher.id,
                    text: teacher.name,
                    value: teacher.id,
                  }))}
                  value={lesson.teacher_id}
                  onChange={(event, data) =>
                    handleChangeTeacher(lesson.id, data.value)
                  }
                />
                  <Button onClick={() => handleCancelLesson(lesson.id, lesson.teacher_id)}>cancel</Button>
                </List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
        )}
    </div>
  );
}

  export default ManageBookings
