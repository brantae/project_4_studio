

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import LogIn from './LogIn';
import Error from "./Error";

function App() {

  require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element = {<LogIn />} />
          <Route path="/*" element={<Error />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
