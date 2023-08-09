

import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import LogIn from './LogIn';
import Error from "./Error";
import SignUp from './SignUp';
import Home from './Home';
import BookLesson from './BookLesson';
import Lessons from './Lessons';
import Bookings from './Bookings';
import { AuthProvider } from './contexts/AuthContext';

function App() {

  require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);



const [lessons, setLessons] = useState([])

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



    

  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route exact path="/login" element = {<LogIn />} />
          <Route exact path="/sign_up" element = {<SignUp />}/>
          <Route exact path="/book" element = {<BookLesson />}/>
          <Route exact path="/lessons" element = {<Lessons lessons={lessons} setLessons={setLessons} />}/>
          <Route exact path="/manage" element = {<Bookings />}/>
          <Route path="/*" element={<Error />}/>
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
