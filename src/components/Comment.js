import React from 'react';


const Comment = ({ comment }) => {
    const { likeCount, replies, pageName, ownedBy, text, posted } = comment
    return (<>
        <p><em>{text}</em></p>


    </>);
}

export default Comment;