import React, { useState } from 'react'
import { Form, Input, Button, Dropdown } from 'semantic-ui-react'

function BookLesson() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        roomNumber: '',
        teacher: '',
        lessonTime: '',
        })

    const roomOptions = [
        { key: '1', text: '1', value: '1' },
        { key: '2', text: '2', value: '2' },
        { key: '3', text: '3', value: '3' },
        { key: '4', text: '4', value: '4' },
        { key: '5', text: '5', value: '5' }
        ]

    const teacherOptions = [
        { key: 'teacher1', text: 'Alyssa Edwards', value: 'Teacher 1' },
        { key: 'teacher2', text: 'Blair St. Clair', value: 'Teacher 2' },
        { key: 'teacher3', text: 'Miss Naomi', value: 'Teacher 3' }
        ]

    function handleSubmit() {

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
            
            <Form onSubmit={handleSubmit}>
        <Form.Field>
        <label>full name</label>
        <Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
        />
        </Form.Field>
        <Form.Field>
        <label>username</label>
        <Input
            type="email"
            name="email"
            placeholder="use your email"
            value={formData.email}
            onChange={handleChange}
            required
        />
        </Form.Field>
        <Form.Field>
        <label>room number:</label>
        <Dropdown
            placeholder="select room number"
            name="roomNumber"
            value={formData.roomNumber}
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
            name="teacher"
            value={formData.teacher}
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
            name="lessonTime"
            value={formData.lessonTime}
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