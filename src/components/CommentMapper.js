import React from 'react';
import Comment from './Comment';
import ReplyMapper from './ReplyMapper';
//import Page from './Page';

const CommentMapper = (props) => {
    return (<>
        {/* <h2>I'm in the Comment Mapper</h2> */}
        <ul>

            <li key={props.post._id}>
                <div>
                    <Comment post={props.post} />
                    {/* <ReplyMapper replies={comment.replies} /> */}
                    {/* <Page name={comment.pageName} /> */}
                </div>
            </li>
        </ul>
    </>);
}

export default CommentMapper;


{/* <ReplyMapper replies={comment.replies} /> */ }