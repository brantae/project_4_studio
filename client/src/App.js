import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import LogIn from './LogIn';
import Error from "./Error";
import SignUp from './SignUp';
import Home from './Home';
import BookLesson from './BookLesson';
import Lessons from './Lessons';
import ManageBookings from './ManageBookings';
import { UserProvider } from './contexts/UserContext';

function App() {

  require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const [lessons, setLessons] = useState([])


function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  return date.toLocaleTimeString(undefined, options);
}

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

function handleUpdateTime(lessonId, newTime) {
  const currentTime = new Date();
  const [hours, minutes] = newTime.split(":");
  currentTime.setHours(parseInt(hours, 10));
  currentTime.setMinutes(parseInt(minutes, 10));

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  fetch(`/lessons/${lessonId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      lesson: {
        start_time: formattedTime,
      },
    }),
  })
    .then(response => response.json())
    .then(updatedData => {
      const updatedLesson = updatedData.lesson;
      const updatedLessons = lessons.map(lesson =>
        lesson.id === updatedLesson.id ? { ...lesson, start_time: updatedLesson.start_time } : lesson
      );
      setLessons(updatedLessons);
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
          <Route exact path="/book" element = {<BookLesson />}/>
          <Route exact path="/lessons" element = {<Lessons lessons={lessons} setLessons={setLessons} />}/>
          <Route exact path="/manage" element = 
          {<ManageBookings 
          lessons={lessons} 
          setLessons={setLessons}
          handleUpdateTime={handleUpdateTime}
          handleCancelLesson={handleCancelLesson} />}/>
          <Route path="/*" element={<Error />}/>
        </Routes>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
