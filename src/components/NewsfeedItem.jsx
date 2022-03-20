import axios from 'axios';
import React, { useState } from 'react';

const NewsfeedItem = (props) => {
    const [isReplying, setIsReplying] = useState(false);

    const deleteItem = async () => {
        await axios.delete(`http://localhost:5000/api/comments/${props.post.ownedBy}/myPosts/${props.post._id}`)
        //refresh
    }

    return <div className="newsfeed-item">
        <div className='newsfeed-item__header'>
            <span onClick={deleteItem} className='newsfeed-item__header__delete'>DELETE</span>
        </div>

        {props.post.text}

        <div className="newsfeed-item__footer">
            <span className='newsfeed-item__footer__date'>{props.post.posted}</span>
            <a className='newsfeed-item__footer__reply' onClick={() => { setIsReplying(!isReplying) }}>Reply</a>
            <span className='newsfeed-item__footer__like'>&#x2764;</span>
        </div>

        {
            isReplying && <div>Reply form here</div>
        }
    </div>
};

export default NewsfeedItem;