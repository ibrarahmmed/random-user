import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../../Hooks/useUsers';
import SingleUsers from '../SingleUsers/SingleUsers';

const Home = () => {

    const usersData = useUsers('https://jsonplaceholder.typicode.com/users');

    const size = 4
    const userData = usersData.slice(0, size);

    console.log(userData);



    return (
        <div className='container'>
            <h2>this is home {userData.length}</h2>
            <div className='row'>
                {
                    userData?.map(user => <SingleUsers

                        key={user.id}
                        user={user}

                    ></SingleUsers>)
                }
            </div>
            <div className='d-grid gap-2 col-3 mx-auto'>
                <Link to='/users' className='shadow-lg p-2 mb-4 bg-info rounded btn btn-info text-decoration-none text-center'>Load more...</Link>
            </div>

        </div>
    );
};

export default Home;