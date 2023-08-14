import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './contexts/UserContext'
import { Card, Header, Icon } from 'semantic-ui-react'

  function Teachers() {

    const { teachers } = useContext(UserContext)
    
    if (!teachers || teachers.length === 0) {
      // Handle the case when teachers data is not yet loaded
      return <div>Loading teachers...</div>;
    }


  return (
    <div>
        <h1>See a list of our current teachers and some of their students</h1>
      
        <Header as="h2" icon textAlign="center">
        <Icon name="users" circular />
        <Header.Content>Teachers List</Header.Content>
      </Header>
      <Card.Group itemsPerRow={3}>
        {teachers.map((teacher) => (
          <Card key={teacher.id}>
            <Card.Content>
              <Card.Header>{teacher.name}</Card.Header>
              <Card.Meta>{teacher.specialty}</Card.Meta>
              <Card.Description>{teacher.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Header as="h4">Current Students</Header>
        <ul>
          {teacher.users.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  )
}

export default Teachers
