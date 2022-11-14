import React from 'react';
import useUsers from '../../Hooks/useUsers';
import SingleUsers from '../SingleUsers/SingleUsers';

const Users = () => {
    const allUsers=useUsers('https://jsonplaceholder.typicode.com/users');

    return (
        <div className='container'>
            <div className="row">
                {
                    allUsers?.map(user=><SingleUsers
                    
                        key={user.id}
                        user={user}
                    
                    ></SingleUsers>)
                }
            </div>
        </div>
    );
};

export default Users;