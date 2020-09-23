import React, { useState } from 'react';

import StyledForm from "../../styles/index.js"
import { loginUser } from './api';

export const Login = () => {
    //const currentPath = history.location.pathname;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const submit = (event) => {
        event.preventDefault();
        setLoading(true);
        loginUser({ email, password })
            .then((res) => {
            console.log(res);
            const {
                data: { 
                    data: {
                    token: accessToken = "",
                    ...data
                },
                },
            } = res || {};
            console.log(res);
            console.log("abd");
        })
    };

    return (
        <StyledForm>
            <form onSubmit={submit}>
                <h1>Login</h1>
                <input type="text" placeholder="Email" onChange={({ target }) => {
                    setEmail(target.value);
                }} value={email} />
                <input type="password" placeholder="Password" onChange={({ target }) => {
                    setPassword(target.value);
                }} value={password}/>
                <button onClick={submit} disabled={loading}>Sign In</button>
            </form>
        </StyledForm>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }