import { _getUsers } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
import { receiveUsers } from './users'

export function getUsers () { // Action creator but particular one, thunk action creator.
    return (dispatch) => { // Return a function, not an object.
        dispatch(showLoading()) // "Normal" dispatch, without asyn so not in then().
        return _getUsers()
            .then(users => {
                console.log(users)
                dispatch(receiveUsers(users)) // Need to put in another action because this one is not asyn.
                dispatch(hideLoading()) // We close teh loading when data loaded.
            })
    }
}