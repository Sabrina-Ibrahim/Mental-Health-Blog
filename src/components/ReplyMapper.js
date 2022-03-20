import React from 'react';
import Reply from './Reply';

const ReplyMapper = (props) => {
    return (
        <div>

            <p style={{ backgroundColor: "#d2d2d2" }} >I'm in the reply Mapper</p>
            <ul>
                {props.replies.map((reply, index) => (
                    <li key={index}>
                        <div>
                            <Reply reply={reply} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>);
}

export default ReplyMapper;
