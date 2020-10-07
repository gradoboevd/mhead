import { put, takeLatest, call } from 'redux-saga/effects';
import { CREATE_USER, DELETE_USER, REQUEST_USERS, EDIT_USER } from './actionsTypes';
import { requestUsers } from './actions';

const requestOptions = type => ({
    method: type || 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    cors: 'no-cors'
});

//******************* URLs *******************//

const urlGet = 'http://77.120.241.80:8911/api/users';
const urlCreate = 'http://77.120.241.80:8911/api/users';
const urlDelete = 'http://77.120.241.80:8911/api/user/';
const urlEdit = 'http://77.120.241.80:8911/api/user/';


//******************* API REQUESTs *******************//

const fetchResponseCreateUser = (value) => fetch( `${urlCreate}`, {...requestOptions(), body: JSON.stringify(value)});
const fetchResponseEditUser = ({user, id}) => fetch( `${urlEdit + id}`, {...requestOptions('PUT'), body: JSON.stringify(user)});
const fetchResponseDeleteUser = (id) => fetch( `${urlDelete + id}`, {...requestOptions('DELETE')});
const fetchUsers = () => fetch( `${urlGet}`, {...requestOptions('GET')});


//******************* SAGAS *******************//

function* createUserSaga (action) {
    const data  = action.payload;
    try {
        const response = yield call(fetchResponseCreateUser, data);
        if(response.status === 200){
            yield put({type: REQUEST_USERS})
        }
        requestUserSaga();
    } catch (e) {
        console.log(e)
    }
}

function* editUserSaga (action) {
    const data  = action.payload;
    try {
        const response = yield call(fetchResponseEditUser, data);
        if(response.status === 200){
            yield put({type: REQUEST_USERS})
        }
    } catch (e) {
        console.log(e)
    }
}

function* requestUserSaga () {
    try {
        const response = yield call(fetchUsers);
        if(response.status === 200){
            const responseParse = yield response.json();
            yield put(requestUsers(responseParse));
        }
    } catch (e) {
        console.log(e)
    }
}

function* deleteUserSaga (action) {
    const id  = action.payload;
    try {
        const response = yield call(fetchResponseDeleteUser, id);
        if(response.status === 200){
            yield put({type: REQUEST_USERS})
        }
    } catch (e) {
        console.log(e)
    }
}

export const sagas = [
    takeLatest(CREATE_USER, createUserSaga),
    takeLatest(EDIT_USER, editUserSaga),
    takeLatest(DELETE_USER, deleteUserSaga),
    takeLatest(REQUEST_USERS, requestUserSaga),
];
