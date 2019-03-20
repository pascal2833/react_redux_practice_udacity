// ----- Asyn action creator.
import { _getInitialData } from '../utils/api'
import {hideLoading, showLoading} from "react-redux-loading";
import { receiveUsers } from "./users";
import {receiveQuestions} from "./questions";

export function getInitialData () { // Action creator but particular one, thunk action creator.
    return (dispatch) => { // Return a function, not an object.
        dispatch(showLoading()) // "Normal" dispatch, without asyn so not in then().
        return _getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users)) // Need to put in another action because this one is not asyn.
                dispatch(receiveQuestions(questions)) // Need to put in another action because this one is not asyn.
                dispatch(hideLoading()) // We close the loading when data loaded.
            })
    }
}