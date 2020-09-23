import React, { useState } from 'react';

import StyledForm from "../../styles/index.js"
import { loginUser } from './api';

export const Login = () => {
    //const currentPath = history.location.pathname;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [disableButton, setDisableButton] = useState(false);

    const submit = (event) => {
        event.preventDefault();
        setDisableButton(true);
        loginUser({ email, password })
            .then((res) => {
            const {
                data: { 
                    data: {
                    token: accessToken = "",
                    ...data
                },
                },
            } = res || {};
            console.log(data);
        })
    };

    return (
        <StyledForm>
            <form>
                <h1>Login</h1>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button>Sign In</button>
            </form>
        </StyledForm>
    );
}