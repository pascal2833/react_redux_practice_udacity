import React, { Component } from 'react'
import Nav from './Nav'
import connect from "react-redux/es/connect/connect";

class Header extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                {this.props.userChoosed
                    ? <div>
                        <span>Hello, {this.props.userChoosed.name}</span>
                        <img src={`${this.props.userChoosed.avatarURL}`} alt={`${this.props.userChoosed.id}-avatar`}/>
                        <span>Logout</span>
                    </div>
                    : null
                }
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return {userChoosed: users[users.userChoosed]} // We have to return an object? Yes, because we use it with this.props. ...
}
export default connect(mapStateToProps)(Header)