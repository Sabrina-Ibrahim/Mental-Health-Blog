import React from 'react';
import Comment from './Comment';
import ReplyMapper from './ReplyMapper';
//import Page from './Page';

const CommentMapper = ({ comments }) => {
    return (<>
        <h2>I'm in the Comment Mapper</h2>
        <ul>
            {comments.map((comment) => (
                <li key={comment._id}>
                    <div>
                        <Comment comment={comment} />
                        <ReplyMapper replies={comment.replies} />
                        {/* <Page name={comment.pageName} /> */}
                    </div>
                </li>
            ))}
        </ul>
    </>);
}

export default CommentMapper;


{/* <ReplyMapper replies={comment.replies} /> */ }