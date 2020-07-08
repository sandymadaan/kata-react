import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            loginErrors: ""
        }
    }

    register() {
        console.warn('state', this.state);
        fetch('http://api.kata.local/api/v1/register', {
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
            <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
                <form action="">
                    <div className="px-4 pb-4">
                        <label htmlFor="name" className="text-sm block font-bold  pb-2">Name</label>
                        <input type="text" name="name" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Name" onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    </div>
                    <div className="px-4 pb-4">
                        <label htmlFor="email" className="text-sm block font-bold  pb-2">EMAIL ADDRESS</label>
                        <input type="email" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    </div>
                    <div className="px-4 pb-4">
                        <label htmlFor="password" className="text-sm block font-bold pb-2">PASSWORD</label>
                        <input type="password" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => this.register()}>Register</button>
                    </div>
                </form>

            </div>
        );
    }

}

export default Register;