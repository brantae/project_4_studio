import React, { useState } from "react";
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

function SignUp() {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
    }

    function handleSignup() {
        
    }
    
    return (
    <div className = 'signup-form'>
        <Form onSubmit={handleSubmit}>
        <Form.Field className="input-field">
                <label>full name</label>
                <input
                type="text"
                placeholder="full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                />
                </Form.Field>
            <Form.Field className="input-field">
                <label>username</label>
                <input
                type="email"
                placeholder="username (email address)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            onClick={handleSignup}>sign up!</Button>
        </Form>
        <p>already have an account? <Link to='/login'>log in!</Link></p>
    </div>
    )
}

export default SignUp;