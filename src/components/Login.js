import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div>
                <h3>Choose an user to use the application</h3>
                <select>
                    <option value="uu">uu</option>
                    <option value="pascal">pascal</option>
                    <option value="jiji">jiji</option>
                </select>
            </div>
        )
    }
}

export default Login