import React, { useState } from "react";
import { Form, Button, Checkbox } from 'semantic-ui-react';

function LogIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    function handleSubmit(event) {
    event.preventDefault()
    console.log(event)

    }

    
    return (
        <div className = 'login-form'> 
        <Form onSubmit={handleSubmit}>
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
            <Button type="submit">sign up!</Button>
        </Form>
        </div>
    )
}

export default LogIn;