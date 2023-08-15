import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './contexts/UserContext'
import { Button, Card, Form, Header, Icon } from 'semantic-ui-react'

  function Teachers() {

    const { teachers, setTeachers, errors, setErrors } = useContext(UserContext)

    const [newTeacher, setNewTeacher] = useState({
      name: '',
      specialty: '',
      description: ''
    })
    
    const handleInputChange = event => {
      const { name, value } = event.target;
      setNewTeacher(prevTeacher => ({ ...prevTeacher, [name]: value }));
    }

    const handleSubmit = event => {
      event.preventDefault();
      
      fetch('/teachers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTeacher)
      })
      .then(resp => resp.json())
      .then((newTeacherData) => {
        if (newTeacherData.errors) {
          const errorsLis = newTeacherData.errors.map((e) => <li>{e}</li>)
          setErrors(errorsLis)
        } else {
        console.log('new teacher added:', newTeacherData)
        //update the teachers list
        setTeachers(prevTeachers => [...prevTeachers, newTeacherData])
        //clear form
        setNewTeacher({
          name: '',
          specialty: '',
          description: ''
        });
      }
    })
    }


  return (
    <div>
      
      <Header as="h2" icon textAlign="center">
        <Icon name="users" circular />
        <Header.Content>our teachers</Header.Content>
      </Header>
      <Card.Group itemsPerRow={3}>
        {teachers.map((teacher) => {
          
          const uniqueStudents = new Set()
          teacher.users.forEach((user) => {
            if (user.name && user.id) {
              uniqueStudents.add(user.name)
            }
          })
          const uniqueStudentNames = Array.from(uniqueStudents)

          return (
            <Card key={teacher.id}>
              <Card.Content>
                <Card.Header>{teacher.name}</Card.Header>
                <Card.Meta>{teacher.specialty}</Card.Meta>
                <Card.Description>{teacher.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Header as="h4">current students</Header>
                <ul>
                  {uniqueStudentNames.map((studentName) => (
                    <li key={studentName}>{studentName}</li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
      <Header as="h2" icon textAlign="center">
        <Icon name="add user" circular />
        <Header.Content>add a new teacher</Header.Content>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="name"
          name="name"
          value={newTeacher.name}
          onChange={handleInputChange}
        />
        <Form.Input
          label="specialty"
          name="specialty"
          value={newTeacher.specialty}
          onChange={handleInputChange}
        />
        <Form.TextArea
          label="description"
          name="description"
          value={newTeacher.description}
          onChange={handleInputChange}
        />
        <Button type="submit" primary>
          add teacher
        </Button>
      </Form>
    </div>

  )
}

export default Teachers
