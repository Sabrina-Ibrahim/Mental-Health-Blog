import React from 'react';
import CommentMapper from './CommentMapper';

const User = ({ user }) => {
    const { firstName, lastName, email, userName, myPosts } = user
    return (<div>
        <h2>{firstName} {lastName}</h2>
        <div>
            <p>{email}</p>
            <p>{userName}</p>
            <CommentMapper comments={myPosts} />
        </div>
    </div>);
}

export default User;