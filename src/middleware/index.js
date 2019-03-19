// We need this file to receive all the asyn actions dispatched (the component of these actions which will return an object
// -> when 2nd despatch will be take in charge by receiveAfterAsyn.

import thunk from 'redux-thunk'
import receiveAfterAsyn from './receiveAfterAsyn'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
    thunk,
    receiveAfterAsyn
)