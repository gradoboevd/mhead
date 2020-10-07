import { SET_CREATE_USER, SET_DELETE_USER, SET_REQUEST_USERS, SET_EDIT_USER } from './actionsTypes'

export function createUser(user) {
    return {
        type: SET_CREATE_USER,
        payload: user
    }
}

export function editUser(data) {
    return {
        type: SET_EDIT_USER,
        payload: data
    }
}

export function deleteUser(id) {
    return {
        type: SET_DELETE_USER,
        payload: id
    }
}

export function requestUsers(users) {
    return {
        type: SET_REQUEST_USERS,
        payload: users
    }
}
