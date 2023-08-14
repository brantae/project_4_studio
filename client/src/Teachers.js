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
      
      <Header as="h2" icon textAlign="center">
        <Icon name="users" circular />
        <Header.Content>Teachers List</Header.Content>
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
    </div>

  )
}

export default Teachers
