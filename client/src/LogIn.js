import React, { useContext, useState } from "react";
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { UserContext } from "./contexts/UserContext";

function LogIn() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)

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
            .then((response) => {
                if (response.ok) {
                return response.json();
                } else if (response.status === 422) {
                return response.json().then((responseJson) => {
                    setError(responseJson.errors.join(', '));
                  throw new Error('Validation error'); // Throwing error to go to the catch block
                });
                } else {
                setError('Login failed. Please check your credentials.');
                throw new Error('Login failed');
                }
            })
            .then((userData) => {
              // Call the login function from the context
              login(userData); // Assuming the login function handles setting user data
            })
            .catch((error) => {
                setError('An error occurred during login.');
            });
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