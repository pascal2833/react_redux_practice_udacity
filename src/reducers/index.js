import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({ // Way to combine all reducers in one.
    users,
    questions,
    loadingBar: loadingBarReducer
})