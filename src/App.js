import React, { useState, useEffect } from 'react';
import Users from './components/Users';
import Pagination from './components/Pagination';
import { CreateUserModal } from './components/CreateUserModal';
import { REQUEST_USERS } from './redux/actionsTypes';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

const App = () => {

    useEffect(() => {
        requestUsersSaga();
    }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

    const users = useSelector(state => state.usersRED.users);

    const dispatch = useDispatch();

    const requestUsersSaga = () => {
        dispatch({
            type: REQUEST_USERS,
        });
    };

  
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Users</h1>
      <CreateUserModal/>
      <Users users={currentUsers}/>
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
