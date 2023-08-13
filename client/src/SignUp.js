import React, { useContext, useState } from "react";
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from "./contexts/UserContext";

function SignUp() {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [errorsList, setErrorsList] = useState([])
    const navigate = useNavigate()

    const { signup } = useContext(UserContext)

    function handleSubmit(event) {
    event.preventDefault()
    fetch('http://localhost:3000/sign_up', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            username: username,
            password: password
        })
    })
    .then(res => res.json())
    .then(user => {
        if (!user.errors) {
            signup(user)
            navigate('/')
        } else {
            setName('')
            setUsername('')
            setPassword('')
            const errorList = user.errors.map(e => <li>{e}</li>)
            setErrorsList(errorList)
        }
    })
    }

    
    return (
    <div className = 'signup-form'>
        <Form onSubmit={handleSubmit}>
        <Form.Field className="input-field">
                <label>full name</label>
                <input
                type="text"
                placeholder="full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                </Form.Field>
            <Form.Field className="input-field">
                <label>username</label>
                <input
                type="email"
                placeholder="username (email address)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Field>
        <Form.Field className="input-field">
            <label>password</label>
            
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Field>
            <Checkbox
                label="show password"
                checked={showPassword}
                onChange={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
                />
            </Form.Field>
        </Form.Field>
            <Button 
            type="submit"
            primary 
                >sign up!</Button>
        </Form>
        <ul>
            {errorsList}
        </ul>
        <p>already have an account? <Link to='/login'>log in!</Link></p>
    </div>
    )
}

export default SignUp;