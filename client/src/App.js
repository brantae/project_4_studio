

import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import LogIn from './LogIn';
import Error from "./Error";
import SignUp from './SignUp';
import Home from './Home';
import BookLesson from './BookLesson';
import { AuthProvider } from './contexts/AuthContext';

function App() {

  require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);



    // useEffect(() => {
    //     fetch('http://localhost:3001/auth')
    //     .then(res => {
    //       if(res.ok){
    //         res.json().then(user => setCurrentUser(user))
    //       }
    //     })
    // }, [])





    

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
          <Route path="/*" element={<Error />}/>
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
