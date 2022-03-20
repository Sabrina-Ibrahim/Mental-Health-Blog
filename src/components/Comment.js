import React from 'react';


const Comment = (props) => {
    // const { likeCount, replies, pageName, ownedBy, text, posted } = comment
    return (<>
        <p><em>{props.post.text}</em></p>


    </>);
}

export default Comment;