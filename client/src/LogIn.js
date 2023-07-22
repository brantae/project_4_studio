import React, { useState } from "react";
import { Form, Button } from 'semantic-ui-react';

function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
    event.preventDefault();
    console.log(event)

    };

    
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Field>
            <label>username</label>
            <input
            type="email"
            placeholder="username (your email)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </Form.Field>
        <Form.Field>
            <label>password</label>
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </Form.Field>
        <Button type="submit">login</Button>
        </Form>
    
    )
}

export default LogIn;