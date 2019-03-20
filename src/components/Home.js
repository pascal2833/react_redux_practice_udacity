import React, { Component } from 'react'
import Login from './Login'
import connect from "react-redux/es/connect/connect";

class Home extends Component {
    render () {
        return (
            <div>
                {this.props.userChoosed
                    ? <div>
                        <h1>Home</h1>
                    </div>
                    : <Login/>
                }
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return {userChoosed: users.userChoosed } // loadingUsers = true or false.
}
export default connect(mapStateToProps)(Home)