import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import {getUsers} from "../actions/getUsers";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(getUsers())
    }
    render() {
        return (
            <div>
                <h1>React App</h1>
                <Login></Login>
            </div>
        )
    }
}

function mapStateToProps ({ user }) {

}
// export default (mapStateToProps)(App)
export default connect()(App)
// export default App
