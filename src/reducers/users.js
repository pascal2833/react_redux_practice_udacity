import {CHOOSE_USER, RECEIVE_USERS} from "../actions/users"

export default function users (state = null, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return { // Important: reducers are always asyn.
                ...state,
                ...action.users // Important: users reducers only add things related with users.
            }
        case CHOOSE_USER:
            return {
                ...state,
                userChoosed: action.userChoosed
            }
        default:
            return state
    }
}