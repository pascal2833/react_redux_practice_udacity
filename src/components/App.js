import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { getInitialData } from "../actions/getInitialData";
import LoadingBar from 'react-redux-loading-bar'
import Header from './Header'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'


class App extends Component {
    componentDidMount() {
        this.props.dispatch(getInitialData())
    }
    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar></LoadingBar>
                    <div>
                        {this.props.loadingUsersAndQuestions === true
                            ? null
                            : <div className="app-cp"> {/*Now, we don't want to show component but Route (ie: single page app)*/}
                                <h1>React App</h1>
                                <Header></Header>
                                <Route path='/' exact component={Home}></Route>
                                <Route path='/add' component={NewQuestion}></Route>
                                <Route path='/leaderboard' component={LeaderBoard}></Route>
                            </div>
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps ({ users, questions }) {
    return {loadingUsersAndQuestions: users === null && questions === null} // loadingUsersAndQuestions = true or false.
}
export default connect(mapStateToProps)(App)
// export default connect()(App)
// export default App

///////////////////////////////