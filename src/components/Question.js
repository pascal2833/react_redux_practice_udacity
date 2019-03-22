import React, { Component } from 'react'

class Question extends Component {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        )
    }
}

export default Question