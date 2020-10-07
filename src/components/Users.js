import React from 'react';
import './../App.css';
import { DELETE_USER } from '../redux/actionsTypes';
import { useDispatch } from 'react-redux';
import { EditUserModal } from './EditUserModal';

const Users = ({users}) => {

  const dispatch = useDispatch();

  const deleteUserSaga = (id) => {
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  };

  return (
    <ul className='list-group mb-4'>
      {users.map(user => (
          <li key={user.id} className='list-group-item'>
              <div>{'ID: ' + user.id}</div>
              <div>{'Name: ' + user.name}</div>
              <div>{'Surname: ' + user.surname}</div>
              <div>{'Description: ' + user.desc}</div>
              <EditUserModal
                  id={user.id}
                  currentNameValue={user.name}
                  currentSurnameValue={user.surname}
                  currentDescValue={user.desc}
              />
              <button type="button" className="btn btn-danger mt-3" onClick={() => deleteUserSaga(user.id)}>Delete</button>
          </li>
      ))}
    </ul>
  );
};

export default Users;
