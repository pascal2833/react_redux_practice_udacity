import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chooseUser } from '../actions/users'

class Login extends Component {

    state = {userChoosed: ''}
    handleSelect = e => {
        const userChoosed = e.target.value
        this.setState(() => ({
            userChoosed
        }))
    }
    handleSubmit = e => {
        e.preventDefault()
        const { userChoosed } = this.state
        const { dispatch } = this.props
        // Add userChoosed true for the user choosed:
        // dispatch(handleAddTweet(text, id))
        userChoosed !== '' ? dispatch(chooseUser(userChoosed)) : alert('You have to choose an user')

        // TODO: redirect to home.
        // this.setState(() => ({
            // toHome: userChoosed === '' ? false : true
        // }))

        // this.setState(() => ({
           // text: '',
           // toHome: id ? false : true // If newTweet with id, ie = comment/other tweet, don't redirect to home when submit, if not, to home.
        // }))

    }

    render() {
        return (
            <div>
                <h3>Choose an user to use the application</h3>
                <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleSelect}>
                        <option value="">Select User</option>
                        {Object.keys(this.props.users).map(userId => (
                                <option value={userId} key={userId}>{this.props.users[userId].name}</option>
                            )
                        )
                        }
                    </select>
                    <button type='submit'>Sign in</button>
                </form>

            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return {users}
}
export default connect(mapStateToProps)(Login)