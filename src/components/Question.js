import React, { Component } from 'react'
import connect from "react-redux/es/connect/connect";

class Question extends Component {
    render() {
        return (
            <div className="question-cp">
                <div className="question-c__user">
                    <img className="user-avatar" src={`${this.props.userAvatar}`} alt={`${this.props.authorId}-avatar`}/>
                    {this.props.userName}
                </div>
                <div className="question-c__question">
                    Would you rather:
                    <br/>
                    {this.props.text}
                </div>
                <button className="question-c__question">View Poll</button>
            </div>
        )
    }
}

function mapStateToProps ({ users }, props) {
    console.log(props.authorId)
    return {
        userName: !users[props.authorId]
        ? ' No user name related'
        : users[props.authorId].name,
        userAvatar: !users[props.authorId]
            ? ' No urlAvatar related'
            : users[props.authorId].avatarURL
    }
}

export default connect(mapStateToProps)(Question)