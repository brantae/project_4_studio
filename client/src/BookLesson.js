import React, { useContext, useState } from 'react'
import { Form, Input, Button, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { UserContext } from './contexts/UserContext'

function BookLesson({ handleChange }) {
    
    const [formData, setFormData] = useState({
        room_num: '',
        teacher_id: '',
        start_time: '',
        })
        const [errors, setErrors] = useState([])
        const [success, setSuccess] = useState(false)

    const { isLoggedIn, currentUser, setCurrentUser, teachers, setTeachers } = useContext(UserContext)
    
        if (!isLoggedIn) {
            return (
                <div>
                    <h1>want to book a lesson?</h1>
                    <div>
                    please <Link to="/login">log in</Link> to access this page.
                    </div>
                </div>
            )
        }

    const roomOptions = [
        { key: '1', text: '1', value: '1' },
        { key: '2', text: '2', value: '2' },
        { key: '3', text: '3', value: '3' },
        { key: '4', text: '4', value: '4' },
        { key: '5', text: '5', value: '5' }
        ]


    const teacherOptions = teachers.map((teacher) => {
        return {key: teacher.id, text: teacher.name, value: teacher.id}
    })


    function handleAddLesson(e) {
        e.preventDefault()
        fetch('/lessons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({lesson: formData})
            })
            .then(response => response.json())
            .then(newLesson => {
                if(newLesson.errors) {
                    console.log(newLesson.errors[0])
                    setErrors(newLesson.errors[0])
                    setFormData({
                        room_num: '',
                        teacher_id: '',
                        start_time: '',
                        })
                } else {
                    console.log("created lesson:", newLesson)
                    //get lessons from current user
                    //put new lesson into array of lessons
                    const updatedLessons = [...currentUser.lessons, newLesson]
                    const updatedUser = {...currentUser, lessons: updatedLessons}
                    setCurrentUser(updatedUser)

                    setFormData({
                        room_num: '',
                        teacher_id: '',
                        start_time: '',
                        })
                    setSuccess(true)
                    setErrors([])
                    console.log(teachers)
                    const teacherId = formData.teacher_id 
                    const updatedTeachers = teachers.map(teacher => {
                        if (teacher.id === teacherId) {
                            const updatedTeacher = {
                                ...teacher,
                                users: [...teacher.users, currentUser] // Assuming users array contains students
                            };
                            return updatedTeacher;
                        }
                        return teacher;
                    });
                    setTeachers(updatedTeachers);
                    //when i add a lesson, update teachers state to add a student
                    
                    //go through teachers in teachers array to match id
                    //update user in teachers

                }
            })
        }
    
    function handleChange(event, { name, value }) {
        setFormData({
            ...formData,
            [name]: value,
            })

    }
    
    return (
        <div>
            <h2 className = 'booking-header'> book a private lesson today:</h2>
        <div className='booking-form'>
            
        <Form onSubmit={handleAddLesson}>
        <Form.Field>
        <label>room number:</label>
        <Dropdown
            placeholder="select room number"
            name="room_num"
            value={formData.room_num}
            onChange={handleChange}
            fluid
            selection
            options={roomOptions}
            required
        />
        </Form.Field>
        <Form.Field>
        <label>teacher:</label>
        <Dropdown
            placeholder="select teacher"
            name="teacher_id"
            value={formData.teacher_id}
            onChange={handleChange}
            fluid
            selection
            options={teacherOptions}
            required
        />
        </Form.Field>
        <Form.Field>
        <label>lesson time</label>
        <Input
            type="time"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
            required
        />
        {errors.length > 0 && (
    <div className="ui negative message">{errors}</div>
    )}
    {success && (
        <div className="ui positive message">
            <div className="header">Success</div>
            <p>Lesson successfully booked!</p>
        </div>
        )}
        </Form.Field>
        <Button type="submit">book a lesson</Button>
    </Form>
        </div>
        </div>
    )
}

export default BookLesson