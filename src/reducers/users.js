import { RECEIVE_USERS } from "../actions/users"
import { LOG_USER } from "../actions/users"

export default function users (state = null, action) { // Initialise state to null because if no user received, nothing to show.
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}