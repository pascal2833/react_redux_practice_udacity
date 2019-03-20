export const RECEIVE_USERS = 'RECEIVE_USERS'
export const CHOOSE_USER = 'CHOOSE_USER'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function chooseUser(userChoosed) { // TODO: return the user selected by multiselect.
    return {
        type: CHOOSE_USER,
        userChoosed
    }
}

