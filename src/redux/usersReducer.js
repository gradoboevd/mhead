import {SET_CREATE_USER, SET_DELETE_USER, SET_EDIT_USER, SET_REQUEST_USERS} from './actionsTypes';

export const initialState = {
    users: [],
};

// Pure Functions
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_CREATE_USER:
        //     return { ...state, users: state.users.concat([action.payload]) };
        // case SET_DELETE_USER:
        //     return { ...state, users: action.payload };
        // case SET_EDIT_USER:
        //     return { ...state };
        case SET_REQUEST_USERS:
            return { ...state, users: action.payload };
        default: return state
    }
};
