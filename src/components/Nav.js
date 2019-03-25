import React, { Component } from 'react'

class Nav extends Component {
    render () {
        return (
            <div className="header-cp__nav nav-cp">
                <div className="nav-cp__title pointer-cursor">Home</div>
                <div className="nav-cp__title pointer-cursor">New question</div>
                <div className="nav-cp__title pointer-cursor">Leader Board</div>
            </div>
        )
    }
}

export default Nav