import React, { useContext, useState } from "react";
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { UserContext } from "./contexts/UserContext";

function LogIn() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState([])

    const { login } = useContext(UserContext)

    function handleSubmit(event) {
        event.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                username: username, 
                password: password }),
        })
        .then((resp) => {
            if (resp.ok) {
                resp.json().then((userData) => login(userData))
            } else {
                resp.json().then((errorData) => setErrors(errorData.errors))
            }
        })
            
        }

    
    return (
        <div className = 'login-form'> 
        <Form onSubmit={handleSubmit}>
            <Form.Field className="input-field">
                <label>username</label>
                <input
                type="username"
                placeholder="username"
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
        {errors.length > 0 && (
    <ul style={{ color: "red" }}>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  )}
            <Button 
            type="submit"
            primary
            >log in!</Button>
        </Form>
        <p>haven't made an account? <Link to='/sign_up'>sign up!</Link></p>
        </div>
    )
}

export default LogIn;