import React from 'react';
import Reply from './Reply';

const ReplyMapper = ({ replies }) => {
    return (<div>
        <h3>I'm in the reply Mapper</h3>

        <ul>
            {replies.map((reply, index) => (
                <li key={index}>
                    <Reply reply={reply} />
                </li>
            ))}
        </ul>
    </div>);
}

export default ReplyMapper;