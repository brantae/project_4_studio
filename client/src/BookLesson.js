import React, { useContext, useState } from 'react'
import { Form, Input, Button, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { UserContext } from './contexts/UserContext'

function BookLesson({addLesson}) {
    
    const [formData, setFormData] = useState({
        room_num: '',
        teacher_id: '',
        start_time: '',
        })

    const { isLoggedIn, currentUser, teachers, setTeachers } = useContext(UserContext)
    
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
            .then(data => {
            console.log('lesson booked', data)
                addLesson(data)
            })
            .catch(error => {
            
            console.log('error', error)
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
        </Form.Field>
        <Button type="submit">book a lesson</Button>
    </Form>
        </div>
        </div>
    )
}

export default BookLesson