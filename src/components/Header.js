import React, { Component } from 'react'
import Nav from './Nav'
import connect from "react-redux/es/connect/connect";

class Header extends Component {
    render() {
        return (
            <div className="header-cp">
                <Nav></Nav>
                {this.props.userChoosed
                    ? <div className="header-cp__user-info">
                        <div className="header-cp__user-info__items">Hello, {this.props.userChoosed.name}</div>
                        <img className="user-avatar header-cp__user-info__items" src={`${this.props.userChoosed.avatarURL}`} alt={`${this.props.userChoosed.id}-avatar`}/>
                        <div className="header-cp__user-info__items pointer-cursor">Logout</div>
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