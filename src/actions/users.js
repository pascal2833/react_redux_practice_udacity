export const RECEIVE_USERS = 'RECEIVE_USERS'
export const LOG_USER = 'LOG_USER'

export function receiveUsers(users) {
    return { // Action
        type: RECEIVE_USERS,
        users
    }
}

export function logUser(users) { // TODO: return the user selected by multiselect.
    return {
        type: LOG_USER,
        users
    }
}

