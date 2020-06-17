import React, { Component } from 'react';

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
            <div className="w-full max-w-md bg-gray-800" >
                <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8">
                    <div className="px-4 pb-4">
                        <label htmlFor="email" className="text-sm block font-bold  pb-2">EMAIL ADDRESS</label>
                        <input type="email" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    </div>
                    <div className="px-4 pb-4">
                        <label htmlFor="password" className="text-sm block font-bold pb-2">PASSWORD</label>
                        <input type="password" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => this.login()}>Sign In</button>
                    </div>
                </form>

                <a href="https://slack.com/oauth/v2/authorize?user_scope=identity.basic&client_id=354865735936.734295501569">
                    <img src="https://api.slack.com/img/sign_in_with_slack.png" alt="" />
                </a>


            </div>
        );
    }

}

export default Login;