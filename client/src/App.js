
import './App.css';

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
