import React from 'react';
import { useParams } from 'react-router-dom';
import useUsers from '../../Hooks/useUsers';
import SingleUsers from '../SingleUsers/SingleUsers';

const UserInfo = () => {
    const {userId}=useParams();
    const allUsers=useUsers(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
    console.log(allUsers[0]);
    return (
        <div className='container py-3'>
            <SingleUsers user={allUsers[0]}> 


            {
                {email:allUsers[0]?.email, phone:allUsers[0]?.phone}
            }
            
            
            
            </SingleUsers>
        </div>
    );
};

export default UserInfo;