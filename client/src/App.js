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

// const [lessons, setLessons] = useState([])
// const addLesson = (newLesson) => {
//   setLessons([...lessons, newLesson]);
// }

// const [formData, setFormData] = useState({
//   room_num: '',
//   teacher_id: '',
//   start_time: '',
//   })
//   const [errors, setErrors] = useState([])
//   const [success, setSuccess] = useState(false)



// useEffect(() => {
//     const fetchLessons = () => {
//         fetch('/lessons')
//         .then((res) => {
//             console.log(res)
//             return res.json()
//         })
//         .then((data) => {
//             console.log(data)
//             setLessons(data)
//         })
//         .catch((error) => console.error('Error fetching Lessons:', error));
//     }

//     fetchLessons()
// }, [])



// function handleCancelLesson(lessonId) {
//   fetch(`/lessons/${lessonId}`, {
//     method: 'DELETE'
//   })
//     .then(() => {
//       console.log("delete")
//       // const updatedLessons = lessons.filter(lesson =>
//       //   lesson.id !== lessonId
//       // );
//       // setLessons(updatedLessons);
//     })
// }
// function handleAddLesson(e) {
//   e.preventDefault()
//   fetch('/lessons', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({lesson: formData})
//       })
//       .then(response => response.json())
//       .then(data => {
//           if(data.errors) {
//               console.log(data.errors[0])
//               setErrors(data.errors[0])
//               setFormData({
//                   room_num: '',
//                   teacher_id: '',
//                   start_time: '',
//                   })
//           } else {
//               // addLesson(data)
//               setFormData({
//                   room_num: '',
//                   teacher_id: '',
//                   start_time: '',
//                   })
//               setSuccess(true)
//               setErrors([])
//           }
//       })
//   }

// function handleChange(event, { name, value }) {
//   setFormData({
//       ...formData,
//       [name]: value,
//       })




    

  return (
    <div className="App">
      <UserProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route exact path="/login" element = {<LogIn />} />
          <Route exact path="/sign_up" element = {<SignUp />}/>
          <Route exact path="/book" element = 
          {<BookLesson 
              // addLesson={addLesson}
              // handleAddLesson={handleAddLesson} 
              // handleChange={handleChange}
              // errors={errors} 
              // setErrors={setErrors} 
              // formData={formData} 
              // setFormData={setFormData} 
              // success={success}
              />}/>
          <Route exact path="/teachers" element = {<Teachers />}/>
          <Route exact path="/manage" element = 
          {<ManageBookings />}/>
          <Route path="/*" element={<Error />}/>
        </Routes>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
