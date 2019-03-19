import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

// Store creation:
const store = createStore(reducer, middleware) // We need to say to store that we want to use all reducers and middlewares.
// const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>{/*Link store to react-redux librairy.*/}
        <App />
    </Provider>,
    document.getElementById('root')
)