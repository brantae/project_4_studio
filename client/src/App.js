import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import LogIn from './LogIn';
import Error from "./Error";
import SignUp from './SignUp';
import Home from './Home';
import BookLesson from './BookLesson';
import Teachers from './Teachers';
import ManageBookings from './ManageBookings';
import { UserProvider } from './contexts/UserContext';

function App() {

  require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const [lessons, setLessons] = useState([])
const addLesson = (newLesson) => {
  setLessons([...lessons, newLesson]);
}

const [bookedLessons, setBookedLessons] = useState([])

useEffect(() => {
    const fetchLessons = () => {
        fetch('/lessons')
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
      const updatedLesson = updatedData.lesson;
      console.log('Updated lesson:', updatedLesson)
      const updatedLessons = lessons.map(lesson =>
        lesson.id === updatedLesson.id ? { ...lesson, teacher: updatedLesson.teacher } : lesson
      );
      console.log('Updated lessons array:', updatedLessons)
      setLessons(updatedLessons);
    })
    .catch(error => {
      console.error('Error updating teacher:', error);
    });
}

function handleCancelLesson(lessonId) {
  fetch(`/lessons/${lessonId}`, {
    method: 'DELETE'
  })
    .then(() => {
      const updatedLessons = lessons.filter(lesson =>
        lesson.id !== lessonId
      );
      setLessons(updatedLessons);
    })
}


    

  return (
    <div className="App">
      <UserProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route exact path="/login" element = {<LogIn />} />
          <Route exact path="/sign_up" element = {<SignUp />}/>
          <Route exact path="/book" element = {<BookLesson addLesson={addLesson}/>}/>
          <Route exact path="/teachers" element = {<Teachers />}/>
          <Route exact path="/manage" element = 
          {<ManageBookings 
          lessons={lessons} 
          setLessons={setLessons}
          handleCancelLesson={handleCancelLesson}
          handleChangeTeacher={handleChangeTeacher} />}/>
          <Route path="/*" element={<Error />}/>
        </Routes>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
