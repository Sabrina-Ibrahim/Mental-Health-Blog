import React from 'react';
import User from './User';

const UserMapper = ({ users }) => {
    return (
        <ul>
            {users.map((user) => (
                <li key={user._id}><User user={user} />
                </li>
            ))}
        </ul>
    );
}

export default UserMapper;

