

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import LogIn from './LogIn';
import Error from "./Error";
import SignUp from './SignUp';
import Home from './Home';

function App() {

  require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route exact path="/login" element = {<LogIn />} />
          <Route exact path="/sign_up" element = {<SignUp />}/>
          <Route path="/*" element={<Error />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
