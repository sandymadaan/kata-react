import React, { Component } from 'react';

import StyledForm from "../styles/index.js"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginErrors: ""
        }
    }

    login() {
        console.warn('state', this.state);
        fetch('http://api.kata.local/api/v1/login', {
            method: "POST",
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp.data.token);
                localStorage.setItem("auth", JSON.stringify(resp.data.token))
            })
        })
    }

    render() {
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

}

export default Login;