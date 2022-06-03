import axios from 'axios';
import React, { useState } from 'react';
import useForm from '../CustomHooks/useForm';

const NewsfeedItem = (props) => {
    const [isReplying, setIsReplying] = useState(false);


    const deleteItem = async () => {
        await axios.delete(`http://localhost:5000/api/comments/${props.post.ownedBy}/myPosts/${props.post._id}`)
        //refresh
    }

    const likeItem = async (userId, postId) => {
        await axios.put(`http://localhost:5000/api/comments/${userId}/myPosts/${postId}/like`)
            .then(res => props.setUsers(res.data)
            )
    }

    const replyButton = async (userId, postId) => {
        await axios.put(`http://localhost:5000/api/comments/${userId}/myPosts/${postId}/reply`, formValues)
            .then(res => props.setUsers(res.data))
    }

    const sendReply = () => {
        replyButton(props.user._id, props.post._id)

    }


    const { formValues, handleChange, handleSubmit } = useForm(sendReply);


    return <div className="newsfeed-item">
        <div className='newsfeed-item__header'>
            <span onClick={deleteItem} className='newsfeed-item__header__delete'>DELETE</span>
        </div>

        {props.post.text}

        <div className="newsfeed-item__footer">
            <span className='newsfeed-item__footer__date'>{props.post.posted}</span>
            <a className='newsfeed-item__footer__reply' onClick={() => { setIsReplying(!isReplying) }}>Reply</a>
            <button onClick={() => { likeItem(props.user._id, props.post._id) }} className='newsfeed-item__footer__like'>&#x2764; {props.post.likeCount}</button>

        </div>

        {
            isReplying && <div>

                <form onSubmit={handleSubmit}>
                    <input value={formValues.text} name='text' onChange={handleChange} />
                    <button id={props.post._id}>Reply</button>
                </form>

            </div>

        }
    </div>
};

export default NewsfeedItem;